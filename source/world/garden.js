import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { L, STONES } from './ground.js';
import { box, cyl, mesh, group, lathe, lamp, setLamp, hdr, shadows, fuse } from './kit.js';
import { fbm, ridged, smooth, lerp, TAU } from './util.js';
import { buildWoodland, buildWaterfalls, cliffMaterial } from './landscape.js';
import { MOODS } from './atmo.js';
import { bindMood } from './mood.js';

const place = (inst, i, m4, x, y, z, ry = 0, s = 1) => { m4.makeRotationY(ry); m4.scale(new THREE.Vector3(s, s, s)); m4.setPosition(x, y, z); inst.setMatrixAt(i, m4); };

/** The round platform in the middle of the pool, and stepping stones leading to it. */
export function buildDais(W) {
  const M = W.mat, D = L.DAIS, g = group(D.x, 0, D.z);
  // three shallow steps rising out of the water
  for (const [r, top, h] of [[D.r + 1.25, 0.18, 0.9], [D.r + 0.62, 0.37, 0.5], [D.r, D.y, 0.5]]) g.add(mesh(cyl(r, r, h, 96), M.marble, 0, top - h / 2, 0));
  const ring = (r, t, y) => mesh(new THREE.TorusGeometry(r, t, 8, 128).rotateX(Math.PI / 2), M.gold, 0, y, 0);
  g.add(ring(D.r - 0.22, 0.028, D.y + 0.006), ring(D.r - 0.42, 0.012, D.y + 0.004), ring(2.3, 0.02, D.y + 0.005), ring(D.r + 0.62 - 0.12, 0.02, 0.376), ring(D.r + 1.25 - 0.12, 0.02, 0.186));
  // a compass rose inlaid in gold under the machines
  const star = new THREE.Shape(); for (let i = 0; i < 16; i++) { const a = i / 16 * TAU, r = i % 2 ? 0.34 : (i % 4 ? 1.35 : 2.2); star[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); } star.closePath();
  const inlay = mesh(new THREE.ShapeGeometry(star).rotateX(-Math.PI / 2), M.goldSoft, 0, D.y + 0.004, 0); inlay.rotation.y = 0.2; g.add(inlay);
  shadows(g, false, true); W.scene.add(fuse(g));

  // stepping stones; the cat's is the tall one
  const all = new THREE.Group(); W.scene.add(all);
  for (const [x, z, r, top] of STONES) {
    const s = group(x, 0, z, mesh(cyl(r, r * 1.04, top + 0.5, 48), M.marble, 0, top - (top + 0.5) / 2, 0), mesh(new THREE.TorusGeometry(r - 0.07, 0.014, 6, 64).rotateX(Math.PI / 2), M.gold, 0, top + 0.004, 0));
    if (top > 0.5) s.add(mesh(cyl(r + 0.12, r + 0.16, 0.16, 48), M.marble, 0, 0.06, 0), mesh(new THREE.TorusGeometry(r + 0.01, 0.03, 8, 64).rotateX(Math.PI / 2), M.gold, 0, top - 0.09, 0));
    shadows(s); all.add(s);
  }
  fuse(all);
}

