import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { L, STONES } from './ground.js';
import { GLSL_WIND } from './atmo.js';
import { mesh, group, lathe, lamp, setLamp, shadows, fuse } from './kit.js';
import { clamp, lerp, TAU } from './util.js';
import { bindMood } from './mood.js';

// Broad connected leaves and overlapping wisteria petals share one atlas.
// A card is only a few pixels wide in the garden view, so coverage matters more
// than many separate leaflets, which disappear into the alpha mipmaps.
function botanicalTextures(W) {
  if (W.botanicalTextures) return W.botanicalTextures;
  const color = document.createElement('canvas'), relief = document.createElement('canvas');
  color.width = relief.width = 512; color.height = relief.height = 256;
  const c = color.getContext('2d'), h = relief.getContext('2d');
  h.fillStyle = '#808080'; h.fillRect(0, 0, 512, 256);
  const leaf = (x, y, angle, length, width) => {
    for (const [ctx, heightMap] of [[c, false], [h, true]]) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(angle);
      const gradient = ctx.createLinearGradient(0, -width, length * 0.65, width);
      gradient.addColorStop(0, heightMap ? '#727272' : '#b9c0a5');
      gradient.addColorStop(0.42, heightMap ? '#b0b0b0' : '#e5e8cf');
      gradient.addColorStop(1, heightMap ? '#858585' : '#c0c9aa');
      ctx.fillStyle = gradient; ctx.beginPath(); ctx.moveTo(0, 0);
      ctx.bezierCurveTo(length * 0.26, -width, length * 0.74, -width * 0.75, length, 0);
      ctx.bezierCurveTo(length * 0.68, width * 0.72, length * 0.22, width * 0.85, 0, 0);
      ctx.fill(); ctx.clip();
      ctx.strokeStyle = heightMap ? '#cacaca' : 'rgba(221,225,198,0.68)'; ctx.lineWidth = heightMap ? 2.2 : 1.3;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(length * 0.45, -1.8, length * 0.94, 0); ctx.stroke();
      ctx.lineWidth = 0.8;
      for (let j = 1; j < 6; j++) for (const sign of [-1, 1]) {
        const t = j / 7;
        ctx.beginPath(); ctx.moveTo(t * length, -1);
        ctx.quadraticCurveTo((t + 0.08) * length, sign * width * 0.3, (t + 0.16) * length, sign * width * 0.75 * Math.sin(t * Math.PI)); ctx.stroke();
      }
      ctx.restore();
    }
  };
  c.strokeStyle = '#a6af86'; c.lineWidth = 4;
  c.beginPath(); c.moveTo(128, 247); c.quadraticCurveTo(118, 134, 130, 28); c.stroke();
  leaf(126, 218, -2.58, 132, 79);
  leaf(128, 205, -0.65, 140, 78);
  leaf(128, 183, -Math.PI / 2, 169, 94);
  for (const [x, y, angle, size] of [[382, 65, -0.12, 2.0], [355, 137, 0.3, 1.65], [409, 151, -0.35, 1.5], [386, 204, -0.18, 1.1]]) {
    for (const [ctx, heightMap] of [[c, false], [h, true]]) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(angle); ctx.scale(size, size);
      const gradient = ctx.createRadialGradient(-9, -7, 4, 0, 5, 39);
      gradient.addColorStop(0, heightMap ? '#b9b9b9' : '#f4eeeb');
      gradient.addColorStop(1, heightMap ? '#777777' : '#c4bacd');
      ctx.fillStyle = gradient; ctx.beginPath(); ctx.moveTo(0, -27);
      ctx.bezierCurveTo(-37, -17, -29, 28, 0, 40);
      ctx.bezierCurveTo(31, 25, 33, -15, 0, -27); ctx.fill(); ctx.restore();
    }
  }
  const map = new THREE.CanvasTexture(color), bump = new THREE.CanvasTexture(relief);
  map.colorSpace = THREE.SRGBColorSpace; bump.colorSpace = THREE.NoColorSpace;
  map.anisotropy = bump.anisotropy = Math.min(8, W.renderer.capabilities.getMaxAnisotropy());
  W.botanicalTextures = { map, bump };
  return W.botanicalTextures;
}

