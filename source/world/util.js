import * as THREE from 'three';

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const easeIO = (t) => { t = clamp(t); return t * t * t * (t * (6 * t - 15) + 10); };   // minimum-jerk
export const TAU = Math.PI * 2;

export function makeRand(seed = 7) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

const h2 = (x, z) => { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); };
export function vnoise(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = h2(xi, zi), b = h2(xi + 1, zi), c = h2(xi, zi + 1), d = h2(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, z, oct = 4) {
  let a = 0.5, f = 1, s = 0, n = 0;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, z * f); n += a; a *= 0.5; f *= 2.03; }
  return s / n;
}
export function ridged(x, z, oct = 4) {
  let a = 0.5, f = 1, s = 0, n = 0;
  for (let i = 0; i < oct; i++) { const v = 1 - Math.abs(vnoise(x * f, z * f) * 2 - 1); s += a * v * v; n += a; a *= 0.5; f *= 2.07; }
  return s / n;
}
/** Smooth 1D noise in -1..1 */
export const noise1 = (t, seed = 0) => vnoise(t, seed * 13.7 + 0.5) * 2 - 1;

/** Damped spring for scalars: natural, slightly organic motion instead of linear tweens. */
export class Spring {
  constructor(x = 0, k = 40, zeta = 0.8) { this.x = x; this.v = 0; this.k = k; this.c = 2 * Math.sqrt(k) * zeta; }
  step(target, dt) {
    // Small integration steps keep the same weight and overshoot at different frame rates.
    const n = Math.max(1, Math.ceil(dt * 120)), h = dt / n;
    for (let i = 0; i < n; i++) { this.v += (this.k * (target - this.x) - this.c * this.v) * h; this.x += this.v * h; }
    return this.x;
  }
}
export class Spring3 {
  constructor(v = new THREE.Vector3(), k = 40, zeta = 0.8) { this.x = v.clone(); this.v = new THREE.Vector3(); this.k = k; this.c = 2 * Math.sqrt(k) * zeta; }
  step(target, dt) {
    const n = Math.max(1, Math.ceil(dt * 120)), h = dt / n;
    for (let i = 0; i < n; i++) {
      this.v.x += (this.k * (target.x - this.x.x) - this.c * this.v.x) * h;
      this.v.y += (this.k * (target.y - this.x.y) - this.c * this.v.y) * h;
      this.v.z += (this.k * (target.z - this.x.z) - this.c * this.v.z) * h;
      this.x.addScaledVector(this.v, h);
    }
    return this.x;
  }
}

/** Wind field, mirrored in GLSL (atmo.js GLSL_WIND). Returns [wx, wz]. */
export function windJS(x, z, t, gust = 0) {
  const g1 = Math.sin(x * 0.11 + z * 0.045 - t * 1.25);
  const g2 = Math.sin(-x * 0.04 + z * 0.13 - t * 0.8 + 1.7);
  const g = smooth(-0.3, 1.0, g1 * 0.6 + g2 * 0.4);
  const fl = Math.sin(x * 2.3 + t * 3.7) * Math.sin(z * 1.9 - t * 2.9);
  const k = 0.16 + 0.95 * g;
  return [k + fl * 0.06 + 0.25 * gust, -0.25 * k - fl * 0.06 - gust];
}

// ---------- procedural textures ----------
const canvas = (w, h = w) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
const tex = (c, repeat = false) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
};

export function glowTexture() {
  const c = canvas(128), g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.18, 'rgba(255,255,255,0.75)');
  gr.addColorStop(0.45, 'rgba(255,255,255,0.22)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return tex(c);
}

