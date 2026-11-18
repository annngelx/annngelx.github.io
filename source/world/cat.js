import * as THREE from 'three';
import { L } from './ground.js';
import { mesh, group, lamp, setLamp, cyl, fuse } from './kit.js';
import { Spring, Spring3, clamp, lerp, smooth, noise1, windJS, TAU } from './util.js';
import { bindMood } from './mood.js';

/** Verlet cloth in world space: pinned along row 0, shaped by wind, gravity and body colliders. */
class Cloth {
  constructor({ cols, rows, wrap = false, rest, material, windK = 5, gravity = 5.5, drag = 0.02, lift = 0.25, scale = 1 }) {
    this.cols = cols; this.rows = rows; this.wrap = wrap; this.windK = windK; this.gravity = gravity; this.drag = drag; this.lift = lift;
    const n = this.n = cols * rows;
    this.rest = []; for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) this.rest.push(rest(i, j));
    this.p = new Float32Array(n * 3); this.q = new Float32Array(n * 3);
    const id = (i, j) => j * cols + ((i + cols) % cols), cons = [];
    const link = (a, b, k) => cons.push(a, b, this.rest[a].distanceTo(this.rest[b]) * scale, k);
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const hasR = wrap || i < cols - 1, hasR2 = wrap || i < cols - 2;
      if (hasR) link(id(i, j), id(i + 1, j), 1);
      if (j < rows - 1) link(id(i, j), id(i, j + 1), 1);
      if (hasR && j < rows - 1) { link(id(i, j), id(i + 1, j + 1), 0.6); link(id(i + 1, j), id(i, j + 1), 0.6); }
      if (hasR2) link(id(i, j), id(i + 2, j), 0.3);
      if (j < rows - 2) link(id(i, j), id(i, j + 2), 0.3);
    }
    this.cons = cons;
    const idx = [], uv = [];
    for (let j = 0; j < rows - 1; j++) for (let i = 0; i < (wrap ? cols : cols - 1); i++) { const a = id(i, j), b = id(i + 1, j), c = id(i, j + 1), d = id(i + 1, j + 1); idx.push(a, c, b, b, c, d); }
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) uv.push(i / (cols - 1), j / (rows - 1));
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.p, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    this.mesh = new THREE.Mesh(g, material); this.mesh.frustumCulled = false; this.mesh.castShadow = this.mesh.receiveShadow = true;
    this._v = new THREE.Vector3(); this.ready = false; this.elapsed = 0;
  }
  /** matrix: body matrixWorld for pins/rest; wind: world m/s; cols: [x, y, z, r, ...] world spheres */
  step(dt, matrix, wind, spheres, floorY, t) {
    const { p, q, n, cols, rest, cons } = this, v = this._v, nrm = this.mesh.geometry.attributes.normal.array;
    if (!this.ready) { for (let i = 0; i < n; i++) { v.copy(rest[i]).applyMatrix4(matrix); p[i * 3] = q[i * 3] = v.x; p[i * 3 + 1] = q[i * 3 + 1] = v.y; p[i * 3 + 2] = q[i * 3 + 2] = v.z; } this.ready = true; }
    // Keep contact resolution consistent on high-refresh displays. Character and
    // tail motion still update every frame; only these tiny cloth grids are capped.
    this.elapsed += dt;
    if (this.elapsed < 1 / 60 - 1e-8) { this.mesh.geometry.attributes.position.needsUpdate = true; return; }
    dt = this.elapsed; this.elapsed = 0;
    const sub = clamp(Math.ceil(dt / 0.011), 1, 4), h = dt / sub, keep = 1 - this.drag;
    for (let s = 0; s < sub; s++) {
      for (let i = cols; i < n; i++) {
        const k = i * 3, vx = (p[k] - q[k]) * keep, vy = (p[k + 1] - q[k + 1]) * keep, vz = (p[k + 2] - q[k + 2]) * keep;
        const tb = noise1(t * 2.3 + i * 0.37, i % 7) * 1.4;
        const rx = wind.x - vx / h, ry = wind.y + tb - vy / h, rz = wind.z - vz / h;
        const f = (nrm[k] * rx + nrm[k + 1] * ry + nrm[k + 2] * rz) * this.windK;
        q[k] = p[k]; q[k + 1] = p[k + 1]; q[k + 2] = p[k + 2];
        p[k] += vx + (nrm[k] * f + rx * this.lift) * h * h;
        p[k + 1] += vy + (nrm[k + 1] * f - this.gravity + Math.abs(rx) * this.lift * 0.35) * h * h;
        p[k + 2] += vz + (nrm[k + 2] * f + rz * this.lift) * h * h;
      }
      for (let i = 0; i < cols; i++) { v.copy(rest[i]).applyMatrix4(matrix); p[i * 3] = v.x; p[i * 3 + 1] = v.y; p[i * 3 + 2] = v.z; }
      for (let it = 0; it < 5; it++) {
        for (let c = 0; c < cons.length; c += 4) {
          const a = cons[c] * 3, b = cons[c + 1] * 3, dx = p[b] - p[a], dy = p[b + 1] - p[a + 1], dz = p[b + 2] - p[a + 2];
          const d = Math.hypot(dx, dy, dz) || 1e-6, diff = (d - cons[c + 2]) / d * cons[c + 3];
          const pa = cons[c] < cols, pb = cons[c + 1] < cols, wa = pa ? 0 : pb ? 1 : 0.5, wb = pb ? 0 : pa ? 1 : 0.5;
          p[a] += dx * diff * wa; p[a + 1] += dy * diff * wa; p[a + 2] += dz * diff * wa;
          p[b] -= dx * diff * wb; p[b + 1] -= dy * diff * wb; p[b + 2] -= dz * diff * wb;
        }
        for (let i = cols; i < n; i++) {
          const k = i * 3;
          for (let c = 0; c < spheres.length; c += 4) {
            const dx = p[k] - spheres[c], dy = p[k + 1] - spheres[c + 1], dz = p[k + 2] - spheres[c + 2], r = spheres[c + 3], d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < r * r) {
              const d = Math.sqrt(d2), nx = d > 1e-6 ? dx / d : 0, ny = d > 1e-6 ? dy / d : 0, nz = d > 1e-6 ? dz / d : 1;
              const push = r - d, ox = nx * push, oy = ny * push, oz = nz * push;
              p[k] += ox; p[k + 1] += oy; p[k + 2] += oz;
              // Projection is a contact correction, not an extra kick into the cloth.
              q[k] += ox; q[k + 1] += oy; q[k + 2] += oz;
              const inward = Math.min(0, (p[k] - q[k]) * nx + (p[k + 1] - q[k + 1]) * ny + (p[k + 2] - q[k + 2]) * nz);
              q[k] += nx * inward; q[k + 1] += ny * inward; q[k + 2] += nz * inward;
            }
          }
          if (p[k + 1] < floorY) { p[k + 1] = floorY; q[k + 1] = Math.min(q[k + 1], floorY); }
        }
      }
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.computeVertexNormals();
  }
}