/**
 * Wind + backlight for plants. Geometry carries aH (0 where it is attached, 1 where it swings most).
 * Works for instanced and plain meshes (plain meshes must sit at the origin).
 */
export function windPatch(mat, W, { bend = 0.3, glow = 1.0, nightGlow = glow, root = 1.0, upNormal = false, self = 0, nightSelf = self, moodColors = false } = {}) {
  const uPlantGlow = { value: glow }, uPlantFill = { value: self };
  bindMood(W, uPlantGlow, 'value', glow, nightGlow);
  bindMood(W, uPlantFill, 'value', self, nightSelf);
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = W.uTime; sh.uniforms.uGust = W.uGust; sh.uniforms.uPush = W.uPush;
    sh.uniforms.uPlantGlow = uPlantGlow; sh.uniforms.uPlantFill = uPlantFill;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>\nattribute float aH; varying float vH; varying vec3 vWp;\n${GLSL_WIND}`)
      .replace('#include <begin_vertex>', /* glsl */`#include <begin_vertex>
        vec3 plantPosition = transformed;
        #ifdef USE_INSTANCING
          plantPosition = (instanceMatrix * vec4(transformed, 1.0)).xyz;
          vec2 wv = windAt( instanceMatrix[3].xz );
        #else
          vec2 wv = windAt( plantPosition.xz * 0.35 + plantPosition.y * 0.2 );
        #endif
        float hb = aH * aH * ${bend.toFixed(3)};
        plantPosition.xz += wv * hb;
        #ifdef USE_INSTANCING
          transformed += inverse(mat3(instanceMatrix)) * vec3(wv.x * hb, 0.0, wv.y * hb);
        #else
          transformed = plantPosition;
        #endif
        vH = aH; vWp = (modelMatrix * vec4(plantPosition, 1.0)).xyz;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vH; varying vec3 vWp; uniform float uPlantGlow; uniform float uPlantFill;')
      .replace('#include <color_fragment>', `#include <color_fragment>\n diffuseColor.rgb *= mix( ${root.toFixed(2)}, 1.0, smoothstep( 0.0, 0.85, vH ) );`)
      .replace('#include <emissivemap_fragment>', /* glsl */`#include <emissivemap_fragment>
        vec3 wV = normalize( cameraPosition - vWp );
        float back = pow( max( dot( -wV, SUN ), 0.0 ), 2.5 );
        float leafBack = max(dot(-normal, normalize(mat3(viewMatrix) * SUN)), 0.0);
        totalEmissiveRadiance += diffuseColor.rgb * fogTint( SUN ) * back * leafBack * uPlantGlow + diffuseColor.rgb * uPlantFill;`);
    if (moodColors) {
      sh.uniforms.uNight = W.uNight;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute vec3 aNightColor; uniform float uNight;')
        .replace('#include <color_vertex>', '#include <color_vertex>\nvColor.rgb = mix(vColor.rgb, aNightColor, uNight);');
    }
    if (upNormal) sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', 'float faceDirection = 1.0; vec3 normal = normalize( vNormal ); vec3 nonPerturbedNormal = normal;');
  };
  // Lighting endpoints are uniforms; only structural shader differences need variants.
  mat.customProgramCacheKey = () => `botanical-wind-3:${bend}:${root}:${upNormal}:${moodColors}`;
  return mat;
}

