import * as THREE from 'three';
import { heightAt, L } from './ground.js';
import { GLSL_BASE } from './atmo.js';
import { clamp, lerp, noise1, windJS, TAU, makeRand } from './util.js';
import { bindMood } from './mood.js';

const offMirror = (o) => { o.layers.set(1); return o; };          // small things the pool does not need to reflect

/** Gold dust in the air of the rotunda, bright where it crosses the light. */
export function buildMotes(W) {
  const N = W.Q.low ? 200 : 560, pos = new Float32Array(N * 3), seed = new Float32Array(N), rand = W.rand;
  for (let i = 0; i < N; i++) { pos[i * 3] = rand() * 30; pos[i * 3 + 1] = rand() * 11; pos[i * 3 + 2] = rand() * 24; seed[i] = rand(); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: W.uTime, uGust: W.uGust, uNight: W.uNight, uOrg: { value: new THREE.Vector3(-15, 0.2, -7) }, uPx: { value: 1 } },
    vertexShader: /* glsl */`
      attribute float aSeed; uniform float uTime; uniform float uGust; uniform vec3 uOrg; uniform float uPx; varying float vA; varying vec3 vDir;
      void main(){
        float sp = 0.5 + aSeed * 0.9;
        vec3 p = position + vec3(uTime * sp * 0.22, sin(uTime * 0.3 * sp + aSeed * 40.0) * 0.5 + uTime * 0.05, -uTime * sp * 0.08);
        p += vec3(sin(uTime * 0.7 + aSeed * 90.0), cos(uTime * 0.9 + aSeed * 50.0), sin(uTime * 0.5 + aSeed * 70.0)) * 0.3;
        p = mod(p, vec3(30.0, 11.0, 24.0)) + uOrg;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.55 + 0.45 * sin(uTime * (1.5 + aSeed * 3.0) + aSeed * 30.0);
        gl_PointSize = uPx * (0.016 + aSeed * 0.028) / -mv.z;
        vec3 e = min(p - uOrg, uOrg + vec3(30.0, 11.0, 24.0) - p);
        vA = tw * smoothstep(0.0, 2.0, min(e.x, min(e.y * 2.0, e.z))) * smoothstep(0.6, 2.5, -mv.z);
        vDir = normalize(p - cameraPosition);
      }`,
    fragmentShader: /* glsl */`
      varying float vA; varying vec3 vDir;
      ${GLSL_BASE}
      void main(){
        float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a;
        float sun = pow(max(dot(vDir, SUN), 0.0), 6.0);
        vec3 tint = mix(vec3(1.0, 0.84, 0.55) * (0.22 + sun * 2.4), vec3(0.62, 0.74, 1.0) * (0.12 + sun * 1.2), uNight);
        gl_FragColor = vec4(tint * a * vA, 1.0);
      }`,
  });
  const pts = offMirror(new THREE.Points(g, m)); pts.frustumCulled = false; pts.renderOrder = 7; W.scene.add(pts);
  W.onResize.push((w, h, dpr) => { m.uniforms.uPx.value = h * dpr * 1.2; });
}