/** Ring of columns and arches around the pool, the cornice above them and the glass dome. */
export function buildRotunda(W) {
  const M = W.mat, R = L.ROTUNDA.r, N = L.ROTUNDA.bays, step = TAU / N, half = step / 2, m4 = new THREE.Matrix4();
  const y0 = L.WALK.y, shaftH = 6.0, capY = y0 + 0.42 + shaftH, spring = capY + 0.62, wallTop = spring + 3.85, ra = 2.75;
  // walkway
  // lathe profiles run anticlockwise round the solid (outer side up, top inward, inner side down), so the faces look outward
  const walk = mesh(lathe([[L.WALK.r1, -0.8], [L.WALK.r1, y0 - 0.06], [L.WALK.r1 - 0.08, y0], [L.WALK.r0 + 0.08, y0], [L.WALK.r0, y0 - 0.06], [L.WALK.r0, -0.8]], 144), M.marble);
  walk.receiveShadow = true; W.scene.add(walk);
  W.scene.add(mesh(new THREE.TorusGeometry(L.WALK.r0 + 0.2, 0.025, 6, 180).rotateX(Math.PI / 2), M.gold, 0, y0 + 0.005, 0));
  // columns: base and capital turned on a lathe, fluted shaft between
  const baseCap = mergeGeometries([
    lathe([[0, 0], [0.74, 0], [0.74, 0.14], [0.62, 0.2], [0.66, 0.3], [0.55, 0.42], [0, 0.42]], 28),
    lathe([[0, capY - y0], [0.44, capY - y0], [0.5, capY - y0 + 0.1], [0.46, capY - y0 + 0.18], [0.62, capY - y0 + 0.4], [0.74, capY - y0 + 0.46], [0.74, capY - y0 + 0.62], [0, capY - y0 + 0.62]], 28),
  ]);
  const shaft = cyl(0.43, 0.5, shaftH, 28, true); shaft.translate(0, 0.42 + shaftH / 2, 0);
  const bands = mergeGeometries([new THREE.TorusGeometry(0.52, 0.035, 6, 22).rotateX(Math.PI / 2).translate(0, 0.46, 0), new THREE.TorusGeometry(0.455, 0.03, 6, 22).rotateX(Math.PI / 2).translate(0, capY - y0 - 0.02, 0), new THREE.TorusGeometry(0.75, 0.022, 5, 22).rotateX(Math.PI / 2).translate(0, capY - y0 + 0.54, 0)]);
  const iBase = new THREE.InstancedMesh(baseCap, M.marble, N), iShaft = new THREE.InstancedMesh(shaft, M.marbleFlute, N), iBand = new THREE.InstancedMesh(bands, M.gold, N);
  // arches: one flat bay per pair of columns, with a gold trim along the opening
  const chord = 2 * R * Math.sin(half), rc = R * Math.cos(half);
  const s = new THREE.Shape(); s.moveTo(-chord / 2, spring); s.lineTo(-ra, spring); s.absarc(0, spring, ra, Math.PI, 0, true); s.lineTo(chord / 2, spring); s.lineTo(chord / 2, wallTop); s.lineTo(-chord / 2, wallTop); s.closePath();
  const bay = new THREE.ExtrudeGeometry(s, { depth: 0.9, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2, curveSegments: 28 }); bay.translate(0, 0, -0.45);
  const trim = mergeGeometries([new THREE.TorusGeometry(ra + 0.02, 0.05, 6, 28, Math.PI).translate(0, spring, 0.5), new THREE.TorusGeometry(ra + 0.02, 0.05, 6, 28, Math.PI).translate(0, spring, -0.5), new THREE.TorusGeometry(ra + 0.36, 0.02, 5, 28, Math.PI).translate(0, spring, -0.5)]);
  const key = mergeGeometries([box(0.42, 0.7, 1.06, 0.06).translate(0, spring + ra + 0.26, 0), new THREE.OctahedronGeometry(0.2).scale(1, 1.5, 0.5).translate(0, spring + ra + 0.95, -0.5)]);
  const iBay = new THREE.InstancedMesh(bay, M.marbleWall, N), iTrim = new THREE.InstancedMesh(trim, M.gold, N), iKey = new THREE.InstancedMesh(key, M.gold, N);
  for (let i = 0; i < N; i++) {
    const a = (i + 0.5) * step;                              // columns sit half a bay off the axis, so an arch faces the camera
    for (const inst of [iBase, iShaft, iBand]) place(inst, i, m4, Math.sin(a) * R, y0, Math.cos(a) * R, a);
    const b = i * step;
    for (const inst of [iBay, iTrim, iKey]) place(inst, i, m4, Math.sin(b) * rc, 0, Math.cos(b) * rc, b);
  }
  for (const inst of [iBase, iShaft, iBand, iBay, iTrim, iKey]) { inst.castShadow = inst === iBase || inst === iShaft || inst === iBay || inst === iKey; inst.receiveShadow = true; inst.frustumCulled = false; W.scene.add(inst); }
  // cornice
  const t = wallTop;
  W.scene.add(shadows(mesh(lathe([[R + 0.72, t], [R + 0.72, t + 0.34], [R + 0.92, t + 0.44], [R + 0.92, t + 0.9], [R + 1.2, t + 1.04], [R + 1.2, t + 1.3], [R - 1.2, t + 1.3], [R - 1.2, t + 1.04], [R - 0.92, t + 0.9], [R - 0.92, t + 0.44], [R - 0.72, t + 0.34], [R - 0.72, t]], 180), M.marbleCornice)));
  for (const [r, y, tube] of [[R - 0.93, t + 0.67, 0.04], [R - 1.21, t + 1.17, 0.03], [R - 0.73, t + 0.06, 0.025]]) W.scene.add(mesh(new THREE.TorusGeometry(r, tube, 6, 220).rotateX(Math.PI / 2), M.gold, 0, y, 0));
  // dome: ribs up to an open ring, glass between them
  const domeY = t + 1.3, eyeR = 4.4, eyeY = domeY + 10.6;
  const curve = (u) => new THREE.Vector3(eyeR + (R - eyeR) * Math.cos(u * Math.PI / 2), domeY + (eyeY - domeY) * Math.sin(u * Math.PI / 2), 0);
  class Rib extends THREE.Curve { getPoint(u, o = new THREE.Vector3()) { return o.copy(curve(u)); } }
  const rib = new THREE.TubeGeometry(new Rib(), 28, 0.1, 5, false);
  const iRib = new THREE.InstancedMesh(rib, M.marble, N * 2);
  for (let i = 0; i < N * 2; i++) { m4.makeRotationY(-(i + 0.5) * step / 2 + Math.PI / 2); iRib.setMatrixAt(i, m4); }
  // Fine overhead ribs remain visible without drawing a busy shadow grid over the workstation.
  iRib.frustumCulled = false; iRib.receiveShadow = true; W.scene.add(iRib);
  for (const u of [0.26, 0.5, 0.72, 0.9]) { const p = curve(u); W.scene.add(shadows(mesh(new THREE.TorusGeometry(p.x, 0.07, 6, 160).rotateX(Math.PI / 2), M.marble, 0, p.y, 0), false, true)); }
  W.scene.add(mesh(new THREE.TorusGeometry(eyeR, 0.2, 10, 96).rotateX(Math.PI / 2), M.gold, 0, eyeY, 0), mesh(new THREE.TorusGeometry(R - 0.1, 0.09, 8, 200).rotateX(Math.PI / 2), M.gold, 0, domeY + 0.05, 0));
  const pts = []; for (let i = 0; i <= 24; i++) { const p = curve(i / 24); pts.push([p.x, p.y]); }
  const glass = mesh(lathe(pts, 96), M.glass); glass.renderOrder = 2; W.scene.add(glass);
  // lantern posts between the columns
  const posts = [], lanterns = new THREE.Group(); W.scene.add(lanterns);
  for (let i = 0; i < N; i += 2) {
    const a = i * step, x = Math.sin(a) * (L.WALK.r0 + 0.55), z = Math.cos(a) * (L.WALK.r0 + 0.55);
    const p = group(x, y0, z, mesh(lathe([[0, 0], [0.24, 0], [0.2, 0.08], [0.07, 0.2], [0.05, 1.5], [0.1, 1.62], [0.04, 1.7], [0, 1.7]], 14), M.gold), mesh(new THREE.SphereGeometry(0.17, 14, 10), M.glass, 0, 1.92, 0), mesh(new THREE.SphereGeometry(0.075, 10, 8), M.glowWarm, 0, 1.92, 0), mesh(lathe([[0.2, 1.72], [0.05, 2.18], [0, 2.3]], 12), M.gold));
    const l = lamp(W, 0xffc070, 1.5, 3.2); l.position.y = 1.92; p.add(l); posts.push(l); lanterns.add(p);
  }
  fuse(lanterns);
  const lightMood = { lamps: MOODS.day.lamps };
  bindMood(W, lightMood, 'lamps', MOODS.day.lamps, MOODS.night.lamps);
  const lightPosts = (time) => posts.forEach((l, i) => setLamp(l, lightMood.lamps * (0.85 + 0.15 * Math.sin(time * 2.3 + i * 1.7))));
  W.updaters.push(lightPosts);
  W.moodBindings.push(() => lightPosts(W.uTime.value)); lightPosts(W.uTime.value);
  return { capY: capY, wallTop, domeY, eyeY, eyeR, spring, ra, curve };
}

