import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { SUN, MOODS } from './atmo.js';

const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';

/** Light shafts: smear the brightest sky toward the viewer from the sun's screen position. */
const rays = (n, thresh) => ({
  uniforms: { tDiffuse: { value: null }, uSun: { value: new THREE.Vector2(0.5, 0.5) }, uK: { value: 0 }, uAspect: { value: 1 }, uThreshold: { value: thresh } },
  vertexShader: VERT,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK; uniform float uAspect; uniform float uThreshold; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 base = texture2D(tDiffuse, vUv);
      vec3 acc = vec3(0.0);
      if (uK > 0.002) {
        vec2 d = uSun - vUv; float dist = length(d * vec2(uAspect, 1.0));
        vec2 st = d * (0.92 / float(${n}));
        vec2 p = vUv + st * hash(gl_FragCoord.xy); float w = 1.0;
        for (int i = 0; i < ${n}; i++) {
          vec3 s = min(texture2D(tDiffuse, p).rgb, vec3(3.0));
          float l = max(dot(s, vec3(0.3, 0.55, 0.15)) - uThreshold, 0.0);
          float src = smoothstep(0.3, 0.05, length((p - uSun) * vec2(uAspect, 1.0)));      // only the sun or moon itself casts shafts, not lamps elsewhere in the frame
          acc += s * (l / (l + 1.2)) * src * w; w *= 0.965; p += st;
        }
        acc *= uK / float(${n}) * (1.0 / (1.0 + dist * 1.6));
      }
      gl_FragColor = vec4(base.rgb + acc, base.a);
    }`,
});

/** Display-space finish: slight lens fringing, grade, vignette, grain, fade. */
const finish = () => ({
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uFade: { value: 0 }, uNight: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } },
  vertexShader: VERT,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uFade; uniform float uNight; uniform vec2 uRes; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; float r2 = dot(c, c);
      vec2 off = c * r2 * 0.0012;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, mix(1.1, 1.16, uNight));
      col = mix(col, col * col * (3.0 - 2.0 * col), mix(0.1, 0.3, uNight));
      col += mix(vec3(0.0, 0.004, 0.012), vec3(-0.008, 0.0, 0.026), uNight) * (1.0 - l);
      col *= mix(vec3(1.0), vec3(1.03, 1.0, 0.955), smoothstep(0.55, 1.0, l));
      col *= 1.0 - smoothstep(0.12, 0.62, r2) * mix(0.36, 0.55, uNight);
      col += (hash(vUv * uRes + fract(uTime) * 91.7) - 0.5) * 0.007;
      gl_FragColor = vec4(mix(mix(vec3(0.965, 0.957, 0.937), vec3(0.02, 0.027, 0.06), uNight), max(col, 0.0), uFade), 1.0);
    }`,
});

export function makePost(W) {
  const { renderer, scene, camera, Q } = W, M = W.mood;
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: Q.msaa });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const ray = new ShaderPass(rays(Q.rays, M.rayThresh)); composer.addPass(ray);
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), M.bloom[0], M.bloom[1], M.bloom[2]); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  // Keep thin dome ribs, gold inlays and leaves clean on the mobile tier without MSAA.
  const aa = new ShaderPass(FXAAShader); aa.enabled = Q.msaa === 0; composer.addPass(aa);
  const fin = new ShaderPass(finish()); fin.uniforms.uNight = W.uNight; composer.addPass(fin);
  const updateMood = () => {
    const n = W.uNight.value, lerp = THREE.MathUtils.lerp;
    bloom.strength = lerp(MOODS.day.bloom[0], MOODS.night.bloom[0], n);
    bloom.radius = lerp(MOODS.day.bloom[1], MOODS.night.bloom[1], n);
    bloom.threshold = lerp(MOODS.day.bloom[2], MOODS.night.bloom[2], n);
    ray.uniforms.uThreshold.value = lerp(MOODS.day.rayThresh, MOODS.night.rayThresh, n);
  };
  W.moodBindings.push(updateMood); updateMood();
  const sp = new THREE.Vector3(), fwd = new THREE.Vector3();
  let prewarmRays = Q.rays > 0;
  return {
    composer, fin, ray, bloom,
    resize(w, h, dpr) { composer.setPixelRatio(dpr); composer.setSize(w, h); fin.uniforms.uRes.value.set(w * dpr, h * dpr); aa.uniforms.resolution.value.set(1 / (w * dpr), 1 / (h * dpr)); ray.uniforms.uAspect.value = w / h; },
    render(t) {
      camera.getWorldDirection(fwd);
      sp.copy(SUN).multiplyScalar(2000).add(camera.position).project(camera);
      const facing = fwd.dot(SUN), edge = Math.max(Math.abs(sp.x), Math.abs(sp.y));
      ray.uniforms.uSun.value.set(sp.x * 0.5 + 0.5, sp.y * 0.5 + 0.5);
      ray.uniforms.uK.value = facing > 0.2 ? THREE.MathUtils.lerp(MOODS.day.rays, MOODS.night.rays, W.uNight.value) * THREE.MathUtils.smoothstep(1.7 - edge, 0, 0.7) : 0;
      // Compile the ray shader before the first frame is revealed, even when
      // its zero-strength result is a copy. Later daytime frames can skip it.
      ray.enabled = Q.rays > 0 && (prewarmRays || ray.uniforms.uK.value > 0.002);
      fin.uniforms.uTime.value = t;
      composer.render();
      prewarmRays = false;
    },
  };
}