/** Cupped blossom petals and tapered leaves detach from the actual hanging vines. */
export function buildPetals(W) {
  const N = W.Q.low ? 50 : 120, flowerCount = Math.round(N * 0.78), rand = W.rand;

  // Real curved silhouettes, rather than rectangular cards: a rounded, cupped petal
  // and a longer pointed leaf with a raised midrib and a softly curled tip.
  const botanicalGeometry = (leaf) => {
    const rows = 16, columns = 8, pos = [], uv = [], colors = [], indices = [];
    for (let j = 0; j <= rows; j++) {
      const t = j / rows, bell = Math.sin(Math.PI * t);
      const halfWidth = leaf
        ? 0.045 * Math.pow(bell, 0.86) * (1 + 0.018 * Math.sin(t * Math.PI * 16))
        : 0.058 * Math.pow(bell, 0.58) * (0.62 + 0.38 * t);
      for (let i = 0; i <= columns; i++) {
        const u = i / columns, across = u * 2 - 1;
        const x = across * halfWidth * (1 + 0.055 * across * Math.sin(t * Math.PI));
        const y = (t - 0.5) * (leaf ? 0.205 : 0.17);
        const z = leaf
          ? 0.014 * bell * (1 - Math.abs(across)) + 0.012 * t * t + 0.003 * across * Math.sin(t * TAU)
          : 0.025 * across * across * Math.sin(t * Math.PI * 0.9) + 0.016 * t * t * t
            + 0.0025 * Math.sin(t * Math.PI * 5 + across) * across * across;
        pos.push(x, y, z); uv.push(u, t);
        if (leaf) {
          const vein = Math.exp(-across * across * 45) * bell;
          colors.push(0.78 + 0.18 * t + vein * 0.12, 0.83 + 0.14 * t + vein * 0.1, 0.7 + 0.24 * t + vein * 0.1);
        } else {
          const rim = Math.abs(across) * bell;
          colors.push(lerp(0.7, 1, t), lerp(0.49, 0.96, t) - rim * 0.035, lerp(0.66, 0.99, t));
        }
      }
    }
    for (let j = 0; j < rows; j++) for (let i = 0; i < columns; i++) {
      const a = j * (columns + 1) + i, b = a + 1, c = a + columns + 1, d = c + 1;
      indices.push(a, b, c, b, d, c);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices); geo.computeVertexNormals();
    return geo;
  };
  const material = (leaf) => {
    const mat = new THREE.MeshLambertMaterial({
      color: 0xffffff, vertexColors: true, side: THREE.DoubleSide,
      transparent: true, opacity: leaf ? 0.94 : 0.88, depthWrite: false,
      emissive: leaf ? 0x41572d : 0x775062, emissiveIntensity: 0.02,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2,
    });
    bindMood(W, mat, 'emissiveIntensity', 0.02, 0.08);
    mat.forceSinglePass = true;
    return mat;
  };
  const flowers = offMirror(new THREE.InstancedMesh(botanicalGeometry(false), material(false), flowerCount));
  const leaves = offMirror(new THREE.InstancedMesh(botanicalGeometry(true), material(true), N - flowerCount));
  flowers.name = 'Falling blossom petals'; leaves.name = 'Falling vine leaves';
  for (const inst of [flowers, leaves]) {
    inst.frustumCulled = false;
    inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    W.scene.add(inst);
  }

  // Sample the lower parts of real vine cards, including their blossom/leaf color,
  // so new particles leave foliage rather than appearing across an empty sky.
  const sources = [[], []], sample = new THREE.Vector3();
  const vines = W.scene.children.find(o => o.isMesh && !o.isInstancedMesh && o.geometry?.hasAttribute('aH') && o.geometry?.hasAttribute('color'));
  if (vines) {
    vines.updateMatrixWorld(true);
    const vp = vines.geometry.getAttribute('position'), vc = vines.geometry.getAttribute('color'), vh = vines.geometry.getAttribute('aH');
    for (let i = 0; i + 3 < vp.count; i += 16) {
      const flex = vh.getX(i);
      if (flex < 0.22) continue;
      sample.set(0, 0, 0);
      for (let k = 0; k < 4; k++) sample.add(new THREE.Vector3().fromBufferAttribute(vp, i + k));
      sample.multiplyScalar(0.25).applyMatrix4(vines.matrixWorld);
      if (sample.z > L.CAM.z - 2.5 || sample.y < 3) continue;
      const isLeaf = vc.getY(i) > vc.getX(i) * 1.08 && vc.getY(i) > vc.getZ(i) * 1.12;
      sources[isLeaf ? 1 : 0].push({ x: sample.x, y: sample.y, z: sample.z, flex });
    }
  }
  // Standalone scene previews can omit the foliage builder; retain plausible eaves.
  for (const pool of sources) if (!pool.length) {
    for (let i = 0; i < 18; i++) {
      const a = (i + 0.5) / 18 * TAU, r = L.ROTUNDA.r - 1.15;
      const z = Math.cos(a) * r;
      if (z < L.CAM.z - 2.5) pool.push({ x: Math.sin(a) * r, y: (W.dome?.wallTop || 12) - 2.7, z, flex: 0.6 });
    }
  }
  const palettes = [
    [0xf4d5e4, 0xead6f5, 0xf6e6d9, 0xefc4d5],
    [0x93af72, 0xb1bb7e, 0x7da47b, 0xc1c79a],
  ];
  const particles = [], m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const scale = new THREE.Vector3(), position = new THREE.Vector3(), tint = new THREE.Color();
  const spawn = (o, warm, time = 0) => {
    const pool = sources[o.leaf ? 1 : 0], source = pool[Math.floor(rand() * pool.length)];
    const [wx, wz] = windJS(source.x * 0.35 + source.y * 0.2, source.z * 0.35 + source.y * 0.2, time, W.uGust.value);
    const bend = source.flex * source.flex * 0.5;
    o.x = source.x + wx * bend; o.y = source.y; o.z = source.z + wz * bend;
    o.vx = 0; o.vy = 0; o.vz = 0;
    o.life = 22 + rand() * 16; o.ph = rand() * 90; o.sp = 1.2 + rand() * 2.4;
    o.size = 0.78 + rand() * 0.52;
    if (warm) {
      const age = rand() * o.life * 0.9;
      o.y = Math.max(heightAt(o.x, o.z) + 0.04, o.y - age * 0.6);
      o.x += Math.min(age, 14) * 0.25; o.z -= Math.min(age, 14) * 0.08; o.life -= age;
    }
  };
  for (let i = 0; i < N; i++) {
    const leaf = i >= flowerCount, inst = leaf ? leaves : flowers, index = leaf ? i - flowerCount : i;
    const o = { leaf, inst, index };
    spawn(o, true); particles.push(o);
    const palette = palettes[leaf ? 1 : 0];
    inst.setColorAt(index, tint.set(palette[Math.floor(rand() * palette.length)]));
  }
  W.updaters.push((t, dt) => {
    const gust = W.uGust.value;
    for (const o of particles) {
      o.life -= dt;
      if (o.life < 0) spawn(o, false, t);
      const gy = heightAt(o.x, o.z), landed = o.y <= gy + 0.041;
      const [wx, wz] = windJS(o.x, o.z, t, gust), k = 1 - Math.exp(-dt * 1.6);
      if (landed) {
        o.y = gy + 0.04; o.vy = 0; o.vx += (wx * 0.05 - o.vx) * k; o.vz += (wz * 0.05 - o.vz) * k;
        if (gust > 0.6 && gy > 0.1) o.y += 0.06;
      } else {
        // Keep the scene's original wind and gust forces, including strong lifts.
        const tx = wx * 0.7 + Math.sin(t * 1.3 + o.ph) * 0.5;
        const tz = wz * 0.7 + Math.cos(t * 1.1 + o.ph) * 0.5;
        const ty = -0.5 + Math.sin(t * 2.1 + o.ph) * 0.4 + gust * 0.9;
        o.vx += (tx - o.vx) * k; o.vy += (ty - o.vy) * k; o.vz += (tz - o.vz) * k;
      }
      o.x += o.vx * dt; o.y = Math.max(o.y + o.vy * dt, heightAt(o.x, o.z) + 0.04); o.z += o.vz * dt;
      const fade = clamp(o.life / 2.5);
      if (landed) e.set(-Math.PI / 2 + Math.sin(t * 0.8 + o.ph) * 0.05, 0, o.ph + t * 0.03);
      else e.set(
        t * o.sp + o.ph + Math.sin(t * o.sp * 2.4 + o.ph) * 0.28,
        t * o.sp * 0.7 + o.ph * 2 + Math.atan2(o.vx, o.vz) * 0.25,
        o.ph + Math.sin(t * o.sp + o.ph) * 0.3 + gust * 0.3,
      );
      q.setFromEuler(e);
      m4.compose(position.set(o.x, o.y, o.z), q, scale.setScalar(fade * o.size));
      o.inst.setMatrixAt(o.index, m4);
    }
    flowers.instanceMatrix.needsUpdate = leaves.instanceMatrix.needsUpdate = true;
  });
}

