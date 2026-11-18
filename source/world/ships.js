import * as THREE from 'three';
import { L } from './ground.js';
import { box, cyl, mesh, group, hdr, lamp, setLamp, fuse } from './kit.js';
import { Spring, easeIO, clamp, lerp, smooth, noise1, TAU, loft, wing, Trail } from './util.js';
import { bindMood } from './mood.js';

const v3 = (x, y, z) => new THREE.Vector3(x, y, z);
const disc = (r) => new THREE.CircleGeometry(r, 20).rotateY(Math.PI);          // faces -Z (aft)
const wrapAngle = (target, current) => current + Math.atan2(Math.sin(target - current), Math.cos(target - current));

// ---------- capital ship ----------
export function buildCapitalShip(W) {
  // Pick its starting arch once. Keep that pose during mood changes so existing shuttle routes stay continuous.
  const night = W.mood.name === 'night', M = W.mat, S = night ? { x: -L.SHIP.x - 1, y: L.SHIP.y, z: L.SHIP.z } : L.SHIP, YAW = night ? 0.95 : -0.95;
  const ship = group(S.x, S.y, S.z); ship.rotation.order = 'YXZ'; ship.rotation.y = YAW; W.scene.add(ship);
  const win = W.tex.window.clone(); win.repeat.set(7, 2.5); win.needsUpdate = true;
  const pan = W.tex.panel.clone(); pan.repeat.set(9, 3); pan.needsUpdate = true;
  const hullMat = new THREE.MeshStandardMaterial({ color: 0xf4f0e6, roughness: 0.36, metalness: 0.5, map: pan, emissive: 0xffe9c4, emissiveMap: win, emissiveIntensity: 1.2 });
  bindMood(W, hullMat, 'emissiveIntensity', 1.2, 2.4);
  ship.add(mesh(loft([{ z: 96, w: 0.6, h: 0.5 }, { z: 84, w: 8, h: 4.2, belly: 0.8 }, { z: 52, w: 16, h: 8.4, e: 3.2, belly: 0.75 }, { z: 10, w: 21, h: 11.5, e: 3.6, belly: 0.72 }, { z: -42, w: 23, h: 12.5, e: 3.6, belly: 0.72 }, { z: -76, w: 19, h: 11, e: 3 }, { z: -92, w: 14, h: 8.5 }, { z: -95, w: 12.5, h: 7.5 }], 28, 5), hullMat));
  ship.add(mesh(loft([{ z: 6, w: 1.5, h: 1, y: 11 }, { z: -12, w: 7, h: 4.5, y: 13.5, e: 3 }, { z: -44, w: 8.5, h: 6, y: 15, e: 3 }, { z: -66, w: 6, h: 4.6, y: 14.5 }, { z: -74, w: 2.5, h: 2, y: 13 }], 18, 4), hullMat));
  ship.add(mesh(box(7, 3.4, 12, 1), M.canopy, 0, 21.2, -22), mesh(box(1.2, 16, 9, 0.4), M.hullBig, 0, 25, -56), mesh(cyl(0.25, 0.4, 22, 6), M.dark, 0, 34, -40));
  const engines = [];
  for (const sx of [-1, 1]) {
    const pod = group(sx * 30, -2, -38);
    pod.add(mesh(loft([{ z: 44, w: 0.8, h: 0.8 }, { z: 30, w: 5.5, h: 4.6 }, { z: -20, w: 7, h: 5.8, e: 3 }, { z: -46, w: 6, h: 5 }, { z: -50, w: 5.2, h: 4.4 }], 18, 4), hullMat));
    pod.add(mesh(disc(4.3), M.engine, 0, 0, -50.2)); const l = lamp(W, 0xffe2b0, 44, 5); l.position.set(0, 0, -53); pod.add(l); engines.push(l);
    ship.add(pod, mesh(box(11, 2.4, 26, 0.8), M.hullBig, sx * 22.5, -1, -40), mesh(wing([[0, 14], [16, -2], [16, -9], [0, -12]], 1.0, 0.3), M.hullBig, sx * 36, -2, -52));
    if (sx < 0) ship.children[ship.children.length - 1].scale.x = -1;
  }
  for (const [x, y] of [[-6.5, 2], [6.5, 2], [0, -4]]) { ship.add(mesh(disc(3.4), M.engine, x, y, -95.3)); const l = lamp(W, 0xffe2b0, 36, 5); l.position.set(x, y, -98); ship.add(l); engines.push(l); }
  // rotating habitat ring
  const ring = group(0, 0, 26, mesh(new THREE.TorusGeometry(35, 2.1, 10, 72), hullMat), mesh(new THREE.TorusGeometry(35, 0.7, 6, 72), M.glowWarm));
  ring.children[1].scale.z = 3.2;
  for (let i = 0; i < 4; i++) { const sp = mesh(box(1.6, 35, 1.6, 0.4), M.hullBig, 0, 17.5, 0), piv = new THREE.Group(); piv.rotation.z = i * Math.PI / 2 + 0.4; piv.add(sp); ring.add(piv); }
  ship.add(ring);
  // hangar bay under the belly
  ship.add(mesh(box(13, 0.8, 30, 0.3), M.glowWarm, 0, -8.2, 12), mesh(box(17, 1.6, 34, 0.5), M.dark, 0, -7.6, 12));
  const bay = lamp(W, 0xffc070, 46, 2.6); bay.position.set(0, -11, 12); ship.add(bay);
  const nav = [[0, 6.4, 94, 0xffffff], [24, 0, -30, 0x40ff80], [-24, 0, -30, 0xff4030], [0, 45.5, -40, 0xff4030], [36, -2, -64, 0xffffff], [-36, -2, -64, 0xffffff]].map(([x, y, z, c], i) => { const l = lamp(W, c, 9, 6); l.position.set(x, y, z); ship.add(l); return { l, ph: i * 0.37 }; });
  ring.userData.moving = true; fuse(ship); fuse(ring);
  W.ship = { obj: ship, bay: v3(0, -11.4, 12), below: v3(0, -46, 20) };
  W.updaters.push((t) => {
    ship.position.y = S.y + Math.sin(t * 0.21) * 2.2 + noise1(t * 0.07, 3) * 1.5;
    ship.rotation.z = noise1(t * 0.05, 7) * 0.02; ship.rotation.x = noise1(t * 0.04, 9) * 0.012; ship.rotation.y = YAW + noise1(t * 0.02, 5) * 0.04;
    ring.rotation.z = t * 0.14;
    engines.forEach((l, i) => setLamp(l, 0.8 + 0.2 * noise1(t * 2.4 + i * 3, i)));
    nav.forEach(n => setLamp(n.l, ((t * 0.8 + n.ph) % 1) < 0.08 ? 1.5 : 0.1));
    setLamp(bay, 0.85 + 0.15 * Math.sin(t * 1.3));
  });
}

