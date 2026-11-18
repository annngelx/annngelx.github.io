import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';
import { L } from './ground.js';
import { TAU } from './util.js';
import { MOODS } from './atmo.js';
import { bindMood } from './mood.js';

const box = (w, h, d, r) => {
  const half = [w / 2, h / 2, d / 2], points = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) {
    for (let axis = 0; axis < 3; axis++) points.push(new THREE.Vector3(...half.map((v, i) => [x, y, z][i] * (v - (i === axis ? 0 : r)))));
  }
  const g = new ConvexGeometry(points);
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  return g;
};

const join = (pieces) => {
  const flat = pieces.map(g => {
    if (!g.attributes.color) g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 3).fill(1), 3));
    return g.index ? g.toNonIndexed() : g;
  });
  const result = mergeGeometries(flat, false); result.computeBoundingSphere(); return result;
};
const curve = (points, radius, low) => new THREE.TubeGeometry(
  new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), low ? 10 : 16, radius, 4, false);

/** A closed, shallow leaf carving with scalloped edges and a raised central fold. */
function acanthus(width, height, depth, low) {
  const steps = low ? 8 : 12, positions = [], indices = [], colors = [];
  const cross = [[-1,0],[-0.62,0.62],[0,1],[0.62,0.62],[1,0],[0.62,-0.18],[0,-0.18],[-0.62,-0.18]];
  for (let row = 0; row <= steps; row++) {
    const t = row / steps, taper = t === 1 ? 0.015 : 0.16 + Math.pow(Math.sin(Math.PI * t), 0.66) * 0.84;
    const half = width * 0.5 * taper * (0.82 + 0.18 * Math.cos(t * Math.PI * 10));
    const bend = height * (0.025 * t + 0.10 * t ** 3);
    for (const [x, z] of cross) {
      positions.push(x * half, t * height, bend + z * (depth + width * 0.13 * Math.sin(t * Math.PI)));
      // The raised fold catches light; attachment creases and the buried back
      // retain a small amount of contact shade even under diffuse sky lighting.
      const cavity = (z < 0 ? 0.81 : 0.93 + z * 0.07) - 0.065 * (1 - t) ** 3;
      colors.push(cavity, cavity, cavity);
    }
    if (row < steps) for (let j = 0; j < 8; j++) {
      const a = row * 8 + j, b = row * 8 + (j + 1) % 8;
      indices.push(a, b, a + 8, b, b + 8, a + 8);
    }
  }
  for (let j = 1; j < 7; j++) { indices.push(0, j + 1, j); indices.push(steps * 8, steps * 8 + j, steps * 8 + j + 1); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(positions.length / 3 * 2), 2));
  g.setIndex(indices);
  g.computeVertexNormals(); return g;
}

function rosette(radius, low) {
  const petals = 6, pieces = [];
  // Smooth teardrop petals give the rosette a carved profile at a fraction of
  // the tessellation needed by repeated bevelled extrusions.
  const petal = new THREE.SphereGeometry(1, low ? 6 : 8, low ? 4 : 5);
  const p = petal.attributes.position, colors = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i), taper = 0.72 + 0.28 * y;
    const cavity = 0.90 + 0.10 * p.getZ(i) - 0.035 * (1 - y) * 0.5;
    colors.set([cavity, cavity, cavity], i * 3);
    p.setXYZ(i, p.getX(i) * radius * 0.27 * taper, (y + 1) * radius * 0.40, p.getZ(i) * radius * 0.16);
  }
  petal.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  petal.computeVertexNormals();
  for (let i = 0; i < petals; i++) pieces.push(petal.clone().translate(0, radius * 0.08, radius * 0.07).rotateZ(i / petals * TAU));
  pieces.push(new THREE.CylinderGeometry(radius * 0.24, radius * 0.29, radius * 0.16, 12).rotateX(Math.PI / 2).translate(0, 0, radius * 0.2));
  pieces.push(new THREE.TorusGeometry(radius, radius * 0.055, 4, low ? 16 : 24));
  return join(pieces);
}

function volute(radius, low) {
  const points = [], steps = low ? 18 : 30;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, angle = t * Math.PI * 2.15, r = radius * (1 - t * 0.84);
    points.push([Math.cos(angle) * r, Math.sin(angle) * r, Math.sin(t * Math.PI) * radius * 0.13]);
  }
  return curve(points, radius * 0.14, low);
}