function wingPair(W, N, span, mat) {
  const tri = (sx) => { const g = new THREE.BufferGeometry(), s = span, P = [[0, 0, 0.2], [0, 0, -0.16], [sx * 0.55, 0, 0.1], [sx, 0, -0.1], [sx * 0.5, 0, -0.1]].map(([x, y, z]) => [x * s, y, z * s]); g.setAttribute('position', new THREE.Float32BufferAttribute([P[0], P[1], P[2], P[1], P[4], P[2], P[2], P[4], P[3]].flat(), 3)); g.computeVertexNormals(); return g; };
  const a = new THREE.InstancedMesh(tri(1), mat, N), b = new THREE.InstancedMesh(tri(-1), mat, N);
  a.frustumCulled = b.frustumCulled = false; W.scene.add(a, b);
  return [a, b];
}

/** A loose flock over the far water, seen through the arches; they flap, then glide. */
export function buildBirds(W) {
  const N = W.Q.low ? 10 : 20, rand = W.mood.name === 'night' ? makeRand(74031) : W.rand;
  const material = new THREE.MeshBasicMaterial({ color: 0xfbf8f2, side: THREE.DoubleSide, transparent: true, depthWrite: false });
  bindMood(W, material, 'opacity', 1, 0);
  const [wa, wb] = wingPair(W, N, 1.1, material);
  const B = []; for (let i = 0; i < N; i++) B.push({ ph: rand() * 0.9 - (i > N * 0.65 ? 2.6 : 0), r: 30 + rand() * 24, h: rand() * 9, f: 5.5 + rand() * 2.5, s: rand() * 50 });
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), qf = new THREE.Quaternion(), e = new THREE.Euler(0, 0, 0, 'YXZ'), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), ax = new THREE.Vector3(0, 0, 1);
  W.updaters.push((t) => {
    const cx = -8 + Math.sin(t * 0.05) * 34, cz = -150 + Math.cos(t * 0.04) * 26, cy = 13;
    for (let i = 0; i < N; i++) {
      const b = B[i], a = t * 0.2 + b.ph + noise1(t * 0.1, b.s) * 0.25, r = b.r + noise1(t * 0.13, b.s + 3) * 9;
      p.set(cx + Math.cos(a) * r, cy + b.h + noise1(t * 0.17, b.s + 7) * 4, cz + Math.sin(a) * r * 0.75);
      const glide = clamp(noise1(t * 0.22, b.s + 11) * 2 + 0.4), flap = Math.sin(t * b.f + b.s) * lerp(0.75, 0.12, glide) + 0.12;
      e.set(noise1(t * 0.3, b.s) * 0.12, Math.atan2(-Math.sin(a), Math.cos(a) * 0.75), -0.35); q.setFromEuler(e);
      qf.setFromAxisAngle(ax, flap); m4.compose(p, qf.premultiply(q), one); wa.setMatrixAt(i, m4);
      qf.setFromAxisAngle(ax, -flap); m4.compose(p, qf.premultiply(q), one); wb.setMatrixAt(i, m4);
    }
    wa.instanceMatrix.needsUpdate = wb.instanceMatrix.needsUpdate = true;
  });
}