// ---------- shuttles ----------
function shuttleModel(W, accent) {
  const M = W.mat, g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const pan = W.tex.panel.clone(); pan.repeat.set(3, 1.5); pan.needsUpdate = true;
  const hull = new THREE.MeshStandardMaterial({ color: 0xf6f2e8, roughness: 0.33, metalness: 0.45, map: pan });
  body.add(mesh(loft([{ z: 7.6, w: 0.12, h: 0.1, y: -0.15 }, { z: 6.2, w: 0.95, h: 0.7, y: -0.05 }, { z: 3.4, w: 1.65, h: 1.25, e: 2.8 }, { z: 0, w: 1.95, h: 1.5, e: 3.2, belly: 0.8 }, { z: -4, w: 1.85, h: 1.42, e: 3.2, belly: 0.8 }, { z: -6.6, w: 1.3, h: 1.0 }, { z: -7.3, w: 0.95, h: 0.75 }], 20, 5), hull));
  body.add(mesh(loft([{ z: 6.5, w: 0.1, h: 0.08, y: 0.22 }, { z: 5.4, w: 0.72, h: 0.42, y: 0.52 }, { z: 4.0, w: 1.0, h: 0.56, y: 0.86 }, { z: 2.7, w: 0.72, h: 0.36, y: 1.08 }, { z: 2.2, w: 0.2, h: 0.1, y: 1.16 }], 14, 4), M.canopy));
  const wg = wing([[1.5, 1.6], [6.4, -2.7], [6.4, -4.5], [1.5, -4.9]], 0.2, 0.06), stripe = wing([[2.2, 0.5], [6.4, -3.2], [6.4, -3.9], [2.2, -1.0]], 0.24, 0.02);
  for (const s of [-1, 1]) {
    const w = mesh(wg, hull, 0, -0.15, 0), st = mesh(stripe, accent, 0, -0.15, 0); w.rotation.z = st.rotation.z = s * 0.07; w.scale.x = st.scale.x = s; body.add(w, st);
    const fin = mesh(wing([[0, 0.9], [2.3, -1.7], [2.3, -2.8], [0, -2.4]], 0.14, 0.04), hull, s * 0.9, 0.9, -4.2); fin.rotation.z = s * (Math.PI / 2 - 0.42); fin.scale.x = s; body.add(fin);
    body.add(mesh(box(0.14, 1.3, 1.9, 0.05), accent, s * 6.42, 0.55, -3.6));
  }
  body.add(mesh(box(0.5, 0.12, 5, 0.05), accent, 0, 1.47, -1.5));
  // tilting engine nacelles
  const nac = [], glows = [];
  for (const s of [-1, 1]) {
    const n = group(s * 3.5, -0.1, -2.4);
    n.add(mesh(cyl(0.82, 0.7, 3.4, 20).rotateX(Math.PI / 2), hull), mesh(cyl(0.88, 0.88, 0.3, 20).rotateX(Math.PI / 2), M.yellow, 0, 0, 1.55), mesh(cyl(0.72, 0.9, 0.5, 20).rotateX(Math.PI / 2), M.dark, 0, 0, -1.8), mesh(disc(0.66), M.engine, 0, 0, -2.06));
    const l = lamp(W, 0xffe2b0, 6.5, 5); l.position.set(0, 0, -2.5); n.add(l); glows.push(l);
    body.add(n); nac.push(n);
  }
  for (const [x, z] of [[0, 4.6], [-1.5, -3.5], [1.5, -3.5]]) body.add(mesh(cyl(0.07, 0.07, 0.9, 6), M.dark, x, -1.6, z), mesh(box(0.5, 0.12, 1.1, 0.05), M.dark, x, -2.02, z));
  const strobe = lamp(W, 0xffffff, 2.2, 5); strobe.position.set(0, -1.55, 0); body.add(strobe);
  const navL = lamp(W, 0xff4030, 1.6, 5), navR = lamp(W, 0x40ff80, 1.6, 5); navL.position.set(-6.5, 0.3, -3.6); navR.position.set(6.5, 0.3, -3.6); body.add(navL, navR);
  nac.forEach(n => { n.userData.moving = true; }); fuse(body); nac.forEach(fuse);
  g.rotation.order = 'YXZ';
  return { g, body, nac, glows, strobe };
}