export function noiseTexture(size = 256, cells = 8) {
  const c = canvas(size), g = c.getContext('2d'), img = g.createImageData(size, size);
  const per = (x, z, p) => {
    const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
    const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
    const H = (a, b) => h2(((a % p) + p) % p, ((b % p) + p) % p);
    const a = H(xi, zi), b = H(xi + 1, zi), cc = H(xi, zi + 1), d = H(xi + 1, zi + 1);
    return a + (b - a) * u + (cc - a) * v + (a - b - cc + d) * u * v;
  };
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let s = 0, a = 0.5, f = 1;
    for (let o = 0; o < 4; o++) { s += a * per(x / size * cells * f, y / size * cells * f, cells * f); a *= 0.5; f *= 2; }
    const v = Math.floor(clamp(0.42 + s * 0.68) * 255), i = (y * size + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return tex(c, true);
}

/** Hull plating: panels, seams, a few painted accents. */
export function panelTexture(rand, base = [242, 238, 229]) {
  const S = 512, c = canvas(S), g = c.getContext('2d');
  g.fillStyle = `rgb(${base})`; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 170; i++) {
    const w = (1 + Math.floor(rand() * 5)) * 16, h = (1 + Math.floor(rand() * 3)) * 16;
    const x = Math.floor(rand() * 32) * 16, y = Math.floor(rand() * 32) * 16;
    const d = Math.floor((rand() - 0.5) * 26);
    g.fillStyle = `rgb(${base.map(v => clamp(v + d, 0, 255))})`; g.fillRect(x, y, w, h);
    g.strokeStyle = 'rgba(60,50,36,0.2)'; g.lineWidth = 1; g.strokeRect(x + 0.5, y + 0.5, w, h);
  }
  for (let i = 0; i < 7; i++) {      // accents
    const x = Math.floor(rand() * 30) * 16, y = Math.floor(rand() * 30) * 16;
    g.fillStyle = i % 3 === 0 ? 'rgba(214,170,76,0.9)' : i % 3 === 1 ? 'rgba(176,146,84,0.85)' : 'rgba(60,54,48,0.8)';
    g.fillRect(x, y, i % 2 ? 64 : 16, i % 2 ? 6 : 48);
  }
  for (let i = 0; i < 40; i++) {     // vents
    g.fillStyle = 'rgba(25,28,40,0.55)';
    g.fillRect(Math.floor(rand() * 64) * 8, Math.floor(rand() * 64) * 8, 6, 2);
  }
  return tex(c, true);
}

/** Lit windows for large ships and towers (used as emissiveMap). */
export function windowTexture(rand) {
  const W = 512, H = 256, c = canvas(W, H), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
  for (let y = 10; y < H; y += 14) {
    const band = rand();
    if (band < 0.35) continue;
    for (let x = 4; x < W; x += 7) {
      if (rand() > band * 0.75) continue;
      const warm = rand() < 0.75, a = 0.45 + rand() * 0.55;
      g.fillStyle = warm ? `rgba(255,222,170,${a})` : `rgba(170,215,255,${a})`;
      g.fillRect(x, y, 4, 3);
    }
  }
  return tex(c, true);
}

/** A cluster of leaves on a transparent card. */
export function leafTexture(rand) {
  const S = 256, c = canvas(S), g = c.getContext('2d');
  for (let i = 0; i < 150; i++) {
    const a = rand() * TAU, r = Math.sqrt(rand()) * 112;
    const x = 128 + Math.cos(a) * r, y = 128 + Math.sin(a) * r;
    const v = Math.floor(120 + rand() * 135);
    g.save(); g.translate(x, y); g.rotate(rand() * TAU);
    g.fillStyle = `rgb(${v},${v},${v})`;
    g.beginPath(); g.ellipse(0, 0, 9 + rand() * 9, 4 + rand() * 4, 0, 0, TAU); g.fill();
    g.restore();
  }
  const t = tex(c); t.generateMipmaps = true;
  return t;
}


// Shared by architectural stone and the celestial globe; loaded or baked once.
let marbleCanvas, marblePreparation;

/** Decode the exact baked pixels before construction; missing assets use the bake below.
 *  `url` is the page's versioned address for the texture, so it matches the page's preload and cache. */