/** A few butterflies over the lilies near the cat. */
export function buildButterflies(W) {
  const N = 6, rand = W.mood.name === 'night' ? makeRand(74032) : W.rand;
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.3, side: THREE.DoubleSide, transparent: true, depthWrite: false });
  bindMood(W, material, 'opacity', 1, 0);
  const [wa, wb] = wingPair(W, N, 0.075, material);
  offMirror(wa); offMirror(wb);
  const c = new THREE.Color(), pal = [0xffd23f, 0xffffff, 0xffe9a8, 0xfff4f6, 0xffffff, 0xffd23f];
  const B = []; for (let i = 0; i < N; i++) { B.push({ x: -3.5 + rand() * 8, z: 4.5 + rand() * 6.5, s: rand() * 80 }); wa.setColorAt(i, c.set(pal[i])); wb.setColorAt(i, c); }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), qf = new THREE.Quaternion(), e = new THREE.Euler(0, 0, 0, 'YXZ'), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), ax = new THREE.Vector3(0, 0, 1), last = B.map(() => new THREE.Vector3());
  W.updaters.push((t) => {
    for (let i = 0; i < N; i++) {
      const b = B[i], x = b.x + noise1(t * 0.23, b.s) * 2.6 + noise1(t * 1.1, b.s + 2) * 0.35, z = b.z + noise1(t * 0.19, b.s + 5) * 2.2 + noise1(t * 1.3, b.s + 9) * 0.3;
      const rest = clamp(noise1(t * 0.12, b.s + 20) * 3 - 1.2);       // now and then one settles
      const y = heightAt(x, z) + lerp(0.7 + noise1(t * 0.5, b.s + 13) * 0.4 + Math.abs(Math.sin(t * 9 + b.s)) * 0.06, 0.1, rest);
      p.set(x, y, z);
      const yaw = Math.atan2(x - last[i].x, z - last[i].z); last[i].copy(p);
      const flap = lerp(Math.sin(t * 22 + b.s) * 1.0 + 0.35, 1.1 + Math.sin(t * 2 + b.s) * 0.25, rest);
      e.set(-0.25, yaw, 0); q.setFromEuler(e);
      qf.setFromAxisAngle(ax, flap); m4.compose(p, qf.premultiply(q), one); wa.setMatrixAt(i, m4);
      qf.setFromAxisAngle(ax, -flap); m4.compose(p, qf.premultiply(q), one); wb.setMatrixAt(i, m4);
    }
    wa.instanceMatrix.needsUpdate = wb.instanceMatrix.needsUpdate = true;
  });
}