export function buildShuttles(W) {
  const M = W.mat, up = v3(0, 1, 0), tmp = v3(), prev = v3(), vel = v3();
  const T_PAD = 7, T_FLY = 27, T_SHIP = 6, CYC = T_PAD + T_FLY * 2 + T_SHIP;
  const list = [];
  [M.blue, M.yellow].forEach((accent, i) => {
    const m = shuttleModel(W, accent); W.scene.add(m.g);
    const spot = W.pad.spots[i], sx = i ? -14 : 12;
    list.push({ ...m, spot, i, phase: i ? 46 : 2.5, yaw: new Spring(i ? 2.2 : -0.6, 2.6, 1), pitch: new Spring(0, 5, 0.9), roll: new Spring(0, 5, 0.75), tilt: new Spring(1, 4, 0.9), thr: new Spring(0.1, 6, 1), park: i ? 2.2 : -0.6, sx, pos: spot.clone(), last: spot.clone(), py: 0, curve: null });
  });
  const makeCurve = (s) => {
    const o = W.ship.obj; o.updateMatrixWorld();
    const bay = o.localToWorld(W.ship.bay.clone().add(v3(s.i ? 4 : -4, 0, s.i ? -6 : 6))), below = o.localToWorld(W.ship.below.clone().add(v3(s.i ? 5 : -5, 0, 0)));
    const a = s.spot, lift = a.clone().add(v3(0, 2.12, 0));
    return new THREE.CatmullRomCurve3([lift, lift.clone().add(v3(0, 5, 0)), lift.clone().add(v3(s.sx * 0.12, 17, -3)), v3(a.x + s.sx, a.y + 34, a.z - 60), v3(lerp(a.x, below.x, 0.45) + s.sx * 1.6, lerp(a.y, below.y, 0.55) + 10, lerp(a.z, below.z, 0.45)), v3(lerp(a.x, below.x, 0.8) + s.sx, below.y - 6, lerp(a.z, below.z, 0.82)), below, bay], false, 'centripetal');
  };
  W.updaters.push((t, dt) => {
    let activity = 0;
    for (const s of list) {
      if (!s.curve) s.curve = makeCurve(s);
      const tau = (t + s.phase) % CYC;
      let u, moving = true;
      if (tau < T_PAD) { u = 0; moving = false; }
      else if (tau < T_PAD + T_FLY) u = easeIO((tau - T_PAD) / T_FLY);
      else if (tau < T_PAD + T_FLY + T_SHIP) { u = 1; moving = false; }
      else u = 1 - easeIO((tau - T_PAD - T_FLY - T_SHIP) / T_FLY);
      s.curve.getPointAt(clamp(u), s.pos);
      if (!s.init) {          // start mid-flight without a kick
        s.init = true; s.last.copy(s.pos);
        const tg = s.curve.getTangentAt(clamp(u, 0.001, 0.999)), dir = tau > T_PAD + T_FLY ? -1 : 1;
        if (moving && Math.hypot(tg.x, tg.z) > 0.3) { s.yaw.x = Math.atan2(tg.x * dir, tg.z * dir); s.tilt.x = 0; }
        s.py = s.yaw.x;
      }
      vel.subVectors(s.pos, s.last).divideScalar(dt); s.last.copy(s.pos);
      const hs = Math.hypot(vel.x, vel.z), alt = s.pos.y - s.spot.y, cruise = smooth(5, 24, hs);
      const yawT = hs > 2.5 ? Math.atan2(vel.x, vel.z) : (u < 0.5 ? s.park : s.yaw.x);
      const yaw = s.yaw.step(wrapAngle(yawT, s.yaw.x), dt), yawRate = (yaw - s.py) / dt; s.py = yaw;
      const hover = 1 - cruise, wob = hover * (moving ? 1 : 0);
      s.g.position.copy(s.pos); s.g.position.y += wob * (Math.sin(t * 1.7 + s.i * 2) * 0.16 + noise1(t * 0.9, s.i + 3) * 0.12);
      s.g.rotation.y = yaw;
      s.g.rotation.x = s.pitch.step(-Math.atan2(vel.y, Math.max(hs, 10)) * cruise * 0.7 + wob * noise1(t * 0.8, s.i + 11) * 0.035, dt);
      s.g.rotation.z = s.roll.step(clamp(-yawRate * hs * 0.045, -0.6, 0.6) + wob * noise1(t * 0.7, s.i + 21) * 0.045, dt);
      const tilt = s.tilt.step(hover, dt); s.nac.forEach(n => { n.rotation.x = -tilt * Math.PI / 2 * 0.92; });
      const thr = s.thr.step(moving ? lerp(1.0, 0.75, cruise) + clamp(vel.y * 0.03, -0.2, 0.4) : (u < 0.5 ? 0.12 : 0.2), dt);
      s.glows.forEach((l, k) => setLamp(l, thr * (0.9 + 0.1 * noise1(t * 14 + k * 5, s.i))));
      setLamp(s.strobe, ((t * 1.1 + s.i * 0.5) % 1) < 0.07 ? 1.3 : 0.0);
      const near = moving ? smooth(46, 3, alt) : 0; activity = Math.max(activity, moving ? smooth(120, 20, alt) : 0);
      const w = W.pad.wash[s.i]; w.position.set(s.pos.x, s.spot.y + 0.6, s.pos.z); setLamp(w, near * thr * 0.45 * (0.8 + 0.2 * noise1(t * 6, s.i + 40))); w.scale.setScalar(7 + near * 5);
    }
    W.pad.activity += (activity - W.pad.activity) * (1 - Math.exp(-dt * 2));
    void up; void tmp; void prev;
  });
}