export function prepareMarbleTexture(url) {
  if (marbleCanvas?.width === 1024) return Promise.resolve(true);
  return marblePreparation ??= (async () => {
    let timeout;
    try {
      const image = new Image(); image.decoding = 'async';
      image.src = url || new URL('../img/world-marble.webp', import.meta.url).href;
      // This is an optimization: a stalled download must not hold up the scene.
      await Promise.race([
        image.decode(),
        new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error('Texture preload timed out')), 1500); }),
      ]);
      if (image.naturalWidth !== 1024 || image.naturalHeight !== 1024) return false;
      const c = canvas(1024); c.getContext('2d').drawImage(image, 0, 0);
      marbleCanvas = c; return true;
    } catch {
      return false;                         // Keep the procedural texture as an offline/error fallback.
    } finally {
      clearTimeout(timeout);
    }
  })();
}

/** Calacatta-like mineral clouds and irregular grey veins, seamless at tile edges. */
export function marbleTexture(size = 512) {
  size = Math.max(1024, size);
  if (marbleCanvas?.width === size) return tex(marbleCanvas, true);
  const c = canvas(size), g = c.getContext('2d'), img = g.createImageData(size, size), grids = new Map();
  const per = (x, y, period) => {
    if (!grids.has(period)) {
      const cells = new Float32Array(period * period);
      for (let j = 0; j < period; j++) for (let i = 0; i < period; i++) cells[j * period + i] = h2(i + 19.7, j + 43.2);
      grids.set(period, cells);
    }
    const cells = grids.get(period), ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    const ax = ((ix % period) + period) % period, ay = ((iy % period) + period) % period;
    const bx = (ax + 1) % period, by = (ay + 1) % period;
    const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
    return lerp(lerp(cells[ay * period + ax], cells[ay * period + bx], u), lerp(cells[by * period + ax], cells[by * period + bx], u), v);
  };
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    const warpX = (per(u * 3, v * 3, 3) - 0.5) * 2.8;
    const warpY = (per(u * 3 + 0.73, v * 3 + 1.37, 3) - 0.5) * 2.8;
    const qx = u * 6 + v * 6 + warpX + (per(u * 24, v * 24, 24) - 0.5) * 0.28, qy = v * 6 + warpY + (per(u * 24 + 2.7, v * 24 + 5.1, 24) - 0.5) * 0.28;
    const mineral = per(qx, qy, 6) * 0.52 + per(qx * 2 + 0.4, qy * 2 + 0.8, 12) * 0.24 + per(qx * 4, qy * 4, 24) * 0.14 + per(qx * 8, qy * 8, 48) * 0.07 + per(qx * 16, qy * 16, 96) * 0.03;
    const distance = Math.abs(mineral - 0.49);
    const activity = 0.26 + 0.74 * smooth(0.22, 0.72, per(u * 3 + 1.1, v * 3 + 0.3, 3));
    const core = (1 - smooth(0.003, 0.022, distance)) * activity * (0.5 + per(u * 39, v * 39, 39) * 0.5);
    const halo = (1 - smooth(0.025, 0.18, distance)) * activity;
    const fineField = per(qx * 2.5 + 0.3, qy * 2.5 + 0.7, 15) * 0.65 + per(qx * 5, qy * 5, 30) * 0.23 + per(qx * 10, qy * 10, 60) * 0.12;
    const fine = (1 - smooth(0.003, 0.012, Math.abs(fineField - 0.52))) * smooth(0.38, 0.58, mineral) * (1 - smooth(0.10, 0.22, distance));
    const cloud = per(u * 3 + 1.9, v * 3 + 0.2, 3) * 0.45 + per(qx * 2, qy * 2, 12) * 0.32 + per(qx * 6, qy * 6, 36) * 0.15 + per(qx * 12, qy * 12, 72) * 0.08;
    const warm = smooth(0.63, 0.82, per(u * 4 + 1.3, v * 4 + 0.9, 4)) * (core * 0.35 + fine * 0.15);
    const mineralGrain = 0.7 + per(qx * 20, qy * 20, 120) * 0.3;
    const grain = ((((x * 374761393 + y * 668265263) >>> 9) % 17) - 8) * 0.13;
    const i = (y * size + x) * 4;
    const r = 250 - cloud * 24 - halo * 28 - core * 119 * mineralGrain - fine * 18 + grain;
    const gg = 249 - cloud * 25 - halo * 28 - core * 112 * mineralGrain - fine * 16 + grain;
    const b = 245 - cloud * 25 - halo * 26 - core * 99 * mineralGrain - fine * 12 + grain;
    img.data[i] = lerp(r, 164, warm); img.data[i + 1] = lerp(gg, 132, warm); img.data[i + 2] = lerp(b, 78, warm); img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0); marbleCanvas = c;
  return tex(c, true);
}

