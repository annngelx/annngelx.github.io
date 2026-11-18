import * as THREE from 'three';
import { L } from './ground.js';
import { box, cyl, mesh, group, lathe, lamp, setLamp, hdr, shadows, fuse } from './kit.js';
import { Spring, easeIO, clamp, lerp, smooth, noise1, TAU, celestialTexture } from './util.js';
import { EngravingLaser } from './laser.js';
import { MOODS } from './atmo.js';
import { bindMood } from './mood.js';

const zc = (r, w, seg = 36) => cyl(r, r, w, seg).rotateX(Math.PI / 2);          // cylinder lying along Z (a joint housing)

/** Round gold cap with turned grooves, as on the joints of the arm. Faces +Z. */
function jointCap(r) {
  return lathe([[r, 0], [r * 0.98, 0.01], [r * 0.94, 0.015], [r * 0.8, 0.015], [r * 0.76, 0.04], [r * 0.72, 0.045], [r * 0.56, 0.045], [r * 0.52, 0.025], [r * 0.48, 0.02], [r * 0.25, 0.02], [r * 0.21, 0.045], [r * 0.18, 0.05], [0, 0.05]], 48).rotateX(Math.PI / 2);
}

/**
 * The sculptor: a white-and-gold arm that engraves the marble globe.
 * Joint targets pass through springs, so every move starts gently, overshoots a touch and settles.
 */
