import * as THREE from 'three';
import { setMood, patchFog, makeSky, bindAtmosphere, SUN, MOODS } from './atmo.js';
import { bindMood, applyMood } from './mood.js';
import { L } from './ground.js';
import { makeMaterials } from './kit.js';
import { buildWater } from './water.js';
import { buildDais, buildRotunda, buildMountains, buildFalls, buildDock } from './garden.js';
import { buildInstruments } from './instruments.js';
import { buildVines, buildLilies, buildRoses } from './flora.js';
import { buildCapitalShip, buildShuttles, buildFighters } from './ships.js';
import { buildCat } from './cat.js';
import { buildExterior } from './exterior.js';
import { buildWorkbench } from './workbench.js';
import { buildOrnament } from './ornament.js';
import { buildMotes, buildPetals, buildBirds, buildButterflies, buildFireflies } from './life.js';
import { makePost } from './post.js';
import { makeRand, noiseTexture, glowTexture, panelTexture, windowTexture, leafTexture, marbleTexture, prepareMarbleTexture, fluteTexture, lilyTexture, starTexture, Spring, easeIO, clamp, lerp, smooth, noise1 } from './util.js';

// vines: share of the hanging plants drawn; mirror: size of the pool's reflection relative to the screen
const TIERS = {
  high: { vines: 1, shadow: 4096, msaa: 4, dpr: 1.75, rays: 28, mirror: 0.7 },
  mid: { vines: 0.8, shadow: 2048, msaa: 4, dpr: 1.25, rays: 22, mirror: 0.5 },
  low: { vines: 0.55, shadow: 1024, msaa: 0, dpr: 1.5, rays: 14, mirror: 0.35, low: true },
};

/**
 * Start the landing scene on `canvas`.
 * opts: { reducedMotion, startTime, intro (seconds, 0 = none), quality, manual, time ('day' | 'night'; default: the visitor's clock) }
 * Fires on the canvas: world:loaded (detail: 'day' | 'night'), world:state ('intro' | 'ready'), world:fail.
 * Returns { skip(), setPaused(value), setMood(name), dispose(), paused } or null when WebGL 2 is unavailable.
 */
export function startWorld(canvas, opts = {}) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, stencil: false, powerPreference: 'high-performance' }); } catch (e) { return null; }
  if (!renderer.capabilities.isWebGL2) { renderer.dispose(); return null; }
  const life = { disposed: false, raf: 0, timer: 0, cleanups: [] };
  const emit = (name, detail) => { if (!life.disposed) canvas.dispatchEvent(new CustomEvent(name, { detail, bubbles: true })); };
  const api = { skip() { if (!life.disposed) opts.intro = 0; }, setPaused() {}, setMood(name) { if (!life.disposed && (name === 'day' || name === 'night')) opts.time = name; }, paused: false, state: 'loading', dispose() {
    if (life.disposed) return;
    life.disposed = true; api.state = 'disposed'; api.paused = true;
    cancelAnimationFrame(life.raf); clearTimeout(life.timer);
    for (const cleanup of life.cleanups) cleanup();
    life.cleanups.length = 0;
    renderer.dispose(); renderer.forceContextLoss();
  } };
  const run = async () => {
    if (life.disposed) return;
    try {
      await prepareMarbleTexture();
      if (!life.disposed) build(canvas, renderer, opts, emit, api, life);
    } catch (err) { console.warn('[world]', err); emit('world:fail'); }
  };
  if (opts.manual) run(); else life.raf = requestAnimationFrame(() => { life.timer = setTimeout(run, 0); });     // let the loading state paint first
  return api;
}