/** Fireflies over the pool after dark: each wanders, and pulses on its own beat. */
export function buildFireflies(W) {
  const N = W.Q.low ? 26 : 48, rand = W.mood.name === 'night' ? W.rand : makeRand(74033), pos = new Float32Array(N * 3), col = new Float32Array(N * 3), F = [];
  while (F.length < N) {             // spread over the pool, but never right in front of the lens
    const a = rand() * TAU, r = 5.5 + rand() * 9.5, x = Math.sin(a) * r, z = Math.cos(a) * r * 0.9 + 1;
    if (Math.hypot(x - L.CAM.x, z - L.CAM.z) < 5.5) continue;
    F.push({ x, z, y: 0.35 + rand() * rand() * 3.2, s: rand() * 90, f: 0.5 + rand() * 0.9 });
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.1, map: W.tex.glow, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
  bindMood(W, pts.material, 'opacity', 0, 1);
  pts.frustumCulled = false; pts.renderOrder = 7; W.scene.add(pts);           // these are mirrored: points of light doubled in the water
  W.updaters.push((t) => {
    for (let i = 0; i < N; i++) {
      const o = F[i], k = i * 3, glow = Math.pow(Math.max(0, Math.sin(t * o.f + o.s)), 3) * 2.2 + 0.12;
      pos[k] = o.x + noise1(t * 0.12, o.s) * 1.3; pos[k + 1] = o.y + noise1(t * 0.2, o.s + 4) * 0.5 + 0.3; pos[k + 2] = o.z + noise1(t * 0.1, o.s + 8) * 1.3;
      col[k] = 1.0 * glow; col[k + 1] = 0.86 * glow; col[k + 2] = 0.42 * glow;
    }
    g.attributes.position.needsUpdate = g.attributes.color.needsUpdate = true;
  });
}