const ball = (r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, seg = 28) => { const m = mesh(new THREE.SphereGeometry(r, seg, Math.round(seg * 0.7)), mat, x, y, z); m.scale.set(sx, sy, sz); return m; };

// The cloth already has stable UVs, so woven edges and stitches follow every fold
// without adding geometry to the simulated scarf tails.
function scarfWeave(renderer) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f0e9db'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = 'rgba(116, 86, 34, 0.1)'; ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 1; x < c.width; x += 4) { ctx.moveTo(x, 0); ctx.lineTo(x, c.height); }
  for (let y = 1; y < c.height; y += 4) { ctx.moveTo(0, y); ctx.lineTo(c.width, y); }
  ctx.stroke();
  ctx.fillStyle = 'rgba(119, 86, 30, 0.2)';
  ctx.fillRect(3, 0, 2, c.height); ctx.fillRect(c.width - 5, 0, 2, c.height);
  ctx.strokeStyle = '#fff9e9'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 5]);
  ctx.beginPath();
  for (const x of [8, c.width - 8]) { ctx.moveTo(x, 0); ctx.lineTo(x, c.height); }
  ctx.moveTo(8, c.height - 12); ctx.lineTo(c.width - 8, c.height - 12); ctx.stroke();
  const map = new THREE.CanvasTexture(c); map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  return map;
}

