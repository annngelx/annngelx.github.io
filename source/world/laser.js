import * as THREE from 'three';
import { hdr, lamp, setLamp } from './kit.js';

/** A short engraving beam with a white core, amber fringe and surface contact flare. */
export class EngravingLaser {
  constructor(W) {
    this.group = new THREE.Group(); this.group.name = 'Engraving laser';
    this.group.visible = false; W.scene.add(this.group);
    const coreMaterial = new THREE.MeshBasicMaterial({ color: hdr(0xfff3df, 7), depthWrite: false, fog: false });
    const haloMaterial = new THREE.MeshBasicMaterial({ color: hdr(0xff982b, 3), transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    this.core = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 1, 8), coreMaterial);
    this.halo = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.038, 1, 12, 1, true), haloMaterial);
    this.hotspot = new THREE.Mesh(new THREE.SphereGeometry(0.019, 12, 8), coreMaterial);
    this.glow = lamp(W, 0xff9c32, 0.38, 4.5);
    this.flare = new THREE.Sprite(new THREE.SpriteMaterial({ map: W.tex.star, color: hdr(0xffefca, 4),
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.group.add(this.halo, this.core, this.hotspot, this.glow, this.flare);
    this.group.traverse(o => { o.layers.set(1); o.frustumCulled = false; o.renderOrder = 6; });
    this.axis = new THREE.Vector3(); this.offset = new THREE.Vector3(); this.normal = new THREE.Vector3();
    this.contact = new THREE.Vector3(); this.up = new THREE.Vector3(0, 1, 0);
    this.active = false; this.length = 0;
  }

  update(nozzle, wrist, centre, radius, pressure, time) {
    this.active = this.group.visible = false;
    this.length = 0;
    if (pressure <= 0.06) return;
    // Intersect the actual spring-driven stylus axis with the globe. This keeps
    // the beam attached to both endpoints, even while the arm catches its target.
    this.axis.set(1, 0, 0).transformDirection(wrist.matrixWorld);
    this.offset.subVectors(nozzle, centre);
    const b = this.offset.dot(this.axis), discriminant = b * b - this.offset.lengthSq() + radius * radius;
    if (discriminant < 0) return;
    const distance = -b - Math.sqrt(discriminant);
    if (distance < 0.006 || distance > 0.55) return;
    this.active = this.group.visible = true; this.length = distance;
    this.contact.copy(nozzle).addScaledVector(this.axis, distance);
    this.normal.subVectors(this.contact, centre).normalize();
    const strength = (0.68 + pressure * 0.62) * (0.94 + 0.06 * Math.sin(time * 34));
    for (const beam of [this.core, this.halo]) {
      beam.position.copy(nozzle).addScaledVector(this.axis, distance * 0.5);
      beam.quaternion.setFromUnitVectors(this.up, this.axis); beam.scale.set(1, distance, 1);
    }
    this.halo.material.opacity = 0.48 + pressure * 0.18;
    this.hotspot.position.copy(this.contact).addScaledVector(this.normal, 0.012);
    this.hotspot.scale.setScalar(0.85 + pressure * 0.35);
    this.glow.position.copy(this.hotspot.position); setLamp(this.glow, strength);
    this.glow.scale.setScalar(0.30 + pressure * 0.16);
    this.flare.position.copy(this.hotspot.position); this.flare.scale.setScalar(0.13 + pressure * 0.06);
    this.flare.material.opacity = Math.min(strength, 1);
  }
}