// ---------- fighters ----------
function fighterModel(W) {
  const M = W.mat, g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const hull = new THREE.MeshStandardMaterial({ color: 0xf5f1e8, roughness: 0.28, metalness: 0.5 });
  body.add(mesh(loft([{ z: 5.0, w: 0.05, h: 0.05 }, { z: 3.6, w: 0.42, h: 0.3 }, { z: 1.4, w: 0.85, h: 0.56 }, { z: -0.8, w: 1.1, h: 0.62, e: 3.2 }, { z: -3.2, w: 1.0, h: 0.55, e: 3.2 }, { z: -4.4, w: 0.78, h: 0.44 }], 16, 5), hull));
  body.add(mesh(loft([{ z: 3.3, w: 0.06, h: 0.05, y: 0.2 }, { z: 2.5, w: 0.36, h: 0.26, y: 0.36 }, { z: 1.4, w: 0.44, h: 0.3, y: 0.5 }, { z: 0.4, w: 0.2, h: 0.12, y: 0.56 }], 12, 4), M.canopy));
  const wg = wing([[0.75, 1.4], [4.3, -3.3], [4.3, -4.2], [0.75, -3.9]], 0.13, 0.04), cn = wing([[0.5, 3.0], [1.7, 2.1], [1.7, 1.7], [0.5, 1.9]], 0.08, 0.03), tip = wing([[3.3, -2.3], [4.3, -3.3], [4.3, -4.2], [3.3, -4.12]], 0.16, 0.02);
  for (const s of [-1, 1]) {
    for (const [gg, mm] of [[wg, M.white], [cn, M.white], [tip, M.yellow]]) { const o = mesh(gg, mm); o.scale.x = s; body.add(o); }
    const fin = mesh(wing([[0, 0.6], [1.5, -1.0], [1.5, -1.8], [0, -1.6]], 0.09, 0.03), hull, s * 0.62, 0.3, -2.6); fin.rotation.z = s * (Math.PI / 2 - 0.35); fin.scale.x = s; body.add(fin);
    body.add(mesh(cyl(0.3, 0.36, 0.5, 14).rotateX(Math.PI / 2), M.dark, s * 0.42, 0, -4.5), mesh(disc(0.27), M.engine, s * 0.42, 0, -4.77));
  }
  const glow = lamp(W, 0xffe2b0, 3.4, 3.2); glow.position.set(0, 0, -5.2); body.add(glow);
  fuse(body);
  g.rotation.order = 'YXZ';
  return { g, body, glow };
}