class SculptorArm {
  constructor(W) {
    const M = W.mat; this.a = 2.55; this.b = 2.2; this.tool = 0.95; this.hs = 1.95;
    const root = this.root = new THREE.Group();
    root.add(mesh(lathe([[0, 0], [1.3, 0], [1.3, 0.15], [1.14, 0.2], [1.14, 0.38], [0.97, 0.44], [0.97, 0.62], [0.8, 0.7], [0, 0.7]], 56), M.shell));
    for (const [r, y] of [[1.31, 0.075], [1.15, 0.29], [0.98, 0.53]]) root.add(mesh(new THREE.TorusGeometry(r, 0.022, 8, 72).rotateX(Math.PI / 2), M.gold, 0, y, 0));
    const turret = this.turret = new THREE.Group(); root.add(turret);
    turret.add(mesh(cyl(0.6, 0.7, 0.72, 36), M.shell, 0, 1.06, 0), mesh(new THREE.TorusGeometry(0.71, 0.03, 8, 48).rotateX(Math.PI / 2), M.gold, 0, 0.72, 0), mesh(box(0.86, 1.0, 1.02, 0.2), M.shell, 0, 1.62, 0));
    const joint = (parent, r, w) => {
      parent.add(mesh(zc(r, w), M.shell), mesh(zc(r * 1.02, w * 0.14), M.seam));
      for (const s of [-1, 1]) {
        const c = mesh(jointCap(r * 0.86), M.gold, 0, 0, s * w / 2); c.scale.z = s; parent.add(c);
        parent.add(mesh(zc(r * 0.16, 0.06, 20), M.seam, 0, 0, s * (w / 2 + 0.05)), mesh(new THREE.TorusGeometry(r * 0.19, r * 0.012, 6, 40), M.gold, 0, 0, s * (w / 2 + 0.052)));
        // Recessed service fasteners on the machined face, using the joint's existing materials.
        for (let i = 0; i < 6; i++) {
          const a = i / 6 * TAU + Math.PI / 6, x = Math.cos(a) * r * 0.55, y = Math.sin(a) * r * 0.55;
          parent.add(mesh(zc(r * 0.038, 0.012, 12), M.seam, x, y, s * (w / 2 + 0.048)));
          const slot = mesh(box(r * 0.043, r * 0.008, 0.005, 0.002), M.gold, x, y, s * (w / 2 + 0.056)); slot.rotation.z = a; parent.add(slot);
        }
      }
    };
    const link = (parent, len, h0, h1, d) => {
      // a tapered shell with a gold inlay and a dark service slot along it
      const g = box(len + 0.3, h0, d, 0.16); const P = g.attributes.position;
      for (let i = 0; i < P.count; i++) { const k = clamp((P.getX(i) + (len + 0.3) / 2) / (len + 0.3)); P.setY(i, P.getY(i) * lerp(1, h1 / h0, k)); P.setZ(i, P.getZ(i) * lerp(1, 0.86, k)); }
      g.computeVertexNormals();
      parent.add(mesh(g, M.shell, len / 2, 0, 0));
      for (const s of [-1, 1]) parent.add(mesh(box(len * 0.52, h1 * 0.2, 0.03, 0.01), M.gold, len * 0.5, 0, s * (d * 0.465)), mesh(box(len * 0.34, h1 * 0.07, 0.035, 0.01), M.seam, len * 0.5, 0, s * (d * 0.47)));
      parent.add(mesh(box(len * 0.6, 0.03, d * 0.34, 0.01), M.gold, len * 0.5, lerp(h0, h1, 0.5) / 2 + 0.002, 0));
    };
    const sh = this.shoulder = group(0, this.hs, 0); turret.add(sh);
    joint(sh, 0.66, 1.18); link(sh, this.a, 0.62, 0.5, 0.6);
    const el = this.elbow = group(this.a, 0, 0); sh.add(el);
    joint(el, 0.52, 0.98); link(el, this.b, 0.46, 0.34, 0.5);
    el.add(mesh(new THREE.TorusGeometry(0.26, 0.03, 8, 32).rotateY(Math.PI / 2), M.gold, this.b * 0.62, 0, 0));
    const wr = this.wrist = group(this.b, 0, 0); el.add(wr);
    joint(wr, 0.3, 0.6);
    // engraving stylus
    wr.add(mesh(cyl(0.11, 0.13, 0.36, 24).rotateZ(-Math.PI / 2), M.shell, 0.34, 0, 0), mesh(cyl(0.135, 0.135, 0.05, 24).rotateZ(-Math.PI / 2), M.gold, 0.5, 0, 0), mesh(cyl(0.086, 0.105, 0.16, 24).rotateZ(-Math.PI / 2), M.seam, 0.55, 0, 0), mesh(new THREE.ConeGeometry(0.055, 0.36, 24).rotateZ(-Math.PI / 2), M.gold, 0.77, 0, 0), mesh(new THREE.ConeGeometry(0.016, 0.1, 16).rotateZ(-Math.PI / 2), M.shell, 0.9, 0, 0));
    for (const x of [0.54, 0.575, 0.61]) wr.add(mesh(new THREE.TorusGeometry(0.105 - (x - 0.47) * 0.12, 0.006, 6, 24).rotateY(Math.PI / 2), M.gold, x, 0, 0));
    this.tip = lamp(W, 0xffdc91, 0.22, 2.5); this.tip.position.set(this.tool, 0, 0); wr.add(this.tip);
    shadows(root);
    for (const part of [turret, sh, el, wr]) part.userData.moving = true;          // each moving part becomes one mesh per material
    for (const part of [root, turret, sh, el, wr]) fuse(part);
    this.sYaw = new Spring(0, 26, 0.72); this.sR = new Spring(3, 38, 0.7); this.sY = new Spring(3, 38, 0.66); this.sT = new Spring(0, 30, 0.7);
  }
  /** Bring the stylus tip to world point `p`, pointing along `dir` (unit, world). `snap` skips the springs. */
  reach(p, dir, dt, snap = false) {
    const base = this.root.position;
    // keep the tool in the vertical plane through the arm's axis and the target
    const rx = p.x - base.x, rz = p.z - base.z, rl = Math.hypot(rx, rz) || 1, ux = rx / rl, uz = rz / rl;
    const dr = dir.x * ux + dir.z * uz, dl = Math.hypot(dr, dir.y) || 1;                    // tool direction inside that plane
    const wr = rl - dr / dl * this.tool, wy = p.y - base.y - dir.y / dl * this.tool;         // wrist, in (reach, height)
    let yaw = Math.atan2(-uz, ux), tool = Math.atan2(dir.y / dl, dr / dl);
    if (snap) { this.sYaw.x = yaw; this.sR.x = wr; this.sY.x = wy; this.sT.x = tool; this.sYaw.v = this.sR.v = this.sY.v = this.sT.v = 0; }
    yaw = this.sYaw.step(yaw, dt); const r = this.sR.step(wr, dt), y = this.sY.step(wy, dt) - this.hs; tool = this.sT.step(tool, dt);
    const { a, b } = this, d = clamp(Math.hypot(r, y), Math.abs(a - b) + 0.25, a + b - 0.05), phi = Math.atan2(y, r);
    const al = Math.acos(clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1)), E = Math.acos(clamp((a * a + b * b - d * d) / (2 * a * b), -1, 1));
    const t1 = phi + al, t2 = t1 - (Math.PI - E);
    this.turret.rotation.y = yaw; this.shoulder.rotation.z = t1; this.elbow.rotation.z = t2 - t1; this.wrist.rotation.z = tool - t2;
  }
}

