import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { MOODS, bindAtmosphere } from './atmo.js';

const v3 = (a) => `vec3(${a.map(n => n.toFixed(4)).join(', ')})`;

/**
 * The pool: a still mirror with slow ripples. The scene is drawn a second time from below the surface
 * (three's Reflector does the camera work) and this shader bends and tints that picture.
 */
export function buildWater(W) {
  const impact = new THREE.Vector4(0, 0, -100, 0);
  const shader = {
    name: 'PoolWater',
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null }, uTime: { value: 0 }, uGust: { value: 0 }, uImpact: { value: impact } }]),
    vertexShader: /* glsl */`
      uniform mat4 textureMatrix;
      varying vec4 vUv; varying vec3 vWp;
      #include <common>
      #include <fog_pars_vertex>
      void main(){
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse; uniform float uTime; uniform float uGust; uniform vec4 uImpact;
      varying vec4 vUv; varying vec3 vWp;
      #include <common>
      #include <fog_pars_fragment>
      vec2 wave(vec2 p, vec2 k, float a, float w){ return a * k * cos(dot(p, k) + w * uTime); }
      void main(){
        vec2 p = vWp.xz;
        float dist = length(cameraPosition - vWp);
        vec2 q = p + 1.3 * vec2(sin(p.y * 0.21 + uTime * 0.23), cos(p.x * 0.17 - uTime * 0.19));
        float f1 = 1.0 / (1.0 + dist * 0.02), f2 = 1.0 / (1.0 + dist * dist * 0.004);
        vec2 g = (wave(q, vec2(0.9, 0.45), 0.020, 0.7) + wave(q, vec2(-0.6, 1.1), 0.017, 0.9) + wave(q, vec2(1.6, -0.8), 0.012, 1.2)) * f1
               + (wave(q, vec2(3.4, 2.1), 0.0035, 1.9) + wave(q, vec2(-4.6, 3.3), 0.0025, 2.4) + wave(q, vec2(2.2, -6.1), 0.0018, 2.9)) * f2 * (1.0 + uGust * 0.65);
        // The pressure wave from a low pass travels out across the pool, then settles.
        vec2 radial = p - uImpact.xy; float radius = length(radial), age = max(0.0, uTime - uImpact.z);
        float front = exp(-pow((radius - age * 10.0) / 2.8, 2.0)) * exp(-age * 0.5) * uImpact.w;
        g += radial / max(radius, 0.01) * sin(radius * 3.0 - age * 24.0) * front * 0.045 * f1;
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vWp);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec4 uv = vUv; uv.xy += N.xz * 0.28 * uv.w;                     // preserve detail within the moving reflection
        uv.xy = clamp(uv.xy, vec2(0.002) * uv.w, vec2(0.998) * uv.w);
        vec3 refl = texture2DProj(tDiffuse, uv).rgb;
        vec3 shallow = mix(${v3(MOODS.day.waterShallow)}, ${v3(MOODS.night.waterShallow)}, uNight);
        vec3 deep = mix(${v3(MOODS.day.waterDeep)}, ${v3(MOODS.night.waterDeep)}, uNight);
        vec3 body = mix(shallow, deep, smoothstep(0.15, 0.75, 1.0 - V.y));
        vec3 col = mix(body, refl, fres);
        vec3 N2 = normalize(vec3(-g.x * 3.0, 1.0, -g.y * 3.0));         // livelier normal for sparkle
        vec3 R = reflect(-V, N2);
        float highlight = max(dot(R, SUN), 0.0);
        float gloss = 550.0 / (1.0 + 900.0 * fwidth(highlight));         // filter subpixel glints instead of flickering
        col += fogTint(SUN) * pow(highlight, gloss) * 1.8;
        gl_FragColor = vec4(col, 1.0);
        #include <fog_fragment>
      }`,
  };
  const size = W.renderer.getDrawingBufferSize(new THREE.Vector2()); let k = W.Q.mirror, last = [size.x, size.y, 1];
  const mirror = new Reflector(new THREE.PlaneGeometry(7000, 7000), { textureWidth: Math.max(256, Math.round(size.x * k)), textureHeight: Math.max(256, Math.round(size.y * k)), clipBias: 0.02, shader, multisample: 0 });
  mirror.rotation.x = -Math.PI / 2;
  mirror.material.fog = true; mirror.material.uniforms.uTime = W.uTime; mirror.material.uniforms.uGust = W.uGust;
  bindAtmosphere(mirror.material, W);
  mirror.material.uniforms.uImpact.value = impact;
  mirror.frustumCulled = false;
  W.scene.add(mirror);
  mirror.getReflectionCamera(W.camera).layers.set(0);                    // layer 1 holds things not worth mirroring
  const fit = (w, h, dpr) => { last = [w, h, dpr]; mirror.getRenderTarget().setSize(Math.max(256, Math.round(w * dpr * k)), Math.max(256, Math.round(h * dpr * k))); };
  W.onResize.push(fit);
  mirror.userData.setScale = (s) => { k = s; fit(...last); };
  mirror.userData.scale = () => k;
  W.updaters.push((t) => {
    if (W.flyby?.near > 0.55 && t - impact.z > 15) impact.set(W.flyby.pos.x, W.flyby.pos.z, t, W.flyby.near);
  });
  return mirror;
}
