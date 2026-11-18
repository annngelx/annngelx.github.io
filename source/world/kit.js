import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { architecturalStone } from './stone.js';
import { MOODS } from './atmo.js';
import { bindMood } from './mood.js';

export const box = (w, h, d, r = 0.12) => new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2.01, h / 2.01, d / 2.01));
export const cyl = (r1, r2, h, seg = 24, open = false) => new THREE.CylinderGeometry(r1, r2, h, seg, 1, open);
export const mesh = (g, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); return o; };
export const group = (x = 0, y = 0, z = 0, ...kids) => { const g = new THREE.Group(); g.position.set(x, y, z); kids.forEach(k => k && g.add(k)); return g; };
export const hdr = (hex, k) => new THREE.Color(hex).multiplyScalar(k);
/** Surface of revolution from [[radius, height], ...]. */
export const lathe = (pts, seg = 48, start = 0, len = Math.PI * 2) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg, start, len);
export const shadows = (o, cast = true, receive = true) => { o.traverse(c => { if (c.isMesh) { c.castShadow = cast; c.receiveShadow = receive; } }); return o; };

/** Reverse the winding of a non-indexed geometry (needed after baking in a mirrored transform). */
function flip(g) {
  for (const a of Object.values(g.attributes)) {
    const n = a.itemSize, arr = a.array;
    for (let i = 0; i + 2 < a.count; i += 3) for (let k = 0; k < n; k++) { const p = (i + 1) * n + k, q = (i + 2) * n + k, t = arr[p]; arr[p] = arr[q]; arr[q] = t; }
  }
}

/**
 * Merge the meshes under `root` that share a material into one mesh each, so a prop costs one draw call per material.
 * It does not look inside children flagged userData.moving (fuse those on their own), and it leaves alone meshes flagged
 * userData.keep, instanced meshes, sprites and points.
 */
export function fuse(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert(), rel = new THREE.Matrix4(), sets = new Map(), found = [];
  const walk = (o) => { for (const c of o.children) { if (c.userData.moving) continue; if (c.isMesh && !c.isInstancedMesh && !c.userData.keep) found.push(c); else walk(c); } };
  walk(root);
  for (const o of found) {
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    rel.multiplyMatrices(inv, o.matrixWorld); g.applyMatrix4(rel);
    if (rel.determinant() < 0) flip(g);
    const key = [o.material.uuid, o.castShadow, o.receiveShadow, o.renderOrder, o.layers.mask].join('|');
    if (!sets.has(key)) sets.set(key, { list: [], o });
    sets.get(key).list.push(g);
  }
  for (const o of found) o.parent.remove(o);
  for (const { list, o } of sets.values()) {
    const names = Object.keys(list[0].attributes).filter(n => list.every(g => g.attributes[n]));
    for (const g of list) for (const n of Object.keys(g.attributes)) if (!names.includes(n)) g.deleteAttribute(n);
    const m = new THREE.Mesh(list.length > 1 ? mergeGeometries(list, false) : list[0], o.material);
    m.castShadow = o.castShadow; m.receiveShadow = o.receiveShadow; m.renderOrder = o.renderOrder; m.layers.mask = o.layers.mask; m.frustumCulled = false;
    root.add(m);
  }
  return root;
}

