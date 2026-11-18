import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, mesh } from './kit.js';
import { makeRand, lerp, TAU } from './util.js';
import { bindMood } from './mood.js';

// A small branch with individual leaves and open sky between them, not a solid
// canopy blob. Crossed, differently oriented sprays give the crown its depth.
function leafSprayTexture() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
  const c = canvas.getContext('2d'), rand = makeRand(1907);
  const leaf = (x, y, angle, length, width) => {
    c.save(); c.translate(x, y); c.rotate(angle);
    const middle = ['#d8ddc0', '#c7d0ad', '#e1e0c0', '#cdd7b7'][Math.floor(rand() * 4)];
    const gradient = c.createLinearGradient(length * 0.2, -width, length * 0.55, width);
    gradient.addColorStop(0, '#939e84'); gradient.addColorStop(0.43, middle); gradient.addColorStop(1, '#a3b08f');
    c.fillStyle = gradient;
    c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(length * 0.42, -width, length, 0);
    c.quadraticCurveTo(length * 0.42, width * 0.8, 0, 0); c.fill();
    c.clip(); c.strokeStyle = 'rgba(229,231,197,0.55)'; c.lineWidth = 0.65;
    c.beginPath(); c.moveTo(0, 0); c.lineTo(length * 0.91, 0); c.stroke();
    c.lineWidth = 0.4;
    for (let i = 1; i < 5; i++) for (const sign of [-1, 1]) {
      const u = i / 6;
      c.beginPath(); c.moveTo(length * u, 0); c.lineTo(length * (u + 0.15), sign * width * 0.68 * Math.sin(u * Math.PI)); c.stroke();
    }
    c.restore();
  };
  for (const [tx, ty] of [[46, 55], [126, 23], [213, 62], [215, 140], [50, 147]]) {
    const ax = 128, ay = 230, dx = tx - ax, dy = ty - ay, angle = Math.atan2(dy, dx);
    c.strokeStyle = 'rgba(100, 93, 62, 0.65)'; c.lineWidth = 1.7;
    c.beginPath(); c.moveTo(ax, ay); c.quadraticCurveTo(ax + dx * 0.65, ay + dy * 0.35, tx, ty); c.stroke();
    for (let j = 1; j <= 8; j++) {
      const t = j / 9, x = ax + dx * t + Math.sin(t * Math.PI) * dx * 0.15, y = ay + dy * t;
      for (const sign of [-1, 1]) leaf(x + (rand() - 0.5) * 6, y + (rand() - 0.5) * 6,
        angle + sign * (0.65 + rand() * 0.45), 17 + rand() * 18, 4.8 + rand() * 5.8);
    }
    leaf(tx, ty, angle, 22, 7);
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  return map;
}