/** Vines and wisteria hanging from the cornice, the arches and the eye of the dome. */
export function buildVines(W) {
  const rand = W.rand, R = L.ROTUNDA.r, dome = W.dome, surface = botanicalTextures(W);
  const pos = [], nor = [], uv = [], col = [], nightCol = [], aH = [], idx = [];
  const greens = [0x81995d, 0x708b53, 0x9fae70, 0x63834f, 0xaab67c].map(h => new THREE.Color(h));
  const blooms = [0xe3d8f1, 0xd7c1ed, 0xbfa3df, 0xf0ddeb].map(h => new THREE.Color(h));
  const nightBlooms = [0xb9a4ff, 0x9d86f0, 0xd6c8ff, 0xf0eaff].map(h => new THREE.Color(h));
  const c = new THREE.Color(), cn = new THREE.Color(), t1 = new THREE.Vector3(), t2 = new THREE.Vector3(), n = new THREE.Vector3();
  const card = (x, y, z, s, color, flex, out, flower) => {
    n.set(out.x + (rand() - 0.5) * 1.4, (rand() - 0.5) * 1.2, out.z + (rand() - 0.5) * 1.4).normalize();
    t1.set(rand() - 0.5, rand() - 0.5, rand() - 0.5).cross(n).normalize(); t2.crossVectors(n, t1);
    const b = pos.length / 3;
    for (const [u, v] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      pos.push(x + (t1.x * u + t2.x * v) * s, y + (t1.y * u + t2.y * v) * s, z + (t1.z * u + t2.z * v) * s);
      nor.push(n.x, n.y, n.z); uv.push((u * 0.5 + 0.5) * 0.5 + (flower ? 0.5 : 0), v * 0.5 + 0.5); col.push(color.r, color.g, color.b); aH.push(flex);
      nightCol.push(cn.r, cn.g, cn.b);
    }
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  };
  const out = new THREE.Vector3();
  /** One strand from (x, y, z), hanging `len` metres; `bloom` ends it in a wisteria raceme. */
  const strand = (x, y, z, len, bloom, thick = 1) => {
    out.set(-x, 0, -z).normalize();                                   // faces the middle of the pool
    const drift = (rand() - 0.5) * 0.35, steps = Math.max(4, Math.round(len / 0.075)), ph = rand() * 9, from = bloom ? 0.5 + rand() * 0.2 : 2;
    for (let i = 0; i < steps; i++) {
      const u = i / steps, yy = y - u * len, sway = Math.sin(u * 5 + ph) * 0.08 * u, jx = (rand() - 0.5) * 0.12, jz = (rand() - 0.5) * 0.12;
      const flower = u > from, k = flower ? lerp(1.0, 0.3, (u - from) / (1 - from)) : lerp(1.0, 0.6, u);
      const colorIndex = Math.floor(rand() * (flower ? blooms.length : greens.length)), colorScale = 0.82 + rand() * 0.36;
      c.copy((flower ? blooms : greens)[colorIndex]).multiplyScalar(colorScale);
      cn.copy((flower ? nightBlooms : greens)[colorIndex]).multiplyScalar(colorScale);
      const px = x + out.x * (0.08 + sway) + drift * u + jx * k, pz = z + out.z * (0.08 + sway) + drift * u + jz * k, flex = clamp(u * len / 3.2);
      card(px, yy, pz, (flower ? 0.075 + rand() * 0.05 : 0.07 + rand() * 0.065) * thick * k, c, flex, out, flower);
      if (flower) card(px + (rand() - 0.5) * 0.14 * k, yy - 0.02, pz + (rand() - 0.5) * 0.14 * k, (0.06 + rand() * 0.04) * thick * k, c, flex, out, true);
    }
  };
  const D = W.Q.vines;
  // from the cornice, thicker over the columns
  for (let i = 0, N = Math.round(300 * D); i < N; i++) {
    const a = i / N * TAU + rand() * 0.02, overColumn = Math.cos((a / TAU * L.ROTUNDA.bays - 0.5) * TAU) * 0.5 + 0.5;
    if (rand() > 0.3 + overColumn * 0.7) continue;
    strand(Math.sin(a) * (R - 0.85), dome.wallTop + 0.1, Math.cos(a) * (R - 0.85), 0.6 + rand() * rand() * (1.8 + overColumn * 3.6), rand() < 0.4, 1.0 + overColumn * 0.35);
  }
  // garlands in the arch heads
  for (let i = 0; i < L.ROTUNDA.bays; i++) for (let k = 0, K = Math.round(9 * D); k < K; k++) {
    const b = i * TAU / L.ROTUNDA.bays, u = (k + rand()) / K * 2 - 1, rc = R * Math.cos(Math.PI / L.ROTUNDA.bays) - 0.5, x0 = u * dome.ra * 0.92, yTop = dome.spring + Math.sqrt(Math.max(0, dome.ra ** 2 - x0 ** 2));
    strand(Math.sin(b) * rc + Math.cos(b) * x0, yTop, Math.cos(b) * rc - Math.sin(b) * x0, 0.3 + rand() * rand() * 2.2 * (0.35 + Math.abs(u)), rand() < 0.45, 0.85);
  }
  // long curtains from the eye of the dome and its rings
  for (let i = 0, N = Math.round(70 * D); i < N; i++) { const a = rand() * TAU; strand(Math.sin(a) * dome.eyeR, dome.eyeY - 0.15, Math.cos(a) * dome.eyeR, 2.5 + rand() * 7.5, rand() < 0.6, 1.4); }
  for (const u of [0.5, 0.72]) { const p = dome.curve(u); for (let i = 0, N = Math.round(60 * D); i < N; i++) { const a = rand() * TAU; strand(Math.sin(a) * p.x, p.y - 0.1, Math.cos(a) * p.x, 0.6 + rand() * rand() * 4, rand() < 0.4, 1.3); } }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setAttribute('aH', new THREE.Float32BufferAttribute(aH, 1));
  g.setAttribute('aNightColor', new THREE.Float32BufferAttribute(nightCol, 3));
  g.setIndex(idx);
  const mat = windPatch(new THREE.MeshStandardMaterial({ map: surface.map, bumpMap: surface.bump, bumpScale: 0.0007, roughness: 0.8, metalness: 0, envMap: W.env, envMapIntensity: 0.25, alphaTest: 0.42, vertexColors: true, side: THREE.DoubleSide }), W, { bend: 0.5, glow: 0.28, nightGlow: 0.18, self: 0.13, nightSelf: 0.05, root: 0.9, moodColors: true });
  const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; m.frustumCulled = false;
  m.customDepthMaterial = windPatch(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: surface.map, alphaTest: 0.42 }), W, { bend: 0.5 });
  W.scene.add(m);
  return m;
}