/** Gold dust that falls from the stylus while it works. */
class Dust {
  constructor(W, n = 90) {
    this.n = n; this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3); this.life = new Float32Array(n); this.c = new Float32Array(n * 3); this.i = 0; this.rand = W.rand;
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.p, 3)); g.setAttribute('color', new THREE.BufferAttribute(this.c, 3));
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.095, map: W.tex.star, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
    this.points.frustumCulled = false; this.points.renderOrder = 6; W.scene.add(this.points);
  }
  emit(o, k = 1) {
    for (let j = 0; j < k; j++) {
      const i = this.i = (this.i + 1) % this.n, a = this.rand() * TAU, s = 0.15 + this.rand() * 0.55;
      this.p[i * 3] = o.x; this.p[i * 3 + 1] = o.y; this.p[i * 3 + 2] = o.z;
      this.v[i * 3] = Math.cos(a) * s; this.v[i * 3 + 1] = 0.2 + this.rand() * 0.7; this.v[i * 3 + 2] = Math.sin(a) * s; this.life[i] = 1.2 + this.rand() * 1.4;
    }
  }
  update(dt, wx = 0) {
    const { p, v, life, c } = this;
    for (let i = 0; i < this.n; i++) {
      if (life[i] <= 0) { c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = 0; continue; }
      life[i] -= dt; v[i * 3 + 1] -= 1.5 * dt; v[i * 3] += (wx * 0.6 - v[i * 3]) * dt * 0.8;
      p[i * 3] += v[i * 3] * dt; p[i * 3 + 1] += v[i * 3 + 1] * dt; p[i * 3 + 2] += v[i * 3 + 2] * dt;
      const f = clamp(life[i]); c[i * 3] = 2.6 * f; c[i * 3 + 1] = 1.9 * f; c[i * 3 + 2] = 0.8 * f;
    }
    this.points.geometry.attributes.position.needsUpdate = true; this.points.geometry.attributes.color.needsUpdate = true;
  }
}

/** Ring with a flat band section (as armillary rings have), lying in the XY plane. */
const band = (r, w = 0.09, t = 0.022, seg = 96) => {
  const b = Math.min(t * 0.35, w * 0.1), inner = r - t, outer = r + t, lo = -w / 2, hi = w / 2;
  return lathe([[inner + b, lo], [outer - b, lo], [outer, lo + b], [outer, hi - b], [outer - b, hi], [inner + b, hi], [inner, hi - b], [inner, lo + b], [inner + b, lo]], seg).rotateX(Math.PI / 2);
};