/** Vertical flutes for column shafts (used as a bump map). */
export function fluteTexture(flutes = 22) {
  const W = 512, c = canvas(W, 8), g = c.getContext('2d'), img = g.createImageData(W, 8);
  for (let x = 0; x < W; x++) { const v = Math.pow(Math.abs(Math.sin(x / W * Math.PI * flutes)), 0.6) * 255; for (let y = 0; y < 8; y++) { const i = (y * W + x) * 4; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; } }
  g.putImageData(img, 0, 0);
  const t = tex(c, true); t.colorSpace = THREE.NoColorSpace; return t;
}

/** A lily pad seen from above: notch, radial veins. */
export function lilyTexture() {
  const S = 256, c = canvas(S), g = c.getContext('2d');
  g.translate(S / 2, S / 2);
  const gr = g.createRadialGradient(0, 0, 8, 0, 0, 124); gr.addColorStop(0, '#9dc56a'); gr.addColorStop(0.7, '#5f9a48'); gr.addColorStop(1, '#3f7a3c');
  g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, 122, 0.16, Math.PI * 2 - 0.16); g.closePath(); g.fill();
  g.strokeStyle = 'rgba(210,235,170,0.55)'; g.lineWidth = 2;
  for (let i = 0; i < 14; i++) { const a = 0.3 + i / 14 * (Math.PI * 2 - 0.6); g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(a) * 116, Math.sin(a) * 116); g.stroke(); }
  const t = tex(c); return t;
}

