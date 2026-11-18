import * as THREE from 'three';

/**
 * Two moods for the same garden. The page picks one from the visitor's clock (or ?time=day|night).
 * Everything that depends on the light reads from here, so a mood is a single table of numbers.
 */
export const MOODS = {
  day: {
    name: 'day',
    light: [-0.58, 0.64, 0.50],                  // oblique daylight through the dome, modelling the stone and machinery
    planetDir: [-0.1879, 0.1736, -0.9667],        // the ringed world: in the arch left of centre by day, further left at night
    lightColor: 0xffecd5, lightIntensity: 3.4,
    hemi: [0xd5dfeb, 0xb8af97, 0.70],             // broad skylight balances the warmer sunlight inside the dome
    shadowIntensity: 0.82,
    zenith: [0.10, 0.27, 0.68], mid: [0.30, 0.54, 0.90],
    haze: [0.43, 0.59, 0.73], hazeLit: [0.78, 0.76, 0.66], hazeK: 0.65,
    glowColor: [1.0, 0.90, 0.72], glow: [1.2, 0.35, 0.22], disc: 8.0, discCos: [0.99972, 0.99990],
    cloudLit: [1.30, 1.27, 1.20], cloudShade: [0.66, 0.74, 0.90], cloudCover: [0.47, 0.79], cloudAlpha: 0.88,
    stars: 0, planet: 0.55,
    fog: 0.00075, fogFalloff: 0.02,
    exposure: 1.085, bloom: [0.10, 0.40, 2.2], rays: 0.10, rayThresh: 2.3, env: 0.95,
    lamps: 0.25, bloomGlow: 0.0,                   // lanterns barely lit, roses not glowing
    waterDeep: [0.03, 0.17, 0.20], waterShallow: [0.08, 0.32, 0.34],
  },
  night: {
    name: 'night',
    light: [0.1876, 0.1822, -0.9652],             // direction to the moon: low, inside the arch right of centre, beside the globe
    planetDir: [-0.3769, 0.1736, -0.9098],
    lightColor: 0xbcd0ff, lightIntensity: 1.7,
    hemi: [0x8290b2, 0x343a4f, 0.74],
    shadowIntensity: 0.78,
    zenith: [0.004, 0.010, 0.045], mid: [0.013, 0.032, 0.105],
    haze: [0.045, 0.080, 0.165], hazeLit: [0.17, 0.24, 0.40], hazeK: 0.8,
    glowColor: [0.72, 0.84, 1.0], glow: [0.0, 0.36, 0.11], disc: 1.0, discCos: [0.99880, 0.99915],
    cloudLit: [0.20, 0.27, 0.44], cloudShade: [0.018, 0.03, 0.075], cloudCover: [0.46, 0.80], cloudAlpha: 0.85,
    stars: 1, planet: 0.9,
    fog: 0.001, fogFalloff: 0.02,
    exposure: 1.44, bloom: [0.14, 0.45, 1.5], rays: 0.4, rayThresh: 0.55, env: 1.05,
    lamps: 1.0, bloomGlow: 1.0,                    // lanterns lit, white roses glowing
    waterDeep: [0.004, 0.016, 0.04], waterShallow: [0.012, 0.05, 0.085],
  },
};

/** Direction to the main light of the active mood (sun or moon). */
export const SUN = new THREE.Vector3(0, 1, 0);
export let MOOD = MOODS.day;

const f = (n) => Number(n).toFixed(5);
const v3 = (a) => `vec3(${f(a[0])}, ${f(a[1])}, ${f(a[2])})`;
const mix1 = (key) => `mix(${f(MOODS.day[key])}, ${f(MOODS.night[key])}, uNight)`;
const mix3 = (key) => `mix(${v3(MOODS.day[key])}, ${v3(MOODS.night[key])}, uNight)`;

/** Choose the initial mood; all shaders retain the same program during a change. */
export function setMood(name) {
  const M = MOOD = MOODS[name] || MOODS.day;
  SUN.set(...M.light).normalize();
  return M;
}