/** Far ring of mountains with snow, fading into the haze. */
export function buildMountains(W) {
  const SA = 280, SR = 36, pos = [], col = [], idx = [], c = new THREE.Color();
  const snow = new THREE.Color(0xf6f8fc), rock = new THREE.Color(0x7c8696), green = new THREE.Color(0x5f7f55), shore = new THREE.Color(0x9aa88a);
  for (let j = 0; j <= SR; j++) for (let i = 0; i <= SA; i++) {
    const a = i / SA * TAU, r = 420 + Math.pow(j / SR, 1.4) * 2400, x = Math.sin(a) * r, z = Math.cos(a) * r;
    const env = smooth(420, 1900, r) * (0.6 + 0.4 * Math.sin(a * 3 + 1.2) * Math.sin(a * 1.3)) * smooth(2820, 2300, r);
    const gap = 0.35 + 0.65 * smooth(0.0, 0.5, Math.abs(Math.sin((a - Math.PI) * 0.5 - 0.02)));          // a lower saddle straight ahead, where the eye goes
    const h = -3 + smooth(420, 560, r) * 12 + env * gap * (30 + 300 * ridged(x * 0.0011 + 3.1, z * 0.0011 + 7.7, 5));
    pos.push(x, h, z);
    c.copy(shore).lerp(green, smooth(4, 40, h)).lerp(rock, smooth(40, 110, h + fbm(x * 0.01, z * 0.01, 2) * 40)).lerp(snow, smooth(120, 200, h + fbm(x * 0.006, z * 0.006, 2) * 60));
    col.push(c.r, c.g, c.b);
  }
  for (let j = 0; j < SR; j++) for (let i = 0; i < SA; i++) { const a = j * (SA + 1) + i, b = a + 1, d = a + SA + 1, e = d + 1; idx.push(a, d, b, b, d, e); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals();
  const m = mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true })); m.frustumCulled = false; W.scene.add(m);
}