/** Tapering trunks, visible branch forks and porous, gently moving crowns. */
export function buildWoodland(W, parent, height, side) {
  const rand = makeRand(7319), low = W.Q.low, count = low ? 66 : 112;
  const clusters = low ? 7 : 10, cards = low ? 2 : 3;
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.93, metalness: 0, envMap: W.env, envMapIntensity: 0.08 });
  const stems = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.52, 1, 1, low ? 5 : 7), trunkMat, count * (clusters + 2));
  const leafMap = leafSprayTexture();
  leafMap.anisotropy = Math.min(8, W.renderer.capabilities.getMaxAnisotropy());
  const leavesMat = new THREE.MeshStandardMaterial({ color: 0xffffff, map: leafMap, bumpMap: leafMap, bumpScale: 0.008, roughness: 0.84, metalness: 0, envMap: W.env, envMapIntensity: 0.1, alphaTest: 0.42, side: THREE.DoubleSide });
  leavesMat.onBeforeCompile = (shader) => {
    shader.uniforms.uWoodTime = W.uTime; shader.uniforms.uWoodGust = W.uGust;
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nuniform float uWoodTime; uniform float uWoodGust;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float phase = instanceMatrix[3].x * 0.67 + instanceMatrix[3].z * 0.43;
          transformed.x += sin(uWoodTime * 0.72 + phase) * uv.y * (0.024 + uWoodGust * 0.018);
          transformed.z += sin(uWoodTime * 0.51 + phase * 1.7) * uv.y * 0.017;
        #endif`);
  };
  const leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1, 1, 2), leavesMat, count * clusters * cards);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), scale = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0), dir = new THREE.Vector3(), a = new THREE.Vector3(), b = new THREE.Vector3(), color = new THREE.Color();
  const greens = [0x426348, 0x526e45, 0x66794b, 0x3d6650, 0x78905a];
  let ni = 0, li = 0;
  const branch = (from, to, radius, shade) => {
    dir.subVectors(to, from); q.setFromUnitVectors(up, dir.clone().normalize());
    m.compose(p.copy(from).add(to).multiplyScalar(0.5), q, scale.set(radius, dir.length(), radius));
    stems.setMatrixAt(ni, m); stems.setColorAt(ni++, color.set(0x6c6151).multiplyScalar(shade));
  };
  for (let i = 0; i < count; i++) {
    let x, z;
    do { x = lerp(-22, 40, rand()); z = lerp(-58, -15, rand()); } while (side(x) < 0.62);
    const y = height(x, z), h = 4.4 + rand() * 5.2, spread = h * (i % 5 === 0 ? 0.25 : 0.36 + rand() * 0.11);
    const lean = (rand() - 0.5) * 1.0, yaw = rand() * TAU, radius = 0.15 + h * 0.019;
    a.set(x, y - 0.1, z); b.set(x + lean * 0.45, y + h * 0.47, z + 0.1); branch(a, b, radius, 0.8 + rand() * 0.3);
    a.copy(b); b.set(x + lean, y + h * 0.91, z - 0.2); branch(a, b, radius * 0.62, 0.9);
    const baseColor = greens[i % greens.length];
    for (let j = 0; j < clusters; j++) {
      const u = j / (clusters - 1), angle = yaw + j * 2.39996;
      const r = spread * Math.sin((0.18 + u * 0.72) * Math.PI) * (0.75 + rand() * 0.3);
      const cx = x + lean + Math.cos(angle) * r, cy = y + h * (0.96 - u * 0.39) + rand() * 0.4, cz = z + Math.sin(angle) * r;
      a.set(x + lean * 0.6, y + h * (0.4 + (1 - u) * 0.22), z);
      b.set(cx, cy - 0.3, cz); branch(a, b, radius * (0.16 + u * 0.18), 0.86);
      for (let k = 0; k < cards; k++) {
        const size = spread * (0.85 + rand() * 0.55);
        q.setFromEuler(e.set((rand() - 0.5) * 1.3, angle + k * Math.PI / cards, (rand() - 0.5) * 0.8));
        m.compose(p.set(cx + (rand() - 0.5) * 0.45, cy, cz + (rand() - 0.5) * 0.45), q, scale.set(size, size * (0.8 + rand() * 0.35), size));
        leaves.setMatrixAt(li, m);
        // Lower, internal sprays are shaded by the crown; the upper shoots retain light.
        leaves.setColorAt(li++, color.set(baseColor).multiplyScalar(0.65 + rand() * 0.27 + (1 - u) * 0.22));
      }
    }
  }
  stems.count = ni; leaves.count = li;
  stems.frustumCulled = leaves.frustumCulled = false;
  stems.receiveShadow = leaves.receiveShadow = true;
  // The distant forest is lit by the sky and sun; per-leaf shadow passes would
  // cost far more than the detail they contribute through the arch.
  parent.add(stems, leaves);
}

const noiseGLSL = /* glsl */`
float hash21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
float noise21(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y); }
`;