export const GLSL_BASE = /* glsl */`
#ifndef GARDEN_ATMOSPHERE
#define GARDEN_ATMOSPHERE
uniform float uNight;
uniform vec3 uSunDirection;
#define SUN uSunDirection
vec3 fogTint(vec3 dir){
  float s = max(dot(dir, SUN), 0.0);
  return mix(${mix3('haze')}, ${mix3('hazeLit')}, pow(s, 8.0) * ${mix1('hazeK')});
}
#endif
`;
export const GLSL_SKY = /* glsl */`
vec3 skyBase(vec3 d){
  float h = clamp(d.y, 0.0, 1.0);
  float s = max(dot(d, SUN), 0.0);
  vec3 c = mix(${mix3('mid')}, ${mix3('zenith')}, smoothstep(0.05, 0.7, h));
  c = mix(fogTint(d), c, smoothstep(-0.01, 0.11, d.y));
  vec3 glow = ${mix3('glow')};
  c += ${mix3('glowColor')} * (pow(s, 2500.0) * glow.x + pow(s, 220.0) * glow.y + pow(s, 30.0) * glow.z);
  return c;
}
`;

const atmosphereBound = new WeakSet();
const environmentBlend = /* glsl */`
#ifdef USE_ENVMAP
  uniform samplerCube uNightEnvironment;
  uniform float uEnvironmentMix;
  vec4 gardenEnvironment(vec3 direction, float lod){
    if (uEnvironmentMix <= 0.0) return textureLod(envMap, direction, lod);
    if (uEnvironmentMix >= 1.0) return textureLod(uNightEnvironment, direction, lod);
    return mix(textureLod(envMap, direction, lod), textureLod(uNightEnvironment, direction, lod), uEnvironmentMix);
  }
#endif
`;
/** Bind once after scene construction, preserving a material's existing shader hook. */
export function bindAtmosphere(material, W) {
  if (atmosphereBound.has(material)) return;
  atmosphereBound.add(material);
  const uniforms = { uNight: W.uNight, uSunDirection: { value: SUN } };
  if (material.uniforms) Object.assign(material.uniforms, uniforms);
  const before = material.onBeforeCompile, key = material.customProgramCacheKey();
  material.onBeforeCompile = function (shader, renderer) {
    before.call(this, shader, renderer); Object.assign(shader.uniforms, uniforms);
    if (W.envNight && shader.fragmentShader?.includes('#include <envmap_physical_pars_fragment>')) {
      shader.uniforms.uNightEnvironment = { value: W.envNight };
      shader.uniforms.uEnvironmentMix = W.uNight;
      const ibl = THREE.ShaderChunk.envmap_physical_pars_fragment.replace(/textureLod\(\s*envMap\s*,/g, 'gardenEnvironment(');
      shader.fragmentShader = shader.fragmentShader.replace('#include <envmap_physical_pars_fragment>', environmentBlend + ibl);
    }
  };
  material.customProgramCacheKey = () => key + '|live-atmosphere';
}

export const GLSL_WIND = /* glsl */`
uniform float uTime;
uniform float uGust;
uniform vec4 uPush[2];
vec2 windAt(vec2 p){
  float g1 = sin(dot(p, vec2(0.11, 0.045)) - uTime * 1.25);
  float g2 = sin(dot(p, vec2(-0.04, 0.13)) - uTime * 0.8 + 1.7);
  float gust = smoothstep(-0.3, 1.0, g1 * 0.6 + g2 * 0.4);
  float fl = sin(p.x * 2.3 + uTime * 3.7) * sin(p.y * 1.9 - uTime * 2.9);
  return vec2(1.0, -0.25) * (0.16 + 0.95 * gust) + vec2(fl, -fl) * 0.06 + vec2(0.25, -1.0) * uGust;
}
`;

/**
 * Replace three's fog with exponential height fog whose colour warms toward the light.
 * Applies to every built-in material and to ShaderMaterials that include the fog chunks.
 */
export function patchFog() {
  const C = THREE.ShaderChunk, b = mix1('fogFalloff');
  C.fog_pars_vertex = `#ifdef USE_FOG\n varying float vFogDepth;\n varying vec3 vFogDir;\n#endif`;
  C.fog_vertex = `#ifdef USE_FOG\n vFogDepth = - mvPosition.z;\n vFogDir = transpose( mat3( viewMatrix ) ) * mvPosition.xyz;\n#endif`;
  C.fog_pars_fragment = `#ifdef USE_FOG\n uniform vec3 fogColor;\n varying float vFogDepth;\n varying vec3 vFogDir;\n uniform float fogDensity;\n${GLSL_BASE}\n#endif`;
  C.fog_fragment = /* glsl */`
#ifdef USE_FOG
  float fogL = length( vFogDir );
  vec3 fogDirN = vFogDir / max( fogL, 1e-4 );
  float fogT = clamp( ${b} * vFogDir.y, -12.0, 12.0 );
  float fogF = abs( fogT ) < 0.001 ? 1.0 : ( 1.0 - exp( - fogT ) ) / fogT;
  float fogTau = fogDensity * exp( - ${b} * max( cameraPosition.y, 0.0 ) ) * fogL * fogF;
  float fogFactor = 1.0 - exp( - fogTau );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogTint( fogDirN ), fogFactor );
#endif`;
}

function skyFragment() {
  return /* glsl */`
uniform float uTime;
uniform float uEnv;
varying vec3 vDir;
${GLSL_BASE}
${GLSL_SKY}
float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float hash31(vec3 p){ p = fract(p * vec3(127.1, 311.7, 74.7)); p += dot(p, p.yzx + 19.19); return fract((p.x + p.y) * p.z); }
float vn(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; } return s; }

// a pale ringed world low in the sky, opposite the light
#define PDIR normalize(${mix3('planetDir')})
const float PRAD = 0.058;
vec4 planet(vec3 d){
  if (dot(d, PDIR) < 0.6) return vec4(0.0);
  vec3 pr = normalize(cross(vec3(0.0, 1.0, 0.0), PDIR)), pu = cross(PDIR, pr);
  vec2 q = vec2(dot(d, pr), dot(d, pu)) / PRAD;
  float r2 = dot(q, q);
  vec4 res = vec4(0.0);
  vec3 rn = normalize(vec3(0.22, 0.93, 0.30));
  float rz = -(q.x * rn.x + q.y * rn.y) / rn.z;
  float rr = length(vec3(q, rz));
  float ring = smoothstep(1.32, 1.4, rr) * smoothstep(2.35, 2.2, rr) * (0.55 + 0.45 * sin(rr * 42.0)) * (0.65 + 0.35 * sin(rr * 13.0 + 1.0));
  float pz = -10.0;
  if (r2 < 1.0) {
    pz = sqrt(1.0 - r2);
    vec3 n = vec3(q, pz);
    vec3 nw = pr * n.x + pu * n.y - PDIR * n.z;
    float lit = smoothstep(-0.12, 0.55, dot(nw, SUN));
    float bands = 0.5 + 0.5 * sin(n.y * 13.0 + sin(n.x * 3.0 + n.y * 5.0) * 1.4);
    vec3 alb = mix(vec3(0.86, 0.76, 0.62), vec3(1.0, 0.94, 0.84), bands);
    res = vec4(alb * (0.2 + lit * 1.2), (0.14 + 0.8 * lit) * smoothstep(1.0, 0.985, r2));
  }
  if (ring > 0.0 && (r2 >= 1.0 || rz > pz)) { res.rgb = mix(res.rgb, vec3(1.0, 0.92, 0.78), ring * 0.7); res.a = max(res.a, ring * 0.5); }
  res.a *= smoothstep(0.0, 0.1, d.y) * ${mix1('planet')};
  return res;
}

void main(){
  vec3 d = normalize(vDir);
  vec3 col = skyBase(d);
  float s = max(dot(d, SUN), 0.0);
  // stars, thinning toward the horizon and near the moon
  vec3 sp = d * 190.0, ip = floor(sp), fp = fract(sp) - 0.5;
  float hs = hash31(ip);
  float tw = 0.65 + 0.35 * sin(uTime * (1.0 + hs * 3.0) + hs * 80.0);
  float star = step(0.992, hs) * smoothstep(0.34, 0.0, length(fp)) * tw;
  col += vec3(0.85, 0.9, 1.0) * star * 1.7 * smoothstep(0.02, 0.3, d.y) * (1.0 - smoothstep(0.97, 0.999, s)) * (1.0 - uEnv) * uNight;
  // the moon: soft-edged disc with faint maria
  float disc = smoothstep(${f(MOODS.night.discCos[0])}, ${f(MOODS.night.discCos[1])}, s);
  vec3 mr = normalize(cross(vec3(0.0, 1.0, 0.0), SUN)), mu = cross(SUN, mr);
  vec2 mq = vec2(dot(d, mr), dot(d, mu)) * 26.0;
  float maria = 0.66 + 0.34 * fbm(mq * 2.2 + 3.0);
  col += vec3(1.0, 0.93, 0.80) * smoothstep(${f(MOODS.day.discCos[0])}, ${f(MOODS.day.discCos[1])}, s) * mix(${f(MOODS.day.disc)}, 4.0, uEnv) * (1.0 - uNight);
  col = mix(col, vec3(0.93, 0.96, 1.0) * maria * mix(${f(MOODS.night.disc)}, 1.6, uEnv), disc * uNight);
  if (uEnv < 0.5) { vec4 p = planet(d); col = mix(col, p.rgb, p.a); }
  if (d.y > 0.01) {
    // two layers of cloud, lit from the side that faces the light
    vec2 uv = d.xz / (d.y + 0.16) * 0.42 + vec2(uTime * 0.004, uTime * 0.0013);
    float den = fbm(uv * 1.1) * 0.72 + fbm(uv * 3.1 + 7.0) * 0.28;
    float cov = smoothstep(mix(${f(MOODS.day.cloudCover[0])}, ${f(MOODS.night.cloudCover[0])}, uNight), mix(${f(MOODS.day.cloudCover[1])}, ${f(MOODS.night.cloudCover[1])}, uNight), den + 0.1 * smoothstep(0.3, 0.05, d.y));
    float den2 = fbm((uv + normalize(SUN.xz) * 0.16) * 1.1) * 0.72 + fbm((uv + normalize(SUN.xz) * 0.16) * 3.1 + 7.0) * 0.28;
    float lit = clamp((den - den2) * 3.4 + 0.5, 0.0, 1.0);
    vec3 cc = mix(${mix3('cloudShade')}, ${mix3('cloudLit')}, lit);
    cc += ${mix3('glowColor')} * pow(s, 6.0) * 0.35;
    col = mix(col, cc, cov * smoothstep(0.015, 0.09, d.y) * ${mix1('cloudAlpha')});
  }
  // for lighting, the lower half of the world is water and stone in shade, not open sky
  col *= mix(1.0, 0.36, uEnv * smoothstep(0.02, -0.35, d.y));
  // Diffuse bounce from pale stone desaturates the blue sky inside the dome.
  col = mix(col, vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), uEnv * 0.28);
  gl_FragColor = vec4(col, 1.0);
}`;
}

export function makeSky(W) {
  const uniforms = { uTime: W.uTime, uEnv: { value: 0 }, uNight: W.uNight, uSunDirection: { value: SUN } };
  const vertexShader = `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader: skyFragment(), side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(3000, 48, 24), mat);
  sky.renderOrder = -1000; sky.frustumCulled = false;
  sky.onBeforeRender = (r, s, cam) => { sky.position.setFromMatrixPosition(cam.matrixWorld); sky.updateMatrixWorld(); };   // follows whichever camera draws it, including the mirror camera
  W.scene.add(sky);

  // Convolve each endpoint once. The material binding mixes the two prefiltered
  // cubemaps, with one texture sample at each endpoint and two during the fade.
  const envMat = mat.clone();
  envMat.uniforms = { uTime: { value: 40 }, uEnv: { value: 1 }, uNight: { value: 0 }, uSunDirection: { value: new THREE.Vector3(...MOODS.day.light).normalize() } };
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(sky.geometry, envMat));
  const pmrem = new THREE.PMREMGenerator(W.renderer);
  const day = pmrem.fromScene(envScene, 0.02, 1, 5000);
  envMat.uniforms.uNight.value = 1;
  envMat.uniforms.uSunDirection.value.set(...MOODS.night.light).normalize();
  const night = pmrem.fromScene(envScene, 0.02, 1, 5000);
  pmrem.dispose(); envMat.dispose();
  const dispose = day.dispose.bind(day);
  day.dispose = () => { dispose(); night.dispose(); };
  W.envTarget = day; W.env = day.texture; W.envNight = night.texture;
  W.scene.environment = W.env;
  const environmentIntensity = () => { W.scene.environmentIntensity = THREE.MathUtils.lerp(MOODS.day.env, MOODS.night.env, W.uNight.value) * 0.48; };
  W.moodBindings.push(environmentIntensity); environmentIntensity();
  return sky;
}