/** Lily pads on the pool, with a few lotus flowers standing among them. */
export function buildLilies(W) {
  const rand = W.rand, N = W.Q.low ? 150 : 300;
  const pads = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 20).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: W.tex.lily, bumpMap: W.tex.lily, bumpScale: 0.003, roughness: 0.68, metalness: 0, envMap: W.env, envMapIntensity: 0.12, alphaTest: 0.5, color: 0xb3c1a0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -60 }), N);     // the pool is one huge quad, so its depth is coarse: keep the pads clear of it
  bindMood(W, pads.material, 'color', 0xb3c1a0, 0xb8d0c8);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p = new THREE.Vector3(), s = new THREE.Vector3(), spots = [];
  const clear = (x, z, r) => Math.hypot(x, z) > L.DAIS.r + 1.6 + r && Math.hypot(x, z) < L.WALK.r0 - 0.6 - r && STONES.every(([sx, sz, sr]) => Math.hypot(x - sx, z - sz) > sr + 0.3 + r);
  let n = 0, guard = 0;
  while (n < N && guard++ < 6000) {
    // drifts of pads, thicker on the side of the pool the visitor looks across
    const a = (rand() - 0.5) * TAU * (rand() < 0.62 ? 0.42 : 1), rr = L.DAIS.r + 1.9 + Math.pow(rand(), 0.9) * 10.4, x = Math.sin(a) * rr + (rand() - 0.5), z = Math.cos(a) * rr + (rand() - 0.5), r = 0.24 + rand() * rand() * 0.5;
    if (!clear(x, z, r) || Math.sin(x * 0.7 + 1) * Math.cos(z * 0.6) < -0.32 || (Math.abs(x - 0.4) < 1.3 && z > 11.8)) continue;
    if (spots.some(o => Math.hypot(o.x - x, o.z - z) < (o.r + r) * 0.94)) continue;
    spots.push({ x, z, r });
    q.setFromAxisAngle(up, rand() * TAU); m4.compose(p.set(x, 0.03 + rand() * 0.008, z), q, s.set(r, 1, r)); pads.setMatrixAt(n++, m4);
  }
  pads.count = n; pads.receiveShadow = true; pads.frustumCulled = false; W.scene.add(pads);

  // lotus: two rings of petals around a gold heart
  const petal = new THREE.SphereGeometry(1, 7, 4); petal.scale(0.3, 1, 0.09); petal.translate(0, 1, 0);
  const parts = [];
  for (const [count, tilt, len] of [[9, 1.05, 0.3], [7, 0.6, 0.26], [5, 0.25, 0.2]]) for (let i = 0; i < count; i++) {
    const g = petal.clone(); g.scale(len * 0.38, len * 0.38, len * 0.38); g.rotateX(tilt); g.rotateY(i / count * TAU + tilt); parts.push(g);
  }
  const flowerGeo = mergeGeometries(parts);
  const fm = new THREE.MeshStandardMaterial({ color: 0xf3dfe6, roughness: 0.79, metalness: 0, envMap: W.env, envMapIntensity: 0.1, emissive: 0xffc9d8, emissiveIntensity: 0, side: THREE.DoubleSide });
  bindMood(W, fm, 'emissiveIntensity', 0, 0.14);
  const NF = W.Q.low ? 10 : 22, front = spots.filter(o => o.z > 2 && o.r > 0.3), flowers = new THREE.InstancedMesh(flowerGeo, fm, NF), hearts = new THREE.InstancedMesh(new THREE.SphereGeometry(0.05, 8, 6), W.mat.gold, NF), glows = [];
  for (let i = 0; i < NF; i++) {
    const pool = i % 4 && front.length ? front : spots, o = pool[Math.floor(rand() * pool.length)], k = 0.85 + rand() * 0.7;
    q.setFromAxisAngle(up, rand() * TAU); m4.compose(p.set(o.x + 0.1, 0.05, o.z), q, s.set(k, k, k)); flowers.setMatrixAt(i, m4);
    m4.compose(p.set(o.x + 0.1, 0.05 + 0.05 * k, o.z), q, s.set(k, k, k)); hearts.setMatrixAt(i, m4);
    const l = lamp(W, 0xffd6e2, 0.9, 0.9); l.position.set(o.x + 0.1, 0.16, o.z);
    bindMood(W, l.material, 'opacity', 0, 1); W.scene.add(l); glows.push(l);
  }
  flowers.castShadow = flowers.receiveShadow = true; flowers.frustumCulled = hearts.frustumCulled = false; W.scene.add(flowers, hearts);
  if (glows.length) W.updaters.push((t) => glows.forEach((l, i) => setLamp(l, 0.8 + 0.2 * Math.sin(t * 1.1 + i * 2.3))));
}