export function buildFighters(W) {
  // in over the dome from behind the camera, down through the view of the centre arch, then away up the valley
  const path = new THREE.CatmullRomCurve3([v3(60, 120, 260), v3(30, 72, 110), v3(12, 47, 20), v3(2, 31, -60), v3(-4, 15, -170), v3(-30, 30, -420), v3(-120, 110, -800), v3(-300, 260, -1300)], false, 'centripetal');
  const DUR = 9.2, PERIOD = 27, FIRST = W.opts.firstFlyby ?? 2.4;
  const col = new THREE.Color(1.0, 0.8, 0.46).multiplyScalar(0.8);
  const ships = [0, 1].map((i) => { const m = fighterModel(W); W.scene.add(m.g); m.g.visible = false; return { ...m, i, trails: [new Trail(46, 0.3, col, W.scene), new Trail(46, 0.3, col, W.scene)], roll: new Spring(0, 9, 0.7), off: new Spring(0, 5, 0.6), last: v3(), pYaw: 0 }; });
  const p = v3(), tan = v3(), side = v3(), upv = v3(), e1 = v3(), e2 = v3();
  W.flyby = { active: false, pos: v3(), near: 0 };
  let lastN = -1;
  W.updaters.push((t, dt) => {
    const n = Math.floor((t - FIRST) / PERIOD), lt = t - FIRST - n * PERIOD, on = n >= 0 && lt < DUR;
    W.flyby.active = on && lt < DUR * 0.62;
    if (n !== lastN) { lastN = n; ships.forEach(s => { s.trails.forEach(tr => tr.reset()); s.roll.x = s.roll.v = 0; s.off.x = 9; s.off.v = 0; }); }
    let near = 0;
    for (const s of ships) {
      s.g.visible = on;
      if (on) {
        const u0 = clamp((lt - s.i * 0.16) / DUR), u = lerp(u0, u0 * u0, 0.25);
        path.getPointAt(u, p); path.getTangentAt(u, tan);
        side.crossVectors(tan, upv.set(0, 1, 0)).normalize(); upv.crossVectors(side, tan);
        if (s.i) {            // wingman: holds station off the leader's wing, then breaks away
          const spread = s.off.step(9 + smooth(0.5, 0.78, u) * 90, dt);
          p.addScaledVector(side, -spread).addScaledVector(upv, -1.6 + smooth(0.5, 0.8, u) * 26 + noise1(t * 1.3, 4) * 0.5);
        } else p.addScaledVector(upv, noise1(t * 1.1, 2) * 0.35);
        const vx = (p.x - s.last.x) / dt, vy = (p.y - s.last.y) / dt, vz = (p.z - s.last.z) / dt, fresh = s.last.lengthSq() === 0 || lt < 0.05; s.last.copy(p);
        s.g.position.copy(p);
        const yaw = fresh ? Math.atan2(tan.x, tan.z) : Math.atan2(vx, vz), yr = fresh ? 0 : Math.atan2(Math.sin(yaw - s.pYaw), Math.cos(yaw - s.pYaw)) / dt; s.pYaw = yaw;
        s.g.rotation.y = yaw; s.g.rotation.x = fresh ? -Math.asin(tan.y) : -Math.atan2(vy, Math.hypot(vx, vz));
        const barrel = s.i ? smooth(0.52, 0.66, u) * -TAU : easeIO(clamp((u - 0.17) / 0.13)) * TAU;
        s.g.rotation.z = s.roll.step(clamp(-yr * 1.6, -1.2, 1.2), dt) + barrel;
        setLamp(s.glow, 1 + 0.25 * noise1(t * 20, s.i));
        s.g.updateMatrixWorld();
        s.trails[0].push(s.body.localToWorld(e1.set(0.42, 0, -4.9))); s.trails[1].push(s.body.localToWorld(e2.set(-0.42, 0, -4.9)));
        const d = p.distanceTo(W.camera.position); near = Math.max(near, clamp(1 - d / 130));
        if (!s.i) { W.flyby.pos.copy(p); if (p.distanceTo(W.rings.pos) < 62) W.rings.pulse = 1; }
      } else s.last.set(0, 0, 0);
      const fade = on ? 1 : clamp(1 - (lt - DUR) / 0.8);
      if (on || lt < DUR + 1) s.trails.forEach(tr => tr.update(W.camera.position, fade));
    }
    W.flyby.near = near;
    if (near > 0) { W.shake = Math.max(W.shake, near * near * 1.15); W.gustT = Math.max(W.gustT, near * 1.7); }
  });
}
