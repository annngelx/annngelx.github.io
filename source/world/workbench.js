import * as THREE from 'three';
import { L } from './ground.js';
import { box, cyl, mesh, group, lathe, shadows, fuse } from './kit.js';
import { bindMood } from './mood.js';

/** Quiet, practical details around the sculptor: a stone bench, a chart and a few tools. */
export function buildWorkbench(W) {
  const M = W.mat, D = L.DAIS, root = group(D.x, 0, D.z);
  root.name = 'Marble workbench';
  const paper = new THREE.MeshStandardMaterial({ color: 0xf0e8d7, roughness: 0.88, metalness: 0 });
  const joint = new THREE.MeshStandardMaterial({ color: 0xc9c3b7, roughness: 0.86, metalness: 0 });
  const diffuser = new THREE.MeshStandardMaterial({
    color: 0xffe5bb, roughness: 0.65, metalness: 0,
    emissive: 0xffd6a0, emissiveIntensity: 0.12,
  });
  bindMood(W, diffuser, 'emissiveIntensity', 0.12, 0.45);

  const rod = (parent, a, b, radius, material = M.goldSoft, segments = 8) => {
    const from = new THREE.Vector3(...a), to = new THREE.Vector3(...b), delta = to.clone().sub(from);
    const part = mesh(cyl(radius, radius, delta.length(), segments), material);
    part.position.copy(from).add(to).multiplyScalar(0.5);
    part.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    parent.add(part);
    return part;
  };

  // A slim eased stone edge and fine radial joints make the platform read as cut slabs.
  root.add(mesh(lathe([
    [D.r - 0.02, D.y - 0.07], [D.r + 0.018, D.y - 0.045],
    [D.r + 0.018, D.y - 0.025], [D.r - 0.018, D.y],
    [D.r - 0.05, D.y], [D.r - 0.02, D.y - 0.07],
  ], 96), M.marble));
  for (let i = 0; i < 12; i++) {
    const a = (i + 0.5) * Math.PI / 6, radius = 3.69;
    const seam = mesh(new THREE.BoxGeometry(0.012, 0.003, 1.06), joint,
      Math.sin(a) * radius, D.y + 0.0015, Math.cos(a) * radius);
    seam.rotation.y = a;
    root.add(seam);
  }

  // The crescent fits entirely on the rear of the dais, clear of the arm and globe.
  const plan = new THREE.Shape();
  plan.moveTo(-2.5, 1.9);
  plan.bezierCurveTo(-1.25, 2.72, 1.25, 2.72, 2.5, 1.9);
  plan.lineTo(2.6, 2.76);
  plan.bezierCurveTo(1.3, 3.62, -1.3, 3.62, -2.6, 2.76);
  plan.closePath();
  const slabBase = D.y + 0.91, slabThickness = 0.14, top = slabBase + slabThickness + 0.018;
  const slab = new THREE.ExtrudeGeometry(plan, {
    depth: slabThickness, bevelEnabled: true, bevelSize: 0.022,
    bevelThickness: 0.018, bevelSegments: 2, curveSegments: 28,
  }).rotateX(-Math.PI / 2);
  root.add(mesh(slab, M.marble, 0, slabBase, 0));

  for (const x of [-1.66, 1.66]) {
    root.add(mesh(lathe([[0, 0], [0.43, 0], [0.43, 0.055], [0.36, 0.1], [0, 0.1]], 24), M.marble, x, D.y, -2.67));
    root.add(mesh(cyl(0.27, 0.31, 0.73, 24), M.marbleFlute, x, D.y + 0.465, -2.67));
    root.add(mesh(cyl(0.37, 0.3, 0.1, 24), M.marble, x, D.y + 0.85, -2.67));
    root.add(mesh(cyl(0.315, 0.315, 0.017, 24), M.goldSoft, x, D.y + 0.12, -2.67));
  }
  const lip = new THREE.CubicBezierCurve3(
    new THREE.Vector3(-2.5, top - 0.075, -1.9), new THREE.Vector3(-1.25, top - 0.075, -2.72),
    new THREE.Vector3(1.25, top - 0.075, -2.72), new THREE.Vector3(2.5, top - 0.075, -1.9),
  );
  root.add(mesh(new THREE.TubeGeometry(lip, 48, 0.009, 6, false), M.goldSoft));

  // A cream drafting sheet rests on a shallow inclined board, held by two brass clips.
  const drawing = group(-0.25, top + 0.118, -2.96);
  drawing.rotation.x = 0.24;
  drawing.rotation.y = -0.08;
  drawing.add(mesh(box(1.18, 0.032, 0.84, 0.012), M.seam));
  drawing.add(mesh(box(1.13, 0.012, 0.79, 0.006), paper, 0, 0.022, 0));
  for (const x of [-0.39, 0.39]) drawing.add(mesh(box(0.085, 0.012, 0.045, 0.006), M.goldSoft, x, 0.035, -0.365));
  const inkY = 0.031;
  for (const r of [0.22, 0.31]) drawing.add(mesh(new THREE.TorusGeometry(r, 0.0018, 4, 48).rotateX(Math.PI / 2), M.seam, 0, inkY, 0));
  rod(drawing, [-0.42, inkY, 0], [0.42, inkY, 0], 0.0016, M.seam, 4);
  rod(drawing, [0, inkY, -0.33], [0, inkY, 0.33], 0.0016, M.seam, 4);
  const stars = [[-0.25, 0.08], [-0.13, -0.14], [0.04, -0.08], [0.19, -0.23], [0.25, 0.03], [0.1, 0.18]];
  for (let i = 0; i < stars.length; i++) {
    const [x, z] = stars[i];
    drawing.add(mesh(cyl(i % 2 ? 0.008 : 0.011, i % 2 ? 0.008 : 0.011, 0.0015, 8), M.seam, x, inkY + 0.002, z));
    if (i) rod(drawing, [stars[i - 1][0], inkY + 0.001, stars[i - 1][1]], [x, inkY + 0.001, z], 0.002, M.seam, 4);
  }
  root.add(drawing);
  // The board has a real support beneath the raised rear edge.
  root.add(mesh(box(0.82, 0.17, 0.095, 0.012), M.marble, -0.25, top + 0.085, -3.27));

  // A lined instrument tray, one divider, and a ruled brass straightedge.
  const tray = group(1.05, top, -2.8);
  tray.rotation.y = -0.17;
  tray.add(mesh(box(0.83, 0.055, 0.55, 0.035), M.marble, 0, 0.028, 0));
  tray.add(mesh(box(0.73, 0.008, 0.45, 0.025), M.seam, 0, 0.057, 0));
  rod(tray, [0.04, 0.075, -0.15], [-0.13, 0.075, 0.17], 0.011);
  rod(tray, [0.04, 0.075, -0.15], [0.23, 0.075, 0.17], 0.011);
  tray.add(mesh(cyl(0.028, 0.028, 0.014, 12), M.goldSoft, 0.04, 0.077, -0.15));
  rod(tray, [-0.27, 0.073, -0.13], [-0.27, 0.073, 0.16], 0.013);
  root.add(tray);
  const ruler = group(-0.3, top + 0.012, -2.54);
  ruler.rotation.y = 0.05;
  ruler.add(mesh(box(0.63, 0.012, 0.065, 0.004), M.goldSoft));
  for (let i = 0; i < 17; i++) ruler.add(mesh(new THREE.BoxGeometry(0.0025, 0.001, i % 4 ? 0.013 : 0.025), M.seam, -0.28 + i * 0.035, 0.0068, -0.015));
  root.add(ruler);

  // A small shaded task lamp gives the work surface a warm pool of light at night.
  const taskLamp = group(-1.55, top, -3.05);
  taskLamp.add(mesh(lathe([[0, 0], [0.18, 0], [0.18, 0.035], [0.14, 0.065], [0, 0.065]], 24), M.marble));
  rod(taskLamp, [0, 0.055, 0], [0, 0.61, 0], 0.023);
  rod(taskLamp, [0, 0.61, 0], [0.5, 0.78, 0.16], 0.02);
  taskLamp.add(mesh(new THREE.SphereGeometry(0.045, 12, 8), M.goldSoft, 0, 0.61, 0));
  taskLamp.add(mesh(lathe([[0, 0.18], [0.065, 0.18], [0.16, 0.035], [0.18, 0], [0.165, 0], [0.065, 0.14], [0, 0.14]], 24), M.marble, 0.5, 0.6, 0.16));
  taskLamp.add(mesh(new THREE.TorusGeometry(0.174, 0.008, 6, 32).rotateX(Math.PI / 2), M.goldSoft, 0.5, 0.605, 0.16));
  taskLamp.add(mesh(cyl(0.146, 0.146, 0.008, 24), diffuser, 0.5, 0.618, 0.16));
  const light = new THREE.PointLight(0xffd7a1, 0.25, 2.4, 2);
  bindMood(W, light, 'intensity', 0.25, 1.5);
  light.position.set(0.5, 0.56, 0.16);
  taskLamp.add(light);
  root.add(taskLamp);

  shadows(root, true, true);
  W.scene.add(fuse(root));
  return root;
}