/** The garden's materials: white marble, gold, porcelain-white machine shells, glass. */
export function makeMaterials(W) {
  const S = (o) => new THREE.MeshStandardMaterial(o);
  const anisotropy = Math.min(8, W.renderer.capabilities.getMaxAnisotropy());
  const rep = (t, x, y) => { const c = t.clone(); c.repeat.set(x, y); c.anisotropy = anisotropy; c.needsUpdate = true; return c; };
  const env = W.env, e = W.mood.env;
  const M = {
    marble: architecturalStone(W, { roughness: 0.34, scale: 0.22 }),
    marbleWall: architecturalStone(W, { roughness: 0.46, scale: 0.23, veinStrength: 0.58 }),
    marbleCornice: architecturalStone(W, { roughness: 0.34, scale: 0.22, veinStrength: 0.58 }),
    marbleFlute: architecturalStone(W, { roughness: 0.4, scale: 0.24, flute: true }),
    gold: S({ color: 0xdcb45e, roughness: 0.28, metalness: 1, envMap: env, envMapIntensity: 1.15 * e }),
    goldSoft: S({ color: 0xc9a15a, roughness: 0.43, metalness: 1, envMap: env, envMapIntensity: 1.05 * e }),
    shell: new THREE.MeshPhysicalMaterial({ color: 0xe9e7df, roughness: 0.36, metalness: 0.05, clearcoat: 0.22, clearcoatRoughness: 0.3, envMap: env, envMapIntensity: 0.5 * e }),
    seam: S({ color: 0x2b2a30, roughness: 0.45, metalness: 0.7, envMap: env, envMapIntensity: 0.8 * e }),
    glass: S({ color: 0xe4f1ff, roughness: 0.03, metalness: 0.85, transparent: true, opacity: 0.1, envMap: env, envMapIntensity: 1.2 * e, side: THREE.DoubleSide, depthWrite: false }),
    // names the ship models use
    hull: S({ color: 0xf4f0e7, roughness: 0.34, metalness: 0.4, map: W.tex.panel, envMap: env, envMapIntensity: 0.7 * e }),
    hullBig: S({ color: 0xefeadf, roughness: 0.38, metalness: 0.45, map: rep(W.tex.panel, 3, 2), envMap: env, envMapIntensity: 0.7 * e }),
    white: S({ color: 0xf6f3ec, roughness: 0.32, metalness: 0.2, envMap: env, envMapIntensity: 0.6 * e }),
    dark: S({ color: 0x3a3229, roughness: 0.45, metalness: 0.8 }),
    steel: S({ color: 0xb69a62, roughness: 0.4, metalness: 0.9 }),
    canopy: S({ color: 0x10141c, roughness: 0.06, metalness: 0.95, envMap: env, envMapIntensity: 2.0 * e }),
    glowWarm: new THREE.MeshBasicMaterial({ color: hdr(0xffc878, 5) }),
    glowGold: new THREE.MeshBasicMaterial({ color: hdr(0xffd98a, 3.2) }),
    glowRed: new THREE.MeshBasicMaterial({ color: hdr(0xff5a40, 5) }),
    engine: new THREE.MeshBasicMaterial({ color: hdr(0xfff0cf, 6) }),
  };
  for (const [name, factor] of Object.entries({ marble: 0.35, marbleWall: 0.35, marbleCornice: 0.35, marbleFlute: 0.35, gold: 1.15, goldSoft: 1.05, shell: 0.5, seam: 0.8, glass: 1.2, hull: 0.7, hullBig: 0.7, white: 0.6, canopy: 2.0 })) {
    bindMood(W, M[name], 'envMapIntensity', factor * MOODS.day.env, factor * MOODS.night.env);
  }
  for (const [name, day, night] of [['marble', 0.34, 0.52], ['marbleWall', 0.46, 0.61], ['marbleCornice', 0.34, 0.52], ['marbleFlute', 0.4, 0.58], ['glass', 0.03, 0.24]]) {
    bindMood(W, M[name], 'roughness', day, night);
  }
  M.yellow = M.gold; M.blue = M.goldSoft; M.concrete = M.marble; M.glowBlue = M.glowGold; M.glowYellow = M.glowGold;
  return M;
}

/** Additive light sprite. `k` is an HDR multiplier, so bright ones bloom. */
export function lamp(W, hex, size, k = 3) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: W.tex.glow, color: hdr(hex, k), blending: THREE.AdditiveBlending, depthWrite: false, fog: false, transparent: true }));
  s.scale.setScalar(size); s.userData.base = hdr(hex, k); s.renderOrder = 6;
  return s;
}
export const setLamp = (s, f) => s.material.color.copy(s.userData.base).multiplyScalar(f);