/**
 * Static pale-stone relief, separate from the scene's moving instruments.
 * Seven draw calls: three repeated architectural units, dentils, frieze,
 * and one merged mesh each for the remaining stone and narrow brass detail.
 */
export function buildOrnament(W) {
  const M = W.mat, low = !!W.Q.low, R = L.ROTUNDA.r, N = L.ROTUNDA.bays, step = TAU / N;
  const capY = W.dome?.capY ?? L.WALK.y + 6.42, spring = W.dome?.spring ?? capY + 0.62;
  const wallTop = W.dome?.wallTop ?? spring + 3.85, ra = W.dome?.ra ?? 2.75;
  const rc = R * Math.cos(step / 2), stone = M.marbleWall.clone(), brass = M.goldSoft;
  // Keep the shared stone shader while giving only relief its baked cavity color.
  stone.onBeforeCompile = M.marbleWall.onBeforeCompile;
  stone.customProgramCacheKey = M.marbleWall.customProgramCacheKey;
  stone.vertexColors = true;
  stone.roughness = Math.min(0.72, M.marbleWall.roughness + 0.035);
  bindMood(W, stone, 'roughness', 0.495, 0.645);
  bindMood(W, stone, 'envMapIntensity', 0.35 * MOODS.day.env, 0.35 * MOODS.night.env);
  const root = new THREE.Group(); root.name = 'Carved architectural ornament'; W.scene.add(root);
  const mat4 = new THREE.Matrix4();
  const instances = (geometry, material, count, position) => {
    if (material.vertexColors && !geometry.attributes.color) geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(geometry.attributes.position.count * 3).fill(1), 3));
    const inst = new THREE.InstancedMesh(geometry, material, count);
    for (let i = 0; i < count; i++) { const [x, y, z, angle] = position(i); mat4.makeRotationY(angle); mat4.setPosition(x, y, z); inst.setMatrixAt(i, mat4); }
    inst.receiveShadow = true; inst.frustumCulled = false; root.add(inst); return inst;
  };
  const bayPlace = (i) => { const a = i * step; return [Math.sin(a) * rc, 0, Math.cos(a) * rc, a]; };
  const staticStone = [], staticBrass = [];

  // The arch gets a carved outer archivolt and separate radial voussoir accents.
  const archStone = [], archBrass = [];
  for (const [r, tube, z] of [[ra + 0.19, 0.055, -0.54], [ra + 0.36, 0.033, -0.535]]) {
    archStone.push(new THREE.TorusGeometry(r, tube, 5, low ? 24 : 36, Math.PI).translate(0, spring, z));
  }
  const blocks = low ? 13 : 19;
  for (let i = 0; i < blocks; i++) {
    const a = (i + 0.5) / blocks * Math.PI;
    archStone.push(box(0.115, 0.18, 0.055, 0.015).rotateZ(a - Math.PI / 2)
      .translate(Math.cos(a) * (ra + 0.285), spring + Math.sin(a) * (ra + 0.285), -0.535));
  }
  archBrass.push(new THREE.TorusGeometry(ra + 0.40, 0.009, 4, low ? 36 : 56, Math.PI).translate(0, spring, -0.537));
  const flower = rosette(0.27, low), leaf = acanthus(0.24, 0.63, 0.045, low);
  for (const sign of [-1, 1]) {
    archStone.push(flower.clone().rotateY(Math.PI).translate(sign * 2.42, spring + 2.68, -0.52));
    // Curving stems lead into the medallion from the keystone and the haunch.
    archStone.push(curve([[sign * 0.65, spring + 3.30, -0.55], [sign * 1.30, spring + 3.15, -0.58],
      [sign * 1.72, spring + 2.81, -0.56], [sign * 2.14, spring + 2.67, -0.55]], 0.026, low));
    for (const [x, y, rotation] of [[1.25, 2.91, -0.7], [1.73, 2.65, 0.7], [2.75, 1.95, -0.26]]) {
      archStone.push(leaf.clone().rotateY(Math.PI).rotateZ(sign * rotation).translate(sign * x, spring + y, -0.52));
    }
    archBrass.push(new THREE.TorusGeometry(0.09, 0.008, 4, 20).translate(sign * 2.42, spring + 2.68, -0.60));
  }
  instances(join(archStone), stone, N, bayPlace);
  instances(join(archBrass), brass, N, bayPlace);

  // Acanthus leaves climb the existing capital; paired stone volutes curl outward.
  const capital = [], leafCount = low ? 6 : 8;
  const capLeaf = acanthus(0.33, 0.59, 0.047, low), lp = capLeaf.attributes.position;
  for (let i = 0; i < lp.count; i++) lp.setZ(i, lp.getZ(i) + Math.max(0, lp.getY(i)) * 0.36);
  capLeaf.computeVertexNormals();
  for (let i = 0; i < leafCount; i++) {
    const a = i / leafCount * TAU;
    capital.push(capLeaf.clone().translate(0, capY - 0.015, 0.47).rotateY(a));
  }
  const scroll = volute(0.145, low), axes = low ? 2 : 4;
  for (let i = 0; i < axes; i++) for (const sign of [-1, 1]) {
    capital.push(scroll.clone().rotateZ(sign < 0 ? Math.PI : 0).translate(sign * 0.25, capY + 0.39, 0.65).rotateY(i / axes * TAU));
  }
  capital.push(new THREE.TorusGeometry(0.51, 0.028, 4, 24).rotateX(Math.PI / 2).translate(0, capY + 0.04, 0));
  instances(join(capital), stone, N, (i) => {
    const a = (i + 0.5) * step; return [Math.sin(a) * R, 0, Math.cos(a) * R, a];
  });

  // Dentils sit in the lower cornice shadow; the upper frieze has small rosettes.
  const dentils = N * (low ? 6 : 10), dentil = box(0.27, 0.23, 0.23, 0.018);
  instances(dentil, stone, dentils, (i) => {
    const a = (i + 0.5) / dentils * TAU; return [Math.sin(a) * (R - 0.74), wallTop + 0.19, Math.cos(a) * (R - 0.74), a];
  });
  const medallions = N * (low ? 2 : 3);
  instances(rosette(0.19, low), stone, medallions, (i) => {
    const a = (i + 0.5) / medallions * TAU; return [Math.sin(a) * (R - 0.99), wallTop + 0.65, Math.cos(a) * (R - 0.99), a + Math.PI];
  });
  for (const [r, y, tube] of [[R - 0.78, wallTop + 0.38, 0.038], [R - 1.04, wallTop + 0.96, 0.03]]) {
    staticStone.push(new THREE.TorusGeometry(r, tube, 6, low ? 112 : 192).rotateX(Math.PI / 2).translate(0, y, 0));
  }

  // A carved collar and four scroll supports enrich the existing globe plinth
  // without surrounding or obscuring its moving, engraved sphere.
  const G = L.GLOBE, baseY = L.DAIS.y, plinthLeaf = acanthus(0.27, 0.51, 0.04, low), pp = plinthLeaf.attributes.position;
  for (let i = 0; i < pp.count; i++) pp.setZ(i, pp.getZ(i) - Math.max(0, pp.getY(i)) * 0.32);
  plinthLeaf.computeVertexNormals();
  const plinthLeaves = low ? 8 : 12;
  for (let i = 0; i < plinthLeaves; i++) {
    const a = i / plinthLeaves * TAU;
    staticStone.push(plinthLeaf.clone().translate(0, 0.14, 0.68).rotateY(a).translate(G.x, baseY, G.z));
  }
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * TAU;
    staticStone.push(curve([[0, 0.58, 0.35], [0, 0.79, 0.49], [0, 1.05, 0.57], [0, 1.27, 0.58], [0, 1.38, 0.62]], 0.047, low)
      .rotateY(a).translate(G.x, baseY, G.z));
    staticStone.push(volute(0.12, low).translate(0, 1.05, 0.59).rotateY(a).translate(G.x, baseY, G.z));
  }
  staticStone.push(new THREE.TorusGeometry(0.81, 0.035, 6, 48).rotateX(Math.PI / 2).translate(G.x, baseY + 0.13, G.z));
  staticBrass.push(new THREE.TorusGeometry(0.715, 0.011, 5, 48).rotateX(Math.PI / 2).translate(G.x, baseY + 0.305, G.z));
  staticBrass.push(new THREE.TorusGeometry(0.585, 0.009, 5, 48).rotateX(Math.PI / 2).translate(G.x, baseY + 1.32, G.z));
  for (const [pieces, material] of [[staticStone, stone], [staticBrass, brass]]) {
    const carved = new THREE.Mesh(join(pieces), material); carved.receiveShadow = true;
    // Only the compact, fused support/moulding mesh enters the shadow pass.
    // Repeated architectural relief uses its cavity shading to keep this bounded.
    carved.castShadow = material === stone && !low;
    root.add(carved);
  }
  return root;
}
