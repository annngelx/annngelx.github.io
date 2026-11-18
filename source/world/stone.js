import * as THREE from 'three';

/** A shared, seamless mineral field: height, polish, and soft calcite clouding. */
function mineralSurfaceTexture() {
  const size = 256, data = new Uint8Array(size * size * 4);
  const hash = (x, y) => {
    let n = Math.imul(x + 619, 374761393) ^ Math.imul(y + 227, 668265263);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
  };
  const noise = (u, v, cells) => {
    const x = u * cells, y = v * cells, ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy, sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = hash(ix % cells, iy % cells), b = hash((ix + 1) % cells, iy % cells);
    const c = hash(ix % cells, (iy + 1) % cells), d = hash((ix + 1) % cells, (iy + 1) % cells);
    return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a, b, sx), THREE.MathUtils.lerp(c, d, sx), sy);
  };
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = (y * size + x) * 4;
    const cloud = noise(u, v, 4), crystal = noise(u, v, 24), grain = noise(u, v, 64);
    const fine = hash(x, y);
    data[i] = Math.round((0.16 * cloud + 0.44 * crystal + 0.30 * grain + 0.10 * fine) * 255);
    data[i + 1] = Math.round((0.62 * cloud + 0.28 * crystal + 0.10 * grain) * 255);
    data[i + 2] = Math.round((0.80 * cloud + 0.20 * noise(u, v, 12)) * 255);
    data[i + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true; tex.needsUpdate = true;
  return tex;
}

/** Consistent metre-scale stone on cylinders, arches and fused geometry alike. */
export function architecturalStone(W, { roughness = 0.36, scale = 0.22, flute = false, veinStrength = 1 } = {}) {
  const stone = W.tex.marble;
  stone.anisotropy = Math.min(8, W.renderer.capabilities.getMaxAnisotropy());
  const mineral = W.tex.stoneMineral ??= mineralSurfaceTexture();
  mineral.anisotropy = Math.min(4, W.renderer.capabilities.getMaxAnisotropy());
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness, metalness: 0, envMap: W.env, envMapIntensity: 0.35 * W.mood.env,
    ...(flute ? { bumpMap: W.tex.flute, bumpScale: 0.055 } : {}),
  });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uStoneMap = { value: stone };
    shader.uniforms.uStoneMineral = { value: mineral };
    shader.uniforms.uStoneScale = { value: scale };
    shader.uniforms.uStoneVeinStrength = { value: veinStrength };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vStonePosition; varying vec3 vStoneNormal;')
      .replace('#include <defaultnormal_vertex>', '#include <defaultnormal_vertex>\nvStoneNormal=inverseTransformDirection(transformedNormal,viewMatrix);')
      .replace('#include <begin_vertex>', /* glsl */`#include <begin_vertex>
        vec4 stoneWorld=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          stoneWorld=instanceMatrix*stoneWorld;
        #endif
        vStonePosition=(modelMatrix*stoneWorld).xyz;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', /* glsl */`#include <common>
        uniform sampler2D uStoneMap; uniform sampler2D uStoneMineral;
        uniform float uStoneScale; uniform float uStoneVeinStrength;
        varying vec3 vStonePosition; varying vec3 vStoneNormal;
        vec3 stoneBump(vec3 p,vec3 n,vec2 gradient,float face){
          vec3 dx=dFdx(p),dy=dFdy(p),a=cross(dy,n),b=cross(n,dx);
          float det=dot(dx,a)*face;
          // A triangle seen edge-on or smaller than a pixel has no usable derivatives; normalizing the zero
          // vector there gives an invalid pixel, which the bloom pass then spreads over the whole frame.
          vec3 bumped=abs(det)*n-sign(det)*(gradient.x*a+gradient.y*b);
          float len=length(bumped);
          return len>1e-12?bumped/len:n;
        }`)
      .replace('#include <color_fragment>', /* glsl */`#include <color_fragment>
        vec3 stoneP=vStonePosition*uStoneScale;
        vec3 stoneWeights=pow(abs(normalize(vStoneNormal)),vec3(8.0));
        stoneWeights/=max(dot(stoneWeights,vec3(1.0)),0.0001);
        vec3 stoneColor=texture2D(uStoneMap,stoneP.yz+vec2(0.17,0.41)).rgb*stoneWeights.x
          +texture2D(uStoneMap,stoneP.xz+vec2(0.43,0.07)).rgb*stoneWeights.y
          +texture2D(uStoneMap,stoneP.xy+vec2(0.73,0.28)).rgb*stoneWeights.z;
        float stoneLuma=dot(stoneColor,vec3(0.2126,0.7152,0.0722));
        // Veins keep their established soft contrast; grain changes the surface,
        // rather than adding more dark lines to the architecture.
        stoneColor=mix(vec3(0.82,0.815,0.79),stoneColor,uStoneVeinStrength);
        vec3 mineralP=vStonePosition*1.45;
        vec3 mineral=texture2D(uStoneMineral,mineralP.yz+vec2(0.29,0.47)).rgb*stoneWeights.x
          +texture2D(uStoneMineral,mineralP.xz+vec2(0.61,0.13)).rgb*stoneWeights.y
          +texture2D(uStoneMineral,mineralP.xy+vec2(0.07,0.79)).rgb*stoneWeights.z;
        float mineralFootprint=max(length(dFdx(mineralP)),length(dFdy(mineralP)));
        float mineralDetail=1.0-smoothstep(0.018,0.085,mineralFootprint);
        stoneColor*=0.965+(mineral.b-0.5)*0.035;
        diffuseColor.rgb*=stoneColor;
        float stoneRelief=stoneLuma*0.0014+(mineral.r-0.5)*0.0012*mineralDetail;`)
      .replace('#include <roughnessmap_fragment>', /* glsl */`#include <roughnessmap_fragment>
        // Mineral-rich veins take a slightly softer polish than the white calcite.
        roughnessFactor=clamp(roughnessFactor+(1.0-stoneLuma)*0.11
          +(mineral.g-0.5)*0.13+(mineral.r-0.5)*0.035*mineralDetail,0.28,0.78);`)
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal=stoneBump(-vViewPosition,normal,vec2(dFdx(stoneRelief),dFdy(stoneRelief)),faceDirection);');
  };
  material.customProgramCacheKey = () => `architectural-stone-mineral-v3-${flute ? 'fluted' : 'plain'}`;
  return material;
}
