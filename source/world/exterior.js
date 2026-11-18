import * as THREE from 'three';
import { L } from './ground.js';
import { box, cyl, mesh, fuse } from './kit.js';
import { loft, wing, TAU } from './util.js';
import { bindMood } from './mood.js';

/** Small civic aircraft: a glazed cabin, short hydrofoil-like wings and twin nacelles. */
function commuterModel(M, hull) {
  const g = new THREE.Group();
  g.add(mesh(loft([
    { z: 2.9, w: 0.08, h: 0.08 }, { z: 2.1, w: 0.62, h: 0.42 },
    { z: 0.4, w: 0.93, h: 0.65 }, { z: -1.6, w: 0.83, h: 0.52 },
    { z: -2.4, w: 0.43, h: 0.32 },
  ], 16, 3), hull));
  g.add(mesh(loft([
    { z: 1.85, w: 0.08, h: 0.04, y: 0.34 }, { z: 0.95, w: 0.52, h: 0.26, y: 0.52, e: 3 },
    { z: -0.45, w: 0.55, h: 0.2, y: 0.55, e: 3 }, { z: -1.15, w: 0.12, h: 0.035, y: 0.47 },
  ], 12, 3), M.canopy));
  const foil = wing([[0.7, 0.9], [2.8, -0.8], [2.6, -1.5], [0.7, -1.5]], 0.09, 0.025);
  const stabilizer = wing([[0.28, -1.63], [1.35, -2.03], [1.25, -2.49], [0.25, -2.33]], 0.07, 0.02);
  const nacelle = loft([
    { z: -0.42, w: 0.23, h: 0.23 }, { z: -0.72, w: 0.31, h: 0.29 },
    { z: -1.65, w: 0.29, h: 0.27 }, { z: -2.25, w: 0.22, h: 0.22 },
  ], 12, 2);
  for (const side of [-1, 1]) {
    const w = mesh(foil, hull, 0, -0.2, 0); w.scale.x = side; g.add(w);
    const tail = mesh(stabilizer, hull, 0, 0.25, 0); tail.scale.x = side; g.add(tail);
    g.add(mesh(nacelle, hull, side * 1.4, -0.15, 0));
    g.add(mesh(new THREE.CircleGeometry(0.22, 12), M.canopy, side * 1.4, -0.15, -0.415));
    g.add(mesh(new THREE.TorusGeometry(0.22, 0.035, 6, 16), M.goldSoft, side * 1.4, -0.15, -2.25));
  }
  // Swept, tapered vertical stabilizer, with only a fine gilded leading edge.
  g.add(mesh(wing([[0.28, -0.82], [1.2, -1.94], [1.18, -2.18], [0.26, -2.38]], 0.1, 0.018).rotateZ(Math.PI / 2), hull));
  g.add(mesh(wing([[0.55, -1.145], [1.17, -1.9], [1.17, -1.98], [0.55, -1.225]], 0.115, 0.008).rotateZ(Math.PI / 2), M.goldSoft));
  return fuse(g);
}

/** Broad, slow freight carrier; three enclosed cargo modules make its silhouette distinct. */
function cargoModel(M, hull) {
  const g = new THREE.Group();
  g.add(mesh(box(2.0, 0.85, 10.8, 0.2), M.canopy, 0, -0.45, 0));
  g.add(mesh(box(3.4, 1.2, 2.4, 0.3), hull, 0, 0.1, 4.35));
  g.add(mesh(box(2.65, 0.43, 0.1, 0.05), M.canopy, 0, 0.38, 5.57));
  for (const z of [-2.8, 0.0, 2.55]) {
    g.add(mesh(box(3.6, 1.85, 2.2, 0.16), hull, 0, 0.75, z));
    g.add(mesh(box(3.72, 0.1, 0.18, 0.03), M.goldSoft, 0, 1.69, z));
  }
  for (const side of [-1, 1]) {
    g.add(mesh(box(0.5, 0.4, 7.1, 0.1), M.goldSoft, side * 2.35, -0.1, -0.9));
    g.add(mesh(cyl(0.56, 0.67, 4.7, 16).rotateX(Math.PI / 2), hull, side * 2.75, -0.25, -1.8));
    g.add(mesh(new THREE.TorusGeometry(0.58, 0.08, 6, 20), M.canopy, side * 2.75, -0.25, -4.2));
  }
  return fuse(g);
}