/** A green cliff with a marble terrace, a round temple and three waterfalls, seen through the arches on the right. */
export function buildFalls(W) {
  const M = W.mat, F = L.FALLS, g = group(F.x, 0, F.z), m4 = new THREE.Matrix4(); g.rotation.y = -0.5; W.scene.add(g);
  const TOP = 15;
  // the cliff: flat terrace at the front, wooded hill rising behind, falling away at both ends
  const X0 = -30, X1 = 48, Z0 = -64, Z1 = 8, NX = 64, NZ = 58, pos = [], idx = [];
  const side = (x) => smooth(-27, -14, x) * smooth(45, 30, x);
  const height = (x, z) => {
    const back = smooth(-14, -52, z) * (5 + 11 * fbm(x * 0.03 + 2, z * 0.03 + 5, 3)) * smooth(Z0, Z0 + 14, z);
    const face = smooth(4.4, -1.0, z + (fbm(x * 0.09, z * 0.09 + 3, 3) - 0.5) * 2.4 + Math.sin(x * 0.21) * 0.7);
    return (TOP + back) * face * side(x) - 0.8 * (1 - face * side(x));
  };
  for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) { const x = lerp(X0, X1, i / NX), z = lerp(Z0, Z1, j / NZ); pos.push(x, height(x, z), z); }
  for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) { const p = j * (NX + 1) + i, q = p + 1, r = p + NX + 1, t = r + 1; idx.push(p, r, q, q, r, t); }
  const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); cg.setIndex(idx); cg.computeVertexNormals();
  const col = [], c = new THREE.Color(), rockA = new THREE.Color(0x545951), rockB = new THREE.Color(0xa29b8b), moss = new THREE.Color(0x4e6b49), grass = new THREE.Color(0x7a8f55), N = cg.attributes.normal;
  for (let i = 0; i < N.count; i++) {
    const x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2], flat = smooth(0.55, 0.88, N.getY(i));
    c.copy(rockA).lerp(rockB, fbm(x * 0.2, y * 0.35 + z * 0.2, 3)).lerp(moss, smooth(0.42, 0.62, fbm(x * 0.16 + 4, y * 0.2 + z * 0.16, 3)) * 0.32).lerp(c.clone().copy(moss).lerp(grass, fbm(x * 0.07, z * 0.07, 2)), flat);
    col.push(c.r, c.g, c.b);
  }
  cg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const cliff = mesh(cg, cliffMaterial(W)); cliff.userData.keep = true; g.add(cliff);
  buildWoodland(W, g, height, side);
  // marble terrace, balustrade and spouts
  g.add(mesh(box(47, 0.6, 13, 0.15), M.marble, 8, TOP + 0.1, -7.6), mesh(box(46, 0.2, 0.34, 0.08), M.marble, 8, TOP + 1.3, -1.5));
  const NB = 42, posts = new THREE.InstancedMesh(lathe([[0, 0], [0.16, 0], [0.13, 0.12], [0.07, 0.3], [0.13, 0.62], [0.07, 0.9], [0.14, 1.0], [0, 1.0]], 8), M.marble, NB);
  for (let i = 0; i < NB; i++) { m4.makeTranslation(-14.6 + i * (45.2 / (NB - 1)), TOP + 0.3, -1.5); posts.setMatrixAt(i, m4); }
  g.add(posts);
  // round temple at the end of the terrace
  const tp = group(20, TOP + 0.4, -8);
  for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; tp.add(mesh(cyl(0.4, 0.46, 6.4, 12), M.marbleFlute, Math.cos(a) * 4.6, 3.2, Math.sin(a) * 4.6)); }
  tp.add(mesh(cyl(5.4, 5.6, 0.8, 32), M.marble, 0, 6.8, 0), mesh(new THREE.SphereGeometry(5.0, 28, 12, 0, TAU, 0, Math.PI / 2), M.marble, 0, 7.2, 0), mesh(new THREE.SphereGeometry(0.55, 12, 10), M.gold, 0, 12.5, 0), mesh(new THREE.TorusGeometry(5.5, 0.07, 6, 48).rotateX(Math.PI / 2), M.gold, 0, 7.22, 0), mesh(cyl(5.9, 5.9, 0.4, 32), M.marble, 0, -0.1, 0));
  const glow = lamp(W, 0xffc070, 9, 0.3); glow.position.set(0, 3.4, 0); tp.add(glow);
  bindMood(W, glow.material, 'color', hdr(0xffc070, 0.3), hdr(0xffc070, 2.2));
  g.add(tp);
  buildWaterfalls(W, g, TOP);
  fuse(g);
}