/** Marble planters of white roses; at night the blooms give off their own light. */
export function buildRoses(W) {
  const rand = W.rand, M = W.mat, surface = botanicalTextures(W);
  const spots = [[-1.9, -3.5, 0, L.DAIS.y], [2.6, -3.3, 0, L.DAIS.y], [4.1, 0.9, 0, L.DAIS.y]];
  for (const i of [6, 12]) { const a = (i + 0.5) * TAU / L.ROTUNDA.bays; spots.push([Math.sin(a) * (L.WALK.r0 + 0.8), Math.cos(a) * (L.WALK.r0 + 0.8), a, L.WALK.y]); }
  // leaves: cards on a rounded shrub
  const pos = [], nor = [], uv = [], col = [], aH = [], idx = [], c = new THREE.Color(), t1 = new THREE.Vector3(), t2 = new THREE.Vector3(), n = new THREE.Vector3(), d = new THREE.Vector3();
  const roseAt = [], pots = new THREE.Group(); W.scene.add(pots);
  for (const [x, z, ry, y0] of spots) {
    const pot = group(x, y0, z, mesh(lathe([[0, 0], [0.42, 0], [0.46, 0.08], [0.36, 0.16], [0.4, 0.5], [0.56, 0.62], [0.5, 0.7], [0.44, 0.66], [0, 0.66]], 28), M.marble), mesh(new THREE.TorusGeometry(0.54, 0.02, 6, 40).rotateX(Math.PI / 2), M.gold, 0, 0.63, 0));
    pot.rotation.y = ry; shadows(pot); pots.add(pot);
    for (let i = 0; i < 150; i++) {
      d.set(rand() * 2 - 1, rand() * 1.3 - 0.2, rand() * 2 - 1).normalize(); const rr = 0.3 + rand() * 0.42;
      const px = x + d.x * rr, py = y0 + 1.15 + d.y * rr * 0.9, pz = z + d.z * rr, s = 0.09 + rand() * 0.07, b = pos.length / 3;
      n.copy(d).add(t1.set(rand() - 0.5, rand() - 0.5, rand() - 0.5)).normalize(); t1.set(rand() - 0.5, rand() - 0.5, rand() - 0.5).cross(n).normalize(); t2.crossVectors(n, t1);
      c.set(i % 3 ? 0x6d8b51 : 0x8fa268).multiplyScalar(0.82 + rand() * 0.3 + d.y * 0.12);
      for (const [u, v] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { pos.push(px + (t1.x * u + t2.x * v) * s, py + (t1.y * u + t2.y * v) * s, pz + (t1.z * u + t2.z * v) * s); nor.push(n.x, n.y, n.z); uv.push((u * 0.5 + 0.5) * 0.5, v * 0.5 + 0.5); col.push(c.r, c.g, c.b); aH.push(clamp(0.2 + d.y * 0.5)); }
      idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
    }
    for (let i = 0; i < 9; i++) { d.set(rand() * 2 - 1, rand() * 1.2 + 0.05, rand() * 2 - 1).normalize(); roseAt.push([x + d.x * 0.72, y0 + 1.15 + d.y * 0.7, z + d.z * 0.72, 0.085 + rand() * 0.05]); }
  }
  fuse(pots);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setAttribute('aH', new THREE.Float32BufferAttribute(aH, 1)); g.setIndex(idx);
  const leaves = new THREE.Mesh(g, windPatch(new THREE.MeshStandardMaterial({ map: surface.map, bumpMap: surface.bump, bumpScale: 0.0008, roughness: 0.76, metalness: 0, envMap: W.env, envMapIntensity: 0.25, alphaTest: 0.42, vertexColors: true, side: THREE.DoubleSide }), W, { bend: 0.12, glow: 0.24, self: 0.11, nightSelf: 0.045 }));
  leaves.castShadow = leaves.receiveShadow = true; leaves.frustumCulled = false;
  leaves.customDepthMaterial = windPatch(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: surface.map, alphaTest: 0.42 }), W, { bend: 0.12 });
  W.scene.add(leaves);
  // blooms: a few overlapping shells read as petals at this size
  const shells = []; for (let i = 0; i < 4; i++) { const s = new THREE.SphereGeometry(1, 7, 4, 0, TAU, 0, 1.9); s.scale(1 - i * 0.17, 0.8 + i * 0.12, 1 - i * 0.17); s.rotateX((i % 2 ? 1 : -1) * 0.25); s.rotateY(i * 1.3); shells.push(s); }
  const rose = new THREE.InstancedMesh(mergeGeometries(shells), new THREE.MeshStandardMaterial({ color: 0xf5eee3, roughness: 0.8, metalness: 0, envMap: W.env, envMapIntensity: 0.1, emissive: 0xfff0d8, emissiveIntensity: 0, side: THREE.DoubleSide }), roseAt.length);
  bindMood(W, rose.material, 'emissiveIntensity', 0, 0.18);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s3 = new THREE.Vector3(), glows = [];
  roseAt.forEach(([x, y, z, r], i) => {
    q.setFromEuler(e.set((rand() - 0.5) * 0.9, rand() * TAU, (rand() - 0.5) * 0.9)); m4.compose(p.set(x, y, z), q, s3.set(r, r, r)); rose.setMatrixAt(i, m4);
    if (i % 3 === 0) { const l = lamp(W, 0xfff0d0, 0.5, 0.7); l.position.set(x, y, z); bindMood(W, l.material, 'opacity', 0, 1); W.scene.add(l); glows.push(l); }
  });
  rose.castShadow = rose.receiveShadow = true; rose.frustumCulled = false; W.scene.add(rose);
  if (glows.length) W.updaters.push((t) => glows.forEach((l, i) => setLamp(l, 0.75 + 0.25 * Math.sin(t * 0.9 + i * 1.9))));
}
