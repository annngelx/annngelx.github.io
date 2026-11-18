var ml="187";var ed=0,gh=1,td=2;var Us=1,nd=2,br=3,ps=0,Sn=1,Ut=2,Zi=0,Er=1,bn=2,xh=3,vh=4,id=5;var Fs=100,sd=101,rd=102,od=103,ad=104,ld=200,cd=201,hd=202,ud=203,_h=204,yh=205,dd=206,fd=207,pd=208,md=209,gd=210,xd=211,vd=212,_d=213,yd=214,Ba=0,za=1,Ha=2,hr=3,Ga=4,ka=5,Va=6,Wa=7,gl=0,Md=1,Sd=2,Pi=0,Po=1,Io=2,Do=3,Os=4,Lo=5,No=6,Uo=7;var Mh=300,Bs=301,Tr=302,xl=303,vl=304,Vi=1e3,wi=1001,Xa=1002,xn=1003,bd=1004;var Fo=1005;var Mn=1006,_l=1007;var _i=1008;var Gn=1009,Sh=1010,bh=1011,wr=1012,yl=1013,yi=1014,ri=1015,rn=1016,Ml=1017,Sl=1018,zs=1020,Eh=35902,Th=35899,wh=1021,Ah=1022,Qn=1023,Wi=1026,$i=1027,bl=1028,El=1029,ms=1030,Tl=1031;var wl=1033,Oo=33776,Bo=33777,zo=33778,Ho=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Dl=37492,Ll=37496,Nl=37488,Ul=37489,Go=37490,Fl=37491,Ol=37808,Bl=37809,zl=37810,Hl=37811,Gl=37812,kl=37813,Vl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Zl=37819,$l=37820,Jl=37821,Kl=36492,Ql=36494,jl=36495,ec=36283,tc=36284,ko=36285,nc=36286;var Zr=2300,qa=2301,Fa=2302,sh=2303,rh=2400,oh=2401,ah=2402;var Ed=3200,ic=3201;var Vo=0,Td=1,jn="",nn="srgb",$r="srgb-linear",Jr="linear",Ot="srgb";var Oa=7680;var wd=519,Ad=512,Rd=513,Cd=514,Rh=515,Pd=516,Id=517,Ch=518,Ph=519,Ih=35044,Hs=35048;var Dh="300 es",ni=2e3,ur=2001;function Cp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){let i=Kr("canvas");return i.style.display="block",i}var gu={},dr=null;function Qr(...i){let e="THREE."+i.shift();dr?dr("log",e,...i):console.log(e,...i)}function Ld(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=Ld(i);let e="THREE."+i.shift();if(dr)dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function at(...i){i=Ld(i);let e="THREE."+i.shift();if(dr)dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function As(...i){let e=i.join(" ");e in gu||(gu[e]=!0,it(...i))}function Nd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ud={[Ba]:Ba,[Ha]:Va,[Ga]:Ga,[hr]:ka,[za]:za,[Va]:Ha,[Wa]:Wa,[ka]:hr},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,Wr=Math.PI/180,fr=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function Ip(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dp(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function Lp(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function Np(i,e=1){return e-Math.abs(Lh(i,e*2)-e)}function Up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Op(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bp(i,e){return i+Math.random()*(e-i)}function zp(i){return i*(.5-Math.random())}function Hp(i){i!==void 0&&(xu=i);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gp(i){return i*Wr}function kp(i){return i*fr}function Vp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uh(i,e){if(e.constructor===Float32Array)return i;let t=sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Fh(i,e){if(e.constructor===Float32Array)return i;let t=sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var oi={DEG2RAD:Wr,RAD2DEG:fr,generateUUID:Ji,clamp:ut,euclideanModulo:Lh,mapLinear:Ip,inverseLerp:Dp,lerp:Xr,damp:Lp,pingpong:Np,smoothstep:Up,smootherstep:Fp,randInt:Op,randFloat:Bp,randFloatSpread:zp,seededRandom:Hp,degToRad:Gp,radToDeg:kp,isPowerOfTwo:Vp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Nh,setQuaternionFromProperEuler:Xp,normalize:Fh,denormalize:Uh},kh=class kh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;var le=kh,Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*v;m<0&&(u=-u,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+v*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+v*a;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vh=class Vh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;var P=Vh,Lc=new P,vu=new Xt,Wh=class Wh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],x=s[1],M=s[4],y=s[7],b=s[2],E=s[5],_=s[8];return r[0]=o*v+a*x+l*b,r[3]=o*m+a*M+l*E,r[6]=o*g+a*y+l*_,r[1]=c*v+h*x+d*b,r[4]=c*m+h*M+d*E,r[7]=c*g+h*y+d*_,r[2]=u*v+f*x+p*b,r[5]=u*m+f*M+p*E,r[8]=u*g+f*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;var dt=Wh,Nc=new dt,_u=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){let i={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$r]:{primaries:e,whitePoint:n,transfer:Jr,toXYZ:_u,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:_u,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var Mt=qp();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Kr("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yp=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uc(s[o].image)):r.push(Uc(s[o]))}else r=Uc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var Zp=0,Fc=new P,Un=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wi,s=wi,r=Mn,o=_i,a=Qn,l=Gn,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ji(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Mh;Un.DEFAULT_ANISOTROPY=1;var Xh=class Xh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,b=(g+1)/2,E=(h+u)/4,_=(d+v)/4,S=(p+m)/4;return M>y&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=_/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=S/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;var Bt=Xh,Za=class extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Un({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jr=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pl=class pl{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,v,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Jp)}lookAt(e,t,n){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),es.crossVectors(n,qn),es.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),es.crossVectors(n,qn)),es.normalize(),aa.crossVectors(qn,es),s[0]=es.x,s[4]=aa.x,s[8]=qn.x,s[1]=es.y,s[5]=aa.y,s[9]=qn.y,s[2]=es.z,s[6]=aa.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],M=n[7],y=n[11],b=n[15],E=s[0],_=s[4],S=s[8],L=s[12],w=s[1],I=s[5],D=s[9],A=s[13],C=s[2],U=s[6],B=s[10],O=s[14],W=s[3],X=s[7],Y=s[11],j=s[15];return r[0]=o*E+a*w+l*C+c*W,r[4]=o*_+a*I+l*U+c*X,r[8]=o*S+a*D+l*B+c*Y,r[12]=o*L+a*A+l*O+c*j,r[1]=h*E+d*w+u*C+f*W,r[5]=h*_+d*I+u*U+f*X,r[9]=h*S+d*D+u*B+f*Y,r[13]=h*L+d*A+u*O+f*j,r[2]=p*E+v*w+m*C+g*W,r[6]=p*_+v*I+m*U+g*X,r[10]=p*S+v*D+m*B+g*Y,r[14]=p*L+v*A+m*O+g*j,r[3]=x*E+M*w+y*C+b*W,r[7]=x*_+M*I+y*U+b*X,r[11]=x*S+M*D+y*B+b*Y,r[15]=x*L+M*A+y*O+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=l*f-c*u,M=a*f-c*d,y=a*u-l*d,b=o*f-c*h,E=o*u-l*h,_=o*d-a*h;return t*(v*x-m*M+g*y)-n*(p*x-m*b+g*E)+s*(p*M-v*b+g*_)-r*(p*y-v*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*a-n*o,M=t*l-s*o,y=t*c-r*o,b=n*l-s*a,E=n*c-r*a,_=s*c-r*l,S=h*v-d*p,L=h*m-u*p,w=h*g-f*p,I=d*m-u*v,D=d*g-f*v,A=u*g-f*m,C=x*A-M*D+y*I+b*w-E*L+_*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(a*A-l*D+c*I)*U,e[1]=(s*D-n*A-r*I)*U,e[2]=(v*_-m*E+g*b)*U,e[3]=(u*E-d*_-f*b)*U,e[4]=(l*w-o*A-c*L)*U,e[5]=(t*A-s*w+r*L)*U,e[6]=(m*y-p*_-g*M)*U,e[7]=(h*_-u*y+f*M)*U,e[8]=(o*D-a*w+c*S)*U,e[9]=(n*w-t*D-r*S)*U,e[10]=(p*E-v*y+g*x)*U,e[11]=(d*y-h*E-f*x)*U,e[12]=(a*L-o*I-l*S)*U,e[13]=(t*I-n*L+s*S)*U,e[14]=(v*M-p*b-m*x)*U,e[15]=(h*b-d*M+u*x)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,v=o*h,m=o*d,g=a*d,x=l*c,M=l*h,y=l*d,b=n.x,E=n.y,_=n.z;return s[0]=(1-(v+g))*b,s[1]=(f+y)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+g))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+M)*_,s[9]=(m-x)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ui.copy(this);let c=1/o,h=1/a,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ur)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===ni)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===ur)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pl.prototype.isMatrix4=!0;var Qe=pl,Ws=new P,ui=new Qe,$p=new P(0,0,0),Jp=new P(1,1,1),es=new P,aa=new P,qn=new P,Mu=new Qe,Su=new Xt,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kp=0,bu=new P,Xs=new Xt,Oi=new Qe,la=new P,Nr=new P,Qp=new P,jp=new Xt,Eu=new P(1,0,0),Tu=new P(0,1,0),wu=new P(0,0,1),Au={type:"added"},em={type:"removed"},qs={type:"childadded",child:null},Oc={type:"childremoved",child:null},sn=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new cn,n=new Xt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new dt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Nr,la,this.up):Oi.lookAt(la,Nr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),qs.child=e,this.dispatchEvent(qs),qs.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new P(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Mt.workingColorSpace){if(e=Lh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bc(o,r,e+1/3),this.g=Bc(o,r,e),this.b=Bc(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let n=Fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Mt.workingToColorSpace(An.copy(this),e),Math.round(ut(An.r*255,0,255))*65536+Math.round(ut(An.g*255,0,255))*256+Math.round(ut(An.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=nn){Mt.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(ca);let n=Xr(ts.h,ca.h,t),s=Xr(ts.s,ca.s,t),r=Xr(ts.l,ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Me;Me.NAMES=Fd;var to=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Rs=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new P,Bi=new P,zc=new P,zi=new P,Ys=new P,Zs=new P,Ru=new P,Hc=new P,Gc=new P,kc=new P,Vc=new Bt,Wc=new Bt,Xc=new Bt,pi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Bi.subVectors(n,t),zc.subVectors(e,t);let o=di.dot(di),a=di.dot(Bi),l=di.dot(zc),c=Bi.dot(Bi),h=Bi.dot(zc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Wc,r.y),o.addScaledVector(Xc,r.z),o}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Bi.subVectors(e,t),di.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),di.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),Zs.subVectors(r,n),Hc.subVectors(e,n);let l=Ys.dot(Hc),c=Zs.dot(Hc);if(l<=0&&c<=0)return t.copy(n);Gc.subVectors(e,s);let h=Ys.dot(Gc),d=Zs.dot(Gc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ys,o);kc.subVectors(e,r);let f=Ys.dot(kc),p=Zs.dot(kc);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Zs,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Ru.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Ru,a);let g=1/(m+v+u);return o=v*g,a=u*g,t.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ci=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),ua.subVectors(this.max,Ur),$s.subVectors(e.a,Ur),Js.subVectors(e.b,Ur),Ks.subVectors(e.c,Ur),ns.subVectors(Js,$s),is.subVectors(Ks,Js),bs.subVectors($s,Ks);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-bs.z,bs.y,ns.z,0,-ns.x,is.z,0,-is.x,bs.z,0,-bs.x,-ns.y,ns.x,0,-is.y,is.x,0,-bs.y,bs.x,0];return!qc(t,$s,Js,Ks,ua)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,$s,Js,Ks,ua))?!1:(da.crossVectors(ns,is),t=[da.x,da.y,da.z],qc(t,$s,Js,Ks,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new P,new P,new P,new P,new P,new P,new P,new P],fi=new P,ha=new Ci,$s=new P,Js=new P,Ks=new P,ns=new P,is=new P,bs=new P,Ur=new P,ua=new P,da=new P,Es=new P;function qc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Es.fromArray(i,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ln=new P,fa=new le,nm=0,Dt=class extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?sc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Fh(e,this.array)}};var no=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var io=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Te=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},im=new Ci,Fr=new P,Yc=new P,Xi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):im.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Yc)),this.expandByPoint(Fr.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sm=0,ti=new Qe,Zc=new sn,Qs=new P,Yn=new Ci,Or=new Ci,gn=new P,lt=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?io:no)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Yn.min,Or.min),Yn.expandByPoint(gn),gn.addVectors(Yn.max,Or.max),Yn.expandByPoint(gn)):(Yn.expandByPoint(Or.min),Yn.expandByPoint(Or.max))}Yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),gn.add(Qs)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new P,l[L]=new P;let h=new P,d=new P,u=new P,f=new le,p=new le,v=new le,m=new P,g=new P;function x(L,w,I){c[L]=c[w]=c[I]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,I),d.sub(h),u.sub(h),p.sub(f),v.sub(f);let D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(D),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(D),a[L].add(m),a[w].add(m),a[I].add(m),l[L].add(g),l[w].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,w=M.length;L<w;++L){let I=M[L],D=I.start,A=I.count;for(let C=D,U=D+A;C<U;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new P,b=new P,E=new P,_=new P;function S(L){E.fromBufferAttribute(s,L),_.copy(E);let w=a[L];y.copy(w),y.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(_,w);let D=b.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,w=n.count;L<w;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Dt(u,h,d)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},so=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Cu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Cu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Cu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ji()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ln=new P,gr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?sc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Fh(e,this.data.array)}},$c=new P,rm=new P,om=new dt,Nn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$c.subVectors(n,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||om.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},am=0,mi=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Er,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=yh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rs=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,Br=new P,er=new P,tr=new P,nr=new le,zr=new le,Od=new Qe,pa=new P,Hr=new P,ma=new P,Pu=new le,Jc=new le,Iu=new le,Cs=class extends sn{constructor(e=new rs){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new so(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new gr(n,3,0,!1)),js.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Od.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ga(pa.set(-.5,-.5,0),tr,o,er,s,r),ga(Hr.set(.5,-.5,0),tr,o,er,s,r),ga(ma.set(.5,.5,0),tr,o,er,s,r),Pu.set(0,0),Jc.set(1,0),Iu.set(1,1);let a=e.ray.intersectTriangle(pa,Hr,ma,!1,Br);if(a===null&&(ga(Hr.set(-.5,.5,0),tr,o,er,s,r),Jc.set(0,1),a=e.ray.intersectTriangle(pa,ma,Hr,!1,Br),a===null))return;let l=e.ray.origin.distanceTo(Br);l<e.near||l>e.far||t.push({distance:l,point:Br.clone(),uv:pi.getInterpolation(Br,pa,Hr,ma,Pu,Jc,Iu,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ga(i,e,t,n,s,r){nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*nr.x-s*nr.y,zr.y=s*nr.x+r*nr.y):zr.copy(nr),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(Od)}var Gi=new P,Kc=new P,xa=new P,va=new P,ro=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kc.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),va.copy(this.origin).sub(Kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=va.dot(this.direction),l=-va.dot(xa),c=va.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kc).addScaledVector(xa,u),f}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,x=n.y-o.y,M=n.z-o.z,y=Math.abs(l),b=Math.abs(c),E=Math.abs(h),_,S,L,w,I,D,A,C,U,B,O,W;if(y>=b&&y>=E?(L=l,D=d,U=p,W=g,l>=0?(_=c,S=h,w=u,I=f,A=v,C=m,B=x,O=M):(_=h,S=c,w=f,I=u,A=m,C=v,B=M,O=x)):b>=E?(L=c,D=u,U=v,W=x,c>=0?(_=h,S=l,w=f,I=d,A=m,C=p,B=M,O=g):(_=l,S=h,w=d,I=f,A=p,C=m,B=g,O=M)):(L=h,D=f,U=m,W=M,h>=0?(_=l,S=c,w=d,I=u,A=p,C=v,B=g,O=x):(_=c,S=l,w=u,I=d,A=v,C=p,B=x,O=g)),L===0)return null;let X=_/L,Y=S/L,j=1/L,Z=w-X*D,ee=I-Y*D,$=A-X*U,he=C-Y*U,fe=B-X*W,re=O-Y*W,ce=fe*he-re*$,Ee=Z*re-ee*fe,Ye=$*ee-he*Z;if(s){if(ce<0||Ee<0||Ye<0)return null}else if((ce<0||Ee<0||Ye<0)&&(ce>0||Ee>0||Ye>0))return null;let De=ce+Ee+Ye;if(De===0)return null;let $e=j*(ce*D+Ee*U+Ye*W);return(De>0?$e<0:$e>0)?null:this.at($e/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Du=new Qe,Ts=new ro,_a=new Xi,Lu=new P,ya=new P,Ma=new P,Sa=new P,Qc=new P,ba=new P,Nu=new P,Ea=new P,At=class extends sn{constructor(e=new lt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Qc.fromBufferAttribute(d,e),o?ba.addScaledVector(Qc,h):ba.addScaledVector(Qc.sub(t),h))}t.add(ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(_a.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(_a,Lu)===null||Ts.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,b=M;y<b;y+=3){let E=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);s=Ta(this,g,e,n,c,h,d,E,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Ta(this,o,e,n,c,h,d,x,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,b=M;y<b;y+=3){let E=y,_=y+1,S=y+2;s=Ta(this,g,e,n,c,h,d,E,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=m,M=m+1,y=m+2;s=Ta(this,o,e,n,c,h,d,x,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function lm(i,e,t,n,s,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ps,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ea);return c<t.near||c>t.far?null:{distance:c,point:Ea.clone(),object:i}}function Ta(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ya),i.getVertexPosition(l,Ma),i.getVertexPosition(c,Sa);let h=lm(i,e,t,n,ya,Ma,Sa,Nu);if(h){let d=new P;pi.getBarycoord(Nu,ya,Ma,Sa,d),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,d,new le)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,d,new le)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};pi.getNormal(ya,Ma,Sa,u.normal),h.face=u,h.barycoord=d}return h}var Ps=class extends Un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=xn,h=xn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Qe,Uu=new Qe,wa=[],Fu=new Ci,cm=new Qe,Gr=new At,kr=new Xi,Rt=class extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Fu.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Fu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),kr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),Uu.multiplyMatrices(n,ir),Gr.matrixWorld=Uu,Gr.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){let l=wa[o];l.instanceId=r,l.object=this,t.push(l)}wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,bl,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Xi,hm=new le(.5,.5),Aa=new P,as=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],M=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-p,b-x).normalize(),s[1].setComponents(c+o,f+h,g+p,b+x).normalize(),s[2].setComponents(c+a,f+d,g+v,b+M).normalize(),s[3].setComponents(c-a,f-d,g-v,b-M).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,g-m,b-y).normalize();else if(s[4].setComponents(c-l,f-u,g-m,b-y).normalize(),t===ni)s[5].setComponents(c+l,f+u,g+m,b+y).normalize();else if(t===ur)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=hm.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ou=new Qe,Ja=class i{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ou.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new as),n[s].setFromProjectionMatrix(Ou,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new as),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ls=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bu=new Qe,lh=new ro,Ra=new Xi,Ca=new P,cs=class extends sn{constructor(e=new lt,t=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Bu.copy(s).invert(),lh.copy(e.ray).applyMatrix4(Bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,v=f;p<v;p++){let m=c.getX(p);Ca.fromBufferAttribute(d,m),zu(Ca,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,v=f;p<v;p++)Ca.fromBufferAttribute(d,p),zu(Ca,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zu(i,e,t,n,s,r,o){let a=lh.distanceSqToPoint(i);if(a<t){let l=new P;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var oo=class extends Un{constructor(e=[],t=Bs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ii=class extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Un{constructor(e,t,n=yi,s,r,o,a=xn,l=xn,c,h=Wi,d=1){if(h!==Wi&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ao=class extends qi{constructor(e,t=yi,n=Bs,s,r,o=xn,a=xn,l,c=Wi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},lo=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zn=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function p(v,m,g,x,M,y,b,E,_,S,L){let w=y/_,I=b/S,D=y/2,A=b/2,C=E/2,U=_+1,B=S+1,O=0,W=0,X=new P;for(let Y=0;Y<B;Y++){let j=Y*I-A;for(let Z=0;Z<U;Z++){let ee=Z*w-D;X[v]=ee*x,X[m]=j*M,X[g]=C,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(Z/_),d.push(1-Y/S),O+=1}}for(let Y=0;Y<S;Y++)for(let j=0;j<_;j++){let Z=u+j+U*Y,ee=u+j+U*(Y+1),$=u+(j+1)+U*(Y+1),he=u+(j+1)+U*Y;l.push(Z,ee,he),l.push(ee,$,he),W+=6}a.addGroup(f,W,L),f+=W,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},co=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,v=s+1,m=new P,g=new P;for(let x=0;x<=p;x++){let M=0,y=0,b=0,E=0;if(x<=n){let L=x/n,w=L*Math.PI/2;y=-h-e*Math.cos(w),b=e*Math.sin(w),E=-e*Math.cos(w),M=L*d}else if(x<=n+r){let L=(x-n)/r;y=-h+L*t,b=e,E=0,M=d+L*u}else{let L=(x-n-r)/n,w=L*Math.PI/2;y=h+e*Math.sin(w),b=e*Math.cos(w),E=e*Math.sin(w),M=d+u+L*d}let _=Math.max(0,Math.min(1,M/f)),S=0;x===0?S=.5/s:x===p&&(S=-.5/s);for(let L=0;L<=s;L++){let w=L/s,I=w*Math.PI*2,D=Math.sin(I),A=Math.cos(I);g.x=-b*A,g.y=y,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*A,E,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(w+S,_)}if(x>0){let L=(x-1)*v;for(let w=0;w<s;w++){let I=L+w,D=L+w+1,A=x*v+w,C=x*v+w+1;o.push(I,D,A),o.push(D,C,A)}}}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},gi=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$n=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,v=[],m=n/2,g=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function x(){let y=new P,b=new P,E=0,_=(t-e)/n;for(let S=0;S<=r;S++){let L=[],w=S/r,I=w*(t-e)+e;for(let D=0;D<=s;D++){let A=D/s,C=A*l+a,U=Math.sin(C),B=Math.cos(C);b.x=I*U,b.y=-w*n+m,b.z=I*B,d.push(b.x,b.y,b.z),y.set(U,_,B).normalize(),u.push(y.x,y.y,y.z),f.push(A,1-w),L.push(p++)}v.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let w=v[L][S],I=v[L+1][S],D=v[L+1][S+1],A=v[L][S+1];(e>0||L!==0)&&(h.push(w,I,A),E+=3),(t>0||L!==r-1)&&(h.push(I,D,A),E+=3)}c.addGroup(g,E,0),g+=E}function M(y){let b=p,E=new le,_=new P,S=0,L=y===!0?e:t,w=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),p++;let I=p;for(let D=0;D<=s;D++){let C=D/s*l+a,U=Math.cos(C),B=Math.sin(C);_.x=L*B,_.y=m*w,_.z=L*U,d.push(_.x,_.y,_.z),u.push(0,w,0),E.x=U*.5+.5,E.y=B*.5*w+.5,f.push(E.x,E.y),p++}for(let D=0;D<s;D++){let A=b+D,C=I+D;y===!0?h.push(C,C+1,A):h.push(C+1,C,A),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends $n{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ka=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let M=new P,y=new P,b=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],y),f(t[E+2],b),l(M,y,b,x)}function l(x,M,y,b){let E=b+1,_=[];for(let S=0;S<=E;S++){_[S]=[];let L=x.clone().lerp(y,S/E),w=M.clone().lerp(y,S/E),I=E-S;for(let D=0;D<=I;D++)D===0&&S===E?_[S][D]=L:_[S][D]=L.clone().lerp(w,D/I)}for(let S=0;S<E;S++)for(let L=0;L<2*(E-S)-1;L++){let w=Math.floor(L/2);L%2===0?(u(_[S][w+1]),u(_[S+1][w]),u(_[S][w])):(u(_[S][w+1]),u(_[S+1][w+1]),u(_[S+1][w]))}}function c(x){let M=new P;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let x=new P;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let y=m(x)/2/Math.PI+.5,b=g(x)/Math.PI+.5;o.push(y,1-b)}p(),d()}function d(){for(let x=0;x<o.length;x+=6){let M=o[x+0],y=o[x+2],b=o[x+4],E=Math.max(M,y,b),_=Math.min(M,y,b);E>.9&&_<.1&&(M<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,M){let y=x*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let x=new P,M=new P,y=new P,b=new P,E=new le,_=new le,S=new le;for(let L=0,w=0;L<r.length;L+=9,w+=6){x.set(r[L+0],r[L+1],r[L+2]),M.set(r[L+3],r[L+4],r[L+5]),y.set(r[L+6],r[L+7],r[L+8]),E.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),S.set(o[w+4],o[w+5]),b.copy(x).add(M).add(y).divideScalar(3);let I=m(b);v(E,w+0,x,I),v(_,w+2,M,I),v(S,w+4,y,I)}}function v(x,M,y,b){b<0&&x.x===1&&(o[M]=x.x-1),y.x===0&&y.z===0&&(o[M]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new Qe;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},xr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends xr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Hu=new P,Gu=new P,jc=new Oh,eh=new Oh,th=new Oh,xi=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Gu.subVectors(s[0],s[1]).add(s[0]),c=Gu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),jc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,m),eh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,m),th.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),eh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),th.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(jc.calc(l),eh.calc(l),th.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ku(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function um(i,e){let t=1-i;return t*t*e}function dm(i,e){return 2*(1-i)*i*e}function fm(i,e){return i*i*e}function qr(i,e,t,n){return um(i,e)+dm(i,t)+fm(i,n)}function pm(i,e){let t=1-i;return t*t*t*e}function mm(i,e){let t=1-i;return 3*t*t*i*e}function gm(i,e){return 3*(1-i)*i*i*e}function xm(i,e){return i*i*i*e}function Yr(i,e,t,n,s){return pm(i,e)+mm(i,t)+gm(i,n)+xm(i,s)}var ho=class extends Fn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(e,s.x,r.x,o.x,a.x),Yr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vr=class extends Fn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(e,s.x,r.x,o.x,a.x),Yr(e,s.y,r.y,o.y,a.y),Yr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uo=class extends Fn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Fn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Fn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(e,s.x,r.x,o.x),qr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends Fn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(e,s.x,r.x,o.x),qr(e,s.y,r.y,o.y),qr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ku(a,l.x,c.x,h.x,d.x),ku(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},el=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:xi,CubicBezierCurve:ho,CubicBezierCurve3:vr,EllipseCurve:xr,LineCurve:uo,LineCurve3:ja,QuadraticBezierCurve:fo,QuadraticBezierCurve3:po,SplineCurve:mo}),tl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new el[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},go=class extends tl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new uo(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new fo(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ho(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new xr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hn=class extends go{constructor(e){super(e),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new go().fromJSON(s))}return this}};function vm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Bd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=bm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return xo(r,o,t,a,l,c,0),o}function Bd(i,e,t,n,s){let r;if(s===Nm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Vu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Vu(o/n|0,i[o],i[o+1],r);return r&&_r(r,r.next)&&(_o(r),r=r.next),r}function Is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_r(t,t.next)||Kt(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Rm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ym(i,n,s,r):_m(i)){e.push(l.i,i.i,c.i),_o(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mm(Is(i),e),xo(i,e,t,n,s,r,2)):o===2&&Sm(i,e,t,n,s,r):xo(Is(i),e,t,n,s,r,1);break}}}function _m(i){let e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Vr(s,a,r,l,o,c,p.x,p.y)&&Kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ym(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),v=Math.max(a,l,c),m=Math.max(h,d,u),g=ch(f,p,e,t,n),x=ch(v,m,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,l,d,c,u,M.x,M.y)&&Kt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,l,d,c,u,y.x,y.y)&&Kt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,l,d,c,u,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,l,d,c,u,y.x,y.y)&&Kt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Mm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!_r(n,s)&&Hd(n,t,t.next,s)&&vo(n,s)&&vo(s,n)&&(e.push(n.i,t.i,s.i),_o(t),_o(t.next),t=i=s),t=t.next}while(t!==i);return Is(t)}function Sm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Im(o,a)){let l=Gd(o,a);o=Is(o,o.next),l=Is(l,l.next),xo(o,e,t,n,s,r,0),xo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function bm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Bd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pm(c))}s.sort(Em);for(let r=0;r<s.length;r++)t=Tm(s[r],t);return t}function Em(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Tm(i,e){let t=wm(i,e);if(!t)return e;let n=Gd(t,i);return Is(n,n.next),Is(t,t.next)}function wm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(_r(i,t))return t;do{if(_r(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&zd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);vo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Am(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Am(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function Rm(i,e,t,n){let s=i;do s.z===0&&(s.z=ch(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cm(s)}function Cm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ch(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Pm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Vr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&zd(i,e,t,n,s,r,o,a)}function Im(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dm(i,e)&&(vo(i,e)&&vo(e,i)&&Lm(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||_r(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _r(i,e){return i.x===e.x&&i.y===e.y}function Hd(i,e,t,n){let s=Ia(Kt(i,e,t)),r=Ia(Kt(i,e,n)),o=Ia(Kt(t,n,i)),a=Ia(Kt(t,n,e));return!!(s!==r&&o!==a||s===0&&Pa(i,t,e)||r===0&&Pa(i,n,e)||o===0&&Pa(t,i,n)||a===0&&Pa(t,e,n))}function Pa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ia(i){return i>0?1:i<0?-1:0}function Dm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Hd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vo(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function Lm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gd(i,e){let t=hh(i.i,i.x,i.y),n=hh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vu(i,e,t,n){let s=hh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var uh=class{static triangulate(e,t,n=2){return vm(e,t,n)}},Ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Wu(e),Xu(n,e);let o=e.length;t.forEach(Wu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Xu(n,t[l]);let a=uh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Wu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Yi=class i extends lt{constructor(e=new Hn([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Um,M,y=!1,b,E,_,S;if(g){M=g.getSpacedPoints(h),y=!0,u=!1;let oe=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,oe),E=new P,_=new P,S=new P}u||(m=0,f=0,p=0,v=0);let L=a.extractPoints(c),w=L.shape,I=L.holes;if(!Ai.isClockWise(w)){w=w.reverse();for(let oe=0,Se=I.length;oe<Se;oe++){let ye=I[oe];Ai.isClockWise(ye)&&(I[oe]=ye.reverse())}}function A(oe){let ye=10000000000000001e-36,Ue=oe[0];for(let xe=1;xe<=oe.length;xe++){let et=xe%oe.length,He=oe[et],st=He.x-Ue.x,rt=He.y-Ue.y,vt=st*st+rt*rt,z=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(Ue.x),Math.abs(Ue.y)),Ft=ye*z*z;if(vt<=Ft){oe.splice(et,1),xe--;continue}Ue=He}}A(w),I.forEach(A);let C=I.length,U=w;for(let oe=0;oe<C;oe++){let Se=I[oe];w=w.concat(Se)}function B(oe,Se,ye){return Se||at("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(Se,ye)}let O=w.length;function W(oe,Se,ye){let Ue,xe,et,He=oe.x-Se.x,st=oe.y-Se.y,rt=ye.x-oe.x,vt=ye.y-oe.y,z=He*He+st*st,Ft=He*vt-st*rt;if(Math.abs(Ft)>Number.EPSILON){let ue=Math.sqrt(z),Be=Math.sqrt(rt*rt+vt*vt),ae=Se.x-st/ue,Ge=Se.y+He/ue,we=ye.x-vt/Be,Fe=ye.y+rt/Be,N=((we-ae)*vt-(Fe-Ge)*rt)/(He*vt-st*rt);Ue=ae+He*N-oe.x,xe=Ge+st*N-oe.y;let T=Ue*Ue+xe*xe;if(T<=2)return new le(Ue,xe);et=Math.sqrt(T/2)}else{let ue=!1;He>Number.EPSILON?rt>Number.EPSILON&&(ue=!0):He<-Number.EPSILON?rt<-Number.EPSILON&&(ue=!0):Math.sign(st)===Math.sign(vt)&&(ue=!0),ue?(Ue=-st,xe=He,et=Math.sqrt(z)):(Ue=He,xe=st,et=Math.sqrt(z/2))}return new le(Ue/et,xe/et)}let X=[];for(let oe=0,Se=U.length,ye=Se-1,Ue=oe+1;oe<Se;oe++,ye++,Ue++)ye===Se&&(ye=0),Ue===Se&&(Ue=0),X[oe]=W(U[oe],U[ye],U[Ue]);let Y=[],j,Z=X.concat();for(let oe=0,Se=C;oe<Se;oe++){let ye=I[oe];j=[];for(let Ue=0,xe=ye.length,et=xe-1,He=Ue+1;Ue<xe;Ue++,et++,He++)et===xe&&(et=0),He===xe&&(He=0),j[Ue]=W(ye[Ue],ye[et],ye[He]);Y.push(j),Z=Z.concat(j)}let ee;if(m===0)ee=Ai.triangulateShape(U,I);else{let oe=[],Se=[];for(let ye=0;ye<m;ye++){let Ue=ye/m,xe=f*Math.cos(Ue*Math.PI/2),et=p*Math.sin(Ue*Math.PI/2)+v;for(let He=0,st=U.length;He<st;He++){let rt=B(U[He],X[He],et);Ee(rt.x,rt.y,-xe),Ue===0&&oe.push(rt)}for(let He=0,st=C;He<st;He++){let rt=I[He];j=Y[He];let vt=[];for(let z=0,Ft=rt.length;z<Ft;z++){let ue=B(rt[z],j[z],et);Ee(ue.x,ue.y,-xe),Ue===0&&vt.push(ue)}Ue===0&&Se.push(vt)}}ee=Ai.triangulateShape(oe,Se)}let $=ee.length,he=p+v;for(let oe=0;oe<O;oe++){let Se=u?B(w[oe],Z[oe],he):w[oe];y?(_.copy(b.normals[0]).multiplyScalar(Se.x),E.copy(b.binormals[0]).multiplyScalar(Se.y),S.copy(M[0]).add(_).add(E),Ee(S.x,S.y,S.z)):Ee(Se.x,Se.y,0)}for(let oe=1;oe<=h;oe++)for(let Se=0;Se<O;Se++){let ye=u?B(w[Se],Z[Se],he):w[Se];y?(_.copy(b.normals[oe]).multiplyScalar(ye.x),E.copy(b.binormals[oe]).multiplyScalar(ye.y),S.copy(M[oe]).add(_).add(E),Ee(S.x,S.y,S.z)):Ee(ye.x,ye.y,d/h*oe)}for(let oe=m-1;oe>=0;oe--){let Se=oe/m,ye=f*Math.cos(Se*Math.PI/2),Ue=p*Math.sin(Se*Math.PI/2)+v;for(let xe=0,et=U.length;xe<et;xe++){let He=B(U[xe],X[xe],Ue);Ee(He.x,He.y,d+ye)}for(let xe=0,et=I.length;xe<et;xe++){let He=I[xe];j=Y[xe];for(let st=0,rt=He.length;st<rt;st++){let vt=B(He[st],j[st],Ue);y?Ee(vt.x,vt.y+M[h-1].y,M[h-1].x+ye):Ee(vt.x,vt.y,d+ye)}}}fe(),re();function fe(){let oe=s.length/3;if(u){let Se=0,ye=O*Se;for(let Ue=0;Ue<$;Ue++){let xe=ee[Ue];Ye(xe[2]+ye,xe[1]+ye,xe[0]+ye)}Se=h+m*2,ye=O*Se;for(let Ue=0;Ue<$;Ue++){let xe=ee[Ue];Ye(xe[0]+ye,xe[1]+ye,xe[2]+ye)}}else{for(let Se=0;Se<$;Se++){let ye=ee[Se];Ye(ye[2],ye[1],ye[0])}for(let Se=0;Se<$;Se++){let ye=ee[Se];Ye(ye[0]+O*h,ye[1]+O*h,ye[2]+O*h)}}n.addGroup(oe,s.length/3-oe,0)}function re(){let oe=s.length/3,Se=0;ce(U,Se),Se+=U.length;for(let ye=0,Ue=I.length;ye<Ue;ye++){let xe=I[ye];ce(xe,Se),Se+=xe.length}n.addGroup(oe,s.length/3-oe,1)}function ce(oe,Se){let ye=oe.length;for(;--ye>=0;){let Ue=ye,xe=ye-1;xe<0&&(xe=oe.length-1);for(let et=0,He=h+m*2;et<He;et++){let st=O*et,rt=O*(et+1),vt=Se+Ue+st,z=Se+xe+st,Ft=Se+xe+rt,ue=Se+Ue+rt;De(vt,z,Ft,ue)}}}function Ee(oe,Se,ye){l.push(oe),l.push(Se),l.push(ye)}function Ye(oe,Se,ye){$e(oe),$e(Se),$e(ye);let Ue=s.length/3,xe=x.generateTopUV(n,s,Ue-3,Ue-2,Ue-1);je(xe[0]),je(xe[1]),je(xe[2])}function De(oe,Se,ye,Ue){$e(oe),$e(Se),$e(Ue),$e(Se),$e(ye),$e(Ue);let xe=s.length/3,et=x.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);je(et[0]),je(et[1]),je(et[3]),je(et[1]),je(et[2]),je(et[3])}function $e(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function je(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new el[s.type]().fromJSON(s)),new i(n,e.options)}},Um={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-d),new le(u,1-p),new le(v,1-g)]:[new le(a,1-l),new le(h,1-d),new le(f,1-p),new le(m,1-g)]}};function Fm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yo=class i extends lt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new P,u=new le,f=new P,p=new P,v=new P,m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=t;x++){let M=n+x*h*s,y=Math.sin(M),b=Math.cos(M);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*b,o.push(d.x,d.y,d.z),u.x=x/t,u.y=E/(e.length-1),a.push(u.x,u.y);let _=l[3*E+0]*y,S=l[3*E+1],L=l[3*E+0]*b;c.push(_,S,L)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){let y=M+x*e.length,b=y,E=y+e.length,_=y+e.length+1,S=y+1;r.push(b,E,S),r.push(_,S,E)}this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Mo=class i extends Ka{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cn=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let x=g*u-o;for(let M=0;M<c;M++){let y=M*d-r;p.push(y,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let M=x+c*g,y=x+c*(g+1),b=x+1+c*(g+1),E=x+1+c*g;f.push(M,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ds=class i extends lt{constructor(e=new Hn([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;Ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];Ai.isClockWise(x)===!0&&(p[m]=x.reverse())}let v=Ai.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){let x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,g=v.length;m<g;m++){let x=v[m],M=x[0]+d,y=x[1]+d,b=x[2]+d;n.push(M,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Om(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Om(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ct=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let x=[],M=g/n,y=o+M*a,b=e*Math.cos(y),E=Math.sqrt(e*e-b*b),_=0;g===0&&o===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let L=S/t,w=s+L*r;d.x=-E*Math.cos(w),d.y=b,d.z=E*Math.sin(w),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(L+_,1-M),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let M=h[g][x+1],y=h[g][x],b=h[g+1][x],E=h[g+1][x+1];(g!==0||o>0)&&f.push(M,y,E),(g!==n-1||l<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ke=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=s;g++){let x=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,x=(s+1)*(v-1)+m-1,M=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(g,x,y),l.push(x,M,y)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var vi=class i extends lt{constructor(e=new po(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new le,h=new P,d=[],u=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function v(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),g()}function m(M){h=e.getPointAt(M/t,h);let y=o.normals[M],b=o.binormals[M];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,S=Math.sin(_),L=-Math.cos(_);l.x=L*y.x+S*b.x,l.y=L*y.y+S*b.y,l.z=L*y.z+S*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let b=(s+1)*(M-1)+(y-1),E=(s+1)*M+(y-1),_=(s+1)*M+y,S=(s+1)*(M-1)+y;p.push(b,E,S),p.push(E,_,S)}}function x(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new el[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(qu(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(qu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=Gs(i[t]);for(let s in n)e[s]=n[s]}return e}function qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}var On={clone:Gs,merge:Pn},zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},yr=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nt=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},So=class extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return As('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){As('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var hs=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=gl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ls=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=e,a=2*t-n;break;case ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=e,l=2*n-t;break;case ah:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+x*o[c+b]+M*o[l+b]+y*o[d+b];return r}},sl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},rl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ol=class extends us{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=f*u+p*2,x=d[g],M=d[g+1],y=e*u+p*2,b=h[y],E=h[y+1],_=km(n,t,x,b,s);r[p]=kd(_,v,M,E,m)}return r}};function kd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function km(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=kd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Gm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Da(e.settings)&&(n.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case qa:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Da(this.settings)&&(Yu(this.settings.inTangents,e),Yu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Da(this.settings)&&(Zu(this.settings.inTangents,e),Zu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){at("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){at("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Pp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){at("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let v=t[d+p];if(v!==t[u+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Zu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=qa;var ds=class extends Jn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Zr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};al.prototype.ValueTypeName="color";var ll=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};ll.prototype.ValueTypeName="number";var cl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Xt.slerpFlat(r,0,o,c-a,o,c,l);return r}},bo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Jn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Zr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};hl.prototype.ValueTypeName="vector";var ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vd=new ul,dl=class{constructor(e){this.manager=e!==void 0?e:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends sn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Eo=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nh=new Qe,$u=new P,Ju=new P,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},La=new P,Na=new Xt,Ti=new P,wo=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Na,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(La,Na,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new P,Ku=new le,Qu=new le,Rn=class extends wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,Ku,Qu),t.subVectors(Qu,Ku)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var dh=class extends To{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}},Kn=class extends Mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ns=class extends wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fh=class extends To{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ao=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new fh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rr=-90,or=1,Sr=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new Rn(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new Rn(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new Rn(rr,or,e,t);a.layers=this.layers,this.add(a);let l=new Rn(rr,or,e,t);l.layers=this.layers,this.add(l);let c=new Rn(rr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fl=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Vm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vm(){this._document.hidden===!1&&this.reset()}var zh="\\[\\]\\.:\\/",Wm=new RegExp("["+zh+"]","g"),Hh="[^"+zh+"]",Xm="[^"+zh.replace("\\.","")+"]",qm=/((?:WC+[\/:])*)/.source.replace("WC",Hh),Ym=/(WCOD+)?/.source.replace("WCOD",Xm),Zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),Jm=new RegExp("^"+qm+Ym+Zm+$m+"$"),Km=["material","materials","bones","map"],ph=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(e){let t=Jm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;at("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=ph;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var py=new Float32Array(1);var qh=class qh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};qh.prototype.isMatrix2=!0;var mh=qh;var ju=new P,Ua=new P,ar=new P,lr=new P,ih=new P,Qm=new P,jm=new P,Co=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ju.subVectors(e,this.start),Ua.subVectors(this.end,this.start);let n=Ua.dot(Ua);if(n===0)return 0;let r=Ua.dot(ju)/n;return t&&(r=ut(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Qm,n=jm){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;ar.subVectors(c,a),lr.subVectors(h,l),ih.subVectors(a,l);let d=ar.dot(ar),u=lr.dot(lr),f=lr.dot(ih);if(d<=s&&u<=s)return t.copy(a),n.copy(l),t.distanceToSquared(n);if(d<=s)r=0,o=f/u,o=ut(o,0,1);else{let p=ar.dot(ih);if(u<=s)o=0,r=ut(-p/d,0,1);else{let v=ar.dot(lr),m=d*u-v*v;m!==0?r=ut((v*f-p*u)/m,0,1):r=0,o=(v*r+f)/u,o<0?(o=0,r=ut(-p/d,0,1)):o>1&&(o=1,r=ut((v-p)/d,0,1))}}return t.copy(a).addScaledVector(ar,r),n.copy(l).addScaledVector(lr,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Gh(i,e,t,n){let s=e0(n);switch(t){case wh:return i*e;case bl:return i*e/s.components*s.byteLength;case El:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case Tl:return i*e*2/s.components*s.byteLength;case Ah:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case wl:return i*e*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(e,8)/2;case Il:case Dl:case Nl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Go:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Ql:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ko:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(i){switch(i){case Gn:case Sh:return{byteLength:1,components:1};case wr:case bh:case rn:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case yi:case yl:case ri:return{byteLength:4,components:1};case Eh:case Th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);function df(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function s0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,J0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ng=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:x0,iridescence_fragment:v0,bumpmap_pars_fragment:_0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:b0,color_fragment:E0,color_pars_fragment:T0,color_pars_vertex:w0,color_vertex:A0,common:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:D0,emissivemap_pars_fragment:L0,colorspace_fragment:N0,colorspace_pars_fragment:U0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:J0,envmap_vertex:H0,fog_vertex:G0,fog_pars_vertex:k0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:Z0,lights_pars_begin:$0,lights_toon_fragment:K0,lights_toon_pars_fragment:Q0,lights_phong_fragment:j0,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,lightprobes_pars_fragment:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:dg,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:vg,morphnormal_vertex:_g,morphtarget_pars_vertex:yg,morphtarget_vertex:Mg,normal_fragment_begin:Sg,normal_fragment_maps:bg,normal_pars_fragment:Eg,normal_pars_vertex:Tg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Dg,packing:Lg,premultiplied_alpha_fragment:Ng,project_vertex:Ug,dithering_fragment:Fg,dithering_pars_fragment:Og,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Gg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:Zg,specularmap_pars_fragment:$g,tonemapping_fragment:Jg,tonemapping_pars_fragment:Kg,transmission_fragment:Qg,transmission_pars_fragment:jg,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distance_vert:dx,distance_frag:fx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:vx,meshbasic_frag:_x,meshlambert_vert:yx,meshlambert_frag:Mx,meshmatcap_vert:Sx,meshmatcap_frag:bx,meshnormal_vert:Ex,meshnormal_frag:Tx,meshphong_vert:wx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Dx,points_frag:Lx,shadow_vert:Nx,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:Ox},Ie={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Pn([Ie.lights,Ie.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var rc={r:0,b:0,g:0},Bx=new Qe,ff=new dt;ff.set(-1,0,0,0,1,0,0,0,1);function zx(i,e,t,n,s,r){let o=new Me(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(x){let M=!1,y=f(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new At(new Zn(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Gs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ff),c.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Ot,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new At(new Cn(2,2),new Vt({name:"BackgroundMaterial",uniforms:Gs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(rc,Bh(i)),t.buffers.color.setClear(rc.r,rc.g,rc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Hx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,D,A,C,U){let B=!1,O=d(I,C,A,D);r!==O&&(r=O,c(r.object)),B=f(I,C,A,U),B&&p(I,C,A,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(I,D,A,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,D,A,C){let U=C.wireframe===!0,B=n[D.id];B===void 0&&(B={},n[D.id]=B);let O=I.isInstancedMesh===!0?I.id:0,W=B[O];W===void 0&&(W={},B[O]=W);let X=W[A.id];X===void 0&&(X={},W[A.id]=X);let Y=X[U];return Y===void 0&&(Y=u(l()),X[U]=Y),Y}function u(I){let D=[],A=[],C=[];for(let U=0;U<t;U++)D[U]=0,A[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:A,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,D,A,C){let U=r.attributes,B=D.attributes,O=0,W=A.getAttributes();for(let X in W)if(W[X].location>=0){let j=U[X],Z=B[X];if(Z===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),j===void 0||j.attribute!==Z||Z&&j.data!==Z.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(I,D,A,C){let U={},B=D.attributes,O=0,W=A.getAttributes();for(let X in W)if(W[X].location>=0){let j=B[X];j===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let Z={};Z.attribute=j,j&&j.data&&(Z.data=j.data),U[X]=Z,O++}r.attributes=U,r.attributesNum=O,r.index=C}function v(){let I=r.newAttributes;for(let D=0,A=I.length;D<A;D++)I[D]=0}function m(I){g(I,0)}function g(I,D){let A=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;A[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),U[I]!==D&&(i.vertexAttribDivisor(I,D),U[I]=D)}function x(){let I=r.newAttributes,D=r.enabledAttributes;for(let A=0,C=D.length;A<C;A++)D[A]!==I[A]&&(i.disableVertexAttribArray(A),D[A]=0)}function M(I,D,A,C,U,B,O){O===!0?i.vertexAttribIPointer(I,D,A,U,B):i.vertexAttribPointer(I,D,A,C,U,B)}function y(I,D,A,C){v();let U=C.attributes,B=A.getAttributes(),O=D.defaultAttributeValues;for(let W in B){let X=B[W];if(X.location>=0){let Y=U[W];if(Y===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let j=Y.normalized,Z=Y.itemSize,ee=e.get(Y);if(ee===void 0)continue;let $=ee.buffer,he=ee.type,fe=ee.bytesPerElement,re=he===i.INT||he===i.UNSIGNED_INT||Y.gpuType===yl;if(Y.isInterleavedBufferAttribute){let ce=Y.data,Ee=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,Ye=Y.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let De=0;De<X.locationSize;De++)g(X.location+De,ce.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,$);for(let De=0;De<X.locationSize;De++)M(X.location+De,Z/X.locationSize,he,j,Ee*fe,(Ye+Z/X.locationSize*De)*fe,re)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce,Y.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ce=0;ce<X.locationSize;ce++)M(X.location+ce,Z/X.locationSize,he,j,Z*fe,Z/X.locationSize*ce*fe,re)}}else if(O!==void 0){let j=O[W];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}x()}function b(){L();for(let I in n){let D=n[I];for(let A in D){let C=D[A];for(let U in C){let B=C[U];for(let O in B)h(B[O].object),delete B[O];delete C[U]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let A in D){let C=D[A];for(let U in C){let B=C[U];for(let O in B)h(B[O].object),delete B[O];delete C[U]}}delete n[I.id]}function _(I){for(let D in n){let A=n[D];for(let C in A){let U=A[C];if(U[I.id]===void 0)continue;let B=U[I.id];for(let O in B)h(B[O].object),delete B[O];delete U[I.id]}}}function S(I){for(let D in n){let A=n[D],C=I.isInstancedMesh===!0?I.id:0,U=A[C];if(U!==void 0){for(let B in U){let O=U[B];for(let W in O)h(O[W].object),delete O[W];delete U[B]}delete A[C],Object.keys(A).length===0&&delete n[D]}}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Gx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function kx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Qn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Gn&&_!==ri&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:E}}function Vx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Nn,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,M=x*4,y=g.clippingState||null;l.value=y,y=h(p,u,M,f);for(let b=0;b!==M;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==v;++M,y+=4)o.copy(d[M]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var qo=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new oo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zn(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Zi});r.uniforms.tEquirect.value=t;let o=new At(s,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Mn),new Sr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Wd=256,Wx=3,Xx=20,pf=256,mf=16,qx=3,Yx=new P,Zx=new Me,Rr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sr(1,10,null),this._boxMesh=new At(new Zn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Zx));let m=new Sr(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wd,Nh(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===Tr?this._setSize(e.image.length===0?Wd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Xd(e,!1,!1),n=Math.log2(e)-Wx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===Tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$x(),this._integrationMaterial=Jx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/mf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-qx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(pf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Kx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Xd(i,e,t){return new qo(i,{minFilter:_i,generateMipmaps:e,type:rn,colorSpace:$r,depthBuffer:t})}function Yo(i,e,t){return new Vt({name:i,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:Sn,blending:Zi,depthTest:!1,depthWrite:!1})}function $x(){return Yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jx(){return Yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Kx(){return Yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qd(){return Yo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yd(){return Yo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===xl||f===vl)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new qo(p.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===xl||f===vl,v=f===Bs||f===Tr;if(p||v){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return p&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===xl?u.mapping=Bs:f===vl&&(u.mapping=Tr),u}function l(u){let f=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function jx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function ev(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function d(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,M=m.count>=65535?io:no,y=new M(Math.ceil(x/3)*6,1),b=y.array;if(v!==null){let _=v.array;g=v.version;for(let S=0,L=0;S<x;S+=3){let w=_[S+0],I=_[S+1],D=_[S+2];b[L++]=w,b[L++]=I,b[L++]=I,b[L++]=D,b[L++]=D,b[L++]=w}}else{g=m.version;for(let _=0,S=0;_<x;_+=3){let L=_+0,w=_+1,I=_+2;b[S++]=L,b[S++]=w,b[S++]=w,b[S++]=I,b[S++]=I,b[S++]=L}}y.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,y)}function u(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function tv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function nv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function iv(i,e,t){let n=new WeakMap,s=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let L=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*b*4*d),_=new jr(E,y,b,d);_.type=ri,_.needsUpdate=!0;let S=M*4;for(let w=0;w<d;w++){let I=m[w],D=g[w],A=x[w],C=y*b*4*w;for(let U=0;U<I.count;U++){let B=U*S;f===!0&&(s.fromBufferAttribute(I,U),E[C+B+0]=s.x,E[C+B+1]=s.y,E[C+B+2]=s.z,E[C+B+3]=0),p===!0&&(s.fromBufferAttribute(D,U),E[C+B+4]=s.x,E[C+B+5]=s.y,E[C+B+6]=s.z,E[C+B+7]=0),v===!0&&(s.fromBufferAttribute(A,U),E[C+B+8]=s.x,E[C+B+9]=s.y,E[C+B+10]=s.z,E[C+B+11]=A.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new le(y,b)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function sv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var rv={[Po]:"LINEAR_TONE_MAPPING",[Io]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[Os]:"ACES_FILMIC_TONE_MAPPING",[No]:"AGX_TONE_MAPPING",[Uo]:"NEUTRAL_TONE_MAPPING",[Lo]:"CUSTOM_TONE_MAPPING"};function ov(i,e,t,n,s,r){let o=new Qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new lt;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let d=new yr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new At(h,d),f=new Ns(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,x=null,M=[],y=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){M=b,y=M.length>0&&M[0].isRenderPass===!0;let E=o.width,_=o.height;M.length>0&&a===null&&(a=new Qt(E,_,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(E,_,{type:rn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(L=>L.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new qi(E,_),r===!0&&(c.format=$i,c.type=zs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let L=0;L<M.length;L++){let w=M[L];w.setSize&&w.setSize(E,_),S&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Pi&&M.length===0)return!1;if(x=E,E!==null){let _=E.width,S=E.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Pi,!0},this.hasRenderPass=function(){return y},this.end=function(b,E){b.toneMapping=g,m=!0;let _=o,S=a;for(let L=0;L<M.length;L++){let w=M[L];w.enabled!==!1&&(w.render(b,S,_,E),w.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||v!==b.toneMapping){p=b.outputColorSpace,v=b.toneMapping,d.defines={},Mt.getTransfer(p)===Ot&&(d.defines.SRGB_TRANSFER="");let L=rv[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var gf=new Un,xf=new qi(1,1),vf=new ao(1),_f=new jr,yf=new $a,Mf=new oo,Zd=[],$d=[],Jd=new Float32Array(16),Kd=new Float32Array(9),Qd=new Float32Array(4);function Cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lc(i,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),un(t,n)}}function dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Kd.set(n),i.uniformMatrix3fv(this.addr,!1,Kd),un(t,n)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Jd.set(n),i.uniformMatrix4fv(this.addr,!1,Jd),un(t,n)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function cc(i){return i.version===0&&(i.compareFunction=Ph,i.needsUpdate=!0),i}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=cc(xf):r=gf,t.setTexture2D(e||r,s)}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yf,s)}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cc(vf):r=Mf,t.setTextureCube(e||r,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_f,s)}function wv(i){switch(i){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return dv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return _v;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}function Av(i,e){i.uniform1fv(this.addr,e)}function Rv(i,e){let t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Cv(i,e){let t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Pv(i,e){let t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Iv(i,e){let t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dv(i,e){let t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lv(i,e){let t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nv(i,e){i.uniform1iv(this.addr,e)}function Uv(i,e){i.uniform2iv(this.addr,e)}function Fv(i,e){i.uniform3iv(this.addr,e)}function Ov(i,e){i.uniform4iv(this.addr,e)}function Bv(i,e){i.uniform1uiv(this.addr,e)}function zv(i,e){i.uniform2uiv(this.addr,e)}function Hv(i,e){i.uniform3uiv(this.addr,e)}function Gv(i,e){i.uniform4uiv(this.addr,e)}function kv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=cc(xf):o=gf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Vv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yf,r[o])}function Wv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=cc(vf):o=Mf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Xv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_f,r[o])}function qv(i){switch(i){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Iv;case 35675:return Dv;case 35676:return Lv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}var $h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}},Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qv(t.type)}},Kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function jd(i,e){i.seq.push(e),i.map[e.id]=e}function Yv(i,e,t){let n=i.name,s=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),o=Yh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jd(t,c===void 0?new $h(a,i,e):new Jh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Kh(a),jd(t,d)),t=d}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Yv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Zv=37297,$v=0;function Jv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var tf=new dt;function Kv(i){Mt._getMatrix(tf,Mt.workingColorSpace,i);let e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case Jr:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jv(i.getShaderSource(e),a)}else return r}function Qv(i,e){let t=Kv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var jv={[Po]:"Linear",[Io]:"Reinhard",[Do]:"Cineon",[Os]:"ACESFilmic",[No]:"AgX",[Uo]:"Neutral",[Lo]:"Custom"};function e_(i,e){let t=jv[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new P;function t_(){Mt.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function i_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xo(i){return i!==""}function sf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(i){return i.replace(r_,o_)}function o_(i,e){let t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Qh(t)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace(a_,l_)}function l_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var c_={[Us]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function h_(i){return c_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u_={[Tr]:"ENVMAP_MODE_REFRACTION"};function d_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f_={[gl]:"ENVMAP_BLENDING_MULTIPLY",[Md]:"ENVMAP_BLENDING_MIX",[Sd]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=h_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d_(t),d=p_(t),u=n_(t),f=i_(r),p=s.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Xo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Xo).join(`
`),m.length>0&&(m+=`
`)):(v=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),m=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=Qh(o),o=sf(o,t),o=rf(o,t),a=Qh(a),a=sf(a,t),a=rf(a,t),o=of(o),a=of(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+v+o,M=g+m+a,y=ef(s,s.VERTEX_SHADER,x),b=ef(s,s.FRAGMENT_SHADER,M);s.attachShader(p,y),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(w){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",D=s.getShaderInfoLog(y)||"",A=s.getShaderInfoLog(b)||"",C=I.trim(),U=D.trim(),B=A.trim(),O=!0,W=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,b);else{let X=nf(s,y,"vertex"),Y=nf(s,b,"fragment");at("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+X+`
`+Y)}else C!==""?it("WebGLProgram: Program Info Log:",C):(U===""||B==="")&&(W=!1);W&&(w.diagnostics={runnable:O,programLog:C,vertexShader:{log:U,prefix:v},fragmentShader:{log:B,prefix:m}})}s.deleteShader(y),s.deleteShader(b),_=new Ar(s,p),S=s_(s,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,Zv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var g_=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eu(e),t.set(e,n)),n}},eu=class{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}};function x_(i){return i===ms||i===Go||i===ko}function v_(i,e,t,n,s,r){let o=new eo,a=new jh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,L,w,I,D){let A=w.fog,C=I.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||U,B),W=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&it("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Y=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,j=Y!==void 0?Y.length:0,Z=0;C.morphAttributes.position!==void 0&&(Z=1),C.morphAttributes.normal!==void 0&&(Z=2),C.morphAttributes.color!==void 0&&(Z=3);let ee,$,he,fe;if(W){let Pe=Di[W];ee=Pe.vertexShader,$=Pe.fragmentShader}else{ee=_.vertexShader,$=_.fragmentShader;let Pe=a.getVertexShaderStage(_),It=a.getFragmentShaderStage(_);a.update(_,Pe,It),he=Pe.id,fe=It.id}let re=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ee=I.isInstancedMesh===!0,Ye=I.isBatchedMesh===!0,De=!!_.map,$e=!!_.matcap,je=!!O,oe=je&&O.isPMREMTexture===!0,Se=!!_.aoMap,ye=!!_.lightMap,Ue=!!_.bumpMap&&_.wireframe===!1,xe=!!_.normalMap,et=!!_.displacementMap,He=!!_.emissiveMap,st=!!_.metalnessMap,rt=!!_.roughnessMap,vt=_.anisotropy>0,z=_.clearcoat>0,Ft=_.diffuseRoughness>0,ue=_.dispersion>0,Be=_.retroreflectivity>0,ae=_.iridescence>0,Ge=_.sheen>0,we=_.transmission>0,Fe=vt&&!!_.anisotropyMap,N=z&&!!_.clearcoatMap,T=z&&!!_.clearcoatNormalMap,q=z&&!!_.clearcoatRoughnessMap,pe=Ft&&!!_.diffuseRoughnessMap,se=ae&&!!_.iridescenceMap,ge=ae&&!!_.iridescenceThicknessMap,k=Ge&&!!_.sheenColorMap,G=Ge&&!!_.sheenRoughnessMap,J=!!_.specularMap,de=!!_.specularColorMap,F=!!_.specularIntensityMap,ie=we&&!!_.transmissionMap,ne=we&&!!_.thicknessMap,ve=!!_.gradientMap,_e=!!_.alphaMap,be=_.alphaTest>0,ze=!!_.alphaHash,ot=!!_.extensions,me=Pi;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(me=i.toneMapping);let Je=oe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ht={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:$,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Ye,batchingColor:Ye&&I._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&I.instanceColor!==null,instancingMorph:Ee&&I.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:$e,envMap:je,envMapMode:je&&O.mapping,envMapPMREM:oe,envMapMaxLod:oe?Je.length-1:null,envMapSize:oe?Je[0].width:null,aoMap:Se,lightMap:ye,bumpMap:Ue,normalMap:xe,displacementMap:et,emissiveMap:He,normalMapObjectSpace:xe&&_.normalMapType===Td,normalMapTangentSpace:xe&&_.normalMapType===Vo,packedNormalMap:xe&&_.normalMapType===Vo&&x_(_.normalMap.format),metalnessMap:st,roughnessMap:rt,anisotropy:vt,anisotropyMap:Fe,clearcoat:z,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:Ft,diffuseRoughnessMap:pe,dispersion:ue,retroreflection:Be,iridescence:ae,iridescenceMap:se,iridescenceThicknessMap:ge,sheen:Ge,sheenColorMap:k,sheenRoughnessMap:G,specularMap:J,specularColorMap:de,specularIntensityMap:F,transmission:we,transmissionMap:ie,thicknessMap:ne,gradientMap:ve,opaque:_.transparent===!1&&_.blending===Er&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:be,alphaHash:ze,combine:_.combine,mapUv:De&&f(_.map.channel),aoMapUv:Se&&f(_.aoMap.channel),lightMapUv:ye&&f(_.lightMap.channel),bumpMapUv:Ue&&f(_.bumpMap.channel),normalMapUv:xe&&f(_.normalMap.channel),displacementMapUv:et&&f(_.displacementMap.channel),emissiveMapUv:He&&f(_.emissiveMap.channel),metalnessMapUv:st&&f(_.metalnessMap.channel),roughnessMapUv:rt&&f(_.roughnessMap.channel),anisotropyMapUv:Fe&&f(_.anisotropyMap.channel),clearcoatMapUv:N&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:k&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:de&&f(_.specularColorMap.channel),specularIntensityMapUv:F&&f(_.specularIntensityMap.channel),transmissionMapUv:ie&&f(_.transmissionMap.channel),thicknessMapUv:ne&&f(_.thicknessMap.channel),alphaMapUv:_e&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xe||vt),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(De||_e),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&Mt.getTransfer(_.map.colorSpace)===Ot,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(_.emissiveMap.colorSpace)===Ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ut,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let S=u[_.type],L;if(S){let w=Di[S];L=On.clone(w.uniforms)}else L=_.uniforms;return L}function M(_,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new m_(i,S,_,s),c.push(L),h.set(S,L)),L}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:E}}function __(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,v,m,g){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},i[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=p,x.materialVariant=o(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=g),e++,x}function l(u,f,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let M=a(u,f,p,v,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(u,f,p,v,m,g){let x=a(u,f,p,v,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||y_),n.length>1&&n.sort(f||lf),s.length>1&&s.sort(f||lf)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function M_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new cf,i.set(n,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function S_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function b_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var E_=0;function T_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function w_(i){let e=new S_,t=b_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Qe,o=new Qe;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,M=0,y=0,b=0,E=0,_=0,S=0,L=0,w=0;c.sort(T_);for(let D=0,A=c.length;D<A;D++){let C=c[D],U=C.color,B=C.intensity,O=C.distance,W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ms?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*B,d+=U.g*B,u+=U.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],B);w++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=W;let Z=Y.getViewportCount();for(let ee=0;ee<Z;ee++)n.sunShadowMatrix[v+ee]=Y.getMatrix(ee),n.sunShadowCascade[v+ee]=Y._cascadeData[ee];v+=Z,p++}n.sun[f]=X,f++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=X,m++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(U).multiplyScalar(B),X.distance=O,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[x]=X;let Y=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,Y.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[x]=Y.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=W,_++}x++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=X,M++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let Y=C.shadow,j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=X,g++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[y]=X,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==M||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==_||I.numSpotMaps!==S||I.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=w,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=M,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=_,I.numSpotMaps=S,I.numLightProbes=w,n.version=E_++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let y=c[x];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function hf(i){let e=new w_(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new hf(i),e.set(s,[a])):r>=o.length?(a=new hf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],I_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],uf=new Qe,Wo=new P,Zh=new P;function D_(i,e,t){let n=new as,s=new le,r=new le,o=new Bt,a=new Ls,l=new nl,c={},h=t.maxTextureSize,d={[ps]:Sn,[Sn]:ps,[Ut]:Ut},u=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new lt;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new At(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let g=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nd&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let L=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Zi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let A=g!==this.type;A&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=E.length;C<U;C++){let B=E[C],O=B.shadow;if(O===void 0){it("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let W=O.getFrameExtents();s.multiply(W),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,O.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||A===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===br){if(B.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Qt(s.x,s.y,{format:ms,type:rn,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new qi(s.x,s.y,ri),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Wi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn}else B.isPointLight?(O.map=new qo(s.x),O.map.depthTexture=new ao(s.x,yi)):(O.map=new Qt(s.x,s.y),O.map.depthTexture=new qi(s.x,s.y,yi)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Wi,this.type===Us?(O.map.depthTexture.compareFunction=X?Ch:Rh,O.map.depthTexture.minFilter=Mn,O.map.depthTexture.magFilter=Mn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let Y=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();B.isPointLight!==!0&&O.updateMatrices(B,S);let j=O.camera.layers.mask&4294967294?O.camera.layers:S.layers;for(let Z=0;Z<Y;Z++){let ee=O.getCamera(Z);if(B.isPointLight){let $=O.camera,he=O.matrix,fe=B.distance||$.far;fe!==$.far&&($.far=fe,$.updateProjectionMatrix()),Wo.setFromMatrixPosition(B.matrixWorld),$.position.copy(Wo),Zh.copy($.position),Zh.add(P_[Z]),$.up.copy(I_[Z]),$.lookAt(Zh),$.updateMatrixWorld(),he.makeTranslation(-Wo.x,-Wo.y,-Wo.z),uf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(uf,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(O.map),i.clear());let $=O.getViewport(Z);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),D.viewport(o)}n=O.getFrustum(Z),y(_,S,ee,B,j,this.type)}O.isPointLightShadow!==!0&&this.type===br&&x(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,w,I)};function x(E,_){let S=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Qt(s.x,s.y,{format:ms,type:rn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,S,f,v,null)}function M(E,_,S,L){let w=null,I=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)w=I;else if(w=S.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=w.uuid,A=_.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let U=C[A];U===void 0&&(U=w.clone(),C[A]=U,_.addEventListener("dispose",b)),w=U}if(w.visible=_.visible,w.wireframe=_.wireframe,L===br?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:d[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let D=i.properties.get(w);D.light=S}return w}function y(E,_,S,L,w,I){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===br)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let C=e.update(E),U=E.material;if(Array.isArray(U)){let B=C.groups;for(let O=0,W=B.length;O<W;O++){let X=B[O],Y=U[X.materialIndex];if(Y&&Y.visible){let j=M(E,Y,L,I);E.onBeforeShadow(i,E,_,S,C,j,X),i.renderBufferDirect(S,null,C,j,E,X),E.onAfterShadow(i,E,_,S,C,j,X)}}}else if(U.visible){let B=M(E,U,L,I);E.onBeforeShadow(i,E,_,S,C,B,null),i.renderBufferDirect(S,null,C,B,E,null),E.onAfterShadow(i,E,_,S,C,B,null)}}let A=E.children;for(let C=0,U=A.length;C<U;C++)y(A[C],_,S,L,w,I)}function b(E){E.target.removeEventListener("dispose",b);for(let S in c){let L=c[S],w=E.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}function L_(i,e){function t(){let F=!1,ie=new Bt,ne=null,ve=new Bt(0,0,0,0);return{setMask:function(_e){ne!==_e&&!F&&(i.colorMask(_e,_e,_e,_e),ne=_e)},setLocked:function(_e){F=_e},setClear:function(_e,be,ze,ot,me){me===!0&&(_e*=ot,be*=ot,ze*=ot),ie.set(_e,be,ze,ot),ve.equals(ie)===!1&&(i.clearColor(_e,be,ze,ot),ve.copy(ie))},reset:function(){F=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,ie=!1,ne=null,ve=null,_e=null;return{setReversed:function(be){if(ie!==be){let ze=e.get("EXT_clip_control");be?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ie=be;let ot=_e;_e=null,this.setClear(ot)}},getReversed:function(){return ie},setTest:function(be){be?ce(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(be){ne!==be&&!F&&(i.depthMask(be),ne=be)},setFunc:function(be){if(ie&&(be=Ud[be]),ve!==be){switch(be){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ga:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=be}},setLocked:function(be){F=be},setClear:function(be){_e!==be&&(_e=be,ie&&(be=1-be),i.clearDepth(be))},reset:function(){F=!1,ne=null,ve=null,_e=null,ie=!1}}}function s(){let F=!1,ie=null,ne=null,ve=null,_e=null,be=null,ze=null,ot=null,me=null;return{setTest:function(Je){F||(Je?ce(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!F&&(i.stencilMask(Je),ie=Je)},setFunc:function(Je,ht,Pe){(ne!==Je||ve!==ht||_e!==Pe)&&(i.stencilFunc(Je,ht,Pe),ne=Je,ve=ht,_e=Pe)},setOp:function(Je,ht,Pe){(be!==Je||ze!==ht||ot!==Pe)&&(i.stencilOp(Je,ht,Pe),be=Je,ze=ht,ot=Pe)},setLocked:function(Je){F=Je},setClear:function(Je){me!==Je&&(i.clearStencil(Je),me=Je)},reset:function(){F=!1,ie=null,ne=null,ve=null,_e=null,be=null,ze=null,ot=null,me=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,M=null,y=null,b=null,E=null,_=null,S=new Me(0,0,0),L=0,w=!1,I=null,D=null,A=null,C=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,W=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=W>=2);let Y=null,j={},Z=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),$=new Bt().fromArray(Z),he=new Bt().fromArray(ee);function fe(F,ie,ne,ve){let _e=new Uint8Array(4),be=i.createTexture();i.bindTexture(F,be),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ne;ze++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ie+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return be}let re={};re[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(hr),Ue(!1),xe(gh),ce(i.CULL_FACE),Se(Zi);function ce(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ee(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ye(F,ie){return u[F]!==ie?(i.bindFramebuffer(F,ie),u[F]=ie,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(F,ie){let ne=p,ve=!1;if(F){ne=f.get(ie),ne===void 0&&(ne=[],f.set(ie,ne));let _e=F.textures;if(ne.length!==_e.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let be=0,ze=_e.length;be<ze;be++)ne[be]=i.COLOR_ATTACHMENT0+be;ne.length=_e.length,ve=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ne)}function $e(F){return v!==F?(i.useProgram(F),v=F,!0):!1}let je={[Fs]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};je[od]=i.MIN,je[ad]=i.MAX;let oe={[ld]:i.ZERO,[cd]:i.ONE,[hd]:i.SRC_COLOR,[_h]:i.SRC_ALPHA,[gd]:i.SRC_ALPHA_SATURATE,[pd]:i.DST_COLOR,[dd]:i.DST_ALPHA,[ud]:i.ONE_MINUS_SRC_COLOR,[yh]:i.ONE_MINUS_SRC_ALPHA,[md]:i.ONE_MINUS_DST_COLOR,[fd]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[_d]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(F,ie,ne,ve,_e,be,ze,ot,me,Je){if(F===Zi){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ce(i.BLEND),m=!0),F!==id){if(F!==g||Je!==w){if((x!==Fs||b!==Fs)&&(i.blendEquation(i.FUNC_ADD),x=Fs,b=Fs),Je)switch(F){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",F);break}else switch(F){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",F);break}M=null,y=null,E=null,_=null,S.set(0,0,0),L=0,g=F,w=Je}return}_e=_e||ie,be=be||ne,ze=ze||ve,(ie!==x||_e!==b)&&(i.blendEquationSeparate(je[ie],je[_e]),x=ie,b=_e),(ne!==M||ve!==y||be!==E||ze!==_)&&(i.blendFuncSeparate(oe[ne],oe[ve],oe[be],oe[ze]),M=ne,y=ve,E=be,_=ze),(ot.equals(S)===!1||me!==L)&&(i.blendColor(ot.r,ot.g,ot.b,me),S.copy(ot),L=me),g=F,w=!1}function ye(F,ie){F.side===Ut?Ee(i.CULL_FACE):ce(i.CULL_FACE);let ne=F.side===Sn;ie&&(ne=!ne),Ue(ne),F.blending===Er&&F.transparent===!1?Se(Zi):Se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ve=F.stencilWrite;a.setTest(ve),ve&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),He(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function xe(F){F!==ed?(ce(i.CULL_FACE),F!==D&&(F===gh?i.cullFace(i.BACK):F===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),D=F}function et(F){F!==A&&(O&&i.lineWidth(F),A=F)}function He(F,ie,ne){F?(ce(i.POLYGON_OFFSET_FILL),(C!==ie||U!==ne)&&(C=ie,U=ne,o.getReversed()&&(ie=-ie,ne=-ne),i.polygonOffset(ie,ne))):Ee(i.POLYGON_OFFSET_FILL)}function st(F){F?ce(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function rt(F){F===void 0&&(F=i.TEXTURE0+B-1),Y!==F&&(i.activeTexture(F),Y=F)}function vt(F,ie,ne){ne===void 0&&(Y===null?ne=i.TEXTURE0+B-1:ne=Y);let ve=j[ne];ve===void 0&&(ve={type:void 0,texture:void 0},j[ne]=ve),(ve.type!==F||ve.texture!==ie)&&(Y!==ne&&(i.activeTexture(ne),Y=ne),i.bindTexture(F,ie||re[F]),ve.type=F,ve.texture=ie)}function z(){let F=j[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function Be(){try{i.texSubImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function ae(){try{i.texSubImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function Ge(){try{i.compressedTexSubImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function Fe(){try{i.texStorage2D(...arguments)}catch(F){at("WebGLState:",F)}}function N(){try{i.texStorage3D(...arguments)}catch(F){at("WebGLState:",F)}}function T(){try{i.texImage2D(...arguments)}catch(F){at("WebGLState:",F)}}function q(){try{i.texImage3D(...arguments)}catch(F){at("WebGLState:",F)}}function pe(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function se(F,ie){d[F]!==ie&&(i.pixelStorei(F,ie),d[F]=ie)}function ge(F){$.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),$.copy(F))}function k(F){he.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function G(F,ie){let ne=c.get(ie);ne===void 0&&(ne=new WeakMap,c.set(ie,ne));let ve=ne.get(F);ve===void 0&&(ve=i.getUniformBlockIndex(ie,F.name),i.uniformBlockBinding(ie,ve,ve),ne.set(F,ve))}function J(F,ie,ne){let _e=c.get(ie).get(F);l[_e]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,_e,ne),l[_e]=ne)}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,j={},u={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,M=null,y=null,b=null,E=null,_=null,S=new Me(0,0,0),L=0,w=!1,I=null,D=null,A=null,C=null,U=null,$.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ee,bindFramebuffer:Ye,drawBuffers:De,useProgram:$e,setBlending:Se,setMaterial:ye,setFlipSided:Ue,setCullFace:xe,setLineWidth:et,setPolygonOffset:He,setScissorTest:st,activeTexture:rt,bindTexture:vt,unbindTexture:z,compressedTexImage2D:Ft,compressedTexImage3D:ue,texImage2D:T,texImage3D:q,pixelStorei:se,getParameter:pe,updateUBOMapping:G,uniformBlockBinding:J,texStorage2D:Fe,texStorage3D:N,texSubImage2D:Be,texSubImage3D:ae,compressedTexSubImage2D:Ge,compressedTexSubImage3D:we,scissor:ge,viewport:k,reset:de}}function N_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,v=new FinalizationRegistry(N=>p.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,T){return m?new OffscreenCanvas(N,T):Kr("canvas")}function x(N,T,q){let pe=1,se=Fe(N);if((se.width>q||se.height>q)&&(pe=q/Math.max(se.width,se.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ge=Math.floor(pe*se.width),k=Math.floor(pe*se.height);u===void 0&&(u=g(ge,k));let G=T?g(ge,k):u;return G.width=ge,G.height=k,G.getContext("2d").drawImage(N,0,0,ge,k),it("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ge+"x"+k+")."),G}else return"data"in N&&it("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,T,q,pe,se,ge=!1){if(N!==null){if(i[N]!==void 0)return i[N];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let k;pe&&(k=e.get("EXT_texture_norm16"),k||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=T;if(T===i.RED&&(q===i.FLOAT&&(G=i.R32F),q===i.HALF_FLOAT&&(G=i.R16F),q===i.UNSIGNED_BYTE&&(G=i.R8),q===i.UNSIGNED_SHORT&&k&&(G=k.R16_EXT),q===i.SHORT&&k&&(G=k.R16_SNORM_EXT)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(G=i.R8UI),q===i.UNSIGNED_SHORT&&(G=i.R16UI),q===i.UNSIGNED_INT&&(G=i.R32UI),q===i.BYTE&&(G=i.R8I),q===i.SHORT&&(G=i.R16I),q===i.INT&&(G=i.R32I)),T===i.RG&&(q===i.FLOAT&&(G=i.RG32F),q===i.HALF_FLOAT&&(G=i.RG16F),q===i.UNSIGNED_BYTE&&(G=i.RG8),q===i.UNSIGNED_SHORT&&k&&(G=k.RG16_EXT),q===i.SHORT&&k&&(G=k.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(G=i.RG8UI),q===i.UNSIGNED_SHORT&&(G=i.RG16UI),q===i.UNSIGNED_INT&&(G=i.RG32UI),q===i.BYTE&&(G=i.RG8I),q===i.SHORT&&(G=i.RG16I),q===i.INT&&(G=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(G=i.RGB8UI),q===i.UNSIGNED_SHORT&&(G=i.RGB16UI),q===i.UNSIGNED_INT&&(G=i.RGB32UI),q===i.BYTE&&(G=i.RGB8I),q===i.SHORT&&(G=i.RGB16I),q===i.INT&&(G=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),q===i.UNSIGNED_INT&&(G=i.RGBA32UI),q===i.BYTE&&(G=i.RGBA8I),q===i.SHORT&&(G=i.RGBA16I),q===i.INT&&(G=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_SHORT&&k&&(G=k.RGB16_EXT),q===i.SHORT&&k&&(G=k.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),T===i.RGBA){let J=ge?Jr:Mt.getTransfer(se);q===i.FLOAT&&(G=i.RGBA32F),q===i.HALF_FLOAT&&(G=i.RGBA16F),q===i.UNSIGNED_BYTE&&(G=J===Ot?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&k&&(G=k.RGBA16_EXT),q===i.SHORT&&k&&(G=k.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(N,T){let q;return N?T===null||T===yi||T===zs?q=i.DEPTH24_STENCIL8:T===ri?q=i.DEPTH32F_STENCIL8:T===wr&&(q=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yi||T===zs?q=i.DEPTH_COMPONENT24:T===ri?q=i.DEPTH_COMPONENT32F:T===wr&&(q=i.DEPTH_COMPONENT16),q}function S(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==Mn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function L(N){let T=new WeakRef(N);n.get(N).__ref=T,p.add(T),v.register(N,T,T)}function w(N){let T=n.get(N).__ref;T!==void 0&&(p.delete(T),v.unregister(T))}function I(N){A(N.target)}function D(N){C(N.target)}function A(N){N.removeEventListener("dispose",I),w(N),B(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&d.delete(N)}function C(N){N.removeEventListener("dispose",D),w(N),W(N)}function U(){for(let N of p){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):A(T))}p.clear(),d.clear()}function B(N){let T=n.get(N);if(T.__webglInit===void 0)return;let q=N.source,pe=f.get(q);if(pe){let se=pe[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(N),Object.keys(pe).length===0&&f.delete(q)}n.remove(N)}function O(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let q=N.source,pe=f.get(q);delete pe[T.__cacheKey],o.memory.textures--}function W(N){let T=n.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=N.depthTexture;if(q&&q.renderTarget===N&&A(q),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(T.__webglFramebuffer[se]))for(let ge=0;ge<T.__webglFramebuffer[se].length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[se][ge]);else i.deleteFramebuffer(T.__webglFramebuffer[se]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[se])}else{if(Array.isArray(T.__webglFramebuffer))for(let se=0;se<T.__webglFramebuffer.length;se++)i.deleteFramebuffer(T.__webglFramebuffer[se]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let se=0;se<T.__webglColorRenderbuffer.length;se++)T.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[se]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let pe=N.textures;for(let se=0,ge=pe.length;se<ge;se++){let k=n.get(pe[se]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(pe[se])}n.remove(N)}let X=0;function Y(){X=0}function j(){return X}function Z(N){X=N}function ee(){let N=X;return N>=s.maxTextures&&it("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,N}function $(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function he(N,T){let q=n.get(N);if(N.isVideoTexture&&Ge(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let pe=N.image;if(pe===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(q,N,T);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function fe(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){ye(q,N,T);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function re(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){ye(q,N,T);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function ce(N,T){let q=n.get(N);if(N.version>0&&q.__version!==N.version){Ue(q,N,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let Ee={[Vi]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},Ye={[xn]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[Fo]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},De={[Ad]:i.NEVER,[Ph]:i.ALWAYS,[Rd]:i.LESS,[Rh]:i.LEQUAL,[Cd]:i.EQUAL,[Ch]:i.GEQUAL,[Pd]:i.GREATER,[Id]:i.NOTEQUAL};function $e(N,T){if(T.type===ri&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mn||T.magFilter===_l||T.magFilter===Fo||T.magFilter===_i||T.minFilter===Mn||T.minFilter===_l||T.minFilter===Fo||T.minFilter===_i)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Ee[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Ee[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Ee[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Ye[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Ye[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,De[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==Fo&&T.minFilter!==_i||T.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function je(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I),L(T));let pe=T.source,se=f.get(pe);se===void 0&&(se={},f.set(pe,se));let ge=$(T);if(ge!==N.__cacheKey){se[ge]===void 0&&(se[ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[ge].usedTimes++;let k=se[N.__cacheKey];k!==void 0&&(se[N.__cacheKey].usedTimes--,k.usedTimes===0&&O(T)),N.__cacheKey=ge,N.__webglTexture=se[ge].texture}return q}function oe(N,T,q){return Math.floor(Math.floor(N/q)/T)}function Se(N,T,q,pe){let ge=N.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,pe,T.data);else{ge.sort((F,ie)=>F.start-ie.start);let k=0;for(let F=1;F<ge.length;F++){let ie=ge[k],ne=ge[F],ve=ie.start+ie.count,_e=oe(ne.start,T.width,4),be=oe(ie.start,T.width,4);ne.start<=ve+1&&_e===be&&oe(ne.start+ne.count-1,T.width,4)===_e?ie.count=Math.max(ie.count,ne.start+ne.count-ie.start):(++k,ge[k]=ne)}ge.length=k+1;let G=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let F=0,ie=ge.length;F<ie;F++){let ne=ge[F],ve=Math.floor(ne.start/4),_e=Math.ceil(ne.count/4),be=ve%T.width,ze=Math.floor(ve/T.width),ot=_e,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,be,ze,ot,me,q,pe,T.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,G),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ye(N,T,q){let pe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=i.TEXTURE_3D);let se=je(N,T),ge=T.source;t.bindTexture(pe,N.__webglTexture,i.TEXTURE0+q);let k=n.get(ge);if(ge.version!==k.__version||se===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let me=Mt.getPrimaries(Mt.workingColorSpace),Je=T.colorSpace===jn?null:Mt.getPrimaries(T.colorSpace),ht=T.colorSpace===jn||me===Je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let J=x(T.image,!1,s.maxTextureSize);J=we(T,J);let de=r.convert(T.format,T.colorSpace),F=r.convert(T.type),ie=E(T.internalFormat,de,F,T.normalized,T.colorSpace,T.isVideoTexture);$e(pe,T);let ne,ve=T.mipmaps,_e=T.isVideoTexture!==!0,be=k.__version===void 0||se===!0,ze=ge.dataReady,ot=S(T,J);if(T.isDepthTexture)ie=_(T.format===$i,T.type),be&&(_e?t.texStorage2D(i.TEXTURE_2D,1,ie,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ie,J.width,J.height,0,de,F,null));else if(T.isDataTexture)if(ve.length>0){_e&&be&&t.texStorage2D(i.TEXTURE_2D,ot,ie,ve[0].width,ve[0].height);for(let me=0,Je=ve.length;me<Je;me++)ne=ve[me],_e?ze&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ne.width,ne.height,de,F,ne.data):t.texImage2D(i.TEXTURE_2D,me,ie,ne.width,ne.height,0,de,F,ne.data);T.generateMipmaps=!1}else _e?(be&&t.texStorage2D(i.TEXTURE_2D,ot,ie,J.width,J.height),ze&&Se(T,J,de,F)):t.texImage2D(i.TEXTURE_2D,0,ie,J.width,J.height,0,de,F,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_e&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ie,ve[0].width,ve[0].height,J.depth);for(let me=0,Je=ve.length;me<Je;me++)if(ne=ve[me],T.format!==Qn)if(de!==null)if(_e){if(ze)if(T.layerUpdates.size>0){let ht=Gh(ne.width,ne.height,T.format,T.type);for(let Pe of T.layerUpdates){let It=ne.data.subarray(Pe*ht/ne.data.BYTES_PER_ELEMENT,(Pe+1)*ht/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Pe,ne.width,ne.height,1,de,It)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,J.depth,de,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ie,ne.width,ne.height,J.depth,0,ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,J.depth,de,F,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ie,ne.width,ne.height,J.depth,0,de,F,ne.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_e&&be&&t.texStorage2D(i.TEXTURE_2D,ot,ie,ve[0].width,ve[0].height);for(let me=0,Je=ve.length;me<Je;me++)ne=ve[me],T.format!==Qn?de!==null?_e?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,ne.width,ne.height,de,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ie,ne.width,ne.height,0,ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?ze&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ne.width,ne.height,de,F,ne.data):t.texImage2D(i.TEXTURE_2D,me,ie,ne.width,ne.height,0,de,F,ne.data)}else if(T.isDataArrayTexture)if(_e){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ie,J.width,J.height,J.depth),ze)if(T.layerUpdates.size>0){let me=Gh(J.width,J.height,T.format,T.type);for(let Je of T.layerUpdates){let ht=J.data.subarray(Je*me/J.data.BYTES_PER_ELEMENT,(Je+1)*me/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Je,J.width,J.height,1,de,F,ht)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,F,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,J.width,J.height,J.depth,0,de,F,J.data);else if(T.isData3DTexture)_e?(be&&t.texStorage3D(i.TEXTURE_3D,ot,ie,J.width,J.height,J.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,F,J.data)):t.texImage3D(i.TEXTURE_3D,0,ie,J.width,J.height,J.depth,0,de,F,J.data);else if(T.isFramebufferTexture){if(be)if(_e)t.texStorage2D(i.TEXTURE_2D,ot,ie,J.width,J.height);else{let me=J.width,Je=J.height;for(let ht=0;ht<ot;ht++)t.texImage2D(i.TEXTURE_2D,ht,ie,me,Je,0,de,F,null),me>>=1,Je>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),J.parentNode!==me){me.appendChild(J),d.add(T),me.onpaint=Je=>{let ht=Je.changedElements;for(let Pe of d)ht.includes(Pe.image)&&(Pe.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let ht=i.RGBA,Pe=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ht,Pe,It,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ve.length>0){if(_e&&be){let me=Fe(ve[0]);t.texStorage2D(i.TEXTURE_2D,ot,ie,me.width,me.height)}for(let me=0,Je=ve.length;me<Je;me++)ne=ve[me],_e?ze&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,de,F,ne):t.texImage2D(i.TEXTURE_2D,me,ie,de,F,ne);T.generateMipmaps=!1}else if(_e){if(be){let me=Fe(J);t.texStorage2D(i.TEXTURE_2D,ot,ie,me.width,me.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,F,J)}else t.texImage2D(i.TEXTURE_2D,0,ie,de,F,J);M(T)&&T.mipmapsAutoUpdate===!0&&y(pe),k.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ue(N,T,q){if(T.image.length!==6)return;let pe=je(N,T),se=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let ge=n.get(se);if(se.version!==ge.__version||pe===!0){t.activeTexture(i.TEXTURE0+q);let k=Mt.getPrimaries(Mt.workingColorSpace),G=T.colorSpace===jn?null:Mt.getPrimaries(T.colorSpace),J=T.colorSpace===jn||k===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let de=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,ie=[];for(let Pe=0;Pe<6;Pe++)!de&&!F?ie[Pe]=x(T.image[Pe],!0,s.maxCubemapSize):ie[Pe]=F?T.image[Pe].image:T.image[Pe],ie[Pe]=we(T,ie[Pe]);let ne=ie[0],ve=r.convert(T.format,T.colorSpace),_e=r.convert(T.type),be=E(T.internalFormat,ve,_e,T.normalized,T.colorSpace),ze=T.isVideoTexture!==!0,ot=ge.__version===void 0||pe===!0,me=se.dataReady,Je=S(T,ne);$e(i.TEXTURE_CUBE_MAP,T);let ht;if(T.isDepthTexture){if(be=_(T.format===$i,T.type),ot)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,be,ne.width,ne.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,ne.width,ne.height,0,ve,_e,null)}else if(de){ze&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,be,ne.width,ne.height);for(let Pe=0;Pe<6;Pe++){ht=ie[Pe].mipmaps;for(let It=0;It<ht.length;It++){let Le=ht[It];T.format!==Qn?ve!==null?ze?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It,be,Le.width,Le.height,0,Le.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It,0,0,Le.width,Le.height,ve,_e,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It,be,Le.width,Le.height,0,ve,_e,Le.data)}}}else{if(ht=T.mipmaps,ze&&ot){ht.length>0&&Je++;let Pe=Fe(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,be,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(F){ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ie[Pe].width,ie[Pe].height,ve,_e,ie[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,ie[Pe].width,ie[Pe].height,0,ve,_e,ie[Pe].data);for(let It=0;It<ht.length;It++){let Ne=ht[It].image[Pe].image;ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It+1,0,0,Ne.width,Ne.height,ve,_e,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It+1,be,Ne.width,Ne.height,0,ve,_e,Ne.data)}}else{ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ve,_e,ie[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,ve,_e,ie[Pe]);for(let It=0;It<ht.length;It++){let Le=ht[It];ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It+1,0,0,ve,_e,Le.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,It+1,be,ve,_e,Le.image[Pe])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ge.__version=se.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function xe(N,T,q,pe,se,ge){let k=r.convert(q.format,q.colorSpace),G=r.convert(q.type),J=E(q.internalFormat,k,G,q.normalized,q.colorSpace),de=n.get(T),F=n.get(q);if(F.__renderTarget=T,!de.__hasExternalTextures){let ie=Math.max(1,T.width>>ge),ne=Math.max(1,T.height>>ge);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ge,J,ie,ne,T.depth,0,k,G,null):t.texImage2D(se,ge,J,ie,ne,0,k,G,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ae(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,se,F.__webglTexture,0,Be(T)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,se,F.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(N,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let pe=T.depthTexture,se=pe&&pe.isDepthTexture?pe.type:null,ge=_(T.stencilBuffer,se),k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(T),ge,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(T),ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,N)}else{let pe=T.textures;for(let se=0;se<pe.length;se++){let ge=pe[se],k=r.convert(ge.format,ge.colorSpace),G=r.convert(ge.type),J=E(ge.internalFormat,k,G,ge.normalized,ge.colorSpace);ae(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(T),J,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(T),J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(N,T,q){let pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(T.depthTexture);se.__renderTarget=T;let ge=pe?T.depthTexture.image[0]:T.depthTexture.image;(!se.__webglTexture||ge.width!==T.width||ge.height!==T.height)&&(ge.width=T.width,ge.height=T.height,T.depthTexture.needsUpdate=!0),pe?ce(T.depthTexture,0):he(T.depthTexture,0);let k=se.__webglTexture,G=Be(T),J=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,de=T.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wi)ae(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,k,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,k,0);else if(T.depthTexture.format===$i)ae(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,J,k,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,de,J,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(N){let T=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let pe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){let se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",se)};pe.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=pe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)He(T.__webglFramebuffer[pe],N,pe);else N.texture.mipmaps.length>0?He(T.__webglFramebuffer[0],N,0):He(T.__webglFramebuffer,N,0);else if(q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=i.createRenderbuffer(),et(T.__webglDepthbuffer[pe],N,!1);else{let se=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ge)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),et(T.__webglDepthbuffer,N,!1);else{let se=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(N,T,q){let pe=n.get(N);T!==void 0&&xe(pe.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&st(N)}function vt(N){let T=N.texture,q=n.get(N),pe=n.get(T);N.addEventListener("dispose",D),L(N);let se=N.textures,ge=N.isWebGLCubeRenderTarget===!0,k=se.length>1;if(k||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=T.version,o.memory.textures++),ge){q.__webglFramebuffer=[];for(let G=0;G<6;G++)if(T.mipmaps.length>0){q.__webglFramebuffer[G]=[];for(let J=0;J<T.mipmaps.length;J++)q.__webglFramebuffer[G][J]=i.createFramebuffer()}else q.__webglFramebuffer[G]=i.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let G=0;G<T.mipmaps.length;G++)q.__webglFramebuffer[G]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(k)for(let G=0,J=se.length;G<J;G++){let de=n.get(se[G]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ae(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let G=0;G<se.length;G++){let J=se[G];q.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[G]);let de=r.convert(J.format,J.colorSpace),F=r.convert(J.type),ie=E(J.internalFormat,de,F,J.normalized,J.colorSpace,N.isXRRenderTarget===!0),ne=Be(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ie,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,q.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),et(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),$e(i.TEXTURE_CUBE_MAP,T);for(let G=0;G<6;G++)if(T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)xe(q.__webglFramebuffer[G][J],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J);else xe(q.__webglFramebuffer[G],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);M(T)?y(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(k){for(let G=0,J=se.length;G<J;G++){let de=se[G],F=n.get(de),ie=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,F.__webglTexture),$e(ie,de),xe(q.__webglFramebuffer,N,de,i.COLOR_ATTACHMENT0+G,ie,0),M(de)&&y(ie)}t.unbindTexture()}else{let G=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(G=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(G,pe.__webglTexture),$e(G,T),T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)xe(q.__webglFramebuffer[J],N,T,i.COLOR_ATTACHMENT0,G,J);else xe(q.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,G,0);M(T)?y(G):T.mipmaps.length>0&&i.texParameteri(G,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&st(N)}function z(N){let T=N.textures;for(let q=0,pe=T.length;q<pe;q++){let se=T[q];if(M(se)&&se.mipmapsAutoUpdate===!0){let ge=b(N),k=n.get(se).__webglTexture;t.bindTexture(ge,k),y(ge),t.unbindTexture()}}}let Ft=[];function ue(N){if(N.samples>0){if(ae(N)===!1){let T=N.textures,q=N.width,pe=N.height,se=i.COLOR_BUFFER_BIT,ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(N),G=T.length>1;if(G)for(let de=0;de<T.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let de=0;de<T.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[de]);let F=n.get(T[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,q,pe,0,0,q,pe,se,i.NEAREST),l===!0&&(Ft.length=0,Ft.push(i.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ft.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let de=0;de<T.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,k.__webglColorRenderbuffer[de]);let F=n.get(T[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Be(N){return Math.min(s.maxSamples,N.samples)}function ae(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ge(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function we(N,T){let q=N.colorSpace,pe=N.format,se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==$r&&q!==jn&&(Mt.getTransfer(q)===Ot?(pe!==Qn||se!==Gn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",q)),T}function Fe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=Y,this.getTextureUnits=j,this.setTextureUnits=Z,this.setTexture2D=he,this.setTexture2DArray=fe,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=rt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ae,this.dispose=U}function U_(i,e){function t(n,s=jn){let r,o=Mt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sh)return i.BYTE;if(n===bh)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Ah)return i.RGB;if(n===Qn)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===El)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===Oo||n===Bo||n===zo||n===Ho)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===Go||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Dl)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return r.COMPRESSED_R11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Go)return r.COMPRESSED_RG11_EAC;if(n===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===Bl||n===zl||n===Hl||n===Gl||n===kl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ol)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Ql||n===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kl)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===tc||n===ko||n===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new tu,g={},x=t.getContextAttributes(),M=null,y=null,b=[],E=[],_=new le,S=null,L=null,w=new Rn;w.viewport=new Bt;let I=new Rn;I.viewport=new Bt;let D=[w,I],A=new fl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=b[$];return he===void 0&&(he=new mr,b[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=b[$];return he===void 0&&(he=new mr,b[$]=he),he.getGripSpace()},this.getHand=function($){let he=b[$];return he===void 0&&(he=new mr,b[$]=he),he.getHandSpace()};function B($){let he=E.indexOf($.inputSource);if(he===-1)return;let fe=b[he];fe!==void 0&&(fe.update($.inputSource,$.frame,c||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let $=0;$<b.length;$++){let he=E[$];he!==null&&(E[$]=null,b[$].disconnect(he))}C=null,U=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,y=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),L!==null){let $=L.camera;$.fov=L.fov,$.zoom=L.zoom,$.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,re=null,ce=null;x.depth&&(ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?$i:Wi,re=x.stencil?zs:yi);let Ee={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ee),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Qt(u.textureWidth,u.textureHeight,{format:Qn,type:Gn,depthTexture:new qi(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Qt(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W($){for(let he=0;he<$.removed.length;he++){let fe=$.removed[he],re=E.indexOf(fe);re>=0&&(E[re]=null,b[re].disconnect(fe))}for(let he=0;he<$.added.length;he++){let fe=$.added[he],re=E.indexOf(fe);if(re===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=E.length){E.push(fe),re=Ee;break}else if(E[Ee]===null){E[Ee]=fe,re=Ee;break}if(re===-1)break}let ce=b[re];ce&&ce.connect(fe)}}function X($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),A.near=I.near=w.near=he,A.far=I.far=w.far=fe,(C!==A.near||U!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,U=A.far),A.layers.mask=$.layers.mask|6,w.layers.mask=A.layers.mask&-5,I.layers.mask=A.layers.mask&-3;let re=$.parent,ce=A.cameras;X(A,re);for(let Ee=0;Ee<ce.length;Ee++)X(ce[Ee],re);A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),L===null&&$.isPerspectiveCamera&&(L={camera:$,fov:$.fov,zoom:$.zoom}),Y($,A,re)};function Y($,he,fe){fe===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function($){return g[$]};let j=null;function Z($,he){if(h=he.getViewerPose(c||o),p=he,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let re=!1;fe.length!==A.cameras.length&&(A.cameras.length=0,re=!0);for(let De=0;De<fe.length;De++){let $e=fe[De],je=null;if(f!==null)je=f.getViewport($e);else{let Se=d.getViewSubImage(u,$e);je=Se.viewport,De===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let oe=D[De];oe===void 0&&(oe=new Rn,oe.layers.enable(De),oe.viewport=new Bt,D[De]=oe),oe.matrix.fromArray($e.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray($e.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(je.x,je.y,je.width,je.height),De===0&&(A.matrix.copy(oe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),re===!0&&A.cameras.push(oe)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let De=d.getDepthInformation(fe[0]);De&&De.isValid&&De.texture&&m.init(De,s.renderState)}if(ce&&ce.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let De=0;De<fe.length;De++){let $e=fe[De].camera;if($e){let je=g[$e];je||(je=new lo,g[$e]=je);let oe=d.getCameraImage($e);je.sourceTexture=oe}}}}for(let fe=0;fe<b.length;fe++){let re=E[fe],ce=b[fe];re!==null&&ce!==void 0&&ce.update(re,he,c||o)}j&&j($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),p=null}let ee=new df;ee.setAnimationLoop(Z),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}},B_=new Qe,Sf=new dt;Sf.set(-1,0,0,0,1,0,0,0,1);function z_(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,e,t,n){let s={},r={};function o(x,M){let y=M.program;n.uniformBlockBinding(x,y,s[x.id])}function a(x,M){let y=s[x.id];y===void 0&&(p(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(x,b);let E=e.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){let M=i.createBuffer(),y=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(x){let M=s[x.id],y=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,_=y.length;E<_;E++){let S=y[E];if(Array.isArray(S))for(let L=0,w=S.length;L<w;L++)h(S[L],E,L,b);else h(S,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,y,b){if(u(x,M,y,b)===!0){let E=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let w=_[L],I=v(w,!0);d(w,x.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function d(x,M,y){typeof x=="number"||typeof x=="boolean"?M[y]=x:x.isMatrix3?(M[y]=x.elements[0],M[y+1]=x.elements[1],M[y+2]=x.elements[2],M[y+3]=0,M[y+4]=x.elements[3],M[y+5]=x.elements[4],M[y+6]=x.elements[5],M[y+7]=0,M[y+8]=x.elements[6],M[y+9]=x.elements[7],M[y+10]=x.elements[8],M[y+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-y),y):x.toArray(M,y)}function u(x,M,y,b){let E=x.value,_=M+"_"+y;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);let S=b[_],L=!1;for(let w=0;w<E.length;w++)f(E[w],S,w)===!0&&(L=!0);return L}return f(E,b,_)}function f(x,M,y){if(M[y]===void 0)return typeof x=="number"||typeof x=="boolean"?M[y]=x:ArrayBuffer.isView(x)?M[y]=x.slice():M[y]=x.clone(),!0;{let b=M[y];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return M[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function p(x){let M=x.uniforms,y=0,b=16;for(let _=0,S=M.length;_<S;_++){let L=Array.isArray(M[_])?M[_]:[M[_]];for(let w=0,I=L.length;w<I;w++){let D=L[w],A=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(M[_])||Array.isArray(D.value),U=y;for(let O=0,W=A.length;O<W;O++){let X=A[O],Y=v(X,C),j=y%b,Z=j%Y.boundary,ee=j+Z;y+=Z,ee!==0&&b-ee<Y.storage&&(y+=b-ee),O===0&&(U=y),y+=Y.storage}let B=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new B((y-U)/Float32Array.BYTES_PER_ELEMENT),D.__offset=U}}let E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function v(x,M){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):it("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){let M=x.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:g}}var G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function k_(){return Ii===null&&(Ii=new Ps(G_,16,16,ms,rn),Ii.name="DFG_LUT",Ii.minFilter=Mn,Ii.magFilter=Mn,Ii.wrapS=wi,Ii.wrapT=wi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var ac=class{constructor(e={}){let{canvas:t=Dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,m=new Set([wl,Tl,El]),g=new Set([Gn,yi,wr,zs,Ml,Sl]),x=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,E=null,_=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1,D=null,A=null,C=null,U=null;this._outputColorSpace=nn;let B=0,O=0,W=null,X=-1,Y=null,j=new Bt,Z=new Bt,ee=null,$=new Me(0),he=0,fe=t.width,re=t.height,ce=1,Ee=null,Ye=null,De=new Bt(0,0,fe,re),$e=new Bt(0,0,fe,re),je=!1,oe=new as,Se=new Ja,ye=!1,Ue=!1,xe=new Qe,et=new P,He=new Bt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function vt(){return W===null?ce:1}let z=n;function Ft(R,H){return t.getContext(R,H)}let ue,Be,ae,Ge,we,Fe,N,T,q,pe,se,ge,k,G,J,de,F,ie,ne,ve,_e,be,ze;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){let H="webgl2";if(z=Ft(H,R),z===null)throw Ft(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(R){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),at("WebGLRenderer: "+R.message),R}function ot(){ue=new jx(z),ue.init(),_e=new U_(z,ue),Be=new kx(z,ue,e,_e),ae=new L_(z,ue),Be.reversedDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),A=z.createFramebuffer(),C=z.createFramebuffer(),U=z.createFramebuffer(),Ge=new nv(z),we=new __,Fe=new N_(z,ue,ae,we,Be,_e,Ge),N=new Qx(w),T=new s0(z),be=new Hx(z,T),q=new ev(z,T,Ge,be),pe=new sv(z,q,T,be,Ge),ie=new iv(z,Be,Fe),J=new Vx(we),se=new v_(w,N,ue,Be,be,J),ge=new z_(w,we),k=new M_,G=new A_(ue),F=new zx(w,N,ae,pe,p,l),de=new D_(w,pe,Be),ze=new H_(z,Ge,Be,ae),ne=new Gx(z,ue,Ge),ve=new tv(z,ue,Ge),Ge.programs=se.programs,w.capabilities=Be,w.extensions=ue,w.properties=we,w.renderLists=k,w.shadowMap=de,w.state=ae,w.info=Ge}v!==Gn&&(L=new ov(v,t.width,t.height,a,s,r));let me=new nu(w,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(fe,re,!1))},this.getSize=function(R){return R.set(fe,re)},this.setSize=function(R,H,te=!0){if(me.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=R,re=H,t.width=Math.floor(R*ce),t.height=Math.floor(H*ce),te===!0&&(t.style.width=R+"px",t.style.height=H+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(fe*ce,re*ce).floor()},this.setDrawingBufferSize=function(R,H,te){fe=R,re=H,ce=te,t.width=Math.floor(R*te),t.height=Math.floor(H*te),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(v===Gn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(De)},this.setViewport=function(R,H,te,K){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,H,te,K),ae.viewport(j.copy(De).multiplyScalar(vt()).round())},this.getScissor=function(R){return R.copy($e)},this.setScissor=function(R,H,te,K){R.isVector4?$e.set(R.x,R.y,R.z,R.w):$e.set(R,H,te,K),ae.scissor(Z.copy($e).multiplyScalar(vt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){ae.setScissorTest(je=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,te=!0){let K=0;if(R){let Q=!1;if(W!==null){let Ce=W.texture.format;Q=m.has(Ce)}if(Q){let Ce=W.texture.type,ke=g.has(Ce),Ae=F.getClearColor(),Oe=F.getClearAlpha(),qe=Ae.r,pt=Ae.g,Tt=Ae.b;ke?(x[0]=qe,x[1]=pt,x[2]=Tt,x[3]=Oe,z.clearBufferuiv(z.COLOR,0,x)):(M[0]=qe,M[1]=pt,M[2]=Tt,M[3]=Oe,z.clearBufferiv(z.COLOR,0,M))}else K|=z.COLOR_BUFFER_BIT}H&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),F.dispose(),k.dispose(),G.dispose(),Fe.dispose(),we.dispose(),N.dispose(),pe.dispose(),q.dispose(),be.dispose(),ze.dispose(),se.dispose(),me.dispose(),me.removeEventListener("sessionstart",fn),me.removeEventListener("sessionend",pn),_n.stop()};function Je(R){R.preventDefault(),Qr("WebGLRenderer: Context Lost."),I=!0}function ht(){Qr("WebGLRenderer: Context Restored."),I=!1;let R=Ge.autoReset,H=de.enabled,te=de.autoUpdate,K=de.needsUpdate,Q=de.type;ot(),Ge.autoReset=R,de.enabled=H,de.autoUpdate=te,de.needsUpdate=K,de.type=Q}function Pe(R){at("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function It(R){let H=R.target;H.removeEventListener("dispose",It),Le(H)}function Le(R){Ne(R),we.remove(R)}function Ne(R){let H=we.get(R).programs;H!==void 0&&(H.forEach(function(te){se.releaseProgram(te)}),R.isShaderMaterial&&se.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,te,K,Q,Ce){H===null&&(H=st);let ke=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ae=wp(R,H,te,K,Q);ae.setMaterial(K,ke);let Oe=te.index,qe=1;if(K.wireframe===!0){if(Oe=q.getWireframeAttribute(te),Oe===void 0)return;qe=2}let pt=te.drawRange,Tt=te.attributes.position,Ve=pt.start*qe,wt=(pt.start+pt.count)*qe;Ce!==null&&(Ve=Math.max(Ve,Ce.start*qe),wt=Math.min(wt,(Ce.start+Ce.count)*qe)),Oe!==null?(Ve=Math.max(Ve,0),wt=Math.min(wt,Oe.count)):Tt!=null&&(Ve=Math.max(Ve,0),wt=Math.min(wt,Tt.count));let an=wt-Ve;if(an<0||an===1/0)return;be.setup(Q,K,Ae,te,Oe);let qt,Wt=ne;if(Oe!==null&&(qt=T.get(Oe),Wt=ve,Wt.setIndex(qt)),Q.isMesh)K.wireframe===!0?(ae.setLineWidth(K.wireframeLinewidth*vt()),Wt.setMode(z.LINES)):Wt.setMode(z.TRIANGLES);else if(Q.isLine){let En=K.linewidth;En===void 0&&(En=1),ae.setLineWidth(En*vt()),Q.isLineSegments?Wt.setMode(z.LINES):Q.isLineLoop?Wt.setMode(z.LINE_LOOP):Wt.setMode(z.LINE_STRIP)}else Q.isPoints?Wt.setMode(z.POINTS):Q.isSprite&&Wt.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let En=Q._multiDrawStarts,We=Q._multiDrawCounts,Dn=Q._multiDrawCount,zt=Oe?T.get(Oe).bytesPerElement:1,Ms=we.get(K).currentProgram.getUniforms();for(let Tn=0;Tn<Dn;Tn++)Ms.setValue(z,"_gl_DrawID",Tn),Wt.render(En[Tn]/zt,We[Tn])}else if(Q.isInstancedMesh)Wt.renderInstances(Ve,an,Q.count);else if(te.isInstancedBufferGeometry){let En=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,We=Math.min(te.instanceCount,En);Wt.renderInstances(Ve,an,We)}else Wt.render(Ve,an)};function tt(R,H,te,K){D!==null&&R.isNodeMaterial&&D.setObject(K,R),ye===!0&&J.setState(R,te,!1),R.transparent===!0&&R.side===Ut&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,en(R,H,K),R.side=ps,R.needsUpdate=!0,en(R,H,K),R.side=Ut):en(R,H,K)}this.compile=function(R,H,te=null){te===null&&(te=R),D!==null&&D.renderStart(R,H,te),E=G.get(te),E.init(H),S.push(E),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),R!==te&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Ue=this.localClippingEnabled,ye=J.init(this.clippingPlanes,Ue),ye===!0&&J.setGlobalState(this.clippingPlanes,H),D!==null&&de.render(E.state.shadowsArray,te,H);let K=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){let Ae=Ce[ke];tt(Ae,te,H,Q),K.add(Ae)}else tt(Ce,te,H,Q),K.add(Ce)}),E=S.pop(),D!==null&&D.renderEnd(),K},this.compileAsync=function(R,H,te=null){let K=this.compile(R,H,te);return new Promise(Q=>{function Ce(){if(K.forEach(function(ke){let Oe=we.get(ke).currentProgram;(Oe===void 0||Oe.isReady())&&K.delete(ke)}),K.size===0){Q(R);return}setTimeout(Ce,10)}ue.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let on=null;function vn(R){on&&on(R)}function fn(){_n.stop()}function pn(){_n.start()}let _n=new df;_n.setAnimationLoop(vn),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(R){on=R,me.setAnimationLoop(R),R===null?_n.stop():_n.start()},me.addEventListener("sessionstart",fn),me.addEventListener("sessionend",pn),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(R,H);let te=me.enabled===!0&&me.isPresenting===!0,K=L!==null&&(W===null||te)&&L.begin(w,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,H,W),E=G.get(R,S.length),E.init(H),E.state.textureUnits=Fe.getTextureUnits(),S.push(E),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Se.setFromArrayCamera(H):oe.setFromProjectionMatrix(xe,ni,H.reversedDepth),Ue=this.localClippingEnabled,ye=J.init(this.clippingPlanes,Ue),b=k.get(R,_.length),b.init(),_.push(b),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let ke=w.xr.getDepthSensingMesh();ke!==null&&Xn(ke,H,-1/0,w.sortObjects)}Xn(R,H,0,w.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),w.sortObjects===!0&&b.sort(Ee,Ye),rt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,rt&&F.addToRenderList(b,R),this.info.autoReset===!0&&this.info.reset(),ye===!0&&J.beginShadows();let Q=E.state.shadowsArray;if(de.render(Q,R,H),ye===!0&&J.endShadows(),(K&&L.hasRenderPass())===!1){let ke=b.opaque,Ae=b.transmissive;if(E.setupLights(),H.isArrayCamera){let Oe=H.cameras;if(Ae.length>0)for(let qe=0,pt=Oe.length;qe<pt;qe++){let Tt=Oe[qe];Ei(ke,Ae,R,Tt)}rt&&F.render(R);for(let qe=0,pt=Oe.length;qe<pt;qe++){let Tt=Oe[qe];Ki(b,R,Tt,Tt.viewport)}}else Ae.length>0&&Ei(ke,Ae,R,H),rt&&F.render(R),Ki(b,R,H)}W!==null&&O===0&&(Fe.updateMultisampleRenderTarget(W),Fe.updateRenderTargetMipmap(W)),K&&L.end(w),R.isScene===!0&&R.onAfterRender(w,R,H),be.resetDefaultState(),X=-1,Y=null,S.pop(),S.length>0?(E=S[S.length-1],Fe.setTextureUnits(E.state.textureUnits),ye===!0&&J.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,D!==null&&D.renderEnd()};function Xn(R,H,te,K){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){let ke=H.isArrayCamera?Se:oe;if(!R.frustumCulled||R.intersectsFrustum(ke)){K&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);let Ae=pe.update(R),Oe=R.material;Oe.visible&&b.push(R,Ae,Oe,te,He.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let ke=H.isArrayCamera?Se:oe;if(!R.frustumCulled||R.intersectsFrustum(ke)){let Ae=pe.update(R),Oe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),He.copy(Ae.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(Oe)){let qe=Ae.groups;for(let pt=0,Tt=qe.length;pt<Tt;pt++){let Ve=qe[pt],wt=Oe[Ve.materialIndex];wt&&wt.visible&&b.push(R,Ae,wt,te,He.z,Ve,H)}}else Oe.visible&&b.push(R,Ae,Oe,te,He.z,null,H)}}}let Ce=R.children;for(let ke=0,Ae=Ce.length;ke<Ae;ke++)Xn(Ce[ke],H,te,K)}function Ki(R,H,te,K){let{opaque:Q,transmissive:Ce,transparent:ke}=R;E.setupLightsView(te),ye===!0&&J.setGlobalState(w.clippingPlanes,te),K&&ae.viewport(j.copy(K)),Q.length>0&&ks(Q,H,te),Ce.length>0&&ks(Ce,H,te),ke.length>0&&ks(ke,H,te),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ei(R,H,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let Ve=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new Qt(1,1,{generateMipmaps:!0,type:Ve?rn:Gn,minFilter:_i,samples:Math.max(4,Be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}let Ce=E.state.transmissionRenderTarget[K.id],ke=K.viewport||j;Ce.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);let Ae=w.getRenderTarget(),Oe=w.getActiveCubeFace(),qe=w.getActiveMipmapLevel();w.setRenderTarget(Ce),w.getClearColor($),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),rt&&F.render(te);let pt=w.toneMapping;w.toneMapping=Pi;let Tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),ye===!0&&J.setGlobalState(w.clippingPlanes,K),ks(R,te,K),Fe.updateMultisampleRenderTarget(Ce),Fe.updateRenderTargetMipmap(Ce),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let wt=0,an=H.length;wt<an;wt++){let qt=H[wt],{object:Wt,geometry:En,material:We,group:Dn}=qt;if(We.side===Ut&&Wt.layers.test(K.layers)){let zt=We.side;We.side=Sn,We.needsUpdate=!0,Pt(Wt,te,K,En,We,Dn),We.side=zt,We.needsUpdate=!0,Ve=!0}}Ve===!0&&(Fe.updateMultisampleRenderTarget(Ce),Fe.updateRenderTargetMipmap(Ce))}w.setRenderTarget(Ae,Oe,qe),w.setClearColor($,he),Tt!==void 0&&(K.viewport=Tt),w.toneMapping=pt}function ks(R,H,te){let K=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Ce=R.length;Q<Ce;Q++){let ke=R[Q],{object:Ae,geometry:Oe,group:qe}=ke,pt=ke.material;pt.allowOverride===!0&&K!==null&&(pt=K),Ae.layers.test(te.layers)&&Pt(Ae,H,te,Oe,pt,qe)}}function Pt(R,H,te,K,Q,Ce){D!==null&&Q.isNodeMaterial&&D.setObject(R,Q),R.onBeforeRender(w,H,te,K,Q,Ce),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,H,te,K,R,Ce),Q.transparent===!0&&Q.side===Ut&&Q.forceSinglePass===!1?(Q.side=Sn,Q.needsUpdate=!0,w.renderBufferDirect(te,H,K,Q,R,Ce),Q.side=ps,Q.needsUpdate=!0,w.renderBufferDirect(te,H,K,Q,R,Ce),Q.side=Ut):w.renderBufferDirect(te,H,K,Q,R,Ce),R.onAfterRender(w,H,te,K,Q,Ce)}function In(R){let H=0;for(let te of R)te.texture!==null&&H++;return H}function en(R,H,te){H.isScene!==!0&&(H=st);let K=we.get(R),Q=E.state.lights,Ce=E.state.shadowsArray,ke=Q.state.version,Ae=se.getParameters(R,Q.state,Ce,H,te,E.state.lightProbeGridArray),Oe=se.getProgramCacheKey(Ae),qe=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;let pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=N.get(R.envMap||K.environment,pt),K.envMapRotation=K.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",It),qe=new Map,K.programs=qe,K.programVariants=new Map);let Tt=qe.get(Oe);if(Tt!==void 0){if(K.currentProgram===Tt&&K.lightsStateVersion===ke)return Qi(R,Ae),Tt}else Ae.uniforms=se.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,te,Ae),R.onBeforeCompile(Ae,w),Tt=se.acquireProgram(Ae,Oe),qe.set(Oe,Tt),K.uniforms=Ae.uniforms;let Ve=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=J.uniform),Qi(R,Ae),K.needsLights=Rp(R),K.lightsStateVersion=ke,K.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.sunLights.value=Q.state.sun,Ve.sunLightShadows.value=Q.state.sunShadow,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ve.sunShadowCascade.value=Q.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.numLightProbeGrids=In(E.state.lightProbeGridArray),K.currentProgram=Tt,K.uniformsList=null,Tt}function _s(R,H,te,K,Q){let Ce=we.get(R),ke=Ce.currentProgram.id+","+K+","+Q,Ae=Ce.programVariants.get(ke);return Ae===void 0?(Ae=en(R,H,te),Ce.programVariants.set(ke,Ae)):(Ce.currentProgram=Ae,Ce.uniformsList=null,Ce.outputColorSpace=K,Ce.toneMapping=Q),Ae}function ys(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Ar.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Qi(R,H){let te=we.get(R);te.outputColorSpace=H.outputColorSpace,te.batching=H.batching,te.batchingColor=H.batchingColor,te.instancing=H.instancing,te.instancingColor=H.instancingColor,te.instancingMorph=H.instancingMorph,te.skinning=H.skinning,te.morphTargets=H.morphTargets,te.morphNormals=H.morphNormals,te.morphColors=H.morphColors,te.morphTargetsCount=H.morphTargetsCount,te.numClippingPlanes=H.numClippingPlanes,te.numIntersection=H.numClipIntersection,te.vertexAlphas=H.vertexAlphas,te.vertexTangents=H.vertexTangents,te.toneMapping=H.toneMapping}function wp(R,H,te,K,Q){H.isScene!==!0&&(H=st),Fe.resetTextureUnits();let Ce=H.fog,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,Ae=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Mt.workingColorSpace,Oe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,qe=N.get(K.envMap||ke,Oe),pt=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Tt=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!te.morphAttributes.position,wt=!!te.morphAttributes.normal,an=!!te.morphAttributes.color,qt=Pi;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qt=w.toneMapping);let Wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,En=Wt!==void 0?Wt.length:0,We=we.get(K),Dn=E.state.lights;if(ye===!0&&(Ue===!0||R!==Y)){let Jt=R===Y&&K.id===X;J.setState(K,R,Jt)}let zt=!1,Ms=!1;K.version===We.__version?We.needsLights&&We.lightsStateVersion!==Dn.state.version||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==qe||K.fog===!0&&We.fog!==Ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==J.numPlanes||We.numIntersection!==J.numIntersection)||We.vertexAlphas!==pt||We.vertexTangents!==Tt||We.morphTargets!==Ve||We.morphNormals!==wt||We.morphColors!==an||We.morphTargetsCount!==En||We.numLightProbeGrids!==In(E.state.lightProbeGridArray)?zt=!0:(We.outputColorSpace!==Ae||We.toneMapping!==qt)&&(Ms=!0):(zt=!0,We.__version=K.version);let Tn=We.currentProgram;(zt===!0||Ms===!0)&&(Tn=Ms===!0?_s(K,H,Q,Ae,qt):en(K,H,Q),D&&K.isNodeMaterial&&D.onUpdateProgram(K,Tn,We));let oa=!1,ji=!1,Ss=!1,Lt=Tn.getUniforms(),yn=We.uniforms;if(ae.useProgram(Tn.program)&&(oa=!0,ji=!0,Ss=!0),K.id!==X&&(X=K.id,ji=!0),oa||Y!==R){ae.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(z,"projectionMatrix",R.projectionMatrix),Lt.setValue(z,"viewMatrix",R.matrixWorldInverse);let mn=Lt.map.cameraPosition;mn!==void 0&&mn.setValue(z,et.setFromMatrixPosition(R.matrixWorld)),Be.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,ji=!0,Ss=!0)}if(We.needsLights&&(Dn.state.sunShadowMap.length>0&&Lt.setValue(z,"sunShadowMap",Dn.state.sunShadowMap,Fe),Dn.state.directionalShadowMap.length>0&&Lt.setValue(z,"directionalShadowMap",Dn.state.directionalShadowMap,Fe),Dn.state.spotShadowMap.length>0&&Lt.setValue(z,"spotShadowMap",Dn.state.spotShadowMap,Fe),Dn.state.pointShadowMap.length>0&&Lt.setValue(z,"pointShadowMap",Dn.state.pointShadowMap,Fe)),Q.isSkinnedMesh){Lt.setOptional(z,Q,"bindMatrix"),Lt.setOptional(z,Q,"bindMatrixInverse");let Jt=Q.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Lt.setValue(z,"boneTexture",Jt.boneTexture,Fe))}Q.isBatchedMesh&&(Lt.setOptional(z,Q,"batchingTexture"),Lt.setValue(z,"batchingTexture",Q._matricesTexture,Fe),Lt.setOptional(z,Q,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",Q._indirectTexture,Fe),Lt.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",Q._colorsTexture,Fe));let hi=te.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&ie.update(Q,te,Tn),(ji||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Lt.setValue(z,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(yn.envMapIntensity.value=H.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=k_()),ji){if(Lt.setValue(z,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&Ap(yn,Ss),Ce&&K.fog===!0&&ge.refreshFogUniforms(yn,Ce),ge.refreshMaterialUniforms(yn,K,ce,re,E.state.transmissionRenderTarget[R.id]),We.needsLights&&We.numLightProbeGrids>0){let Jt=y,mn=0;for(let Fi of E.state.lightProbeGridArray)Fi.texture!==null&&(Jt.textures[mn]=Fi.texture,Jt.min[mn]=Fi.boundingBox.min,Jt.max[mn]=Fi.boundingBox.max,Jt.resolution[mn]=Fi.resolution,mn++);for(let Fi in Jt)Jt[Fi].length=mn;yn.probesSH.value=Jt.textures,yn.probesMin.value=Jt.min,yn.probesMax.value=Jt.max,yn.probesResolution.value=Jt.resolution}Ar.upload(z,ys(We),yn,Fe)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ar.upload(z,ys(We),yn,Fe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Lt.setValue(z,"center",Q.center),Lt.setValue(z,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(z,"normalMatrix",Q.normalMatrix),Lt.setValue(z,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let Jt=K.uniformsGroups;for(let mn=0,Fi=Jt.length;mn<Fi;mn++){let mu=Jt[mn];ze.update(mu,Tn),ze.bind(mu,Tn)}}return Tn}function Ap(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Rp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,H,te){let K=we.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),we.get(R.texture).__webglTexture=H,we.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let te=we.get(R);te.__webglFramebuffer=H,te.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,te=0){W=R,B=H,O=te;let K=null,Q=!1,Ce=!1;if(R){let Ae=we.get(R);if(Ae.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(z.FRAMEBUFFER,Ae.__webglFramebuffer),j.copy(R.viewport),Z.copy(R.scissor),ee=R.scissorTest,ae.viewport(j),ae.scissor(Z),ae.setScissorTest(ee),X=-1;return}else if(Ae.__webglFramebuffer===void 0)Fe.setupRenderTarget(R);else if(Ae.__hasExternalTextures)Fe.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let pt=R.depthTexture;if(Ae.__boundDepthTexture!==pt){if(pt!==null&&we.has(pt)&&(R.width!==pt.image.width||R.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(R)}}let Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);let qe=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?K=qe[H][te]:K=qe[H],Q=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?K=we.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?K=qe[te]:K=qe,j.copy(R.viewport),Z.copy(R.scissor),ee=R.scissorTest}else j.copy(De).multiplyScalar(ce).floor(),Z.copy($e).multiplyScalar(ce).floor(),ee=je;if(te!==0&&(K=A),ae.bindFramebuffer(z.FRAMEBUFFER,K)&&ae.drawBuffers(R,K),ae.viewport(j),ae.scissor(Z),ae.setScissorTest(ee),Q){let Ae=we.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,te)}else if(Ce){let Ae=H;for(let Oe=0;Oe<R.textures.length;Oe++){let qe=we.get(R.textures[Oe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Oe,qe.__webglTexture,te,Ae)}}else if(R!==null&&te!==0){let Ae=we.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ae.__webglTexture,te)}X=-1};function pu(R){let H=we.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=Be.textureFormatReadable(R.format),H.__typeReadable=Be.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,te,K,Q,Ce,ke,Ae=0){if(!(R&&R.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){ae.bindFramebuffer(z.FRAMEBUFFER,Oe);try{let qe=R.textures[Ae],pt=qe.format,Tt=qe.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ae);let Ve=pu(qe);if(Ve.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-K&&te>=0&&te<=R.height-Q&&z.readPixels(H,te,K,Q,_e.convert(pt),_e.convert(Tt),Ce)}finally{let qe=W!==null?we.get(W).__webglFramebuffer:null;ae.bindFramebuffer(z.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,H,te,K,Q,Ce,ke,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(H>=0&&H<=R.width-K&&te>=0&&te<=R.height-Q){ae.bindFramebuffer(z.FRAMEBUFFER,Oe);let qe=R.textures[Ae],pt=qe.format,Tt=qe.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ae);let Ve=pu(qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,wt),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),z.readPixels(H,te,K,Q,_e.convert(pt),_e.convert(Tt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let an=W!==null?we.get(W).__webglFramebuffer:null;ae.bindFramebuffer(z.FRAMEBUFFER,an);let qt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Nd(z,qt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,wt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(wt),z.deleteSync(qt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,te=0){let K=Math.pow(2,-te),Q=Math.floor(R.image.width*K),Ce=Math.floor(R.image.height*K),ke=H!==null?H.x:0,Ae=H!==null?H.y:0;Fe.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,ke,Ae,Q,Ce),ae.unbindTexture()},this.copyTextureToTexture=function(R,H,te=null,K=null,Q=0,Ce=0){let ke,Ae,Oe,qe,pt,Tt,Ve,wt,an,qt=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(te!==null)ke=te.max.x-te.min.x,Ae=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,pt=te.min.y,Tt=te.isBox3?te.min.z:0;else{let Lt=Math.pow(2,-Q);ke=Math.floor(qt.width*Lt),Ae=Math.floor(qt.height*Lt),R.isDataArrayTexture?Oe=qt.depth:R.isData3DTexture?Oe=Math.floor(qt.depth*Lt):Oe=1,qe=0,pt=0,Tt=0}K!==null?(Ve=K.x,wt=K.y,an=K.z):(Ve=0,wt=0,an=0);let Wt=_e.convert(H.format),En=_e.convert(H.type),We;H.isData3DTexture?(Fe.setTexture3D(H,0),We=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Fe.setTexture2DArray(H,0),We=z.TEXTURE_2D_ARRAY):(Fe.setTexture2D(H,0),We=z.TEXTURE_2D),ae.activeTexture(z.TEXTURE0),ae.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),ae.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),ae.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let Dn=ae.getParameter(z.UNPACK_ROW_LENGTH),zt=ae.getParameter(z.UNPACK_IMAGE_HEIGHT),Ms=ae.getParameter(z.UNPACK_SKIP_PIXELS),Tn=ae.getParameter(z.UNPACK_SKIP_ROWS),oa=ae.getParameter(z.UNPACK_SKIP_IMAGES);ae.pixelStorei(z.UNPACK_ROW_LENGTH,qt.width),ae.pixelStorei(z.UNPACK_IMAGE_HEIGHT,qt.height),ae.pixelStorei(z.UNPACK_SKIP_PIXELS,qe),ae.pixelStorei(z.UNPACK_SKIP_ROWS,pt),ae.pixelStorei(z.UNPACK_SKIP_IMAGES,Tt);let ji=R.isDataArrayTexture||R.isData3DTexture,Ss=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let Lt=we.get(R),yn=we.get(H),hi=we.get(Lt.__renderTarget),Jt=we.get(yn.__renderTarget);ae.bindFramebuffer(z.READ_FRAMEBUFFER,hi.__webglFramebuffer),ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let mn=0;mn<Oe;mn++)ji&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.get(R).__webglTexture,Q,Tt+mn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.get(H).__webglTexture,Ce,an+mn)),z.blitFramebuffer(qe,pt,qe+ke,pt+Ae,Ve,wt,Ve+ke,wt+Ae,z.DEPTH_BUFFER_BIT,z.NEAREST);ae.bindFramebuffer(z.READ_FRAMEBUFFER,null),ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||we.has(R)){let Lt=we.get(R),yn=we.get(H);ae.bindFramebuffer(z.READ_FRAMEBUFFER,C),ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let hi=0;hi<Oe;hi++)ji?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Lt.__webglTexture,Q,Tt+hi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,Q),Ss?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Ce,an+hi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Ce),Q!==0?z.blitFramebuffer(qe,pt,qe+ke,pt+Ae,Ve,wt,Ve+ke,wt+Ae,z.COLOR_BUFFER_BIT,z.NEAREST):Ss?z.copyTexSubImage3D(We,Ce,Ve,wt,an+hi,qe,pt,ke,Ae):z.copyTexSubImage2D(We,Ce,Ve,wt,qe,pt,ke,Ae);ae.bindFramebuffer(z.READ_FRAMEBUFFER,null),ae.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ss?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(We,Ce,Ve,wt,an,ke,Ae,Oe,Wt,En,qt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(We,Ce,Ve,wt,an,ke,Ae,Oe,Wt,qt.data):z.texSubImage3D(We,Ce,Ve,wt,an,ke,Ae,Oe,Wt,En,qt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ce,Ve,wt,ke,Ae,Wt,En,qt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ce,Ve,wt,qt.width,qt.height,Wt,qt.data):z.texSubImage2D(z.TEXTURE_2D,Ce,Ve,wt,ke,Ae,Wt,En,qt);ae.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),ae.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt),ae.pixelStorei(z.UNPACK_SKIP_PIXELS,Ms),ae.pixelStorei(z.UNPACK_SKIP_ROWS,Tn),ae.pixelStorei(z.UNPACK_SKIP_IMAGES,oa),Ce===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&z.generateMipmap(We),ae.unbindTexture()},this.initRenderTarget=function(R){we.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),ae.unbindTexture()},this.resetState=function(){B=0,O=0,W=null,ae.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}};var nt={day:{name:"day",light:[-.58,.64,.5],planetDir:[-.1879,.1736,-.9667],lightColor:16772309,lightIntensity:3.4,hemi:[14016491,12103575,.7],shadowIntensity:.82,zenith:[.1,.27,.68],mid:[.3,.54,.9],haze:[.43,.59,.73],hazeLit:[.78,.76,.66],hazeK:.65,glowColor:[1,.9,.72],glow:[1.2,.35,.22],disc:8,discCos:[.99972,.9999],cloudLit:[1.3,1.27,1.2],cloudShade:[.66,.74,.9],cloudCover:[.47,.79],cloudAlpha:.88,stars:0,planet:.55,fog:75e-5,fogFalloff:.02,exposure:1.085,bloom:[.1,.4,2.2],rays:.1,rayThresh:2.3,env:.95,lamps:.25,bloomGlow:0,waterDeep:[.03,.17,.2],waterShallow:[.08,.32,.34]},night:{name:"night",light:[.1876,.1822,-.9652],planetDir:[-.3769,.1736,-.9098],lightColor:12374271,lightIntensity:1.7,hemi:[8556722,3422799,.74],shadowIntensity:.78,zenith:[.004,.01,.045],mid:[.013,.032,.105],haze:[.045,.08,.165],hazeLit:[.17,.24,.4],hazeK:.8,glowColor:[.72,.84,1],glow:[0,.36,.11],disc:1,discCos:[.9988,.99915],cloudLit:[.2,.27,.44],cloudShade:[.018,.03,.075],cloudCover:[.46,.8],cloudAlpha:.85,stars:1,planet:.9,fog:.001,fogFalloff:.02,exposure:1.44,bloom:[.14,.45,1.5],rays:.4,rayThresh:.55,env:1.05,lamps:1,bloomGlow:1,waterDeep:[.004,.016,.04],waterShallow:[.012,.05,.085]}},Ni=new P(0,1,0),V_=nt.day,Bn=i=>Number(i).toFixed(5),bf=i=>`vec3(${Bn(i[0])}, ${Bn(i[1])}, ${Bn(i[2])})`,hc=i=>`mix(${Bn(nt.day[i])}, ${Bn(nt.night[i])}, uNight)`,Li=i=>`mix(${bf(nt.day[i])}, ${bf(nt.night[i])}, uNight)`;function Tf(i){let e=V_=nt[i]||nt.day;return Ni.set(...e.light).normalize(),e}var uc=`
#ifndef GARDEN_ATMOSPHERE
#define GARDEN_ATMOSPHERE
uniform float uNight;
uniform vec3 uSunDirection;
#define SUN uSunDirection
vec3 fogTint(vec3 dir){
  float s = max(dot(dir, SUN), 0.0);
  return mix(${Li("haze")}, ${Li("hazeLit")}, pow(s, 8.0) * ${hc("hazeK")});
}
#endif
`,W_=`
vec3 skyBase(vec3 d){
  float h = clamp(d.y, 0.0, 1.0);
  float s = max(dot(d, SUN), 0.0);
  vec3 c = mix(${Li("mid")}, ${Li("zenith")}, smoothstep(0.05, 0.7, h));
  c = mix(fogTint(d), c, smoothstep(-0.01, 0.11, d.y));
  vec3 glow = ${Li("glow")};
  c += ${Li("glowColor")} * (pow(s, 2500.0) * glow.x + pow(s, 220.0) * glow.y + pow(s, 30.0) * glow.z);
  return c;
}
`,Ef=new WeakSet,X_=`
#ifdef USE_ENVMAP
  uniform samplerCube uNightEnvironment;
  uniform float uEnvironmentMix;
  vec4 gardenEnvironment(vec3 direction, float lod){
    if (uEnvironmentMix <= 0.0) return textureLod(envMap, direction, lod);
    if (uEnvironmentMix >= 1.0) return textureLod(uNightEnvironment, direction, lod);
    return mix(textureLod(envMap, direction, lod), textureLod(uNightEnvironment, direction, lod), uEnvironmentMix);
  }
#endif
`;function dc(i,e){if(Ef.has(i))return;Ef.add(i);let t={uNight:e.uNight,uSunDirection:{value:Ni}};i.uniforms&&Object.assign(i.uniforms,t);let n=i.onBeforeCompile,s=i.customProgramCacheKey();i.onBeforeCompile=function(r,o){if(n.call(this,r,o),Object.assign(r.uniforms,t),e.envNight&&r.fragmentShader?.includes("#include <envmap_physical_pars_fragment>")){r.uniforms.uNightEnvironment={value:e.envNight},r.uniforms.uEnvironmentMix=e.uNight;let a=mt.envmap_physical_pars_fragment.replace(/textureLod\(\s*envMap\s*,/g,"gardenEnvironment(");r.fragmentShader=r.fragmentShader.replace("#include <envmap_physical_pars_fragment>",X_+a)}},i.customProgramCacheKey=()=>s+"|live-atmosphere"}var wf=`
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
`;function Af(){let i=mt,e=hc("fogFalloff");i.fog_pars_vertex=`#ifdef USE_FOG
 varying float vFogDepth;
 varying vec3 vFogDir;
#endif`,i.fog_vertex=`#ifdef USE_FOG
 vFogDepth = - mvPosition.z;
 vFogDir = transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
#endif`,i.fog_pars_fragment=`#ifdef USE_FOG
 uniform vec3 fogColor;
 varying float vFogDepth;
 varying vec3 vFogDir;
 uniform float fogDensity;
${uc}
#endif`,i.fog_fragment=`
#ifdef USE_FOG
  float fogL = length( vFogDir );
  vec3 fogDirN = vFogDir / max( fogL, 1e-4 );
  float fogT = clamp( ${e} * vFogDir.y, -12.0, 12.0 );
  float fogF = abs( fogT ) < 0.001 ? 1.0 : ( 1.0 - exp( - fogT ) ) / fogT;
  float fogTau = fogDensity * exp( - ${e} * max( cameraPosition.y, 0.0 ) ) * fogL * fogF;
  float fogFactor = 1.0 - exp( - fogTau );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogTint( fogDirN ), fogFactor );
#endif`}function q_(){return`
uniform float uTime;
uniform float uEnv;
varying vec3 vDir;
${uc}
${W_}
float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float hash31(vec3 p){ p = fract(p * vec3(127.1, 311.7, 74.7)); p += dot(p, p.yzx + 19.19); return fract((p.x + p.y) * p.z); }
float vn(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; } return s; }

// a pale ringed world low in the sky, opposite the light
#define PDIR normalize(${Li("planetDir")})
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
  res.a *= smoothstep(0.0, 0.1, d.y) * ${hc("planet")};
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
  float disc = smoothstep(${Bn(nt.night.discCos[0])}, ${Bn(nt.night.discCos[1])}, s);
  vec3 mr = normalize(cross(vec3(0.0, 1.0, 0.0), SUN)), mu = cross(SUN, mr);
  vec2 mq = vec2(dot(d, mr), dot(d, mu)) * 26.0;
  float maria = 0.66 + 0.34 * fbm(mq * 2.2 + 3.0);
  col += vec3(1.0, 0.93, 0.80) * smoothstep(${Bn(nt.day.discCos[0])}, ${Bn(nt.day.discCos[1])}, s) * mix(${Bn(nt.day.disc)}, 4.0, uEnv) * (1.0 - uNight);
  col = mix(col, vec3(0.93, 0.96, 1.0) * maria * mix(${Bn(nt.night.disc)}, 1.6, uEnv), disc * uNight);
  if (uEnv < 0.5) { vec4 p = planet(d); col = mix(col, p.rgb, p.a); }
  if (d.y > 0.01) {
    // two layers of cloud, lit from the side that faces the light
    vec2 uv = d.xz / (d.y + 0.16) * 0.42 + vec2(uTime * 0.004, uTime * 0.0013);
    float den = fbm(uv * 1.1) * 0.72 + fbm(uv * 3.1 + 7.0) * 0.28;
    float cov = smoothstep(mix(${Bn(nt.day.cloudCover[0])}, ${Bn(nt.night.cloudCover[0])}, uNight), mix(${Bn(nt.day.cloudCover[1])}, ${Bn(nt.night.cloudCover[1])}, uNight), den + 0.1 * smoothstep(0.3, 0.05, d.y));
    float den2 = fbm((uv + normalize(SUN.xz) * 0.16) * 1.1) * 0.72 + fbm((uv + normalize(SUN.xz) * 0.16) * 3.1 + 7.0) * 0.28;
    float lit = clamp((den - den2) * 3.4 + 0.5, 0.0, 1.0);
    vec3 cc = mix(${Li("cloudShade")}, ${Li("cloudLit")}, lit);
    cc += ${Li("glowColor")} * pow(s, 6.0) * 0.35;
    col = mix(col, cc, cov * smoothstep(0.015, 0.09, d.y) * ${hc("cloudAlpha")});
  }
  // for lighting, the lower half of the world is water and stone in shade, not open sky
  col *= mix(1.0, 0.36, uEnv * smoothstep(0.02, -0.35, d.y));
  // Diffuse bounce from pale stone desaturates the blue sky inside the dome.
  col = mix(col, vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), uEnv * 0.28);
  gl_FragColor = vec4(col, 1.0);
}`}function Rf(i){let e={uTime:i.uTime,uEnv:{value:0},uNight:i.uNight,uSunDirection:{value:Ni}},t="varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",n=new Vt({uniforms:e,vertexShader:t,fragmentShader:q_(),side:Sn,depthWrite:!1,depthTest:!1,fog:!1}),s=new At(new Ct(3e3,48,24),n);s.renderOrder=-1e3,s.frustumCulled=!1,s.onBeforeRender=(u,f,p)=>{s.position.setFromMatrixPosition(p.matrixWorld),s.updateMatrixWorld()},i.scene.add(s);let r=n.clone();r.uniforms={uTime:{value:40},uEnv:{value:1},uNight:{value:0},uSunDirection:{value:new P(...nt.day.light).normalize()}};let o=new Rs;o.add(new At(s.geometry,r));let a=new Rr(i.renderer),l=a.fromScene(o,.02,1,5e3);r.uniforms.uNight.value=1,r.uniforms.uSunDirection.value.set(...nt.night.light).normalize();let c=a.fromScene(o,.02,1,5e3);a.dispose(),r.dispose();let h=l.dispose.bind(l);l.dispose=()=>{h(),c.dispose()},i.envTarget=l,i.env=l.texture,i.envNight=c.texture,i.scene.environment=i.env;let d=()=>{i.scene.environmentIntensity=oi.lerp(nt.day.env,nt.night.env,i.uNight.value)*.48};return i.moodBindings.push(d),d(),s}function Ze(i,e,t,n,s){let r=e[t],o;if(r?.isColor){let a=new Me(n),l=new Me(s);o=c=>r.copy(a).lerp(l,c)}else if(r?.isVector3){let a=new P().fromArray(n),l=new P().fromArray(s);o=c=>r.copy(a).lerp(l,c)}else o=a=>{e[t]=n+(s-n)*a};return i.moodBindings.push(o),o(i.uNight.value),e}function fc(i,e){i.uNight.value=e;for(let t of i.moodBindings)t(e)}var Re={DAIS:{x:0,z:0,r:4.7,y:.55},ARM:{x:-2.55,z:.55},GLOBE:{x:1.95,y:3.05,z:-.25,r:1.28},CROWN:{x:0,y:7.2,z:-3.2,r:1.85},ROTUNDA:{r:19,bays:18},WALK:{r0:17.3,r1:20.6,y:.6},CAT:{x:2.3,y:.78,z:9.6},CAM:{x:.5,y:1.75,z:15.9},DOCK:{x:-68,y:3.2,z:-150},FALLS:{x:40,z:-78},SHIP:{x:195,y:185,z:-1100}},Zo=[[Re.CAT.x,Re.CAT.z,.92,Re.CAT.y],[.6,8.3,.8,.2],[-1.6,10.4,.7,.2],[3.9,12.1,.75,.2],[-3.4,7.2,.6,.2]];function $o(i,e){for(let[n,s,r,o]of Zo)if(Math.hypot(i-n,e-s)<r)return o;let t=Math.hypot(i-Re.DAIS.x,e-Re.DAIS.z);return t<Re.DAIS.r?Re.DAIS.y:t<Re.DAIS.r+1.3?.2:t>Re.WALK.r0&&t<Re.WALK.r1?Re.WALK.y:0}var Jo=new P;function ai(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Jo.copy(e),Jo[n]=0,Jo.normalize();let c=.5*o/(o+a),h=1-Jo.angleTo(i)/l;return Math.sign(Jo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var pc=class i extends Zn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,v=new P,m=.5/o;for(let g=0,x=0;g<d.length;g+=3,x+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:v.set(1,0,0),f[x+0]=ai(v,c,"z","y",r,n),f[x+1]=1-ai(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[x+0]=1-ai(v,c,"z","y",r,n),f[x+1]=1-ai(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[x+0]=1-ai(v,c,"x","z",r,e),f[x+1]=ai(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[x+0]=1-ai(v,c,"x","z",r,e),f[x+1]=1-ai(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[x+0]=1-ai(v,c,"x","y",r,e),f[x+1]=1-ai(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[x+0]=ai(v,c,"x","y",r,e),f[x+1]=1-ai(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function zn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Cf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let p=Cf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Cf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Dt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let v=h.getComponent(u,p);a.setComponent(u+d,p,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Y_(){let e=new Uint8Array(262144),t=(r,o)=>{let a=Math.imul(r+619,374761393)^Math.imul(o+227,668265263);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967295},n=(r,o,a)=>{let l=r*a,c=o*a,h=Math.floor(l),d=Math.floor(c),u=l-h,f=c-d,p=u*u*(3-2*u),v=f*f*(3-2*f),m=t(h%a,d%a),g=t((h+1)%a,d%a),x=t(h%a,(d+1)%a),M=t((h+1)%a,(d+1)%a);return oi.lerp(oi.lerp(m,g,p),oi.lerp(x,M,p),v)};for(let r=0;r<256;r++)for(let o=0;o<256;o++){let a=o/256,l=r/256,c=(r*256+o)*4,h=n(a,l,4),d=n(a,l,24),u=n(a,l,64),f=t(o,r);e[c]=Math.round((.16*h+.44*d+.3*u+.1*f)*255),e[c+1]=Math.round((.62*h+.28*d+.1*u)*255),e[c+2]=Math.round((.8*h+.2*n(a,l,12))*255),e[c+3]=255}let s=new Ps(e,256,256,Qn);return s.wrapS=s.wrapT=Vi,s.magFilter=Mn,s.minFilter=_i,s.generateMipmaps=!0,s.needsUpdate=!0,s}function Ko(i,{roughness:e=.36,scale:t=.22,flute:n=!1,veinStrength:s=1}={}){var l;let r=i.tex.marble;r.anisotropy=Math.min(8,i.renderer.capabilities.getMaxAnisotropy());let o=(l=i.tex).stoneMineral??(l.stoneMineral=Y_());o.anisotropy=Math.min(4,i.renderer.capabilities.getMaxAnisotropy());let a=new Nt({color:16777215,roughness:e,metalness:0,envMap:i.env,envMapIntensity:.35*i.mood.env,...n?{bumpMap:i.tex.flute,bumpScale:.055}:{}});return a.onBeforeCompile=c=>{c.uniforms.uStoneMap={value:r},c.uniforms.uStoneMineral={value:o},c.uniforms.uStoneScale={value:t},c.uniforms.uStoneVeinStrength={value:s},c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vStonePosition; varying vec3 vStoneNormal;`).replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
vStoneNormal=inverseTransformDirection(transformedNormal,viewMatrix);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 stoneWorld=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          stoneWorld=instanceMatrix*stoneWorld;
        #endif
        vStonePosition=(modelMatrix*stoneWorld).xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uStoneMap; uniform sampler2D uStoneMineral;
        uniform float uStoneScale; uniform float uStoneVeinStrength;
        varying vec3 vStonePosition; varying vec3 vStoneNormal;
        vec3 stoneBump(vec3 p,vec3 n,vec2 gradient,float face){
          vec3 dx=dFdx(p),dy=dFdy(p),a=cross(dy,n),b=cross(n,dx);
          float det=dot(dx,a)*face;
          return normalize(abs(det)*n-sign(det)*(gradient.x*a+gradient.y*b));
        }`).replace("#include <color_fragment>",`#include <color_fragment>
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
        float stoneRelief=stoneLuma*0.0014+(mineral.r-0.5)*0.0012*mineralDetail;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        // Mineral-rich veins take a slightly softer polish than the white calcite.
        roughnessFactor=clamp(roughnessFactor+(1.0-stoneLuma)*0.11
          +(mineral.g-0.5)*0.13+(mineral.r-0.5)*0.035*mineralDetail,0.28,0.78);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=stoneBump(-vViewPosition,normal,vec2(dFdx(stoneRelief),dFdy(stoneRelief)),faceDirection);`)},a.customProgramCacheKey=()=>`architectural-stone-mineral-v2-${n?"fluted":"plain"}`,a}var _t=(i,e,t,n=.12)=>new pc(i,e,t,3,Math.min(n,i/2.01,e/2.01,t/2.01)),xt=(i,e,t,n=24,s=!1)=>new $n(i,e,t,n,1,s),V=(i,e,t=0,n=0,s=0)=>{let r=new At(i,e);return r.position.set(t,n,s),r},yt=(i=0,e=0,t=0,...n)=>{let s=new St;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s},$t=(i,e)=>new Me(i).multiplyScalar(e),jt=(i,e=48,t=0,n=Math.PI*2)=>new yo(i.map(([s,r])=>new le(s,r)),e,t,n),kn=(i,e=!0,t=!0)=>(i.traverse(n=>{n.isMesh&&(n.castShadow=e,n.receiveShadow=t)}),i);function Z_(i){for(let e of Object.values(i.attributes)){let t=e.itemSize,n=e.array;for(let s=0;s+2<e.count;s+=3)for(let r=0;r<t;r++){let o=(s+1)*t+r,a=(s+2)*t+r,l=n[o];n[o]=n[a],n[a]=l}}}function Ht(i){i.updateMatrixWorld(!0);let e=new Qe().copy(i.matrixWorld).invert(),t=new Qe,n=new Map,s=[],r=o=>{for(let a of o.children)a.userData.moving||(a.isMesh&&!a.isInstancedMesh&&!a.userData.keep?s.push(a):r(a))};r(i);for(let o of s){let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();t.multiplyMatrices(e,o.matrixWorld),a.applyMatrix4(t),t.determinant()<0&&Z_(a);let l=[o.material.uuid,o.castShadow,o.receiveShadow,o.renderOrder,o.layers.mask].join("|");n.has(l)||n.set(l,{list:[],o}),n.get(l).list.push(a)}for(let o of s)o.parent.remove(o);for(let{list:o,o:a}of n.values()){let l=Object.keys(o[0].attributes).filter(h=>o.every(d=>d.attributes[h]));for(let h of o)for(let d of Object.keys(h.attributes))l.includes(d)||h.deleteAttribute(d);let c=new At(o.length>1?zn(o,!1):o[0],a.material);c.castShadow=a.castShadow,c.receiveShadow=a.receiveShadow,c.renderOrder=a.renderOrder,c.layers.mask=a.layers.mask,c.frustumCulled=!1,i.add(c)}return i}function Pf(i){let e=a=>new Nt(a),t=Math.min(8,i.renderer.capabilities.getMaxAnisotropy()),n=(a,l,c)=>{let h=a.clone();return h.repeat.set(l,c),h.anisotropy=t,h.needsUpdate=!0,h},s=i.env,r=i.mood.env,o={marble:Ko(i,{roughness:.34,scale:.22}),marbleWall:Ko(i,{roughness:.46,scale:.23,veinStrength:.58}),marbleCornice:Ko(i,{roughness:.34,scale:.22,veinStrength:.58}),marbleFlute:Ko(i,{roughness:.4,scale:.24,flute:!0}),gold:e({color:14464094,roughness:.28,metalness:1,envMap:s,envMapIntensity:1.15*r}),goldSoft:e({color:13214042,roughness:.43,metalness:1,envMap:s,envMapIntensity:1.05*r}),shell:new So({color:15329247,roughness:.36,metalness:.05,clearcoat:.22,clearcoatRoughness:.3,envMap:s,envMapIntensity:.5*r}),seam:e({color:2828848,roughness:.45,metalness:.7,envMap:s,envMapIntensity:.8*r}),glass:e({color:15004159,roughness:.03,metalness:.85,transparent:!0,opacity:.1,envMap:s,envMapIntensity:1.2*r,side:Ut,depthWrite:!1}),hull:e({color:16052455,roughness:.34,metalness:.4,map:i.tex.panel,envMap:s,envMapIntensity:.7*r}),hullBig:e({color:15723231,roughness:.38,metalness:.45,map:n(i.tex.panel,3,2),envMap:s,envMapIntensity:.7*r}),white:e({color:16184300,roughness:.32,metalness:.2,envMap:s,envMapIntensity:.6*r}),dark:e({color:3813929,roughness:.45,metalness:.8}),steel:e({color:11967074,roughness:.4,metalness:.9}),canopy:e({color:1053724,roughness:.06,metalness:.95,envMap:s,envMapIntensity:2*r}),glowWarm:new kt({color:$t(16763e3,5)}),glowGold:new kt({color:$t(16767370,3.2)}),glowRed:new kt({color:$t(16734784,5)}),engine:new kt({color:$t(16773327,6)})};for(let[a,l]of Object.entries({marble:.35,marbleWall:.35,marbleCornice:.35,marbleFlute:.35,gold:1.15,goldSoft:1.05,shell:.5,seam:.8,glass:1.2,hull:.7,hullBig:.7,white:.6,canopy:2}))Ze(i,o[a],"envMapIntensity",l*nt.day.env,l*nt.night.env);for(let[a,l,c]of[["marble",.34,.52],["marbleWall",.46,.61],["marbleCornice",.34,.52],["marbleFlute",.4,.58],["glass",.03,.24]])Ze(i,o[a],"roughness",l,c);return o.yellow=o.gold,o.blue=o.goldSoft,o.concrete=o.marble,o.glowBlue=o.glowGold,o.glowYellow=o.glowGold,o}function Yt(i,e,t,n=3){let s=new Cs(new rs({map:i.tex.glow,color:$t(e,n),blending:bn,depthWrite:!1,fog:!1,transparent:!0}));return s.scale.setScalar(t),s.userData.base=$t(e,n),s.renderOrder=6,s}var tn=(i,e)=>i.material.color.copy(i.userData.base).multiplyScalar(e);var Qo=class i extends At{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Me(t.color):new Me(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Nn,d=new P,u=new P,f=new P,p=new Qe,v=new P(0,0,-1),m=new Bt,g=new P,x=new P,M=new Bt,y=new Qe,b=new Qt(r,o,{samples:c,type:rn}),E=new Vt({name:l.name!==void 0?l.name:"unspecified",uniforms:On.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=b.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(_,S,L){let w=this.getReflectionCamera(L);if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(L.matrixWorld),p.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),g.subVectors(u,f),g.dot(d)>0===!0&&this.forceUpdate===!1)return;g.reflect(d).negate(),g.add(u),p.extractRotation(L.matrixWorld),v.set(0,0,-1),v.applyMatrix4(p),v.add(f),x.subVectors(u,v),x.reflect(d).negate(),x.add(u),w.position.copy(g),w.up.set(0,1,0),w.up.applyMatrix4(p),w.up.reflect(d),w.lookAt(x),w.far=L.far,w.updateMatrixWorld(),w.projectionMatrix.copy(L.projectionMatrix),w.projectionMatrix.elements[8]*=-1,w.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let D=w.projectionMatrix;w.isOrthographicCamera?(M.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],M.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],M.z=-L.far,M.w=1):(M.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],M.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],M.z=-1,M.w=(1+D.elements[10])/D.elements[14]),m.multiplyScalar(2/m.dot(M)),D.elements[2]=m.x,D.elements[6]=m.y,w.isOrthographicCamera?(D.elements[10]=m.z-a,D.elements[14]=m.w-1):(D.elements[10]=m.z+1-a,D.elements[14]=m.w),n.visible=!1;let A=_.getRenderTarget(),C=_.xr.enabled,U=_.shadowMap.autoUpdate;_.xr.enabled=!1,_.shadowMap.autoUpdate=!1,_.setRenderTarget(b),_.state.buffers.depth.setMask(!0),_.autoClear===!1&&_.clear(),_.render(S,w),_.xr.enabled=C,_.shadowMap.autoUpdate=U,_.setRenderTarget(A);let B=L.viewport;B!==void 0&&_.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()},this.getReflectionCamera=function(_){let S=this._reflectionCameras.get(_);return S===void 0&&(S=_.clone(),this._reflectionCameras.set(_,S)),S}}};Qo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var mc=i=>`vec3(${i.map(e=>e.toFixed(4)).join(", ")})`;function If(i){let e=new Bt(0,0,-100,0),t={name:"PoolWater",uniforms:On.merge([Ie.fog,{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uGust:{value:0},uImpact:{value:e}}]),vertexShader:`
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
      }`,fragmentShader:`
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
        vec3 shallow = mix(${mc(nt.day.waterShallow)}, ${mc(nt.night.waterShallow)}, uNight);
        vec3 deep = mix(${mc(nt.day.waterDeep)}, ${mc(nt.night.waterDeep)}, uNight);
        vec3 body = mix(shallow, deep, smoothstep(0.15, 0.75, 1.0 - V.y));
        vec3 col = mix(body, refl, fres);
        vec3 N2 = normalize(vec3(-g.x * 3.0, 1.0, -g.y * 3.0));         // livelier normal for sparkle
        vec3 R = reflect(-V, N2);
        float highlight = max(dot(R, SUN), 0.0);
        float gloss = 550.0 / (1.0 + 900.0 * fwidth(highlight));         // filter subpixel glints instead of flickering
        col += fogTint(SUN) * pow(highlight, gloss) * 1.8;
        gl_FragColor = vec4(col, 1.0);
        #include <fog_fragment>
      }`},n=i.renderer.getDrawingBufferSize(new le),s=i.Q.mirror,r=[n.x,n.y,1],o=new Qo(new Cn(7e3,7e3),{textureWidth:Math.max(256,Math.round(n.x*s)),textureHeight:Math.max(256,Math.round(n.y*s)),clipBias:.02,shader:t,multisample:0});o.rotation.x=-Math.PI/2,o.material.fog=!0,o.material.uniforms.uTime=i.uTime,o.material.uniforms.uGust=i.uGust,dc(o.material,i),o.material.uniforms.uImpact.value=e,o.frustumCulled=!1,i.scene.add(o),o.getReflectionCamera(i.camera).layers.set(0);let a=(l,c,h)=>{r=[l,c,h],o.getRenderTarget().setSize(Math.max(256,Math.round(l*h*s)),Math.max(256,Math.round(c*h*s)))};return i.onResize.push(a),o.userData.setScale=l=>{s=l,a(...r)},o.userData.scale=()=>s,i.updaters.push(l=>{i.flyby?.near>.55&&l-e.z>15&&e.set(i.flyby.pos.x,i.flyby.pos.z,l,i.flyby.near)}),o}var gt=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),ct=(i,e,t)=>i+(e-i)*t,bt=(i,e,t)=>{let n=gt((t-i)/(e-i));return n*n*(3-2*n)},li=i=>(i=gt(i),i*i*i*(i*(6*i-15)+10)),Xe=Math.PI*2;function Ui(i=7){let e=i;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}var Pr=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)};function iu(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Pr(t,n),c=Pr(t+1,n),h=Pr(t,n+1),d=Pr(t+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a}function gs(i,e,t=4){let n=.5,s=1,r=0,o=0;for(let a=0;a<t;a++)r+=n*iu(i*s,e*s),o+=n,n*=.5,s*=2.03;return r/o}function Df(i,e,t=4){let n=.5,s=1,r=0,o=0;for(let a=0;a<t;a++){let l=1-Math.abs(iu(i*s,e*s)*2-1);r+=n*l*l,o+=n,n*=.5,s*=2.07}return r/o}var ft=(i,e=0)=>iu(i,e*13.7+.5)*2-1,Et=class{constructor(e=0,t=40,n=.8){this.x=e,this.v=0,this.k=t,this.c=2*Math.sqrt(t)*n}step(e,t){let n=Math.max(1,Math.ceil(t*120)),s=t/n;for(let r=0;r<n;r++)this.v+=(this.k*(e-this.x)-this.c*this.v)*s,this.x+=this.v*s;return this.x}},gc=class{constructor(e=new P,t=40,n=.8){this.x=e.clone(),this.v=new P,this.k=t,this.c=2*Math.sqrt(t)*n}step(e,t){let n=Math.max(1,Math.ceil(t*120)),s=t/n;for(let r=0;r<n;r++)this.v.x+=(this.k*(e.x-this.x.x)-this.c*this.v.x)*s,this.v.y+=(this.k*(e.y-this.x.y)-this.c*this.v.y)*s,this.v.z+=(this.k*(e.z-this.x.z)-this.c*this.v.z)*s,this.x.addScaledVector(this.v,s);return this.x}};function Ir(i,e,t,n=0){let s=Math.sin(i*.11+e*.045-t*1.25),r=Math.sin(-i*.04+e*.13-t*.8+1.7),o=bt(-.3,1,s*.6+r*.4),a=Math.sin(i*2.3+t*3.7)*Math.sin(e*1.9-t*2.9),l=.16+.95*o;return[l+a*.06+.25*n,-.25*l-a*.06-n]}var Si=(i,e=i)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,t},Mi=(i,e=!1)=>{let t=new ii(i);return t.colorSpace=nn,t.anisotropy=4,e&&(t.wrapS=t.wrapT=Vi),t};function Lf(){let i=Si(128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.75)"),t.addColorStop(.45,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Mi(i)}function Nf(i=256,e=8){let t=Si(i),n=t.getContext("2d"),s=n.createImageData(i,i),r=(o,a,l)=>{let c=Math.floor(o),h=Math.floor(a),d=o-c,u=a-h,f=d*d*(3-2*d),p=u*u*(3-2*u),v=(y,b)=>Pr((y%l+l)%l,(b%l+l)%l),m=v(c,h),g=v(c+1,h),x=v(c,h+1),M=v(c+1,h+1);return m+(g-m)*f+(x-m)*p+(m-g-x+M)*f*p};for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=0,c=.5,h=1;for(let f=0;f<4;f++)l+=c*r(a/i*e*h,o/i*e*h,e*h),c*=.5,h*=2;let d=Math.floor(gt(.42+l*.68)*255),u=(o*i+a)*4;s.data[u]=s.data[u+1]=s.data[u+2]=d,s.data[u+3]=255}return n.putImageData(s,0,0),Mi(t,!0)}function Uf(i,e=[242,238,229]){let n=Si(512),s=n.getContext("2d");s.fillStyle=`rgb(${e})`,s.fillRect(0,0,512,512);for(let r=0;r<170;r++){let o=(1+Math.floor(i()*5))*16,a=(1+Math.floor(i()*3))*16,l=Math.floor(i()*32)*16,c=Math.floor(i()*32)*16,h=Math.floor((i()-.5)*26);s.fillStyle=`rgb(${e.map(d=>gt(d+h,0,255))})`,s.fillRect(l,c,o,a),s.strokeStyle="rgba(60,50,36,0.2)",s.lineWidth=1,s.strokeRect(l+.5,c+.5,o,a)}for(let r=0;r<7;r++){let o=Math.floor(i()*30)*16,a=Math.floor(i()*30)*16;s.fillStyle=r%3===0?"rgba(214,170,76,0.9)":r%3===1?"rgba(176,146,84,0.85)":"rgba(60,54,48,0.8)",s.fillRect(o,a,r%2?64:16,r%2?6:48)}for(let r=0;r<40;r++)s.fillStyle="rgba(25,28,40,0.55)",s.fillRect(Math.floor(i()*64)*8,Math.floor(i()*64)*8,6,2);return Mi(n,!0)}function Ff(i){let n=Si(512,256),s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,256);for(let r=10;r<256;r+=14){let o=i();if(!(o<.35))for(let a=4;a<512;a+=7){if(i()>o*.75)continue;let l=i()<.75,c=.45+i()*.55;s.fillStyle=l?`rgba(255,222,170,${c})`:`rgba(170,215,255,${c})`,s.fillRect(a,r,4,3)}}return Mi(n,!0)}function Of(i){let t=Si(256),n=t.getContext("2d");for(let r=0;r<150;r++){let o=i()*Xe,a=Math.sqrt(i())*112,l=128+Math.cos(o)*a,c=128+Math.sin(o)*a,h=Math.floor(120+i()*135);n.save(),n.translate(l,c),n.rotate(i()*Xe),n.fillStyle=`rgb(${h},${h},${h})`,n.beginPath(),n.ellipse(0,0,9+i()*9,4+i()*4,0,0,Xe),n.fill(),n.restore()}let s=Mi(t);return s.generateMipmaps=!0,s}var jo,$_;function Bf(){return jo?.width===1024?Promise.resolve(!0):$_??($_=(async()=>{let i;try{let e=new Image;if(e.decoding="async",e.src=new URL("../img/world-marble.webp",import.meta.url).href,await Promise.race([e.decode(),new Promise((n,s)=>{i=setTimeout(()=>s(new Error("Texture preload timed out")),1500)})]),e.naturalWidth!==1024||e.naturalHeight!==1024)return!1;let t=Si(1024);return t.getContext("2d").drawImage(e,0,0),jo=t,!0}catch{return!1}finally{clearTimeout(i)}})())}function su(i=512){if(i=Math.max(1024,i),jo?.width===i)return Mi(jo,!0);let e=Si(i),t=e.getContext("2d"),n=t.createImageData(i,i),s=new Map,r=(o,a,l)=>{if(!s.has(l)){let y=new Float32Array(l*l);for(let b=0;b<l;b++)for(let E=0;E<l;E++)y[b*l+E]=Pr(E+19.7,b+43.2);s.set(l,y)}let c=s.get(l),h=Math.floor(o),d=Math.floor(a),u=o-h,f=a-d,p=(h%l+l)%l,v=(d%l+l)%l,m=(p+1)%l,g=(v+1)%l,x=u*u*(3-2*u),M=f*f*(3-2*f);return ct(ct(c[v*l+p],c[v*l+m],x),ct(c[g*l+p],c[g*l+m],x),M)};for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=a/i,c=o/i,h=(r(l*3,c*3,3)-.5)*2.8,d=(r(l*3+.73,c*3+1.37,3)-.5)*2.8,u=l*6+c*6+h+(r(l*24,c*24,24)-.5)*.28,f=c*6+d+(r(l*24+2.7,c*24+5.1,24)-.5)*.28,p=r(u,f,6)*.52+r(u*2+.4,f*2+.8,12)*.24+r(u*4,f*4,24)*.14+r(u*8,f*8,48)*.07+r(u*16,f*16,96)*.03,v=Math.abs(p-.49),m=.26+.74*bt(.22,.72,r(l*3+1.1,c*3+.3,3)),g=(1-bt(.003,.022,v))*m*(.5+r(l*39,c*39,39)*.5),x=(1-bt(.025,.18,v))*m,M=r(u*2.5+.3,f*2.5+.7,15)*.65+r(u*5,f*5,30)*.23+r(u*10,f*10,60)*.12,y=(1-bt(.003,.012,Math.abs(M-.52)))*bt(.38,.58,p)*(1-bt(.1,.22,v)),b=r(l*3+1.9,c*3+.2,3)*.45+r(u*2,f*2,12)*.32+r(u*6,f*6,36)*.15+r(u*12,f*12,72)*.08,E=bt(.63,.82,r(l*4+1.3,c*4+.9,4))*(g*.35+y*.15),_=.7+r(u*20,f*20,120)*.3,S=((a*374761393+o*668265263>>>9)%17-8)*.13,L=(o*i+a)*4,w=250-b*24-x*28-g*119*_-y*18+S,I=249-b*25-x*28-g*112*_-y*16+S,D=245-b*25-x*26-g*99*_-y*12+S;n.data[L]=ct(w,164,E),n.data[L+1]=ct(I,132,E),n.data[L+2]=ct(D,78,E),n.data[L+3]=255}return t.putImageData(n,0,0),jo=e,Mi(e,!0)}function zf(i=22){let t=Si(512,8),n=t.getContext("2d"),s=n.createImageData(512,8);for(let o=0;o<512;o++){let a=Math.pow(Math.abs(Math.sin(o/512*Math.PI*i)),.6)*255;for(let l=0;l<8;l++){let c=(l*512+o)*4;s.data[c]=s.data[c+1]=s.data[c+2]=a,s.data[c+3]=255}}n.putImageData(s,0,0);let r=Mi(t,!0);return r.colorSpace=jn,r}function Hf(){let e=Si(256),t=e.getContext("2d");t.translate(256/2,256/2);let n=t.createRadialGradient(0,0,8,0,0,124);n.addColorStop(0,"#9dc56a"),n.addColorStop(.7,"#5f9a48"),n.addColorStop(1,"#3f7a3c"),t.fillStyle=n,t.beginPath(),t.moveTo(0,0),t.arc(0,0,122,.16,Math.PI*2-.16),t.closePath(),t.fill(),t.strokeStyle="rgba(210,235,170,0.55)",t.lineWidth=2;for(let r=0;r<14;r++){let o=.3+r/14*(Math.PI*2-.6);t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(o)*116,Math.sin(o)*116),t.stroke()}return Mi(e)}function Gf(i){let n=Si(1024,512),s=n.getContext("2d");s.drawImage(su(1024).image,0,0,1024,512),s.fillStyle="rgba(255, 253, 247, 0.48)",s.fillRect(0,0,1024,512);for(let l=0;l<26;l++){s.strokeStyle=`rgba(${150+i()*40}, ${140+i()*30}, ${120+i()*30}, ${.02+i()*.035})`,s.lineWidth=1+i()*5;let c=i()*1024,h=i()*512;s.beginPath(),s.moveTo(c,h);for(let d=0;d<5;d++)c+=(i()-.5)*320,h+=(i()-.5)*120,s.lineTo(c,h);s.stroke()}let r=l=>`rgba(170, 122, 34, ${l})`;s.lineCap="round";for(let l=0;l<=12;l++)s.strokeStyle=r(l%3?.28:.55),s.lineWidth=l%3?1.2:2,s.beginPath(),s.moveTo(l/12*1024,22),s.lineTo(l/12*1024,490),s.stroke();for(let l=1;l<6;l++)s.strokeStyle=r(l===3?.7:.3),s.lineWidth=l===3?2.6:1.2,s.beginPath(),s.moveTo(0,l/6*512),s.lineTo(1024,l/6*512),s.stroke();s.strokeStyle=r(.6),s.lineWidth=2,s.setLineDash([10,7]),s.beginPath();for(let l=0;l<=1024;l+=8){let c=256-Math.sin(l/1024*Xe)*512*.13;l?s.lineTo(l,c):s.moveTo(l,c)}s.stroke(),s.setLineDash([]);let o=(l,c,h)=>{s.fillStyle=r(.85),s.beginPath();for(let d=0;d<8;d++){let u=d/8*Xe,f=d%2?h*.38:h;s.lineTo(l+Math.cos(u)*f,c+Math.sin(u)*f)}s.closePath(),s.fill()};for(let l=0;l<46;l++){let c=i()*1024,h=50+i()*412,d=3+Math.floor(i()*4),u=[];for(let f=0;f<d;f++)u.push([c,h]),c+=(i()-.3)*70,h+=(i()-.5)*54;s.strokeStyle=r(.5),s.lineWidth=1.3,s.beginPath(),u.forEach(([f,p],v)=>v?s.lineTo(f,p):s.moveTo(f,p)),s.stroke(),u.forEach(([f,p])=>o(f,p,3+i()*4))}for(let l=0;l<260;l++)s.fillStyle=r(.3+i()*.5),s.beginPath(),s.arc(i()*1024,20+i()*472,.7+i()*1.3,0,Xe),s.fill();let a=Mi(n);return a.wrapS=Vi,a.anisotropy=8,a}function kf(){let e=Si(128),t=e.getContext("2d");t.translate(128/2,128/2);let n=t.createRadialGradient(0,0,0,0,0,60);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.beginPath();for(let s=0;s<8;s++){let r=s/8*Math.PI*2,o=s%2?9:62;t.lineTo(Math.cos(r)*o,Math.sin(r)*o)}return t.closePath(),t.fill(),t.beginPath(),t.arc(0,0,16,0,Math.PI*2),t.fill(),Mi(e)}function ci(i,e=20,t=4){let n=(v,m,g,x,M)=>.5*(2*m+(-v+g)*M+(2*v-5*m+4*g-x)*M*M+(-v+3*m-3*g+x)*M*M*M),s=(v,m,g)=>{let x=i[gt(v,0,i.length-1)];return x[m]===void 0?g:x[m]},r=[];for(let v=0;v<i.length-1;v++)for(let m=0;m<t;m++){let g=m/t,x=(M,y)=>n(s(v-1,M,y),s(v,M,y),s(v+1,M,y),s(v+2,M,y),g);r.push({z:ct(i[v].z,i[v+1].z,g),w:Math.max(.001,x("w",1)),h:Math.max(.001,x("h",1)),y:x("y",0),e:x("e",2.4),belly:x("belly",1)})}let o=i[i.length-1];r.push({z:o.z,w:Math.max(.001,o.w),h:Math.max(.001,o.h),y:o.y||0,e:o.e||2.4,belly:o.belly||1});let a=r.length,l=[],c=[],h=[];for(let v=0;v<a;v++){let m=r[v];for(let g=0;g<=e;g++){let x=-Math.PI/2+g/e*Xe,M=Math.cos(x),y=Math.sin(x),b=2/m.e,E=m.w*Math.sign(M)*Math.pow(Math.abs(M),b),_=m.h*Math.sign(y)*Math.pow(Math.abs(y),b);y<0&&(_*=m.belly),l.push(E,m.y+_,m.z),c.push(v/(a-1),g/e)}}for(let v=0;v<a-1;v++)for(let m=0;m<e;m++){let g=v*(e+1)+m,x=g+1,M=g+e+1,y=M+1;h.push(g,x,M,x,y,M)}let d=new lt;d.setAttribute("position",new Te(l,3)),d.setAttribute("uv",new Te(c,2)),d.setIndex(h),d.computeVertexNormals();let u=Math.floor(a/2)*(e+1)+Math.floor(e/4),f=d.attributes.normal,p=d.attributes.position;if(f.getX(u)*p.getX(u)+f.getY(u)*(p.getY(u)-r[Math.floor(a/2)].y)<0){for(let v=0;v<h.length;v+=3){let m=h[v+1];h[v+1]=h[v+2],h[v+2]=m}d.setIndex(h),d.computeVertexNormals()}for(let v=0;v<a;v++){let m=v*(e+1),g=m+e,x=f.getX(m)+f.getX(g),M=f.getY(m)+f.getY(g),y=f.getZ(m)+f.getZ(g),b=Math.hypot(x,M,y)||1;f.setXYZ(m,x/b,M/b,y/b),f.setXYZ(g,x/b,M/b,y/b)}return d}function Vn(i,e=.14,t=.04){let n=new Hn;i.forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath();let s=new Yi(n,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,steps:1});return s.translate(0,0,-e/2),s.rotateX(Math.PI/2),s}var ea=class{constructor(e,t,n,s){this.n=e,this.width=t,this.color=n,this.pts=[],this.pos=new Float32Array(e*2*3),this.col=new Float32Array(e*2*3);let r=[];for(let a=0;a<e-1;a++){let l=a*2;r.push(l,l+1,l+2,l+1,l+3,l+2)}let o=new lt;o.setAttribute("position",new Dt(this.pos,3)),o.setAttribute("color",new Dt(this.col,3)),o.setIndex(r),this.mesh=new At(o,new kt({vertexColors:!0,blending:bn,depthWrite:!1,side:Ut,transparent:!0,fog:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,s.add(this.mesh),this._d=new P,this._s=new P,this._c=new P}reset(){this.pts.length=0}push(e){this.pts.unshift(e.clone()),this.pts.length>this.n&&this.pts.pop()}update(e,t=1){let{pts:n,n:s,pos:r,col:o,color:a}=this,l=n.length;for(let c=0;c<s;c++){let h=Math.min(c,l-1);if(l<2){r.fill(0,c*6,c*6+6),o.fill(0,c*6,c*6+6);continue}let d=n[h],u=n[Math.max(h-1,0)],f=n[Math.min(h+1,l-1)];this._d.subVectors(f,u),this._c.subVectors(e,d),this._s.crossVectors(this._d,this._c).normalize().multiplyScalar(this.width*(.35+.65*(1-c/s))),r[c*6]=d.x+this._s.x,r[c*6+1]=d.y+this._s.y,r[c*6+2]=d.z+this._s.z,r[c*6+3]=d.x-this._s.x,r[c*6+4]=d.y-this._s.y,r[c*6+5]=d.z-this._s.z;let p=c>=l?0:Math.pow(1-c/s,2.2)*t;for(let v=0;v<2;v++)o[c*6+v*3]=a.r*p,o[c*6+v*3+1]=a.g*p,o[c*6+v*3+2]=a.b*p}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}};function J_(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=Ui(1907),n=(r,o,a,l,c)=>{e.save(),e.translate(r,o),e.rotate(a);let h=["#d8ddc0","#c7d0ad","#e1e0c0","#cdd7b7"][Math.floor(t()*4)],d=e.createLinearGradient(l*.2,-c,l*.55,c);d.addColorStop(0,"#939e84"),d.addColorStop(.43,h),d.addColorStop(1,"#a3b08f"),e.fillStyle=d,e.beginPath(),e.moveTo(0,0),e.quadraticCurveTo(l*.42,-c,l,0),e.quadraticCurveTo(l*.42,c*.8,0,0),e.fill(),e.clip(),e.strokeStyle="rgba(229,231,197,0.55)",e.lineWidth=.65,e.beginPath(),e.moveTo(0,0),e.lineTo(l*.91,0),e.stroke(),e.lineWidth=.4;for(let u=1;u<5;u++)for(let f of[-1,1]){let p=u/6;e.beginPath(),e.moveTo(l*p,0),e.lineTo(l*(p+.15),f*c*.68*Math.sin(p*Math.PI)),e.stroke()}e.restore()};for(let[r,o]of[[46,55],[126,23],[213,62],[215,140],[50,147]]){let c=r-128,h=o-230,d=Math.atan2(h,c);e.strokeStyle="rgba(100, 93, 62, 0.65)",e.lineWidth=1.7,e.beginPath(),e.moveTo(128,230),e.quadraticCurveTo(128+c*.65,230+h*.35,r,o),e.stroke();for(let u=1;u<=8;u++){let f=u/9,p=128+c*f+Math.sin(f*Math.PI)*c*.15,v=230+h*f;for(let m of[-1,1])n(p+(t()-.5)*6,v+(t()-.5)*6,d+m*(.65+t()*.45),17+t()*18,4.8+t()*5.8)}n(r,o,d,22,7)}let s=new ii(i);return s.colorSpace=nn,s}function Vf(i,e,t,n){let s=Ui(7319),r=i.Q.low,o=r?66:112,a=r?7:10,l=r?2:3,c=new Nt({color:16777215,roughness:.93,metalness:0,envMap:i.env,envMapIntensity:.08}),h=new Rt(new $n(.52,1,1,r?5:7),c,o*(a+2)),d=J_();d.anisotropy=Math.min(8,i.renderer.capabilities.getMaxAnisotropy());let u=new Nt({color:16777215,map:d,bumpMap:d,bumpScale:.008,roughness:.84,metalness:0,envMap:i.env,envMapIntensity:.1,alphaTest:.42,side:Ut});u.onBeforeCompile=D=>{D.uniforms.uWoodTime=i.uTime,D.uniforms.uWoodGust=i.uGust,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
uniform float uWoodTime; uniform float uWoodGust;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          float phase = instanceMatrix[3].x * 0.67 + instanceMatrix[3].z * 0.43;
          transformed.x += sin(uWoodTime * 0.72 + phase) * uv.y * (0.024 + uWoodGust * 0.018);
          transformed.z += sin(uWoodTime * 0.51 + phase * 1.7) * uv.y * 0.017;
        #endif`)};let f=new Rt(new Cn(1,1,1,2),u,o*a*l),p=new Qe,v=new Xt,m=new cn,g=new P,x=new P,M=new P(0,1,0),y=new P,b=new P,E=new P,_=new Me,S=[4350792,5402181,6715723,4023888,7901274],L=0,w=0,I=(D,A,C,U)=>{y.subVectors(A,D),v.setFromUnitVectors(M,y.clone().normalize()),p.compose(g.copy(D).add(A).multiplyScalar(.5),v,x.set(C,y.length(),C)),h.setMatrixAt(L,p),h.setColorAt(L++,_.set(7102801).multiplyScalar(U))};for(let D=0;D<o;D++){let A,C;do A=ct(-22,40,s()),C=ct(-58,-15,s());while(n(A)<.62);let U=t(A,C),B=4.4+s()*5.2,O=B*(D%5===0?.25:.36+s()*.11),W=(s()-.5)*1,X=s()*Xe,Y=.15+B*.019;b.set(A,U-.1,C),E.set(A+W*.45,U+B*.47,C+.1),I(b,E,Y,.8+s()*.3),b.copy(E),E.set(A+W,U+B*.91,C-.2),I(b,E,Y*.62,.9);let j=S[D%S.length];for(let Z=0;Z<a;Z++){let ee=Z/(a-1),$=X+Z*2.39996,he=O*Math.sin((.18+ee*.72)*Math.PI)*(.75+s()*.3),fe=A+W+Math.cos($)*he,re=U+B*(.96-ee*.39)+s()*.4,ce=C+Math.sin($)*he;b.set(A+W*.6,U+B*(.4+(1-ee)*.22),C),E.set(fe,re-.3,ce),I(b,E,Y*(.16+ee*.18),.86);for(let Ee=0;Ee<l;Ee++){let Ye=O*(.85+s()*.55);v.setFromEuler(m.set((s()-.5)*1.3,$+Ee*Math.PI/l,(s()-.5)*.8)),p.compose(g.set(fe+(s()-.5)*.45,re,ce+(s()-.5)*.45),v,x.set(Ye,Ye*(.8+s()*.35),Ye)),f.setMatrixAt(w,p),f.setColorAt(w++,_.set(j).multiplyScalar(.65+s()*.27+(1-ee)*.22))}}}h.count=L,f.count=w,h.frustumCulled=f.frustumCulled=!1,h.receiveShadow=f.receiveShadow=!0,e.add(h,f)}var xc=`
float hash21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
float noise21(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y); }
`;function Wf(i){let e=new Nt({vertexColors:!0,roughness:.93,envMap:i.env,envMapIntensity:.22});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCliffPos; varying vec3 vCliffNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCliffPos=position; vCliffNormal=normal;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vCliffPos; varying vec3 vCliffNormal;
        ${xc}
        vec3 cliffBump(vec3 position, vec3 normal, vec2 gradient, float face){
          vec3 dx=dFdx(position), dy=dFdy(position);
          vec3 a=cross(dy,normal), b=cross(normal,dx);
          float det=dot(dx,a)*face;
          return normalize(abs(det)*normal-sign(det)*(gradient.x*a+gradient.y*b));
        }`).replace("#include <color_fragment>",`#include <color_fragment>
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
        `).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,0.48,wet*0.75);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=cliffBump(-vViewPosition,normal,vec2(dFdx(rockRelief),dFdy(rockRelief)),faceDirection);`)},e}var K_=`
varying vec2 vUv;
#include <fog_pars_vertex>
void main(){ vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
}`,ru=(i,e,t)=>{let n=On.merge([Ie.fog,{uTime:{value:0},uTint:{value:new Me(...e)}}]);return Ze(i,n.uTint,"value",new Me(...e),new Me(...t)),n.uTime=i.uTime,n};function Xf(i,e,t){let n=Ui(8126),s=i.Q.low,r=[[-9,2.3],[-1.2,3.4],[6.5,2]],o=[],a=(S,L,w,I,D)=>{let A=s?20:32,C=I<.5?5:2,U=[],B=[],O=[],W=[],X=[];for(let j=0;j<=A;j++)for(let Z=0;Z<=C;Z++){let ee=j/A,$=Z/C,he=1-ee*.22+ee*ee*.34;U.push(S+w+($-.5)*L*he+Math.sin(ee*12+D)*ee*.12,(t+.35)*(1-ee*ee),-.04+6.44*ee+Math.sin(ee*15+$*4+D)*ee*.1+(I<.5?-.04:.04)),B.push($,ee),O.push(I),W.push(D)}for(let j=0;j<A;j++)for(let Z=0;Z<C;Z++){let ee=j*(C+1)+Z,$=ee+1,he=ee+C+1,fe=he+1;X.push(ee,he,$,$,he,fe)}let Y=new lt;Y.setAttribute("position",new Te(U,3)),Y.setAttribute("uv",new Te(B,2)),Y.setAttribute("aStrength",new Te(O,1)),Y.setAttribute("aSeed",new Te(W,1)),Y.setIndex(X),o.push(Y)};for(let[S,L]of r){a(S,L,0,.3,n()*30);let w=s?5:8;for(let I=0;I<w;I++)a(S,L/w*(.65+n()*.6),(I/(w-1)-.5)*L*.84,.7+n()*.3,n()*30);e.add(V(_t(L+.9,.7,1.6,.2),i.mat.marble,S,t+.05,-.9))}let l=new Vt({transparent:!0,depthWrite:!1,side:Ut,fog:!0,uniforms:ru(i,[.86,1.02,1.03],[.32,.44,.65]),vertexShader:`
      uniform float uTime; attribute float aStrength; attribute float aSeed;
      varying vec2 vUv; varying float vStrength; varying float vSeed;
      #include <fog_pars_vertex>
      void main(){ vUv=uv; vStrength=aStrength; vSeed=aSeed; vec3 p=position;
        p.x+=sin(uv.y*25.0-uTime*3.5+aSeed)*uv.y*uv.y*0.035;
        vec4 mvPosition=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime; uniform vec3 uTint; varying vec2 vUv; varying float vStrength; varying float vSeed;
      #include <fog_pars_fragment>
      ${xc}
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
      }`}),c=V(zn(o),l);c.renderOrder=3,c.userData.keep=!0,e.add(c);let h=new Vt({transparent:!0,depthWrite:!1,side:Ut,fog:!0,uniforms:ru(i,[.88,1.03,1.02],[.22,.34,.49]),vertexShader:K_,fragmentShader:`
      uniform float uTime; uniform vec3 uTint; varying vec2 vUv;
      #include <fog_pars_fragment>
      ${xc}
      void main(){
        vec2 p=(vUv-0.5)*2.0; float r=length(p*vec2(0.9,1.15));
        float n=noise21(p*8.0+vec2(uTime*0.14,-uTime*0.1));
        float foam=(1.0-smoothstep(0.1,0.65,r+n*0.18))*smoothstep(0.2,0.68,n);
        float rings=pow(max(0.0,sin(r*32.0-uTime*2.8+n*0.7)),9.0)*(1.0-smoothstep(0.3,1.0,r))*0.19;
        float a=foam*0.63+rings; if(a<0.004)discard;
        gl_FragColor=vec4(uTint,a);
        #include <fog_fragment>
      }`}),d=r.map(([S,L])=>new Cn(L*4.5,L*4.2).rotateX(-Math.PI/2).translate(S,.075,6.5)),u=V(zn(d),h);u.renderOrder=4,u.userData.keep=!0,e.add(u);let f=s?9:17,p=f*r.length,v=new Cn(1,1),m=new Float32Array(p),g=new Vt({transparent:!0,depthWrite:!1,fog:!0,uniforms:ru(i,[.84,.95,.96],[.2,.3,.48]),vertexShader:`
      uniform float uTime; attribute float aPhase; varying vec2 vUv; varying float vLife;
      #include <fog_pars_vertex>
      void main(){
        vUv=uv; float age=fract(uTime*0.075+aPhase); vLife=sin(age*3.14159265);
        vec3 center=instanceMatrix[3].xyz; center.x+=age*1.7; center.y+=age*1.8; center.z+=age*0.7;
        vec4 mvPosition=modelViewMatrix*vec4(center,1.0);
        vec2 size=vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
        mvPosition.xy+=position.xy*size*(0.7+age*0.65); gl_Position=projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uTint; varying vec2 vUv; varying float vLife;
      #include <fog_pars_fragment>
      ${xc}
      void main(){
        vec2 p=vUv*2.0-1.0; float r=dot(p,p);
        float cloudy=noise21(vUv*5.0)*0.6+noise21(vUv*11.0)*0.4;
        float a=(1.0-smoothstep(0.18,1.0,r))*cloudy*vLife*0.17;
        gl_FragColor=vec4(uTint,a);
        #include <fog_fragment>
      }`}),x=new Rt(v,g,p),M=new Qe,y=new Xt,b=new P,E=new P,_=0;for(let[S,L]of r)for(let w=0;w<f;w++)m[_]=n(),M.compose(b.set(S+(n()-.5)*L*2,.25+n()*1,6.4+n()*1.6),y,E.set(L*(.7+n()*.8),1.1+n()*1.4,1)),x.setMatrixAt(_++,M);v.setAttribute("aPhase",new os(m,1)),x.renderOrder=5,x.frustumCulled=!1,x.layers.set(1),e.add(x)}var qf=(i,e,t,n,s,r,o=0,a=1)=>{t.makeRotationY(o),t.scale(new P(a,a,a)),t.setPosition(n,s,r),i.setMatrixAt(e,t)};function Yf(i){let e=i.mat,t=Re.DAIS,n=yt(t.x,0,t.z);for(let[l,c,h]of[[t.r+1.25,.18,.9],[t.r+.62,.37,.5],[t.r,t.y,.5]])n.add(V(xt(l,l,h,96),e.marble,0,c-h/2,0));let s=(l,c,h)=>V(new Ke(l,c,8,128).rotateX(Math.PI/2),e.gold,0,h,0);n.add(s(t.r-.22,.028,t.y+.006),s(t.r-.42,.012,t.y+.004),s(2.3,.02,t.y+.005),s(t.r+.62-.12,.02,.376),s(t.r+1.25-.12,.02,.186));let r=new Hn;for(let l=0;l<16;l++){let c=l/16*Xe,h=l%2?.34:l%4?1.35:2.2;r[l?"lineTo":"moveTo"](Math.cos(c)*h,Math.sin(c)*h)}r.closePath();let o=V(new Ds(r).rotateX(-Math.PI/2),e.goldSoft,0,t.y+.004,0);o.rotation.y=.2,n.add(o),kn(n,!1,!0),i.scene.add(Ht(n));let a=new St;i.scene.add(a);for(let[l,c,h,d]of Zo){let u=yt(l,0,c,V(xt(h,h*1.04,d+.5,48),e.marble,0,d-(d+.5)/2,0),V(new Ke(h-.07,.014,6,64).rotateX(Math.PI/2),e.gold,0,d+.004,0));d>.5&&u.add(V(xt(h+.12,h+.16,.16,48),e.marble,0,.06,0),V(new Ke(h+.01,.03,8,64).rotateX(Math.PI/2),e.gold,0,d-.09,0)),kn(u),a.add(u)}Ht(a)}function Zf(i){let e=i.mat,t=Re.ROTUNDA.r,n=Re.ROTUNDA.bays,s=Xe/n,r=s/2,o=new Qe,a=Re.WALK.y,l=6,c=a+.42+l,h=c+.62,d=h+3.85,u=2.75,f=V(jt([[Re.WALK.r1,-.8],[Re.WALK.r1,a-.06],[Re.WALK.r1-.08,a],[Re.WALK.r0+.08,a],[Re.WALK.r0,a-.06],[Re.WALK.r0,-.8]],144),e.marble);f.receiveShadow=!0,i.scene.add(f),i.scene.add(V(new Ke(Re.WALK.r0+.2,.025,6,180).rotateX(Math.PI/2),e.gold,0,a+.005,0));let p=zn([jt([[0,0],[.74,0],[.74,.14],[.62,.2],[.66,.3],[.55,.42],[0,.42]],28),jt([[0,c-a],[.44,c-a],[.5,c-a+.1],[.46,c-a+.18],[.62,c-a+.4],[.74,c-a+.46],[.74,c-a+.62],[0,c-a+.62]],28)]),v=xt(.43,.5,l,28,!0);v.translate(0,.42+l/2,0);let m=zn([new Ke(.52,.035,6,22).rotateX(Math.PI/2).translate(0,.46,0),new Ke(.455,.03,6,22).rotateX(Math.PI/2).translate(0,c-a-.02,0),new Ke(.75,.022,5,22).rotateX(Math.PI/2).translate(0,c-a+.54,0)]),g=new Rt(p,e.marble,n),x=new Rt(v,e.marbleFlute,n),M=new Rt(m,e.gold,n),y=2*t*Math.sin(r),b=t*Math.cos(r),E=new Hn;E.moveTo(-y/2,h),E.lineTo(-u,h),E.absarc(0,h,u,Math.PI,0,!0),E.lineTo(y/2,h),E.lineTo(y/2,d),E.lineTo(-y/2,d),E.closePath();let _=new Yi(E,{depth:.9,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2,curveSegments:28});_.translate(0,0,-.45);let S=zn([new Ke(u+.02,.05,6,28,Math.PI).translate(0,h,.5),new Ke(u+.02,.05,6,28,Math.PI).translate(0,h,-.5),new Ke(u+.36,.02,5,28,Math.PI).translate(0,h,-.5)]),L=zn([_t(.42,.7,1.06,.06).translate(0,h+u+.26,0),new Mo(.2).scale(1,1.5,.5).translate(0,h+u+.95,-.5)]),w=new Rt(_,e.marbleWall,n),I=new Rt(S,e.gold,n),D=new Rt(L,e.gold,n);for(let re=0;re<n;re++){let ce=(re+.5)*s;for(let Ye of[g,x,M])qf(Ye,re,o,Math.sin(ce)*t,a,Math.cos(ce)*t,ce);let Ee=re*s;for(let Ye of[w,I,D])qf(Ye,re,o,Math.sin(Ee)*b,0,Math.cos(Ee)*b,Ee)}for(let re of[g,x,M,w,I,D])re.castShadow=re===g||re===x||re===w||re===D,re.receiveShadow=!0,re.frustumCulled=!1,i.scene.add(re);let A=d;i.scene.add(kn(V(jt([[t+.72,A],[t+.72,A+.34],[t+.92,A+.44],[t+.92,A+.9],[t+1.2,A+1.04],[t+1.2,A+1.3],[t-1.2,A+1.3],[t-1.2,A+1.04],[t-.92,A+.9],[t-.92,A+.44],[t-.72,A+.34],[t-.72,A]],180),e.marbleCornice)));for(let[re,ce,Ee]of[[t-.93,A+.67,.04],[t-1.21,A+1.17,.03],[t-.73,A+.06,.025]])i.scene.add(V(new Ke(re,Ee,6,220).rotateX(Math.PI/2),e.gold,0,ce,0));let C=A+1.3,U=4.4,B=C+10.6,O=re=>new P(U+(t-U)*Math.cos(re*Math.PI/2),C+(B-C)*Math.sin(re*Math.PI/2),0);class W extends Fn{getPoint(ce,Ee=new P){return Ee.copy(O(ce))}}let X=new vi(new W,28,.1,5,!1),Y=new Rt(X,e.marble,n*2);for(let re=0;re<n*2;re++)o.makeRotationY(-(re+.5)*s/2+Math.PI/2),Y.setMatrixAt(re,o);Y.frustumCulled=!1,Y.receiveShadow=!0,i.scene.add(Y);for(let re of[.26,.5,.72,.9]){let ce=O(re);i.scene.add(kn(V(new Ke(ce.x,.07,6,160).rotateX(Math.PI/2),e.marble,0,ce.y,0),!1,!0))}i.scene.add(V(new Ke(U,.2,10,96).rotateX(Math.PI/2),e.gold,0,B,0),V(new Ke(t-.1,.09,8,200).rotateX(Math.PI/2),e.gold,0,C+.05,0));let j=[];for(let re=0;re<=24;re++){let ce=O(re/24);j.push([ce.x,ce.y])}let Z=V(jt(j,96),e.glass);Z.renderOrder=2,i.scene.add(Z);let ee=[],$=new St;i.scene.add($);for(let re=0;re<n;re+=2){let ce=re*s,Ee=Math.sin(ce)*(Re.WALK.r0+.55),Ye=Math.cos(ce)*(Re.WALK.r0+.55),De=yt(Ee,a,Ye,V(jt([[0,0],[.24,0],[.2,.08],[.07,.2],[.05,1.5],[.1,1.62],[.04,1.7],[0,1.7]],14),e.gold),V(new Ct(.17,14,10),e.glass,0,1.92,0),V(new Ct(.075,10,8),e.glowWarm,0,1.92,0),V(jt([[.2,1.72],[.05,2.18],[0,2.3]],12),e.gold)),$e=Yt(i,16760944,1.5,3.2);$e.position.y=1.92,De.add($e),ee.push($e),$.add(De)}Ht($);let he={lamps:nt.day.lamps};Ze(i,he,"lamps",nt.day.lamps,nt.night.lamps);let fe=re=>ee.forEach((ce,Ee)=>tn(ce,he.lamps*(.85+.15*Math.sin(re*2.3+Ee*1.7))));return i.updaters.push(fe),i.moodBindings.push(()=>fe(i.uTime.value)),fe(i.uTime.value),{capY:c,wallTop:d,domeY:C,eyeY:B,eyeR:U,spring:h,ra:u,curve:O}}function $f(i){let n=[],s=[],r=[],o=new Me,a=new Me(16185596),l=new Me(8160918),c=new Me(6258517),h=new Me(10135690);for(let f=0;f<=36;f++)for(let p=0;p<=280;p++){let v=p/280*Xe,m=420+Math.pow(f/36,1.4)*2400,g=Math.sin(v)*m,x=Math.cos(v)*m,M=bt(420,1900,m)*(.6+.4*Math.sin(v*3+1.2)*Math.sin(v*1.3))*bt(2820,2300,m),y=.35+.65*bt(0,.5,Math.abs(Math.sin((v-Math.PI)*.5-.02))),b=-3+bt(420,560,m)*12+M*y*(30+300*Df(g*.0011+3.1,x*.0011+7.7,5));n.push(g,b,x),o.copy(h).lerp(c,bt(4,40,b)).lerp(l,bt(40,110,b+gs(g*.01,x*.01,2)*40)).lerp(a,bt(120,200,b+gs(g*.006,x*.006,2)*60)),s.push(o.r,o.g,o.b)}for(let f=0;f<36;f++)for(let p=0;p<280;p++){let v=f*281+p,m=v+1,g=v+280+1,x=g+1;r.push(v,g,m,m,g,x)}let d=new lt;d.setAttribute("position",new Te(n,3)),d.setAttribute("color",new Te(s,3)),d.setIndex(r),d.computeVertexNormals();let u=V(d,new hs({vertexColors:!0}));u.frustumCulled=!1,i.scene.add(u)}function Jf(i){let e=i.mat,t=Re.FALLS,n=yt(t.x,0,t.z),s=new Qe;n.rotation.y=-.5,i.scene.add(n);let r=15,o=-30,a=48,l=-64,c=8,h=64,d=58,u=[],f=[],p=A=>bt(-27,-14,A)*bt(45,30,A),v=(A,C)=>{let U=bt(-14,-52,C)*(5+11*gs(A*.03+2,C*.03+5,3))*bt(l,l+14,C),B=bt(4.4,-1,C+(gs(A*.09,C*.09+3,3)-.5)*2.4+Math.sin(A*.21)*.7);return(r+U)*B*p(A)-.8*(1-B*p(A))};for(let A=0;A<=d;A++)for(let C=0;C<=h;C++){let U=ct(o,a,C/h),B=ct(l,c,A/d);u.push(U,v(U,B),B)}for(let A=0;A<d;A++)for(let C=0;C<h;C++){let U=A*(h+1)+C,B=U+1,O=U+h+1,W=O+1;f.push(U,O,B,B,O,W)}let m=new lt;m.setAttribute("position",new Te(u,3)),m.setIndex(f),m.computeVertexNormals();let g=[],x=new Me,M=new Me(5527889),y=new Me(10656651),b=new Me(5139273),E=new Me(8032085),_=m.attributes.normal;for(let A=0;A<_.count;A++){let C=u[A*3],U=u[A*3+1],B=u[A*3+2],O=bt(.55,.88,_.getY(A));x.copy(M).lerp(y,gs(C*.2,U*.35+B*.2,3)).lerp(b,bt(.42,.62,gs(C*.16+4,U*.2+B*.16,3))*.32).lerp(x.clone().copy(b).lerp(E,gs(C*.07,B*.07,2)),O),g.push(x.r,x.g,x.b)}m.setAttribute("color",new Te(g,3));let S=V(m,Wf(i));S.userData.keep=!0,n.add(S),Vf(i,n,v,p),n.add(V(_t(47,.6,13,.15),e.marble,8,r+.1,-7.6),V(_t(46,.2,.34,.08),e.marble,8,r+1.3,-1.5));let L=42,w=new Rt(jt([[0,0],[.16,0],[.13,.12],[.07,.3],[.13,.62],[.07,.9],[.14,1],[0,1]],8),e.marble,L);for(let A=0;A<L;A++)s.makeTranslation(-14.6+A*(45.2/(L-1)),r+.3,-1.5),w.setMatrixAt(A,s);n.add(w);let I=yt(20,r+.4,-8);for(let A=0;A<10;A++){let C=A/10*Xe;I.add(V(xt(.4,.46,6.4,12),e.marbleFlute,Math.cos(C)*4.6,3.2,Math.sin(C)*4.6))}I.add(V(xt(5.4,5.6,.8,32),e.marble,0,6.8,0),V(new Ct(5,28,12,0,Xe,0,Math.PI/2),e.marble,0,7.2,0),V(new Ct(.55,12,10),e.gold,0,12.5,0),V(new Ke(5.5,.07,6,48).rotateX(Math.PI/2),e.gold,0,7.22,0),V(xt(5.9,5.9,.4,32),e.marble,0,-.1,0));let D=Yt(i,16760944,9,.3);D.position.set(0,3.4,0),I.add(D),Ze(i,D.material,"color",$t(16760944,.3),$t(16760944,2.2)),n.add(I),Xf(i,n,r),Ht(n)}function Kf(i){let e=i.mat,t=Re.DOCK,n=yt(t.x,t.y,t.z);i.scene.add(n),n.add(V(xt(15,14.2,1.4,48),e.marble,0,-.7,0),V(new Ke(11.5,.2,6,64).rotateX(Math.PI/2),e.gold,0,.06,0),V(new Ke(5.2,.14,6,64).rotateX(Math.PI/2),e.gold,0,.06,0));for(let f=0;f<6;f++){let p=f*Xe/6+.4;n.add(V(xt(.8,1,8,12),e.marble,Math.cos(p)*11,-5,Math.sin(p)*11))}let s=yt(-17,0,5,V(xt(1.3,1.8,11,16),e.marble,0,4.4,0),V(new Ct(2.1,20,10,0,Xe,0,Math.PI/2),e.gold,0,9.9,0),V(_t(9,.8,2.4,.2),e.marble,4.5,-.6,0));n.add(s),Ht(n);let r=Yt(i,16760944,4,4);r.position.set(-17,12.6,5),n.add(r);let o=24,a=new Rt(new Ct(.26,8,6),new kt,o),l=new Qe,c=new Me;for(let f=0;f<o;f++){let p=f/o*Xe;l.makeTranslation(Math.cos(p)*14.2,.2,Math.sin(p)*14.2),a.setMatrixAt(f,l),a.setColorAt(f,c.set(0))}n.add(a);let h=[0,1].map(()=>{let f=Yt(i,16773336,14,0);return f.userData.base=$t(16773336,1.2),i.scene.add(f),f}),d=$t(16767392,2.4),u=$t(16756800,5);i.pad={activity:0,wash:h,spots:[new P(t.x+5.2,t.y+.1,t.z-2.5),new P(t.x-5,t.y+.1,t.z+3.2)]},i.updaters.push(f=>{let p=i.pad.activity;for(let v=0;v<o;v++){let m=(v/o*3-f*ct(.35,1.6,p))%1,g=Math.pow((m+1)%1,5);c.copy(d).lerp(u,p).multiplyScalar(.12+g),a.setColorAt(v,c)}a.instanceColor.needsUpdate=!0,tn(r,.2+Math.pow(Math.max(0,Math.sin(f*2.2)),12)*1.2)})}var vc=class{constructor(e){this.group=new St,this.group.name="Engraving laser",this.group.visible=!1,e.scene.add(this.group);let t=new kt({color:$t(16774111,7),depthWrite:!1,fog:!1}),n=new kt({color:$t(16750635,3),transparent:!0,opacity:.6,blending:bn,depthWrite:!1,fog:!1});this.core=new At(new $n(.009,.009,1,8),t),this.halo=new At(new $n(.026,.038,1,12,1,!0),n),this.hotspot=new At(new Ct(.019,12,8),t),this.glow=Yt(e,16751666,.38,4.5),this.flare=new Cs(new rs({map:e.tex.star,color:$t(16773066,4),transparent:!0,blending:bn,depthWrite:!1,fog:!1})),this.group.add(this.halo,this.core,this.hotspot,this.glow,this.flare),this.group.traverse(s=>{s.layers.set(1),s.frustumCulled=!1,s.renderOrder=6}),this.axis=new P,this.offset=new P,this.normal=new P,this.contact=new P,this.up=new P(0,1,0),this.active=!1,this.length=0}update(e,t,n,s,r,o){if(this.active=this.group.visible=!1,this.length=0,r<=.06)return;this.axis.set(1,0,0).transformDirection(t.matrixWorld),this.offset.subVectors(e,n);let a=this.offset.dot(this.axis),l=a*a-this.offset.lengthSq()+s*s;if(l<0)return;let c=-a-Math.sqrt(l);if(c<.006||c>.55)return;this.active=this.group.visible=!0,this.length=c,this.contact.copy(e).addScaledVector(this.axis,c),this.normal.subVectors(this.contact,n).normalize();let h=(.68+r*.62)*(.94+.06*Math.sin(o*34));for(let d of[this.core,this.halo])d.position.copy(e).addScaledVector(this.axis,c*.5),d.quaternion.setFromUnitVectors(this.up,this.axis),d.scale.set(1,c,1);this.halo.material.opacity=.48+r*.18,this.hotspot.position.copy(this.contact).addScaledVector(this.normal,.012),this.hotspot.scale.setScalar(.85+r*.35),this.glow.position.copy(this.hotspot.position),tn(this.glow,h),this.glow.scale.setScalar(.3+r*.16),this.flare.position.copy(this.hotspot.position),this.flare.scale.setScalar(.13+r*.06),this.flare.material.opacity=Math.min(h,1)}};var _c=(i,e,t=36)=>xt(i,i,e,t).rotateX(Math.PI/2);function Q_(i){return jt([[i,0],[i*.98,.01],[i*.94,.015],[i*.8,.015],[i*.76,.04],[i*.72,.045],[i*.56,.045],[i*.52,.025],[i*.48,.02],[i*.25,.02],[i*.21,.045],[i*.18,.05],[0,.05]],48).rotateX(Math.PI/2)}var ou=class{constructor(e){let t=e.mat;this.a=2.55,this.b=2.2,this.tool=.95,this.hs=1.95;let n=this.root=new St;n.add(V(jt([[0,0],[1.3,0],[1.3,.15],[1.14,.2],[1.14,.38],[.97,.44],[.97,.62],[.8,.7],[0,.7]],56),t.shell));for(let[h,d]of[[1.31,.075],[1.15,.29],[.98,.53]])n.add(V(new Ke(h,.022,8,72).rotateX(Math.PI/2),t.gold,0,d,0));let s=this.turret=new St;n.add(s),s.add(V(xt(.6,.7,.72,36),t.shell,0,1.06,0),V(new Ke(.71,.03,8,48).rotateX(Math.PI/2),t.gold,0,.72,0),V(_t(.86,1,1.02,.2),t.shell,0,1.62,0));let r=(h,d,u)=>{h.add(V(_c(d,u),t.shell),V(_c(d*1.02,u*.14),t.seam));for(let f of[-1,1]){let p=V(Q_(d*.86),t.gold,0,0,f*u/2);p.scale.z=f,h.add(p),h.add(V(_c(d*.16,.06,20),t.seam,0,0,f*(u/2+.05)),V(new Ke(d*.19,d*.012,6,40),t.gold,0,0,f*(u/2+.052)));for(let v=0;v<6;v++){let m=v/6*Xe+Math.PI/6,g=Math.cos(m)*d*.55,x=Math.sin(m)*d*.55;h.add(V(_c(d*.038,.012,12),t.seam,g,x,f*(u/2+.048)));let M=V(_t(d*.043,d*.008,.005,.002),t.gold,g,x,f*(u/2+.056));M.rotation.z=m,h.add(M)}}},o=(h,d,u,f,p)=>{let v=_t(d+.3,u,p,.16),m=v.attributes.position;for(let g=0;g<m.count;g++){let x=gt((m.getX(g)+(d+.3)/2)/(d+.3));m.setY(g,m.getY(g)*ct(1,f/u,x)),m.setZ(g,m.getZ(g)*ct(1,.86,x))}v.computeVertexNormals(),h.add(V(v,t.shell,d/2,0,0));for(let g of[-1,1])h.add(V(_t(d*.52,f*.2,.03,.01),t.gold,d*.5,0,g*(p*.465)),V(_t(d*.34,f*.07,.035,.01),t.seam,d*.5,0,g*(p*.47)));h.add(V(_t(d*.6,.03,p*.34,.01),t.gold,d*.5,ct(u,f,.5)/2+.002,0))},a=this.shoulder=yt(0,this.hs,0);s.add(a),r(a,.66,1.18),o(a,this.a,.62,.5,.6);let l=this.elbow=yt(this.a,0,0);a.add(l),r(l,.52,.98),o(l,this.b,.46,.34,.5),l.add(V(new Ke(.26,.03,8,32).rotateY(Math.PI/2),t.gold,this.b*.62,0,0));let c=this.wrist=yt(this.b,0,0);l.add(c),r(c,.3,.6),c.add(V(xt(.11,.13,.36,24).rotateZ(-Math.PI/2),t.shell,.34,0,0),V(xt(.135,.135,.05,24).rotateZ(-Math.PI/2),t.gold,.5,0,0),V(xt(.086,.105,.16,24).rotateZ(-Math.PI/2),t.seam,.55,0,0),V(new si(.055,.36,24).rotateZ(-Math.PI/2),t.gold,.77,0,0),V(new si(.016,.1,16).rotateZ(-Math.PI/2),t.shell,.9,0,0));for(let h of[.54,.575,.61])c.add(V(new Ke(.105-(h-.47)*.12,.006,6,24).rotateY(Math.PI/2),t.gold,h,0,0));this.tip=Yt(e,16768145,.22,2.5),this.tip.position.set(this.tool,0,0),c.add(this.tip),kn(n);for(let h of[s,a,l,c])h.userData.moving=!0;for(let h of[n,s,a,l,c])Ht(h);this.sYaw=new Et(0,26,.72),this.sR=new Et(3,38,.7),this.sY=new Et(3,38,.66),this.sT=new Et(0,30,.7)}reach(e,t,n,s=!1){let r=this.root.position,o=e.x-r.x,a=e.z-r.z,l=Math.hypot(o,a)||1,c=o/l,h=a/l,d=t.x*c+t.z*h,u=Math.hypot(d,t.y)||1,f=l-d/u*this.tool,p=e.y-r.y-t.y/u*this.tool,v=Math.atan2(-h,c),m=Math.atan2(t.y/u,d/u);s&&(this.sYaw.x=v,this.sR.x=f,this.sY.x=p,this.sT.x=m,this.sYaw.v=this.sR.v=this.sY.v=this.sT.v=0),v=this.sYaw.step(v,n);let g=this.sR.step(f,n),x=this.sY.step(p,n)-this.hs;m=this.sT.step(m,n);let{a:M,b:y}=this,b=gt(Math.hypot(g,x),Math.abs(M-y)+.25,M+y-.05),E=Math.atan2(x,g),_=Math.acos(gt((M*M+b*b-y*y)/(2*M*b),-1,1)),S=Math.acos(gt((M*M+y*y-b*b)/(2*M*y),-1,1)),L=E+_,w=L-(Math.PI-S);this.turret.rotation.y=v,this.shoulder.rotation.z=L,this.elbow.rotation.z=w-L,this.wrist.rotation.z=m-w}},au=class{constructor(e,t=90){this.n=t,this.p=new Float32Array(t*3),this.v=new Float32Array(t*3),this.life=new Float32Array(t),this.c=new Float32Array(t*3),this.i=0,this.rand=e.rand;let n=new lt;n.setAttribute("position",new Dt(this.p,3)),n.setAttribute("color",new Dt(this.c,3)),this.points=new cs(n,new ls({size:.095,map:e.tex.star,vertexColors:!0,blending:bn,depthWrite:!1,transparent:!0,fog:!1})),this.points.frustumCulled=!1,this.points.renderOrder=6,e.scene.add(this.points)}emit(e,t=1){for(let n=0;n<t;n++){let s=this.i=(this.i+1)%this.n,r=this.rand()*Xe,o=.15+this.rand()*.55;this.p[s*3]=e.x,this.p[s*3+1]=e.y,this.p[s*3+2]=e.z,this.v[s*3]=Math.cos(r)*o,this.v[s*3+1]=.2+this.rand()*.7,this.v[s*3+2]=Math.sin(r)*o,this.life[s]=1.2+this.rand()*1.4}}update(e,t=0){let{p:n,v:s,life:r,c:o}=this;for(let a=0;a<this.n;a++){if(r[a]<=0){o[a*3]=o[a*3+1]=o[a*3+2]=0;continue}r[a]-=e,s[a*3+1]-=1.5*e,s[a*3]+=(t*.6-s[a*3])*e*.8,n[a*3]+=s[a*3]*e,n[a*3+1]+=s[a*3+1]*e,n[a*3+2]+=s[a*3+2]*e;let l=gt(r[a]);o[a*3]=2.6*l,o[a*3+1]=1.9*l,o[a*3+2]=.8*l}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},yc=(i,e=.09,t=.022,n=96)=>{let s=Math.min(t*.35,e*.1),r=i-t,o=i+t,a=-e/2,l=e/2;return jt([[r+s,a],[o-s,a],[o,a+s],[o,l-s],[o-s,l],[r+s,l],[r,l-s],[r,a+s],[r+s,a]],n).rotateX(Math.PI/2)};function Qf(i,e=.5,t=!0){let n=i.mat,s=new St,r=yt(0,t?e*2.5:0,0),o=[];if(t&&s.add(V(jt([[0,0],[e*.62,0],[e*.56,e*.1],[e*.2,e*.26],[e*.1,e*.7],[e*.2,e*.82],[e*.08,e*.95],[e*.07,e*1.36],[e*.26,e*1.5],[0,e*1.5]],24),n.gold)),s.add(r),r.add(V(yc(e*1,e*.1,e*.02),n.gold),V(yc(e*1,e*.1,e*.02).rotateX(Math.PI/2),n.gold)),e>=1){let a=new St;for(let l=0;l<48;l++){let c=l/48*Xe,h=e*(l%4===0?.048:.022),d=e*1.012-h/2,u=V(new Zn(e*(l%4===0?.009:.005),h,e*.003),n.seam,Math.cos(c)*d,Math.sin(c)*d,e*.052);u.rotation.z=c-Math.PI/2,a.add(u)}r.add(a)}for(let[a,l,c]of[[.86,.41,.5],[.72,1.1,-.8],[.58,.2,1.3]]){let h=new St,d=V(yc(e*a,e*.08,e*.018),n.gold);d.rotation.x=Math.PI/2-l,h.add(d),h.add(V(new Ct(e*.055,10,8),n.gold,e*a,0,0)),h.userData.moving=!0,r.add(h),o.push({piv:h,sp:c,tilt:l})}return r.add(V(new Ct(e*.2,16,12),n.gold),V(xt(e*.012,e*.012,e*2.06,6),n.gold)),kn(s,!1,!0),r.userData.moving=!0,Ht(s),Ht(r),o.forEach(a=>Ht(a.piv)),{g:s,head:r,rings:o}}function jf(i){let e=i.mat,t=Re.DAIS,n=Re.GLOBE,s=Re.CROWN,r=(Le,Ne,tt)=>new P(Le,Ne,tt),o=yt(n.x,t.y,n.z);o.add(V(jt([[0,0],[.86,0],[.86,.1],[.74,.16],[.7,.3],[.4,.46],[.3,.72],[.42,.9],[.3,1.06],[.36,1.2],[.56,1.3],[.62,1.42],[.5,1.5],[0,1.5]],44),e.marble));for(let[Le,Ne]of[[.87,.05],[.31,.72],[.63,1.42]])o.add(V(new Ke(Le,.02,8,48).rotateX(Math.PI/2),e.gold,0,Ne,0));kn(o),i.scene.add(Ht(o));let a=yt(n.x,n.y,n.z);i.scene.add(a);let l=V(new Ct(n.r,72,48),new Nt({color:16777215,map:Gf(i.rand),roughness:.44,roughnessMap:e.marble.roughnessMap,metalness:0,envMap:i.env,envMapIntensity:.42*i.mood.env}));Ze(i,l.material,"envMapIntensity",.42*nt.day.env,.42*nt.night.env),l.castShadow=l.receiveShadow=!0,a.add(l);let c=yt(n.x,n.y,n.z,V(yc(n.r*1.36,.16,.02,160).rotateX(Math.PI/2),e.gold),V(new Ke(n.r*1.36,.035,8,160).rotateX(Math.PI/2),e.gold,0,.09,0),V(new Ke(n.r*1.36,.035,8,160).rotateX(Math.PI/2),e.gold,0,-.09,0)),h=new Xt().setFromUnitVectors(new P(0,1,0),new P(-.258,.927,.273).normalize()),d=new Xt,u=new cn;c.quaternion.copy(h),kn(c),i.scene.add(Ht(c));let f=56,p=48,v=Le=>new kt({map:Le,color:16777215,depthWrite:!1,transparent:!0,fog:!1,side:Ut}),m=new Cn(1,1,12,1).translate(.5,0,0);for(let Le=0;Le<m.attributes.position.count;Le++){let Ne=m.attributes.position.getX(Le);m.attributes.position.setZ(Le,4*Ne*(1-Ne))}m.computeVertexNormals();let g=new Rt(new Cn(1,1),v(i.tex.star),f),x=new Rt(m,v(null),p),M=[],y=[],b=new Qe,E=new Xt,_=new P,S=r(0,0,1),L=new Me,w=new Me(13143852),I=$t(16764784,3.6),D=new Me(16052714),A={inlay:w,fresh:I,light:0,flare:.8};Ze(i,A,"inlay",13143852,15777888),Ze(i,A,"fresh",$t(16764784,3.6),$t(16764784,2.8));for(let Le=0;Le<f;Le++)g.setMatrixAt(Le,b.makeScale(0,0,0)),g.setColorAt(Le,L.set(0)),M.push({t:-1e3,gone:!0});for(let Le=0;Le<p;Le++)x.setMatrixAt(Le,b.makeScale(0,0,0)),x.setColorAt(Le,L.set(0)),y.push({t:-1e3,gone:!0});g.frustumCulled=x.frustumCulled=!1,g.renderOrder=x.renderOrder=5,a.add(g,x);let C=0,U=0,B=new Qe().makeScale(0,0,0),O=(Le,Ne,tt)=>{M[Le].gone=!1,E.setFromUnitVectors(S,_.copy(Ne).normalize()),b.compose(_.copy(Ne).multiplyScalar(1.012),E,r(tt,tt,tt)),g.setMatrixAt(Le,b),g.instanceMatrix.needsUpdate=!0},W=new Qe,X=r(),Y=r(),j=r(),Z=(Le,Ne,tt,on)=>{y[Le].gone=!1,j.copy(Ne).add(tt).normalize(),X.subVectors(tt,Ne);let vn=X.length()*on*1.01;X.normalize(),Y.crossVectors(j,X).normalize();let fn=(Ne.length()+tt.length())*.505,pn=fn-Math.sqrt(Math.max(0,fn*fn-vn*vn*.25));j.multiplyScalar(Math.max(pn,1e-6)),W.makeBasis(X.clone().multiplyScalar(Math.max(vn,1e-4)),Y.clone().multiplyScalar(.02),j),W.setPosition(Ne.x*1.01,Ne.y*1.01,Ne.z*1.01),x.setMatrixAt(Le,W),x.instanceMatrix.needsUpdate=!0},ee=new ou(i);ee.root.position.set(Re.ARM.x,t.y,Re.ARM.z),i.scene.add(ee.root);let $=new au(i),he=new vc(i);i.engravingLaser=he;let fe=yt(s.x,s.y,s.z);i.scene.add(fe);let re=Qf(i,s.r,!1);fe.add(re.g);let ce=V(new Ct(s.r*.2,24,16),new kt({color:$t(16770736,2.2)}));ce.userData.keep=!0,fe.add(ce),Ze(i,ce.material,"color",$t(16770736,2.2),$t(16770736,1.5));let Ee=Yt(i,16767392,s.r*3,.6);fe.add(Ee),Ze(i,Ee.userData,"base",$t(16767392,.6),$t(16767392,.26)),Ze(i,Ee,"scale",[s.r*3,s.r*3,s.r*3],[s.r*1.5,s.r*1.5,s.r*1.5]);let Ye=i.dome.eyeY,De=Ye-(s.y+s.r),$e=Math.sqrt(Math.max(1,i.dome.eyeR**2-s.z**2));i.scene.add(V(xt(.07,.07,$e*2,8).rotateZ(Math.PI/2),e.gold,0,Ye,s.z)),fe.add(V(xt(.022,.022,De,6),e.gold,0,s.r+De/2,0),V(jt([[0,s.r-.02],[.16,s.r+.06],[.06,s.r+.26],[.1,s.r+.34],[0,s.r+.5]],16),e.gold)),Ze(i,A,"light",0,20),Ze(i,A,"flare",.8,.3);let je=new Kn(16766624,A.light,30,1.8);je.position.copy(fe.position),i.scene.add(je),Ht(fe),i.rings={pos:fe.position.clone(),pulse:0};let oe=0,Se=Le=>{for(let Ne=0;Ne<f;Ne++){let tt=Le-M[Ne].t;g.setColorAt(Ne,L.copy(w).lerp(I,Math.exp(-Math.max(tt,0)*1.6)).lerp(D,bt(70,84,tt)))}for(let Ne=0;Ne<p;Ne++){let tt=Le-y[Ne].t;x.setColorAt(Ne,L.copy(w).lerp(I,.7*Math.exp(-Math.max(tt,0)*1.6)).lerp(D,bt(70,84,tt)))}g.instanceColor.needsUpdate=x.instanceColor.needsUpdate=!0},ye=Le=>{let Ne=.9+.1*Math.sin(Le*1.3)+oe*A.flare;tn(Ee,Ne),je.intensity=A.light*Ne},Ue=()=>{Se(i.uTime.value),ye(i.uTime.value)};i.moodBindings.push(Ue),Ue();let xe=[],et=(Le,Ne,tt,on=t.y,vn=0)=>{let fn=Qf(i,tt);return fn.g.position.set(Le,on,Ne),fn.g.rotation.y=vn,i.scene.add(fn.g),xe.push(fn),fn};et(-3.9,-1.9,.42,t.y,.4),et(3.75,-2.4,.36,t.y,1.1),et(-.7,-3.75,.5,t.y,2),et(.6,8.3,.3,.2,.7);for(let Le of[7,8,10,11]){let Ne=Le*Xe/Re.ROTUNDA.bays,tt=Re.WALK.r0+.95;et(Math.sin(Ne)*tt,Math.cos(Ne)*tt,.62,Re.WALK.y,Ne)}let He=[[[-.26,.2],[-.08,.3],[.1,.16],[.3,.26],[.22,-.02],[.02,-.12],[-.2,-.04]],[[-.3,-.1],[-.12,.08],[.04,.02],[.2,.2],[.34,.1]],[[0,.32],[-.2,.08],[0,-.16],[.2,.08],[0,.32]],[[-.32,.14],[-.16,-.06],[.02,.12],[.18,-.08],[.34,.12]],[[-.22,.28],[-.24,0],[-.02,-.14],[.2,-.02],[.24,.26],[0,.1]]],st=r(-.62,.42,.66).normalize(),rt=r(0,1,0),vt=r().crossVectors(rt,st).normalize(),z=r().crossVectors(st,vt),Ft=r(n.x,n.y,n.z),ue=r(n.x-2.15,n.y+1.25,n.z+1.05),Be=r(.75,-.55,-.35).normalize(),ae=(Le,Ne,tt)=>(tt.copy(st).addScaledVector(vt,Le[0]).addScaledVector(z,Le[1]).normalize(),tt.multiplyScalar(n.r+Ne)),Ge=r(),we=r(),Fe=r(),N=r(),T=r(),q=new Xt,pe=(Le,Ne)=>Ne.copy(Le).applyQuaternion(q.copy(a.quaternion).invert()),se=1.5,ge=.5,k=1.15,G=1.4,J=2.6,de=.12,F=0,ie=0,ne=0,ve=0,_e=-1,be=!0,ze=[],ot=r(),me=null,Je=new Et(0,9,.8),ht=new Et(0,30,.5),Pe=new Et(0,18,.2),It=new Et(0,18,.2);i.updaters.push((Le,Ne)=>{let tt=He[F%He.length],on=tt.length,vn=se+on*ge+(on-1)*k,fn=vn+G+J,pn=Le-ie,_n=0,Xn=null;if(pn<se){let Pt=li(pn/se);ae(tt[0],ct(.5,.16+de,Pt),Fe),Ge.copy(ue).sub(Ft).lerp(Fe,Pt).add(Ft),we.copy(Be).lerp(_.copy(Fe).normalize().negate(),Pt).normalize()}else if(pn<vn){let Pt=pn-se,In=ge+k,en=Math.min(on-1,Math.floor(Pt/In)),_s=Pt-en*In;if(_s<ge||en===on-1){let ys=Math.sin(gt(_s/ge)*Math.PI);if(_n=ys,ae(tt[en],de+ct(.16,0,ys),Fe),_s>ge*.5&&_e<en){_e=en;let Qi=C++%f;me={id:Qi,point:en,size:.17+en%3*.04},M[Qi].t=Le,ht.v+=6,Pe.v+=(i.rand()-.5)*.5,It.v+=(i.rand()-.5)*.5}}else{let ys=li((_s-ge)/k);_n=.55,Fe.copy(ae(tt[en],0,Fe)).lerp(ae(tt[en+1],0,N),ys).normalize().multiplyScalar(n.r+.01);let Qi=(U+en)%p;Xn={id:Qi,point:en},y[Qi].t=Le,Fe.addScaledVector(_.copy(Fe).normalize(),de)}Ge.copy(Fe).add(Ft),we.copy(Fe).normalize().negate()}else if(pn<vn+G){let Pt=li((pn-vn)/G);ae(tt[on-1],ct(de,.5,Pt),Fe),Ge.copy(Fe).lerp(_.copy(ue).sub(Ft),Pt).add(Ft),we.copy(Fe).normalize().negate().lerp(Be,Pt).normalize()}else Ge.copy(ue),we.copy(Be),pn>=fn?(ie=Le,F++,U+=on-1,_e=-1,ve=ne,ze.length=0,me=null):ne=ve+li((pn-vn-G)/J)*.95;a.rotation.y=Je.step(ne,Ne),ee.reach(Ge,we,Ne,be),be=!1,ee.root.updateMatrixWorld(!0),ee.tip.getWorldPosition(T);let Ki=ht.step(_n,Ne);if(tn(ee.tip,.12+Ki*.45+(_n>0?.08*Math.abs(ft(Le*30,3)):0)),he.update(T,ee.wrist,Ft,n.r,_n,Le),he.active){if(pe(ot.copy(he.contact).sub(Ft),ot),me){let{id:Pt,point:In,size:en}=me;ze[In]=ot.clone(),O(Pt,ot,en),In>0&&ze[In-1]&&Z((U+In-1)%p,ze[In-1],ot,1),me=null}Xn&&ze[Xn.point]&&Z(Xn.id,ze[Xn.point],ot,1)}_n>.3&&i.frame++%2===0&&$.emit(he.active?he.contact:T,1),$.update(Ne,.6+i.uGust.value),Se(Le);for(let Pt=0;Pt<f;Pt++)!M[Pt].gone&&Le-M[Pt].t>85&&(M[Pt].gone=!0,g.setMatrixAt(Pt,B),g.instanceMatrix.needsUpdate=!0);for(let Pt=0;Pt<p;Pt++)!y[Pt].gone&&Le-y[Pt].t>85&&(y[Pt].gone=!0,x.setMatrixAt(Pt,B),x.instanceMatrix.needsUpdate=!0);c.quaternion.copy(h).multiply(d.setFromEuler(u.set(Pe.step(0,Ne),0,It.step(0,Ne)))),i.rings.pulse=Math.max(0,i.rings.pulse-Ne*.4);let Ei=i.rings.pulse,ks=1+Ei*5;re.rings.forEach((Pt,In)=>{Pt.piv.rotation.y+=Ne*Pt.sp*.22*ks,Pt.piv.rotation.x=Math.sin(Le*.11+In)*.08}),re.head.rotation.y=Le*.03,fe.position.y=s.y+Math.sin(Le*.5)*.05,fe.rotation.z=Math.sin(Le*.37)*.015,oe=Ei,ye(Le),ce.scale.setScalar(1+.04*Math.sin(Le*1.3)+Ei*.12),xe.forEach((Pt,In)=>Pt.rings.forEach((en,_s)=>{en.piv.rotation.y+=Ne*en.sp*(.3+In*.05)}))})}function ep(i){if(i.botanicalTextures)return i.botanicalTextures;let e=document.createElement("canvas"),t=document.createElement("canvas");e.width=t.width=512,e.height=t.height=256;let n=e.getContext("2d"),s=t.getContext("2d");s.fillStyle="#808080",s.fillRect(0,0,512,256);let r=(l,c,h,d,u)=>{for(let[f,p]of[[n,!1],[s,!0]]){f.save(),f.translate(l,c),f.rotate(h);let v=f.createLinearGradient(0,-u,d*.65,u);v.addColorStop(0,p?"#727272":"#b9c0a5"),v.addColorStop(.42,p?"#b0b0b0":"#e5e8cf"),v.addColorStop(1,p?"#858585":"#c0c9aa"),f.fillStyle=v,f.beginPath(),f.moveTo(0,0),f.bezierCurveTo(d*.26,-u,d*.74,-u*.75,d,0),f.bezierCurveTo(d*.68,u*.72,d*.22,u*.85,0,0),f.fill(),f.clip(),f.strokeStyle=p?"#cacaca":"rgba(221,225,198,0.68)",f.lineWidth=p?2.2:1.3,f.beginPath(),f.moveTo(0,0),f.quadraticCurveTo(d*.45,-1.8,d*.94,0),f.stroke(),f.lineWidth=.8;for(let m=1;m<6;m++)for(let g of[-1,1]){let x=m/7;f.beginPath(),f.moveTo(x*d,-1),f.quadraticCurveTo((x+.08)*d,g*u*.3,(x+.16)*d,g*u*.75*Math.sin(x*Math.PI)),f.stroke()}f.restore()}};n.strokeStyle="#a6af86",n.lineWidth=4,n.beginPath(),n.moveTo(128,247),n.quadraticCurveTo(118,134,130,28),n.stroke(),r(126,218,-2.58,132,79),r(128,205,-.65,140,78),r(128,183,-Math.PI/2,169,94);for(let[l,c,h,d]of[[382,65,-.12,2],[355,137,.3,1.65],[409,151,-.35,1.5],[386,204,-.18,1.1]])for(let[u,f]of[[n,!1],[s,!0]]){u.save(),u.translate(l,c),u.rotate(h),u.scale(d,d);let p=u.createRadialGradient(-9,-7,4,0,5,39);p.addColorStop(0,f?"#b9b9b9":"#f4eeeb"),p.addColorStop(1,f?"#777777":"#c4bacd"),u.fillStyle=p,u.beginPath(),u.moveTo(0,-27),u.bezierCurveTo(-37,-17,-29,28,0,40),u.bezierCurveTo(31,25,33,-15,0,-27),u.fill(),u.restore()}let o=new ii(e),a=new ii(t);return o.colorSpace=nn,a.colorSpace=jn,o.anisotropy=a.anisotropy=Math.min(8,i.renderer.capabilities.getMaxAnisotropy()),i.botanicalTextures={map:o,bump:a},i.botanicalTextures}function Mc(i,e,{bend:t=.3,glow:n=1,nightGlow:s=n,root:r=1,upNormal:o=!1,self:a=0,nightSelf:l=a,moodColors:c=!1}={}){let h={value:n},d={value:a};return Ze(e,h,"value",n,s),Ze(e,d,"value",a,l),i.onBeforeCompile=u=>{u.uniforms.uTime=e.uTime,u.uniforms.uGust=e.uGust,u.uniforms.uPush=e.uPush,u.uniforms.uPlantGlow=h,u.uniforms.uPlantFill=d,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
attribute float aH; varying float vH; varying vec3 vWp;
${wf}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 plantPosition = transformed;
        #ifdef USE_INSTANCING
          plantPosition = (instanceMatrix * vec4(transformed, 1.0)).xyz;
          vec2 wv = windAt( instanceMatrix[3].xz );
        #else
          vec2 wv = windAt( plantPosition.xz * 0.35 + plantPosition.y * 0.2 );
        #endif
        float hb = aH * aH * ${t.toFixed(3)};
        plantPosition.xz += wv * hb;
        #ifdef USE_INSTANCING
          transformed += inverse(mat3(instanceMatrix)) * vec3(wv.x * hb, 0.0, wv.y * hb);
        #else
          transformed = plantPosition;
        #endif
        vH = aH; vWp = (modelMatrix * vec4(plantPosition, 1.0)).xyz;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
varying float vH; varying vec3 vWp; uniform float uPlantGlow; uniform float uPlantFill;`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix( ${r.toFixed(2)}, 1.0, smoothstep( 0.0, 0.85, vH ) );`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 wV = normalize( cameraPosition - vWp );
        float back = pow( max( dot( -wV, SUN ), 0.0 ), 2.5 );
        float leafBack = max(dot(-normal, normalize(mat3(viewMatrix) * SUN)), 0.0);
        totalEmissiveRadiance += diffuseColor.rgb * fogTint( SUN ) * back * leafBack * uPlantGlow + diffuseColor.rgb * uPlantFill;`),c&&(u.uniforms.uNight=e.uNight,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aNightColor; uniform float uNight;`).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, aNightColor, uNight);`)),o&&(u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_begin>","float faceDirection = 1.0; vec3 normal = normalize( vNormal ); vec3 nonPerturbedNormal = normal;"))},i.customProgramCacheKey=()=>`botanical-wind-3:${t}:${r}:${o}:${c}`,i}function tp(i){let e=i.rand,t=Re.ROTUNDA.r,n=i.dome,s=ep(i),r=[],o=[],a=[],l=[],c=[],h=[],d=[],u=[8493405,7375699,10464880,6521679,11187836].map(I=>new Me(I)),f=[14932209,14139885,12559327,15785451].map(I=>new Me(I)),p=[12166399,10323696,14076159,15788799].map(I=>new Me(I)),v=new Me,m=new Me,g=new P,x=new P,M=new P,y=(I,D,A,C,U,B,O,W)=>{M.set(O.x+(e()-.5)*1.4,(e()-.5)*1.2,O.z+(e()-.5)*1.4).normalize(),g.set(e()-.5,e()-.5,e()-.5).cross(M).normalize(),x.crossVectors(M,g);let X=r.length/3;for(let[Y,j]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.push(I+(g.x*Y+x.x*j)*C,D+(g.y*Y+x.y*j)*C,A+(g.z*Y+x.z*j)*C),o.push(M.x,M.y,M.z),a.push((Y*.5+.5)*.5+(W?.5:0),j*.5+.5),l.push(U.r,U.g,U.b),h.push(B),c.push(m.r,m.g,m.b);d.push(X,X+1,X+2,X,X+2,X+3)},b=new P,E=(I,D,A,C,U,B=1)=>{b.set(-I,0,-A).normalize();let O=(e()-.5)*.35,W=Math.max(4,Math.round(C/.075)),X=e()*9,Y=U?.5+e()*.2:2;for(let j=0;j<W;j++){let Z=j/W,ee=D-Z*C,$=Math.sin(Z*5+X)*.08*Z,he=(e()-.5)*.12,fe=(e()-.5)*.12,re=Z>Y,ce=re?ct(1,.3,(Z-Y)/(1-Y)):ct(1,.6,Z),Ee=Math.floor(e()*(re?f.length:u.length)),Ye=.82+e()*.36;v.copy((re?f:u)[Ee]).multiplyScalar(Ye),m.copy((re?p:u)[Ee]).multiplyScalar(Ye);let De=I+b.x*(.08+$)+O*Z+he*ce,$e=A+b.z*(.08+$)+O*Z+fe*ce,je=gt(Z*C/3.2);y(De,ee,$e,(re?.075+e()*.05:.07+e()*.065)*B*ce,v,je,b,re),re&&y(De+(e()-.5)*.14*ce,ee-.02,$e+(e()-.5)*.14*ce,(.06+e()*.04)*B*ce,v,je,b,!0)}},_=i.Q.vines;for(let I=0,D=Math.round(300*_);I<D;I++){let A=I/D*Xe+e()*.02,C=Math.cos((A/Xe*Re.ROTUNDA.bays-.5)*Xe)*.5+.5;e()>.3+C*.7||E(Math.sin(A)*(t-.85),n.wallTop+.1,Math.cos(A)*(t-.85),.6+e()*e()*(1.8+C*3.6),e()<.4,1+C*.35)}for(let I=0;I<Re.ROTUNDA.bays;I++)for(let D=0,A=Math.round(9*_);D<A;D++){let C=I*Xe/Re.ROTUNDA.bays,U=(D+e())/A*2-1,B=t*Math.cos(Math.PI/Re.ROTUNDA.bays)-.5,O=U*n.ra*.92,W=n.spring+Math.sqrt(Math.max(0,n.ra**2-O**2));E(Math.sin(C)*B+Math.cos(C)*O,W,Math.cos(C)*B-Math.sin(C)*O,.3+e()*e()*2.2*(.35+Math.abs(U)),e()<.45,.85)}for(let I=0,D=Math.round(70*_);I<D;I++){let A=e()*Xe;E(Math.sin(A)*n.eyeR,n.eyeY-.15,Math.cos(A)*n.eyeR,2.5+e()*7.5,e()<.6,1.4)}for(let I of[.5,.72]){let D=n.curve(I);for(let A=0,C=Math.round(60*_);A<C;A++){let U=e()*Xe;E(Math.sin(U)*D.x,D.y-.1,Math.cos(U)*D.x,.6+e()*e()*4,e()<.4,1.3)}}let S=new lt;S.setAttribute("position",new Te(r,3)),S.setAttribute("normal",new Te(o,3)),S.setAttribute("uv",new Te(a,2)),S.setAttribute("color",new Te(l,3)),S.setAttribute("aH",new Te(h,1)),S.setAttribute("aNightColor",new Te(c,3)),S.setIndex(d);let L=Mc(new Nt({map:s.map,bumpMap:s.bump,bumpScale:7e-4,roughness:.8,metalness:0,envMap:i.env,envMapIntensity:.25,alphaTest:.42,vertexColors:!0,side:Ut}),i,{bend:.5,glow:.28,nightGlow:.18,self:.13,nightSelf:.05,root:.9,moodColors:!0}),w=new At(S,L);return w.castShadow=w.receiveShadow=!0,w.frustumCulled=!1,w.customDepthMaterial=Mc(new Ls({depthPacking:ic,map:s.map,alphaTest:.42}),i,{bend:.5}),i.scene.add(w),w}function np(i){let e=i.rand,t=i.Q.low?150:300,n=new Rt(new gi(1,20).rotateX(-Math.PI/2),new Nt({map:i.tex.lily,bumpMap:i.tex.lily,bumpScale:.003,roughness:.68,metalness:0,envMap:i.env,envMapIntensity:.12,alphaTest:.5,color:11780512,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-60}),t);Ze(i,n.material,"color",11780512,12112072);let s=new Qe,r=new Xt,o=new P(0,1,0),a=new P,l=new P,c=[],h=(E,_,S)=>Math.hypot(E,_)>Re.DAIS.r+1.6+S&&Math.hypot(E,_)<Re.WALK.r0-.6-S&&Zo.every(([L,w,I])=>Math.hypot(E-L,_-w)>I+.3+S),d=0,u=0;for(;d<t&&u++<6e3;){let E=(e()-.5)*Xe*(e()<.62?.42:1),_=Re.DAIS.r+1.9+Math.pow(e(),.9)*10.4,S=Math.sin(E)*_+(e()-.5),L=Math.cos(E)*_+(e()-.5),w=.24+e()*e()*.5;!h(S,L,w)||Math.sin(S*.7+1)*Math.cos(L*.6)<-.32||Math.abs(S-.4)<1.3&&L>11.8||c.some(I=>Math.hypot(I.x-S,I.z-L)<(I.r+w)*.94)||(c.push({x:S,z:L,r:w}),r.setFromAxisAngle(o,e()*Xe),s.compose(a.set(S,.03+e()*.008,L),r,l.set(w,1,w)),n.setMatrixAt(d++,s))}n.count=d,n.receiveShadow=!0,n.frustumCulled=!1,i.scene.add(n);let f=new Ct(1,7,4);f.scale(.3,1,.09),f.translate(0,1,0);let p=[];for(let[E,_,S]of[[9,1.05,.3],[7,.6,.26],[5,.25,.2]])for(let L=0;L<E;L++){let w=f.clone();w.scale(S*.38,S*.38,S*.38),w.rotateX(_),w.rotateY(L/E*Xe+_),p.push(w)}let v=zn(p),m=new Nt({color:15982566,roughness:.79,metalness:0,envMap:i.env,envMapIntensity:.1,emissive:16763352,emissiveIntensity:0,side:Ut});Ze(i,m,"emissiveIntensity",0,.14);let g=i.Q.low?10:22,x=c.filter(E=>E.z>2&&E.r>.3),M=new Rt(v,m,g),y=new Rt(new Ct(.05,8,6),i.mat.gold,g),b=[];for(let E=0;E<g;E++){let _=E%4&&x.length?x:c,S=_[Math.floor(e()*_.length)],L=.85+e()*.7;r.setFromAxisAngle(o,e()*Xe),s.compose(a.set(S.x+.1,.05,S.z),r,l.set(L,L,L)),M.setMatrixAt(E,s),s.compose(a.set(S.x+.1,.05+.05*L,S.z),r,l.set(L,L,L)),y.setMatrixAt(E,s);let w=Yt(i,16766690,.9,.9);w.position.set(S.x+.1,.16,S.z),Ze(i,w.material,"opacity",0,1),i.scene.add(w),b.push(w)}M.castShadow=M.receiveShadow=!0,M.frustumCulled=y.frustumCulled=!1,i.scene.add(M,y),b.length&&i.updaters.push(E=>b.forEach((_,S)=>tn(_,.8+.2*Math.sin(E*1.1+S*2.3))))}function ip(i){let e=i.rand,t=i.mat,n=ep(i),s=[[-1.9,-3.5,0,Re.DAIS.y],[2.6,-3.3,0,Re.DAIS.y],[4.1,.9,0,Re.DAIS.y]];for(let D of[6,12]){let A=(D+.5)*Xe/Re.ROTUNDA.bays;s.push([Math.sin(A)*(Re.WALK.r0+.8),Math.cos(A)*(Re.WALK.r0+.8),A,Re.WALK.y])}let r=[],o=[],a=[],l=[],c=[],h=[],d=new Me,u=new P,f=new P,p=new P,v=new P,m=[],g=new St;i.scene.add(g);for(let[D,A,C,U]of s){let B=yt(D,U,A,V(jt([[0,0],[.42,0],[.46,.08],[.36,.16],[.4,.5],[.56,.62],[.5,.7],[.44,.66],[0,.66]],28),t.marble),V(new Ke(.54,.02,6,40).rotateX(Math.PI/2),t.gold,0,.63,0));B.rotation.y=C,kn(B),g.add(B);for(let O=0;O<150;O++){v.set(e()*2-1,e()*1.3-.2,e()*2-1).normalize();let W=.3+e()*.42,X=D+v.x*W,Y=U+1.15+v.y*W*.9,j=A+v.z*W,Z=.09+e()*.07,ee=r.length/3;p.copy(v).add(u.set(e()-.5,e()-.5,e()-.5)).normalize(),u.set(e()-.5,e()-.5,e()-.5).cross(p).normalize(),f.crossVectors(p,u),d.set(O%3?7179089:9413224).multiplyScalar(.82+e()*.3+v.y*.12);for(let[$,he]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.push(X+(u.x*$+f.x*he)*Z,Y+(u.y*$+f.y*he)*Z,j+(u.z*$+f.z*he)*Z),o.push(p.x,p.y,p.z),a.push(($*.5+.5)*.5,he*.5+.5),l.push(d.r,d.g,d.b),c.push(gt(.2+v.y*.5));h.push(ee,ee+1,ee+2,ee,ee+2,ee+3)}for(let O=0;O<9;O++)v.set(e()*2-1,e()*1.2+.05,e()*2-1).normalize(),m.push([D+v.x*.72,U+1.15+v.y*.7,A+v.z*.72,.085+e()*.05])}Ht(g);let x=new lt;x.setAttribute("position",new Te(r,3)),x.setAttribute("normal",new Te(o,3)),x.setAttribute("uv",new Te(a,2)),x.setAttribute("color",new Te(l,3)),x.setAttribute("aH",new Te(c,1)),x.setIndex(h);let M=new At(x,Mc(new Nt({map:n.map,bumpMap:n.bump,bumpScale:8e-4,roughness:.76,metalness:0,envMap:i.env,envMapIntensity:.25,alphaTest:.42,vertexColors:!0,side:Ut}),i,{bend:.12,glow:.24,self:.11,nightSelf:.045}));M.castShadow=M.receiveShadow=!0,M.frustumCulled=!1,M.customDepthMaterial=Mc(new Ls({depthPacking:ic,map:n.map,alphaTest:.42}),i,{bend:.12}),i.scene.add(M);let y=[];for(let D=0;D<4;D++){let A=new Ct(1,7,4,0,Xe,0,1.9);A.scale(1-D*.17,.8+D*.12,1-D*.17),A.rotateX((D%2?1:-1)*.25),A.rotateY(D*1.3),y.push(A)}let b=new Rt(zn(y),new Nt({color:16117475,roughness:.8,metalness:0,envMap:i.env,envMapIntensity:.1,emissive:16773336,emissiveIntensity:0,side:Ut}),m.length);Ze(i,b.material,"emissiveIntensity",0,.18);let E=new Qe,_=new Xt,S=new cn,L=new P,w=new P,I=[];m.forEach(([D,A,C,U],B)=>{if(_.setFromEuler(S.set((e()-.5)*.9,e()*Xe,(e()-.5)*.9)),E.compose(L.set(D,A,C),_,w.set(U,U,U)),b.setMatrixAt(B,E),B%3===0){let O=Yt(i,16773328,.5,.7);O.position.set(D,A,C),Ze(i,O.material,"opacity",0,1),i.scene.add(O),I.push(O)}}),b.castShadow=b.receiveShadow=!0,b.frustumCulled=!1,i.scene.add(b),I.length&&i.updaters.push(D=>I.forEach((A,C)=>tn(A,.75+.25*Math.sin(D*.9+C*1.9))))}var Gt=(i,e,t)=>new P(i,e,t),Sc=i=>new gi(i,20).rotateY(Math.PI),j_=(i,e)=>e+Math.atan2(Math.sin(i-e),Math.cos(i-e));function sp(i){let e=i.mood.name==="night",t=i.mat,n=e?{x:-Re.SHIP.x-1,y:Re.SHIP.y,z:Re.SHIP.z}:Re.SHIP,s=e?.95:-.95,r=yt(n.x,n.y,n.z);r.rotation.order="YXZ",r.rotation.y=s,i.scene.add(r);let o=i.tex.window.clone();o.repeat.set(7,2.5),o.needsUpdate=!0;let a=i.tex.panel.clone();a.repeat.set(9,3),a.needsUpdate=!0;let l=new Nt({color:16052454,roughness:.36,metalness:.5,map:a,emissive:16771524,emissiveMap:o,emissiveIntensity:1.2});Ze(i,l,"emissiveIntensity",1.2,2.4),r.add(V(ci([{z:96,w:.6,h:.5},{z:84,w:8,h:4.2,belly:.8},{z:52,w:16,h:8.4,e:3.2,belly:.75},{z:10,w:21,h:11.5,e:3.6,belly:.72},{z:-42,w:23,h:12.5,e:3.6,belly:.72},{z:-76,w:19,h:11,e:3},{z:-92,w:14,h:8.5},{z:-95,w:12.5,h:7.5}],28,5),l)),r.add(V(ci([{z:6,w:1.5,h:1,y:11},{z:-12,w:7,h:4.5,y:13.5,e:3},{z:-44,w:8.5,h:6,y:15,e:3},{z:-66,w:6,h:4.6,y:14.5},{z:-74,w:2.5,h:2,y:13}],18,4),l)),r.add(V(_t(7,3.4,12,1),t.canopy,0,21.2,-22),V(_t(1.2,16,9,.4),t.hullBig,0,25,-56),V(xt(.25,.4,22,6),t.dark,0,34,-40));let c=[];for(let f of[-1,1]){let p=yt(f*30,-2,-38);p.add(V(ci([{z:44,w:.8,h:.8},{z:30,w:5.5,h:4.6},{z:-20,w:7,h:5.8,e:3},{z:-46,w:6,h:5},{z:-50,w:5.2,h:4.4}],18,4),l)),p.add(V(Sc(4.3),t.engine,0,0,-50.2));let v=Yt(i,16769712,44,5);v.position.set(0,0,-53),p.add(v),c.push(v),r.add(p,V(_t(11,2.4,26,.8),t.hullBig,f*22.5,-1,-40),V(Vn([[0,14],[16,-2],[16,-9],[0,-12]],1,.3),t.hullBig,f*36,-2,-52)),f<0&&(r.children[r.children.length-1].scale.x=-1)}for(let[f,p]of[[-6.5,2],[6.5,2],[0,-4]]){r.add(V(Sc(3.4),t.engine,f,p,-95.3));let v=Yt(i,16769712,36,5);v.position.set(f,p,-98),r.add(v),c.push(v)}let h=yt(0,0,26,V(new Ke(35,2.1,10,72),l),V(new Ke(35,.7,6,72),t.glowWarm));h.children[1].scale.z=3.2;for(let f=0;f<4;f++){let p=V(_t(1.6,35,1.6,.4),t.hullBig,0,17.5,0),v=new St;v.rotation.z=f*Math.PI/2+.4,v.add(p),h.add(v)}r.add(h),r.add(V(_t(13,.8,30,.3),t.glowWarm,0,-8.2,12),V(_t(17,1.6,34,.5),t.dark,0,-7.6,12));let d=Yt(i,16760944,46,2.6);d.position.set(0,-11,12),r.add(d);let u=[[0,6.4,94,16777215],[24,0,-30,4259712],[-24,0,-30,16728112],[0,45.5,-40,16728112],[36,-2,-64,16777215],[-36,-2,-64,16777215]].map(([f,p,v,m],g)=>{let x=Yt(i,m,9,6);return x.position.set(f,p,v),r.add(x),{l:x,ph:g*.37}});h.userData.moving=!0,Ht(r),Ht(h),i.ship={obj:r,bay:Gt(0,-11.4,12),below:Gt(0,-46,20)},i.updaters.push(f=>{r.position.y=n.y+Math.sin(f*.21)*2.2+ft(f*.07,3)*1.5,r.rotation.z=ft(f*.05,7)*.02,r.rotation.x=ft(f*.04,9)*.012,r.rotation.y=s+ft(f*.02,5)*.04,h.rotation.z=f*.14,c.forEach((p,v)=>tn(p,.8+.2*ft(f*2.4+v*3,v))),u.forEach(p=>tn(p.l,(f*.8+p.ph)%1<.08?1.5:.1)),tn(d,.85+.15*Math.sin(f*1.3))})}function ey(i,e){let t=i.mat,n=new St,s=new St;n.add(s);let r=i.tex.panel.clone();r.repeat.set(3,1.5),r.needsUpdate=!0;let o=new Nt({color:16184040,roughness:.33,metalness:.45,map:r});s.add(V(ci([{z:7.6,w:.12,h:.1,y:-.15},{z:6.2,w:.95,h:.7,y:-.05},{z:3.4,w:1.65,h:1.25,e:2.8},{z:0,w:1.95,h:1.5,e:3.2,belly:.8},{z:-4,w:1.85,h:1.42,e:3.2,belly:.8},{z:-6.6,w:1.3,h:1},{z:-7.3,w:.95,h:.75}],20,5),o)),s.add(V(ci([{z:6.5,w:.1,h:.08,y:.22},{z:5.4,w:.72,h:.42,y:.52},{z:4,w:1,h:.56,y:.86},{z:2.7,w:.72,h:.36,y:1.08},{z:2.2,w:.2,h:.1,y:1.16}],14,4),t.canopy));let a=Vn([[1.5,1.6],[6.4,-2.7],[6.4,-4.5],[1.5,-4.9]],.2,.06),l=Vn([[2.2,.5],[6.4,-3.2],[6.4,-3.9],[2.2,-1]],.24,.02);for(let p of[-1,1]){let v=V(a,o,0,-.15,0),m=V(l,e,0,-.15,0);v.rotation.z=m.rotation.z=p*.07,v.scale.x=m.scale.x=p,s.add(v,m);let g=V(Vn([[0,.9],[2.3,-1.7],[2.3,-2.8],[0,-2.4]],.14,.04),o,p*.9,.9,-4.2);g.rotation.z=p*(Math.PI/2-.42),g.scale.x=p,s.add(g),s.add(V(_t(.14,1.3,1.9,.05),e,p*6.42,.55,-3.6))}s.add(V(_t(.5,.12,5,.05),e,0,1.47,-1.5));let c=[],h=[];for(let p of[-1,1]){let v=yt(p*3.5,-.1,-2.4);v.add(V(xt(.82,.7,3.4,20).rotateX(Math.PI/2),o),V(xt(.88,.88,.3,20).rotateX(Math.PI/2),t.yellow,0,0,1.55),V(xt(.72,.9,.5,20).rotateX(Math.PI/2),t.dark,0,0,-1.8),V(Sc(.66),t.engine,0,0,-2.06));let m=Yt(i,16769712,6.5,5);m.position.set(0,0,-2.5),v.add(m),h.push(m),s.add(v),c.push(v)}for(let[p,v]of[[0,4.6],[-1.5,-3.5],[1.5,-3.5]])s.add(V(xt(.07,.07,.9,6),t.dark,p,-1.6,v),V(_t(.5,.12,1.1,.05),t.dark,p,-2.02,v));let d=Yt(i,16777215,2.2,5);d.position.set(0,-1.55,0),s.add(d);let u=Yt(i,16728112,1.6,5),f=Yt(i,4259712,1.6,5);return u.position.set(-6.5,.3,-3.6),f.position.set(6.5,.3,-3.6),s.add(u,f),c.forEach(p=>{p.userData.moving=!0}),Ht(s),c.forEach(Ht),n.rotation.order="YXZ",{g:n,body:s,nac:c,glows:h,strobe:d}}function rp(i){let e=i.mat,t=Gt(0,1,0),n=Gt(),s=Gt(),r=Gt(),o=7,a=27,l=6,c=o+a*2+l,h=[];[e.blue,e.yellow].forEach((u,f)=>{let p=ey(i,u);i.scene.add(p.g);let v=i.pad.spots[f],m=f?-14:12;h.push({...p,spot:v,i:f,phase:f?46:2.5,yaw:new Et(f?2.2:-.6,2.6,1),pitch:new Et(0,5,.9),roll:new Et(0,5,.75),tilt:new Et(1,4,.9),thr:new Et(.1,6,1),park:f?2.2:-.6,sx:m,pos:v.clone(),last:v.clone(),py:0,curve:null})});let d=u=>{let f=i.ship.obj;f.updateMatrixWorld();let p=f.localToWorld(i.ship.bay.clone().add(Gt(u.i?4:-4,0,u.i?-6:6))),v=f.localToWorld(i.ship.below.clone().add(Gt(u.i?5:-5,0,0))),m=u.spot,g=m.clone().add(Gt(0,2.12,0));return new xi([g,g.clone().add(Gt(0,5,0)),g.clone().add(Gt(u.sx*.12,17,-3)),Gt(m.x+u.sx,m.y+34,m.z-60),Gt(ct(m.x,v.x,.45)+u.sx*1.6,ct(m.y,v.y,.55)+10,ct(m.z,v.z,.45)),Gt(ct(m.x,v.x,.8)+u.sx,v.y-6,ct(m.z,v.z,.82)),v,p],!1,"centripetal")};i.updaters.push((u,f)=>{let p=0;for(let v of h){v.curve||(v.curve=d(v));let m=(u+v.phase)%c,g,x=!0;if(m<o?(g=0,x=!1):m<o+a?g=li((m-o)/a):m<o+a+l?(g=1,x=!1):g=1-li((m-o-a-l)/a),v.curve.getPointAt(gt(g),v.pos),!v.init){v.init=!0,v.last.copy(v.pos);let U=v.curve.getTangentAt(gt(g,.001,.999)),B=m>o+a?-1:1;x&&Math.hypot(U.x,U.z)>.3&&(v.yaw.x=Math.atan2(U.x*B,U.z*B),v.tilt.x=0),v.py=v.yaw.x}r.subVectors(v.pos,v.last).divideScalar(f),v.last.copy(v.pos);let M=Math.hypot(r.x,r.z),y=v.pos.y-v.spot.y,b=bt(5,24,M),E=M>2.5?Math.atan2(r.x,r.z):g<.5?v.park:v.yaw.x,_=v.yaw.step(j_(E,v.yaw.x),f),S=(_-v.py)/f;v.py=_;let L=1-b,w=L*(x?1:0);v.g.position.copy(v.pos),v.g.position.y+=w*(Math.sin(u*1.7+v.i*2)*.16+ft(u*.9,v.i+3)*.12),v.g.rotation.y=_,v.g.rotation.x=v.pitch.step(-Math.atan2(r.y,Math.max(M,10))*b*.7+w*ft(u*.8,v.i+11)*.035,f),v.g.rotation.z=v.roll.step(gt(-S*M*.045,-.6,.6)+w*ft(u*.7,v.i+21)*.045,f);let I=v.tilt.step(L,f);v.nac.forEach(U=>{U.rotation.x=-I*Math.PI/2*.92});let D=v.thr.step(x?ct(1,.75,b)+gt(r.y*.03,-.2,.4):g<.5?.12:.2,f);v.glows.forEach((U,B)=>tn(U,D*(.9+.1*ft(u*14+B*5,v.i)))),tn(v.strobe,(u*1.1+v.i*.5)%1<.07?1.3:0);let A=x?bt(46,3,y):0;p=Math.max(p,x?bt(120,20,y):0);let C=i.pad.wash[v.i];C.position.set(v.pos.x,v.spot.y+.6,v.pos.z),tn(C,A*D*.45*(.8+.2*ft(u*6,v.i+40))),C.scale.setScalar(7+A*5)}i.pad.activity+=(p-i.pad.activity)*(1-Math.exp(-f*2))})}function ty(i){let e=i.mat,t=new St,n=new St;t.add(n);let s=new Nt({color:16118248,roughness:.28,metalness:.5});n.add(V(ci([{z:5,w:.05,h:.05},{z:3.6,w:.42,h:.3},{z:1.4,w:.85,h:.56},{z:-.8,w:1.1,h:.62,e:3.2},{z:-3.2,w:1,h:.55,e:3.2},{z:-4.4,w:.78,h:.44}],16,5),s)),n.add(V(ci([{z:3.3,w:.06,h:.05,y:.2},{z:2.5,w:.36,h:.26,y:.36},{z:1.4,w:.44,h:.3,y:.5},{z:.4,w:.2,h:.12,y:.56}],12,4),e.canopy));let r=Vn([[.75,1.4],[4.3,-3.3],[4.3,-4.2],[.75,-3.9]],.13,.04),o=Vn([[.5,3],[1.7,2.1],[1.7,1.7],[.5,1.9]],.08,.03),a=Vn([[3.3,-2.3],[4.3,-3.3],[4.3,-4.2],[3.3,-4.12]],.16,.02);for(let c of[-1,1]){for(let[d,u]of[[r,e.white],[o,e.white],[a,e.yellow]]){let f=V(d,u);f.scale.x=c,n.add(f)}let h=V(Vn([[0,.6],[1.5,-1],[1.5,-1.8],[0,-1.6]],.09,.03),s,c*.62,.3,-2.6);h.rotation.z=c*(Math.PI/2-.35),h.scale.x=c,n.add(h),n.add(V(xt(.3,.36,.5,14).rotateX(Math.PI/2),e.dark,c*.42,0,-4.5),V(Sc(.27),e.engine,c*.42,0,-4.77))}let l=Yt(i,16769712,3.4,3.2);return l.position.set(0,0,-5.2),n.add(l),Ht(n),t.rotation.order="YXZ",{g:t,body:n,glow:l}}function op(i){let e=new xi([Gt(60,120,260),Gt(30,72,110),Gt(12,47,20),Gt(2,31,-60),Gt(-4,15,-170),Gt(-30,30,-420),Gt(-120,110,-800),Gt(-300,260,-1300)],!1,"centripetal"),t=9.2,n=27,s=i.opts.firstFlyby??2.4,r=new Me(1,.8,.46).multiplyScalar(.8),o=[0,1].map(p=>{let v=ty(i);return i.scene.add(v.g),v.g.visible=!1,{...v,i:p,trails:[new ea(46,.3,r,i.scene),new ea(46,.3,r,i.scene)],roll:new Et(0,9,.7),off:new Et(0,5,.6),last:Gt(),pYaw:0}}),a=Gt(),l=Gt(),c=Gt(),h=Gt(),d=Gt(),u=Gt();i.flyby={active:!1,pos:Gt(),near:0};let f=-1;i.updaters.push((p,v)=>{let m=Math.floor((p-s)/n),g=p-s-m*n,x=m>=0&&g<t;i.flyby.active=x&&g<t*.62,m!==f&&(f=m,o.forEach(y=>{y.trails.forEach(b=>b.reset()),y.roll.x=y.roll.v=0,y.off.x=9,y.off.v=0}));let M=0;for(let y of o){if(y.g.visible=x,x){let E=gt((g-y.i*.16)/t),_=ct(E,E*E,.25);if(e.getPointAt(_,a),e.getTangentAt(_,l),c.crossVectors(l,h.set(0,1,0)).normalize(),h.crossVectors(c,l),y.i){let B=y.off.step(9+bt(.5,.78,_)*90,v);a.addScaledVector(c,-B).addScaledVector(h,-1.6+bt(.5,.8,_)*26+ft(p*1.3,4)*.5)}else a.addScaledVector(h,ft(p*1.1,2)*.35);let S=(a.x-y.last.x)/v,L=(a.y-y.last.y)/v,w=(a.z-y.last.z)/v,I=y.last.lengthSq()===0||g<.05;y.last.copy(a),y.g.position.copy(a);let D=I?Math.atan2(l.x,l.z):Math.atan2(S,w),A=I?0:Math.atan2(Math.sin(D-y.pYaw),Math.cos(D-y.pYaw))/v;y.pYaw=D,y.g.rotation.y=D,y.g.rotation.x=I?-Math.asin(l.y):-Math.atan2(L,Math.hypot(S,w));let C=y.i?bt(.52,.66,_)*-Xe:li(gt((_-.17)/.13))*Xe;y.g.rotation.z=y.roll.step(gt(-A*1.6,-1.2,1.2),v)+C,tn(y.glow,1+.25*ft(p*20,y.i)),y.g.updateMatrixWorld(),y.trails[0].push(y.body.localToWorld(d.set(.42,0,-4.9))),y.trails[1].push(y.body.localToWorld(u.set(-.42,0,-4.9)));let U=a.distanceTo(i.camera.position);M=Math.max(M,gt(1-U/130)),y.i||(i.flyby.pos.copy(a),a.distanceTo(i.rings.pos)<62&&(i.rings.pulse=1))}else y.last.set(0,0,0);let b=x?1:gt(1-(g-t)/.8);(x||g<t+1)&&y.trails.forEach(E=>E.update(i.camera.position,b))}i.flyby.near=M,M>0&&(i.shake=Math.max(i.shake,M*M*1.15),i.gustT=Math.max(i.gustT,M*1.7))})}var bc=class{constructor({cols:e,rows:t,wrap:n=!1,rest:s,material:r,windK:o=5,gravity:a=5.5,drag:l=.02,lift:c=.25,scale:h=1}){this.cols=e,this.rows=t,this.wrap=n,this.windK=o,this.gravity=a,this.drag=l,this.lift=c;let d=this.n=e*t;this.rest=[];for(let x=0;x<t;x++)for(let M=0;M<e;M++)this.rest.push(s(M,x));this.p=new Float32Array(d*3),this.q=new Float32Array(d*3);let u=(x,M)=>M*e+(x+e)%e,f=[],p=(x,M,y)=>f.push(x,M,this.rest[x].distanceTo(this.rest[M])*h,y);for(let x=0;x<t;x++)for(let M=0;M<e;M++){let y=n||M<e-1,b=n||M<e-2;y&&p(u(M,x),u(M+1,x),1),x<t-1&&p(u(M,x),u(M,x+1),1),y&&x<t-1&&(p(u(M,x),u(M+1,x+1),.6),p(u(M+1,x),u(M,x+1),.6)),b&&p(u(M,x),u(M+2,x),.3),x<t-2&&p(u(M,x),u(M,x+2),.3)}this.cons=f;let v=[],m=[];for(let x=0;x<t-1;x++)for(let M=0;M<(n?e:e-1);M++){let y=u(M,x),b=u(M+1,x),E=u(M,x+1),_=u(M+1,x+1);v.push(y,E,b,b,E,_)}for(let x=0;x<t;x++)for(let M=0;M<e;M++)m.push(M/(e-1),x/(t-1));let g=new lt;g.setAttribute("position",new Dt(this.p,3)),g.setAttribute("uv",new Te(m,2)),g.setIndex(v),g.computeVertexNormals(),this.mesh=new At(g,r),this.mesh.frustumCulled=!1,this.mesh.castShadow=this.mesh.receiveShadow=!0,this._v=new P,this.ready=!1,this.elapsed=0}step(e,t,n,s,r,o){let{p:a,q:l,n:c,cols:h,rest:d,cons:u}=this,f=this._v,p=this.mesh.geometry.attributes.normal.array;if(!this.ready){for(let x=0;x<c;x++)f.copy(d[x]).applyMatrix4(t),a[x*3]=l[x*3]=f.x,a[x*3+1]=l[x*3+1]=f.y,a[x*3+2]=l[x*3+2]=f.z;this.ready=!0}if(this.elapsed+=e,this.elapsed<1/60-1e-8){this.mesh.geometry.attributes.position.needsUpdate=!0;return}e=this.elapsed,this.elapsed=0;let v=gt(Math.ceil(e/.011),1,4),m=e/v,g=1-this.drag;for(let x=0;x<v;x++){for(let M=h;M<c;M++){let y=M*3,b=(a[y]-l[y])*g,E=(a[y+1]-l[y+1])*g,_=(a[y+2]-l[y+2])*g,S=ft(o*2.3+M*.37,M%7)*1.4,L=n.x-b/m,w=n.y+S-E/m,I=n.z-_/m,D=(p[y]*L+p[y+1]*w+p[y+2]*I)*this.windK;l[y]=a[y],l[y+1]=a[y+1],l[y+2]=a[y+2],a[y]+=b+(p[y]*D+L*this.lift)*m*m,a[y+1]+=E+(p[y+1]*D-this.gravity+Math.abs(L)*this.lift*.35)*m*m,a[y+2]+=_+(p[y+2]*D+I*this.lift)*m*m}for(let M=0;M<h;M++)f.copy(d[M]).applyMatrix4(t),a[M*3]=f.x,a[M*3+1]=f.y,a[M*3+2]=f.z;for(let M=0;M<5;M++){for(let y=0;y<u.length;y+=4){let b=u[y]*3,E=u[y+1]*3,_=a[E]-a[b],S=a[E+1]-a[b+1],L=a[E+2]-a[b+2],w=Math.hypot(_,S,L)||1e-6,I=(w-u[y+2])/w*u[y+3],D=u[y]<h,A=u[y+1]<h,C=D?0:A?1:.5,U=A?0:D?1:.5;a[b]+=_*I*C,a[b+1]+=S*I*C,a[b+2]+=L*I*C,a[E]-=_*I*U,a[E+1]-=S*I*U,a[E+2]-=L*I*U}for(let y=h;y<c;y++){let b=y*3;for(let E=0;E<s.length;E+=4){let _=a[b]-s[E],S=a[b+1]-s[E+1],L=a[b+2]-s[E+2],w=s[E+3],I=_*_+S*S+L*L;if(I<w*w){let D=Math.sqrt(I),A=D>1e-6?_/D:0,C=D>1e-6?S/D:0,U=D>1e-6?L/D:1,B=w-D,O=A*B,W=C*B,X=U*B;a[b]+=O,a[b+1]+=W,a[b+2]+=X,l[b]+=O,l[b+1]+=W,l[b+2]+=X;let Y=Math.min(0,(a[b]-l[b])*A+(a[b+1]-l[b+1])*C+(a[b+2]-l[b+2])*U);l[b]+=A*Y,l[b+1]+=C*Y,l[b+2]+=U*Y}}a[b+1]<r&&(a[b+1]=r,l[b+1]=Math.min(l[b+1],r))}}}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}},Wn=(i,e,t=0,n=0,s=0,r=1,o=1,a=1,l=28)=>{let c=V(new Ct(i,l,Math.round(l*.7)),e,t,n,s);return c.scale.set(r,o,a),c};function ny(i){let e=document.createElement("canvas");e.width=128,e.height=512;let t=e.getContext("2d");t.fillStyle="#f0e9db",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(116, 86, 34, 0.1)",t.lineWidth=1,t.beginPath();for(let s=1;s<e.width;s+=4)t.moveTo(s,0),t.lineTo(s,e.height);for(let s=1;s<e.height;s+=4)t.moveTo(0,s),t.lineTo(e.width,s);t.stroke(),t.fillStyle="rgba(119, 86, 30, 0.2)",t.fillRect(3,0,2,e.height),t.fillRect(e.width-5,0,2,e.height),t.strokeStyle="#fff9e9",t.lineWidth=1.5,t.setLineDash([4,5]),t.beginPath();for(let s of[8,e.width-8])t.moveTo(s,0),t.lineTo(s,e.height);t.moveTo(8,e.height-12),t.lineTo(e.width-8,e.height-12),t.stroke();let n=new ii(e);return n.colorSpace=nn,n.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),n}var lu=(i,e,t)=>V(new vi(new xi(i.map(n=>new P(...n))),12,e,5,!1),t);function ap(i){let e=k=>new Nt(k),t=e({color:16641757,roughness:.88}),n=e({color:16755133,roughness:.7}),s=e({color:1775920,roughness:.08,metalness:.3,envMapIntensity:2}),r=new kt({color:16777215}),o=new kt({color:16752052,transparent:!0,opacity:.55,depthWrite:!1}),a=e({color:16777215,roughness:.5}),l=e({color:14272950,roughness:.85}),c=e({color:15776058,map:ny(i.renderer),roughness:.74,side:Ut}),h=Re.CAT,d=h.y,u=1.18,f=0,p=yt(h.x,d-.012,h.z);p.rotation.y=.2,p.scale.setScalar(u),i.scene.add(p);let v=yt(0,0,0);p.add(v),v.add(Wn(.27,t,0,.27,.02,1,1.08,.92),Wn(.2,t,0,.44,-.02,.95,1,.9));for(let k of[-1,1]){v.add(Wn(.15,t,k*.17,.14,.05,.9,1,1.12),Wn(.07,t,k*.2,.042,-.13,.9,.6,1.5,16));for(let G of[-.018,.018])v.add(lu([[k*.2+G,.034,-.229],[k*.2+G,.047,-.231],[k*.2+G,.059,-.222]],.0017,l))}let m=[-1,1].map(k=>{let G=yt(k*.09,.33,-.15);G.add(V(new co(.054,.2,6,14),t,0,-.13,0),Wn(.064,t,0,-.27,-.02,1,.72,1.25,16));for(let J=-1;J<=1;J++)G.add(Wn(.012,n,J*.026,-.29,-.075,1,.7,1,8));for(let J of[-.021,.021])G.add(lu([[J,-.255,-.091],[J,-.271,-.097],[J,-.286,-.091]],.0016,l));return v.add(G),G}),g=yt(0,.69,-.03);v.add(g),g.add(Wn(.235,t,0,0,0,1.13,.95,1),Wn(.1,t,-.12,-.075,-.1,1.1,.8,1,20),Wn(.1,t,.12,-.075,-.1,1.1,.8,1,20));let x=[-1,1].map(k=>{let G=yt(k*.145,.15,0),J=yt(0,0,0);G.add(J),J.rotation.z=-k*.32;let de=V(new si(.092,.18,20),t,0,.085,0);de.scale.z=.62;let F=V(new si(.058,.125,16),n,0,.072,-.03);return F.scale.z=.4,J.add(de,F,Wn(.092,t,0,0,0,1,.5,.62,16)),g.add(G),J.add(lu([[-.044,.027,-.049],[-.026,.082,-.041],[0,.139,-.03],[.026,.082,-.041],[.044,.027,-.049]],.0032,t)),{e:G,s:k,sp:new Et(0,90,.28),flick:0}}),M=[-1,1].map(k=>{let G=yt(k*.1,0,-.2);return G.add(Wn(.043,s,0,0,0,.88,1.18,.5,20),V(new Ct(.014,8,6),r,-.012,.02,-.022),V(new Ct(.007,6,4),r,.014,-.014,-.022)),g.add(G),G});g.add(Wn(.017,n,0,-.05,-.236,1.35,.8,.8,10));for(let k of[-1,1]){g.add(Wn(.039,t,k*.028,-.064,-.21,1,.63,.58,16));for(let[de,F]of[[.043,-.058],[.053,-.065],[.04,-.073]])g.add(Wn(.0022,l,k*de,F,-.231,1,1,.45,6));let G=V(new Ke(.02,.0045,5,12,Math.PI),s,k*.02,-.068,-.232);G.rotation.z=Math.PI,g.add(G);let J=V(new gi(.04,18),o,k*.172,-.072,-.172);J.quaternion.setFromUnitVectors(new P(0,0,1),new P(k*.56,-.1,-.82).normalize()),J.scale.y=.62,g.add(J);for(let de=-1;de<=1;de++){let F=V(xt(.0022,.0012,.15,5),a,k*.275,-.065+de*.022,-.15);F.rotation.set(.25,0,k*(Math.PI/2-de*.2)),g.add(F)}}let y=V(new Ke(.168,.05,12,32).rotateX(Math.PI/2),c,0,.505,-.02);y.scale.set(1,1.2,.95),v.add(y);let b=yt(.056,.507,.188);b.rotation.y=.25,b.add(V(xt(.019,.019,.004,20).rotateX(Math.PI/2),i.mat.goldSoft),V(new Ke(.019,.0025,6,20),i.mat.goldSoft,0,0,.002));let E=new Hn;for(let k=0;k<8;k++){let G=k/8*Xe,J=k%2?.0034:.01,de=Math.sin(G)*J,F=Math.cos(G)*J;k===0?E.moveTo(de,F):E.lineTo(de,F)}E.closePath(),b.add(V(new Ds(E),l,0,0,.0047)),v.add(b);let _=26,S=20,L=_-1,w=L*S,I=w+1,D=new lt,A=new Float32Array((I+1)*3),C=[],U=new Float32Array(_*3),B=new Float32Array(_);for(let k=0;k<L-1;k++)for(let G=0;G<S;G++){let J=k*S+G,de=k*S+(G+1)%S,F=J+S,ie=de+S;C.push(J,de,F,de,ie,F)}for(let k=0;k<S;k++)C.push((L-1)*S+k,(L-1)*S+(k+1)%S,w),C.push(I,(k+1)%S,k);D.setAttribute("position",new Dt(A,3)),D.setIndex(C);let O=new At(D,t);O.name="Cat tail",O.frustumCulled=!1,p.add(O);let W=new P,X=new P,Y=new P;p.traverse(k=>{k.isMesh&&(k.receiveShadow=!1,k.material!==o&&(k.castShadow=!0))}),O.userData.keep=!0;let j=[g,...m,...x.map(k=>k.e),...M];j.forEach(k=>{k.userData.moving=!0}),[v,...j].forEach(Ht);let Z=(k,G,J)=>new P(k,G,J),ee=new bc({cols:7,rows:21,material:c,windK:6.2,gravity:3.4,drag:.02,lift:.5,scale:u,rest:(k,G)=>Z(-.11+k/6*.12,.5-G/20*.56,.165+G/20*.168)}),$=new bc({cols:7,rows:17,material:c,windK:6.2,gravity:3.4,drag:.02,lift:.5,scale:u,rest:(k,G)=>Z(-.03+k/6*.12,.495-G/16*.42,.175+G/16*.14)});ee.mesh.name="Scarf tail A",$.mesh.name="Scarf tail B",ee.mesh.receiveShadow=$.mesh.receiveShadow=!1,i.scene.add(ee.mesh,$.mesh);let he=[[g,0,0,0,.25],[v,0,.44,-.02,.2],[v,0,.27,.02,.285],[v,.17,.14,.05,.16],[v,-.17,.14,.05,.16]],fe=new Float32Array((he.length+_)*4),re=new P,ce=()=>{he.forEach(([k,G,J,de,F],ie)=>{re.set(G,J,de),k.localToWorld(re),fe[ie*4]=re.x,fe[ie*4+1]=re.y,fe[ie*4+2]=re.z,fe[ie*4+3]=F*u+.008});for(let k=0;k<_;k++){re.fromArray(U,k*3).applyMatrix4(p.matrixWorld);let G=(he.length+k)*4;fe[G]=re.x,fe[G+1]=re.y,fe[G+2]=re.z,fe[G+3]=B[k]*u+.012}return fe},Ee=i.mat,Ye=new St,De=new St;Ye.add(De),i.scene.add(Ye),De.add(V(new Ct(.1,24,16),Ee.white),V(new Ke(.108,.012,8,32).rotateX(Math.PI/2),Ee.blue)),De.add(V(new Ct(.088,20,12,0,Xe,0,.75).rotateX(-Math.PI/2),Ee.canopy,0,.005,-.022));let $e=Yt(i,16765503,.13,3.4);$e.position.set(0,.01,-.115),De.add($e);for(let k of[-1,1]){let G=V(new si(.026,.085,10),Ee.white,k*.07,.105,.02);G.rotation.z=-k*.5,De.add(G)}let je=Yt(i,16767392,.3,.5);je.position.y=-.1,De.add(je),Ye.traverse(k=>{k.isMesh&&(k.castShadow=k.receiveShadow=!0)}),Ht(De);let oe=new gc(Z(h.x-.7,d+1.6,h.z+.1),26,.5),Se=new Et(0,12,.6),ye=new Et(0,5,.6),Ue=new Et(0,3,1),xe=new Et(0,12,.72),et=new Et(.05,12,.72),He=new Et(0,8,.6),st=new Et(0,5,.9),rt=new Et(0,15,.58),vt=new Et(0,5,.9),z=new Et(0,30,.5),Ft=new Et(0,40,.35),ue=new P,Be=new P,ae=new P,Ge=new P,we=new P,Fe=0,N=0,T=2.5,q=1.5,pe=0,se=new Kn(16774890,7,8,2);Ze(i,se,"color",16774890,16770246),Ze(i,se,"intensity",7,9),se.name="Cat soft key",se.position.set(h.x-1.4,d+2.1,h.z+2.3);let ge=new Kn(16775406,1.8,6,2);Ze(i,ge,"color",16775406,15002367),Ze(i,ge,"intensity",1.8,2.5),ge.name="Cat soft fill",ge.position.set(h.x+1.6,d+1.5,h.z-1.8),i.scene.add(se,ge),i.hero={obj:p,head:g,tail:O,scarves:[ee.mesh,$.mesh],clothColliders:fe},i.updaters.push((k,G)=>{let J=i.uGust.value,de=Ue.step(ft(k*.085,1),G),F=Math.sin(k*1.7),ie=ft(k*.11,3)*.36-.02,ne=.2+ft(k*.09,4)*.1,ve=0;if(i.flyby&&i.flyby.active){g.getWorldPosition(Be),ae.subVectors(i.flyby.pos,Be);let Ne=p.rotation.y,tt=ae.x*Math.cos(Ne)-ae.z*Math.sin(Ne),on=ae.x*Math.sin(Ne)+ae.z*Math.cos(Ne);ie=gt(Math.atan2(-tt,-on),-1.9,1.9),ne=gt(Math.atan2(ae.y,Math.hypot(tt,on)),-.3,.85),ve=1}ve&&!pe&&(Ft.v+=2.2),pe=ve;let _e=vt.step(ve,G),be=Ft.step(0,G);v.scale.set(1+F*.012-be*.05,1+F*.008+be*.08,1+F*.02-be*.05),v.rotation.set(-.03-J*.05,st.step(ie*.22,G),de*.03),g.rotation.set(et.step(ne*.8,G),xe.step(ie-st.x,G),He.step(ft(k*.17,6)*.14+(ve?.12*Math.sign(ie||1):0),G),"YXZ"),q-=G,q<0&&(q=1.2+i.rand()*4.5,x[i.rand()<.5?0:1].sp.v+=9);let ze=z.step(ve*.28-J*.3,G);for(let Ne of x){let tt=Ne.sp.step(0,G);Ne.e.rotation.set(-ze-Math.abs(tt)*.35,0,-Ne.s*(tt*.4-J*.12))}T-=G,T<0&&(T=2+i.rand()*4,N=.16),N=Math.max(0,N-G);let ot=N>0?Math.abs(N/.16-.5)*2:1;M.forEach(Ne=>Ne.scale.set(1,gt(ot,.08,1)*(1+_e*.12),1));let me=rt.step(ve,G);m[0].rotation.set(ft(k*.3,7)*.03,0,0),m[1].rotation.set(me*2.1+me*Math.sin(k*7)*.12,0,me*.25),Fe+=G*ct(1.5,6,_e);let Je=ct(.3+.5*bt(-.3,.5,ft(k*.13,12)),1,_e),[ht]=Ir(h.x,h.z,k,J);we.set(0,.1,.24),W.set(1,0,0);for(let Ne=0;Ne<_;Ne++){let tt=Ne/(_-1),on=ct(.75,1.72,bt(0,.55,tt))+tt*tt*tt*.9,vn=Je*Math.pow(tt,1.25)*Math.sin(Fe-tt*3.4)+ht*.12*tt+de*.3*tt;Y.set(Math.sin(vn),Math.sin(on)*Math.cos(vn),Math.cos(on)*Math.cos(vn)),X.crossVectors(Y,W).normalize(),W.crossVectors(X,Y).normalize();let fn=ct(.058,.05,tt)*(tt>.9?Math.sqrt(Math.max(0,1-Math.pow((tt-.9)/.1,2))):1)*(tt<.06?.6+tt*6.6:1);if(we.toArray(U,Ne*3),B[Ne]=fn,Ne===0&&we.toArray(A,I*3),Ne===_-1){we.toArray(A,w*3);continue}for(let pn=0;pn<S;pn++){let _n=pn/S*Xe,Xn=Math.cos(_n)*fn,Ki=Math.sin(_n)*fn,Ei=(Ne*S+pn)*3;A[Ei]=we.x+W.x*Xn+X.x*Ki,A[Ei+1]=we.y+W.y*Xn+X.y*Ki,A[Ei+2]=we.z+W.z*Xn+X.z*Ki}we.addScaledVector(Y,.027)}D.attributes.position.needsUpdate=!0,D.computeVertexNormals(),p.updateMatrixWorld(!0);let[Pe,It]=Ir(h.x,h.z,k,J);ue.set(Pe*4.2,.25+J*.8,It*4.2);let Le=d+f+.01;ce(),ee.step(G,v.matrixWorld,ue,fe,Le,k+5),$.step(G,v.matrixWorld,ue,fe,Le,k+9),Ge.set(-.62+Math.sin(k*.4)*.16,1.02+Math.sin(k*.9)*.05+ve*.4,.06+Math.cos(k*.31)*.14),p.localToWorld(Ge),Ye.position.copy(oe.step(Ge,G)),Ye.rotation.y=p.rotation.y+Se.step(xe.x+st.x+Math.sin(k*.5)*.3,G)+ye.step(ve*Xe,G),De.rotation.x=-et.x*.8+gt(oe.v.z*.25,-.5,.5),De.rotation.z=gt(-oe.v.x*.3,-.5,.5),tn($e,Math.sin(k*.7+1)>.992?.1:1),tn(je,.8+.2*Math.sin(k*8)),i.uPush.value[1].set(h.x,h.z,1.5,.55)})}function iy(i,e){let t=new St;t.add(V(ci([{z:2.9,w:.08,h:.08},{z:2.1,w:.62,h:.42},{z:.4,w:.93,h:.65},{z:-1.6,w:.83,h:.52},{z:-2.4,w:.43,h:.32}],16,3),e)),t.add(V(ci([{z:1.85,w:.08,h:.04,y:.34},{z:.95,w:.52,h:.26,y:.52,e:3},{z:-.45,w:.55,h:.2,y:.55,e:3},{z:-1.15,w:.12,h:.035,y:.47}],12,3),i.canopy));let n=Vn([[.7,.9],[2.8,-.8],[2.6,-1.5],[.7,-1.5]],.09,.025),s=Vn([[.28,-1.63],[1.35,-2.03],[1.25,-2.49],[.25,-2.33]],.07,.02),r=ci([{z:-.42,w:.23,h:.23},{z:-.72,w:.31,h:.29},{z:-1.65,w:.29,h:.27},{z:-2.25,w:.22,h:.22}],12,2);for(let o of[-1,1]){let a=V(n,e,0,-.2,0);a.scale.x=o,t.add(a);let l=V(s,e,0,.25,0);l.scale.x=o,t.add(l),t.add(V(r,e,o*1.4,-.15,0)),t.add(V(new gi(.22,12),i.canopy,o*1.4,-.15,-.415)),t.add(V(new Ke(.22,.035,6,16),i.goldSoft,o*1.4,-.15,-2.25))}return t.add(V(Vn([[.28,-.82],[1.2,-1.94],[1.18,-2.18],[.26,-2.38]],.1,.018).rotateZ(Math.PI/2),e)),t.add(V(Vn([[.55,-1.145],[1.17,-1.9],[1.17,-1.98],[.55,-1.225]],.115,.008).rotateZ(Math.PI/2),i.goldSoft)),Ht(t)}function sy(i,e){let t=new St;t.add(V(_t(2,.85,10.8,.2),i.canopy,0,-.45,0)),t.add(V(_t(3.4,1.2,2.4,.3),e,0,.1,4.35)),t.add(V(_t(2.65,.43,.1,.05),i.canopy,0,.38,5.57));for(let n of[-2.8,0,2.55])t.add(V(_t(3.6,1.85,2.2,.16),e,0,.75,n)),t.add(V(_t(3.72,.1,.18,.03),i.goldSoft,0,1.69,n));for(let n of[-1,1])t.add(V(_t(.5,.4,7.1,.1),i.goldSoft,n*2.35,-.1,-.9)),t.add(V(xt(.56,.67,4.7,16).rotateX(Math.PI/2),e,n*2.75,-.25,-1.8)),t.add(V(new Ke(.58,.08,6,20),i.canopy,n*2.75,-.25,-4.2));return Ht(t)}function ry(i){let e=new St;e.add(V(new Ct(.9,32,24),i.white)),e.add(V(new Ke(.972,.09,10,48).rotateX(Math.PI/2),i.goldSoft));for(let t of[-1,1]){let n=V(new si(.234,.765,12),i.white,t*.63,.945,.18);n.rotation.z=-t*.5,e.add(n)}return Ht(e)}function lp(i){let e=i.mat,t=new St,n={nav:1.15};Ze(i,n,"nav",1.15,2),t.name="Exterior activity",i.scene.add(t);let s=new Nt({color:8560041,map:i.tex.panel,roughness:.42,metalness:.25}),r=new Nt({color:7440791,map:i.tex.panel,roughness:.5,metalness:.28}),o=1,a={commuters:i.Q.low?3:4,cargo:1,maintenance:i.Q.low?0:1},l=[{name:"water",z:-40,curve:5,altitude:1.15,span:58,period:54,direction:1},{name:"near-air",z:-43,curve:4,altitude:9.2,span:64,period:24,direction:1},{name:"far-air",z:-68,curve:6,altitude:16.2,span:82,period:36,direction:-1},{name:"courier",z:-54,curve:4,altitude:12.8,span:70,period:19,direction:-1}],c=[],h=(I,D,A)=>{let C=I.children.filter(U=>U.isMesh).map(U=>{let B=new Rt(U.geometry,U.material,D);return B.name=A,B.instanceMatrix.setUsage(Hs),B.frustumCulled=!1,t.add(B),c.push(B),B});return{count:D,meshes:C}},d=h(iy(e,s),a.commuters,"Commuter and water-skiff fleet"),u=h(sy(e,r),a.cargo,"Cargo carriers"),f=a.maintenance?h(ry(e),a.maintenance,"Maintenance craft"):null,p=[],v=[],m=(I,D,A,C,U,B)=>{let O={kind:I,fleet:D,index:A,scale:C,position:new P,heading:0,...B};return O.lights=U.map(([W,X,Y,j,Z])=>{let ee={point:new P(W,X,Y),color:j,radius:Z,index:v.length,phase:A*.71};return v.push(ee),ee}),p.push(O),O};for(let I=0;I<a.commuters;I++){let D=I<o,A=I,C=l[A];m(D?"water-skiff":"commuter",d,I,D?1.03:A===3?.95:1.18,[[-1.4,-.15,-2.3,16763783,.22],[1.4,-.15,-2.3,16763783,.22],[0,.98,-1.65,12051684,.11]],{phase:A*.083+.09,period:C.period,lane:C,skiff:D})}for(let I=0;I<a.cargo;I++)m("cargo",u,I,.95+I%2*.1,[[-2.75,-.25,-4.25,16761985,.42],[2.75,-.25,-4.25,16761985,.42],[0,1.95,2.55,14083547,.18]],{phase:.12+I/a.cargo,period:70,lane:{z:-82,curve:7,altitude:6.3,span:90,direction:-1}});let g=[{centre:[-22,7.1,-37],radius:4.5},{centre:[5.5,12,-42],radius:3.2},{centre:[-6.5,6.7,-38],radius:3},{centre:[Re.DOCK.x,11,Re.DOCK.z+8],radius:12},{centre:[Re.FALLS.x+18,22,Re.FALLS.z+13],radius:5}];for(let I=0;I<a.maintenance;I++){let D=I*2,A=g[D];m("maintenance",f,I,D<3?1.15:1.05,[],{phase:D*2.2,period:23+D*5,centre:new P(...A.centre),radius:A.radius})}let x=new Rt(new Ct(1,8,6),new kt({color:16777215}),v.length);x.name="Exterior navigation lights",x.instanceMatrix.setUsage(Hs),x.frustumCulled=!1,t.add(x);let M=p.filter(I=>I.skiff),y=new Rt(new Cn(2.8,9).rotateX(-Math.PI/2),new kt({map:i.tex.glow,color:13951968,transparent:!0,opacity:.2,depthWrite:!1,side:Ut}),M.length);Ze(i,y.material,"opacity",.2,.1),y.name="Water-skiff wakes",y.instanceMatrix.setUsage(Hs),y.frustumCulled=!1,t.add(y);let b=new sn,E=new sn,_=new Me,S=i.exterior={root:t,vehicles:p,counts:a,lanes:l,drawCalls:c.length+2,minRadius:1/0,time:0},L=I=>{for(let D of v)_.set(D.color).multiplyScalar(n.nav*(.9+.1*Math.sin(I*2.3+D.phase))),x.setColorAt(D.index,_);x.instanceColor.needsUpdate=!0},w=I=>{S.time=I,S.minRadius=1/0;let D=0;for(let A of p){let C,U=0,B,O=0;if(A.lane){let W=A.lane,X=(I/A.period+A.phase)%1,Y=X*Xe;A.position.set(W.direction*(X*2-1)*W.span,W.altitude+Math.sin(Y*2)*(A.skiff?.045:.25),W.z+Math.sin(Y)*W.curve),C=W.direction*W.span*2,B=Math.cos(Y)*W.curve*Xe,U=A.skiff?0:Math.cos(Y*2)*Math.PI,O=A.skiff?0:Math.sin(Y)*W.direction*(A.kind==="cargo"?.018:.055)}else{let W=I/A.period*Xe+A.phase;A.position.set(A.centre.x+Math.sin(W)*A.radius,A.centre.y+Math.sin(W*2)*1.1,A.centre.z+Math.cos(W)*A.radius*.55),C=-Math.sin(W),B=-Math.cos(W),O=Math.sin(W*1.7)*.035}A.heading=Math.atan2(C,B),b.position.copy(A.position),b.rotation.set(-Math.atan2(U,Math.hypot(C,B)),A.heading,O,"YXZ"),b.scale.setScalar(A.scale),b.updateMatrix(),A.fleet.meshes.forEach(W=>W.setMatrixAt(A.index,b.matrix)),S.minRadius=Math.min(S.minRadius,Math.hypot(A.position.x,A.position.z));for(let W of A.lights)E.position.copy(W.point).applyMatrix4(b.matrix),E.rotation.set(0,0,0),E.scale.setScalar(W.radius*A.scale),E.updateMatrix(),x.setMatrixAt(W.index,E.matrix);A.skiff&&(E.position.set(A.position.x-Math.sin(A.heading)*6.2,.065,A.position.z-Math.cos(A.heading)*6.2),E.rotation.set(0,A.heading,0),E.scale.set(1,1,.9+Math.sin(I*1.4+A.index)*.08),E.updateMatrix(),y.setMatrixAt(D++,E.matrix))}c.forEach(A=>{A.instanceMatrix.needsUpdate=!0}),L(I),x.instanceMatrix.needsUpdate=y.instanceMatrix.needsUpdate=!0};return w(0),i.updaters.push(w),i.moodBindings.push(()=>L(i.uTime.value)),S}function cp(i){let e=i.mat,t=Re.DAIS,n=yt(t.x,0,t.z);n.name="Marble workbench";let s=new Nt({color:15788247,roughness:.88,metalness:0}),r=new Nt({color:13222839,roughness:.86,metalness:0}),o=new Nt({color:16770491,roughness:.65,metalness:0,emissive:16766624,emissiveIntensity:.12});Ze(i,o,"emissiveIntensity",.12,.45);let a=(b,E,_,S,L=e.goldSoft,w=8)=>{let I=new P(...E),D=new P(..._),A=D.clone().sub(I),C=V(xt(S,S,A.length(),w),L);return C.position.copy(I).add(D).multiplyScalar(.5),C.quaternion.setFromUnitVectors(new P(0,1,0),A.normalize()),b.add(C),C};n.add(V(jt([[t.r-.02,t.y-.07],[t.r+.018,t.y-.045],[t.r+.018,t.y-.025],[t.r-.018,t.y],[t.r-.05,t.y],[t.r-.02,t.y-.07]],96),e.marble));for(let b=0;b<12;b++){let E=(b+.5)*Math.PI/6,_=3.69,S=V(new Zn(.012,.003,1.06),r,Math.sin(E)*_,t.y+.0015,Math.cos(E)*_);S.rotation.y=E,n.add(S)}let l=new Hn;l.moveTo(-2.5,1.9),l.bezierCurveTo(-1.25,2.72,1.25,2.72,2.5,1.9),l.lineTo(2.6,2.76),l.bezierCurveTo(1.3,3.62,-1.3,3.62,-2.6,2.76),l.closePath();let c=t.y+.91,h=.14,d=c+h+.018,u=new Yi(l,{depth:h,bevelEnabled:!0,bevelSize:.022,bevelThickness:.018,bevelSegments:2,curveSegments:28}).rotateX(-Math.PI/2);n.add(V(u,e.marble,0,c,0));for(let b of[-1.66,1.66])n.add(V(jt([[0,0],[.43,0],[.43,.055],[.36,.1],[0,.1]],24),e.marble,b,t.y,-2.67)),n.add(V(xt(.27,.31,.73,24),e.marbleFlute,b,t.y+.465,-2.67)),n.add(V(xt(.37,.3,.1,24),e.marble,b,t.y+.85,-2.67)),n.add(V(xt(.315,.315,.017,24),e.goldSoft,b,t.y+.12,-2.67));let f=new vr(new P(-2.5,d-.075,-1.9),new P(-1.25,d-.075,-2.72),new P(1.25,d-.075,-2.72),new P(2.5,d-.075,-1.9));n.add(V(new vi(f,48,.009,6,!1),e.goldSoft));let p=yt(-.25,d+.118,-2.96);p.rotation.x=.24,p.rotation.y=-.08,p.add(V(_t(1.18,.032,.84,.012),e.seam)),p.add(V(_t(1.13,.012,.79,.006),s,0,.022,0));for(let b of[-.39,.39])p.add(V(_t(.085,.012,.045,.006),e.goldSoft,b,.035,-.365));let v=.031;for(let b of[.22,.31])p.add(V(new Ke(b,.0018,4,48).rotateX(Math.PI/2),e.seam,0,v,0));a(p,[-.42,v,0],[.42,v,0],.0016,e.seam,4),a(p,[0,v,-.33],[0,v,.33],.0016,e.seam,4);let m=[[-.25,.08],[-.13,-.14],[.04,-.08],[.19,-.23],[.25,.03],[.1,.18]];for(let b=0;b<m.length;b++){let[E,_]=m[b];p.add(V(xt(b%2?.008:.011,b%2?.008:.011,.0015,8),e.seam,E,v+.002,_)),b&&a(p,[m[b-1][0],v+.001,m[b-1][1]],[E,v+.001,_],.002,e.seam,4)}n.add(p),n.add(V(_t(.82,.17,.095,.012),e.marble,-.25,d+.085,-3.27));let g=yt(1.05,d,-2.8);g.rotation.y=-.17,g.add(V(_t(.83,.055,.55,.035),e.marble,0,.028,0)),g.add(V(_t(.73,.008,.45,.025),e.seam,0,.057,0)),a(g,[.04,.075,-.15],[-.13,.075,.17],.011),a(g,[.04,.075,-.15],[.23,.075,.17],.011),g.add(V(xt(.028,.028,.014,12),e.goldSoft,.04,.077,-.15)),a(g,[-.27,.073,-.13],[-.27,.073,.16],.013),n.add(g);let x=yt(-.3,d+.012,-2.54);x.rotation.y=.05,x.add(V(_t(.63,.012,.065,.004),e.goldSoft));for(let b=0;b<17;b++)x.add(V(new Zn(.0025,.001,b%4?.013:.025),e.seam,-.28+b*.035,.0068,-.015));n.add(x);let M=yt(-1.55,d,-3.05);M.add(V(jt([[0,0],[.18,0],[.18,.035],[.14,.065],[0,.065]],24),e.marble)),a(M,[0,.055,0],[0,.61,0],.023),a(M,[0,.61,0],[.5,.78,.16],.02),M.add(V(new Ct(.045,12,8),e.goldSoft,0,.61,0)),M.add(V(jt([[0,.18],[.065,.18],[.16,.035],[.18,0],[.165,0],[.065,.14],[0,.14]],24),e.marble,.5,.6,.16)),M.add(V(new Ke(.174,.008,6,32).rotateX(Math.PI/2),e.goldSoft,.5,.605,.16)),M.add(V(xt(.146,.146,.008,24),o,.5,.618,.16));let y=new Kn(16766881,.25,2.4,2);return Ze(i,y,"intensity",.25,1.5),y.position.set(.5,.56,.16),M.add(y),n.add(M),kn(n,!0,!0),i.scene.add(Ht(n)),n}var Tc=0,oy=1,ay=new P,hp=new Co,cu=new Nn,up=new P,Ec=new pi,wc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ac,this.unassigned=new Ac,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new hu(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new P;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,s=t.length;n<s;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let d=h!==0?-c/h:0;if(!(d<=0)&&(h>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,ay)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Tc){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=n}while(t!==null)}return this}_computeExtremes(){let e=new P,t=new P,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,s=t.max,r=0,o=0;for(let u=0;u<3;u++){let f=s[u].point.getComponent(u)-n[u].point.getComponent(u);f>r&&(r=f,o=u)}let a=n[o],l=s[o],c,h;r=0,hp.set(a.point,l.point);for(let u=0,f=this.vertices.length;u<f;u++){let p=e[u];if(p!==a&&p!==l){hp.closestPointToPoint(p.point,!0,up);let v=up.distanceToSquared(p.point);v>r&&(r=v,c=p)}}r=-1,cu.setFromCoplanarPoints(a.point,l.point,c.point);for(let u=0,f=this.vertices.length;u<f;u++){let p=e[u];if(p!==a&&p!==l&&p!==c){let v=Math.abs(cu.distanceToPoint(p.point));v>r&&(r=v,h=p)}}let d=[];if(cu.distanceToPoint(h.point)<0){d.push(bi.create(a,l,c),bi.create(h,l,a),bi.create(h,c,l),bi.create(h,a,c));for(let u=0;u<3;u++){let f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge(f)),d[u+1].getEdge(1).setTwin(d[f+1].getEdge(0))}}else{d.push(bi.create(a,c,l),bi.create(h,a,l),bi.create(h,l,c),bi.create(h,c,a));for(let u=0;u<3;u++){let f=(u+1)%3;d[u+1].getEdge(2).setTwin(d[0].getEdge((3-u)%3)),d[u+1].getEdge(0).setTwin(d[f+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(d[u]);for(let u=0,f=e.length;u<f;u++){let p=e[u];if(p!==a&&p!==l&&p!==c&&p!==h){r=this.tolerance;let v=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>r&&(r=g,v=this.faces[m])}v!==null&&this._addVertexToFace(p,v)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===Tc&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===n);return e}}_computeHorizon(e,t,n,s){this._deleteFaceVertices(n),n.mark=oy;let r;t===null?r=t=n.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Tc&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let n=bi.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},bi=class i{constructor(){this.normal=new P,this.midpoint=new P,this.area=0,this.constant=0,this.outside=null,this.mark=Tc,this.edge=null}static create(e,t,n){let s=new i,r=new ta(e,s),o=new ta(t,s),a=new ta(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Ec.set(e.point,t.point,n.point),Ec.getNormal(this.normal),Ec.getMidpoint(this.midpoint),this.area=Ec.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ta=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},hu=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Ac=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Rc=class extends lt{constructor(e=[]){super();let t=[],n=[],r=new wc().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Te(t,3)),this.setAttribute("normal",new Te(n,3))}};var dp=(i,e,t,n)=>{let s=[i/2,e/2,t/2],r=[];for(let a of[-1,1])for(let l of[-1,1])for(let c of[-1,1])for(let h=0;h<3;h++)r.push(new P(...s.map((d,u)=>[a,l,c][u]*(d-(u===h?0:n)))));let o=new Rc(r);return o.setAttribute("uv",new Dt(new Float32Array(o.attributes.position.count*2),2)),o},na=i=>{let e=i.map(n=>(n.attributes.color||n.setAttribute("color",new Dt(new Float32Array(n.attributes.position.count*3).fill(1),3)),n.index?n.toNonIndexed():n)),t=zn(e,!1);return t.computeBoundingSphere(),t},du=(i,e,t)=>new vi(new xi(i.map(n=>new P(...n))),t?10:16,e,4,!1);function uu(i,e,t,n){let s=n?8:12,r=[],o=[],a=[],l=[[-1,0],[-.62,.62],[0,1],[.62,.62],[1,0],[.62,-.18],[0,-.18],[-.62,-.18]];for(let h=0;h<=s;h++){let d=h/s,u=d===1?.015:.16+Math.pow(Math.sin(Math.PI*d),.66)*.84,f=i*.5*u*(.82+.18*Math.cos(d*Math.PI*10)),p=e*(.025*d+.1*d**3);for(let[v,m]of l){r.push(v*f,d*e,p+m*(t+i*.13*Math.sin(d*Math.PI)));let g=(m<0?.81:.93+m*.07)-.065*(1-d)**3;a.push(g,g,g)}if(h<s)for(let v=0;v<8;v++){let m=h*8+v,g=h*8+(v+1)%8;o.push(m,g,m+8,g,g+8,m+8)}}for(let h=1;h<7;h++)o.push(0,h+1,h),o.push(s*8,s*8+h,s*8+h+1);let c=new lt;return c.setAttribute("position",new Te(r,3)),c.setAttribute("color",new Te(a,3)),c.setAttribute("uv",new Dt(new Float32Array(r.length/3*2),2)),c.setIndex(o),c.computeVertexNormals(),c}function fp(i,e){let n=[],s=new Ct(1,e?6:8,e?4:5),r=s.attributes.position,o=new Float32Array(r.count*3);for(let a=0;a<r.count;a++){let l=r.getY(a),c=.72+.28*l,h=.9+.1*r.getZ(a)-.035*(1-l)*.5;o.set([h,h,h],a*3),r.setXYZ(a,r.getX(a)*i*.27*c,(l+1)*i*.4,r.getZ(a)*i*.16)}s.setAttribute("color",new Dt(o,3)),s.computeVertexNormals();for(let a=0;a<6;a++)n.push(s.clone().translate(0,i*.08,i*.07).rotateZ(a/6*Xe));return n.push(new $n(i*.24,i*.29,i*.16,12).rotateX(Math.PI/2).translate(0,0,i*.2)),n.push(new Ke(i,i*.055,4,e?16:24)),na(n)}function pp(i,e){let t=[],n=e?18:30;for(let s=0;s<=n;s++){let r=s/n,o=r*Math.PI*2.15,a=i*(1-r*.84);t.push([Math.cos(o)*a,Math.sin(o)*a,Math.sin(r*Math.PI)*i*.13])}return du(t,i*.14,e)}function mp(i){let e=i.mat,t=!!i.Q.low,n=Re.ROTUNDA.r,s=Re.ROTUNDA.bays,r=Xe/s,o=i.dome?.capY??Re.WALK.y+6.42,a=i.dome?.spring??o+.62,l=i.dome?.wallTop??a+3.85,c=i.dome?.ra??2.75,h=n*Math.cos(r/2),d=e.marbleWall.clone(),u=e.goldSoft;d.onBeforeCompile=e.marbleWall.onBeforeCompile,d.customProgramCacheKey=e.marbleWall.customProgramCacheKey,d.vertexColors=!0,d.roughness=Math.min(.72,e.marbleWall.roughness+.035),Ze(i,d,"roughness",.495,.645),Ze(i,d,"envMapIntensity",.35*nt.day.env,.35*nt.night.env);let f=new St;f.name="Carved architectural ornament",i.scene.add(f);let p=new Qe,v=(Z,ee,$,he)=>{ee.vertexColors&&!Z.attributes.color&&Z.setAttribute("color",new Dt(new Float32Array(Z.attributes.position.count*3).fill(1),3));let fe=new Rt(Z,ee,$);for(let re=0;re<$;re++){let[ce,Ee,Ye,De]=he(re);p.makeRotationY(De),p.setPosition(ce,Ee,Ye),fe.setMatrixAt(re,p)}return fe.receiveShadow=!0,fe.frustumCulled=!1,f.add(fe),fe},m=Z=>{let ee=Z*r;return[Math.sin(ee)*h,0,Math.cos(ee)*h,ee]},g=[],x=[],M=[],y=[];for(let[Z,ee,$]of[[c+.19,.055,-.54],[c+.36,.033,-.535]])M.push(new Ke(Z,ee,5,t?24:36,Math.PI).translate(0,a,$));let b=t?13:19;for(let Z=0;Z<b;Z++){let ee=(Z+.5)/b*Math.PI;M.push(dp(.115,.18,.055,.015).rotateZ(ee-Math.PI/2).translate(Math.cos(ee)*(c+.285),a+Math.sin(ee)*(c+.285),-.535))}y.push(new Ke(c+.4,.009,4,t?36:56,Math.PI).translate(0,a,-.537));let E=fp(.27,t),_=uu(.24,.63,.045,t);for(let Z of[-1,1]){M.push(E.clone().rotateY(Math.PI).translate(Z*2.42,a+2.68,-.52)),M.push(du([[Z*.65,a+3.3,-.55],[Z*1.3,a+3.15,-.58],[Z*1.72,a+2.81,-.56],[Z*2.14,a+2.67,-.55]],.026,t));for(let[ee,$,he]of[[1.25,2.91,-.7],[1.73,2.65,.7],[2.75,1.95,-.26]])M.push(_.clone().rotateY(Math.PI).rotateZ(Z*he).translate(Z*ee,a+$,-.52));y.push(new Ke(.09,.008,4,20).translate(Z*2.42,a+2.68,-.6))}v(na(M),d,s,m),v(na(y),u,s,m);let S=[],L=t?6:8,w=uu(.33,.59,.047,t),I=w.attributes.position;for(let Z=0;Z<I.count;Z++)I.setZ(Z,I.getZ(Z)+Math.max(0,I.getY(Z))*.36);w.computeVertexNormals();for(let Z=0;Z<L;Z++){let ee=Z/L*Xe;S.push(w.clone().translate(0,o-.015,.47).rotateY(ee))}let D=pp(.145,t),A=t?2:4;for(let Z=0;Z<A;Z++)for(let ee of[-1,1])S.push(D.clone().rotateZ(ee<0?Math.PI:0).translate(ee*.25,o+.39,.65).rotateY(Z/A*Xe));S.push(new Ke(.51,.028,4,24).rotateX(Math.PI/2).translate(0,o+.04,0)),v(na(S),d,s,Z=>{let ee=(Z+.5)*r;return[Math.sin(ee)*n,0,Math.cos(ee)*n,ee]});let C=s*(t?6:10),U=dp(.27,.23,.23,.018);v(U,d,C,Z=>{let ee=(Z+.5)/C*Xe;return[Math.sin(ee)*(n-.74),l+.19,Math.cos(ee)*(n-.74),ee]});let B=s*(t?2:3);v(fp(.19,t),d,B,Z=>{let ee=(Z+.5)/B*Xe;return[Math.sin(ee)*(n-.99),l+.65,Math.cos(ee)*(n-.99),ee+Math.PI]});for(let[Z,ee,$]of[[n-.78,l+.38,.038],[n-1.04,l+.96,.03]])g.push(new Ke(Z,$,6,t?112:192).rotateX(Math.PI/2).translate(0,ee,0));let O=Re.GLOBE,W=Re.DAIS.y,X=uu(.27,.51,.04,t),Y=X.attributes.position;for(let Z=0;Z<Y.count;Z++)Y.setZ(Z,Y.getZ(Z)-Math.max(0,Y.getY(Z))*.32);X.computeVertexNormals();let j=t?8:12;for(let Z=0;Z<j;Z++){let ee=Z/j*Xe;g.push(X.clone().translate(0,.14,.68).rotateY(ee).translate(O.x,W,O.z))}for(let Z=0;Z<4;Z++){let ee=Z/4*Xe;g.push(du([[0,.58,.35],[0,.79,.49],[0,1.05,.57],[0,1.27,.58],[0,1.38,.62]],.047,t).rotateY(ee).translate(O.x,W,O.z)),g.push(pp(.12,t).translate(0,1.05,.59).rotateY(ee).translate(O.x,W,O.z))}g.push(new Ke(.81,.035,6,48).rotateX(Math.PI/2).translate(O.x,W+.13,O.z)),x.push(new Ke(.715,.011,5,48).rotateX(Math.PI/2).translate(O.x,W+.305,O.z)),x.push(new Ke(.585,.009,5,48).rotateX(Math.PI/2).translate(O.x,W+1.32,O.z));for(let[Z,ee]of[[g,d],[x,u]]){let $=new At(na(Z),ee);$.receiveShadow=!0,$.castShadow=ee===d&&!t,f.add($)}return f}var ia=i=>(i.layers.set(1),i);function gp(i){let e=i.Q.low?200:560,t=new Float32Array(e*3),n=new Float32Array(e),s=i.rand;for(let l=0;l<e;l++)t[l*3]=s()*30,t[l*3+1]=s()*11,t[l*3+2]=s()*24,n[l]=s();let r=new lt;r.setAttribute("position",new Dt(t,3)),r.setAttribute("aSeed",new Dt(n,1));let o=new Vt({transparent:!0,depthWrite:!1,blending:bn,fog:!1,uniforms:{uTime:i.uTime,uGust:i.uGust,uNight:i.uNight,uOrg:{value:new P(-15,.2,-7)},uPx:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uTime; uniform float uGust; uniform vec3 uOrg; uniform float uPx; varying float vA; varying vec3 vDir;
      void main(){
        float sp = 0.5 + aSeed * 0.9;
        vec3 p = position + vec3(uTime * sp * 0.22, sin(uTime * 0.3 * sp + aSeed * 40.0) * 0.5 + uTime * 0.05, -uTime * sp * 0.08);
        p += vec3(sin(uTime * 0.7 + aSeed * 90.0), cos(uTime * 0.9 + aSeed * 50.0), sin(uTime * 0.5 + aSeed * 70.0)) * 0.3;
        p = mod(p, vec3(30.0, 11.0, 24.0)) + uOrg;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.55 + 0.45 * sin(uTime * (1.5 + aSeed * 3.0) + aSeed * 30.0);
        gl_PointSize = uPx * (0.016 + aSeed * 0.028) / -mv.z;
        vec3 e = min(p - uOrg, uOrg + vec3(30.0, 11.0, 24.0) - p);
        vA = tw * smoothstep(0.0, 2.0, min(e.x, min(e.y * 2.0, e.z))) * smoothstep(0.6, 2.5, -mv.z);
        vDir = normalize(p - cameraPosition);
      }`,fragmentShader:`
      varying float vA; varying vec3 vDir;
      ${uc}
      void main(){
        float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a;
        float sun = pow(max(dot(vDir, SUN), 0.0), 6.0);
        vec3 tint = mix(vec3(1.0, 0.84, 0.55) * (0.22 + sun * 2.4), vec3(0.62, 0.74, 1.0) * (0.12 + sun * 1.2), uNight);
        gl_FragColor = vec4(tint * a * vA, 1.0);
      }`}),a=ia(new cs(r,o));a.frustumCulled=!1,a.renderOrder=7,i.scene.add(a),i.onResize.push((l,c,h)=>{o.uniforms.uPx.value=c*h*1.2})}function xp(i){let e=i.Q.low?50:120,t=Math.round(e*.78),n=i.rand,s=y=>{let _=[],S=[],L=[],w=[];for(let D=0;D<=16;D++){let A=D/16,C=Math.sin(Math.PI*A),U=y?.045*Math.pow(C,.86)*(1+.018*Math.sin(A*Math.PI*16)):.058*Math.pow(C,.58)*(.62+.38*A);for(let B=0;B<=8;B++){let O=B/8,W=O*2-1,X=W*U*(1+.055*W*Math.sin(A*Math.PI)),Y=(A-.5)*(y?.205:.17),j=y?.014*C*(1-Math.abs(W))+.012*A*A+.003*W*Math.sin(A*Xe):.025*W*W*Math.sin(A*Math.PI*.9)+.016*A*A*A+.0025*Math.sin(A*Math.PI*5+W)*W*W;if(_.push(X,Y,j),S.push(O,A),y){let Z=Math.exp(-W*W*45)*C;L.push(.78+.18*A+Z*.12,.83+.14*A+Z*.1,.7+.24*A+Z*.1)}else{let Z=Math.abs(W)*C;L.push(ct(.7,1,A),ct(.49,.96,A)-Z*.035,ct(.66,.99,A))}}}for(let D=0;D<16;D++)for(let A=0;A<8;A++){let C=D*9+A,U=C+1,B=C+8+1,O=B+1;w.push(C,U,B,U,O,B)}let I=new lt;return I.setAttribute("position",new Te(_,3)),I.setAttribute("uv",new Te(S,2)),I.setAttribute("color",new Te(L,3)),I.setIndex(w),I.computeVertexNormals(),I},r=y=>{let b=new hs({color:16777215,vertexColors:!0,side:Ut,transparent:!0,opacity:y?.94:.88,depthWrite:!1,emissive:y?4282157:7819362,emissiveIntensity:.02,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return Ze(i,b,"emissiveIntensity",.02,.08),b.forceSinglePass=!0,b},o=ia(new Rt(s(!1),r(!1),t)),a=ia(new Rt(s(!0),r(!0),e-t));o.name="Falling blossom petals",a.name="Falling vine leaves";for(let y of[o,a])y.frustumCulled=!1,y.instanceMatrix.setUsage(Hs),i.scene.add(y);let l=[[],[]],c=new P,h=i.scene.children.find(y=>y.isMesh&&!y.isInstancedMesh&&y.geometry?.hasAttribute("aH")&&y.geometry?.hasAttribute("color"));if(h){h.updateMatrixWorld(!0);let y=h.geometry.getAttribute("position"),b=h.geometry.getAttribute("color"),E=h.geometry.getAttribute("aH");for(let _=0;_+3<y.count;_+=16){let S=E.getX(_);if(S<.22)continue;c.set(0,0,0);for(let w=0;w<4;w++)c.add(new P().fromBufferAttribute(y,_+w));if(c.multiplyScalar(.25).applyMatrix4(h.matrixWorld),c.z>Re.CAM.z-2.5||c.y<3)continue;let L=b.getY(_)>b.getX(_)*1.08&&b.getY(_)>b.getZ(_)*1.12;l[L?1:0].push({x:c.x,y:c.y,z:c.z,flex:S})}}for(let y of l)if(!y.length)for(let b=0;b<18;b++){let E=(b+.5)/18*Xe,_=Re.ROTUNDA.r-1.15,S=Math.cos(E)*_;S<Re.CAM.z-2.5&&y.push({x:Math.sin(E)*_,y:(i.dome?.wallTop||12)-2.7,z:S,flex:.6})}let d=[[16045540,15390453,16180953,15713493],[9678706,11647870,8234107,12699546]],u=[],f=new Qe,p=new Xt,v=new cn,m=new P,g=new P,x=new Me,M=(y,b,E=0)=>{let _=l[y.leaf?1:0],S=_[Math.floor(n()*_.length)],[L,w]=Ir(S.x*.35+S.y*.2,S.z*.35+S.y*.2,E,i.uGust.value),I=S.flex*S.flex*.5;if(y.x=S.x+L*I,y.y=S.y,y.z=S.z+w*I,y.vx=0,y.vy=0,y.vz=0,y.life=22+n()*16,y.ph=n()*90,y.sp=1.2+n()*2.4,y.size=.78+n()*.52,b){let D=n()*y.life*.9;y.y=Math.max($o(y.x,y.z)+.04,y.y-D*.6),y.x+=Math.min(D,14)*.25,y.z-=Math.min(D,14)*.08,y.life-=D}};for(let y=0;y<e;y++){let b=y>=t,E=b?a:o,_=b?y-t:y,S={leaf:b,inst:E,index:_};M(S,!0),u.push(S);let L=d[b?1:0];E.setColorAt(_,x.set(L[Math.floor(n()*L.length)]))}i.updaters.push((y,b)=>{let E=i.uGust.value;for(let _ of u){_.life-=b,_.life<0&&M(_,!1,y);let S=$o(_.x,_.z),L=_.y<=S+.041,[w,I]=Ir(_.x,_.z,y,E),D=1-Math.exp(-b*1.6);if(L)_.y=S+.04,_.vy=0,_.vx+=(w*.05-_.vx)*D,_.vz+=(I*.05-_.vz)*D,E>.6&&S>.1&&(_.y+=.06);else{let C=w*.7+Math.sin(y*1.3+_.ph)*.5,U=I*.7+Math.cos(y*1.1+_.ph)*.5,B=-.5+Math.sin(y*2.1+_.ph)*.4+E*.9;_.vx+=(C-_.vx)*D,_.vy+=(B-_.vy)*D,_.vz+=(U-_.vz)*D}_.x+=_.vx*b,_.y=Math.max(_.y+_.vy*b,$o(_.x,_.z)+.04),_.z+=_.vz*b;let A=gt(_.life/2.5);L?v.set(-Math.PI/2+Math.sin(y*.8+_.ph)*.05,0,_.ph+y*.03):v.set(y*_.sp+_.ph+Math.sin(y*_.sp*2.4+_.ph)*.28,y*_.sp*.7+_.ph*2+Math.atan2(_.vx,_.vz)*.25,_.ph+Math.sin(y*_.sp+_.ph)*.3+E*.3),p.setFromEuler(v),f.compose(g.set(_.x,_.y,_.z),p,m.setScalar(A*_.size)),_.inst.setMatrixAt(_.index,f)}o.instanceMatrix.needsUpdate=a.instanceMatrix.needsUpdate=!0})}function vp(i,e,t,n){let s=a=>{let l=new lt,c=t,h=[[0,0,.2],[0,0,-.16],[a*.55,0,.1],[a,0,-.1],[a*.5,0,-.1]].map(([d,u,f])=>[d*c,u,f*c]);return l.setAttribute("position",new Te([h[0],h[1],h[2],h[1],h[4],h[2],h[2],h[4],h[3]].flat(),3)),l.computeVertexNormals(),l},r=new Rt(s(1),n,e),o=new Rt(s(-1),n,e);return r.frustumCulled=o.frustumCulled=!1,i.scene.add(r,o),[r,o]}function _p(i){let e=i.Q.low?10:20,t=i.mood.name==="night"?Ui(74031):i.rand,n=new kt({color:16513266,side:Ut,transparent:!0,depthWrite:!1});Ze(i,n,"opacity",1,0);let[s,r]=vp(i,e,1.1,n),o=[];for(let p=0;p<e;p++)o.push({ph:t()*.9-(p>e*.65?2.6:0),r:30+t()*24,h:t()*9,f:5.5+t()*2.5,s:t()*50});let a=new Qe,l=new Xt,c=new Xt,h=new cn(0,0,0,"YXZ"),d=new P,u=new P(1,1,1),f=new P(0,0,1);i.updaters.push(p=>{let v=-8+Math.sin(p*.05)*34,m=-150+Math.cos(p*.04)*26,g=13;for(let x=0;x<e;x++){let M=o[x],y=p*.2+M.ph+ft(p*.1,M.s)*.25,b=M.r+ft(p*.13,M.s+3)*9;d.set(v+Math.cos(y)*b,g+M.h+ft(p*.17,M.s+7)*4,m+Math.sin(y)*b*.75);let E=gt(ft(p*.22,M.s+11)*2+.4),_=Math.sin(p*M.f+M.s)*ct(.75,.12,E)+.12;h.set(ft(p*.3,M.s)*.12,Math.atan2(-Math.sin(y),Math.cos(y)*.75),-.35),l.setFromEuler(h),c.setFromAxisAngle(f,_),a.compose(d,c.premultiply(l),u),s.setMatrixAt(x,a),c.setFromAxisAngle(f,-_),a.compose(d,c.premultiply(l),u),r.setMatrixAt(x,a)}s.instanceMatrix.needsUpdate=r.instanceMatrix.needsUpdate=!0})}function yp(i){let t=i.mood.name==="night"?Ui(74032):i.rand,n=new hs({color:16777215,emissive:16777215,emissiveIntensity:.3,side:Ut,transparent:!0,depthWrite:!1});Ze(i,n,"opacity",1,0);let[s,r]=vp(i,6,.075,n);ia(s),ia(r);let o=new Me,a=[16765503,16777215,16771496,16774390,16777215,16765503],l=[];for(let g=0;g<6;g++)l.push({x:-3.5+t()*8,z:4.5+t()*6.5,s:t()*80}),s.setColorAt(g,o.set(a[g])),r.setColorAt(g,o);let c=new Qe,h=new Xt,d=new Xt,u=new cn(0,0,0,"YXZ"),f=new P,p=new P(1,1,1),v=new P(0,0,1),m=l.map(()=>new P);i.updaters.push(g=>{for(let x=0;x<6;x++){let M=l[x],y=M.x+ft(g*.23,M.s)*2.6+ft(g*1.1,M.s+2)*.35,b=M.z+ft(g*.19,M.s+5)*2.2+ft(g*1.3,M.s+9)*.3,E=gt(ft(g*.12,M.s+20)*3-1.2),_=$o(y,b)+ct(.7+ft(g*.5,M.s+13)*.4+Math.abs(Math.sin(g*9+M.s))*.06,.1,E);f.set(y,_,b);let S=Math.atan2(y-m[x].x,b-m[x].z);m[x].copy(f);let L=ct(Math.sin(g*22+M.s)*1+.35,1.1+Math.sin(g*2+M.s)*.25,E);u.set(-.25,S,0),h.setFromEuler(u),d.setFromAxisAngle(v,L),c.compose(f,d.premultiply(h),p),s.setMatrixAt(x,c),d.setFromAxisAngle(v,-L),c.compose(f,d.premultiply(h),p),r.setMatrixAt(x,c)}s.instanceMatrix.needsUpdate=r.instanceMatrix.needsUpdate=!0})}function Mp(i){let e=i.Q.low?26:48,t=i.mood.name==="night"?i.rand:Ui(74033),n=new Float32Array(e*3),s=new Float32Array(e*3),r=[];for(;r.length<e;){let l=t()*Xe,c=5.5+t()*9.5,h=Math.sin(l)*c,d=Math.cos(l)*c*.9+1;Math.hypot(h-Re.CAM.x,d-Re.CAM.z)<5.5||r.push({x:h,z:d,y:.35+t()*t()*3.2,s:t()*90,f:.5+t()*.9})}let o=new lt;o.setAttribute("position",new Dt(n,3)),o.setAttribute("color",new Dt(s,3));let a=new cs(o,new ls({size:.1,map:i.tex.glow,vertexColors:!0,blending:bn,depthWrite:!1,transparent:!0,fog:!1}));Ze(i,a.material,"opacity",0,1),a.frustumCulled=!1,a.renderOrder=7,i.scene.add(a),i.updaters.push(l=>{for(let c=0;c<e;c++){let h=r[c],d=c*3,u=Math.pow(Math.max(0,Math.sin(l*h.f+h.s)),3)*2.2+.12;n[d]=h.x+ft(l*.12,h.s)*1.3,n[d+1]=h.y+ft(l*.2,h.s+4)*.5+.3,n[d+2]=h.z+ft(l*.1,h.s+8)*1.3,s[d]=1*u,s[d+1]=.86*u,s[d+2]=.42*u}o.attributes.position.needsUpdate=o.attributes.color.needsUpdate=!0})}var Dr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ly=new Ns(-1,1,1,-1,0,1),fu=class extends lt{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}},cy=new fu,xs=class{constructor(e){this._mesh=new At(cy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ly)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vs=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=On.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sa=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Pc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vs(Dr),this.copyPass.material.blending=Zi,this.timer=new Ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sa!==void 0&&(o instanceof sa?n=!0:o instanceof Cc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ic=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Sp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Lr=class i extends ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:rn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Qt(r,o,{type:rn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Qt(r,o,{type:rn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Sp;this.highPassUniforms=On.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=On.clone(Dr.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader,premultipliedAlpha:!0,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new kt,this._fsQuad=new xs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Lr.BlurDirectionX=new le(1,0);Lr.BlurDirectionY=new le(0,1);var ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Dc=class extends ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=On.clone(ra.uniforms),this.material=new yr({name:ra.name,uniforms:this.uniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this._fsQuad=new xs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===No?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bp={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new le(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var Ep="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",hy=(i,e)=>({uniforms:{tDiffuse:{value:null},uSun:{value:new le(.5,.5)},uK:{value:0},uAspect:{value:1},uThreshold:{value:e}},vertexShader:Ep,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uK; uniform float uAspect; uniform float uThreshold; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 base = texture2D(tDiffuse, vUv);
      vec3 acc = vec3(0.0);
      if (uK > 0.002) {
        vec2 d = uSun - vUv; float dist = length(d * vec2(uAspect, 1.0));
        vec2 st = d * (0.92 / float(${i}));
        vec2 p = vUv + st * hash(gl_FragCoord.xy); float w = 1.0;
        for (int i = 0; i < ${i}; i++) {
          vec3 s = min(texture2D(tDiffuse, p).rgb, vec3(3.0));
          float l = max(dot(s, vec3(0.3, 0.55, 0.15)) - uThreshold, 0.0);
          float src = smoothstep(0.3, 0.05, length((p - uSun) * vec2(uAspect, 1.0)));      // only the sun or moon itself casts shafts, not lamps elsewhere in the frame
          acc += s * (l / (l + 1.2)) * src * w; w *= 0.965; p += st;
        }
        acc *= uK / float(${i}) * (1.0 / (1.0 + dist * 1.6));
      }
      gl_FragColor = vec4(base.rgb + acc, base.a);
    }`}),uy=()=>({uniforms:{tDiffuse:{value:null},uTime:{value:0},uFade:{value:0},uNight:{value:0},uRes:{value:new le(1,1)}},vertexShader:Ep,fragmentShader:`
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
    }`});function Tp(i){let{renderer:e,scene:t,camera:n,Q:s}=i,r=i.mood,o=new Qt(4,4,{type:rn,samples:s.msaa}),a=new Pc(e,o);a.addPass(new Ic(t,n));let l=new vs(hy(s.rays,r.rayThresh));a.addPass(l);let c=new Lr(new le(256,256),r.bloom[0],r.bloom[1],r.bloom[2]);a.addPass(c),a.addPass(new Dc);let h=new vs(bp);h.enabled=s.msaa===0,a.addPass(h);let d=new vs(uy());d.uniforms.uNight=i.uNight,a.addPass(d);let u=()=>{let m=i.uNight.value,g=oi.lerp;c.strength=g(nt.day.bloom[0],nt.night.bloom[0],m),c.radius=g(nt.day.bloom[1],nt.night.bloom[1],m),c.threshold=g(nt.day.bloom[2],nt.night.bloom[2],m),l.uniforms.uThreshold.value=g(nt.day.rayThresh,nt.night.rayThresh,m)};i.moodBindings.push(u),u();let f=new P,p=new P,v=s.rays>0;return{composer:a,fin:d,ray:l,bloom:c,resize(m,g,x){a.setPixelRatio(x),a.setSize(m,g),d.uniforms.uRes.value.set(m*x,g*x),h.uniforms.resolution.value.set(1/(m*x),1/(g*x)),l.uniforms.uAspect.value=m/g},render(m){n.getWorldDirection(p),f.copy(Ni).multiplyScalar(2e3).add(n.position).project(n);let g=p.dot(Ni),x=Math.max(Math.abs(f.x),Math.abs(f.y));l.uniforms.uSun.value.set(f.x*.5+.5,f.y*.5+.5),l.uniforms.uK.value=g>.2?oi.lerp(nt.day.rays,nt.night.rays,i.uNight.value)*oi.smoothstep(1.7-x,0,.7):0,l.enabled=s.rays>0&&(v||l.uniforms.uK.value>.002),d.uniforms.uTime.value=m,a.render(),v=!1}}}var dy={high:{vines:1,shadow:4096,msaa:4,dpr:1.75,rays:28,mirror:.7},mid:{vines:.8,shadow:2048,msaa:4,dpr:1.25,rays:22,mirror:.5},low:{vines:.55,shadow:1024,msaa:0,dpr:1.5,rays:14,mirror:.35,low:!0}};function OE(i,e={}){let t;try{t=new ac({canvas:i,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}if(!t.capabilities.isWebGL2)return t.dispose(),null;let n={disposed:!1,raf:0,timer:0,cleanups:[]},s=(a,l)=>{n.disposed||i.dispatchEvent(new CustomEvent(a,{detail:l,bubbles:!0}))},r={skip(){n.disposed||(e.intro=0)},setPaused(){},setMood(a){!n.disposed&&(a==="day"||a==="night")&&(e.time=a)},paused:!1,state:"loading",dispose(){if(!n.disposed){n.disposed=!0,r.state="disposed",r.paused=!0,cancelAnimationFrame(n.raf),clearTimeout(n.timer);for(let a of n.cleanups)a();n.cleanups.length=0,t.dispose(),t.forceContextLoss()}}},o=async()=>{if(!n.disposed)try{await Bf(),n.disposed||fy(i,t,e,s,r,n)}catch(a){console.warn("[world]",a),s("world:fail")}};return e.manual?o():n.raf=requestAnimationFrame(()=>{n.timer=setTimeout(o,0)}),r}function fy(i,e,t,n,s,r){let o=matchMedia("(pointer: coarse)").matches,a=Math.min(innerWidth,innerHeight)<700,l=t.quality||(o||a?"low":(navigator.hardwareConcurrency||4)>=8?"high":"mid"),c={...dy[l]},h=!!t.reducedMotion,d=!!t.manual,u=Math.min(window.devicePixelRatio||1,c.dpr);e.setPixelRatio(u),e.shadowMap.enabled=!0,e.shadowMap.type=Us,e.toneMapping=Os;let f=new Date().getHours(),p={...Tf(t.time==="day"||t.time==="night"?t.time:f>=6&&f<18?"day":"night")};s.mood=p.name,e.toneMappingExposure=p.exposure,Af();let v=new Rs;v.fog=new to(16777215,p.fog);let m=new Rn(42,1.6,.25,6e3);m.layers.enable(1);let g=Ui(20261117),x={scene:v,camera:m,renderer:e,Q:c,rand:g,opts:t,mood:p,updaters:[],onResize:[],frame:0,uNight:{value:p.name==="night"?1:0},moodBindings:[],uTime:{value:0},uGust:{value:0},uPush:{value:[new Bt(0,0,1,0),new Bt(0,0,1,0)]},shake:0,gustT:0,tex:{noise:Nf(256,8),glow:Lf(),panel:Uf(g),window:Ff(g),leaf:Of(g),marble:su(512),flute:zf(22),lily:Hf(),star:kf()}};r.cleanups.push(()=>{let ue=new Set,Be=new Set(Object.values(x.mat||{})),ae=new Set(Object.values(x.tex));v.traverse(Ge=>{if(Ge.geometry&&ue.add(Ge.geometry),Ge.material)for(let we of Array.isArray(Ge.material)?Ge.material:[Ge.material])Be.add(we);(Ge.isInstancedMesh||Ge.isReflector)&&Ge.dispose(),Ge.shadow?.dispose()});for(let Ge of Be){for(let we of Object.values(Ge))we?.isTexture&&ae.add(we);for(let we of Object.values(Ge.uniforms||{}))we.value?.isTexture&&ae.add(we.value);Ge.dispose()}for(let Ge of ue)Ge.dispose();for(let Ge of ae)Ge.dispose();x.envTarget?.dispose(),v.clear(),window.__world?.W===x&&delete window.__world});let M=new Ao(p.lightColor,p.lightIntensity);M.target.position.set(.6,1.5,3.2),M.position.copy(M.target.position).addScaledVector(Ni,90),M.castShadow=!0,M.shadow.mapSize.setScalar(c.shadow),M.shadow.intensity=p.shadowIntensity,Object.assign(M.shadow.camera,{left:-24,right:24,top:26,bottom:-16,near:40,far:140}),M.shadow.bias=-12e-5,M.shadow.normalBias=.018,M.shadow.radius=1.25*c.shadow/2048;let y=new Eo(p.hemi[0],p.hemi[1],p.hemi[2]);v.add(M,M.target,y);let b=new Kn(16763274,0,18,1.6);b.position.set(-4.6,3.4,8.5),v.add(b);let E=new Kn(p.name==="night"?16770762:16775405,p.name==="night"?18:30,18,2);E.name="Workstation soft fill",E.position.set(.5,6.5,4.5),v.add(E);let _=nt.day,S=nt.night;Ze(x,e,"toneMappingExposure",_.exposure,S.exposure),Ze(x,v.fog,"density",_.fog,S.fog),Ze(x,M,"color",_.lightColor,S.lightColor),Ze(x,M,"intensity",_.lightIntensity,S.lightIntensity),Ze(x,M.shadow,"intensity",_.shadowIntensity,S.shadowIntensity),Ze(x,y,"color",_.hemi[0],S.hemi[0]),Ze(x,y,"groundColor",_.hemi[1],S.hemi[1]),Ze(x,y,"intensity",_.hemi[2],S.hemi[2]),Ze(x,b,"intensity",0,8),Ze(x,E,"color",16775405,16770762),Ze(x,E,"intensity",30,18);for(let ue of["env","lamps","bloomGlow"])Ze(x,p,ue,_[ue],S[ue]);let L=new P(..._.light).normalize(),w=new P(...S.light).normalize();x.moodBindings.push(ue=>{Ni.copy(L).lerp(w,ue).normalize(),M.position.copy(M.target.position).addScaledVector(Ni,90)}),Rf(x),x.mat=Pf(x);let I=If(x);Yf(x),x.dome=Zf(x),mp(x),$f(x),Jf(x),Kf(x),jf(x),cp(x),tp(x),np(x),ip(x),sp(x),rp(x),op(x),lp(x),ap(x),gp(x),xp(x),_p(x),yp(x),Mp(x);let D=Tp(x);r.cleanups.push(()=>{for(let ue of D.composer.passes)ue.dispose();D.composer.dispose()});let A=new Set(Object.values(x.mat));v.traverse(ue=>{if(ue.material)for(let Be of Array.isArray(ue.material)?ue.material:[ue.material])A.add(Be)});for(let ue of A)dc(ue,x);fc(x,x.uNight.value);let C={from:x.uNight.value,to:x.uNight.value,elapsed:1.8},U=(ue,Be,ae)=>new P(ue,Be,ae),B={pos:U(Re.CAM.x,Re.CAM.y,Re.CAM.z),tgt:U(.1,2.75,0),fov:42},O={pos:U(1.25,1.7,17),tgt:U(1,3.5,0),fov:64},W={pos:U(),tgt:U(),fov:42},X=ue=>{let Be=bt(1.2,.72,ue);W.pos.lerpVectors(B.pos,O.pos,Be),W.tgt.lerpVectors(B.tgt,O.tgt,Be),W.fov=ct(ue>2.2?36:B.fov,O.fov,Be)},Y=h?0:t.intro??7.5,j={pos:U(.4,16.2,8.5),tgt:U(-1.5,17.5,-14)},Z={x:0,y:0},ee=new Et(0,9,1),$=new Et(0,9,1),he=new Et(0,14,1),fe=U(),re=U(),ce=U(),Ee=U(0,1,0),Ye=0,De="intro",$e=ue=>{(De!==ue||s.state!==ue)&&(De=ue,s.state=ue,n("world:state",ue))};function je(ue,Be){let ae=Y>0?gt(Ye/Y):1,Ge=li(ae),we=li(gt(ae*1.1));fe.lerpVectors(j.pos,W.pos,Ge),re.lerpVectors(j.tgt,W.tgt,we),fe.x+=Math.sin(Ge*Math.PI)*1.6,m.fov=W.fov+(1-Ge)*8;let Fe=ee.step(Z.x,Be),N=$.step(Z.y,Be),T=he.step(gt((window.scrollY||0)/Math.max(1,innerHeight)),Be);if(ce.subVectors(re,fe).cross(Ee).normalize(),fe.addScaledVector(ce,Fe*.5).y+=-N*.16+T*1.3+Math.sin(ue*.23)*.02,re.addScaledVector(ce,Fe*-1.3).y+=N*.8+T*11,m.position.copy(fe),m.lookAt(re),x.shake>.001){let q=x.shake*x.shake;m.rotation.x+=ft(ue*23,1)*.011*q,m.rotation.y+=ft(ue*21,2)*.011*q,m.rotation.z+=ft(ue*19,3)*.02*q,m.position.y+=ft(ue*27,4)*.04*q}x.debugView&&(m.position.fromArray(x.debugView.pos),m.lookAt(...x.debugView.tgt),m.fov=x.debugView.fov||42),m.updateProjectionMatrix()}let oe=0,Se=0;function ye(){let ue=i.getBoundingClientRect(),Be=Math.max(2,Math.round(ue.width)),ae=Math.max(2,Math.round(ue.height));return Be===oe&&ae===Se?!1:(oe=Be,Se=ae,e.setSize(Be,ae,!1),m.aspect=Be/ae,X(m.aspect),D.resize(Be,ae,u),x.onResize.forEach(Ge=>Ge(Be,ae,u)),!0)}let Ue=ue=>{u=ue,e.setPixelRatio(ue),D.resize(oe,Se,ue),x.onResize.forEach(Be=>Be(oe,Se,ue))};ye();let xe=0,et=!1,He=new Et(0,14,.7);function st(ue,Be=ue){if(xe+=ue,x.uTime.value=xe,C.elapsed<1.8){C.elapsed=Math.min(1.8,C.elapsed+Be);let ae=C.elapsed/1.8,Ge=ae*ae*(3-2*ae);fc(x,ct(C.from,C.to,Ge))}x.gustT*=Math.exp(-ue*1.5),x.uGust.value=Math.max(0,He.step(x.gustT+Math.max(0,ft(xe*.07,9)-.45)*.9,ue)),x.shake*=Math.exp(-ue*2.6),De==="intro"?(Ye+=Be,Ye>=Y-1.4&&$e("ready")):Ye+=Be;for(let ae of x.updaters)ae(xe,ue);je(xe,ue)}function rt(){D.fin.uniforms.uFade.value=1,D.render(xe),et||(et=!0,n("world:loaded",p.name))}s.skip=()=>{Ye=Math.max(Ye,Y),$e("ready")},s.setMood=ue=>{r.disposed||ue!=="day"&&ue!=="night"||(s.mood=p.name=ue,C.from=x.uNight.value,C.to=ue==="night"?1:0,C.elapsed=0,(h||s.paused)&&(C.elapsed=1.8,fc(x,C.to),rt()))};let vt=t.startTime??0;for(let ue=0,Be=Math.round(vt*30);ue<Be;ue++)(h||d)&&(Ye=Y),st(1/30);if(d){Ye=t.manualIntro?0:Y,t.manualIntro&&(De="intro"),window.__world={advance(ue,Be=Math.max(1,Math.round(ue*60))){if(ue>0)for(let ae=0;ae<Be;ae++)st(ue/Be);return ye(),je(xe,0),rt(),xe},W:x,api:s},rt(),$e(De);return}let z=()=>{if(r.disposed)return;if(h){Ye=Y,st(1/60),rt(),$e("ready");let k=new ResizeObserver(()=>{!r.disposed&&ye()&&(je(xe,1/60),rt())});k.observe(i),r.cleanups.push(()=>k.disconnect());return}$e(Y>0?"intro":"ready");let ue=performance.now(),Be=!0,ae=!1,Ge=0,we=0,Fe=0,N=0,T=k=>{if(r.disposed||!Be||document.hidden||s.paused){ae=!1;return}r.raf=requestAnimationFrame(T);let G=(k-ue)/1e3;ue=k;let J=gt(G,.001,.05);if(ye(),st(J,Math.min(G,.3)),Ge+=G,we++,Ge>1.5){let de=Ge/we*1e3;Ge=0,we=0,de>26?(Fe++,N=0):de<12.5?(N++,Fe=0):Fe=N=0,Fe>=2&&(Fe=0,u>.72?Ue(Math.max(.7,u*.84)):I.userData.scale()>.26&&I.userData.setScale(I.userData.scale()*.75)),N>=4&&u<Math.min(window.devicePixelRatio||1,c.dpr)-.01&&(N=0,Ue(Math.min(Math.min(window.devicePixelRatio||1,c.dpr),u*1.12)))}rt()},q=()=>{!r.disposed&&!ae&&Be&&!document.hidden&&!s.paused&&(ae=!0,ue=performance.now(),r.raf=requestAnimationFrame(T))};s.setPaused=k=>{r.disposed||(s.paused=!!k,s.paused?(s.skip(),je(xe,0),rt()):q(),n("world:motion",s.paused))};let pe=new ResizeObserver(()=>{!r.disposed&&s.paused&&ye()&&(je(xe,0),rt())});pe.observe(i);let se=new IntersectionObserver(k=>{Be=k[0].isIntersecting,q()},{threshold:.01});se.observe(i),document.addEventListener("visibilitychange",q);let ge=k=>{Z.x=k.clientX/innerWidth*2-1,Z.y=k.clientY/innerHeight*2-1};o||window.addEventListener("pointermove",ge,{passive:!0}),r.cleanups.push(()=>{pe.disconnect(),se.disconnect(),document.removeEventListener("visibilitychange",q),window.removeEventListener("pointermove",ge)}),q()};je(0,1/60),(e.compileAsync?e.compileAsync(v,m).catch(()=>{}):Promise.resolve()).then(z)}export{OE as startWorld};
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