/** Local-space strata and fissures keep the cliff continuous across triangles. */
export function cliffMaterial(W) {
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.93, envMap: W.env, envMapIntensity: 0.22 });
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vCliffPos; varying vec3 vCliffNormal;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvCliffPos=position; vCliffNormal=normal;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', /* glsl */`#include <common>
        varying vec3 vCliffPos; varying vec3 vCliffNormal;
        ${noiseGLSL}
        vec3 cliffBump(vec3 position, vec3 normal, vec2 gradient, float face){
          vec3 dx=dFdx(position), dy=dFdy(position);
          vec3 a=cross(dy,normal), b=cross(normal,dx);
          float det=dot(dx,a)*face;
          return normalize(abs(det)*normal-sign(det)*(gradient.x*a+gradient.y*b));
        }`)
      .replace('#include <color_fragment>', /* glsl */`#include <color_fragment>
        vec3 rockP=vCliffPos;
        float cliffFace=1.0-smoothstep(0.38,0.82,abs(normalize(vCliffNormal).y));
        float rockGrain=noise21(rockP.xy*0.78+rockP.z*0.16);
        float rockFine=noise21(rockP.xy*3.1+rockP.z*0.33);
        float phase=rockP.y*0.72+noise21(rockP.xy*0.29+rockP.z*0.13)*2.4+noise21(rockP.xy*0.81)*0.32;
        float edge=abs(sin(phase*3.14159265));
        float strata=(1.0-smoothstep(0.025,0.11+fwidth(phase)*2.0,edge))*(0.3+rockGrain*0.7);
        float split=abs(fract(rockP.x*0.29+noise21(rockP.xy*0.23)*1.1+sin(rockP.y*0.39)*0.09)-0.5);
        float fissure=(1.0-smoothstep(0.008,0.028+fwidth(split),split))*smoothstep(0.15,0.65,rockGrain);
        float fallDistance=min(min(abs(rockP.x+9.0)/2.8,abs(rockP.x+1.2)/3.5),abs(rockP.x-6.5)/2.5);
        float wet=exp(-fallDistance*fallDistance)*cliffFace*(1.0-smoothstep(13.0,16.0,rockP.y));
        float moss=smoothstep(0.53,0.73,noise21(rockP.xy*0.37+vec2(12.0,rockP.z*0.23)))*(0.14+wet*0.28)*cliffFace;
        diffuseColor.rgb*=mix(1.0,0.79+rockGrain*0.38+rockFine*0.1,cliffFace);
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.10,0.15,0.075),moss);
        diffuseColor.rgb*=1.0-cliffFace*(strata*0.18+fissure*0.28);
        diffuseColor.rgb*=1.0-wet*0.22;
        float rockRelief=cliffFace*(rockGrain*0.16+rockFine*0.025-strata*0.045-fissure*0.075);
        `)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,0.48,wet*0.75);')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal=cliffBump(-vViewPosition,normal,vec2(dFdx(rockRelief),dFdy(rockRelief)),faceDirection);');
  };
  return material;
}

const plainVertex = /* glsl */`
varying vec2 vUv;
#include <fog_pars_vertex>
void main(){ vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`;
const uniforms = (W, dayTint, nightTint) => {
  const u = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uTime: { value: 0 }, uTint: { value: new THREE.Color(...dayTint) } }]);
  bindMood(W, u.uTint, 'value', new THREE.Color(...dayTint), new THREE.Color(...nightTint));
  u.uTime = W.uTime; return u;
};

/** Water follows a curved, accelerating fall, breaking into finer strands and spray. */
export function buildWaterfalls(W, parent, top) {
  const rand = makeRand(8126), low = W.Q.low;
  const falls = [[-9, 2.3], [-1.2, 3.4], [6.5, 2.0]], parts = [];
  const ribbon = (x, width, offset, strength, seed) => {
    const rows = low ? 20 : 32, cols = strength < 0.5 ? 5 : 2, pos = [], uv = [], weights = [], seeds = [], ids = [];
    for (let j = 0; j <= rows; j++) for (let i = 0; i <= cols; i++) {
      const t = j / rows, u = i / cols, spread = 1 - t * 0.22 + t * t * 0.34;
      pos.push(x + offset + (u - 0.5) * width * spread + Math.sin(t * 12 + seed) * t * 0.12,
        (top + 0.35) * (1 - t * t), -0.04 + 6.44 * t + Math.sin(t * 15 + u * 4 + seed) * t * 0.10 + (strength < 0.5 ? -0.04 : 0.04));
      uv.push(u, t); weights.push(strength); seeds.push(seed);
    }
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const a = j * (cols + 1) + i, b = a + 1, c = a + cols + 1, d = c + 1; ids.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('aStrength', new THREE.Float32BufferAttribute(weights, 1));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 1)); g.setIndex(ids); parts.push(g);
  };
  for (const [x, width] of falls) {
    ribbon(x, width, 0, 0.3, rand() * 30);
    const strands = low ? 5 : 8;
    for (let i = 0; i < strands; i++) ribbon(x, width / strands * (0.65 + rand() * 0.6),
      (i / (strands - 1) - 0.5) * width * 0.84, 0.7 + rand() * 0.3, rand() * 30);
    parent.add(mesh(box(width + 0.9, 0.7, 1.6, 0.2), W.mat.marble, x, top + 0.05, -0.9));
  }
  const falling = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: true,
    uniforms: uniforms(W, [0.86, 1.02, 1.03], [0.32, 0.44, 0.65]),
    vertexShader: /* glsl */`
      uniform float uTime; attribute float aStrength; attribute float aSeed;
      varying vec2 vUv; varying float vStrength; varying float vSeed;
      #include <fog_pars_vertex>
      void main(){ vUv=uv; vStrength=aStrength; vSeed=aSeed; vec3 p=position;
        p.x+=sin(uv.y*25.0-uTime*3.5+aSeed)*uv.y*uv.y*0.035;
        vec4 mvPosition=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform vec3 uTint; varying vec2 vUv; varying float vStrength; varying float vSeed;
      #include <fog_pars_fragment>
      ${noiseGLSL}
      void main(){
        float run=vUv.y*8.0-uTime*1.45;
        float broad=noise21(vec2(vUv.x*5.0+vSeed,run));
        float fine=noise21(vec2(vUv.x*24.0+vSeed,run*2.9));
        float edge=smoothstep(0.0,0.16,vUv.x)*smoothstep(0.0,0.16,1.0-vUv.x);
        float breakup=smoothstep(0.14+vUv.y*0.18,0.65,broad*0.6+fine*0.4);
        float foam=smoothstep(0.38,0.86,broad+fine*0.18);
        float alpha=edge*mix(0.23+breakup*0.2,0.2+breakup*0.72,vStrength);
        alpha*=1.0-smoothstep(0.94,1.0,vUv.y)*0.58;
        gl_FragColor=vec4(uTint*mix(0.6,1.13,foam),alpha);
        #include <fog_fragment>
      }`,
  });
  const stream = mesh(mergeGeometries(parts), falling); stream.renderOrder = 3; stream.userData.keep = true; parent.add(stream);

  // Impact foam fades into rings on the water, rather than ending in a flat edge.
  const foamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: true,
    uniforms: uniforms(W, [0.88, 1.03, 1.02], [0.22, 0.34, 0.49]), vertexShader: plainVertex,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform vec3 uTint; varying vec2 vUv;
      #include <fog_pars_fragment>
      ${noiseGLSL}
      void main(){
        vec2 p=(vUv-0.5)*2.0; float r=length(p*vec2(0.9,1.15));
        float n=noise21(p*8.0+vec2(uTime*0.14,-uTime*0.1));
        float foam=(1.0-smoothstep(0.1,0.65,r+n*0.18))*smoothstep(0.2,0.68,n);
        float rings=pow(max(0.0,sin(r*32.0-uTime*2.8+n*0.7)),9.0)*(1.0-smoothstep(0.3,1.0,r))*0.19;
        float a=foam*0.63+rings; if(a<0.004)discard;
        gl_FragColor=vec4(uTint,a);
        #include <fog_fragment>
      }`,
  });
  const foamParts = falls.map(([x, w]) => new THREE.PlaneGeometry(w * 4.5, w * 4.2).rotateX(-Math.PI / 2).translate(x, 0.075, 6.5));
  const foam = mesh(mergeGeometries(foamParts), foamMat); foam.renderOrder = 4; foam.userData.keep = true; parent.add(foam);

  // A single instanced draw for soft puffs; each fades away before its cycle resets.
  const perFall = low ? 9 : 17, count = perFall * falls.length, mistGeo = new THREE.PlaneGeometry(1, 1);
  const phases = new Float32Array(count), mistMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: true,
    uniforms: uniforms(W, [0.84, 0.95, 0.96], [0.2, 0.3, 0.48]),
    vertexShader: /* glsl */`
      uniform float uTime; attribute float aPhase; varying vec2 vUv; varying float vLife;
      #include <fog_pars_vertex>
      void main(){
        vUv=uv; float age=fract(uTime*0.075+aPhase); vLife=sin(age*3.14159265);
        vec3 center=instanceMatrix[3].xyz; center.x+=age*1.7; center.y+=age*1.8; center.z+=age*0.7;
        vec4 mvPosition=modelViewMatrix*vec4(center,1.0);
        vec2 size=vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
        mvPosition.xy+=position.xy*size*(0.7+age*0.65); gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uTint; varying vec2 vUv; varying float vLife;
      #include <fog_pars_fragment>
      ${noiseGLSL}
      void main(){
        vec2 p=vUv*2.0-1.0; float r=dot(p,p);
        float cloudy=noise21(vUv*5.0)*0.6+noise21(vUv*11.0)*0.4;
        float a=(1.0-smoothstep(0.18,1.0,r))*cloudy*vLife*0.17;
        gl_FragColor=vec4(uTint,a);
        #include <fog_fragment>
      }`,
  });
  const mist = new THREE.InstancedMesh(mistGeo, mistMat, count), m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  let k = 0;
  for (const [x, width] of falls) for (let i = 0; i < perFall; i++) {
    phases[k] = rand();
    m.compose(p.set(x + (rand() - 0.5) * width * 2.0, 0.25 + rand() * 1.0, 6.4 + rand() * 1.6), q,
      s.set(width * (0.7 + rand() * 0.8), 1.1 + rand() * 1.4, 1)); mist.setMatrixAt(k++, m);
  }
  mistGeo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phases, 1));
  mist.renderOrder = 5; mist.frustumCulled = false; mist.layers.set(1); parent.add(mist);
}