const fineCurve = (points, radius, material) => mesh(new THREE.TubeGeometry(
  new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), 12, radius, 5, false), material);

/**
 * The one character in this world: a round, cream-coloured cat in a yellow scarf,
 * sitting on a marble stepping stone in the pool and watching the machine work.
 */
export function buildCat(W) {
  const S = (o) => new THREE.MeshStandardMaterial(o);
  const fur = S({ color: 0xfdeedd, roughness: 0.88 }), pink = S({ color: 0xffa9bd, roughness: 0.7 }), eyeM = S({ color: 0x1b1930, roughness: 0.08, metalness: 0.3, envMapIntensity: 2 });
  const shine = new THREE.MeshBasicMaterial({ color: 0xffffff }), blushM = new THREE.MeshBasicMaterial({ color: 0xff9db4, transparent: true, opacity: 0.55, depthWrite: false });
  const whiskM = S({ color: 0xffffff, roughness: 0.5 }), seamM = S({ color: 0xd9c9b6, roughness: 0.85 });
  const scarfM = S({ color: 0xf0b93a, map: scarfWeave(W.renderer), roughness: 0.74, side: THREE.DoubleSide });
  const H = L.CAT, gy = H.y, SC = 1.18, TOP = 0;

  const cat = group(H.x, gy - 0.012, H.z); cat.rotation.y = 0.2; cat.scale.setScalar(SC); W.scene.add(cat);
  const torso = group(0, 0, 0); cat.add(torso);
  torso.add(ball(0.27, fur, 0, 0.27, 0.02, 1, 1.08, 0.92), ball(0.2, fur, 0, 0.44, -0.02, 0.95, 1, 0.9));
  for (const s of [-1, 1]) {
    torso.add(ball(0.15, fur, s * 0.17, 0.14, 0.05, 0.9, 1, 1.12), ball(0.07, fur, s * 0.2, 0.042, -0.13, 0.9, 0.6, 1.5, 16));
    for (const x of [-0.018, 0.018]) torso.add(fineCurve([
      [s * 0.2 + x, 0.034, -0.229], [s * 0.2 + x, 0.047, -0.231], [s * 0.2 + x, 0.059, -0.222],
    ], 0.0017, seamM));
  }
  // front legs hang from the shoulders; the right one can reach up
  const legs = [-1, 1].map((s) => {
    const sh = group(s * 0.09, 0.33, -0.15); sh.add(mesh(new THREE.CapsuleGeometry(0.054, 0.2, 6, 14), fur, 0, -0.13, 0), ball(0.064, fur, 0, -0.27, -0.02, 1, 0.72, 1.25, 16));
    for (let k = -1; k <= 1; k++) sh.add(ball(0.012, pink, k * 0.026, -0.29, -0.075, 1, 0.7, 1, 8));
    for (const x of [-0.021, 0.021]) sh.add(fineCurve([
      [x, -0.255, -0.091], [x, -0.271, -0.097], [x, -0.286, -0.091],
    ], 0.0016, seamM));
    torso.add(sh); return sh;
  });
  // head: big, round, with everything that makes it a face
  const head = group(0, 0.69, -0.03); torso.add(head);
  head.add(ball(0.235, fur, 0, 0, 0, 1.13, 0.95, 1), ball(0.1, fur, -0.12, -0.075, -0.1, 1.1, 0.8, 1, 20), ball(0.1, fur, 0.12, -0.075, -0.1, 1.1, 0.8, 1, 20));
  const ears = [-1, 1].map((s) => {
    const e = group(s * 0.145, 0.15, 0.0), tilt = group(0, 0, 0); e.add(tilt); tilt.rotation.z = -s * 0.32;
    const outer = mesh(new THREE.ConeGeometry(0.092, 0.18, 20), fur, 0, 0.085, 0); outer.scale.z = 0.62;
    const inner = mesh(new THREE.ConeGeometry(0.058, 0.125, 16), pink, 0, 0.072, -0.03); inner.scale.z = 0.4;
    tilt.add(outer, inner, ball(0.092, fur, 0, 0, 0, 1, 0.5, 0.62, 16)); head.add(e);
    tilt.add(fineCurve([
      [-0.044, 0.027, -0.049], [-0.026, 0.082, -0.041], [0, 0.139, -0.03],
      [0.026, 0.082, -0.041], [0.044, 0.027, -0.049],
    ], 0.0032, fur));
    return { e, s, sp: new Spring(0, 90, 0.28), flick: 0 };
  });
  const eyes = [-1, 1].map((s) => { const g = group(s * 0.1, 0.0, -0.2); g.add(ball(0.043, eyeM, 0, 0, 0, 0.88, 1.18, 0.5, 20), mesh(new THREE.SphereGeometry(0.014, 8, 6), shine, -0.012, 0.02, -0.022), mesh(new THREE.SphereGeometry(0.007, 6, 4), shine, 0.014, -0.014, -0.022)); head.add(g); return g; });
  head.add(ball(0.017, pink, 0, -0.05, -0.236, 1.35, 0.8, 0.8, 10));
  for (const s of [-1, 1]) {
    head.add(ball(0.039, fur, s * 0.028, -0.064, -0.21, 1, 0.63, 0.58, 16));
    for (const [x, y] of [[0.043, -0.058], [0.053, -0.065], [0.04, -0.073]]) {
      head.add(ball(0.0022, seamM, s * x, y, -0.231, 1, 1, 0.45, 6));
    }
    const m = mesh(new THREE.TorusGeometry(0.02, 0.0045, 5, 12, Math.PI), eyeM, s * 0.02, -0.068, -0.232); m.rotation.z = Math.PI; head.add(m);
    const b = mesh(new THREE.CircleGeometry(0.04, 18), blushM, s * 0.172, -0.072, -0.172); b.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(s * 0.56, -0.1, -0.82).normalize()); b.scale.y = 0.62; head.add(b);
    for (let k = -1; k <= 1; k++) { const w = mesh(cyl(0.0022, 0.0012, 0.15, 5), whiskM, s * 0.275, -0.065 + k * 0.022, -0.15); w.rotation.set(0.25, 0, s * (Math.PI / 2 - k * 0.2)); head.add(w); }
  }
  // scarf wrap; its two tails are cloth
  const wrap = mesh(new THREE.TorusGeometry(0.168, 0.05, 12, 32).rotateX(Math.PI / 2), scarfM, 0, 0.505, -0.02); wrap.scale.set(1, 1.2, 0.95); torso.add(wrap);
  const clasp = group(0.056, 0.507, 0.188); clasp.rotation.y = 0.25;
  clasp.add(mesh(cyl(0.019, 0.019, 0.004, 20).rotateX(Math.PI / 2), W.mat.goldSoft),
    mesh(new THREE.TorusGeometry(0.019, 0.0025, 6, 20), W.mat.goldSoft, 0, 0, 0.002));
  const star = new THREE.Shape();
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * TAU, r = i % 2 ? 0.0034 : 0.01, x = Math.sin(a) * r, y = Math.cos(a) * r;
    if (i === 0) star.moveTo(x, y); else star.lineTo(x, y);
  }
  star.closePath(); clasp.add(mesh(new THREE.ShapeGeometry(star), seamM, 0, 0, 0.0047)); torso.add(clasp);
  // A closed, outward-facing tube follows the original animated centreline.
  // The rounded tip is one shared vertex, rather than a collapsed ring of triangles.
  const TN = 26, TR = 20, rings = TN - 1, tipIndex = rings * TR, baseIndex = tipIndex + 1;
  const tg = new THREE.BufferGeometry(), tpos = new Float32Array((baseIndex + 1) * 3), tidx = [];
  const tailCenters = new Float32Array(TN * 3), tailRadii = new Float32Array(TN);
  for (let i = 0; i < rings - 1; i++) for (let j = 0; j < TR; j++) { const a = i * TR + j, b = i * TR + (j + 1) % TR, c = a + TR, e = b + TR; tidx.push(a, b, c, b, e, c); }
  for (let j = 0; j < TR; j++) {
    tidx.push((rings - 1) * TR + j, (rings - 1) * TR + (j + 1) % TR, tipIndex);
    tidx.push(baseIndex, (j + 1) % TR, j);
  }
  tg.setAttribute('position', new THREE.BufferAttribute(tpos, 3)); tg.setIndex(tidx);
  const tail = new THREE.Mesh(tg, fur); tail.name = 'Cat tail'; tail.frustumCulled = false; cat.add(tail);
  const tN = new THREE.Vector3(), tB = new THREE.Vector3(), tT = new THREE.Vector3();
  // The cat represents the author: keep it clearly lit through every head turn.
  // It still casts a contact shadow, while normal-based shading preserves its form.
  cat.traverse(o => { if (o.isMesh) { o.receiveShadow = false; if (o.material !== blushM) o.castShadow = true; } });
  // one mesh per material for each part that moves on its own
  tail.userData.keep = true;
  const parts = [head, ...legs, ...ears.map(e => e.e), ...eyes]; parts.forEach(p => { p.userData.moving = true; });
  [torso, ...parts].forEach(fuse);

  const v = (x, y, z) => new THREE.Vector3(x, y, z);
  const tailA = new Cloth({ cols: 7, rows: 21, material: scarfM, windK: 6.2, gravity: 3.4, drag: 0.02, lift: 0.5, scale: SC, rest: (i, j) => v(-0.11 + i / 6 * 0.12, 0.5 - j / 20 * 0.56, 0.165 + j / 20 * 0.168) });
  const tailB = new Cloth({ cols: 7, rows: 17, material: scarfM, windK: 6.2, gravity: 3.4, drag: 0.02, lift: 0.5, scale: SC, rest: (i, j) => v(-0.03 + i / 6 * 0.12, 0.495 - j / 16 * 0.42, 0.175 + j / 16 * 0.14) });
  tailA.mesh.name = 'Scarf tail A'; tailB.mesh.name = 'Scarf tail B';
  tailA.mesh.receiveShadow = tailB.mesh.receiveShadow = false;
  W.scene.add(tailA.mesh, tailB.mesh);
  const cols = [[head, 0, 0, 0, 0.25], [torso, 0, 0.44, -0.02, 0.2], [torso, 0, 0.27, 0.02, 0.285], [torso, 0.17, 0.14, 0.05, 0.16], [torso, -0.17, 0.14, 0.05, 0.16]];
  const colS = new Float32Array((cols.length + TN) * 4), ct = new THREE.Vector3();
  const pack = () => {
    cols.forEach(([node, x, y, z, r], i) => { ct.set(x, y, z); node.localToWorld(ct); colS[i * 4] = ct.x; colS[i * 4 + 1] = ct.y; colS[i * 4 + 2] = ct.z; colS[i * 4 + 3] = r * SC + 0.008; });
    // Closely overlapping spheres cover the moving tail; clearance also keeps the
    // triangles between cloth particles outside the fur surface.
    for (let i = 0; i < TN; i++) {
      ct.fromArray(tailCenters, i * 3).applyMatrix4(cat.matrixWorld);
      const k = (cols.length + i) * 4;
      colS[k] = ct.x; colS[k + 1] = ct.y; colS[k + 2] = ct.z; colS[k + 3] = tailRadii[i] * SC + 0.012;
    }
    return colS;
  };

  // ---- companion ----
  const M = W.mat, pip = new THREE.Group(), pb = new THREE.Group(); pip.add(pb); W.scene.add(pip);
  pb.add(mesh(new THREE.SphereGeometry(0.1, 24, 16), M.white), mesh(new THREE.TorusGeometry(0.108, 0.012, 8, 32).rotateX(Math.PI / 2), M.blue));
  pb.add(mesh(new THREE.SphereGeometry(0.088, 20, 12, 0, TAU, 0, 0.75).rotateX(-Math.PI / 2), M.canopy, 0, 0.005, -0.022));
  const pe = lamp(W, 0xffd23f, 0.13, 3.4); pe.position.set(0, 0.01, -0.115); pb.add(pe);
  for (const s of [-1, 1]) { const f = mesh(new THREE.ConeGeometry(0.026, 0.085, 10), M.white, s * 0.07, 0.105, 0.02); f.rotation.z = -s * 0.5; pb.add(f); }
  const pglow = lamp(W, 0xffd9a0, 0.3, 0.5); pglow.position.y = -0.1; pb.add(pglow);
  pip.traverse(o => { if (o.isMesh) o.castShadow = o.receiveShadow = true; }); fuse(pb);
  const pipS = new Spring3(v(H.x - 0.7, gy + 1.6, H.z + 0.1), 26, 0.5), pipYaw = new Spring(0, 12, 0.6), pipSpin = new Spring(0, 5, 0.6);

  // ---- motion ----
  const sway = new Spring(0, 3, 1), hYaw = new Spring(0, 12, 0.72), hPitch = new Spring(0.05, 12, 0.72), hRoll = new Spring(0, 8, 0.6), bYaw = new Spring(0, 5, 0.9);
  const reach = new Spring(0, 15, 0.58), excite = new Spring(0, 5, 0.9), perk = new Spring(0, 30, 0.5), squash = new Spring(0, 40, 0.35);
  const wind = new THREE.Vector3(), hw = new THREE.Vector3(), d = new THREE.Vector3(), pt = new THREE.Vector3();
  const tp = new THREE.Vector3();
  let tph = 0, blink = 0, nextBlink = 2.5, nextFlick = 1.5, wasAttend = 0;
  const key = new THREE.PointLight(0xfff6ea, 7, 8, 2);
  bindMood(W, key, 'color', 0xfff6ea, 0xffe4c6);
  bindMood(W, key, 'intensity', 7, 9);
  key.name = 'Cat soft key'; key.position.set(H.x - 1.4, gy + 2.1, H.z + 2.3);
  const fill = new THREE.PointLight(0xfff8ee, 1.8, 6, 2);
  bindMood(W, fill, 'color', 0xfff8ee, 0xe4eaff);
  bindMood(W, fill, 'intensity', 1.8, 2.5);
  fill.name = 'Cat soft fill'; fill.position.set(H.x + 1.6, gy + 1.5, H.z - 1.8);
  W.scene.add(key, fill);
  W.hero = { obj: cat, head, tail, scarves: [tailA.mesh, tailB.mesh], clothColliders: colS };
  W.updaters.push((t, dt) => {
    const gust = W.uGust.value, sw = sway.step(noise1(t * 0.085, 1), dt), br = Math.sin(t * 1.7);
    // where to look: the arm and the globe, with the odd glance around, or the ships when they come through
    let yT = noise1(t * 0.11, 3) * 0.36 - 0.02, pT = 0.2 + noise1(t * 0.09, 4) * 0.1, attend = 0;
    if (W.flyby && W.flyby.active) {
      head.getWorldPosition(hw); d.subVectors(W.flyby.pos, hw);
      const by = cat.rotation.y, lx = d.x * Math.cos(by) - d.z * Math.sin(by), lz = d.x * Math.sin(by) + d.z * Math.cos(by);
      yT = clamp(Math.atan2(-lx, -lz), -1.9, 1.9); pT = clamp(Math.atan2(d.y, Math.hypot(lx, lz)), -0.3, 0.85); attend = 1;
    }
    if (attend && !wasAttend) squash.v += 2.2;                      // a little startle when the ships arrive
    wasAttend = attend;
    const ex = excite.step(attend, dt), sq = squash.step(0, dt);
    torso.scale.set(1 + br * 0.012 - sq * 0.05, 1 + br * 0.008 + sq * 0.08, 1 + br * 0.02 - sq * 0.05);
    torso.rotation.set(-0.03 - gust * 0.05, bYaw.step(yT * 0.22, dt), sw * 0.03);
    head.rotation.set(hPitch.step(pT * 0.8, dt), hYaw.step(yT - bYaw.x, dt), hRoll.step(noise1(t * 0.17, 6) * 0.14 + (attend ? 0.12 * Math.sign(yT || 1) : 0), dt), 'YXZ');
    // ears: perk toward interest, fold a touch in a gust, and flick on their own
    nextFlick -= dt; if (nextFlick < 0) { nextFlick = 1.2 + W.rand() * 4.5; ears[W.rand() < 0.5 ? 0 : 1].sp.v += 9; }
    const pk = perk.step(attend * 0.28 - gust * 0.3, dt);
    for (const e of ears) { const f = e.sp.step(0, dt); e.e.rotation.set(-pk - Math.abs(f) * 0.35, 0, -e.s * (f * 0.4 - gust * 0.12)); }
    // blink
    nextBlink -= dt; if (nextBlink < 0) { nextBlink = 2 + W.rand() * 4; blink = 0.16; }
    blink = Math.max(0, blink - dt); const lid = blink > 0 ? Math.abs(blink / 0.16 - 0.5) * 2 : 1;
    eyes.forEach(e => e.scale.set(1, clamp(lid, 0.08, 1) * (1 + ex * 0.12), 1));
    // paws: the right one reaches for the ships
    const rc = reach.step(attend, dt);
    legs[0].rotation.set(noise1(t * 0.3, 7) * 0.03, 0, 0); legs[1].rotation.set(rc * 2.1 + rc * Math.sin(t * 7) * 0.12, 0, rc * 0.25);
    // tail: a wave travels from base to tip; bigger and quicker when something exciting happens
    tph += dt * lerp(1.5, 6.0, ex);
    const amp = lerp(0.3 + 0.5 * smooth(-0.3, 0.5, noise1(t * 0.13, 12)), 1.0, ex), [wx0] = windJS(H.x, H.z, t, gust);
    tp.set(0, 0.1, 0.24); tN.set(1, 0, 0);
    for (let i = 0; i < TN; i++) {
      const u = i / (TN - 1), th = lerp(0.75, 1.72, smooth(0, 0.55, u)) + u * u * u * 0.9;
      const ph = amp * Math.pow(u, 1.25) * Math.sin(tph - u * 3.4) + wx0 * 0.12 * u + sw * 0.3 * u;
      tT.set(Math.sin(ph), Math.sin(th) * Math.cos(ph), Math.cos(th) * Math.cos(ph));
      tB.crossVectors(tT, tN).normalize(); tN.crossVectors(tB, tT).normalize();              // carry the frame along the curve
      const r = lerp(0.058, 0.05, u) * (u > 0.9 ? Math.sqrt(Math.max(0, 1 - Math.pow((u - 0.9) / 0.1, 2))) : 1) * (u < 0.06 ? 0.6 + u * 6.6 : 1);
      tp.toArray(tailCenters, i * 3); tailRadii[i] = r;
      if (i === 0) tp.toArray(tpos, baseIndex * 3);
      if (i === TN - 1) { tp.toArray(tpos, tipIndex * 3); continue; }
      for (let j = 0; j < TR; j++) {
        const a = j / TR * TAU, cx = Math.cos(a) * r, cy = Math.sin(a) * r, k = (i * TR + j) * 3;
        tpos[k] = tp.x + tN.x * cx + tB.x * cy; tpos[k + 1] = tp.y + tN.y * cx + tB.y * cy; tpos[k + 2] = tp.z + tN.z * cx + tB.z * cy;
      }
      tp.addScaledVector(tT, 0.027);
    }
    tg.attributes.position.needsUpdate = true; tg.computeVertexNormals();
    cat.updateMatrixWorld(true);

    const [wx, wz] = windJS(H.x, H.z, t, gust);
    wind.set(wx * 4.2, 0.25 + gust * 0.8, wz * 4.2);
    const floor = gy + TOP + 0.01; pack();
    tailA.step(dt, torso.matrixWorld, wind, colS, floor, t + 5);
    tailB.step(dt, torso.matrixWorld, wind, colS, floor, t + 9);

    // companion: springs after a wandering spot off the cat's shoulder, perks up when ships pass
    pt.set(-0.62 + Math.sin(t * 0.4) * 0.16, 1.02 + Math.sin(t * 0.9) * 0.05 + attend * 0.4, 0.06 + Math.cos(t * 0.31) * 0.14); cat.localToWorld(pt);
    pip.position.copy(pipS.step(pt, dt));
    pip.rotation.y = cat.rotation.y + pipYaw.step(hYaw.x + bYaw.x + Math.sin(t * 0.5) * 0.3, dt) + pipSpin.step(attend * TAU, dt);
    pb.rotation.x = -hPitch.x * 0.8 + clamp(pipS.v.z * 0.25, -0.5, 0.5); pb.rotation.z = clamp(-pipS.v.x * 0.3, -0.5, 0.5);
    setLamp(pe, (Math.sin(t * 0.7 + 1) > 0.992 ? 0.1 : 1)); setLamp(pglow, 0.8 + 0.2 * Math.sin(t * 8));
    W.uPush.value[1].set(H.x, H.z, 1.5, 0.55);
  });
}