/** Equirectangular map for the celestial globe: marble with a gold grid, the ecliptic and a scatter of small constellations. */
export function celestialTexture(rand) {
  const Wd = 1024, Hd = 512, c = canvas(Wd, Hd), g = c.getContext('2d');
  g.drawImage(marbleTexture(1024).image, 0, 0, Wd, Hd);
  // The engraved globe uses a paler cut of stone so its gold star chart stays clear.
  g.fillStyle = 'rgba(255, 253, 247, 0.48)'; g.fillRect(0, 0, Wd, Hd);
  for (let i = 0; i < 26; i++) {          // faint veins
    g.strokeStyle = `rgba(${150 + rand() * 40}, ${140 + rand() * 30}, ${120 + rand() * 30}, ${0.02 + rand() * 0.035})`; g.lineWidth = 1 + rand() * 5;
    let x = rand() * Wd, y = rand() * Hd; g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 5; k++) { x += (rand() - 0.5) * 320; y += (rand() - 0.5) * 120; g.lineTo(x, y); }
    g.stroke();
  }
  const gold = (a) => `rgba(170, 122, 34, ${a})`;
  g.lineCap = 'round';
  for (let i = 0; i <= 12; i++) { g.strokeStyle = gold(i % 3 ? 0.28 : 0.55); g.lineWidth = i % 3 ? 1.2 : 2; g.beginPath(); g.moveTo(i / 12 * Wd, 22); g.lineTo(i / 12 * Wd, Hd - 22); g.stroke(); }       // meridians
  for (let j = 1; j < 6; j++) { g.strokeStyle = gold(j === 3 ? 0.7 : 0.3); g.lineWidth = j === 3 ? 2.6 : 1.2; g.beginPath(); g.moveTo(0, j / 6 * Hd); g.lineTo(Wd, j / 6 * Hd); g.stroke(); }                 // parallels; the equator is heavier
  g.strokeStyle = gold(0.6); g.lineWidth = 2; g.setLineDash([10, 7]); g.beginPath();                                        // the ecliptic
  for (let x = 0; x <= Wd; x += 8) { const y = Hd / 2 - Math.sin(x / Wd * TAU) * Hd * 0.13; if (x) g.lineTo(x, y); else g.moveTo(x, y); }
  g.stroke(); g.setLineDash([]);
  const star = (x, y, r) => { g.fillStyle = gold(0.85); g.beginPath(); for (let i = 0; i < 8; i++) { const a = i / 8 * TAU, rr = i % 2 ? r * 0.38 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); };
  for (let i = 0; i < 46; i++) {          // constellations: short chains of stars
    let x = rand() * Wd, y = 50 + rand() * (Hd - 100); const n = 3 + Math.floor(rand() * 4), pts = [];
    for (let k = 0; k < n; k++) { pts.push([x, y]); x += (rand() - 0.3) * 70; y += (rand() - 0.5) * 54; }
    g.strokeStyle = gold(0.5); g.lineWidth = 1.3; g.beginPath(); pts.forEach(([px, py], k) => (k ? g.lineTo(px, py) : g.moveTo(px, py))); g.stroke();
    pts.forEach(([px, py]) => star(px, py, 3 + rand() * 4));
  }
  for (let i = 0; i < 260; i++) { g.fillStyle = gold(0.3 + rand() * 0.5); g.beginPath(); g.arc(rand() * Wd, 20 + rand() * (Hd - 40), 0.7 + rand() * 1.3, 0, TAU); g.fill(); }
  const t = tex(c); t.wrapS = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}

/** Four-pointed star used for engraved constellations and sparkles. */
export function starTexture() {
  const S = 128, c = canvas(S), g = c.getContext('2d');
  g.translate(S / 2, S / 2);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 60); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.beginPath();
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, r = i % 2 ? 9 : 62; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  g.closePath(); g.fill();
  g.beginPath(); g.arc(0, 0, 16, 0, Math.PI * 2); g.fill();
  return tex(c);
}

// ---------- geometry helpers ----------
export function toFlatList(list) { return list.map(g => (g.index ? g.toNonIndexed() : g)); }

/**
 * Smooth lofted hull. secs: [{z, w, h, y=0, e=2.4, belly=1}] from nose to tail.
 * Cross-sections are superellipses; widths and heights are Catmull-Rom interpolated.
 */