/** Ivory cat-headed service orb, matching the garden companion's gilded equator. */
function maintenanceModel(M) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.SphereGeometry(0.9, 32, 24), M.white));
  g.add(mesh(new THREE.TorusGeometry(0.972, 0.09, 10, 48).rotateX(Math.PI / 2), M.goldSoft));
  // Rounded, elliptical tapers stay ear-shaped as the orb turns. The buried
  // curved roots and small rounded tips avoid flat tabs or tall pointed horns.
  const earGeometry = new THREE.LatheGeometry([
    [0, -0.60], [0.08, -0.50], [0.18, -0.37], [0.25, -0.24], [0.27, -0.145],
    [0.265, -0.105], [0.235, -0.05], [0.19, 0.025], [0.14, 0.10],
    [0.085, 0.166], [0.045, 0.207], [0.022, 0.225], [0, 0.232],
  ].map(([radius, y]) => new THREE.Vector2(radius, y)), 28).scale(1, 1, 0.65);
  for (const side of [-1, 1]) {
    const ear = mesh(earGeometry, M.white, side * 0.55, 0.895, 0.13);
    ear.rotation.z = -side * 0.15; g.add(ear);
  }
  return fuse(g);
}

/**
 * Close exterior lanes make activity readable through the arches: low water
 * skiffs, opposite-direction commuter lanes, slow cargo, and local maintenance.
 * Crossings repeat beyond the camera's side edges; no forces reach the garden.
 * Every vehicle type is instanced once per material; nav lights share one batch.
 */