function build(canvas, renderer, opts, emit, api, life) {
  const coarse = matchMedia('(pointer: coarse)').matches, small = Math.min(innerWidth, innerHeight) < 700;
  const tier = opts.quality || (coarse || small ? 'low' : (navigator.hardwareConcurrency || 4) >= 8 ? 'high' : 'mid');
  const Q = { ...TIERS[tier] };
  const frozen = !!opts.reducedMotion, manual = !!opts.manual;
  let dpr = Math.min(window.devicePixelRatio || 1, Q.dpr);
  renderer.setPixelRatio(dpr);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  // daylight for daytime visitors, moonlight after dark
  const hour = new Date().getHours();
  const M = { ...setMood(opts.time === 'day' || opts.time === 'night' ? opts.time : (hour >= 6 && hour < 18 ? 'day' : 'night')) };
  api.mood = M.name;
  renderer.toneMappingExposure = M.exposure;
  patchFog();
  const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0xffffff, M.fog);
  const camera = new THREE.PerspectiveCamera(42, 1.6, 0.25, 6000);
  camera.layers.enable(1);                                   // layer 1: small things the pool's mirror skips
  const rand = makeRand(20261117);
  const W = {
    scene, camera, renderer, Q, rand, opts, mood: M, updaters: [], onResize: [], frame: 0,
    uNight: { value: M.name === 'night' ? 1 : 0 }, moodBindings: [],
    uTime: { value: 0 }, uGust: { value: 0 }, uPush: { value: [new THREE.Vector4(0, 0, 1, 0), new THREE.Vector4(0, 0, 1, 0)] },
    shake: 0, gustT: 0,
    tex: { noise: noiseTexture(256, 8), glow: glowTexture(), panel: panelTexture(rand), window: windowTexture(rand), leaf: leafTexture(rand), marble: marbleTexture(512), flute: fluteTexture(22), lily: lilyTexture(), star: starTexture() },
  };
  // Explicit teardown is separate from changing the light: mood switches keep
  // this scene, its simulation state and its WebGL context alive.
  life.cleanups.push(() => {
    const geometries = new Set(), materials = new Set(Object.values(W.mat || {})), textures = new Set(Object.values(W.tex));
    scene.traverse(o => {
      if (o.geometry) geometries.add(o.geometry);
      if (o.material) for (const m of Array.isArray(o.material) ? o.material : [o.material]) materials.add(m);
      if (o.isInstancedMesh || o.isReflector) o.dispose();
      o.shadow?.dispose();
    });
    for (const m of materials) {
      for (const value of Object.values(m)) if (value?.isTexture) textures.add(value);
      for (const u of Object.values(m.uniforms || {})) if (u.value?.isTexture) textures.add(u.value);
      m.dispose();
    }
    for (const g of geometries) g.dispose();
    for (const texture of textures) texture.dispose();
    W.envTarget?.dispose(); scene.clear();
    if (window.__world?.W === W) delete window.__world;
  });

  // Directional daylight through the dome, or low moonlight through the far arches.
  const sun = new THREE.DirectionalLight(M.lightColor, M.lightIntensity);
  sun.target.position.set(0.6, 1.5, 3.2); sun.position.copy(sun.target.position).addScaledVector(SUN, 90);
  sun.castShadow = true; sun.shadow.mapSize.setScalar(Q.shadow);
  sun.shadow.intensity = M.shadowIntensity;
  // Include the full rotunda and dome: their shade gives the garden its depth.
  Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 26, bottom: -16, near: 40, far: 140 });
  sun.shadow.bias = -0.00012; sun.shadow.normalBias = 0.018;
  sun.shadow.radius = 1.25 * Q.shadow / 2048;      // filtered edges without visible sampling grain
  const hemi = new THREE.HemisphereLight(M.hemi[0], M.hemi[1], M.hemi[2]);
  scene.add(sun, sun.target, hemi);
  const warmLight = new THREE.PointLight(0xffc98a, 0, 18, 1.6); warmLight.position.set(-4.6, 3.4, 8.5); scene.add(warmLight);
  // Broad, shadow-free bounce over the work area leaves the surrounding arches dimensional.
  const workFill = new THREE.PointLight(M.name === 'night' ? 0xffe6ca : 0xfff8ed, M.name === 'night' ? 18 : 30, 18, 2);
  workFill.name = 'Workstation soft fill'; workFill.position.set(0.5, 6.5, 4.5); scene.add(workFill);
  const day = MOODS.day, night = MOODS.night;
  bindMood(W, renderer, 'toneMappingExposure', day.exposure, night.exposure);
  bindMood(W, scene.fog, 'density', day.fog, night.fog);
  bindMood(W, sun, 'color', day.lightColor, night.lightColor);
  bindMood(W, sun, 'intensity', day.lightIntensity, night.lightIntensity);
  bindMood(W, sun.shadow, 'intensity', day.shadowIntensity, night.shadowIntensity);
  bindMood(W, hemi, 'color', day.hemi[0], night.hemi[0]);
  bindMood(W, hemi, 'groundColor', day.hemi[1], night.hemi[1]);
  bindMood(W, hemi, 'intensity', day.hemi[2], night.hemi[2]);
  bindMood(W, warmLight, 'intensity', 0, 8);
  bindMood(W, workFill, 'color', 0xfff8ed, 0xffe6ca);
  bindMood(W, workFill, 'intensity', 30, 18);
  for (const key of ['env', 'lamps', 'bloomGlow']) bindMood(W, M, key, day[key], night[key]);
  const daySun = new THREE.Vector3(...day.light).normalize(), nightSun = new THREE.Vector3(...night.light).normalize();
  W.moodBindings.push(mix => { SUN.copy(daySun).lerp(nightSun, mix).normalize(); sun.position.copy(sun.target.position).addScaledVector(SUN, 90); });
  makeSky(W);
  W.mat = makeMaterials(W);               // after the sky: materials take its reflection map

  const water = buildWater(W);
  buildDais(W); W.dome = buildRotunda(W); buildOrnament(W); buildMountains(W); buildFalls(W); buildDock(W);
  buildInstruments(W); buildWorkbench(W);
  buildVines(W); buildLilies(W); buildRoses(W);
  buildCapitalShip(W); buildShuttles(W); buildFighters(W); buildExterior(W);
  buildCat(W);
  buildMotes(W); buildPetals(W);
  buildBirds(W); buildButterflies(W); buildFireflies(W);
  const post = makePost(W);
  life.cleanups.push(() => { for (const pass of post.composer.passes) pass.dispose(); post.composer.dispose(); });
  const atmosphereMaterials = new Set(Object.values(W.mat));
  scene.traverse(o => { if (o.material) for (const material of Array.isArray(o.material) ? o.material : [o.material]) atmosphereMaterials.add(material); });
  for (const material of atmosphereMaterials) bindAtmosphere(material, W);
  applyMood(W, W.uNight.value);
  const transition = { from: W.uNight.value, to: W.uNight.value, elapsed: 1.8 };

  // ---- camera: low over the water, looking across the pool at the dais ----
  const v = (x, y, z) => new THREE.Vector3(x, y, z);
  const wide = { pos: v(L.CAM.x, L.CAM.y, L.CAM.z), tgt: v(0.1, 2.75, 0), fov: 42 };
  const tall = { pos: v(1.25, 1.7, 17.0), tgt: v(1.0, 3.5, 0), fov: 64 };
  const rest = { pos: v(), tgt: v(), fov: 42 };
  const frame = (aspect) => { const k = smooth(1.2, 0.72, aspect); rest.pos.lerpVectors(wide.pos, tall.pos, k); rest.tgt.lerpVectors(wide.tgt, tall.tgt, k); rest.fov = lerp(aspect > 2.2 ? 36 : wide.fov, tall.fov, k); };
  const INTRO = frozen ? 0 : (opts.intro ?? 7.5);
  const from = { pos: v(0.4, 16.2, 8.5), tgt: v(-1.5, 17.5, -14) };          // the visit starts under the dome and comes down to the water
  const mouse = { x: 0, y: 0 }, mx = new Spring(0, 9, 1), my = new Spring(0, 9, 1), scr = new Spring(0, 14, 1);
  const pos = v(), tgt = v(), rgt = v(), upv = v(0, 1, 0);
  let introT = 0, state = 'intro';
  const setState = (s) => { if (state !== s || api.state !== s) { state = s; api.state = s; emit('world:state', s); } };
  function placeCamera(t, dt) {
    const k = INTRO > 0 ? clamp(introT / INTRO) : 1, e = easeIO(k), et = easeIO(clamp(k * 1.1));
    pos.lerpVectors(from.pos, rest.pos, e); tgt.lerpVectors(from.tgt, rest.tgt, et);
    pos.x += Math.sin(e * Math.PI) * 1.6;                                     // a slight arc on the way down
    camera.fov = rest.fov + (1 - e) * 8;
    const px = mx.step(mouse.x, dt), py = my.step(mouse.y, dt), s = scr.step(clamp((window.scrollY || 0) / Math.max(1, innerHeight)), dt);
    rgt.subVectors(tgt, pos).cross(upv).normalize();
    pos.addScaledVector(rgt, px * 0.5).y += -py * 0.16 + s * 1.3 + Math.sin(t * 0.23) * 0.02;
    tgt.addScaledVector(rgt, px * -1.3).y += py * 0.8 + s * 11;
    camera.position.copy(pos); camera.lookAt(tgt);
    if (W.shake > 0.001) {
      const a = W.shake * W.shake;
      camera.rotation.x += noise1(t * 23, 1) * 0.011 * a; camera.rotation.y += noise1(t * 21, 2) * 0.011 * a; camera.rotation.z += noise1(t * 19, 3) * 0.02 * a;
      camera.position.y += noise1(t * 27, 4) * 0.04 * a;
    }
    if (W.debugView) { camera.position.fromArray(W.debugView.pos); camera.lookAt(...W.debugView.tgt); camera.fov = W.debugView.fov || 42; }
    camera.updateProjectionMatrix();
  }

  // ---- size ----
  let cw = 0, ch = 0;
  function resize() {
    const r = canvas.getBoundingClientRect(), w = Math.max(2, Math.round(r.width)), h = Math.max(2, Math.round(r.height));
    if (w === cw && h === ch) return false; cw = w; ch = h;
    renderer.setSize(w, h, false); camera.aspect = w / h; frame(camera.aspect);
    post.resize(w, h, dpr); W.onResize.forEach(f => f(w, h, dpr));
    return true;
  }
  const setDpr = (d) => { dpr = d; renderer.setPixelRatio(d); post.resize(cw, ch, d); W.onResize.forEach(f => f(cw, ch, d)); };
  resize();

  // ---- loop ----
  let t = 0, presented = false, gust = new Spring(0, 14, 0.7);
  function step(dt, wall = dt) {            // wall: real time passed, so a slow device still finishes the intro on schedule
    t += dt; W.uTime.value = t;
    if (transition.elapsed < 1.8) {
      transition.elapsed = Math.min(1.8, transition.elapsed + wall);
      const progress = transition.elapsed / 1.8, eased = progress * progress * (3 - 2 * progress);
      applyMood(W, lerp(transition.from, transition.to, eased));
    }
    W.gustT *= Math.exp(-dt * 1.5); W.uGust.value = Math.max(0, gust.step(W.gustT + Math.max(0, noise1(t * 0.07, 9) - 0.45) * 0.9, dt));
    W.shake *= Math.exp(-dt * 2.6);
    if (state === 'intro') { introT += wall; if (introT >= INTRO - 1.4) setState('ready'); } else introT += wall;
    for (const f of W.updaters) f(t, dt);
    placeCamera(t, dt);
  }
  function draw() {
    post.fin.uniforms.uFade.value = 1;
    post.render(t);
    // Only reveal the canvas after a complete frame, including reflection and post effects.
    if (!presented) { presented = true; emit('world:loaded', M.name); }
  }

  api.skip = () => { introT = Math.max(introT, INTRO); setState('ready'); };
  api.setMood = (name) => {
    if (life.disposed || (name !== 'day' && name !== 'night')) return;
    api.mood = M.name = name;
    transition.from = W.uNight.value; transition.to = name === 'night' ? 1 : 0; transition.elapsed = 0;
    if (frozen || api.paused) {
      transition.elapsed = 1.8; applyMood(W, transition.to); draw();
    }
  };

  // start mid-scene so the first frame already has ships in the air and cloth in motion
  const warm = opts.startTime ?? 0;
  for (let i = 0, n = Math.round(warm * 30); i < n; i++) { if (frozen || manual) introT = INTRO; step(1 / 30); }

  if (manual) {                 // frame-by-frame capture: window.__world.advance(seconds)
    introT = opts.manualIntro ? 0 : INTRO; if (opts.manualIntro) state = 'intro';
    window.__world = { advance(sec, n = Math.max(1, Math.round(sec * 60))) { if (sec > 0) { for (let i = 0; i < n; i++) step(sec / n); } resize(); placeCamera(t, 0); draw(); return t; }, W, api };
    draw(); setState(state);
    return;
  }

  const begin = () => {
    if (life.disposed) return;
    if (frozen) {
      introT = INTRO; step(1 / 60); draw(); setState('ready');
      const observer = new ResizeObserver(() => { if (!life.disposed && resize()) { placeCamera(t, 1 / 60); draw(); } });
      observer.observe(canvas); life.cleanups.push(() => observer.disconnect()); return;
    }
    setState(INTRO > 0 ? 'intro' : 'ready');
    let last = performance.now(), visible = true, running = false, acc = 0, frames = 0, slow = 0, fast = 0;
    const loop = (now) => {
      if (life.disposed || !visible || document.hidden || api.paused) { running = false; return; }
      life.raf = requestAnimationFrame(loop);
      const raw = (now - last) / 1000; last = now;
      const dt = clamp(raw, 0.001, 0.05);
      resize(); step(dt, Math.min(raw, 0.3));
      // keep it smooth: trade resolution, then the sharpness of the pool's reflection, for frame rate
      acc += raw; frames++;
      if (acc > 1.5) {
        const ms = acc / frames * 1000; acc = 0; frames = 0;
        if (ms > 26) { slow++; fast = 0; } else if (ms < 12.5) { fast++; slow = 0; } else slow = fast = 0;
        if (slow >= 2) { slow = 0; if (dpr > 0.72) setDpr(Math.max(0.7, dpr * 0.84)); else if (water.userData.scale() > 0.26) water.userData.setScale(water.userData.scale() * 0.75); }
        if (fast >= 4 && dpr < Math.min(window.devicePixelRatio || 1, Q.dpr) - 0.01) { fast = 0; setDpr(Math.min(Math.min(window.devicePixelRatio || 1, Q.dpr), dpr * 1.12)); }
      }
      // Resizing clears GPU buffers; always finish with a complete frame.
      draw();
    };
    const wake = () => { if (!life.disposed && !running && visible && !document.hidden && !api.paused) { running = true; last = performance.now(); life.raf = requestAnimationFrame(loop); } };
    api.setPaused = (value) => {
      if (life.disposed) return;
      api.paused = !!value;
      if (api.paused) { api.skip(); placeCamera(t, 0); draw(); } else wake();
      emit('world:motion', api.paused);
    };
    const resizeObserver = new ResizeObserver(() => { if (!life.disposed && api.paused && resize()) { placeCamera(t, 0); draw(); } });
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver((es) => { visible = es[0].isIntersecting; wake(); }, { threshold: 0.01 });
    intersectionObserver.observe(canvas);
    document.addEventListener('visibilitychange', wake);
    const pointer = (e) => { mouse.x = (e.clientX / innerWidth) * 2 - 1; mouse.y = (e.clientY / innerHeight) * 2 - 1; };
    if (!coarse) window.addEventListener('pointermove', pointer, { passive: true });
    life.cleanups.push(() => { resizeObserver.disconnect(); intersectionObserver.disconnect(); document.removeEventListener('visibilitychange', wake); window.removeEventListener('pointermove', pointer); });
    wake();
  };
  // compile shaders off the main thread where the browser allows it, then go
  placeCamera(0, 1 / 60);
  const ready = renderer.compileAsync ? renderer.compileAsync(scene, camera).catch(() => {}) : Promise.resolve();
  ready.then(begin);
}