/** Far pier where the shuttles land and lift off. */
export function buildDock(W) {
  const M = W.mat, P = L.DOCK, g = group(P.x, P.y, P.z); W.scene.add(g);
  g.add(mesh(cyl(15, 14.2, 1.4, 48), M.marble, 0, -0.7, 0), mesh(new THREE.TorusGeometry(11.5, 0.2, 6, 64).rotateX(Math.PI / 2), M.gold, 0, 0.06, 0), mesh(new THREE.TorusGeometry(5.2, 0.14, 6, 64).rotateX(Math.PI / 2), M.gold, 0, 0.06, 0));
  for (let i = 0; i < 6; i++) { const a = i * TAU / 6 + 0.4; g.add(mesh(cyl(0.8, 1.0, 8, 12), M.marble, Math.cos(a) * 11, -5, Math.sin(a) * 11)); }
  const tower = group(-17, 0, 5, mesh(cyl(1.3, 1.8, 11, 16), M.marble, 0, 4.4, 0), mesh(new THREE.SphereGeometry(2.1, 20, 10, 0, TAU, 0, Math.PI / 2), M.gold, 0, 9.9, 0), mesh(box(9, 0.8, 2.4, 0.2), M.marble, 4.5, -0.6, 0));
  g.add(tower); fuse(g);
  const beacon = lamp(W, 0xffc070, 4, 4); beacon.position.set(-17, 12.6, 5); g.add(beacon);
  const N = 24, lights = new THREE.InstancedMesh(new THREE.SphereGeometry(0.26, 8, 6), new THREE.MeshBasicMaterial(), N), m4 = new THREE.Matrix4(), c = new THREE.Color();
  for (let i = 0; i < N; i++) { const a = i / N * TAU; m4.makeTranslation(Math.cos(a) * 14.2, 0.2, Math.sin(a) * 14.2); lights.setMatrixAt(i, m4); lights.setColorAt(i, c.set(0)); }
  g.add(lights);
  const wash = [0, 1].map(() => { const s = lamp(W, 0xfff0d8, 14, 0); s.userData.base = hdr(0xfff0d8, 1.2); W.scene.add(s); return s; });
  const calm = hdr(0xffd9a0, 2.4), busy = hdr(0xffb040, 5);
  W.pad = { activity: 0, wash, spots: [new THREE.Vector3(P.x + 5.2, P.y + 0.1, P.z - 2.5), new THREE.Vector3(P.x - 5.0, P.y + 0.1, P.z + 3.2)] };
  W.updaters.push((t) => {
    const act = W.pad.activity;
    for (let i = 0; i < N; i++) { const ph = ((i / N) * 3 - t * lerp(0.35, 1.6, act)) % 1, f = Math.pow((ph + 1) % 1, 5); c.copy(calm).lerp(busy, act).multiplyScalar(0.12 + f); lights.setColorAt(i, c); }
    lights.instanceColor.needsUpdate = true;
    setLamp(beacon, 0.2 + Math.pow(Math.max(0, Math.sin(t * 2.2)), 12) * 1.2);
  });
}
