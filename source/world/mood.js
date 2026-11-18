import * as THREE from 'three';

/** Bind a material or light property to the shared day (0) / night (1) mix. */
export function bindMood(W, object, property, day, night) {
  const value = object[property];
  let update;
  if (value?.isColor) {
    const a = new THREE.Color(day), b = new THREE.Color(night);
    update = mix => value.copy(a).lerp(b, mix);
  } else if (value?.isVector3) {
    const a = new THREE.Vector3().fromArray(day), b = new THREE.Vector3().fromArray(night);
    update = mix => value.copy(a).lerp(b, mix);
  } else {
    update = mix => { object[property] = day + (night - day) * mix; };
  }
  W.moodBindings.push(update); update(W.uNight.value);
  return object;
}

export function applyMood(W, mix) {
  W.uNight.value = mix;
  for (const update of W.moodBindings) update(mix);
}