/** A small armillary sphere on a stand; its rings turn at different rates. Returns { g, rings }. */
function armillary(W, r = 0.5, withStand = true) {
  const M = W.mat, g = new THREE.Group(), head = group(0, withStand ? r * 2.5 : 0, 0), rings = [];
  if (withStand) g.add(mesh(lathe([[0, 0], [r * 0.62, 0], [r * 0.56, r * 0.1], [r * 0.2, r * 0.26], [r * 0.1, r * 0.7], [r * 0.2, r * 0.82], [r * 0.08, r * 0.95], [r * 0.07, r * 1.36], [r * 0.26, r * 1.5], [0, r * 1.5]], 24), M.gold));
  g.add(head);
  head.add(mesh(band(r * 1.0, r * 0.1, r * 0.02), M.gold), mesh(band(r * 1.0, r * 0.1, r * 0.02).rotateX(Math.PI / 2), M.gold));          // meridian and horizon: the fixed frame
  if (r >= 1) {                 // readable graduation marks only on the large, foreground instrument
    const marks = new THREE.Group();
    for (let i = 0; i < 48; i++) {
      const a = i / 48 * TAU, len = r * (i % 4 === 0 ? 0.048 : 0.022), rr = r * 1.012 - len / 2;
      const tick = mesh(new THREE.BoxGeometry(r * (i % 4 === 0 ? 0.009 : 0.005), len, r * 0.003), M.seam, Math.cos(a) * rr, Math.sin(a) * rr, r * 0.052);
      tick.rotation.z = a - Math.PI / 2; marks.add(tick);
    }
    head.add(marks);
  }
  for (const [k, tilt, sp] of [[0.86, 0.41, 0.5], [0.72, 1.1, -0.8], [0.58, 0.2, 1.3]]) {
    const piv = new THREE.Group(), ring = mesh(band(r * k, r * 0.08, r * 0.018), M.gold); ring.rotation.x = Math.PI / 2 - tilt; piv.add(ring);
    piv.add(mesh(new THREE.SphereGeometry(r * 0.055, 10, 8), M.gold, r * k, 0, 0));
    piv.userData.moving = true; head.add(piv); rings.push({ piv, sp, tilt });
  }
  head.add(mesh(new THREE.SphereGeometry(r * 0.2, 16, 12), M.gold), mesh(cyl(r * 0.012, r * 0.012, r * 2.06, 6), M.gold));
  shadows(g, false, true);    // hanging ornament should not stripe the globe and workspace below
  head.userData.moving = true; fuse(g); fuse(head); rings.forEach(r => fuse(r.piv));
  return { g, head, rings };
}