export function loft(secs, seg = 20, sub = 4) {
  const cr = (p0, p1, p2, p3, t) => 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
  const get = (i, k, d) => { const s = secs[clamp(i, 0, secs.length - 1)]; return s[k] === undefined ? d : s[k]; };
  const rings = [];
  for (let i = 0; i < secs.length - 1; i++) for (let k = 0; k < sub; k++) {
    const t = k / sub, f = (key, d) => cr(get(i - 1, key, d), get(i, key, d), get(i + 1, key, d), get(i + 2, key, d), t);
    rings.push({ z: lerp(secs[i].z, secs[i + 1].z, t), w: Math.max(0.001, f('w', 1)), h: Math.max(0.001, f('h', 1)), y: f('y', 0), e: f('e', 2.4), belly: f('belly', 1) });
  }
  const last = secs[secs.length - 1];
  rings.push({ z: last.z, w: Math.max(0.001, last.w), h: Math.max(0.001, last.h), y: last.y || 0, e: last.e || 2.4, belly: last.belly || 1 });
  const nr = rings.length, pos = [], uv = [], idx = [];
  for (let r = 0; r < nr; r++) {
    const R = rings[r];
    for (let j = 0; j <= seg; j++) {
      const a = -Math.PI / 2 + (j / seg) * TAU, c = Math.cos(a), s = Math.sin(a), p = 2 / R.e;
      const x = R.w * Math.sign(c) * Math.pow(Math.abs(c), p);
      let y = R.h * Math.sign(s) * Math.pow(Math.abs(s), p);
      if (s < 0) y *= R.belly;
      pos.push(x, R.y + y, R.z); uv.push(r / (nr - 1), j / seg);
    }
  }
  for (let r = 0; r < nr - 1; r++) for (let j = 0; j < seg; j++) {
    const a = r * (seg + 1) + j, b = a + 1, c = a + seg + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // make sure the surface faces outward
  const mid = Math.floor(nr / 2) * (seg + 1) + Math.floor(seg / 4);
  const n = g.attributes.normal, P = g.attributes.position;
  if (n.getX(mid) * P.getX(mid) + n.getY(mid) * (P.getY(mid) - rings[Math.floor(nr / 2)].y) < 0) {
    for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
    g.setIndex(idx); g.computeVertexNormals();
  }
  // weld normals across the seam (j = 0 and j = seg share a position)
  for (let r = 0; r < nr; r++) {
    const a = r * (seg + 1), b = a + seg;
    const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b), l = Math.hypot(x, y, z) || 1;
    n.setXYZ(a, x / l, y / l, z / l); n.setXYZ(b, x / l, y / l, z / l);
  }
  return g;
}

/** Flat wing or fin from a planform [[x, z], ...], extruded to `thick` with bevelled edges. */
export function wing(pts, thick = 0.14, bevel = 0.04) {
  const s = new THREE.Shape();
  pts.forEach(([x, z], i) => (i ? s.lineTo(x, z) : s.moveTo(x, z)));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, steps: 1 });
  g.translate(0, 0, -thick / 2);
  g.rotateX(Math.PI / 2);
  return g;
}

/** Billboard ribbon trail (additive). */
export class Trail {
  constructor(n, width, color, scene) {
    this.n = n; this.width = width; this.color = color; this.pts = [];
    this.pos = new Float32Array(n * 2 * 3); this.col = new Float32Array(n * 2 * 3);
    const idx = [];
    for (let i = 0; i < n - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setIndex(idx);
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, transparent: true, fog: false }));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 5;
    scene.add(this.mesh);
    this._d = new THREE.Vector3(); this._s = new THREE.Vector3(); this._c = new THREE.Vector3();
  }
  reset() { this.pts.length = 0; }
  push(p) { this.pts.unshift(p.clone()); if (this.pts.length > this.n) this.pts.pop(); }
  update(camPos, intensity = 1) {
    const { pts, n, pos, col, color } = this, m = pts.length;
    for (let i = 0; i < n; i++) {
      const k = Math.min(i, m - 1);
      if (m < 2) { pos.fill(0, i * 6, i * 6 + 6); col.fill(0, i * 6, i * 6 + 6); continue; }
      const p = pts[k], a = pts[Math.max(k - 1, 0)], b = pts[Math.min(k + 1, m - 1)];
      this._d.subVectors(b, a); this._c.subVectors(camPos, p);
      this._s.crossVectors(this._d, this._c).normalize().multiplyScalar(this.width * (0.35 + 0.65 * (1 - i / n)));
      pos[i * 6] = p.x + this._s.x; pos[i * 6 + 1] = p.y + this._s.y; pos[i * 6 + 2] = p.z + this._s.z;
      pos[i * 6 + 3] = p.x - this._s.x; pos[i * 6 + 4] = p.y - this._s.y; pos[i * 6 + 5] = p.z - this._s.z;
      const f = i >= m ? 0 : Math.pow(1 - i / n, 2.2) * intensity;
      for (let j = 0; j < 2; j++) { col[i * 6 + j * 3] = color.r * f; col[i * 6 + j * 3 + 1] = color.g * f; col[i * 6 + j * 3 + 2] = color.b * f; }
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.attributes.color.needsUpdate = true;
  }
}