export function buildExterior(W) {
  const M = W.mat, root = new THREE.Group(), mood = { nav: 1.15 };
  bindMood(W, mood, 'nav', 1.15, 2.0);
  root.name = 'Exterior activity'; W.scene.add(root);
  const commuterHull = new THREE.MeshStandardMaterial({ color: 0x829da9, map: W.tex.panel, roughness: 0.42, metalness: 0.25 });
  const freightHull = new THREE.MeshStandardMaterial({ color: 0x718997, map: W.tex.panel, roughness: 0.5, metalness: 0.28 });
  const skiffCount = 1;
  // A second halving leaves six craft, or four on the mobile tier.
  const counts = { commuters: W.Q.low ? 3 : 4, cargo: 1, maintenance: W.Q.low ? 0 : 1 };
  // Vehicles share one-way lanes, with evenly spaced phases to avoid long empty gaps.
  // Nearest hulls remain at least 12m clear of the rotunda's outer walkway.
  const lanes = [
    { name: 'water', z: -40, curve: 5, altitude: 1.15, span: 58, period: 54, direction: 1 },
    { name: 'near-air', z: -43, curve: 4, altitude: 9.2, span: 64, period: 24, direction: 1 },
    { name: 'far-air', z: -68, curve: 6, altitude: 16.2, span: 82, period: 36, direction: -1 },
    { name: 'courier', z: -54, curve: 4, altitude: 12.8, span: 70, period: 19, direction: -1 },
  ];
  const batches = [];
  const fleet = (model, count, name) => {
    const meshes = model.children.filter((o) => o.isMesh).map((part) => {
      const instances = new THREE.InstancedMesh(part.geometry, part.material, count);
      instances.name = name; instances.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      instances.frustumCulled = false; root.add(instances); batches.push(instances); return instances;
    });
    return { count, meshes };
  };
  const commuters = fleet(commuterModel(M, commuterHull), counts.commuters, 'Commuter and water-skiff fleet');
  const cargo = fleet(cargoModel(M, freightHull), counts.cargo, 'Cargo carriers');
  const maintenance = counts.maintenance ? fleet(maintenanceModel(M), counts.maintenance, 'Maintenance craft') : null;
  const vehicles = [];
  const navPoints = [];
  const add = (kind, f, index, scale, lights, extra) => {
    const item = { kind, fleet: f, index, scale, position: new THREE.Vector3(), heading: 0, ...extra };
    item.lights = lights.map(([x, y, z, color, radius]) => {
      const light = { point: new THREE.Vector3(x, y, z), color, radius, index: navPoints.length, phase: index * 0.71 };
      navPoints.push(light); return light;
    });
    vehicles.push(item); return item;
  };
  for (let i = 0; i < counts.commuters; i++) {
    const skiff = i < skiffCount, laneIndex = i, lane = lanes[laneIndex];
    add(skiff ? 'water-skiff' : 'commuter', commuters, i, skiff ? 1.03 : laneIndex === 3 ? 0.95 : 1.18,
      [[-1.4, -0.15, -2.3, 0xffcb87, 0.22], [1.4, -0.15, -2.3, 0xffcb87, 0.22], [0, 0.98, -1.65, 0xb7e4e4, 0.11]],
      { phase: laneIndex * 0.083 + 0.09, period: lane.period, lane, skiff });
  }
  for (let i = 0; i < counts.cargo; i++) {
    add('cargo', cargo, i, 0.95 + (i % 2) * 0.1,
      [[-2.75, -0.25, -4.25, 0xffc481, 0.42], [2.75, -0.25, -4.25, 0xffc481, 0.42], [0, 1.95, 2.55, 0xd6e5db, 0.18]],
      { phase: 0.12 + i / counts.cargo, period: 70, lane: { z: -82, curve: 7, altitude: 6.3, span: 90, direction: -1 } });
  }
  const stations = [
    { centre: [-22, 7.1, -37], radius: 4.5 },
    { centre: [5.5, 12, -42], radius: 3.2 },
    { centre: [-6.5, 6.7, -38], radius: 3 },
    { centre: [L.DOCK.x, 11, L.DOCK.z + 8], radius: 12 },
    { centre: [L.FALLS.x + 18, 22, L.FALLS.z + 13], radius: 5 },
  ];
  for (let i = 0; i < counts.maintenance; i++) {
    const stationIndex = i * 2, station = stations[stationIndex];
    add('maintenance', maintenance, i, stationIndex < 3 ? 1.15 : 1.05,
      [],
      { phase: stationIndex * 2.2, period: 23 + stationIndex * 5, centre: new THREE.Vector3(...station.centre), radius: station.radius });
  }

  const nav = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), navPoints.length);
  nav.name = 'Exterior navigation lights'; nav.instanceMatrix.setUsage(THREE.DynamicDrawUsage); nav.frustumCulled = false; root.add(nav);
  const skiffs = vehicles.filter((o) => o.skiff);
  const wakes = new THREE.InstancedMesh(new THREE.PlaneGeometry(2.8, 9).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: W.tex.glow, color: 0xd4e3e0, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide }), skiffs.length);
  bindMood(W, wakes.material, 'opacity', 0.2, 0.1);
  wakes.name = 'Water-skiff wakes'; wakes.instanceMatrix.setUsage(THREE.DynamicDrawUsage); wakes.frustumCulled = false; root.add(wakes);
  const frame = new THREE.Object3D(), lightFrame = new THREE.Object3D(), color = new THREE.Color();
  const state = W.exterior = { root, vehicles, counts, lanes, drawCalls: batches.length + 2, minRadius: Infinity, time: 0 };
  const lightNav = (t) => {
    for (const light of navPoints) {
      color.set(light.color).multiplyScalar(mood.nav * (0.9 + 0.1 * Math.sin(t * 2.3 + light.phase))); nav.setColorAt(light.index, color);
    }
    nav.instanceColor.needsUpdate = true;
  };
  const update = (t) => {
    state.time = t; state.minRadius = Infinity; let wakeIndex = 0;
    for (const o of vehicles) {
      let dx, dy = 0, dz, roll = 0;
      if (o.lane) {
        const lane = o.lane, u = (t / o.period + o.phase) % 1, a = u * TAU;
        o.position.set(lane.direction * (u * 2 - 1) * lane.span, lane.altitude + Math.sin(a * 2) * (o.skiff ? 0.045 : 0.25), lane.z + Math.sin(a) * lane.curve);
        dx = lane.direction * lane.span * 2; dz = Math.cos(a) * lane.curve * TAU; dy = o.skiff ? 0 : Math.cos(a * 2) * Math.PI;
        roll = o.skiff ? 0 : Math.sin(a) * lane.direction * (o.kind === 'cargo' ? 0.018 : 0.055);
      } else {
        const a = t / o.period * TAU + o.phase;
        o.position.set(o.centre.x + Math.sin(a) * o.radius, o.centre.y + Math.sin(a * 2) * 1.1, o.centre.z + Math.cos(a) * o.radius * 0.55);
        dx = -Math.sin(a); dz = -Math.cos(a); roll = Math.sin(a * 1.7) * 0.035;
      }
      o.heading = Math.atan2(dx, dz);
      frame.position.copy(o.position); frame.rotation.set(-Math.atan2(dy, Math.hypot(dx, dz)), o.heading, roll, 'YXZ'); frame.scale.setScalar(o.scale); frame.updateMatrix();
      o.fleet.meshes.forEach((m) => m.setMatrixAt(o.index, frame.matrix));
      state.minRadius = Math.min(state.minRadius, Math.hypot(o.position.x, o.position.z));
      for (const light of o.lights) {
        lightFrame.position.copy(light.point).applyMatrix4(frame.matrix); lightFrame.rotation.set(0, 0, 0); lightFrame.scale.setScalar(light.radius * o.scale); lightFrame.updateMatrix();
        nav.setMatrixAt(light.index, lightFrame.matrix);
      }
      if (o.skiff) {
        lightFrame.position.set(o.position.x - Math.sin(o.heading) * 6.2, 0.065, o.position.z - Math.cos(o.heading) * 6.2);
        lightFrame.rotation.set(0, o.heading, 0); lightFrame.scale.set(1, 1, 0.9 + Math.sin(t * 1.4 + o.index) * 0.08); lightFrame.updateMatrix(); wakes.setMatrixAt(wakeIndex++, lightFrame.matrix);
      }
    }
    batches.forEach((m) => { m.instanceMatrix.needsUpdate = true; });
    lightNav(t);
    nav.instanceMatrix.needsUpdate = wakes.instanceMatrix.needsUpdate = true;
  };
  update(0); W.updaters.push(update);
  W.moodBindings.push(() => lightNav(W.uTime.value));
  return state;
}