export function buildInstruments(W) {
  const M = W.mat, D = L.DAIS, G = L.GLOBE, C = L.CROWN;
  const v = (x, y, z) => new THREE.Vector3(x, y, z);

  // ---- the globe on its pedestal ----
  const ped = group(G.x, D.y, G.z);
  ped.add(mesh(lathe([[0, 0], [0.86, 0], [0.86, 0.1], [0.74, 0.16], [0.7, 0.3], [0.4, 0.46], [0.3, 0.72], [0.42, 0.9], [0.3, 1.06], [0.36, 1.2], [0.56, 1.3], [0.62, 1.42], [0.5, 1.5], [0, 1.5]], 44), M.marble));
  for (const [r, y] of [[0.87, 0.05], [0.31, 0.72], [0.63, 1.42]]) ped.add(mesh(new THREE.TorusGeometry(r, 0.02, 8, 48).rotateX(Math.PI / 2), M.gold, 0, y, 0));
  shadows(ped); W.scene.add(fuse(ped));
  const globe = group(G.x, G.y, G.z); W.scene.add(globe);
  const stone = mesh(new THREE.SphereGeometry(G.r, 72, 48), new THREE.MeshStandardMaterial({ color: 0xffffff, map: celestialTexture(W.rand), roughness: 0.44, roughnessMap: M.marble.roughnessMap, metalness: 0, envMap: W.env, envMapIntensity: 0.42 * W.mood.env }));
  bindMood(W, stone.material, 'envMapIntensity', 0.42 * MOODS.day.env, 0.42 * MOODS.night.env);
  stone.castShadow = stone.receiveShadow = true; globe.add(stone);
  // the ring around it, tilted like a planet's
  const halo = group(G.x, G.y, G.z, mesh(band(G.r * 1.36, 0.16, 0.02, 160).rotateX(Math.PI / 2), M.gold), mesh(new THREE.TorusGeometry(G.r * 1.36, 0.035, 8, 160).rotateX(Math.PI / 2), M.gold, 0, 0.09, 0), mesh(new THREE.TorusGeometry(G.r * 1.36, 0.035, 8, 160).rotateX(Math.PI / 2), M.gold, 0, -0.09, 0));
  const haloRest = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(-0.258, 0.927, 0.273).normalize()), haloQ = new THREE.Quaternion(), haloE = new THREE.Euler();
  halo.quaternion.copy(haloRest); shadows(halo); W.scene.add(fuse(halo));

  // engraved marks ride on the globe: stars and the lines between them
  const NS = 56, NL = 48;
  const markMat = (map) => new THREE.MeshBasicMaterial({ map, color: 0xffffff, depthWrite: false, transparent: true, fog: false, side: THREE.DoubleSide });
  const lineGeometry = new THREE.PlaneGeometry(1, 1, 12, 1).translate(0.5, 0, 0);
  for (let i = 0; i < lineGeometry.attributes.position.count; i++) {
    const x = lineGeometry.attributes.position.getX(i);
    lineGeometry.attributes.position.setZ(i, 4 * x * (1 - x));
  }
  lineGeometry.computeVertexNormals();
  const stars = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), markMat(W.tex.star), NS), lines = new THREE.InstancedMesh(lineGeometry, markMat(null), NL);
  const sData = [], lData = [], m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), zAxis = v(0, 0, 1), col = new THREE.Color();
  const inlay = new THREE.Color(0xc88f2c), fresh = hdr(0xffcf70, 3.6), bare = new THREE.Color(0xf4f1ea);      // settled gold, just-cut glow, untouched marble
  const mood = { inlay, fresh, light: 0, flare: 0.8 };
  bindMood(W, mood, 'inlay', 0xc88f2c, 0xf0c060);
  bindMood(W, mood, 'fresh', hdr(0xffcf70, 3.6), hdr(0xffcf70, 2.8));
  for (let i = 0; i < NS; i++) { stars.setMatrixAt(i, m4.makeScale(0, 0, 0)); stars.setColorAt(i, col.set(0)); sData.push({ t: -1e3, gone: true }); }
  for (let i = 0; i < NL; i++) { lines.setMatrixAt(i, m4.makeScale(0, 0, 0)); lines.setColorAt(i, col.set(0)); lData.push({ t: -1e3, gone: true }); }
  stars.frustumCulled = lines.frustumCulled = false; stars.renderOrder = lines.renderOrder = 5; globe.add(stars, lines);
  let si = 0, li = 0;
  const zero = new THREE.Matrix4().makeScale(0, 0, 0);
  const setStar = (i, pLocal, size) => { sData[i].gone = false; q.setFromUnitVectors(zAxis, sc.copy(pLocal).normalize()); m4.compose(sc.copy(pLocal).multiplyScalar(1.012), q, v(size, size, size)); stars.setMatrixAt(i, m4); stars.instanceMatrix.needsUpdate = true; };
  const mx = new THREE.Matrix4(), ax = v(), ay = v(), az = v();
  const setLine = (i, a, b, k) => {           // a strip from a toward b on the surface, k of the way drawn
    lData[i].gone = false;
    az.copy(a).add(b).normalize(); ax.subVectors(b, a); const len = ax.length() * k * 1.01; ax.normalize(); ay.crossVectors(az, ax).normalize();
    // A shallow outward bow keeps the strip above the spherical surface while
    // both endpoints remain on their exact, shared engraved vertices.
    const radius = (a.length() + b.length()) * 0.505;
    const rise = radius - Math.sqrt(Math.max(0, radius * radius - len * len * 0.25));
    az.multiplyScalar(Math.max(rise, 1e-6));
    mx.makeBasis(ax.clone().multiplyScalar(Math.max(len, 1e-4)), ay.clone().multiplyScalar(0.02), az); mx.setPosition(a.x * 1.01, a.y * 1.01, a.z * 1.01);
    lines.setMatrixAt(i, mx); lines.instanceMatrix.needsUpdate = true;
  };

  // ---- the arm ----
  const arm = new SculptorArm(W); arm.root.position.set(L.ARM.x, D.y, L.ARM.z); W.scene.add(arm.root);
  const dust = new Dust(W);
  const laser = new EngravingLaser(W); W.engravingLaser = laser;

  // ---- the crown: a large armillary hanging under the dome ----
  const crown = group(C.x, C.y, C.z); W.scene.add(crown);
  const A = armillary(W, C.r, false); crown.add(A.g);
  const core = mesh(new THREE.SphereGeometry(C.r * 0.2, 24, 16), new THREE.MeshBasicMaterial({ color: hdr(0xffe6b0, 2.2) })); core.userData.keep = true; crown.add(core);       // at night a soft ember, so the rings stay readable around it
  bindMood(W, core.material, 'color', hdr(0xffe6b0, 2.2), hdr(0xffe6b0, 1.5));
  const coreGlow = lamp(W, 0xffd9a0, C.r * 3.0, 0.6); crown.add(coreGlow);
  bindMood(W, coreGlow.userData, 'base', hdr(0xffd9a0, 0.6), hdr(0xffd9a0, 0.26));
  bindMood(W, coreGlow, 'scale', [C.r * 3, C.r * 3, C.r * 3], [C.r * 1.5, C.r * 1.5, C.r * 1.5]);
  const eyeY = W.dome.eyeY, chain = eyeY - (C.y + C.r), chord = Math.sqrt(Math.max(1, W.dome.eyeR ** 2 - C.z ** 2));
  W.scene.add(mesh(cyl(0.07, 0.07, chord * 2, 8).rotateZ(Math.PI / 2), M.gold, 0, eyeY, C.z));
  crown.add(mesh(cyl(0.022, 0.022, chain, 6), M.gold, 0, C.r + chain / 2, 0), mesh(lathe([[0, C.r - 0.02], [0.16, C.r + 0.06], [0.06, C.r + 0.26], [0.1, C.r + 0.34], [0, C.r + 0.5]], 16), M.gold));
  bindMood(W, mood, 'light', 0, 20);
  bindMood(W, mood, 'flare', 0.8, 0.3);          // how much the passing fighters brighten it
  const coreLight = new THREE.PointLight(0xffd6a0, mood.light, 30, 1.8); coreLight.position.copy(crown.position); W.scene.add(coreLight);
  fuse(crown);
  W.rings = { pos: crown.position.clone(), pulse: 0 };
  let crownPulse = 0;       // retain the last displayed fighter response when motion is frozen
  const lightMarks = (t) => {
    for (let i = 0; i < NS; i++) { const a = t - sData[i].t; stars.setColorAt(i, col.copy(inlay).lerp(fresh, Math.exp(-Math.max(a, 0) * 1.6)).lerp(bare, smooth(70, 84, a))); }
    for (let i = 0; i < NL; i++) { const a = t - lData[i].t; lines.setColorAt(i, col.copy(inlay).lerp(fresh, 0.7 * Math.exp(-Math.max(a, 0) * 1.6)).lerp(bare, smooth(70, 84, a))); }
    stars.instanceColor.needsUpdate = lines.instanceColor.needsUpdate = true;
  };
  const lightCrown = (t) => {
    const glow = 0.9 + 0.1 * Math.sin(t * 1.3) + crownPulse * mood.flare;
    setLamp(coreGlow, glow); coreLight.intensity = mood.light * glow;
  };
  const refreshLighting = () => { lightMarks(W.uTime.value); lightCrown(W.uTime.value); };
  W.moodBindings.push(refreshLighting); refreshLighting();

  // ---- smaller instruments standing about ----
  const small = [];
  const stand = (x, z, r, y = D.y, ry = 0) => { const a = armillary(W, r); a.g.position.set(x, y, z); a.g.rotation.y = ry; W.scene.add(a.g); small.push(a); return a; };
  stand(-3.9, -1.9, 0.42, D.y, 0.4); stand(3.75, -2.4, 0.36, D.y, 1.1); stand(-0.7, -3.75, 0.5, D.y, 2.0); stand(0.6, 8.3, 0.3, 0.2, 0.7);
  for (const i of [7, 8, 10, 11]) { const a = i * TAU / L.ROTUNDA.bays, r = L.WALK.r0 + 0.95; stand(Math.sin(a) * r, Math.cos(a) * r, 0.62, L.WALK.y, a); }      // in the arch openings, against the view

  // ---- what the arm draws: little constellations, as points around a centre on the working face of the globe ----
  const SHAPES = [
    [[-0.26, 0.2], [-0.08, 0.3], [0.1, 0.16], [0.3, 0.26], [0.22, -0.02], [0.02, -0.12], [-0.2, -0.04]],
    [[-0.3, -0.1], [-0.12, 0.08], [0.04, 0.02], [0.2, 0.2], [0.34, 0.1]],
    [[0, 0.32], [-0.2, 0.08], [0, -0.16], [0.2, 0.08], [0, 0.32]],
    [[-0.32, 0.14], [-0.16, -0.06], [0.02, 0.12], [0.18, -0.08], [0.34, 0.12]],
    [[-0.22, 0.28], [-0.24, 0.0], [-0.02, -0.14], [0.2, -0.02], [0.24, 0.26], [0.0, 0.1]],
  ];
  const work = v(-0.62, 0.42, 0.66).normalize(), wu = v(0, 1, 0), wr = v().crossVectors(wu, work).normalize(), wv = v().crossVectors(work, wr);      // centre of the working face, and its right/up
  const centre = v(G.x, G.y, G.z), restTip = v(G.x - 2.15, G.y + 1.25, G.z + 1.05), restDir = v(0.75, -0.55, -0.35).normalize();
  const surf = (uv, lift, out) => { out.copy(work).addScaledVector(wr, uv[0]).addScaledVector(wv, uv[1]).normalize(); return out.multiplyScalar(G.r + lift); };   // point above the globe, globe-centred
  const tgt = v(), dirv = v(), pa = v(), pb = v(), tipW = v(), inv = new THREE.Quaternion();
  const toLocal = (p, out) => out.copy(p).applyQuaternion(inv.copy(globe.quaternion).invert());
  // timeline of one constellation, in seconds
  const T_IN = 1.5, T_TAP = 0.5, T_DRAW = 1.15, T_OUT = 1.4, T_TURN = 2.6;
  const LASER_GAP = 0.12;     // visible stand-off between the nozzle and the engraved stone
  let k = 0, t0 = 0, spin = 0, spinFrom = 0, drew = -1, first = true;
  const engravedPoints = [], contactLocal = v();
  let pendingStar = null;
  const turn = new Spring(0, 9, 0.8), flare = new Spring(0, 30, 0.5), wobX = new Spring(0, 18, 0.2), wobZ = new Spring(0, 18, 0.2);

  W.updaters.push((t, dt) => {
    const shape = SHAPES[k % SHAPES.length], n = shape.length, tDraw = T_IN + n * T_TAP + (n - 1) * T_DRAW, total = tDraw + T_OUT + T_TURN, lt = t - t0;
    let press = 0, pendingLine = null;
    if (lt < T_IN) {                                              // glide in over the first star
      const e = easeIO(lt / T_IN); surf(shape[0], lerp(0.5, 0.16 + LASER_GAP, e), pa); tgt.copy(restTip).sub(centre).lerp(pa, e).add(centre);
      dirv.copy(restDir).lerp(sc.copy(pa).normalize().negate(), e).normalize();
    } else if (lt < tDraw) {
      const s = lt - T_IN, seg = T_TAP + T_DRAW, i = Math.min(n - 1, Math.floor(s / seg)), u = s - i * seg;
      if (u < T_TAP || i === n - 1) {                             // press: the star appears
        const e = Math.sin(clamp(u / T_TAP) * Math.PI); press = e; surf(shape[i], LASER_GAP + lerp(0.16, 0.0, e), pa);
        if (u > T_TAP * 0.5 && drew < i) { drew = i; const id = si++ % NS; pendingStar = { id, point: i, size: 0.17 + (i % 3) * 0.04 }; sData[id].t = t; flare.v += 6; wobX.v += (W.rand() - 0.5) * 0.5; wobZ.v += (W.rand() - 0.5) * 0.5; }
      } else {                                                    // drag to the next star: the line follows the stylus
        const e = easeIO((u - T_TAP) / T_DRAW); press = 0.55;
        pa.copy(surf(shape[i], 0, pa)).lerp(surf(shape[i + 1], 0, pb), e).normalize().multiplyScalar(G.r + 0.01);
        const id = (li + i) % NL; pendingLine = { id, point: i }; lData[id].t = t;
        pa.addScaledVector(sc.copy(pa).normalize(), LASER_GAP);
      }
      tgt.copy(pa).add(centre); dirv.copy(pa).normalize().negate();
    } else if (lt < tDraw + T_OUT) {                              // lift away
      const e = easeIO((lt - tDraw) / T_OUT); surf(shape[n - 1], lerp(LASER_GAP, 0.5, e), pa); tgt.copy(pa).lerp(sc.copy(restTip).sub(centre), e).add(centre);
      dirv.copy(pa).normalize().negate().lerp(restDir, e).normalize();
    } else {                                                      // the globe turns the finished work toward the room
      tgt.copy(restTip); dirv.copy(restDir);
      if (lt >= total) { t0 = t; k++; li += n - 1; drew = -1; spinFrom = spin; engravedPoints.length = 0; pendingStar = null; }
      else spin = spinFrom + easeIO((lt - tDraw - T_OUT) / T_TURN) * 0.95;
    }
    globe.rotation.y = turn.step(spin, dt);
    arm.reach(tgt, dirv, dt, first); first = false;
    arm.root.updateMatrixWorld(true); arm.tip.getWorldPosition(tipW);
    const fl = flare.step(press, dt); setLamp(arm.tip, 0.12 + fl * 0.45 + (press > 0 ? 0.08 * Math.abs(noise1(t * 30, 3)) : 0));
    laser.update(tipW, arm.wrist, centre, G.r, press, t);
    if (laser.active) {
      // The ray follows the spring-driven arm, so commit marks only after its
      // actual hit is known. Store globe-local vertices so finished cuts turn
      // with the stone and neighboring strokes share the same engraved star.
      toLocal(contactLocal.copy(laser.contact).sub(centre), contactLocal);
      if (pendingStar) {
        const { id, point, size } = pendingStar;
        engravedPoints[point] = contactLocal.clone();
        setStar(id, contactLocal, size);
        if (point > 0 && engravedPoints[point - 1]) setLine((li + point - 1) % NL, engravedPoints[point - 1], contactLocal, 1);
        pendingStar = null;
      }
      if (pendingLine && engravedPoints[pendingLine.point]) setLine(pendingLine.id, engravedPoints[pendingLine.point], contactLocal, 1);
    }
    if (press > 0.3 && (W.frame++ % 2 === 0)) dust.emit(laser.active ? laser.contact : tipW, 1);
    dust.update(dt, 0.6 + W.uGust.value);
    // marks glow when new, settle to a steady gold, and fade after a few turns
    lightMarks(t);
    for (let i = 0; i < NS; i++) if (!sData[i].gone && t - sData[i].t > 85) { sData[i].gone = true; stars.setMatrixAt(i, zero); stars.instanceMatrix.needsUpdate = true; }
    for (let i = 0; i < NL; i++) if (!lData[i].gone && t - lData[i].t > 85) { lData[i].gone = true; lines.setMatrixAt(i, zero); lines.instanceMatrix.needsUpdate = true; }
    halo.quaternion.copy(haloRest).multiply(haloQ.setFromEuler(haloE.set(wobX.step(0, dt), 0, wobZ.step(0, dt))));       // it rings a little each time a star is struck

    // crown and small instruments: every ring keeps its own slow time; passing ships set the crown spinning
    W.rings.pulse = Math.max(0, W.rings.pulse - dt * 0.4); const p = W.rings.pulse, speed = 1 + p * 5;
    A.rings.forEach((r, i) => { r.piv.rotation.y += dt * r.sp * 0.22 * speed; r.piv.rotation.x = Math.sin(t * 0.11 + i) * 0.08; });
    A.head.rotation.y = t * 0.03; crown.position.y = C.y + Math.sin(t * 0.5) * 0.05; crown.rotation.z = Math.sin(t * 0.37) * 0.015;
    crownPulse = p; lightCrown(t); core.scale.setScalar(1 + 0.04 * Math.sin(t * 1.3) + p * 0.12);
    small.forEach((s, j) => s.rings.forEach((r, i) => { r.piv.rotation.y += dt * r.sp * (0.3 + j * 0.05); }));
  });
}
