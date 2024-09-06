var Fm=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var nb=Fm((eu,Xo)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const Om="166",Bm=0,Xu=1,zm=2,Qf=1,km=2,Yn=3,vs=0,Ii=1,An=2,_s=0,Wr=1,qu=2,ju=3,$u=4,Hm=5,Ws=100,Vm=101,Gm=102,Wm=103,Xm=104,qm=200,jm=201,$m=202,Ym=203,ah=204,lh=205,Km=206,Jm=207,Zm=208,Qm=209,eg=210,tg=211,ig=212,ng=213,sg=214,rg=0,og=1,ag=2,El=3,lg=4,cg=5,hg=6,ug=7,ep=0,dg=1,fg=2,ys=0,pg=1,mg=2,gg=3,xg=4,_g=5,yg=6,vg=7,tp=300,Kr=301,Jr=302,ch=303,hh=304,Ul=306,uh=1e3,qs=1001,dh=1002,en=1003,Mg=1004,va=1005,mn=1006,ec=1007,js=1008,Qn=1009,ip=1010,np=1011,qo=1012,tu=1013,Ks=1014,Jn=1015,Qo=1016,iu=1017,nu=1018,Zr=1020,sp=35902,rp=1021,op=1022,xn=1023,ap=1024,lp=1025,Xr=1026,Qr=1027,cp=1028,su=1029,hp=1030,ru=1031,ou=1033,_l=33776,yl=33777,vl=33778,Ml=33779,fh=35840,ph=35841,mh=35842,gh=35843,xh=36196,_h=37492,yh=37496,vh=37808,Mh=37809,Sh=37810,wh=37811,bh=37812,Th=37813,Eh=37814,Ah=37815,Rh=37816,Ch=37817,Lh=37818,Ph=37819,Ih=37820,Dh=37821,Sl=36492,Nh=36494,Uh=36495,up=36283,Fh=36284,Oh=36285,Bh=36286,Sg=3200,wg=3201,dp=0,bg=1,gs="",Tn="srgb",ws="srgb-linear",au="display-p3",Fl="display-p3-linear",Al="linear",Vt="srgb",Rl="rec709",Cl="p3",ar=7680,Yu=519,Tg=512,Eg=513,Ag=514,fp=515,Rg=516,Cg=517,Lg=518,Pg=519,Ku=35044,Ju="300 es",Zn=2e3,Ll=2001;let so=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}};const xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,zh=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xi[r&255]+xi[r>>8&255]+xi[r>>16&255]+xi[r>>24&255]+"-"+xi[e&255]+xi[e>>8&255]+"-"+xi[e>>16&15|64]+xi[e>>24&255]+"-"+xi[t&63|128]+xi[t>>8&255]+"-"+xi[t>>16&255]+xi[t>>24&255]+xi[i&255]+xi[i>>8&255]+xi[i>>16&255]+xi[i>>24&255]).toLowerCase()}function Mi(r,e,t){return Math.max(e,Math.min(t,r))}function Ig(r,e){return(r%e+e)%e}function ic(r,e,t){return(1-t)*r+t*e}function So(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}let Qe=class pp{constructor(e=0,t=0){pp.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class mp{constructor(e,t,i,n,s,o,a,l,h){mp.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,h)}set(e,t,i,n,s,o,a,l,h){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],d=i[7],f=i[2],m=i[5],y=i[8],w=n[0],x=n[3],v=n[6],D=n[1],T=n[4],C=n[7],g=n[2],F=n[5],U=n[8];return s[0]=o*w+a*D+l*g,s[3]=o*x+a*T+l*F,s[6]=o*v+a*C+l*U,s[1]=h*w+u*D+d*g,s[4]=h*x+u*T+d*F,s[7]=h*v+u*C+d*U,s[2]=f*w+m*D+y*g,s[5]=f*x+m*T+y*F,s[8]=f*v+m*C+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-i*s*u+i*a*l+n*s*h-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=u*o-a*h,f=a*l-u*s,m=h*s-o*l,y=t*d+i*f+n*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=d*w,e[1]=(n*h-u*i)*w,e[2]=(a*i-n*o)*w,e[3]=f*w,e[4]=(u*t-n*l)*w,e[5]=(n*s-a*t)*w,e[6]=m*w,e[7]=(i*l-h*t)*w,e[8]=(o*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-n*h,n*l,-n*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nc.makeScale(e,t)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const nc=new gt;function gp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dg(){const r=Pl("canvas");return r.style.display="block",r}const Zu={};function xp(r){r in Zu||(Zu[r]=!0,console.warn(r))}function Ng(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Qu=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ed=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[ws]:{transfer:Al,primaries:Rl,toReference:r=>r,fromReference:r=>r},[Tn]:{transfer:Vt,primaries:Rl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fl]:{transfer:Al,primaries:Cl,toReference:r=>r.applyMatrix3(ed),fromReference:r=>r.applyMatrix3(Qu)},[au]:{transfer:Vt,primaries:Cl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ed),fromReference:r=>r.applyMatrix3(Qu).convertLinearToSRGB()}},Ug=new Set([ws,Fl]),Nt={enabled:!0,_workingColorSpace:ws,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ug.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Ma[e].toReference,n=Ma[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ma[r].primaries},getTransfer:function(r){return r===gs?Al:Ma[r].transfer}};function qr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr,Fg=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Pl("canvas")),lr.width=e.width,lr.height=e.height;const i=lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=qr(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qr(t[i]/255)*255):t[i]=qr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Og=0,_p=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(rc(n[o].image)):s.push(rc(n[o]))}else s=rc(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bg=0,Pn=class wl extends so{constructor(e=wl.DEFAULT_IMAGE,t=wl.DEFAULT_MAPPING,i=qs,n=qs,s=mn,o=js,a=xn,l=Qn,h=wl.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=ea(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=tp;Pn.DEFAULT_ANISOTROPY=1;let pi=class yp{constructor(e=0,t=0,i=0,n=1){yp.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,h=l[0],u=l[4],d=l[8],f=l[1],m=l[5],y=l[9],w=l[2],x=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-w)<.01&&Math.abs(y-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+w)<.1&&Math.abs(y+x)<.1&&Math.abs(h+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,C=(m+1)/2,g=(v+1)/2,F=(u+f)/4,U=(d+w)/4,q=(y+x)/4;return T>C&&T>g?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=F/i,s=U/i):C>g?C<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(C),i=F/n,s=q/n):g<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(g),i=U/s,n=q/s),this.set(i,n,s,t),this}let D=Math.sqrt((x-y)*(x-y)+(d-w)*(d-w)+(f-u)*(f-u));return Math.abs(D)<.001&&(D=1),this.x=(x-y)/D,this.y=(d-w)/D,this.z=(f-u)/D,this.w=Math.acos((h+m+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class zg extends so{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pi(0,0,e,t),this.scissorTest=!1,this.viewport=new pi(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pn(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _p(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends zg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vp extends Pn{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=en,this.minFilter=en,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends Pn{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=en,this.minFilter=en,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ta=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],h=i[n+1],u=i[n+2],d=i[n+3];const f=s[o+0],m=s[o+1],y=s[o+2],w=s[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=y,e[t+3]=w;return}if(d!==w||l!==f||h!==m||u!==y){let x=1-a;const v=l*f+h*m+u*y+d*w,D=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const g=Math.sqrt(T),F=Math.atan2(g,v*D);x=Math.sin(x*F)/g,a=Math.sin(a*F)/g}const C=a*D;if(l=l*x+f*C,h=h*x+m*C,u=u*x+y*C,d=d*x+w*C,x===1-a){const g=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=g,h*=g,u*=g,d*=g}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],h=i[n+2],u=i[n+3],d=s[o],f=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+u*d+l*m-h*f,e[t+1]=l*y+u*f+h*d-a*m,e[t+2]=h*y+u*m+a*f-l*d,e[t+3]=u*y-a*d-l*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(n/2),d=a(s/2),f=l(i/2),m=l(n/2),y=l(s/2);switch(o){case"XYZ":this._x=f*u*d+h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d-f*m*y;break;case"YXZ":this._x=f*u*d+h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d+f*m*y;break;case"ZXY":this._x=f*u*d-h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d-f*m*y;break;case"ZYX":this._x=f*u*d-h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d+f*m*y;break;case"YZX":this._x=f*u*d+h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d-f*m*y;break;case"XZY":this._x=f*u*d-h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-h)*m,this._z=(o-n)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(s+h)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-h)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-n)/m,this._x=(s+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mi(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=i*u+o*a+n*h-s*l,this._y=n*u+o*l+s*a-i*h,this._z=s*u+o*h+i*l-n*a,this._w=o*u-i*a-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),d=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=n*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class Mp{constructor(e=0,t=0,i=0){Mp.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*n-a*i),u=2*(a*t-s*n),d=2*(s*i-o*t);return this.x=t+l*h+o*d-a*u,this.y=i+l*u+a*h-s*d,this.z=n+l*d+s*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const oc=new M,td=new ta;let ia=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),wa.subVectors(this.max,wo),cr.subVectors(e.a,wo),hr.subVectors(e.b,wo),ur.subVectors(e.c,wo),ns.subVectors(hr,cr),ss.subVectors(ur,hr),Ls.subVectors(cr,ur);let t=[0,-ns.z,ns.y,0,-ss.z,ss.y,0,-Ls.z,Ls.y,ns.z,0,-ns.x,ss.z,0,-ss.x,Ls.z,0,-Ls.x,-ns.y,ns.x,0,-ss.y,ss.x,0,-Ls.y,Ls.x,0];return!ac(t,cr,hr,ur,wa)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,cr,hr,ur,wa))?!1:(ba.crossVectors(ns,ss),t=[ba.x,ba.y,ba.z],ac(t,cr,hr,ur,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const Bn=[new M,new M,new M,new M,new M,new M,new M,new M],cn=new M,Sa=new ia,cr=new M,hr=new M,ur=new M,ns=new M,ss=new M,Ls=new M,wo=new M,wa=new M,ba=new M,Ps=new M;function ac(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Ps.fromArray(r,s);const a=n.x*Math.abs(Ps.x)+n.y*Math.abs(Ps.y)+n.z*Math.abs(Ps.z),l=e.dot(Ps),h=t.dot(Ps),u=i.dot(Ps);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const Hg=new ia,bo=new M,lc=new M;let lu=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hg.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(bo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(lc)),this.expandByPoint(bo.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const zn=new M,cc=new M,Ta=new M,rs=new M,hc=new M,Ea=new M,uc=new M;let Vg=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){cc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(cc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ta),a=rs.dot(this.direction),l=-rs.dot(Ta),h=rs.lengthSq(),u=Math.abs(1-o*o);let d,f,m,y;if(u>0)if(d=o*l-a,f=o*a-l,y=s*u,d>=0)if(f>=-y)if(f<=y){const w=1/u;d*=w,f*=w,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+h}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+h;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+h;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+h):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+h):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+h);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(cc).addScaledVector(Ta,f),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),n=zn.dot(zn)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,n=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,n=(e.min.x-f.x)*h),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,n,s){hc.subVectors(t,e),Ea.subVectors(i,e),uc.crossVectors(hc,Ea);let o=this.direction.dot(uc),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Ea.crossVectors(rs,Ea));if(l<0)return null;const h=a*this.direction.dot(hc.cross(rs));if(h<0||l+h>o)return null;const u=-a*rs.dot(uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class kh{constructor(e,t,i,n,s,o,a,l,h,u,d,f,m,y,w,x){kh.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,h,u,d,f,m,y,w,x)}set(e,t,i,n,s,o,a,l,h,u,d,f,m,y,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=h,v[6]=u,v[10]=d,v[14]=f,v[3]=m,v[7]=y,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kh().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,y=a*u,w=a*d;t[0]=l*u,t[4]=-l*d,t[8]=h,t[1]=m+y*h,t[5]=f-w*h,t[9]=-a*l,t[2]=w-f*h,t[6]=y+m*h,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,y=h*u,w=h*d;t[0]=f+w*a,t[4]=y*a-m,t[8]=o*h,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-y,t[6]=w+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,y=h*u,w=h*d;t[0]=f-w*a,t[4]=-o*d,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*u,t[9]=w-f*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,y=a*u,w=a*d;t[0]=l*u,t[4]=y*h-m,t[8]=f*h+w,t[1]=l*d,t[5]=w*h+f,t[9]=m*h-y,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*h,y=a*l,w=a*h;t[0]=l*u,t[4]=w-f*d,t[8]=y*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=m*d+y,t[10]=f-w*d}else if(e.order==="XZY"){const f=o*l,m=o*h,y=a*l,w=a*h;t[0]=l*u,t[4]=-d,t[8]=h*u,t[1]=f*d+w,t[5]=o*u,t[9]=m*d-y,t[2]=y*d-m,t[6]=a*u,t[10]=w*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gg,e,Wg)}lookAt(e,t,i){const n=this.elements;return zi.subVectors(e,t),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),os.crossVectors(i,zi),os.lengthSq()===0&&(Math.abs(i.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),os.crossVectors(i,zi)),os.normalize(),Aa.crossVectors(zi,os),n[0]=os.x,n[4]=Aa.x,n[8]=zi.x,n[1]=os.y,n[5]=Aa.y,n[9]=zi.y,n[2]=os.z,n[6]=Aa.z,n[10]=zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],d=i[5],f=i[9],m=i[13],y=i[2],w=i[6],x=i[10],v=i[14],D=i[3],T=i[7],C=i[11],g=i[15],F=n[0],U=n[4],q=n[8],N=n[12],L=n[1],V=n[5],X=n[9],O=n[13],j=n[2],z=n[6],$=n[10],ie=n[14],Q=n[3],me=n[7],Re=n[11],Ae=n[15];return s[0]=o*F+a*L+l*j+h*Q,s[4]=o*U+a*V+l*z+h*me,s[8]=o*q+a*X+l*$+h*Re,s[12]=o*N+a*O+l*ie+h*Ae,s[1]=u*F+d*L+f*j+m*Q,s[5]=u*U+d*V+f*z+m*me,s[9]=u*q+d*X+f*$+m*Re,s[13]=u*N+d*O+f*ie+m*Ae,s[2]=y*F+w*L+x*j+v*Q,s[6]=y*U+w*V+x*z+v*me,s[10]=y*q+w*X+x*$+v*Re,s[14]=y*N+w*O+x*ie+v*Ae,s[3]=D*F+T*L+C*j+g*Q,s[7]=D*U+T*V+C*z+g*me,s[11]=D*q+T*X+C*$+g*Re,s[15]=D*N+T*O+C*ie+g*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],d=e[6],f=e[10],m=e[14],y=e[3],w=e[7],x=e[11],v=e[15];return y*(+s*l*d-n*h*d-s*a*f+i*h*f+n*a*m-i*l*m)+w*(+t*l*m-t*h*f+s*o*f-n*o*m+n*h*u-s*l*u)+x*(+t*h*d-t*a*m-s*o*d+i*o*m+s*a*u-i*h*u)+v*(-n*a*u-t*l*d+t*a*f+n*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=e[9],f=e[10],m=e[11],y=e[12],w=e[13],x=e[14],v=e[15],D=d*x*h-w*f*h+w*l*m-a*x*m-d*l*v+a*f*v,T=y*f*h-u*x*h-y*l*m+o*x*m+u*l*v-o*f*v,C=u*w*h-y*d*h+y*a*m-o*w*m-u*a*v+o*d*v,g=y*d*l-u*w*l-y*a*f+o*w*f+u*a*x-o*d*x,F=t*D+i*T+n*C+s*g;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(w*f*s-d*x*s-w*n*m+i*x*m+d*n*v-i*f*v)*U,e[2]=(a*x*s-w*l*s+w*n*h-i*x*h-a*n*v+i*l*v)*U,e[3]=(d*l*s-a*f*s-d*n*h+i*f*h+a*n*m-i*l*m)*U,e[4]=T*U,e[5]=(u*x*s-y*f*s+y*n*m-t*x*m-u*n*v+t*f*v)*U,e[6]=(y*l*s-o*x*s-y*n*h+t*x*h+o*n*v-t*l*v)*U,e[7]=(o*f*s-u*l*s+u*n*h-t*f*h-o*n*m+t*l*m)*U,e[8]=C*U,e[9]=(y*d*s-u*w*s-y*i*m+t*w*m+u*i*v-t*d*v)*U,e[10]=(o*w*s-y*a*s+y*i*h-t*w*h-o*i*v+t*a*v)*U,e[11]=(u*a*s-o*d*s-u*i*h+t*d*h+o*i*m-t*a*m)*U,e[12]=g*U,e[13]=(u*w*n-y*d*n+y*i*f-t*w*f-u*i*x+t*d*x)*U,e[14]=(y*a*n-o*w*n-y*i*l+t*w*l+o*i*x-t*a*x)*U,e[15]=(o*d*n-u*a*n+u*i*l-t*d*l-o*i*f+t*a*f)*U,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,h=s*o,u=s*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,u*a+i,u*l-n*o,0,h*l-n*a,u*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,h=s+s,u=o+o,d=a+a,f=s*h,m=s*u,y=s*d,w=o*u,x=o*d,v=a*d,D=l*h,T=l*u,C=l*d,g=i.x,F=i.y,U=i.z;return n[0]=(1-(w+v))*g,n[1]=(m+C)*g,n[2]=(y-T)*g,n[3]=0,n[4]=(m-C)*F,n[5]=(1-(f+v))*F,n[6]=(x+D)*F,n[7]=0,n[8]=(y+T)*U,n[9]=(x-D)*U,n[10]=(1-(f+w))*U,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=dr.set(n[0],n[1],n[2]).length();const o=dr.set(n[4],n[5],n[6]).length(),a=dr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],hn.copy(this);const h=1/s,u=1/o,d=1/a;return hn.elements[0]*=h,hn.elements[1]*=h,hn.elements[2]*=h,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Zn){const l=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let m,y;if(a===Zn)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ll)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Zn){const l=this.elements,h=1/(t-e),u=1/(i-n),d=1/(o-s),f=(t+e)*h,m=(i+n)*u;let y,w;if(a===Zn)y=(o+s)*d,w=-2*d;else if(a===Ll)y=s*d,w=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=w,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const dr=new M,hn=new oi,Gg=new M(0,0,0),Wg=new M(1,1,1),os=new M,Aa=new M,zi=new M,id=new oi,nd=new ta;let Ms=class Sp{constructor(e=0,t=0,i=0,n=Sp.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],h=n[5],u=n[9],d=n[2],f=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Mi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mi(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mi(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Mi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER="XYZ";let wp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xg=0;const sd=new M,fr=new ta,kn=new oi,Ra=new M,To=new M,qg=new M,jg=new ta,rd=new M(1,0,0),od=new M(0,1,0),ad=new M(0,0,1),ld={type:"added"},$g={type:"removed"},pr={type:"childadded",child:null},dc={type:"childremoved",child:null};let tn=class bl extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bl.DEFAULT_UP.clone();const e=new M,t=new Ms,i=new ta,n=new M(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new oi},normalMatrix:{value:new gt}}),this.matrix=new oi,this.matrixWorld=new oi,this.matrixAutoUpdate=bl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ra.copy(e):Ra.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(To,Ra,this.up):kn.lookAt(Ra,To,this.up),this.quaternion.setFromRotationMatrix(kn),n&&(kn.extractRotation(n.matrixWorld),fr.setFromRotationMatrix(kn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=n,i;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}};tn.DEFAULT_UP=new M(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new M,Hn=new M,fc=new M,Vn=new M,mr=new M,gr=new M,cd=new M,pc=new M,mc=new M,gc=new M;let Ca=class kr{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),un.subVectors(e,t),n.cross(un);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){un.subVectors(n,t),Hn.subVectors(i,t),fc.subVectors(e,t);const o=un.dot(un),a=un.dot(Hn),l=un.dot(fc),h=Hn.dot(Hn),u=Hn.dot(fc),d=o*h-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(h*l-a*u)*f,y=(o*u-a*l)*f;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(e,t,i,n){return un.subVectors(i,t),Hn.subVectors(e,t),un.cross(Hn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),un.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return kr.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;mr.subVectors(n,i),gr.subVectors(s,i),pc.subVectors(e,i);const l=mr.dot(pc),h=gr.dot(pc);if(l<=0&&h<=0)return t.copy(i);mc.subVectors(e,n);const u=mr.dot(mc),d=gr.dot(mc);if(u>=0&&d<=u)return t.copy(n);const f=l*d-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(mr,o);gc.subVectors(e,s);const m=mr.dot(gc),y=gr.dot(gc);if(y>=0&&m<=y)return t.copy(s);const w=m*h-l*y;if(w<=0&&h>=0&&y<=0)return a=h/(h-y),t.copy(i).addScaledVector(gr,a);const x=u*y-m*d;if(x<=0&&d-u>=0&&m-y>=0)return cd.subVectors(s,n),a=(d-u)/(d-u+(m-y)),t.copy(n).addScaledVector(cd,a);const v=1/(x+w+f);return o=w*v,a=f*v,t.copy(i).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},La={h:0,s:0,l:0};function xc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Nt.workingColorSpace){if(e=Ig(e,1),t=Mi(t,0,1),i=Mi(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xc(o,s,e+1/3),this.g=xc(o,s,e),this.b=xc(o,s,e-1/3)}return Nt.toWorkingColorSpace(this,n),this}setStyle(e,t=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=bp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=sc(e.r),this.g=sc(e.g),this.b=sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Nt.fromWorkingColorSpace(_i.copy(this),e),Math.round(Mi(_i.r*255,0,255))*65536+Math.round(Mi(_i.g*255,0,255))*256+Math.round(Mi(_i.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(_i.copy(this),t);const i=_i.r,n=_i.g,s=_i.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=Tn){Nt.fromWorkingColorSpace(_i.copy(this),e);const t=_i.r,i=_i.g,n=_i.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(La);const i=ic(as.h,La.h,t),n=ic(as.s,La.s,t),s=ic(as.l,La.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const _i=new Ct;Ct.NAMES=bp;let Yg=0,na=class extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Wr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=lh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}},sa=class extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const ei=new M,Pa=new Qe;let Cn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ku,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix3(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=So(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=So(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=So(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=So(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=So(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pi(t,this.array),i=Pi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Pi(t,this.array),i=Pi(i,this.array),n=Pi(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Pi(t,this.array),i=Pi(i,this.array),n=Pi(n,this.array),s=Pi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}},Tp=class extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Ep=class extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ln=class extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Kg=0;const Yi=new oi,_c=new tn,xr=new M,ki=new ia,Eo=new ia,ui=new M;let ro=class Ap extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Ep:Tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yi.makeRotationFromQuaternion(e),this.applyMatrix4(Yi),this}rotateX(e){return Yi.makeRotationX(e),this.applyMatrix4(Yi),this}rotateY(e){return Yi.makeRotationY(e),this.applyMatrix4(Yi),this}rotateZ(e){return Yi.makeRotationZ(e),this.applyMatrix4(Yi),this}translate(e,t,i){return Yi.makeTranslation(e,t,i),this.applyMatrix4(Yi),this}scale(e,t,i){return Yi.makeScale(e,t,i),this.applyMatrix4(Yi),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ki.setFromBufferAttribute(s),this.morphTargetsRelative?(ui.addVectors(this.boundingBox.min,ki.min),this.boundingBox.expandByPoint(ui),ui.addVectors(this.boundingBox.max,ki.max),this.boundingBox.expandByPoint(ui)):(this.boundingBox.expandByPoint(ki.min),this.boundingBox.expandByPoint(ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const i=this.boundingSphere.center;if(ki.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(ui.addVectors(ki.min,Eo.min),ki.expandByPoint(ui),ui.addVectors(ki.max,Eo.max),ki.expandByPoint(ui)):(ki.expandByPoint(Eo.min),ki.expandByPoint(Eo.max))}ki.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)ui.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ui));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)ui.fromBufferAttribute(a,h),l&&(xr.fromBufferAttribute(e,h),ui.add(xr)),n=Math.max(n,i.distanceToSquared(ui))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let q=0;q<i.count;q++)a[q]=new M,l[q]=new M;const h=new M,u=new M,d=new M,f=new Qe,m=new Qe,y=new Qe,w=new M,x=new M;function v(q,N,L){h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,q),m.fromBufferAttribute(s,N),y.fromBufferAttribute(s,L),u.sub(h),d.sub(h),m.sub(f),y.sub(f);const V=1/(m.x*y.y-y.x*m.y);isFinite(V)&&(w.copy(u).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(V),x.copy(d).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(V),a[q].add(w),a[N].add(w),a[L].add(w),l[q].add(x),l[N].add(x),l[L].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,N=D.length;q<N;++q){const L=D[q],V=L.start,X=L.count;for(let O=V,j=V+X;O<j;O+=3)v(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new M,C=new M,g=new M,F=new M;function U(q){g.fromBufferAttribute(n,q),F.copy(g);const N=a[q];T.copy(N),T.sub(g.multiplyScalar(g.dot(N))).normalize(),C.crossVectors(F,N);const V=C.dot(l[q])<0?-1:1;o.setXYZW(q,T.x,T.y,T.z,V)}for(let q=0,N=D.length;q<N;++q){const L=D[q],V=L.start,X=L.count;for(let O=V,j=V+X;O<j;O+=3)U(e.getX(O+0)),U(e.getX(O+1)),U(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const n=new M,s=new M,o=new M,a=new M,l=new M,h=new M,u=new M,d=new M;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),w=e.getX(f+1),x=e.getX(f+2);n.fromBufferAttribute(t,y),s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,x),u.subVectors(o,s),d.subVectors(n,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),a.add(u),l.add(u),h.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let f=0,m=t.count;f<m;f+=3)n.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(n,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ui.fromBufferAttribute(e,t),ui.normalize(),e.setXYZ(t,ui.x,ui.y,ui.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,d=a.normalized,f=new h.constructor(l.length*u);let m=0,y=0;for(let w=0,x=l.length;w<x;w++){a.isInterleavedBufferAttribute?m=l[w]*a.data.stride+a.offset:m=l[w]*u;for(let v=0;v<u;v++)f[y++]=h[m++]}return new Cn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ap,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],h=e(l,i);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let u=0,d=h.length;u<d;u++){const f=h[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let d=0,f=h.length;d<f;d++){const m=h[d];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const u=n[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],d=s[h];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const hd=new oi,Is=new Vg,Ia=new lu,ud=new M,_r=new M,yr=new M,vr=new M,yc=new M,Da=new M,Na=new Qe,Ua=new Qe,Fa=new Qe,dd=new M,fd=new M,pd=new M,Oa=new M,Ba=new M;let Xi=class extends tn{constructor(e=new ro,t=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=a[l],d=s[l];u!==0&&(yc.fromBufferAttribute(d,e),o?Da.addScaledVector(yc,u):Da.addScaledVector(yc.sub(t),u))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Is.copy(e.ray).recast(e.near),!(Ia.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ia,ud)===null||Is.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(hd.copy(s).invert(),Is.copy(e.ray).applyMatrix4(hd),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=f.length;y<w;y++){const x=f[y],v=o[x.materialIndex],D=Math.max(x.start,m.start),T=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let C=D,g=T;C<g;C+=3){const F=a.getX(C),U=a.getX(C+1),q=a.getX(C+2);n=za(this,v,e,i,h,u,d,F,U,q),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const y=Math.max(0,m.start),w=Math.min(a.count,m.start+m.count);for(let x=y,v=w;x<v;x+=3){const D=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);n=za(this,o,e,i,h,u,d,D,T,C),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=f.length;y<w;y++){const x=f[y],v=o[x.materialIndex],D=Math.max(x.start,m.start),T=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let C=D,g=T;C<g;C+=3){const F=C,U=C+1,q=C+2;n=za(this,v,e,i,h,u,d,F,U,q),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const y=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let x=y,v=w;x<v;x+=3){const D=x,T=x+1,C=x+2;n=za(this,o,e,i,h,u,d,D,T,C),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}}};function Jg(r,e,t,i,n,s,o,a){let l;if(e.side===Ii?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===vs,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ba);return h<t.near||h>t.far?null:{distance:h,point:Ba.clone(),object:r}}function za(r,e,t,i,n,s,o,a,l,h){r.getVertexPosition(a,_r),r.getVertexPosition(l,yr),r.getVertexPosition(h,vr);const u=Jg(r,e,t,i,_r,yr,vr,Oa);if(u){n&&(Na.fromBufferAttribute(n,a),Ua.fromBufferAttribute(n,l),Fa.fromBufferAttribute(n,h),u.uv=Ca.getInterpolation(Oa,_r,yr,vr,Na,Ua,Fa,new Qe)),s&&(Na.fromBufferAttribute(s,a),Ua.fromBufferAttribute(s,l),Fa.fromBufferAttribute(s,h),u.uv1=Ca.getInterpolation(Oa,_r,yr,vr,Na,Ua,Fa,new Qe)),o&&(dd.fromBufferAttribute(o,a),fd.fromBufferAttribute(o,l),pd.fromBufferAttribute(o,h),u.normal=Ca.getInterpolation(Oa,_r,yr,vr,dd,fd,pd,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new M,materialIndex:0};Ca.getNormal(_r,yr,vr,d.normal),u.face=d}return u}class Qs extends ro{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],u=[],d=[];let f=0,m=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,n,o,2),y("x","z","y",1,-1,e,i,-t,n,o,3),y("x","y","z",1,-1,e,t,i,n,s,4),y("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ln(h,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(d,2));function y(w,x,v,D,T,C,g,F,U,q,N){const L=C/U,V=g/q,X=C/2,O=g/2,j=F/2,z=U+1,$=q+1;let ie=0,Q=0;const me=new M;for(let Re=0;Re<$;Re++){const Ae=Re*V-O;for(let ht=0;ht<z;ht++){const yt=ht*L-X;me[w]=yt*D,me[x]=Ae*T,me[v]=j,h.push(me.x,me.y,me.z),me[w]=0,me[x]=0,me[v]=F>0?1:-1,u.push(me.x,me.y,me.z),d.push(ht/U),d.push(1-Re/q),ie+=1}}for(let Re=0;Re<q;Re++)for(let Ae=0;Ae<U;Ae++){const ht=f+Ae+z*Re,yt=f+Ae+z*(Re+1),he=f+(Ae+1)+z*(Re+1),Se=f+(Ae+1)+z*Re;l.push(ht,yt,Se),l.push(yt,he,Se),Q+=6}a.addGroup(m,Q,N),m+=Q,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ai(r){const e={};for(let t=0;t<r.length;t++){const i=eo(r[t]);for(const n in i)e[n]=i[n]}return e}function Zg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const Qg={clone:eo,merge:Ai},e0=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,t0=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ss extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=Zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Cp=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oi,this.projectionMatrix=new oi,this.projectionMatrixInverse=new oi,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const ls=new M,md=new Qe,gd=new Qe;let Zi=class extends Cp{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,md,gd),t.subVectors(gd,md)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Mr=-90,Sr=1;class i0 extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Zi(Mr,Sr,e,t);n.layers=this.layers,this.add(n);const s=new Zi(Mr,Sr,e,t);s.layers=this.layers,this.add(s);const o=new Zi(Mr,Sr,e,t);o.layers=this.layers,this.add(o);const a=new Zi(Mr,Sr,e,t);a.layers=this.layers,this.add(a);const l=new Zi(Mr,Sr,e,t);l.layers=this.layers,this.add(l);const h=new Zi(Mr,Sr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(const h of t)this.remove(h);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Lp extends Pn{constructor(e,t,i,n,s,o,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Kr,super(e,t,i,n,s,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n0 extends Js{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Lp(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Qs(5,5,5),s=new Ss({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ii,blending:_s});s.uniforms.tEquirect.value=t;const o=new Xi(n,s),a=t.minFilter;return t.minFilter===js&&(t.minFilter=mn),new i0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const vc=new M,s0=new M,r0=new gt;let Hs=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=vc.subVectors(i,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||r0.getNormalMatrix(e),n=this.coplanarPoint(vc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ds=new lu,ka=new M;let cu=class{constructor(e=new Hs,t=new Hs,i=new Hs,n=new Hs,s=new Hs,o=new Hs){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],y=n[9],w=n[10],x=n[11],v=n[12],D=n[13],T=n[14],C=n[15];if(i[0].setComponents(l-s,f-h,x-m,C-v).normalize(),i[1].setComponents(l+s,f+h,x+m,C+v).normalize(),i[2].setComponents(l+o,f+u,x+y,C+D).normalize(),i[3].setComponents(l-o,f-u,x-y,C-D).normalize(),i[4].setComponents(l-a,f-d,x-w,C-T).normalize(),t===Zn)i[5].setComponents(l+a,f+d,x+w,C+T).normalize();else if(t===Ll)i[5].setComponents(a,d,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(ka.x=n.normal.x>0?e.max.x:e.min.x,ka.y=n.normal.y>0?e.max.y:e.min.y,ka.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pp(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o0(r){const e=new WeakMap;function t(a,l){const h=a.array,u=a.usage,d=h.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,h,u),a.onUploadCallback();let m;if(h instanceof Float32Array)m=r.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=r.SHORT;else if(h instanceof Uint32Array)m=r.UNSIGNED_INT;else if(h instanceof Int32Array)m=r.INT;else if(h instanceof Int8Array)m=r.BYTE;else if(h instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){const u=l.array,d=l._updateRange,f=l.updateRanges;if(r.bindBuffer(h,a),d.count===-1&&f.length===0&&r.bufferSubData(h,0,u),f.length!==0){for(let m=0,y=f.length;m<y;m++){const w=f[m];r.bufferSubData(h,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(h,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:n,remove:s,update:o}}class ra extends ro{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),h=a+1,u=l+1,d=e/a,f=t/l,m=[],y=[],w=[],x=[];for(let v=0;v<u;v++){const D=v*f-o;for(let T=0;T<h;T++){const C=T*d-s;y.push(C,-D,0),w.push(0,0,1),x.push(T/a),x.push(1-v/l)}}for(let v=0;v<l;v++)for(let D=0;D<a;D++){const T=D+h*v,C=D+h*(v+1),g=D+1+h*(v+1),F=D+1+h*v;m.push(T,C,F),m.push(C,g,F)}this.setIndex(m),this.setAttribute("position",new Ln(y,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}const a0=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,l0=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,c0=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,h0=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,u0=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,d0=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,f0=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
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

#endif
`,p0=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,m0=`
#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`,g0=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,x0=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,_0=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,y0=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,v0=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,M0=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,S0=`
#if NUM_CLIPPING_PLANES > 0

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

#endif
`,w0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,b0=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,T0=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,E0=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,A0=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,R0=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,C0=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`,L0=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,P0=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,I0=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

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

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,D0=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,N0=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,U0=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,F0=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,O0=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,B0=`

// http://www.russellcottrell.com/photo/matrixCalculator.htm

// Linear sRGB => XYZ => Linear Display P3
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);

// Linear Display P3 => XYZ => Linear sRGB
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);

vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}

vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

// @deprecated, r156
vec4 LinearToLinear( in vec4 value ) {
	return value;
}

// @deprecated, r156
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}
`,z0=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,k0=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,H0=`
#ifdef USE_ENVMAP

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

#endif
`,V0=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,G0=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,W0=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,X0=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,q0=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,j0=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,$0=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,Y0=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,K0=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,J0=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,Z0=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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
`,Q0=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,ex=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,tx=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,ix=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,nx=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,sx=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

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

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

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

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

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

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,rx=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

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
		vec3 iridescenceF0;
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

// temporary
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

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

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

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

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

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

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

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

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

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,ox=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

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

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

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

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,ax=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,lx=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,cx=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,hx=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,ux=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,dx=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,fx=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,px=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,mx=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

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

#endif
`,gx=`
#if defined( USE_POINTS_UV )

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

#endif
`,xx=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,_x=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,yx=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,vx=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Mx=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,Sx=`
#ifdef USE_MORPHTARGETS

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

#endif
`,wx=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,bx=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

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

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

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

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,Tx=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Ex=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Ax=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Rx=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Cx=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,Lx=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,Px=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Ix=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,Dx=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Nx=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Ux=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,Fx=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Ox=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Bx=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,zx=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,kx=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Hx=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Vx=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

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

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`,Gx=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Wx=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

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

#endif


`,Xx=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

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

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,qx=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,jx=`
#ifdef USE_SKINNING

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

#endif
`,$x=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Yx=`
#ifdef USE_SKINNING

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

#endif
`,Kx=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Jx=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Zx=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,Qx=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
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

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
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

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

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

vec3 CustomToneMapping( vec3 color ) { return color; }
`,e_=`
#ifdef USE_TRANSMISSION

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
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,t_=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

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

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
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

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

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
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,i_=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,n_=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,s_=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,r_=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,o_=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,a_=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,l_=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,c_=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,h_=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,u_=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,d_=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
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

}
`,f_=`
#if DEPTH_PACKING == 3200

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

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,p_=`
#define DISTANCE

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

}
`,m_=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,g_=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,x_=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,__=`
uniform float scale;
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

}
`,y_=`
uniform vec3 diffuse;
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

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,v_=`
#include <common>
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

}
`,M_=`
uniform vec3 diffuse;
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

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
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

}
`,S_=`
#define LAMBERT

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

}
`,w_=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
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

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,b_=`
#define MATCAP

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

}
`,T_=`
#define MATCAP

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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,E_=`
#define NORMAL

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

}
`,A_=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
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

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,R_=`
#define PHONG

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

}
`,C_=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
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

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,L_=`
#define STANDARD

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
}
`,P_=`
#define STANDARD

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

#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

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

}
`,I_=`
#define TOON

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

}
`,D_=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
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

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,N_=`
uniform float size;
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

}
`,U_=`
uniform vec3 diffuse;
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

}
`,F_=`
#include <common>
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

}
`,O_=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
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

}
`,B_=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

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

}
`,z_=`
uniform vec3 diffuse;
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

}
`,mt={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:_0,bsdfs:y0,iridescence_fragment:v0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:T0,color_fragment:E0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:L0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:I0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:U0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:j0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:Y0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:J0,lights_pars_begin:Z0,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:ix,lights_phong_pars_fragment:nx,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:dx,map_fragment:fx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:_x,morphinstance_vertex:yx,morphcolor_vertex:vx,morphnormal_vertex:Mx,morphtarget_pars_vertex:Sx,morphtarget_vertex:wx,normal_fragment_begin:bx,normal_fragment_maps:Tx,normal_pars_fragment:Ex,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Lx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Dx,opaque_fragment:Nx,packing:Ux,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:Bx,dithering_pars_fragment:zx,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:qx,skinning_pars_vertex:jx,skinning_vertex:$x,skinnormal_vertex:Yx,specularmap_fragment:Kx,specularmap_pars_fragment:Jx,tonemapping_fragment:Zx,tonemapping_pars_fragment:Qx,transmission_fragment:e_,transmission_pars_fragment:t_,uv_pars_fragment:i_,uv_pars_vertex:n_,uv_vertex:s_,worldpos_vertex:r_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:h_,cube_frag:u_,depth_vert:d_,depth_frag:f_,distanceRGBA_vert:p_,distanceRGBA_frag:m_,equirect_vert:g_,equirect_frag:x_,linedashed_vert:__,linedashed_frag:y_,meshbasic_vert:v_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:w_,meshmatcap_vert:b_,meshmatcap_frag:T_,meshnormal_vert:E_,meshnormal_frag:A_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:L_,meshphysical_frag:P_,meshtoon_vert:I_,meshtoon_frag:D_,points_vert:N_,points_frag:U_,shadow_vert:F_,shadow_frag:O_,sprite_vert:B_,sprite_frag:z_},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},En={basic:{uniforms:Ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ai([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ai([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ai([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ai([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ai([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ai([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ai([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ai([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Ai([Pe.common,Pe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Ai([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};En.physical={uniforms:Ai([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ha={r:0,b:0,g:0},Ns=new Ms,k_=new oi;function H_(r,e,t,i,n,s,o){const a=new Ct(0);let l=s===!0?0:1,h,u,d=null,f=0,m=null;function y(D){let T=D.isScene===!0?D.background:null;return T&&T.isTexture&&(T=(D.backgroundBlurriness>0?t:e).get(T)),T}function w(D){let T=!1;const C=y(D);C===null?v(a,l):C&&C.isColor&&(v(C,1),T=!0);const g=r.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,o):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(D,T){const C=y(T);C&&(C.isCubeTexture||C.mapping===Ul)?(u===void 0&&(u=new Xi(new Qs(1,1,1),new Ss({name:"BackgroundCubeMaterial",uniforms:eo(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(g,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Ns.copy(T.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Ns)),u.material.toneMapped=Nt.getTransfer(C.colorSpace)!==Vt,(d!==C||f!==C.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,m=r.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Xi(new ra(2,2),new Ss({name:"BackgroundMaterial",uniforms:eo(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Nt.getTransfer(C.colorSpace)!==Vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,m=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function v(D,T){D.getRGB(Ha,Rp(r)),i.buffers.color.setClear(Ha.r,Ha.g,Ha.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(D,T=1){a.set(D),l=T,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,v(a,l)},render:w,addToRenderList:x}}function V_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null);let s=n,o=!1;function a(L,V,X,O,j){let z=!1;const $=d(O,X,V);s!==$&&(s=$,h(s.object)),z=m(L,O,X,j),z&&y(L,O,X,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,C(L,V,X,O),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return r.createVertexArray()}function h(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,V,X){const O=X.wireframe===!0;let j=i[L.id];j===void 0&&(j={},i[L.id]=j);let z=j[V.id];z===void 0&&(z={},j[V.id]=z);let $=z[O];return $===void 0&&($=f(l()),z[O]=$),$}function f(L){const V=[],X=[],O=[];for(let j=0;j<t;j++)V[j]=0,X[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:O,object:L,attributes:{},index:null}}function m(L,V,X,O){const j=s.attributes,z=V.attributes;let $=0;const ie=X.getAttributes();for(const Q in ie)if(ie[Q].location>=0){const Re=j[Q];let Ae=z[Q];if(Ae===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),Re===void 0||Re.attribute!==Ae||Ae&&Re.data!==Ae.data)return!0;$++}return s.attributesNum!==$||s.index!==O}function y(L,V,X,O){const j={},z=V.attributes;let $=0;const ie=X.getAttributes();for(const Q in ie)if(ie[Q].location>=0){let Re=z[Q];Re===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Re=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Re=L.instanceColor));const Ae={};Ae.attribute=Re,Re&&Re.data&&(Ae.data=Re.data),j[Q]=Ae,$++}s.attributes=j,s.attributesNum=$,s.index=O}function w(){const L=s.newAttributes;for(let V=0,X=L.length;V<X;V++)L[V]=0}function x(L){v(L,0)}function v(L,V){const X=s.newAttributes,O=s.enabledAttributes,j=s.attributeDivisors;X[L]=1,O[L]===0&&(r.enableVertexAttribArray(L),O[L]=1),j[L]!==V&&(r.vertexAttribDivisor(L,V),j[L]=V)}function D(){const L=s.newAttributes,V=s.enabledAttributes;for(let X=0,O=V.length;X<O;X++)V[X]!==L[X]&&(r.disableVertexAttribArray(X),V[X]=0)}function T(L,V,X,O,j,z,$){$===!0?r.vertexAttribIPointer(L,V,X,j,z):r.vertexAttribPointer(L,V,X,O,j,z)}function C(L,V,X,O){w();const j=O.attributes,z=X.getAttributes(),$=V.defaultAttributeValues;for(const ie in z){const Q=z[ie];if(Q.location>=0){let me=j[ie];if(me===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),me!==void 0){const Re=me.normalized,Ae=me.itemSize,ht=e.get(me);if(ht===void 0)continue;const yt=ht.buffer,he=ht.type,Se=ht.bytesPerElement,Fe=he===r.INT||he===r.UNSIGNED_INT||me.gpuType===tu;if(me.isInterleavedBufferAttribute){const He=me.data,ut=He.stride,ft=me.offset;if(He.isInstancedInterleavedBuffer){for(let tt=0;tt<Q.locationSize;tt++)v(Q.location+tt,He.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let tt=0;tt<Q.locationSize;tt++)x(Q.location+tt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let tt=0;tt<Q.locationSize;tt++)T(Q.location+tt,Ae/Q.locationSize,he,Re,ut*Se,(ft+Ae/Q.locationSize*tt)*Se,Fe)}else{if(me.isInstancedBufferAttribute){for(let He=0;He<Q.locationSize;He++)v(Q.location+He,me.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<Q.locationSize;He++)x(Q.location+He);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let He=0;He<Q.locationSize;He++)T(Q.location+He,Ae/Q.locationSize,he,Re,Ae*Se,Ae/Q.locationSize*He*Se,Fe)}}else if($!==void 0){const Re=$[ie];if(Re!==void 0)switch(Re.length){case 2:r.vertexAttrib2fv(Q.location,Re);break;case 3:r.vertexAttrib3fv(Q.location,Re);break;case 4:r.vertexAttrib4fv(Q.location,Re);break;default:r.vertexAttrib1fv(Q.location,Re)}}}}D()}function g(){q();for(const L in i){const V=i[L];for(const X in V){const O=V[X];for(const j in O)u(O[j].object),delete O[j];delete V[X]}delete i[L]}}function F(L){if(i[L.id]===void 0)return;const V=i[L.id];for(const X in V){const O=V[X];for(const j in O)u(O[j].object),delete O[j];delete V[X]}delete i[L.id]}function U(L){for(const V in i){const X=i[V];if(X[L.id]===void 0)continue;const O=X[L.id];for(const j in O)u(O[j].object),delete O[j];delete X[L.id]}}function q(){N(),o=!0,s!==n&&(s=n,h(s.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:q,resetDefaultState:N,dispose:g,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:x,disableUnusedAttributes:D}}function G_(r,e,t){let i;function n(h){i=h}function s(h,u){r.drawArrays(i,h,u),t.update(u,i,1)}function o(h,u,d){d!==0&&(r.drawArraysInstanced(i,h,u,d),t.update(u,i,d))}function a(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y];t.update(m,i,1)}function l(h,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<h.length;y++)o(h[y],u[y],f[y]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,d);let y=0;for(let w=0;w<d;w++)y+=u[w];for(let w=0;w<f.length;w++)t.update(y,i,f[w])}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W_(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(F){return!(F!==xn&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const U=F===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Qn&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Jn&&!U)}function l(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,g=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:w,maxAttributes:x,maxVertexUniforms:v,maxVaryings:D,maxFragmentUniforms:T,vertexTextures:C,maxSamples:g}}function X_(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Hs,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||n;return n=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const y=d.clippingPlanes,w=d.clipIntersection,x=d.clipShadows,v=r.get(d);if(!n||y===null||y.length===0||s&&!x)s?u(null):h();else{const D=s?0:i,T=D*4;let C=v.clippingState||null;l.value=C,C=u(y,f,T,m);for(let g=0;g!==T;++g)C[g]=t[g];v.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,y){const w=d!==null?d.length:0;let x=null;if(w!==0){if(x=l.value,y!==!0||x===null){const v=m+w*4,D=f.matrixWorldInverse;a.getNormalMatrix(D),(x===null||x.length<v)&&(x=new Float32Array(v));for(let T=0,C=m;T!==w;++T,C+=4)o.copy(d[T]).applyMatrix4(D,a),o.normal.toArray(x,C),x[C+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function q_(r){let e=new WeakMap;function t(o,a){return a===ch?o.mapping=Kr:a===hh&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ch||a===hh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new n0(l.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",n),t(h.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}let hu=class extends Cp{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};const Vr=4,xd=[.125,.215,.35,.446,.526,.582],Xs=20,Mc=new hu,_d=new Ct;let Sc=null,wc=0,bc=0,Tc=!1;const Vs=(1+Math.sqrt(5))/2,wr=1/Vs,yd=[new M(-Vs,wr,0),new M(Vs,wr,0),new M(-wr,0,Vs),new M(wr,0,Vs),new M(0,Vs,-wr),new M(0,Vs,wr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)];class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,wc,bc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Qo,format:xn,colorSpace:ws,depthBuffer:!1},n=Md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j_(s)),this._blurMaterial=$_(s,e,t)}return n}_compileMaterial(e){const t=new Xi(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,i,n){const a=new Zi(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_d),u.toneMapping=ys,u.autoClear=!1;const m=new sa({name:"PMREM.Background",side:Ii,depthWrite:!1,depthTest:!1}),y=new Xi(new Qs,m);let w=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,w=!0):(m.color.copy(_d),w=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(a.up.set(0,l[v],0),a.lookAt(h[v],0,0)):D===1?(a.up.set(0,0,l[v]),a.lookAt(0,h[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,h[v]));const T=this._cubeSize;Va(n,D*T,v>2?T:0,T,T),u.setRenderTarget(n),w&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Kr||e.mapping===Jr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new Xi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yd[(n-s-1)%yd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xi(this._lodPlanes[n],h),f=h.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xs-1),w=s/y,x=isFinite(s)?1+Math.floor(u*w):Xs;x>Xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xs}`);const v=[];let D=0;for(let U=0;U<Xs;++U){const q=U/w,N=Math.exp(-q*q/2);v.push(N),U===0?D+=N:U<x&&(D+=2*N)}for(let U=0;U<v.length;U++)v[U]=v[U]/D;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=y,f.mipInt.value=T-i;const C=this._sizeLods[n],g=3*C*(n>T-Vr?n-T+Vr:0),F=4*(this._cubeSize-C);Va(t,g,F,3*C,2*C),l.setRenderTarget(t),l.render(d,Mc)}}function j_(r){const e=[],t=[],i=[];let n=r;const s=r-Vr+1+xd.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-Vr?l=xd[o-r+Vr-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,y=6,w=3,x=2,v=1,D=new Float32Array(w*y*m),T=new Float32Array(x*y*m),C=new Float32Array(v*y*m);for(let F=0;F<m;F++){const U=F%3*2/3-1,q=F>2?0:-1,N=[U,q,0,U+2/3,q,0,U+2/3,q+1,0,U,q,0,U+2/3,q+1,0,U,q+1,0];D.set(N,w*y*F),T.set(f,x*y*F);const L=[F,F,F,F,F,F];C.set(L,v*y*F)}const g=new ro;g.setAttribute("position",new Cn(D,w)),g.setAttribute("uv",new Cn(T,x)),g.setAttribute("faceIndex",new Cn(C,v)),e.push(g),n>Vr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Md(r,e,t){const i=new Js(r,e,t);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Va(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function $_(r,e,t){const i=new Float32Array(Xs),n=new M(0,1,0);return new Ss({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Sd(){return new Ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function wd(){return new Ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y_(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===ch||l===hh,u=l===Kr||l===Jr;if(h||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new vd(r)),d=h?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return h&&m&&m.height>0||u&&m&&n(m)?(t===null&&(t=new vd(r)),d=h?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function n(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function K_(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&xp("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function J_(r,e,t,i){const n={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const w=f.morphAttributes[y];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}f.removeEventListener("dispose",o),delete n[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const y in m){const w=m[y];for(let x=0,v=w.length;x<v;x++)e.update(w[x],r.ARRAY_BUFFER)}}function h(d){const f=[],m=d.index,y=d.attributes.position;let w=0;if(m!==null){const D=m.array;w=m.version;for(let T=0,C=D.length;T<C;T+=3){const g=D[T+0],F=D[T+1],U=D[T+2];f.push(g,F,F,U,U,g)}}else if(y!==void 0){const D=y.array;w=y.version;for(let T=0,C=D.length/3-1;T<C;T+=3){const g=T+0,F=T+1,U=T+2;f.push(g,F,F,U,U,g)}}else return;const x=new(gp(f)?Ep:Tp)(f,1);x.version=w;const v=s.get(d);v&&e.remove(v),s.set(d,x)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&h(d)}else h(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Z_(r,e,t){let i;function n(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){r.drawElements(i,m,s,f*o),t.update(m,i,1)}function h(f,m,y){y!==0&&(r.drawElementsInstanced(i,m,s,f*o,y),t.update(m,i,y))}function u(f,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,y);let x=0;for(let v=0;v<y;v++)x+=m[v];t.update(x,i,1)}function d(f,m,y,w){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<f.length;v++)h(f[v]/o,m[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,w,0,y);let v=0;for(let D=0;D<y;D++)v+=m[D];for(let D=0;D<w.length;D++)t.update(v,i,w[D])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Q_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function ey(r,e,t){const i=new WeakMap,n=new pi;function s(o,a,l){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let L=function(){q.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var m=L;f!==void 0&&f.texture.dispose();const y=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],D=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let C=0;y===!0&&(C=1),w===!0&&(C=2),x===!0&&(C=3);let g=a.attributes.position.count*C,F=1;g>e.maxTextureSize&&(F=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const U=new Float32Array(g*F*4*d),q=new vp(U,g,F,d);q.type=Jn,q.needsUpdate=!0;const N=C*4;for(let V=0;V<d;V++){const X=v[V],O=D[V],j=T[V],z=g*F*4*V;for(let $=0;$<X.count;$++){const ie=$*N;y===!0&&(n.fromBufferAttribute(X,$),U[z+ie+0]=n.x,U[z+ie+1]=n.y,U[z+ie+2]=n.z,U[z+ie+3]=0),w===!0&&(n.fromBufferAttribute(O,$),U[z+ie+4]=n.x,U[z+ie+5]=n.y,U[z+ie+6]=n.z,U[z+ie+7]=0),x===!0&&(n.fromBufferAttribute(j,$),U[z+ie+8]=n.x,U[z+ie+9]=n.y,U[z+ie+10]=n.z,U[z+ie+11]=j.itemSize===4?n.w:1)}}f={count:d,texture:q,size:new Qe(g,F)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let y=0;for(let x=0;x<h.length;x++)y+=h[x];const w=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(r,"morphTargetBaseInfluence",w),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function ty(r,e,t,i){let n=new WeakMap;function s(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(n.get(d)!==h&&(e.update(d),n.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==h&&(f.update(),n.set(f,h))}return d}function o(){n=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class Ip extends Pn{constructor(e,t,i,n,s,o,a,l,h,u=Xr){if(u!==Xr&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xr&&(i=Ks),i===void 0&&u===Qr&&(i=Zr),super(null,n,s,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dp=new Pn,bd=new Ip(1,1),Np=new vp,Up=new kg,Fp=new Lp,Td=[],Ed=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function oo(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Td[n];if(s===void 0&&(s=new Float32Array(n),Td[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function li(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ci(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ol(r,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ny(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(li(t,e))return;r.uniform2fv(this.addr,e),ci(t,e)}}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(li(t,e))return;r.uniform3fv(this.addr,e),ci(t,e)}}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(li(t,e))return;r.uniform4fv(this.addr,e),ci(t,e)}}function oy(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(li(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ci(t,e)}else{if(li(t,i))return;Cd.set(i),r.uniformMatrix2fv(this.addr,!1,Cd),ci(t,i)}}function ay(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(li(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ci(t,e)}else{if(li(t,i))return;Rd.set(i),r.uniformMatrix3fv(this.addr,!1,Rd),ci(t,i)}}function ly(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(li(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ci(t,e)}else{if(li(t,i))return;Ad.set(i),r.uniformMatrix4fv(this.addr,!1,Ad),ci(t,i)}}function cy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(li(t,e))return;r.uniform2iv(this.addr,e),ci(t,e)}}function uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(li(t,e))return;r.uniform3iv(this.addr,e),ci(t,e)}}function dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(li(t,e))return;r.uniform4iv(this.addr,e),ci(t,e)}}function fy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(li(t,e))return;r.uniform2uiv(this.addr,e),ci(t,e)}}function my(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(li(t,e))return;r.uniform3uiv(this.addr,e),ci(t,e)}}function gy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(li(t,e))return;r.uniform4uiv(this.addr,e),ci(t,e)}}function xy(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(bd.compareFunction=fp,s=bd):s=Dp,t.setTexture2D(e||s,n)}function _y(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Up,n)}function yy(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Fp,n)}function vy(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Np,n)}function My(r){switch(r){case 5126:return iy;case 35664:return ny;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return vy}}function Sy(r,e){r.uniform1fv(this.addr,e)}function wy(r,e){const t=oo(e,this.size,2);r.uniform2fv(this.addr,t)}function by(r,e){const t=oo(e,this.size,3);r.uniform3fv(this.addr,t)}function Ty(r,e){const t=oo(e,this.size,4);r.uniform4fv(this.addr,t)}function Ey(r,e){const t=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ay(r,e){const t=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ry(r,e){const t=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cy(r,e){r.uniform1iv(this.addr,e)}function Ly(r,e){r.uniform2iv(this.addr,e)}function Py(r,e){r.uniform3iv(this.addr,e)}function Iy(r,e){r.uniform4iv(this.addr,e)}function Dy(r,e){r.uniform1uiv(this.addr,e)}function Ny(r,e){r.uniform2uiv(this.addr,e)}function Uy(r,e){r.uniform3uiv(this.addr,e)}function Fy(r,e){r.uniform4uiv(this.addr,e)}function Oy(r,e,t){const i=this.cache,n=e.length,s=Ol(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Dp,s[o])}function By(r,e,t){const i=this.cache,n=e.length,s=Ol(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Up,s[o])}function zy(r,e,t){const i=this.cache,n=e.length,s=Ol(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Fp,s[o])}function ky(r,e,t){const i=this.cache,n=e.length,s=Ol(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Np,s[o])}function Hy(r){switch(r){case 5126:return Sy;case 35664:return wy;case 35665:return by;case 35666:return Ty;case 35674:return Ey;case 35675:return Ay;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Ly;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Ny;case 36295:return Uy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}class Vy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=My(t.type)}}class Gy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hy(t.type)}}class Wy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Ld(r,e){r.seq.push(e),r.map[e.id]=e}function Xy(r,e,t){const i=r.name,n=i.length;for(Ec.lastIndex=0;;){const s=Ec.exec(i),o=Ec.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){Ld(t,h===void 0?new Vy(a,r,e):new Gy(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Wy(a),Ld(t,d)),t=d}}}class Tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Xy(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Pd(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const qy=37297;let jy=0;function $y(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Yy(r){const e=Nt.getPrimaries(Nt.workingColorSpace),t=Nt.getPrimaries(r);let i;switch(e===t?i="":e===Cl&&t===Rl?i="LinearDisplayP3ToLinearSRGB":e===Rl&&t===Cl&&(i="LinearSRGBToLinearDisplayP3"),r){case ws:case Fl:return[i,"LinearTransferOETF"];case Tn:case au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Id(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+$y(r.getShaderSource(e),o)}else return n}function Ky(r,e){const t=Yy(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jy(r,e){let t;switch(e){case pg:t="Linear";break;case mg:t="Reinhard";break;case gg:t="OptimizedCineon";break;case xg:t="ACESFilmic";break;case yg:t="AgX";break;case vg:t="Neutral";break;case _g:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function Qy(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ev(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Fo(r){return r!==""}function Dd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(r){return r.replace(tv,nv)}const iv=new Map;function nv(r,e){let t=mt[e];if(t===void 0){const i=iv.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(r){return r.replace(sv,rv)}function rv(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Fd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ov(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===km?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function av(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Kr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function hv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function uv(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ov(t),h=av(t),u=lv(t),d=cv(t),f=hv(t),m=Zy(t),y=Qy(s),w=n.createProgram();let x,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Fo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(x=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?mt.tonemapping_pars_fragment:"",t.toneMapping!==ys?Jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Ky("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Hh(o),o=Dd(o,t),o=Nd(o,t),a=Hh(a),a=Dd(a,t),a=Nd(a,t),o=Ud(o),a=Ud(a),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=D+x+o,C=D+v+a,g=Pd(n,n.VERTEX_SHADER,T),F=Pd(n,n.FRAGMENT_SHADER,C);n.attachShader(w,g),n.attachShader(w,F),t.index0AttributeName!==void 0?n.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(w,0,"position"),n.linkProgram(w);function U(V){if(r.debug.checkShaderErrors){const X=n.getProgramInfoLog(w).trim(),O=n.getShaderInfoLog(g).trim(),j=n.getShaderInfoLog(F).trim();let z=!0,$=!0;if(n.getProgramParameter(w,n.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,w,g,F);else{const ie=Id(n,g,"vertex"),Q=Id(n,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(w,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+ie+`
`+Q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(O===""||j==="")&&($=!1);$&&(V.diagnostics={runnable:z,programLog:X,vertexShader:{log:O,prefix:x},fragmentShader:{log:j,prefix:v}})}n.deleteShader(g),n.deleteShader(F),q=new Tl(n,w),N=ev(n,w)}let q;this.getUniforms=function(){return q===void 0&&U(this),q};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(w,qy)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=g,this.fragmentShader=F,this}let dv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pv(e),t.set(e,i)),i}}class pv{constructor(e){this.id=dv++,this.code=e,this.usedTimes=0}}function mv(r,e,t,i,n,s,o){const a=new wp,l=new fv,h=new Set,u=[],d=n.logarithmicDepthBuffer,f=n.vertexTextures;let m=n.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return h.add(N),N===0?"uv":`uv${N}`}function x(N,L,V,X,O){const j=X.fog,z=O.geometry,$=N.isMeshStandardMaterial?X.environment:null,ie=(N.isMeshStandardMaterial?t:e).get(N.envMap||$),Q=ie&&ie.mapping===Ul?ie.image.height:null,me=y[N.type];N.precision!==null&&(m=n.getMaxPrecision(N.precision),m!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",m,"instead."));const Re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ae=Re!==void 0?Re.length:0;let ht=0;z.morphAttributes.position!==void 0&&(ht=1),z.morphAttributes.normal!==void 0&&(ht=2),z.morphAttributes.color!==void 0&&(ht=3);let yt,he,Se,Fe;if(me){const bt=En[me];yt=bt.vertexShader,he=bt.fragmentShader}else yt=N.vertexShader,he=N.fragmentShader,l.update(N),Se=l.getVertexShaderID(N),Fe=l.getFragmentShaderID(N);const He=r.getRenderTarget(),ut=O.isInstancedMesh===!0,ft=O.isBatchedMesh===!0,tt=!!N.map,Ut=!!N.matcap,G=!!ie,Oe=!!N.aoMap,lt=!!N.lightMap,Lt=!!N.bumpMap,qe=!!N.normalMap,Wt=!!N.displacementMap,st=!!N.emissiveMap,it=!!N.metalnessMap,B=!!N.roughnessMap,A=N.anisotropy>0,re=N.clearcoat>0,_e=N.dispersion>0,ve=N.iridescence>0,xe=N.sheen>0,je=N.transmission>0,Ce=A&&!!N.anisotropyMap,De=re&&!!N.clearcoatMap,ot=re&&!!N.clearcoatNormalMap,we=re&&!!N.clearcoatRoughnessMap,ze=ve&&!!N.iridescenceMap,xt=ve&&!!N.iridescenceThicknessMap,Ge=xe&&!!N.sheenColorMap,Le=xe&&!!N.sheenRoughnessMap,nt=!!N.specularMap,pt=!!N.specularColorMap,kt=!!N.specularIntensityMap,K=je&&!!N.transmissionMap,Me=je&&!!N.thicknessMap,ue=!!N.gradientMap,fe=!!N.alphaMap,Te=N.alphaTest>0,Ke=!!N.alphaHash,vt=!!N.extensions;let Yt=ys;N.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Yt=r.toneMapping);const ii={shaderID:me,shaderType:N.type,shaderName:N.name,vertexShader:yt,fragmentShader:he,defines:N.defines,customVertexShaderID:Se,customFragmentShaderID:Fe,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:m,batching:ft,batchingColor:ft&&O._colorsTexture!==null,instancing:ut,instancingColor:ut&&O.instanceColor!==null,instancingMorph:ut&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:He===null?r.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:ws,alphaToCoverage:!!N.alphaToCoverage,map:tt,matcap:Ut,envMap:G,envMapMode:G&&ie.mapping,envMapCubeUVHeight:Q,aoMap:Oe,lightMap:lt,bumpMap:Lt,normalMap:qe,displacementMap:f&&Wt,emissiveMap:st,normalMapObjectSpace:qe&&N.normalMapType===bg,normalMapTangentSpace:qe&&N.normalMapType===dp,metalnessMap:it,roughnessMap:B,anisotropy:A,anisotropyMap:Ce,clearcoat:re,clearcoatMap:De,clearcoatNormalMap:ot,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ve,iridescenceMap:ze,iridescenceThicknessMap:xt,sheen:xe,sheenColorMap:Ge,sheenRoughnessMap:Le,specularMap:nt,specularColorMap:pt,specularIntensityMap:kt,transmission:je,transmissionMap:K,thicknessMap:Me,gradientMap:ue,opaque:N.transparent===!1&&N.blending===Wr&&N.alphaToCoverage===!1,alphaMap:fe,alphaTest:Te,alphaHash:Ke,combine:N.combine,mapUv:tt&&w(N.map.channel),aoMapUv:Oe&&w(N.aoMap.channel),lightMapUv:lt&&w(N.lightMap.channel),bumpMapUv:Lt&&w(N.bumpMap.channel),normalMapUv:qe&&w(N.normalMap.channel),displacementMapUv:Wt&&w(N.displacementMap.channel),emissiveMapUv:st&&w(N.emissiveMap.channel),metalnessMapUv:it&&w(N.metalnessMap.channel),roughnessMapUv:B&&w(N.roughnessMap.channel),anisotropyMapUv:Ce&&w(N.anisotropyMap.channel),clearcoatMapUv:De&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:ot&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:Le&&w(N.sheenRoughnessMap.channel),specularMapUv:nt&&w(N.specularMap.channel),specularColorMapUv:pt&&w(N.specularColorMap.channel),specularIntensityMapUv:kt&&w(N.specularIntensityMap.channel),transmissionMapUv:K&&w(N.transmissionMap.channel),thicknessMapUv:Me&&w(N.thicknessMap.channel),alphaMapUv:fe&&w(N.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(qe||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(tt||fe),fog:!!j,useFog:N.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ht,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Yt,decodeVideoTexture:tt&&N.map.isVideoTexture===!0&&Nt.getTransfer(N.map.colorSpace)===Vt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===An,flipSided:N.side===Ii,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:vt&&N.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&N.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return ii.vertexUv1s=h.has(1),ii.vertexUv2s=h.has(2),ii.vertexUv3s=h.has(3),h.clear(),ii}function v(N){const L=[];if(N.shaderID?L.push(N.shaderID):(L.push(N.customVertexShaderID),L.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)L.push(V),L.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(D(L,N),T(L,N),L.push(r.outputColorSpace)),L.push(N.customProgramCacheKey),L.join()}function D(N,L){N.push(L.precision),N.push(L.outputColorSpace),N.push(L.envMapMode),N.push(L.envMapCubeUVHeight),N.push(L.mapUv),N.push(L.alphaMapUv),N.push(L.lightMapUv),N.push(L.aoMapUv),N.push(L.bumpMapUv),N.push(L.normalMapUv),N.push(L.displacementMapUv),N.push(L.emissiveMapUv),N.push(L.metalnessMapUv),N.push(L.roughnessMapUv),N.push(L.anisotropyMapUv),N.push(L.clearcoatMapUv),N.push(L.clearcoatNormalMapUv),N.push(L.clearcoatRoughnessMapUv),N.push(L.iridescenceMapUv),N.push(L.iridescenceThicknessMapUv),N.push(L.sheenColorMapUv),N.push(L.sheenRoughnessMapUv),N.push(L.specularMapUv),N.push(L.specularColorMapUv),N.push(L.specularIntensityMapUv),N.push(L.transmissionMapUv),N.push(L.thicknessMapUv),N.push(L.combine),N.push(L.fogExp2),N.push(L.sizeAttenuation),N.push(L.morphTargetsCount),N.push(L.morphAttributeCount),N.push(L.numDirLights),N.push(L.numPointLights),N.push(L.numSpotLights),N.push(L.numSpotLightMaps),N.push(L.numHemiLights),N.push(L.numRectAreaLights),N.push(L.numDirLightShadows),N.push(L.numPointLightShadows),N.push(L.numSpotLightShadows),N.push(L.numSpotLightShadowsWithMaps),N.push(L.numLightProbes),N.push(L.shadowMapType),N.push(L.toneMapping),N.push(L.numClippingPlanes),N.push(L.numClipIntersection),N.push(L.depthPacking)}function T(N,L){a.disableAll(),L.supportsVertexTextures&&a.enable(0),L.instancing&&a.enable(1),L.instancingColor&&a.enable(2),L.instancingMorph&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),L.dispersion&&a.enable(20),L.batchingColor&&a.enable(21),N.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.transmission&&a.enable(14),L.sheen&&a.enable(15),L.opaque&&a.enable(16),L.pointsUvs&&a.enable(17),L.decodeVideoTexture&&a.enable(18),L.alphaToCoverage&&a.enable(19),N.push(a.mask)}function C(N){const L=y[N.type];let V;if(L){const X=En[L];V=Qg.clone(X.uniforms)}else V=N.uniforms;return V}function g(N,L){let V;for(let X=0,O=u.length;X<O;X++){const j=u[X];if(j.cacheKey===L){V=j,++V.usedTimes;break}}return V===void 0&&(V=new uv(r,L,N,s),u.push(V)),V}function F(N){if(--N.usedTimes===0){const L=u.indexOf(N);u[L]=u[u.length-1],u.pop(),N.destroy()}}function U(N){l.remove(N)}function q(){l.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:C,acquireProgram:g,releaseProgram:F,releaseShaderCache:U,programs:u,dispose:q}}function gv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function xv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Od(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bd(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(d,f,m,y,w,x){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,groupOrder:y,renderOrder:d.renderOrder,z:w,group:x},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=w,v.group=x),e++,v}function a(d,f,m,y,w,x){const v=o(d,f,m,y,w,x);m.transmission>0?i.push(v):m.transparent===!0?n.push(v):t.push(v)}function l(d,f,m,y,w,x){const v=o(d,f,m,y,w,x);m.transmission>0?i.unshift(v):m.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||xv),i.length>1&&i.sort(f||Od),n.length>1&&n.sort(f||Od)}function u(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:u,sort:h}}function _v(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new Bd,r.set(i,[o])):n>=s.length?(o=new Bd,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function yv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ct};break;case"SpotLight":t={position:new M,direction:new M,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new M,halfWidth:new M,halfHeight:new M};break}return r[e.id]=t,t}}}function vv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Mv=0;function Sv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wv(r){const e=new yv,t=vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new M);const n=new M,s=new oi,o=new oi;function a(h){let u=0,d=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let m=0,y=0,w=0,x=0,v=0,D=0,T=0,C=0,g=0,F=0,U=0;h.sort(Sv);for(let N=0,L=h.length;N<L;N++){const V=h[N],X=V.color,O=V.intensity,j=V.distance,z=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)u+=X.r*O,d+=X.g*O,f+=X.b*O;else if(V.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(V.sh.coefficients[$],O);U++}else if(V.isDirectionalLight){const $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ie=V.shadow,Q=t.get(V);Q.shadowIntensity=ie.intensity,Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=V.shadow.matrix,D++}i.directional[m]=$,m++}else if(V.isSpotLight){const $=e.get(V);$.position.setFromMatrixPosition(V.matrixWorld),$.color.copy(X).multiplyScalar(O),$.distance=j,$.coneCos=Math.cos(V.angle),$.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),$.decay=V.decay,i.spot[w]=$;const ie=V.shadow;if(V.map&&(i.spotLightMap[g]=V.map,g++,ie.updateMatrices(V),V.castShadow&&F++),i.spotLightMatrix[w]=ie.matrix,V.castShadow){const Q=t.get(V);Q.shadowIntensity=ie.intensity,Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,i.spotShadow[w]=Q,i.spotShadowMap[w]=z,C++}w++}else if(V.isRectAreaLight){const $=e.get(V);$.color.copy(X).multiplyScalar(O),$.halfWidth.set(V.width*.5,0,0),$.halfHeight.set(0,V.height*.5,0),i.rectArea[x]=$,x++}else if(V.isPointLight){const $=e.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity),$.distance=V.distance,$.decay=V.decay,V.castShadow){const ie=V.shadow,Q=t.get(V);Q.shadowIntensity=ie.intensity,Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,Q.shadowCameraNear=ie.camera.near,Q.shadowCameraFar=ie.camera.far,i.pointShadow[y]=Q,i.pointShadowMap[y]=z,i.pointShadowMatrix[y]=V.shadow.matrix,T++}i.point[y]=$,y++}else if(V.isHemisphereLight){const $=e.get(V);$.skyColor.copy(V.color).multiplyScalar(O),$.groundColor.copy(V.groundColor).multiplyScalar(O),i.hemi[v]=$,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const q=i.hash;(q.directionalLength!==m||q.pointLength!==y||q.spotLength!==w||q.rectAreaLength!==x||q.hemiLength!==v||q.numDirectionalShadows!==D||q.numPointShadows!==T||q.numSpotShadows!==C||q.numSpotMaps!==g||q.numLightProbes!==U)&&(i.directional.length=m,i.spot.length=w,i.rectArea.length=x,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=C+g-F,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=U,q.directionalLength=m,q.pointLength=y,q.spotLength=w,q.rectAreaLength=x,q.hemiLength=v,q.numDirectionalShadows=D,q.numPointShadows=T,q.numSpotShadows=C,q.numSpotMaps=g,q.numLightProbes=U,i.version=Mv++)}function l(h,u){let d=0,f=0,m=0,y=0,w=0;const x=u.matrixWorldInverse;for(let v=0,D=h.length;v<D;v++){const T=h[v];if(T.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(x),d++}else if(T.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(x),m++}else if(T.isRectAreaLight){const C=i.rectArea[y];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(x),o.identity(),s.copy(T.matrixWorld),s.premultiply(x),o.extractRotation(s),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(T.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(x),f++}else if(T.isHemisphereLight){const C=i.hemi[w];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(x),w++}}}return{setup:a,setupView:l,state:i}}function zd(r){const e=new wv(r),t=[],i=[];function n(u){h.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bv(r){let e=new WeakMap;function t(n,s=0){const o=e.get(n);let a;return o===void 0?(a=new zd(r),e.set(n,[a])):s>=o.length?(a=new zd(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Tv extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Rv=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Cv(r,e,t){let i=new cu;const n=new Qe,s=new Qe,o=new pi,a=new Tv({depthPacking:wg}),l=new Ev,h={},u=t.maxTextureSize,d={[vs]:Ii,[Ii]:vs,[An]:An},f=new Ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const y=new ro;y.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Xi(y,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let v=this.type;this.render=function(F,U,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const N=r.getRenderTarget(),L=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),X=r.state;X.setBlending(_s),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const O=v!==Yn&&this.type===Yn,j=v===Yn&&this.type!==Yn;for(let z=0,$=F.length;z<$;z++){const ie=F[z],Q=ie.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;n.copy(Q.mapSize);const me=Q.getFrameExtents();if(n.multiply(me),s.copy(Q.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/me.x),n.x=s.x*me.x,Q.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/me.y),n.y=s.y*me.y,Q.mapSize.y=s.y)),Q.map===null||O===!0||j===!0){const Ae=this.type!==Yn?{minFilter:en,magFilter:en}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Js(n.x,n.y,Ae),Q.map.texture.name=ie.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const Re=Q.getViewportCount();for(let Ae=0;Ae<Re;Ae++){const ht=Q.getViewport(Ae);o.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),X.viewport(o),Q.updateMatrices(ie,Ae),i=Q.getFrustum(),C(U,q,Q.camera,ie,this.type)}Q.isPointLightShadow!==!0&&this.type===Yn&&D(Q,q),Q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(N,L,V)};function D(F,U){const q=e.update(w);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,m.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Js(n.x,n.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(U,null,q,f,w,null),m.uniforms.shadow_pass.value=F.mapPass.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(U,null,q,m,w,null)}function T(F,U,q,N){let L=null;const V=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)L=V;else if(L=q.isPointLight===!0?l:a,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const X=L.uuid,O=U.uuid;let j=h[X];j===void 0&&(j={},h[X]=j);let z=j[O];z===void 0&&(z=L.clone(),j[O]=z,U.addEventListener("dispose",g)),L=z}if(L.visible=U.visible,L.wireframe=U.wireframe,N===Yn?L.side=U.shadowSide!==null?U.shadowSide:U.side:L.side=U.shadowSide!==null?U.shadowSide:d[U.side],L.alphaMap=U.alphaMap,L.alphaTest=U.alphaTest,L.map=U.map,L.clipShadows=U.clipShadows,L.clippingPlanes=U.clippingPlanes,L.clipIntersection=U.clipIntersection,L.displacementMap=U.displacementMap,L.displacementScale=U.displacementScale,L.displacementBias=U.displacementBias,L.wireframeLinewidth=U.wireframeLinewidth,L.linewidth=U.linewidth,q.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const X=r.properties.get(L);X.light=q}return L}function C(F,U,q,N,L){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===Yn)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const O=e.update(F),j=F.material;if(Array.isArray(j)){const z=O.groups;for(let $=0,ie=z.length;$<ie;$++){const Q=z[$],me=j[Q.materialIndex];if(me&&me.visible){const Re=T(F,me,N,L);F.onBeforeShadow(r,F,U,q,O,Re,Q),r.renderBufferDirect(q,null,O,Re,F,Q),F.onAfterShadow(r,F,U,q,O,Re,Q)}}}else if(j.visible){const z=T(F,j,N,L);F.onBeforeShadow(r,F,U,q,O,z,null),r.renderBufferDirect(q,null,O,z,F,null),F.onAfterShadow(r,F,U,q,O,z,null)}}const X=F.children;for(let O=0,j=X.length;O<j;O++)C(X[O],U,q,N,L)}function g(F){F.target.removeEventListener("dispose",g);for(const q in h){const N=h[q],L=F.target.uuid;L in N&&(N[L].dispose(),delete N[L])}}}function Lv(r){function e(){let K=!1;const Me=new pi;let ue=null;const fe=new pi(0,0,0,0);return{setMask:function(Te){ue!==Te&&!K&&(r.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){K=Te},setClear:function(Te,Ke,vt,Yt,ii){ii===!0&&(Te*=Yt,Ke*=Yt,vt*=Yt),Me.set(Te,Ke,vt,Yt),fe.equals(Me)===!1&&(r.clearColor(Te,Ke,vt,Yt),fe.copy(Me))},reset:function(){K=!1,ue=null,fe.set(-1,0,0,0)}}}function t(){let K=!1,Me=null,ue=null,fe=null;return{setTest:function(Te){Te?Fe(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Te){Me!==Te&&!K&&(r.depthMask(Te),Me=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case rg:r.depthFunc(r.NEVER);break;case og:r.depthFunc(r.ALWAYS);break;case ag:r.depthFunc(r.LESS);break;case El:r.depthFunc(r.LEQUAL);break;case lg:r.depthFunc(r.EQUAL);break;case cg:r.depthFunc(r.GEQUAL);break;case hg:r.depthFunc(r.GREATER);break;case ug:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=Te}},setLocked:function(Te){K=Te},setClear:function(Te){fe!==Te&&(r.clearDepth(Te),fe=Te)},reset:function(){K=!1,Me=null,ue=null,fe=null}}}function i(){let K=!1,Me=null,ue=null,fe=null,Te=null,Ke=null,vt=null,Yt=null,ii=null;return{setTest:function(bt){K||(bt?Fe(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(bt){Me!==bt&&!K&&(r.stencilMask(bt),Me=bt)},setFunc:function(bt,sn,qi){(ue!==bt||fe!==sn||Te!==qi)&&(r.stencilFunc(bt,sn,qi),ue=bt,fe=sn,Te=qi)},setOp:function(bt,sn,qi){(Ke!==bt||vt!==sn||Yt!==qi)&&(r.stencilOp(bt,sn,qi),Ke=bt,vt=sn,Yt=qi)},setLocked:function(bt){K=bt},setClear:function(bt){ii!==bt&&(r.clearStencil(bt),ii=bt)},reset:function(){K=!1,Me=null,ue=null,fe=null,Te=null,Ke=null,vt=null,Yt=null,ii=null}}}const n=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,y=!1,w=null,x=null,v=null,D=null,T=null,C=null,g=null,F=new Ct(0,0,0),U=0,q=!1,N=null,L=null,V=null,X=null,O=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),z=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),z=$>=2);let Q=null,me={};const Re=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),ht=new pi().fromArray(Re),yt=new pi().fromArray(Ae);function he(K,Me,ue,fe){const Te=new Uint8Array(4),Ke=r.createTexture();r.bindTexture(K,Ke),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let vt=0;vt<ue;vt++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Me,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Me+vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return Ke}const Se={};Se[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Fe(r.DEPTH_TEST),s.setFunc(El),Lt(!1),qe(Xu),Fe(r.CULL_FACE),Oe(_s);function Fe(K){h[K]!==!0&&(r.enable(K),h[K]=!0)}function He(K){h[K]!==!1&&(r.disable(K),h[K]=!1)}function ut(K,Me){return u[K]!==Me?(r.bindFramebuffer(K,Me),u[K]=Me,K===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Me),K===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Me),!0):!1}function ft(K,Me){let ue=f,fe=!1;if(K){ue=d.get(Me),ue===void 0&&(ue=[],d.set(Me,ue));const Te=K.textures;if(ue.length!==Te.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Ke=0,vt=Te.length;Ke<vt;Ke++)ue[Ke]=r.COLOR_ATTACHMENT0+Ke;ue.length=Te.length,fe=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ue)}function tt(K){return m!==K?(r.useProgram(K),m=K,!0):!1}const Ut={[Ws]:r.FUNC_ADD,[Vm]:r.FUNC_SUBTRACT,[Gm]:r.FUNC_REVERSE_SUBTRACT};Ut[Wm]=r.MIN,Ut[Xm]=r.MAX;const G={[qm]:r.ZERO,[jm]:r.ONE,[$m]:r.SRC_COLOR,[ah]:r.SRC_ALPHA,[eg]:r.SRC_ALPHA_SATURATE,[Zm]:r.DST_COLOR,[Km]:r.DST_ALPHA,[Ym]:r.ONE_MINUS_SRC_COLOR,[lh]:r.ONE_MINUS_SRC_ALPHA,[Qm]:r.ONE_MINUS_DST_COLOR,[Jm]:r.ONE_MINUS_DST_ALPHA,[tg]:r.CONSTANT_COLOR,[ig]:r.ONE_MINUS_CONSTANT_COLOR,[ng]:r.CONSTANT_ALPHA,[sg]:r.ONE_MINUS_CONSTANT_ALPHA};function Oe(K,Me,ue,fe,Te,Ke,vt,Yt,ii,bt){if(K===_s){y===!0&&(He(r.BLEND),y=!1);return}if(y===!1&&(Fe(r.BLEND),y=!0),K!==Hm){if(K!==w||bt!==q){if((x!==Ws||T!==Ws)&&(r.blendEquation(r.FUNC_ADD),x=Ws,T=Ws),bt)switch(K){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qu:r.blendFunc(r.ONE,r.ONE);break;case ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $u:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $u:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,D=null,C=null,g=null,F.set(0,0,0),U=0,w=K,q=bt}return}Te=Te||Me,Ke=Ke||ue,vt=vt||fe,(Me!==x||Te!==T)&&(r.blendEquationSeparate(Ut[Me],Ut[Te]),x=Me,T=Te),(ue!==v||fe!==D||Ke!==C||vt!==g)&&(r.blendFuncSeparate(G[ue],G[fe],G[Ke],G[vt]),v=ue,D=fe,C=Ke,g=vt),(Yt.equals(F)===!1||ii!==U)&&(r.blendColor(Yt.r,Yt.g,Yt.b,ii),F.copy(Yt),U=ii),w=K,q=!1}function lt(K,Me){K.side===An?He(r.CULL_FACE):Fe(r.CULL_FACE);let ue=K.side===Ii;Me&&(ue=!ue),Lt(ue),K.blending===Wr&&K.transparent===!1?Oe(_s):Oe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),s.setFunc(K.depthFunc),s.setTest(K.depthTest),s.setMask(K.depthWrite),n.setMask(K.colorWrite);const fe=K.stencilWrite;o.setTest(fe),fe&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),st(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Fe(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(K){N!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),N=K)}function qe(K){K!==Bm?(Fe(r.CULL_FACE),K!==L&&(K===Xu?r.cullFace(r.BACK):K===zm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),L=K}function Wt(K){K!==V&&(z&&r.lineWidth(K),V=K)}function st(K,Me,ue){K?(Fe(r.POLYGON_OFFSET_FILL),(X!==Me||O!==ue)&&(r.polygonOffset(Me,ue),X=Me,O=ue)):He(r.POLYGON_OFFSET_FILL)}function it(K){K?Fe(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function B(K){K===void 0&&(K=r.TEXTURE0+j-1),Q!==K&&(r.activeTexture(K),Q=K)}function A(K,Me,ue){ue===void 0&&(Q===null?ue=r.TEXTURE0+j-1:ue=Q);let fe=me[ue];fe===void 0&&(fe={type:void 0,texture:void 0},me[ue]=fe),(fe.type!==K||fe.texture!==Me)&&(Q!==ue&&(r.activeTexture(ue),Q=ue),r.bindTexture(K,Me||Se[K]),fe.type=K,fe.texture=Me)}function re(){const K=me[Q];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xe(){try{r.texSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function je(){try{r.texSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function De(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ot(){try{r.texStorage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ge(K){ht.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),ht.copy(K))}function Le(K){yt.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),yt.copy(K))}function nt(K,Me){let ue=l.get(Me);ue===void 0&&(ue=new WeakMap,l.set(Me,ue));let fe=ue.get(K);fe===void 0&&(fe=r.getUniformBlockIndex(Me,K.name),ue.set(K,fe))}function pt(K,Me){const fe=l.get(Me).get(K);a.get(Me)!==fe&&(r.uniformBlockBinding(Me,fe,K.__bindingPointIndex),a.set(Me,fe))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,me={},u={},d=new WeakMap,f=[],m=null,y=!1,w=null,x=null,v=null,D=null,T=null,C=null,g=null,F=new Ct(0,0,0),U=0,q=!1,N=null,L=null,V=null,X=null,O=null,ht.set(0,0,r.canvas.width,r.canvas.height),yt.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:Fe,disable:He,bindFramebuffer:ut,drawBuffers:ft,useProgram:tt,setBlending:Oe,setMaterial:lt,setFlipSided:Lt,setCullFace:qe,setLineWidth:Wt,setPolygonOffset:st,setScissorTest:it,activeTexture:B,bindTexture:A,unbindTexture:re,compressedTexImage2D:_e,compressedTexImage3D:ve,texImage2D:ze,texImage3D:xt,updateUBOMapping:nt,uniformBlockBinding:pt,texStorage2D:ot,texStorage3D:we,texSubImage2D:xe,texSubImage3D:je,compressedTexSubImage2D:Ce,compressedTexSubImage3D:De,scissor:Ge,viewport:Le,reset:kt}}function kd(r,e,t,i){const n=Pv(i);switch(t){case rp:return r*e;case ap:return r*e;case lp:return r*e*2;case cp:return r*e/n.components*n.byteLength;case su:return r*e/n.components*n.byteLength;case hp:return r*e*2/n.components*n.byteLength;case ru:return r*e*2/n.components*n.byteLength;case op:return r*e*3/n.components*n.byteLength;case xn:return r*e*4/n.components*n.byteLength;case ou:return r*e*4/n.components*n.byteLength;case _l:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vl:case Ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(r,16)*Math.max(e,8)/4;case fh:case mh:return Math.max(r,8)*Math.max(e,8)/2;case xh:case _h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Nh:case Uh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case up:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Oh:case Bh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pv(r){switch(r){case Qn:case ip:return{byteLength:1,components:1};case qo:case np:case Qo:return{byteLength:2,components:1};case iu:case nu:return{byteLength:2,components:4};case Ks:case tu:case Jn:return{byteLength:4,components:1};case sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Iv(r,e,t,i,n,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Qe,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(B,A){return m?new OffscreenCanvas(B,A):Pl("canvas")}function w(B,A,re){let _e=1;const ve=it(B);if((ve.width>re||ve.height>re)&&(_e=re/Math.max(ve.width,ve.height)),_e<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const xe=Math.floor(_e*ve.width),je=Math.floor(_e*ve.height);d===void 0&&(d=y(xe,je));const Ce=A?y(xe,je):d;return Ce.width=xe,Ce.height=je,Ce.getContext("2d").drawImage(B,0,0,xe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+xe+"x"+je+")."),Ce}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),B;return B}function x(B){return B.generateMipmaps&&B.minFilter!==en&&B.minFilter!==mn}function v(B){r.generateMipmap(B)}function D(B,A,re,_e,ve=!1){if(B!==null){if(r[B]!==void 0)return r[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let xe=A;if(A===r.RED&&(re===r.FLOAT&&(xe=r.R32F),re===r.HALF_FLOAT&&(xe=r.R16F),re===r.UNSIGNED_BYTE&&(xe=r.R8)),A===r.RED_INTEGER&&(re===r.UNSIGNED_BYTE&&(xe=r.R8UI),re===r.UNSIGNED_SHORT&&(xe=r.R16UI),re===r.UNSIGNED_INT&&(xe=r.R32UI),re===r.BYTE&&(xe=r.R8I),re===r.SHORT&&(xe=r.R16I),re===r.INT&&(xe=r.R32I)),A===r.RG&&(re===r.FLOAT&&(xe=r.RG32F),re===r.HALF_FLOAT&&(xe=r.RG16F),re===r.UNSIGNED_BYTE&&(xe=r.RG8)),A===r.RG_INTEGER&&(re===r.UNSIGNED_BYTE&&(xe=r.RG8UI),re===r.UNSIGNED_SHORT&&(xe=r.RG16UI),re===r.UNSIGNED_INT&&(xe=r.RG32UI),re===r.BYTE&&(xe=r.RG8I),re===r.SHORT&&(xe=r.RG16I),re===r.INT&&(xe=r.RG32I)),A===r.RGB&&re===r.UNSIGNED_INT_5_9_9_9_REV&&(xe=r.RGB9_E5),A===r.RGBA){const je=ve?Al:Nt.getTransfer(_e);re===r.FLOAT&&(xe=r.RGBA32F),re===r.HALF_FLOAT&&(xe=r.RGBA16F),re===r.UNSIGNED_BYTE&&(xe=je===Vt?r.SRGB8_ALPHA8:r.RGBA8),re===r.UNSIGNED_SHORT_4_4_4_4&&(xe=r.RGBA4),re===r.UNSIGNED_SHORT_5_5_5_1&&(xe=r.RGB5_A1)}return(xe===r.R16F||xe===r.R32F||xe===r.RG16F||xe===r.RG32F||xe===r.RGBA16F||xe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function T(B,A){let re;return B?A===null||A===Ks||A===Zr?re=r.DEPTH24_STENCIL8:A===Jn?re=r.DEPTH32F_STENCIL8:A===qo&&(re=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ks||A===Zr?re=r.DEPTH_COMPONENT24:A===Jn?re=r.DEPTH_COMPONENT32F:A===qo&&(re=r.DEPTH_COMPONENT16),re}function C(B,A){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==en&&B.minFilter!==mn?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function g(B){const A=B.target;A.removeEventListener("dispose",g),U(A),A.isVideoTexture&&u.delete(A)}function F(B){const A=B.target;A.removeEventListener("dispose",F),N(A)}function U(B){const A=i.get(B);if(A.__webglInit===void 0)return;const re=B.source,_e=f.get(re);if(_e){const ve=_e[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(B),Object.keys(_e).length===0&&f.delete(re)}i.remove(B)}function q(B){const A=i.get(B);r.deleteTexture(A.__webglTexture);const re=B.source,_e=f.get(re);delete _e[A.__cacheKey],o.memory.textures--}function N(B){const A=i.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let ve=0;ve<A.__webglFramebuffer[_e].length;ve++)r.deleteFramebuffer(A.__webglFramebuffer[_e][ve]);else r.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)r.deleteFramebuffer(A.__webglFramebuffer[_e]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=B.textures;for(let _e=0,ve=re.length;_e<ve;_e++){const xe=i.get(re[_e]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(re[_e])}i.remove(B)}let L=0;function V(){L=0}function X(){const B=L;return B>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+n.maxTextures),L+=1,B}function O(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function j(B,A){const re=i.get(B);if(B.isVideoTexture&&Wt(B),B.isRenderTargetTexture===!1&&B.version>0&&re.__version!==B.version){const _e=B.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(re,B,A);return}}t.bindTexture(r.TEXTURE_2D,re.__webglTexture,r.TEXTURE0+A)}function z(B,A){const re=i.get(B);if(B.version>0&&re.__version!==B.version){yt(re,B,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,re.__webglTexture,r.TEXTURE0+A)}function $(B,A){const re=i.get(B);if(B.version>0&&re.__version!==B.version){yt(re,B,A);return}t.bindTexture(r.TEXTURE_3D,re.__webglTexture,r.TEXTURE0+A)}function ie(B,A){const re=i.get(B);if(B.version>0&&re.__version!==B.version){he(re,B,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture,r.TEXTURE0+A)}const Q={[uh]:r.REPEAT,[qs]:r.CLAMP_TO_EDGE,[dh]:r.MIRRORED_REPEAT},me={[en]:r.NEAREST,[Mg]:r.NEAREST_MIPMAP_NEAREST,[va]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[ec]:r.LINEAR_MIPMAP_NEAREST,[js]:r.LINEAR_MIPMAP_LINEAR},Re={[Tg]:r.NEVER,[Pg]:r.ALWAYS,[Eg]:r.LESS,[fp]:r.LEQUAL,[Ag]:r.EQUAL,[Lg]:r.GEQUAL,[Rg]:r.GREATER,[Cg]:r.NOTEQUAL};function Ae(B,A){if(A.type===Jn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===mn||A.magFilter===ec||A.magFilter===va||A.magFilter===js||A.minFilter===mn||A.minFilter===ec||A.minFilter===va||A.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,Q[A.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,Q[A.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,Q[A.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,me[A.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,me[A.minFilter]),A.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===en||A.minFilter!==va&&A.minFilter!==js||A.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ht(B,A){let re=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",g));const _e=A.source;let ve=f.get(_e);ve===void 0&&(ve={},f.set(_e,ve));const xe=O(A);if(xe!==B.__cacheKey){ve[xe]===void 0&&(ve[xe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,re=!0),ve[xe].usedTimes++;const je=ve[B.__cacheKey];je!==void 0&&(ve[B.__cacheKey].usedTimes--,je.usedTimes===0&&q(A)),B.__cacheKey=xe,B.__webglTexture=ve[xe].texture}return re}function yt(B,A,re){let _e=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=r.TEXTURE_3D);const ve=ht(B,A),xe=A.source;t.bindTexture(_e,B.__webglTexture,r.TEXTURE0+re);const je=i.get(xe);if(xe.version!==je.__version||ve===!0){t.activeTexture(r.TEXTURE0+re);const Ce=Nt.getPrimaries(Nt.workingColorSpace),De=A.colorSpace===gs?null:Nt.getPrimaries(A.colorSpace),ot=A.colorSpace===gs||Ce===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let we=w(A.image,!1,n.maxTextureSize);we=st(A,we);const ze=s.convert(A.format,A.colorSpace),xt=s.convert(A.type);let Ge=D(A.internalFormat,ze,xt,A.colorSpace,A.isVideoTexture);Ae(_e,A);let Le;const nt=A.mipmaps,pt=A.isVideoTexture!==!0,kt=je.__version===void 0||ve===!0,K=xe.dataReady,Me=C(A,we);if(A.isDepthTexture)Ge=T(A.format===Qr,A.type),kt&&(pt?t.texStorage2D(r.TEXTURE_2D,1,Ge,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,Ge,we.width,we.height,0,ze,xt,null));else if(A.isDataTexture)if(nt.length>0){pt&&kt&&t.texStorage2D(r.TEXTURE_2D,Me,Ge,nt[0].width,nt[0].height);for(let ue=0,fe=nt.length;ue<fe;ue++)Le=nt[ue],pt?K&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Le.width,Le.height,ze,xt,Le.data):t.texImage2D(r.TEXTURE_2D,ue,Ge,Le.width,Le.height,0,ze,xt,Le.data);A.generateMipmaps=!1}else pt?(kt&&t.texStorage2D(r.TEXTURE_2D,Me,Ge,we.width,we.height),K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,ze,xt,we.data)):t.texImage2D(r.TEXTURE_2D,0,Ge,we.width,we.height,0,ze,xt,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){pt&&kt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ge,nt[0].width,nt[0].height,we.depth);for(let ue=0,fe=nt.length;ue<fe;ue++)if(Le=nt[ue],A.format!==xn)if(ze!==null)if(pt){if(K)if(A.layerUpdates.size>0){const Te=kd(Le.width,Le.height,A.format,A.type);for(const Ke of A.layerUpdates){const vt=Le.data.subarray(Ke*Te/Le.data.BYTES_PER_ELEMENT,(Ke+1)*Te/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Ke,Le.width,Le.height,1,ze,vt,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Le.width,Le.height,we.depth,ze,Le.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,Ge,Le.width,Le.height,we.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?K&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Le.width,Le.height,we.depth,ze,xt,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,Ge,Le.width,Le.height,we.depth,0,ze,xt,Le.data)}else{pt&&kt&&t.texStorage2D(r.TEXTURE_2D,Me,Ge,nt[0].width,nt[0].height);for(let ue=0,fe=nt.length;ue<fe;ue++)Le=nt[ue],A.format!==xn?ze!==null?pt?K&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Le.width,Le.height,ze,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?K&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Le.width,Le.height,ze,xt,Le.data):t.texImage2D(r.TEXTURE_2D,ue,Ge,Le.width,Le.height,0,ze,xt,Le.data)}else if(A.isDataArrayTexture)if(pt){if(kt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ge,we.width,we.height,we.depth),K)if(A.layerUpdates.size>0){const ue=kd(we.width,we.height,A.format,A.type);for(const fe of A.layerUpdates){const Te=we.data.subarray(fe*ue/we.data.BYTES_PER_ELEMENT,(fe+1)*ue/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,we.width,we.height,1,ze,xt,Te)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,xt,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,we.width,we.height,we.depth,0,ze,xt,we.data);else if(A.isData3DTexture)pt?(kt&&t.texStorage3D(r.TEXTURE_3D,Me,Ge,we.width,we.height,we.depth),K&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,xt,we.data)):t.texImage3D(r.TEXTURE_3D,0,Ge,we.width,we.height,we.depth,0,ze,xt,we.data);else if(A.isFramebufferTexture){if(kt)if(pt)t.texStorage2D(r.TEXTURE_2D,Me,Ge,we.width,we.height);else{let ue=we.width,fe=we.height;for(let Te=0;Te<Me;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ge,ue,fe,0,ze,xt,null),ue>>=1,fe>>=1}}else if(nt.length>0){if(pt&&kt){const ue=it(nt[0]);t.texStorage2D(r.TEXTURE_2D,Me,Ge,ue.width,ue.height)}for(let ue=0,fe=nt.length;ue<fe;ue++)Le=nt[ue],pt?K&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ze,xt,Le):t.texImage2D(r.TEXTURE_2D,ue,Ge,ze,xt,Le);A.generateMipmaps=!1}else if(pt){if(kt){const ue=it(we);t.texStorage2D(r.TEXTURE_2D,Me,Ge,ue.width,ue.height)}K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,xt,we)}else t.texImage2D(r.TEXTURE_2D,0,Ge,ze,xt,we);x(A)&&v(_e),je.__version=xe.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function he(B,A,re){if(A.image.length!==6)return;const _e=ht(B,A),ve=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+re);const xe=i.get(ve);if(ve.version!==xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+re);const je=Nt.getPrimaries(Nt.workingColorSpace),Ce=A.colorSpace===gs?null:Nt.getPrimaries(A.colorSpace),De=A.colorSpace===gs||je===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ot=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let fe=0;fe<6;fe++)!ot&&!we?ze[fe]=w(A.image[fe],!0,n.maxCubemapSize):ze[fe]=we?A.image[fe].image:A.image[fe],ze[fe]=st(A,ze[fe]);const xt=ze[0],Ge=s.convert(A.format,A.colorSpace),Le=s.convert(A.type),nt=D(A.internalFormat,Ge,Le,A.colorSpace),pt=A.isVideoTexture!==!0,kt=xe.__version===void 0||_e===!0,K=ve.dataReady;let Me=C(A,xt);Ae(r.TEXTURE_CUBE_MAP,A);let ue;if(ot){pt&&kt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,nt,xt.width,xt.height);for(let fe=0;fe<6;fe++){ue=ze[fe].mipmaps;for(let Te=0;Te<ue.length;Te++){const Ke=ue[Te];A.format!==xn?Ge!==null?pt?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,0,0,Ke.width,Ke.height,Ge,Ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,nt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,0,0,Ke.width,Ke.height,Ge,Le,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,nt,Ke.width,Ke.height,0,Ge,Le,Ke.data)}}}else{if(ue=A.mipmaps,pt&&kt){ue.length>0&&Me++;const fe=it(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,nt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(we){pt?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze[fe].width,ze[fe].height,Ge,Le,ze[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,ze[fe].width,ze[fe].height,0,Ge,Le,ze[fe].data);for(let Te=0;Te<ue.length;Te++){const vt=ue[Te].image[fe].image;pt?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,0,0,vt.width,vt.height,Ge,Le,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,nt,vt.width,vt.height,0,Ge,Le,vt.data)}}else{pt?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ge,Le,ze[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,Ge,Le,ze[fe]);for(let Te=0;Te<ue.length;Te++){const Ke=ue[Te];pt?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,0,0,Ge,Le,Ke.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,nt,Ge,Le,Ke.image[fe])}}}x(A)&&v(r.TEXTURE_CUBE_MAP),xe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Se(B,A,re,_e,ve,xe){const je=s.convert(re.format,re.colorSpace),Ce=s.convert(re.type),De=D(re.internalFormat,je,Ce,re.colorSpace);if(!i.get(A).__hasExternalTextures){const we=Math.max(1,A.width>>xe),ze=Math.max(1,A.height>>xe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,xe,De,we,ze,A.depth,0,je,Ce,null):t.texImage2D(ve,xe,De,we,ze,0,je,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,B),qe(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ve,i.get(re).__webglTexture,0,Lt(A)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ve,i.get(re).__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(B,A,re){if(r.bindRenderbuffer(r.RENDERBUFFER,B),A.depthBuffer){const _e=A.depthTexture,ve=_e&&_e.isDepthTexture?_e.type:null,xe=T(A.stencilBuffer,ve),je=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Lt(A);qe(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,xe,A.width,A.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,xe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,xe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,B)}else{const _e=A.textures;for(let ve=0;ve<_e.length;ve++){const xe=_e[ve],je=s.convert(xe.format,xe.colorSpace),Ce=s.convert(xe.type),De=D(xe.internalFormat,je,Ce,xe.colorSpace),ot=Lt(A);re&&qe(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,De,A.width,A.height):qe(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,De,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,De,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);const _e=i.get(A.depthTexture).__webglTexture,ve=Lt(A);if(A.depthTexture.format===Xr)qe(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(A.depthTexture.format===Qr)qe(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ut(B){const A=i.get(B),re=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");He(A.__webglFramebuffer,B)}else if(re){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=r.createRenderbuffer(),Fe(A.__webglDepthbuffer[_e],B,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Fe(A.__webglDepthbuffer,B,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(B,A,re){const _e=i.get(B);A!==void 0&&Se(_e.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),re!==void 0&&ut(B)}function tt(B){const A=B.texture,re=i.get(B),_e=i.get(A);B.addEventListener("dispose",F);const ve=B.textures,xe=B.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=A.version,o.memory.textures++),xe){re.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Ce]=[];for(let De=0;De<A.mipmaps.length;De++)re.__webglFramebuffer[Ce][De]=r.createFramebuffer()}else re.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)re.__webglFramebuffer[Ce]=r.createFramebuffer()}else re.__webglFramebuffer=r.createFramebuffer();if(je)for(let Ce=0,De=ve.length;Ce<De;Ce++){const ot=i.get(ve[Ce]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),o.memory.textures++)}if(B.samples>0&&qe(B)===!1){re.__webglMultisampledFramebuffer=r.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const De=ve[Ce];re.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,re.__webglColorRenderbuffer[Ce]);const ot=s.convert(De.format,De.colorSpace),we=s.convert(De.type),ze=D(De.internalFormat,ot,we,De.colorSpace,B.isXRRenderTarget===!0),xt=Lt(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ze,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,re.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(re.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(re.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)Se(re.__webglFramebuffer[Ce][De],B,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,De);else Se(re.__webglFramebuffer[Ce],B,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(A)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ce=0,De=ve.length;Ce<De;Ce++){const ot=ve[Ce],we=i.get(ot);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),Ae(r.TEXTURE_2D,ot),Se(re.__webglFramebuffer,B,ot,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),x(ot)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ce=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),Ae(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)Se(re.__webglFramebuffer[De],B,A,r.COLOR_ATTACHMENT0,Ce,De);else Se(re.__webglFramebuffer,B,A,r.COLOR_ATTACHMENT0,Ce,0);x(A)&&v(Ce),t.unbindTexture()}B.depthBuffer&&ut(B)}function Ut(B){const A=B.textures;for(let re=0,_e=A.length;re<_e;re++){const ve=A[re];if(x(ve)){const xe=B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,je=i.get(ve).__webglTexture;t.bindTexture(xe,je),v(xe),t.unbindTexture()}}}const G=[],Oe=[];function lt(B){if(B.samples>0){if(qe(B)===!1){const A=B.textures,re=B.width,_e=B.height;let ve=r.COLOR_BUFFER_BIT;const xe=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=i.get(B),Ce=A.length>1;if(Ce)for(let De=0;De<A.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let De=0;De<A.length;De++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[De]);const ot=i.get(A[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ot,0)}r.blitFramebuffer(0,0,re,_e,0,0,re,_e,ve,r.NEAREST),l===!0&&(G.length=0,Oe.length=0,G.push(r.COLOR_ATTACHMENT0+De),B.depthBuffer&&B.resolveDepthBuffer===!1&&(G.push(xe),Oe.push(xe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let De=0;De<A.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,je.__webglColorRenderbuffer[De]);const ot=i.get(A[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const A=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Lt(B){return Math.min(n.maxSamples,B.samples)}function qe(B){const A=i.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(B){const A=o.render.frame;u.get(B)!==A&&(u.set(B,A),B.update())}function st(B,A){const re=B.colorSpace,_e=B.format,ve=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||re!==ws&&re!==gs&&(Nt.getTransfer(re)===Vt?(_e!==xn||ve!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function it(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=ft,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=qe}function Dv(r,e){function t(i,n=gs){let s;const o=Nt.getTransfer(n);if(i===Qn)return r.UNSIGNED_BYTE;if(i===iu)return r.UNSIGNED_SHORT_4_4_4_4;if(i===nu)return r.UNSIGNED_SHORT_5_5_5_1;if(i===sp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ip)return r.BYTE;if(i===np)return r.SHORT;if(i===qo)return r.UNSIGNED_SHORT;if(i===tu)return r.INT;if(i===Ks)return r.UNSIGNED_INT;if(i===Jn)return r.FLOAT;if(i===Qo)return r.HALF_FLOAT;if(i===rp)return r.ALPHA;if(i===op)return r.RGB;if(i===xn)return r.RGBA;if(i===ap)return r.LUMINANCE;if(i===lp)return r.LUMINANCE_ALPHA;if(i===Xr)return r.DEPTH_COMPONENT;if(i===Qr)return r.DEPTH_STENCIL;if(i===cp)return r.RED;if(i===su)return r.RED_INTEGER;if(i===hp)return r.RG;if(i===ru)return r.RG_INTEGER;if(i===ou)return r.RGBA_INTEGER;if(i===_l||i===yl||i===vl||i===Ml)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh||i===_h||i===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xh||i===_h)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vh||i===Mh||i===Sh||i===wh||i===bh||i===Th||i===Eh||i===Ah||i===Rh||i===Ch||i===Lh||i===Ph||i===Ih||i===Dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Th)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===Nh||i===Uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sl)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===Fh||i===Oh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Nv extends Zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Ga=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Uv={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,i),v=this._getHandJoint(h,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,y=.005;h.inputState.pinching&&f>m+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=m-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
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

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Pn,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ss({vertexShader:Fv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xi(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zv extends so{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,h=null,u=null,d=null,f=null,m=null,y=null;const w=new Bv,x=t.getContextAttributes();let v=null,D=null;const T=[],C=[],g=new Qe;let F=null;const U=new Zi;U.layers.enable(1),U.viewport=new pi;const q=new Zi;q.layers.enable(2),q.viewport=new pi;const N=[U,q],L=new Nv;L.layers.enable(1),L.layers.enable(2);let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Se=T[he];return Se===void 0&&(Se=new Ac,T[he]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(he){let Se=T[he];return Se===void 0&&(Se=new Ac,T[he]=Se),Se.getGripSpace()},this.getHand=function(he){let Se=T[he];return Se===void 0&&(Se=new Ac,T[he]=Se),Se.getHandSpace()};function O(he){const Se=C.indexOf(he.inputSource);if(Se===-1)return;const Fe=T[Se];Fe!==void 0&&(Fe.update(he.inputSource,he.frame,h||o),Fe.dispatchEvent({type:he.type,data:he.inputSource}))}function j(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",j),n.removeEventListener("inputsourceschange",z);for(let he=0;he<T.length;he++){const Se=C[he];Se!==null&&(C[he]=null,T[he].disconnect(Se))}V=null,X=null,w.reset(),e.setRenderTarget(v),m=null,f=null,d=null,n=null,D=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(g.width,g.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(he){h=he},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return n},this.setSession=async function(he){if(n=he,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",j),n.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(g),n.renderState.layers===void 0){const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,t,Se),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),D=new Js(m.framebufferWidth,m.framebufferHeight,{format:xn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Se=null,Fe=null,He=null;x.depth&&(He=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Qr:Xr,Fe=x.stencil?Zr:Ks);const ut={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:s};d=new XRWebGLBinding(n,t),f=d.createProjectionLayer(ut),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),D=new Js(f.textureWidth,f.textureHeight,{format:xn,type:Qn,depthTexture:new Ip(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(a),yt.setContext(n),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function z(he){for(let Se=0;Se<he.removed.length;Se++){const Fe=he.removed[Se],He=C.indexOf(Fe);He>=0&&(C[He]=null,T[He].disconnect(Fe))}for(let Se=0;Se<he.added.length;Se++){const Fe=he.added[Se];let He=C.indexOf(Fe);if(He===-1){for(let ft=0;ft<T.length;ft++)if(ft>=C.length){C.push(Fe),He=ft;break}else if(C[ft]===null){C[ft]=Fe,He=ft;break}if(He===-1)break}const ut=T[He];ut&&ut.connect(Fe)}}const $=new M,ie=new M;function Q(he,Se,Fe){$.setFromMatrixPosition(Se.matrixWorld),ie.setFromMatrixPosition(Fe.matrixWorld);const He=$.distanceTo(ie),ut=Se.projectionMatrix.elements,ft=Fe.projectionMatrix.elements,tt=ut[14]/(ut[10]-1),Ut=ut[14]/(ut[10]+1),G=(ut[9]+1)/ut[5],Oe=(ut[9]-1)/ut[5],lt=(ut[8]-1)/ut[0],Lt=(ft[8]+1)/ft[0],qe=tt*lt,Wt=tt*Lt,st=He/(-lt+Lt),it=st*-lt;Se.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(it),he.translateZ(st),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();const B=tt+st,A=Ut+st,re=qe-it,_e=Wt+(He-it),ve=G*Ut/A*B,xe=Oe*Ut/A*B;he.projectionMatrix.makePerspective(re,_e,ve,xe,B,A),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}function me(he,Se){Se===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Se.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(n===null)return;w.texture!==null&&(he.near=w.depthNear,he.far=w.depthFar),L.near=q.near=U.near=he.near,L.far=q.far=U.far=he.far,(V!==L.near||X!==L.far)&&(n.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,X=L.far,U.near=V,U.far=X,q.near=V,q.far=X,U.updateProjectionMatrix(),q.updateProjectionMatrix(),he.updateProjectionMatrix());const Se=he.parent,Fe=L.cameras;me(L,Se);for(let He=0;He<Fe.length;He++)me(Fe[He],Se);Fe.length===2?Q(L,U,q):L.projectionMatrix.copy(U.projectionMatrix),Re(he,L,Se)};function Re(he,Se,Fe){Fe===null?he.matrix.copy(Se.matrixWorld):(he.matrix.copy(Fe.matrixWorld),he.matrix.invert(),he.matrix.multiply(Se.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Se.projectionMatrix),he.projectionMatrixInverse.copy(Se.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=zh*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(he){l=he,f!==null&&(f.fixedFoveation=he),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=he)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(L)};let Ae=null;function ht(he,Se){if(u=Se.getViewerPose(h||o),y=Se,u!==null){const Fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(D,m.framebuffer),e.setRenderTarget(D));let He=!1;Fe.length!==L.cameras.length&&(L.cameras.length=0,He=!0);for(let ft=0;ft<Fe.length;ft++){const tt=Fe[ft];let Ut=null;if(m!==null)Ut=m.getViewport(tt);else{const Oe=d.getViewSubImage(f,tt);Ut=Oe.viewport,ft===0&&(e.setRenderTargetTextures(D,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(D))}let G=N[ft];G===void 0&&(G=new Zi,G.layers.enable(ft),G.viewport=new pi,N[ft]=G),G.matrix.fromArray(tt.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(tt.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ft===0&&(L.matrix.copy(G.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),He===!0&&L.cameras.push(G)}const ut=n.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const ft=d.getDepthInformation(Fe[0]);ft&&ft.isValid&&ft.texture&&w.init(e,ft,n.renderState)}}for(let Fe=0;Fe<T.length;Fe++){const He=C[Fe],ut=T[Fe];He!==null&&ut!==void 0&&ut.update(He,Se,h||o)}Ae&&Ae(he,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),y=null}const yt=new Pp;yt.setAnimationLoop(ht),this.setAnimationLoop=function(he){Ae=he},this.dispose=function(){}}}const Us=new Ms,kv=new oi;function Hv(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function i(x,v){v.color.getRGB(x.fogColor.value,Rp(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function n(x,v,D,T,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(x,v):v.isMeshToonMaterial?(s(x,v),d(x,v)):v.isMeshPhongMaterial?(s(x,v),u(x,v)):v.isMeshStandardMaterial?(s(x,v),f(x,v),v.isMeshPhysicalMaterial&&m(x,v,C)):v.isMeshMatcapMaterial?(s(x,v),y(x,v)):v.isMeshDepthMaterial?s(x,v):v.isMeshDistanceMaterial?(s(x,v),w(x,v)):v.isMeshNormalMaterial?s(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&a(x,v)):v.isPointsMaterial?l(x,v,D,T):v.isSpriteMaterial?h(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Ii&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Ii&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const D=e.get(v),T=D.envMap,C=D.envMapRotation;T&&(x.envMap.value=T,Us.copy(C),Us.x*=-1,Us.y*=-1,Us.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),x.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Us)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function a(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function l(x,v,D,T){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*D,x.scale.value=T*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function u(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function f(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function m(x,v,D){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ii&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const D=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Vv(r,e,t,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,T){const C=T.program;i.uniformBlockBinding(D,C)}function h(D,T){let C=n[D.id];C===void 0&&(y(D),C=u(D),n[D.id]=C,D.addEventListener("dispose",x));const g=T.program;i.updateUBOMapping(D,g);const F=e.render.frame;s[D.id]!==F&&(f(D),s[D.id]=F)}function u(D){const T=d();D.__bindingPointIndex=T;const C=r.createBuffer(),g=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,g,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,C),C}function d(){for(let D=0;D<a;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(D){const T=n[D.id],C=D.uniforms,g=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let F=0,U=C.length;F<U;F++){const q=Array.isArray(C[F])?C[F]:[C[F]];for(let N=0,L=q.length;N<L;N++){const V=q[N];if(m(V,F,N,g)===!0){const X=V.__offset,O=Array.isArray(V.value)?V.value:[V.value];let j=0;for(let z=0;z<O.length;z++){const $=O[z],ie=w($);typeof $=="number"||typeof $=="boolean"?(V.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,X+j,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=0,V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=0,V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=0):($.toArray(V.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(D,T,C,g){const F=D.value,U=T+"_"+C;if(g[U]===void 0)return typeof F=="number"||typeof F=="boolean"?g[U]=F:g[U]=F.clone(),!0;{const q=g[U];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return g[U]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function y(D){const T=D.uniforms;let C=0;const g=16;for(let U=0,q=T.length;U<q;U++){const N=Array.isArray(T[U])?T[U]:[T[U]];for(let L=0,V=N.length;L<V;L++){const X=N[L],O=Array.isArray(X.value)?X.value:[X.value];for(let j=0,z=O.length;j<z;j++){const $=O[j],ie=w($),Q=C%g;Q!==0&&g-Q<ie.boundary&&(C+=g-Q),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=ie.storage}}}const F=C%g;return F>0&&(C+=g-F),D.__size=C,D.__cache={},this}function w(D){const T={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),T}function x(D){const T=D.target;T.removeEventListener("dispose",x);const C=o.indexOf(T.__bindingPointIndex);o.splice(C,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function v(){for(const D in n)r.deleteBuffer(n[D]);o=[],n={},s={}}return{bind:l,update:h,dispose:v}}class Gv{constructor(e={}){const{canvas:t=Dg(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),y=new Int32Array(4);let w=null,x=null;const v=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=ys,this.toneMappingExposure=1;const T=this;let C=!1,g=0,F=0,U=null,q=-1,N=null;const L=new pi,V=new pi;let X=null;const O=new Ct(0);let j=0,z=t.width,$=t.height,ie=1,Q=null,me=null;const Re=new pi(0,0,z,$),Ae=new pi(0,0,z,$);let ht=!1;const yt=new cu;let he=!1,Se=!1;const Fe=new oi,He=new M,ut=new pi,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ut(){return U===null?ie:1}let G=i;function Oe(I,Z){return t.getContext(I,Z)}try{const I={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Om}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),G===null){const Z="webgl2";if(G=Oe(Z,I),G===null)throw Oe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let lt,Lt,qe,Wt,st,it,B,A,re,_e,ve,xe,je,Ce,De,ot,we,ze,xt,Ge,Le,nt,pt,kt;function K(){lt=new K_(G),lt.init(),nt=new Dv(G,lt),Lt=new W_(G,lt,e,nt),qe=new Lv(G),Wt=new Q_(G),st=new gv,it=new Iv(G,lt,qe,st,Lt,nt,Wt),B=new q_(T),A=new Y_(T),re=new o0(G),pt=new V_(G,re),_e=new J_(G,re,Wt,pt),ve=new ty(G,_e,re,Wt),xt=new ey(G,Lt,it),ot=new X_(st),xe=new mv(T,B,A,lt,Lt,pt,ot),je=new Hv(T,st),Ce=new _v,De=new bv(lt),ze=new H_(T,B,A,qe,ve,f,l),we=new Cv(T,ve,Lt),kt=new Vv(G,Wt,Lt,qe),Ge=new G_(G,lt,Wt),Le=new Z_(G,lt,Wt),Wt.programs=xe.programs,T.capabilities=Lt,T.extensions=lt,T.properties=st,T.renderLists=Ce,T.shadowMap=we,T.state=qe,T.info=Wt}K();const Me=new zv(T,G);this.xr=Me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const I=lt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=lt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(I){I!==void 0&&(ie=I,this.setSize(z,$,!1))},this.getSize=function(I){return I.set(z,$)},this.setSize=function(I,Z,se=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,$=Z,t.width=Math.floor(I*ie),t.height=Math.floor(Z*ie),se===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(z*ie,$*ie).floor()},this.setDrawingBufferSize=function(I,Z,se){z=I,$=Z,ie=se,t.width=Math.floor(I*se),t.height=Math.floor(Z*se),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(Re)},this.setViewport=function(I,Z,se,oe){I.isVector4?Re.set(I.x,I.y,I.z,I.w):Re.set(I,Z,se,oe),qe.viewport(L.copy(Re).multiplyScalar(ie).round())},this.getScissor=function(I){return I.copy(Ae)},this.setScissor=function(I,Z,se,oe){I.isVector4?Ae.set(I.x,I.y,I.z,I.w):Ae.set(I,Z,se,oe),qe.scissor(V.copy(Ae).multiplyScalar(ie).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(I){qe.setScissorTest(ht=I)},this.setOpaqueSort=function(I){Q=I},this.setTransparentSort=function(I){me=I},this.getClearColor=function(I){return I.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(I=!0,Z=!0,se=!0){let oe=0;if(I){let ee=!1;if(U!==null){const be=U.texture.format;ee=be===ou||be===ru||be===su}if(ee){const be=U.texture.type,Ne=be===Qn||be===Ks||be===qo||be===Zr||be===iu||be===nu,Ie=ze.getClearColor(),ke=ze.getClearAlpha(),Je=Ie.r,$e=Ie.g,Ye=Ie.b;Ne?(m[0]=Je,m[1]=$e,m[2]=Ye,m[3]=ke,G.clearBufferuiv(G.COLOR,0,m)):(y[0]=Je,y[1]=$e,y[2]=Ye,y[3]=ke,G.clearBufferiv(G.COLOR,0,y))}else oe|=G.COLOR_BUFFER_BIT}Z&&(oe|=G.DEPTH_BUFFER_BIT),se&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ce.dispose(),De.dispose(),st.dispose(),B.dispose(),A.dispose(),ve.dispose(),pt.dispose(),kt.dispose(),xe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",qi),Me.removeEventListener("sessionend",fo),Ri.stop()};function ue(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const I=Wt.autoReset,Z=we.enabled,se=we.autoUpdate,oe=we.needsUpdate,ee=we.type;K(),Wt.autoReset=I,we.enabled=Z,we.autoUpdate=se,we.needsUpdate=oe,we.type=ee}function Te(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ke(I){const Z=I.target;Z.removeEventListener("dispose",Ke),vt(Z)}function vt(I){Yt(I),st.remove(I)}function Yt(I){const Z=st.get(I).programs;Z!==void 0&&(Z.forEach(function(se){xe.releaseProgram(se)}),I.isShaderMaterial&&xe.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,se,oe,ee,be){Z===null&&(Z=ft);const Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=ha(I,Z,se,oe,ee);qe.setMaterial(oe,Ne);let ke=se.index,Je=1;if(oe.wireframe===!0){if(ke=_e.getWireframeAttribute(se),ke===void 0)return;Je=2}const $e=se.drawRange,Ye=se.attributes.position;let At=$e.start*Je,Gt=($e.start+$e.count)*Je;be!==null&&(At=Math.max(At,be.start*Je),Gt=Math.min(Gt,(be.start+be.count)*Je)),ke!==null?(At=Math.max(At,0),Gt=Math.min(Gt,ke.count)):Ye!=null&&(At=Math.max(At,0),Gt=Math.min(Gt,Ye.count));const Ht=Gt-At;if(Ht<0||Ht===1/0)return;pt.setup(ee,oe,Ie,se,ke);let mi,Mt=Ge;if(ke!==null&&(mi=re.get(ke),Mt=Le,Mt.setIndex(mi)),ee.isMesh)oe.wireframe===!0?(qe.setLineWidth(oe.wireframeLinewidth*Ut()),Mt.setMode(G.LINES)):Mt.setMode(G.TRIANGLES);else if(ee.isLine){let We=oe.linewidth;We===void 0&&(We=1),qe.setLineWidth(We*Ut()),ee.isLineSegments?Mt.setMode(G.LINES):ee.isLineLoop?Mt.setMode(G.LINE_LOOP):Mt.setMode(G.LINE_STRIP)}else ee.isPoints?Mt.setMode(G.POINTS):ee.isSprite&&Mt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Mt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const We=ee._multiDrawStarts,Pt=ee._multiDrawCounts,Tt=ee._multiDrawCount,fi=ke?re.get(ke).bytesPerElement:1,is=st.get(oe).currentProgram.getUniforms();for(let wi=0;wi<Tt;wi++)is.setValue(G,"_gl_DrawID",wi),Mt.render(We[wi]/fi,Pt[wi])}else if(ee.isInstancedMesh)Mt.renderInstances(At,Ht,ee.count);else if(se.isInstancedBufferGeometry){const We=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Pt=Math.min(se.instanceCount,We);Mt.renderInstances(At,Ht,Pt)}else Mt.render(At,Ht)};function ii(I,Z,se){I.transparent===!0&&I.side===An&&I.forceSinglePass===!1?(I.side=Ii,I.needsUpdate=!0,Mn(I,Z,se),I.side=vs,I.needsUpdate=!0,Mn(I,Z,se),I.side=An):Mn(I,Z,se)}this.compile=function(I,Z,se=null){se===null&&(se=I),x=De.get(se),x.init(Z),D.push(x),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),I!==se&&I.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),x.setupLights();const oe=new Set;return I.traverse(function(ee){const be=ee.material;if(be)if(Array.isArray(be))for(let Ne=0;Ne<be.length;Ne++){const Ie=be[Ne];ii(Ie,se,ee),oe.add(Ie)}else ii(be,se,ee),oe.add(be)}),D.pop(),x=null,oe},this.compileAsync=function(I,Z,se=null){const oe=this.compile(I,Z,se);return new Promise(ee=>{function be(){if(oe.forEach(function(Ne){st.get(Ne).currentProgram.isReady()&&oe.delete(Ne)}),oe.size===0){ee(I);return}setTimeout(be,10)}lt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let bt=null;function sn(I){bt&&bt(I)}function qi(){Ri.stop()}function fo(){Ri.start()}const Ri=new Pp;Ri.setAnimationLoop(sn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(I){bt=I,Me.setAnimationLoop(I),I===null?Ri.stop():Ri.start()},Me.addEventListener("sessionstart",qi),Me.addEventListener("sessionend",fo),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(Z),Z=Me.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,Z,U),x=De.get(I,D.length),x.init(Z),D.push(x),Fe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),yt.setFromProjectionMatrix(Fe),Se=this.localClippingEnabled,he=ot.init(this.clippingPlanes,Se),w=Ce.get(I,v.length),w.init(),v.push(w),Me.enabled===!0&&Me.isPresenting===!0){const be=T.xr.getDepthSensingMesh();be!==null&&tr(be,Z,-1/0,T.sortObjects)}tr(I,Z,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(Q,me),tt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,tt&&ze.addToRenderList(w,I),this.info.render.frame++,he===!0&&ot.beginShadows();const se=x.state.shadowsArray;we.render(se,I,Z),he===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=w.opaque,ee=w.transmissive;if(x.setupLights(),Z.isArrayCamera){const be=Z.cameras;if(ee.length>0)for(let Ne=0,Ie=be.length;Ne<Ie;Ne++){const ke=be[Ne];Ts(oe,ee,I,ke)}tt&&ze.render(I);for(let Ne=0,Ie=be.length;Ne<Ie;Ne++){const ke=be[Ne];ir(w,I,ke,ke.viewport)}}else ee.length>0&&Ts(oe,ee,I,Z),tt&&ze.render(I),ir(w,I,Z);U!==null&&(it.updateMultisampleRenderTarget(U),it.updateRenderTargetMipmap(U)),I.isScene===!0&&I.onAfterRender(T,I,Z),pt.resetDefaultState(),q=-1,N=null,D.pop(),D.length>0?(x=D[D.length-1],he===!0&&ot.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function tr(I,Z,se,oe){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)se=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||yt.intersectsSprite(I)){oe&&ut.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Fe);const Ne=ve.update(I),Ie=I.material;Ie.visible&&w.push(I,Ne,Ie,se,ut.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||yt.intersectsObject(I))){const Ne=ve.update(I),Ie=I.material;if(oe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ut.copy(I.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ut.copy(Ne.boundingSphere.center)),ut.applyMatrix4(I.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ie)){const ke=Ne.groups;for(let Je=0,$e=ke.length;Je<$e;Je++){const Ye=ke[Je],At=Ie[Ye.materialIndex];At&&At.visible&&w.push(I,Ne,At,se,ut.z,Ye)}}else Ie.visible&&w.push(I,Ne,Ie,se,ut.z,null)}}const be=I.children;for(let Ne=0,Ie=be.length;Ne<Ie;Ne++)tr(be[Ne],Z,se,oe)}function ir(I,Z,se,oe){const ee=I.opaque,be=I.transmissive,Ne=I.transparent;x.setupLightsView(se),he===!0&&ot.setGlobalState(T.clippingPlanes,se),oe&&qe.viewport(L.copy(oe)),ee.length>0&&Es(ee,Z,se),be.length>0&&Es(be,Z,se),Ne.length>0&&Es(Ne,Z,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Ts(I,Z,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[oe.id]===void 0&&(x.state.transmissionRenderTarget[oe.id]=new Js(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Qo:Qn,minFilter:js,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const be=x.state.transmissionRenderTarget[oe.id],Ne=oe.viewport||L;be.setSize(Ne.z,Ne.w);const Ie=T.getRenderTarget();T.setRenderTarget(be),T.getClearColor(O),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),tt?ze.render(se):T.clear();const ke=T.toneMapping;T.toneMapping=ys;const Je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),x.setupLightsView(oe),he===!0&&ot.setGlobalState(T.clippingPlanes,oe),Es(I,se,oe),it.updateMultisampleRenderTarget(be),it.updateRenderTargetMipmap(be),lt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ye=0,At=Z.length;Ye<At;Ye++){const Gt=Z[Ye],Ht=Gt.object,mi=Gt.geometry,Mt=Gt.material,We=Gt.group;if(Mt.side===An&&Ht.layers.test(oe.layers)){const Pt=Mt.side;Mt.side=Ii,Mt.needsUpdate=!0,ca(Ht,se,oe,mi,Mt,We),Mt.side=Pt,Mt.needsUpdate=!0,$e=!0}}$e===!0&&(it.updateMultisampleRenderTarget(be),it.updateRenderTargetMipmap(be))}T.setRenderTarget(Ie),T.setClearColor(O,j),Je!==void 0&&(oe.viewport=Je),T.toneMapping=ke}function Es(I,Z,se){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,be=I.length;ee<be;ee++){const Ne=I[ee],Ie=Ne.object,ke=Ne.geometry,Je=oe===null?Ne.material:oe,$e=Ne.group;Ie.layers.test(se.layers)&&ca(Ie,Z,se,ke,Je,$e)}}function ca(I,Z,se,oe,ee,be){I.onBeforeRender(T,Z,se,oe,ee,be),I.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ee.transparent===!0&&ee.side===An&&ee.forceSinglePass===!1?(ee.side=Ii,ee.needsUpdate=!0,T.renderBufferDirect(se,Z,oe,ee,I,be),ee.side=vs,ee.needsUpdate=!0,T.renderBufferDirect(se,Z,oe,ee,I,be),ee.side=An):T.renderBufferDirect(se,Z,oe,ee,I,be),I.onAfterRender(T,Z,se,oe,ee,be)}function Mn(I,Z,se){Z.isScene!==!0&&(Z=ft);const oe=st.get(I),ee=x.state.lights,be=x.state.shadowsArray,Ne=ee.state.version,Ie=xe.getParameters(I,ee.state,be,Z,se),ke=xe.getProgramCacheKey(Ie);let Je=oe.programs;oe.environment=I.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(I.isMeshStandardMaterial?A:B).get(I.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,Je===void 0&&(I.addEventListener("dispose",Ke),Je=new Map,oe.programs=Je);let $e=Je.get(ke);if($e!==void 0){if(oe.currentProgram===$e&&oe.lightsStateVersion===Ne)return mo(I,Ie),$e}else Ie.uniforms=xe.getUniforms(I),I.onBeforeCompile(Ie,T),$e=xe.acquireProgram(Ie,ke),Je.set(ke,$e),oe.uniforms=Ie.uniforms;const Ye=oe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ye.clippingPlanes=ot.uniform),mo(I,Ie),oe.needsLights=go(I),oe.lightsStateVersion=Ne,oe.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.directionalShadowMap.value=ee.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotShadowMap.value=ee.state.spotShadowMap,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMap.value=ee.state.pointShadowMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=$e,oe.uniformsList=null,$e}function po(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=Tl.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function mo(I,Z){const se=st.get(I);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function ha(I,Z,se,oe,ee){Z.isScene!==!0&&(Z=ft),it.resetTextureUnits();const be=Z.fog,Ne=oe.isMeshStandardMaterial?Z.environment:null,Ie=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ws,ke=(oe.isMeshStandardMaterial?A:B).get(oe.envMap||Ne),Je=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,$e=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,Gt=!!se.morphAttributes.color;let Ht=ys;oe.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ht=T.toneMapping);const mi=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Mt=mi!==void 0?mi.length:0,We=st.get(oe),Pt=x.state.lights;if(he===!0&&(Se===!0||I!==N)){const bi=I===N&&oe.id===q;ot.setState(oe,I,bi)}let Tt=!1;oe.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Pt.state.version||We.outputColorSpace!==Ie||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==ke||oe.fog===!0&&We.fog!==be||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ot.numPlanes||We.numIntersection!==ot.numIntersection)||We.vertexAlphas!==Je||We.vertexTangents!==$e||We.morphTargets!==Ye||We.morphNormals!==At||We.morphColors!==Gt||We.toneMapping!==Ht||We.morphTargetsCount!==Mt)&&(Tt=!0):(Tt=!0,We.__version=oe.version);let fi=We.currentProgram;Tt===!0&&(fi=Mn(oe,Z,ee));let is=!1,wi=!1,rn=!1;const Ft=fi.getUniforms(),ji=We.uniforms;if(qe.useProgram(fi.program)&&(is=!0,wi=!0,rn=!0),oe.id!==q&&(q=oe.id,wi=!0),is||N!==I){Ft.setValue(G,"projectionMatrix",I.projectionMatrix),Ft.setValue(G,"viewMatrix",I.matrixWorldInverse);const bi=Ft.map.cameraPosition;bi!==void 0&&bi.setValue(G,He.setFromMatrixPosition(I.matrixWorld)),Lt.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),N!==I&&(N=I,wi=!0,rn=!0)}if(ee.isSkinnedMesh){Ft.setOptional(G,ee,"bindMatrix"),Ft.setOptional(G,ee,"bindMatrixInverse");const bi=ee.skeleton;bi&&(bi.boneTexture===null&&bi.computeBoneTexture(),Ft.setValue(G,"boneTexture",bi.boneTexture,it))}ee.isBatchedMesh&&(Ft.setOptional(G,ee,"batchingTexture"),Ft.setValue(G,"batchingTexture",ee._matricesTexture,it),Ft.setOptional(G,ee,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",ee._indirectTexture,it),Ft.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",ee._colorsTexture,it));const xo=se.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&xt.update(ee,se,fi),(wi||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,Ft.setValue(G,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(ji.envMap.value=ke,ji.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(ji.envMapIntensity.value=Z.environmentIntensity),wi&&(Ft.setValue(G,"toneMappingExposure",T.toneMappingExposure),We.needsLights&&ua(ji,rn),be&&oe.fog===!0&&je.refreshFogUniforms(ji,be),je.refreshMaterialUniforms(ji,oe,ie,$,x.state.transmissionRenderTarget[I.id]),Tl.upload(G,po(We),ji,it)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Tl.upload(G,po(We),ji,it),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ft.setValue(G,"center",ee.center),Ft.setValue(G,"modelViewMatrix",ee.modelViewMatrix),Ft.setValue(G,"normalMatrix",ee.normalMatrix),Ft.setValue(G,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const bi=oe.uniformsGroups;for(let nr=0,As=bi.length;nr<As;nr++){const _o=bi[nr];kt.update(_o,fi),kt.bind(_o,fi)}}return fi}function ua(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function go(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(I,Z,se){st.get(I.texture).__webglTexture=Z,st.get(I.depthTexture).__webglTexture=se;const oe=st.get(I);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Z){const se=st.get(I);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,se=0){U=I,g=Z,F=se;let oe=!0,ee=null,be=!1,Ne=!1;if(I){const ke=st.get(I);ke.__useDefaultFramebuffer!==void 0?(qe.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1):ke.__webglFramebuffer===void 0?it.setupRenderTarget(I):ke.__hasExternalTextures&&it.rebindTextures(I,st.get(I.texture).__webglTexture,st.get(I.depthTexture).__webglTexture);const Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ne=!0);const $e=st.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($e[Z])?ee=$e[Z][se]:ee=$e[Z],be=!0):I.samples>0&&it.useMultisampledRTT(I)===!1?ee=st.get(I).__webglMultisampledFramebuffer:Array.isArray($e)?ee=$e[se]:ee=$e,L.copy(I.viewport),V.copy(I.scissor),X=I.scissorTest}else L.copy(Re).multiplyScalar(ie).floor(),V.copy(Ae).multiplyScalar(ie).floor(),X=ht;if(qe.bindFramebuffer(G.FRAMEBUFFER,ee)&&oe&&qe.drawBuffers(I,ee),qe.viewport(L),qe.scissor(V),qe.setScissorTest(X),be){const ke=st.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ke.__webglTexture,se)}else if(Ne){const ke=st.get(I.texture),Je=Z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,se||0,Je)}q=-1},this.readRenderTargetPixels=function(I,Z,se,oe,ee,be,Ne){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=st.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie){qe.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const ke=I.texture,Je=ke.format,$e=ke.type;if(!Lt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-oe&&se>=0&&se<=I.height-ee&&G.readPixels(Z,se,oe,ee,nt.convert(Je),nt.convert($e),be)}finally{const ke=U!==null?st.get(U).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(I,Z,se,oe,ee,be,Ne){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=st.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne]),Ie){qe.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const ke=I.texture,Je=ke.format,$e=ke.type;if(!Lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=I.width-oe&&se>=0&&se<=I.height-ee){const Ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.bufferData(G.PIXEL_PACK_BUFFER,be.byteLength,G.STREAM_READ),G.readPixels(Z,se,oe,ee,nt.convert(Je),nt.convert($e),0),G.flush();const At=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);await Ng(G,At,4);try{G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,be)}finally{G.deleteBuffer(Ye),G.deleteSync(At)}return be}}finally{const ke=U!==null?st.get(U).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(I,Z=null,se=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1]);const oe=Math.pow(2,-se),ee=Math.floor(I.image.width*oe),be=Math.floor(I.image.height*oe),Ne=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;it.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ne,Ie,ee,be),qe.unbindTexture()},this.copyTextureToTexture=function(I,Z,se=null,oe=null,ee=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,I=arguments[1],Z=arguments[2],ee=arguments[3]||0,se=null);let be,Ne,Ie,ke,Je,$e;se!==null?(be=se.max.x-se.min.x,Ne=se.max.y-se.min.y,Ie=se.min.x,ke=se.min.y):(be=I.image.width,Ne=I.image.height,Ie=0,ke=0),oe!==null?(Je=oe.x,$e=oe.y):(Je=0,$e=0);const Ye=nt.convert(Z.format),At=nt.convert(Z.type);it.setTexture2D(Z,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Gt=G.getParameter(G.UNPACK_ROW_LENGTH),Ht=G.getParameter(G.UNPACK_IMAGE_HEIGHT),mi=G.getParameter(G.UNPACK_SKIP_PIXELS),Mt=G.getParameter(G.UNPACK_SKIP_ROWS),We=G.getParameter(G.UNPACK_SKIP_IMAGES),Pt=I.isCompressedTexture?I.mipmaps[ee]:I.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Pt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ie),G.pixelStorei(G.UNPACK_SKIP_ROWS,ke),I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ee,Je,$e,be,Ne,Ye,At,Pt.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ee,Je,$e,Pt.width,Pt.height,Ye,Pt.data):G.texSubImage2D(G.TEXTURE_2D,ee,Je,$e,be,Ne,Ye,At,Pt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht),G.pixelStorei(G.UNPACK_SKIP_PIXELS,mi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We),ee===0&&Z.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,se=null,oe=null,ee=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,I=arguments[2],Z=arguments[3],ee=arguments[4]||0);let be,Ne,Ie,ke,Je,$e,Ye,At,Gt;const Ht=I.isCompressedTexture?I.mipmaps[ee]:I.image;se!==null?(be=se.max.x-se.min.x,Ne=se.max.y-se.min.y,Ie=se.max.z-se.min.z,ke=se.min.x,Je=se.min.y,$e=se.min.z):(be=Ht.width,Ne=Ht.height,Ie=Ht.depth,ke=0,Je=0,$e=0),oe!==null?(Ye=oe.x,At=oe.y,Gt=oe.z):(Ye=0,At=0,Gt=0);const mi=nt.convert(Z.format),Mt=nt.convert(Z.type);let We;if(Z.isData3DTexture)it.setTexture3D(Z,0),We=G.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)it.setTexture2DArray(Z,0),We=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Pt=G.getParameter(G.UNPACK_ROW_LENGTH),Tt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),fi=G.getParameter(G.UNPACK_SKIP_PIXELS),is=G.getParameter(G.UNPACK_SKIP_ROWS),wi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$e),I.isDataTexture||I.isData3DTexture?G.texSubImage3D(We,ee,Ye,At,Gt,be,Ne,Ie,mi,Mt,Ht.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(We,ee,Ye,At,Gt,be,Ne,Ie,mi,Ht.data):G.texSubImage3D(We,ee,Ye,At,Gt,be,Ne,Ie,mi,Mt,Ht),G.pixelStorei(G.UNPACK_ROW_LENGTH,Pt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,fi),G.pixelStorei(G.UNPACK_SKIP_ROWS,is),G.pixelStorei(G.UNPACK_SKIP_IMAGES,wi),ee===0&&Z.generateMipmaps&&G.generateMipmap(We),qe.unbindTexture()},this.initRenderTarget=function(I){st.get(I).__webglFramebuffer===void 0&&it.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?it.setTextureCube(I,0):I.isData3DTexture?it.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?it.setTexture2DArray(I,0):it.setTexture2D(I,0),qe.unbindTexture()},this.resetState=function(){g=0,F=0,U=null,qe.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===au?"display-p3":"srgb",t.unpackColorSpace=Nt.workingColorSpace===Fl?"display-p3":"srgb"}}class Wv extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);const u=i[n],f=i[n+1]-u,m=(o-u)/f;return(n+m)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),l=t||(o.isVector2?new Qe:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new M,n=[],s=[],o=[],a=new M,l=new oi;for(let m=0;m<=e;m++){const y=m/e;n[m]=this.getTangentAt(y,new M)}s[0]=new M,o[0]=new M;let h=Number.MAX_VALUE;const u=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=h&&(h=u,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Mi(n[m-1].dot(n[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,y))}o[m].crossVectors(n[m],s[m])}if(t===!0){let m=Math.acos(Mi(s[0].dot(s[e]),-1,1));m/=e,n[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(n[y],m*y)),o[y].crossVectors(n[y],s[y])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Op extends In{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Qe){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=h-this.aY;l=f*u-m*d+this.aX,h=f*d+m*u+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xv extends Op{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function du(){let r=0,e=0,t=0,i=0;function n(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){n(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,u,d){let f=(o-s)/h-(a-s)/(h+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,m*=u,n(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+i*a}}}const Wa=new M,Rc=new du,Cc=new du,Lc=new du;class oa extends In{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new M){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,u;this.closed||a>0?h=n[(a-1)%s]:(Wa.subVectors(n[0],n[1]).add(n[0]),h=Wa);const d=n[a%s],f=n[(a+1)%s];if(this.closed||a+2<s?u=n[(a+2)%s]:(Wa.subVectors(n[s-1],n[s-2]).add(n[s-1]),u=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(d),m),w=Math.pow(d.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(u),m);w<1e-4&&(w=1),y<1e-4&&(y=w),x<1e-4&&(x=w),Rc.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,y,w,x),Cc.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,y,w,x),Lc.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,y,w,x)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),Cc.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),Lc.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return i.set(Rc.calc(l),Cc.calc(l),Lc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new M().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hd(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,a=r*r,l=r*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*r+t}function qv(r,e){const t=1-r;return t*t*e}function jv(r,e){return 2*(1-r)*r*e}function $v(r,e){return r*r*e}function zo(r,e,t,i){return qv(r,e)+jv(r,t)+$v(r,i)}function Yv(r,e){const t=1-r;return t*t*t*e}function Kv(r,e){const t=1-r;return 3*t*t*r*e}function Jv(r,e){return 3*(1-r)*r*r*e}function Zv(r,e){return r*r*r*e}function ko(r,e,t,i,n){return Yv(r,e)+Kv(r,t)+Jv(r,i)+Zv(r,n)}class Qv extends In{constructor(e=new Qe,t=new Qe,i=new Qe,n=new Qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Qe){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,n.x,s.x,o.x,a.x),ko(e,n.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bp extends In{constructor(e=new M,t=new M,i=new M,n=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new M){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,n.x,s.x,o.x,a.x),ko(e,n.y,s.y,o.y,a.y),ko(e,n.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fu extends In{constructor(e=new Qe,t=new Qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Qe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Qe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eM extends In{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tM extends In{constructor(e=new Qe,t=new Qe,i=new Qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Qe){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,n.x,s.x,o.x),zo(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends In{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,n.x,s.x,o.x),zo(e,n.y,s.y,o.y),zo(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iM extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Qe){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],h=n[o],u=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Hd(a,l.x,h.x,u.x,d.x),Hd(a,l.y,h.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Qe().fromArray(n))}return this}}const Vh=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:Xv,CatmullRomCurve3:oa,CubicBezierCurve:Qv,CubicBezierCurve3:Bp,EllipseCurve:Op,LineCurve:fu,LineCurve3:eM,QuadraticBezierCurve:tM,QuadraticBezierCurve3:zp,SplineCurve:iM},Symbol.toStringTag,{value:"Module"}));class nM extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){const u=l[h];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Vh[n.type]().fromJSON(n))}return this}}class pu extends ro{constructor(e=new zp(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new M,l=new M,h=new Qe;let u=new M;const d=[],f=[],m=[],y=[];w(),this.setIndex(y),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(f,3)),this.setAttribute("uv",new Ln(m,2));function w(){for(let T=0;T<t;T++)x(T);x(s===!1?t:0),D(),v()}function x(T){u=e.getPointAt(T/t,u);const C=o.normals[T],g=o.binormals[T];for(let F=0;F<=n;F++){const U=F/n*Math.PI*2,q=Math.sin(U),N=-Math.cos(U);l.x=N*C.x+q*g.x,l.y=N*C.y+q*g.y,l.z=N*C.z+q*g.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function v(){for(let T=1;T<=t;T++)for(let C=1;C<=n;C++){const g=(n+1)*(T-1)+(C-1),F=(n+1)*T+(C-1),U=(n+1)*T+C,q=(n+1)*(T-1)+C;y.push(g,F,q),y.push(F,U,q)}}function D(){for(let T=0;T<=t;T++)for(let C=0;C<=n;C++)h.x=T/t,h.y=C/n,m.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pu(new Vh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}let sM=class extends na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rM=class{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&n.onStart!==void 0&&n.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const m=h[d],y=h[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}},kp=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};const Pc=new oi,Vd=new M,Gd=new M;let oM=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new oi,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cu,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new pi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gd),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aM=class extends oM{constructor(){super(new hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lM=class extends kp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class cM extends kp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wd(){return(typeof performance>"u"?Date:performance).now()}(function(r,e){typeof eu=="object"&&typeof Xo<"u"?e(eu):typeof define=="function"&&define.amd?define(["exports"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r.FootronMessaging={}))})(void 0,function(r){function e(X,O){for(var j=0;j<O.length;j++){var z=O[j];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(X,z.key,z)}}function t(X,O,j){return O&&e(X.prototype,O),X}function i(){return i=Object.assign||function(X){for(var O=1;O<arguments.length;O++){var j=arguments[O];for(var z in j)Object.prototype.hasOwnProperty.call(j,z)&&(X[z]=j[z])}return X},i.apply(this,arguments)}function n(X,O){X.prototype=Object.create(O.prototype),X.prototype.constructor=X,o(X,O)}function s(X){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},s(X)}function o(X,O){return o=Object.setPrototypeOf||function(z,$){return z.__proto__=$,z},o(X,O)}function a(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function l(X,O,j){return a()?l=Reflect.construct:l=function($,ie,Q){var me=[null];me.push.apply(me,ie);var Re=Function.bind.apply($,me),Ae=new Re;return Q&&o(Ae,Q.prototype),Ae},l.apply(null,arguments)}function h(X){return Function.toString.call(X).indexOf("[native code]")!==-1}function u(X){var O=typeof Map=="function"?new Map:void 0;return u=function(z){if(z===null||!h(z))return z;if(typeof z!="function")throw new TypeError("Super expression must either be null or a function");if(typeof O<"u"){if(O.has(z))return O.get(z);O.set(z,$)}function $(){return l(z,arguments,s(this).constructor)}return $.prototype=Object.create(z.prototype,{constructor:{value:$,enumerable:!1,writable:!0,configurable:!0}}),o($,z)},u(X)}function d(X){if(X===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return X}var f=1,m;(function(X){X.HeartbeatApp="ahb",X.HeartbeatClient="chb",X.Connect="con",X.Access="acc",X.ApplicationClient="cap",X.ApplicationApp="app",X.Error="err",X.DisplaySettings="dse",X.Lifecycle="lcy"})(m||(m={}));var y=function(X){n(O,X);function O(j){var z;return z=X.call(this,j)||this,Object.setPrototypeOf(d(z),O.prototype),z}return O}(u(Error));function w(){}function x(X,O){return X&&X.then?X.then(w):Promise.resolve()}function v(X){var O=X();if(O&&O.then)return O.then(w)}function D(X,O,j){return(!X||!X.then)&&(X=Promise.resolve(X)),O?X.then(O):X}var T=function(){function X(j){this.impl=j}var O=X.prototype;return O.getId=function(){return this.impl.id},O.isPaused=function(){return this.impl.paused},O.accept=function(){try{var z=this;return z.impl.accept()}catch($){return Promise.reject($)}},O.sendMessage=function(z,$){try{var ie=this;return ie.impl.sendMessage(z,$)}catch(Q){return Promise.reject(Q)}},O.addMessageListener=function(z){this.impl.addMessageListener(z)},O.removeMessageListener=function(z){this.impl.removeMessageListener(z)},O.addCloseListener=function(z){this.impl.addCloseListener(z)},O.removeCloseListener=function(z){this.impl.removeCloseListener(z)},X}(),C=function(){function X(j,z,$,ie,Q){Q===void 0&&(Q=!1),this.id=j,this.sendProtocolMessage=ie,this.accepted=z,this.messagingClient=$,this.paused=Q,this.messageListeners=new Set,this.closeListeners=new Set}var O=X.prototype;return O.accept=function(){try{var z=this;return D(z.updateAccess(!0),function(){return v(function(){if(!z.messagingClient.hasInitialState)return x(z.sendEmptyInitialMessage())})})}catch($){return Promise.reject($)}},O.deny=function(z){try{var $=this;return x($.updateAccess(!1,z))}catch(ie){return Promise.reject(ie)}},O.updateAccess=function(z,$){try{var ie=this;if(!ie.messagingClient.lock)throw new y("locked");return D(ie.sendProtocolMessage({type:m.Access,accepted:z,reason:$}),function(){ie.accepted=!0})}catch(Q){return Promise.reject(Q)}},O.sendMessage=function(z,$){try{var ie=this;if(!ie.accepted)throw new Error("client not accepted");return ie.paused?void 0:x(ie.sendProtocolMessage({type:m.ApplicationApp,body:z,req:$,client:ie.id}))}catch(Q){return Promise.reject(Q)}},O.sendEmptyInitialMessage=function(){try{var z=this;return x(z.sendMessage({__start:""}))}catch($){return Promise.reject($)}},O.addMessageListener=function(z){this.messageListeners.add(z)},O.removeMessageListener=function(z){this.messageListeners.delete(z)},O.clearMessageListener=function(){this.messageListeners.clear()},O.notifyMessageListeners=function(z){this.messageListeners.forEach(function($){return $(z)})},O.addCloseListener=function(z){this.closeListeners.add(z)},O.removeCloseListener=function(z){this.closeListeners.delete(z)},O.clearCloseListeners=function(){this.closeListeners.clear()},O.notifyCloseListeners=function(){this.closeListeners.forEach(function(z){return z()})},X}(),g=function(O,j){this.body=O,this.id=j};function F(X,O,j){return(!X||!X.then)&&(X=Promise.resolve(X)),O?X.then(O):X}function U(X,O){var j=X();return j&&j.then?j.then(O):O(j)}function q(){}function N(X,O){return X&&X.then?X.then(q):Promise.resolve()}var L=function(){function X(j,z){z===void 0&&(z=!1),this.url=j,this.connections=new Map,this.connectionListeners=new Set,this.messageListeners=new Set,this._lock=!1,this.hasInitialState=z,this._status="idle",this.bindMethods()}var O=X.prototype;return O.bindMethods=function(){this.sendMessage=this.sendMessage.bind(this),this.addMessageListener=this.addMessageListener.bind(this),this.removeMessageListener=this.removeMessageListener.bind(this),this.sendProtocolMessage=this.sendProtocolMessage.bind(this)},O.setLock=function(z){try{var $=this;return F($.sendProtocolMessage({type:m.DisplaySettings,settings:{lock:z}}),function(){$._lock=z})}catch(ie){return Promise.reject(ie)}},O.mount=function(){this._status="loading",this.openSocket()},O.unmount=function(){this.close()},O.close=function(){this._status!="closed"&&(this.closeSocket(),this.clearMessageListeners(),this.clearConnectionListeners())},O.openSocket=function(){var z=this;this.socket=new WebSocket(this.url),this.socket.addEventListener("message",function($){var ie=$.data;return z.onMessage(ie)}),this.socket.addEventListener("open",function(){return z._status="open"}),this.socket.addEventListener("close",this.onSocketClose)},O.closeSocket=function(){this.socket!==void 0&&(this.socket.removeEventListener("close",this.onSocketClose),this.socket.close())},O.onSocketClose=function(){setTimeout(this.openSocket,1e3)},O.socketReady=function(){try{var z=!1,$=this;return $.socket===void 0?!1:$.socket.readyState==WebSocket.OPEN?!0:U(function(){if($.socket.readyState==WebSocket.CONNECTING)return F(new Promise(function(ie,Q){if($.socket===void 0){Q(new Error("Socket was set to undefined during CONNECTING state; this is probably a bug"));return}var me=function(){Ae(),ie()},Re=function(){Ae(),Q(new Error("Socket closed during CONNECTING state; it may have timed out"))},Ae=function(){var yt,he;(yt=$.socket)==null||yt.removeEventListener("open",me),(he=$.socket)==null||he.removeEventListener("close",Re)};$.socket.addEventListener("open",me),$.socket.addEventListener("close",Re)}),function(){return z=!0,!0})},function(ie){return z?ie:!1})}catch(ie){return Promise.reject(ie)}},X.parseMessage=function(z){var $;try{$=JSON.parse(z)}catch(ie){throw console.error("An error occurred while attempting to parse a Controls message"),ie}if(!("type"in $)||typeof $.type!="string")throw Error("Message received from router didn't specify valid type");return $},O.onMessage=function(z){try{var $=!1,ie=this,Q=X.parseMessage(z);return U(function(){if(Q.type==m.HeartbeatClient){if(!Q.up){Q.clients.forEach(function(me){return ie.removeConnection(me)}),$=!0;return}return F(ie.compareHeartbeatUpConnections(Q.clients),function(){$=!0})}},function(me){var Re=!1;if($)return me;if(!("client"in Q)||typeof Q.client!="string")throw Error("Incoming message of type '"+Q.type+"' doesn't contain valid 'client' field required by all remaining message handlers");return U(function(){if(Q.type==m.Connect){var Ae=ie.connections.get(Q.client);return Ae||(Ae=ie.addConnection(Q.client)),U(function(){if(!ie.hasInitialState&&Ae.accepted)return N(Ae.sendEmptyInitialMessage())},function(){Re=!0})}},function(Ae){if(Re)return Ae;if(!ie.connections.has(Q.client))throw Error("Unauthorized client '"+Q.client+"' attempted to send an authenticated message");if(Q.type==m.ApplicationClient){var ht,yt=Q.req==null?Q.body:new g(Q.body,Q.req);ie.notifyMessageListeners(yt),(ht=ie.connections.get(Q.client))==null||ht.notifyMessageListeners(yt);return}if(Q.type==m.Lifecycle){var he=ie.connections.get(Q.client);if(!he)return;he.paused=Q.paused;return}throw Error("Couldn't handle message type '"+Q.type+"'")})})}catch(me){return Promise.reject(me)}},O.compareHeartbeatUpConnections=function(z){var $=this,ie=new Set(this.connections.keys()),Q=new Set(z);Array.from(Q.keys()).forEach(function(me){if(ie.has(me)){Q.delete(me),ie.delete(me);return}$.addConnection(me)}),Array.from(ie.keys()).forEach(function(me){if(Q.has(me)){Q.delete(me),ie.delete(me);return}$.removeConnection(me)})},O.sendMessage=function(z,$){this.connections.forEach(function(ie){return ie.sendMessage(z,$)})},O.addConnection=function(z){var $=new C(z,!this._lock,this,this.sendProtocolMessage);return this.connections.set(z,$),this.notifyConnectionListeners($),$},O.removeConnection=function(z){var $,ie;this.connections.has(z)&&(($=this.connections)==null||(ie=$.get(z))==null||ie.notifyCloseListeners(),this.connections.delete(z))},O.sendProtocolMessage=function(z){try{var $=!1,ie=this;return F(ie.socketReady(),function(Q){var me;if(!Q)throw Error("Couldn't send protocol message because socket isn't available");(me=ie.socket)==null||me.send(JSON.stringify(i({},z,{version:f})))})}catch(Q){return Promise.reject(Q)}},O.addMessageListener=function(z){this.messageListeners.add(z)},O.removeMessageListener=function(z){this.messageListeners.delete(z)},O.clearMessageListeners=function(){this.messageListeners.clear()},O.notifyMessageListeners=function(z){this.messageListeners.forEach(function($){return $(z)})},O.addConnectionListener=function(z){this.connectionListeners.add(z)},O.removeConnectionListener=function(z){this.connectionListeners.delete(z)},O.clearConnectionListeners=function(){this.connectionListeners.clear()},O.notifyConnectionListeners=function(z){this.connectionListeners.forEach(function($){$(new T(z))})},t(X,[{key:"lock",get:function(){return this._lock}},{key:"status",get:function(){return this._status}}]),X}(),V=function(X){n(O,X);function O(j){if(j==null){var z;j=(z=new URLSearchParams(location.search).get("ftMsgUrl"))!=null?z:"ws://localhost:8089/out"}return X.call(this,j)||this}return O}(L);r.Connection=T,r.Messaging=V,Object.defineProperty(r,"__esModule",{value:!0})});/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */(function(r,e){typeof Xo=="object"&&typeof Xo.exports=="object"?Xo.exports=r.document?e(r,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(r)})(typeof window<"u"?window:void 0,function(r,e){var t=[],i=Object.getPrototypeOf,n=t.slice,s=t.flat?function(c){return t.flat.call(c)}:function(c){return t.concat.apply([],c)},o=t.push,a=t.indexOf,l={},h=l.toString,u=l.hasOwnProperty,d=u.toString,f=d.call(Object),m={},y=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},w=function(c){return c!=null&&c===c.window},x=r.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function D(c,p,_){var S,b,E=(_=_||x).createElement("script");if(E.text=c,p)for(S in v)(b=p[S]||p.getAttribute&&p.getAttribute(S))&&E.setAttribute(S,b);_.head.appendChild(E).parentNode.removeChild(E)}function T(c){return c==null?c+"":typeof c=="object"||typeof c=="function"?l[h.call(c)]||"object":typeof c}var C="3.6.0",g=function(c,p){return new g.fn.init(c,p)};function F(c){var p=!!c&&"length"in c&&c.length,_=T(c);return!y(c)&&!w(c)&&(_==="array"||p===0||typeof p=="number"&&0<p&&p-1 in c)}g.fn=g.prototype={jquery:C,constructor:g,length:0,toArray:function(){return n.call(this)},get:function(c){return c==null?n.call(this):c<0?this[c+this.length]:this[c]},pushStack:function(c){var p=g.merge(this.constructor(),c);return p.prevObject=this,p},each:function(c){return g.each(this,c)},map:function(c){return this.pushStack(g.map(this,function(p,_){return c.call(p,_,p)}))},slice:function(){return this.pushStack(n.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(g.grep(this,function(c,p){return(p+1)%2}))},odd:function(){return this.pushStack(g.grep(this,function(c,p){return p%2}))},eq:function(c){var p=this.length,_=+c+(c<0?p:0);return this.pushStack(0<=_&&_<p?[this[_]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:t.sort,splice:t.splice},g.extend=g.fn.extend=function(){var c,p,_,S,b,E,R=arguments[0]||{},H=1,W=arguments.length,J=!1;for(typeof R=="boolean"&&(J=R,R=arguments[H]||{},H++),typeof R=="object"||y(R)||(R={}),H===W&&(R=this,H--);H<W;H++)if((c=arguments[H])!=null)for(p in c)S=c[p],p!=="__proto__"&&R!==S&&(J&&S&&(g.isPlainObject(S)||(b=Array.isArray(S)))?(_=R[p],E=b&&!Array.isArray(_)?[]:b||g.isPlainObject(_)?_:{},b=!1,R[p]=g.extend(J,E,S)):S!==void 0&&(R[p]=S));return R},g.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(c){throw new Error(c)},noop:function(){},isPlainObject:function(c){var p,_;return!(!c||h.call(c)!=="[object Object]")&&(!(p=i(c))||typeof(_=u.call(p,"constructor")&&p.constructor)=="function"&&d.call(_)===f)},isEmptyObject:function(c){var p;for(p in c)return!1;return!0},globalEval:function(c,p,_){D(c,{nonce:p&&p.nonce},_)},each:function(c,p){var _,S=0;if(F(c))for(_=c.length;S<_&&p.call(c[S],S,c[S])!==!1;S++);else for(S in c)if(p.call(c[S],S,c[S])===!1)break;return c},makeArray:function(c,p){var _=p||[];return c!=null&&(F(Object(c))?g.merge(_,typeof c=="string"?[c]:c):o.call(_,c)),_},inArray:function(c,p,_){return p==null?-1:a.call(p,c,_)},merge:function(c,p){for(var _=+p.length,S=0,b=c.length;S<_;S++)c[b++]=p[S];return c.length=b,c},grep:function(c,p,_){for(var S=[],b=0,E=c.length,R=!_;b<E;b++)!p(c[b],b)!==R&&S.push(c[b]);return S},map:function(c,p,_){var S,b,E=0,R=[];if(F(c))for(S=c.length;E<S;E++)(b=p(c[E],E,_))!=null&&R.push(b);else for(E in c)(b=p(c[E],E,_))!=null&&R.push(b);return s(R)},guid:1,support:m}),typeof Symbol=="function"&&(g.fn[Symbol.iterator]=t[Symbol.iterator]),g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(c,p){l["[object "+p+"]"]=p.toLowerCase()});var U=function(c){var p,_,S,b,E,R,H,W,J,ae,pe,ne,le,Be,Xe,Ve,Xt,ni,Di,Ot="sizzle"+1*new Date,at=c.document,Ci=0,Et=0,qt=ma(),vo=ma(),da=ma(),Ni=ma(),Rs=function(P,k){return P===k&&(pe=!0),0},sr={}.hasOwnProperty,Li=[],rr=Li.pop,$i=Li.push,jt=Li.push,Ui=Li.slice,Fi=function(P,k){for(var Y=0,de=P.length;Y<de;Y++)if(P[Y]===k)return Y;return-1},Sn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ct="[\\x20\\t\\r\\n\\f]",Rt="(?:\\\\[\\da-fA-F]{1,6}"+ct+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",si="\\["+ct+"*("+Rt+")(?:"+ct+"*([*^$|!~]?=)"+ct+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Rt+"))|)"+ct+"*\\]",Oi=":("+Rt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+si+")*)|.*)\\)|)",Zt=new RegExp(ct+"+","g"),Bi=new RegExp("^"+ct+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ct+"+$","g"),or=new RegExp("^"+ct+"*,"+ct+"*"),fa=new RegExp("^"+ct+"*([>+~]|"+ct+")"+ct+"*"),Tm=new RegExp(ct+"|>"),Em=new RegExp(Oi),Am=new RegExp("^"+Rt+"$"),pa={ID:new RegExp("^#("+Rt+")"),CLASS:new RegExp("^\\.("+Rt+")"),TAG:new RegExp("^("+Rt+"|[*])"),ATTR:new RegExp("^"+si),PSEUDO:new RegExp("^"+Oi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ct+"*(even|odd|(([+-]|)(\\d*)n|)"+ct+"*(?:([+-]|)"+ct+"*(\\d+)|))"+ct+"*\\)|)","i"),bool:new RegExp("^(?:"+Sn+")$","i"),needsContext:new RegExp("^"+ct+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ct+"*((?:-\\d)?\\d*)"+ct+"*\\)|)(?=[^-]|$)","i")},Rm=/HTML$/i,Cm=/^(?:input|select|textarea|button)$/i,Lm=/^h\d$/i,Mo=/^[^{]+\{\s*\[native \w/,Pm=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$l=/[+~]/,Fn=new RegExp("\\\\[\\da-fA-F]{1,6}"+ct+"?|\\\\([^\\r\\n\\f])","g"),On=function(P,k){var Y="0x"+P.slice(1)-65536;return k||(Y<0?String.fromCharCode(Y+65536):String.fromCharCode(Y>>10|55296,1023&Y|56320))},Ou=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Bu=function(P,k){return k?P==="\0"?"�":P.slice(0,-1)+"\\"+P.charCodeAt(P.length-1).toString(16)+" ":"\\"+P},zu=function(){ne()},Im=xa(function(P){return P.disabled===!0&&P.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{jt.apply(Li=Ui.call(at.childNodes),at.childNodes),Li[at.childNodes.length].nodeType}catch{jt={apply:Li.length?function(k,Y){$i.apply(k,Ui.call(Y))}:function(k,Y){for(var de=k.length,te=0;k[de++]=Y[te++];);k.length=de-1}}}function Bt(P,k,Y,de){var te,ge,ye,Ee,Ue,rt,Ze,et=k&&k.ownerDocument,St=k?k.nodeType:9;if(Y=Y||[],typeof P!="string"||!P||St!==1&&St!==9&&St!==11)return Y;if(!de&&(ne(k),k=k||le,Xe)){if(St!==11&&(Ue=Pm.exec(P)))if(te=Ue[1]){if(St===9){if(!(ye=k.getElementById(te)))return Y;if(ye.id===te)return Y.push(ye),Y}else if(et&&(ye=et.getElementById(te))&&Di(k,ye)&&ye.id===te)return Y.push(ye),Y}else{if(Ue[2])return jt.apply(Y,k.getElementsByTagName(P)),Y;if((te=Ue[3])&&_.getElementsByClassName&&k.getElementsByClassName)return jt.apply(Y,k.getElementsByClassName(te)),Y}if(_.qsa&&!Ni[P+" "]&&(!Ve||!Ve.test(P))&&(St!==1||k.nodeName.toLowerCase()!=="object")){if(Ze=P,et=k,St===1&&(Tm.test(P)||fa.test(P))){for((et=$l.test(P)&&Kl(k.parentNode)||k)===k&&_.scope||((Ee=k.getAttribute("id"))?Ee=Ee.replace(Ou,Bu):k.setAttribute("id",Ee=Ot)),ge=(rt=R(P)).length;ge--;)rt[ge]=(Ee?"#"+Ee:":scope")+" "+ga(rt[ge]);Ze=rt.join(",")}try{return jt.apply(Y,et.querySelectorAll(Ze)),Y}catch{Ni(P,!0)}finally{Ee===Ot&&k.removeAttribute("id")}}}return W(P.replace(Bi,"$1"),k,Y,de)}function ma(){var P=[];return function k(Y,de){return P.push(Y+" ")>S.cacheLength&&delete k[P.shift()],k[Y+" "]=de}}function on(P){return P[Ot]=!0,P}function an(P){var k=le.createElement("fieldset");try{return!!P(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function Yl(P,k){for(var Y=P.split("|"),de=Y.length;de--;)S.attrHandle[Y[de]]=k}function ku(P,k){var Y=k&&P,de=Y&&P.nodeType===1&&k.nodeType===1&&P.sourceIndex-k.sourceIndex;if(de)return de;if(Y){for(;Y=Y.nextSibling;)if(Y===k)return-1}return P?1:-1}function Dm(P){return function(k){return k.nodeName.toLowerCase()==="input"&&k.type===P}}function Nm(P){return function(k){var Y=k.nodeName.toLowerCase();return(Y==="input"||Y==="button")&&k.type===P}}function Hu(P){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===P:k.disabled===P:k.isDisabled===P||k.isDisabled!==!P&&Im(k)===P:k.disabled===P:"label"in k&&k.disabled===P}}function Cs(P){return on(function(k){return k=+k,on(function(Y,de){for(var te,ge=P([],Y.length,k),ye=ge.length;ye--;)Y[te=ge[ye]]&&(Y[te]=!(de[te]=Y[te]))})})}function Kl(P){return P&&typeof P.getElementsByTagName<"u"&&P}for(p in _=Bt.support={},E=Bt.isXML=function(P){var k=P&&P.namespaceURI,Y=P&&(P.ownerDocument||P).documentElement;return!Rm.test(k||Y&&Y.nodeName||"HTML")},ne=Bt.setDocument=function(P){var k,Y,de=P?P.ownerDocument||P:at;return de!=le&&de.nodeType===9&&de.documentElement&&(Be=(le=de).documentElement,Xe=!E(le),at!=le&&(Y=le.defaultView)&&Y.top!==Y&&(Y.addEventListener?Y.addEventListener("unload",zu,!1):Y.attachEvent&&Y.attachEvent("onunload",zu)),_.scope=an(function(te){return Be.appendChild(te).appendChild(le.createElement("div")),typeof te.querySelectorAll<"u"&&!te.querySelectorAll(":scope fieldset div").length}),_.attributes=an(function(te){return te.className="i",!te.getAttribute("className")}),_.getElementsByTagName=an(function(te){return te.appendChild(le.createComment("")),!te.getElementsByTagName("*").length}),_.getElementsByClassName=Mo.test(le.getElementsByClassName),_.getById=an(function(te){return Be.appendChild(te).id=Ot,!le.getElementsByName||!le.getElementsByName(Ot).length}),_.getById?(S.filter.ID=function(te){var ge=te.replace(Fn,On);return function(ye){return ye.getAttribute("id")===ge}},S.find.ID=function(te,ge){if(typeof ge.getElementById<"u"&&Xe){var ye=ge.getElementById(te);return ye?[ye]:[]}}):(S.filter.ID=function(te){var ge=te.replace(Fn,On);return function(ye){var Ee=typeof ye.getAttributeNode<"u"&&ye.getAttributeNode("id");return Ee&&Ee.value===ge}},S.find.ID=function(te,ge){if(typeof ge.getElementById<"u"&&Xe){var ye,Ee,Ue,rt=ge.getElementById(te);if(rt){if((ye=rt.getAttributeNode("id"))&&ye.value===te)return[rt];for(Ue=ge.getElementsByName(te),Ee=0;rt=Ue[Ee++];)if((ye=rt.getAttributeNode("id"))&&ye.value===te)return[rt]}return[]}}),S.find.TAG=_.getElementsByTagName?function(te,ge){return typeof ge.getElementsByTagName<"u"?ge.getElementsByTagName(te):_.qsa?ge.querySelectorAll(te):void 0}:function(te,ge){var ye,Ee=[],Ue=0,rt=ge.getElementsByTagName(te);if(te==="*"){for(;ye=rt[Ue++];)ye.nodeType===1&&Ee.push(ye);return Ee}return rt},S.find.CLASS=_.getElementsByClassName&&function(te,ge){if(typeof ge.getElementsByClassName<"u"&&Xe)return ge.getElementsByClassName(te)},Xt=[],Ve=[],(_.qsa=Mo.test(le.querySelectorAll))&&(an(function(te){var ge;Be.appendChild(te).innerHTML="<a id='"+Ot+"'></a><select id='"+Ot+"-\r\\' msallowcapture=''><option selected=''></option></select>",te.querySelectorAll("[msallowcapture^='']").length&&Ve.push("[*^$]="+ct+`*(?:''|"")`),te.querySelectorAll("[selected]").length||Ve.push("\\["+ct+"*(?:value|"+Sn+")"),te.querySelectorAll("[id~="+Ot+"-]").length||Ve.push("~="),(ge=le.createElement("input")).setAttribute("name",""),te.appendChild(ge),te.querySelectorAll("[name='']").length||Ve.push("\\["+ct+"*name"+ct+"*="+ct+`*(?:''|"")`),te.querySelectorAll(":checked").length||Ve.push(":checked"),te.querySelectorAll("a#"+Ot+"+*").length||Ve.push(".#.+[+~]"),te.querySelectorAll("\\\f"),Ve.push("[\\r\\n\\f]")}),an(function(te){te.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ge=le.createElement("input");ge.setAttribute("type","hidden"),te.appendChild(ge).setAttribute("name","D"),te.querySelectorAll("[name=d]").length&&Ve.push("name"+ct+"*[*^$|!~]?="),te.querySelectorAll(":enabled").length!==2&&Ve.push(":enabled",":disabled"),Be.appendChild(te).disabled=!0,te.querySelectorAll(":disabled").length!==2&&Ve.push(":enabled",":disabled"),te.querySelectorAll("*,:x"),Ve.push(",.*:")})),(_.matchesSelector=Mo.test(ni=Be.matches||Be.webkitMatchesSelector||Be.mozMatchesSelector||Be.oMatchesSelector||Be.msMatchesSelector))&&an(function(te){_.disconnectedMatch=ni.call(te,"*"),ni.call(te,"[s!='']:x"),Xt.push("!=",Oi)}),Ve=Ve.length&&new RegExp(Ve.join("|")),Xt=Xt.length&&new RegExp(Xt.join("|")),k=Mo.test(Be.compareDocumentPosition),Di=k||Mo.test(Be.contains)?function(te,ge){var ye=te.nodeType===9?te.documentElement:te,Ee=ge&&ge.parentNode;return te===Ee||!(!Ee||Ee.nodeType!==1||!(ye.contains?ye.contains(Ee):te.compareDocumentPosition&&16&te.compareDocumentPosition(Ee)))}:function(te,ge){if(ge){for(;ge=ge.parentNode;)if(ge===te)return!0}return!1},Rs=k?function(te,ge){if(te===ge)return pe=!0,0;var ye=!te.compareDocumentPosition-!ge.compareDocumentPosition;return ye||(1&(ye=(te.ownerDocument||te)==(ge.ownerDocument||ge)?te.compareDocumentPosition(ge):1)||!_.sortDetached&&ge.compareDocumentPosition(te)===ye?te==le||te.ownerDocument==at&&Di(at,te)?-1:ge==le||ge.ownerDocument==at&&Di(at,ge)?1:ae?Fi(ae,te)-Fi(ae,ge):0:4&ye?-1:1)}:function(te,ge){if(te===ge)return pe=!0,0;var ye,Ee=0,Ue=te.parentNode,rt=ge.parentNode,Ze=[te],et=[ge];if(!Ue||!rt)return te==le?-1:ge==le?1:Ue?-1:rt?1:ae?Fi(ae,te)-Fi(ae,ge):0;if(Ue===rt)return ku(te,ge);for(ye=te;ye=ye.parentNode;)Ze.unshift(ye);for(ye=ge;ye=ye.parentNode;)et.unshift(ye);for(;Ze[Ee]===et[Ee];)Ee++;return Ee?ku(Ze[Ee],et[Ee]):Ze[Ee]==at?-1:et[Ee]==at?1:0}),le},Bt.matches=function(P,k){return Bt(P,null,null,k)},Bt.matchesSelector=function(P,k){if(ne(P),_.matchesSelector&&Xe&&!Ni[k+" "]&&(!Xt||!Xt.test(k))&&(!Ve||!Ve.test(k)))try{var Y=ni.call(P,k);if(Y||_.disconnectedMatch||P.document&&P.document.nodeType!==11)return Y}catch{Ni(k,!0)}return 0<Bt(k,le,null,[P]).length},Bt.contains=function(P,k){return(P.ownerDocument||P)!=le&&ne(P),Di(P,k)},Bt.attr=function(P,k){(P.ownerDocument||P)!=le&&ne(P);var Y=S.attrHandle[k.toLowerCase()],de=Y&&sr.call(S.attrHandle,k.toLowerCase())?Y(P,k,!Xe):void 0;return de!==void 0?de:_.attributes||!Xe?P.getAttribute(k):(de=P.getAttributeNode(k))&&de.specified?de.value:null},Bt.escape=function(P){return(P+"").replace(Ou,Bu)},Bt.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)},Bt.uniqueSort=function(P){var k,Y=[],de=0,te=0;if(pe=!_.detectDuplicates,ae=!_.sortStable&&P.slice(0),P.sort(Rs),pe){for(;k=P[te++];)k===P[te]&&(de=Y.push(te));for(;de--;)P.splice(Y[de],1)}return ae=null,P},b=Bt.getText=function(P){var k,Y="",de=0,te=P.nodeType;if(te){if(te===1||te===9||te===11){if(typeof P.textContent=="string")return P.textContent;for(P=P.firstChild;P;P=P.nextSibling)Y+=b(P)}else if(te===3||te===4)return P.nodeValue}else for(;k=P[de++];)Y+=b(k);return Y},(S=Bt.selectors={cacheLength:50,createPseudo:on,match:pa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(P){return P[1]=P[1].replace(Fn,On),P[3]=(P[3]||P[4]||P[5]||"").replace(Fn,On),P[2]==="~="&&(P[3]=" "+P[3]+" "),P.slice(0,4)},CHILD:function(P){return P[1]=P[1].toLowerCase(),P[1].slice(0,3)==="nth"?(P[3]||Bt.error(P[0]),P[4]=+(P[4]?P[5]+(P[6]||1):2*(P[3]==="even"||P[3]==="odd")),P[5]=+(P[7]+P[8]||P[3]==="odd")):P[3]&&Bt.error(P[0]),P},PSEUDO:function(P){var k,Y=!P[6]&&P[2];return pa.CHILD.test(P[0])?null:(P[3]?P[2]=P[4]||P[5]||"":Y&&Em.test(Y)&&(k=R(Y,!0))&&(k=Y.indexOf(")",Y.length-k)-Y.length)&&(P[0]=P[0].slice(0,k),P[2]=Y.slice(0,k)),P.slice(0,3))}},filter:{TAG:function(P){var k=P.replace(Fn,On).toLowerCase();return P==="*"?function(){return!0}:function(Y){return Y.nodeName&&Y.nodeName.toLowerCase()===k}},CLASS:function(P){var k=qt[P+" "];return k||(k=new RegExp("(^|"+ct+")"+P+"("+ct+"|$)"))&&qt(P,function(Y){return k.test(typeof Y.className=="string"&&Y.className||typeof Y.getAttribute<"u"&&Y.getAttribute("class")||"")})},ATTR:function(P,k,Y){return function(de){var te=Bt.attr(de,P);return te==null?k==="!=":!k||(te+="",k==="="?te===Y:k==="!="?te!==Y:k==="^="?Y&&te.indexOf(Y)===0:k==="*="?Y&&-1<te.indexOf(Y):k==="$="?Y&&te.slice(-Y.length)===Y:k==="~="?-1<(" "+te.replace(Zt," ")+" ").indexOf(Y):k==="|="&&(te===Y||te.slice(0,Y.length+1)===Y+"-"))}},CHILD:function(P,k,Y,de,te){var ge=P.slice(0,3)!=="nth",ye=P.slice(-4)!=="last",Ee=k==="of-type";return de===1&&te===0?function(Ue){return!!Ue.parentNode}:function(Ue,rt,Ze){var et,St,Kt,dt,ri,hi,Ti=ge!==ye?"nextSibling":"previousSibling",zt=Ue.parentNode,wn=Ee&&Ue.nodeName.toLowerCase(),gi=!Ze&&!Ee,Qt=!1;if(zt){if(ge){for(;Ti;){for(dt=Ue;dt=dt[Ti];)if(Ee?dt.nodeName.toLowerCase()===wn:dt.nodeType===1)return!1;hi=Ti=P==="only"&&!hi&&"nextSibling"}return!0}if(hi=[ye?zt.firstChild:zt.lastChild],ye&&gi){for(Qt=(ri=(et=(St=(Kt=(dt=zt)[Ot]||(dt[Ot]={}))[dt.uniqueID]||(Kt[dt.uniqueID]={}))[P]||[])[0]===Ci&&et[1])&&et[2],dt=ri&&zt.childNodes[ri];dt=++ri&&dt&&dt[Ti]||(Qt=ri=0)||hi.pop();)if(dt.nodeType===1&&++Qt&&dt===Ue){St[P]=[Ci,ri,Qt];break}}else if(gi&&(Qt=ri=(et=(St=(Kt=(dt=Ue)[Ot]||(dt[Ot]={}))[dt.uniqueID]||(Kt[dt.uniqueID]={}))[P]||[])[0]===Ci&&et[1]),Qt===!1)for(;(dt=++ri&&dt&&dt[Ti]||(Qt=ri=0)||hi.pop())&&!((Ee?dt.nodeName.toLowerCase()===wn:dt.nodeType===1)&&++Qt&&(gi&&((St=(Kt=dt[Ot]||(dt[Ot]={}))[dt.uniqueID]||(Kt[dt.uniqueID]={}))[P]=[Ci,Qt]),dt===Ue)););return(Qt-=te)===de||Qt%de==0&&0<=Qt/de}}},PSEUDO:function(P,k){var Y,de=S.pseudos[P]||S.setFilters[P.toLowerCase()]||Bt.error("unsupported pseudo: "+P);return de[Ot]?de(k):1<de.length?(Y=[P,P,"",k],S.setFilters.hasOwnProperty(P.toLowerCase())?on(function(te,ge){for(var ye,Ee=de(te,k),Ue=Ee.length;Ue--;)te[ye=Fi(te,Ee[Ue])]=!(ge[ye]=Ee[Ue])}):function(te){return de(te,0,Y)}):de}},pseudos:{not:on(function(P){var k=[],Y=[],de=H(P.replace(Bi,"$1"));return de[Ot]?on(function(te,ge,ye,Ee){for(var Ue,rt=de(te,null,Ee,[]),Ze=te.length;Ze--;)(Ue=rt[Ze])&&(te[Ze]=!(ge[Ze]=Ue))}):function(te,ge,ye){return k[0]=te,de(k,null,ye,Y),k[0]=null,!Y.pop()}}),has:on(function(P){return function(k){return 0<Bt(P,k).length}}),contains:on(function(P){return P=P.replace(Fn,On),function(k){return-1<(k.textContent||b(k)).indexOf(P)}}),lang:on(function(P){return Am.test(P||"")||Bt.error("unsupported lang: "+P),P=P.replace(Fn,On).toLowerCase(),function(k){var Y;do if(Y=Xe?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return(Y=Y.toLowerCase())===P||Y.indexOf(P+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(P){var k=c.location&&c.location.hash;return k&&k.slice(1)===P.id},root:function(P){return P===Be},focus:function(P){return P===le.activeElement&&(!le.hasFocus||le.hasFocus())&&!!(P.type||P.href||~P.tabIndex)},enabled:Hu(!1),disabled:Hu(!0),checked:function(P){var k=P.nodeName.toLowerCase();return k==="input"&&!!P.checked||k==="option"&&!!P.selected},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},empty:function(P){for(P=P.firstChild;P;P=P.nextSibling)if(P.nodeType<6)return!1;return!0},parent:function(P){return!S.pseudos.empty(P)},header:function(P){return Lm.test(P.nodeName)},input:function(P){return Cm.test(P.nodeName)},button:function(P){var k=P.nodeName.toLowerCase();return k==="input"&&P.type==="button"||k==="button"},text:function(P){var k;return P.nodeName.toLowerCase()==="input"&&P.type==="text"&&((k=P.getAttribute("type"))==null||k.toLowerCase()==="text")},first:Cs(function(){return[0]}),last:Cs(function(P,k){return[k-1]}),eq:Cs(function(P,k,Y){return[Y<0?Y+k:Y]}),even:Cs(function(P,k){for(var Y=0;Y<k;Y+=2)P.push(Y);return P}),odd:Cs(function(P,k){for(var Y=1;Y<k;Y+=2)P.push(Y);return P}),lt:Cs(function(P,k,Y){for(var de=Y<0?Y+k:k<Y?k:Y;0<=--de;)P.push(de);return P}),gt:Cs(function(P,k,Y){for(var de=Y<0?Y+k:Y;++de<k;)P.push(de);return P})}}).pseudos.nth=S.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[p]=Dm(p);for(p in{submit:!0,reset:!0})S.pseudos[p]=Nm(p);function Vu(){}function ga(P){for(var k=0,Y=P.length,de="";k<Y;k++)de+=P[k].value;return de}function xa(P,k,Y){var de=k.dir,te=k.next,ge=te||de,ye=Y&&ge==="parentNode",Ee=Et++;return k.first?function(Ue,rt,Ze){for(;Ue=Ue[de];)if(Ue.nodeType===1||ye)return P(Ue,rt,Ze);return!1}:function(Ue,rt,Ze){var et,St,Kt,dt=[Ci,Ee];if(Ze){for(;Ue=Ue[de];)if((Ue.nodeType===1||ye)&&P(Ue,rt,Ze))return!0}else for(;Ue=Ue[de];)if(Ue.nodeType===1||ye)if(St=(Kt=Ue[Ot]||(Ue[Ot]={}))[Ue.uniqueID]||(Kt[Ue.uniqueID]={}),te&&te===Ue.nodeName.toLowerCase())Ue=Ue[de]||Ue;else{if((et=St[ge])&&et[0]===Ci&&et[1]===Ee)return dt[2]=et[2];if((St[ge]=dt)[2]=P(Ue,rt,Ze))return!0}return!1}}function Jl(P){return 1<P.length?function(k,Y,de){for(var te=P.length;te--;)if(!P[te](k,Y,de))return!1;return!0}:P[0]}function _a(P,k,Y,de,te){for(var ge,ye=[],Ee=0,Ue=P.length,rt=k!=null;Ee<Ue;Ee++)(ge=P[Ee])&&(Y&&!Y(ge,de,te)||(ye.push(ge),rt&&k.push(Ee)));return ye}function Zl(P,k,Y,de,te,ge){return de&&!de[Ot]&&(de=Zl(de)),te&&!te[Ot]&&(te=Zl(te,ge)),on(function(ye,Ee,Ue,rt){var Ze,et,St,Kt=[],dt=[],ri=Ee.length,hi=ye||function(wn,gi,Qt){for(var ln=0,ya=gi.length;ln<ya;ln++)Bt(wn,gi[ln],Qt);return Qt}(k||"*",Ue.nodeType?[Ue]:Ue,[]),Ti=!P||!ye&&k?hi:_a(hi,Kt,P,Ue,rt),zt=Y?te||(ye?P:ri||de)?[]:Ee:Ti;if(Y&&Y(Ti,zt,Ue,rt),de)for(Ze=_a(zt,dt),de(Ze,[],Ue,rt),et=Ze.length;et--;)(St=Ze[et])&&(zt[dt[et]]=!(Ti[dt[et]]=St));if(ye){if(te||P){if(te){for(Ze=[],et=zt.length;et--;)(St=zt[et])&&Ze.push(Ti[et]=St);te(null,zt=[],Ze,rt)}for(et=zt.length;et--;)(St=zt[et])&&-1<(Ze=te?Fi(ye,St):Kt[et])&&(ye[Ze]=!(Ee[Ze]=St))}}else zt=_a(zt===Ee?zt.splice(ri,zt.length):zt),te?te(null,Ee,zt,rt):jt.apply(Ee,zt)})}function Ql(P){for(var k,Y,de,te=P.length,ge=S.relative[P[0].type],ye=ge||S.relative[" "],Ee=ge?1:0,Ue=xa(function(et){return et===k},ye,!0),rt=xa(function(et){return-1<Fi(k,et)},ye,!0),Ze=[function(et,St,Kt){var dt=!ge&&(Kt||St!==J)||((k=St).nodeType?Ue(et,St,Kt):rt(et,St,Kt));return k=null,dt}];Ee<te;Ee++)if(Y=S.relative[P[Ee].type])Ze=[xa(Jl(Ze),Y)];else{if((Y=S.filter[P[Ee].type].apply(null,P[Ee].matches))[Ot]){for(de=++Ee;de<te&&!S.relative[P[de].type];de++);return Zl(1<Ee&&Jl(Ze),1<Ee&&ga(P.slice(0,Ee-1).concat({value:P[Ee-2].type===" "?"*":""})).replace(Bi,"$1"),Y,Ee<de&&Ql(P.slice(Ee,de)),de<te&&Ql(P=P.slice(de)),de<te&&ga(P))}Ze.push(Y)}return Jl(Ze)}return Vu.prototype=S.filters=S.pseudos,S.setFilters=new Vu,R=Bt.tokenize=function(P,k){var Y,de,te,ge,ye,Ee,Ue,rt=vo[P+" "];if(rt)return k?0:rt.slice(0);for(ye=P,Ee=[],Ue=S.preFilter;ye;){for(ge in Y&&!(de=or.exec(ye))||(de&&(ye=ye.slice(de[0].length)||ye),Ee.push(te=[])),Y=!1,(de=fa.exec(ye))&&(Y=de.shift(),te.push({value:Y,type:de[0].replace(Bi," ")}),ye=ye.slice(Y.length)),S.filter)!(de=pa[ge].exec(ye))||Ue[ge]&&!(de=Ue[ge](de))||(Y=de.shift(),te.push({value:Y,type:ge,matches:de}),ye=ye.slice(Y.length));if(!Y)break}return k?ye.length:ye?Bt.error(P):vo(P,Ee).slice(0)},H=Bt.compile=function(P,k){var Y,de,te,ge,ye,Ee,Ue=[],rt=[],Ze=da[P+" "];if(!Ze){for(k||(k=R(P)),Y=k.length;Y--;)(Ze=Ql(k[Y]))[Ot]?Ue.push(Ze):rt.push(Ze);(Ze=da(P,(de=rt,ge=0<(te=Ue).length,ye=0<de.length,Ee=function(et,St,Kt,dt,ri){var hi,Ti,zt,wn=0,gi="0",Qt=et&&[],ln=[],ya=J,Gu=et||ye&&S.find.TAG("*",ri),Wu=Ci+=ya==null?1:Math.random()||.1,Um=Gu.length;for(ri&&(J=St==le||St||ri);gi!==Um&&(hi=Gu[gi])!=null;gi++){if(ye&&hi){for(Ti=0,St||hi.ownerDocument==le||(ne(hi),Kt=!Xe);zt=de[Ti++];)if(zt(hi,St||le,Kt)){dt.push(hi);break}ri&&(Ci=Wu)}ge&&((hi=!zt&&hi)&&wn--,et&&Qt.push(hi))}if(wn+=gi,ge&&gi!==wn){for(Ti=0;zt=te[Ti++];)zt(Qt,ln,St,Kt);if(et){if(0<wn)for(;gi--;)Qt[gi]||ln[gi]||(ln[gi]=rr.call(dt));ln=_a(ln)}jt.apply(dt,ln),ri&&!et&&0<ln.length&&1<wn+te.length&&Bt.uniqueSort(dt)}return ri&&(Ci=Wu,J=ya),Qt},ge?on(Ee):Ee))).selector=P}return Ze},W=Bt.select=function(P,k,Y,de){var te,ge,ye,Ee,Ue,rt=typeof P=="function"&&P,Ze=!de&&R(P=rt.selector||P);if(Y=Y||[],Ze.length===1){if(2<(ge=Ze[0]=Ze[0].slice(0)).length&&(ye=ge[0]).type==="ID"&&k.nodeType===9&&Xe&&S.relative[ge[1].type]){if(!(k=(S.find.ID(ye.matches[0].replace(Fn,On),k)||[])[0]))return Y;rt&&(k=k.parentNode),P=P.slice(ge.shift().value.length)}for(te=pa.needsContext.test(P)?0:ge.length;te--&&(ye=ge[te],!S.relative[Ee=ye.type]);)if((Ue=S.find[Ee])&&(de=Ue(ye.matches[0].replace(Fn,On),$l.test(ge[0].type)&&Kl(k.parentNode)||k))){if(ge.splice(te,1),!(P=de.length&&ga(ge)))return jt.apply(Y,de),Y;break}}return(rt||H(P,Ze))(de,k,!Xe,Y,!k||$l.test(P)&&Kl(k.parentNode)||k),Y},_.sortStable=Ot.split("").sort(Rs).join("")===Ot,_.detectDuplicates=!!pe,ne(),_.sortDetached=an(function(P){return 1&P.compareDocumentPosition(le.createElement("fieldset"))}),an(function(P){return P.innerHTML="<a href='#'></a>",P.firstChild.getAttribute("href")==="#"})||Yl("type|href|height|width",function(P,k,Y){if(!Y)return P.getAttribute(k,k.toLowerCase()==="type"?1:2)}),_.attributes&&an(function(P){return P.innerHTML="<input/>",P.firstChild.setAttribute("value",""),P.firstChild.getAttribute("value")===""})||Yl("value",function(P,k,Y){if(!Y&&P.nodeName.toLowerCase()==="input")return P.defaultValue}),an(function(P){return P.getAttribute("disabled")==null})||Yl(Sn,function(P,k,Y){var de;if(!Y)return P[k]===!0?k.toLowerCase():(de=P.getAttributeNode(k))&&de.specified?de.value:null}),Bt}(r);g.find=U,g.expr=U.selectors,g.expr[":"]=g.expr.pseudos,g.uniqueSort=g.unique=U.uniqueSort,g.text=U.getText,g.isXMLDoc=U.isXML,g.contains=U.contains,g.escapeSelector=U.escape;var q=function(c,p,_){for(var S=[],b=_!==void 0;(c=c[p])&&c.nodeType!==9;)if(c.nodeType===1){if(b&&g(c).is(_))break;S.push(c)}return S},N=function(c,p){for(var _=[];c;c=c.nextSibling)c.nodeType===1&&c!==p&&_.push(c);return _},L=g.expr.match.needsContext;function V(c,p){return c.nodeName&&c.nodeName.toLowerCase()===p.toLowerCase()}var X=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function O(c,p,_){return y(p)?g.grep(c,function(S,b){return!!p.call(S,b,S)!==_}):p.nodeType?g.grep(c,function(S){return S===p!==_}):typeof p!="string"?g.grep(c,function(S){return-1<a.call(p,S)!==_}):g.filter(p,c,_)}g.filter=function(c,p,_){var S=p[0];return _&&(c=":not("+c+")"),p.length===1&&S.nodeType===1?g.find.matchesSelector(S,c)?[S]:[]:g.find.matches(c,g.grep(p,function(b){return b.nodeType===1}))},g.fn.extend({find:function(c){var p,_,S=this.length,b=this;if(typeof c!="string")return this.pushStack(g(c).filter(function(){for(p=0;p<S;p++)if(g.contains(b[p],this))return!0}));for(_=this.pushStack([]),p=0;p<S;p++)g.find(c,b[p],_);return 1<S?g.uniqueSort(_):_},filter:function(c){return this.pushStack(O(this,c||[],!1))},not:function(c){return this.pushStack(O(this,c||[],!0))},is:function(c){return!!O(this,typeof c=="string"&&L.test(c)?g(c):c||[],!1).length}});var j,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(g.fn.init=function(c,p,_){var S,b;if(!c)return this;if(_=_||j,typeof c=="string"){if(!(S=c[0]==="<"&&c[c.length-1]===">"&&3<=c.length?[null,c,null]:z.exec(c))||!S[1]&&p)return!p||p.jquery?(p||_).find(c):this.constructor(p).find(c);if(S[1]){if(p=p instanceof g?p[0]:p,g.merge(this,g.parseHTML(S[1],p&&p.nodeType?p.ownerDocument||p:x,!0)),X.test(S[1])&&g.isPlainObject(p))for(S in p)y(this[S])?this[S](p[S]):this.attr(S,p[S]);return this}return(b=x.getElementById(S[2]))&&(this[0]=b,this.length=1),this}return c.nodeType?(this[0]=c,this.length=1,this):y(c)?_.ready!==void 0?_.ready(c):c(g):g.makeArray(c,this)}).prototype=g.fn,j=g(x);var $=/^(?:parents|prev(?:Until|All))/,ie={children:!0,contents:!0,next:!0,prev:!0};function Q(c,p){for(;(c=c[p])&&c.nodeType!==1;);return c}g.fn.extend({has:function(c){var p=g(c,this),_=p.length;return this.filter(function(){for(var S=0;S<_;S++)if(g.contains(this,p[S]))return!0})},closest:function(c,p){var _,S=0,b=this.length,E=[],R=typeof c!="string"&&g(c);if(!L.test(c)){for(;S<b;S++)for(_=this[S];_&&_!==p;_=_.parentNode)if(_.nodeType<11&&(R?-1<R.index(_):_.nodeType===1&&g.find.matchesSelector(_,c))){E.push(_);break}}return this.pushStack(1<E.length?g.uniqueSort(E):E)},index:function(c){return c?typeof c=="string"?a.call(g(c),this[0]):a.call(this,c.jquery?c[0]:c):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(c,p){return this.pushStack(g.uniqueSort(g.merge(this.get(),g(c,p))))},addBack:function(c){return this.add(c==null?this.prevObject:this.prevObject.filter(c))}}),g.each({parent:function(c){var p=c.parentNode;return p&&p.nodeType!==11?p:null},parents:function(c){return q(c,"parentNode")},parentsUntil:function(c,p,_){return q(c,"parentNode",_)},next:function(c){return Q(c,"nextSibling")},prev:function(c){return Q(c,"previousSibling")},nextAll:function(c){return q(c,"nextSibling")},prevAll:function(c){return q(c,"previousSibling")},nextUntil:function(c,p,_){return q(c,"nextSibling",_)},prevUntil:function(c,p,_){return q(c,"previousSibling",_)},siblings:function(c){return N((c.parentNode||{}).firstChild,c)},children:function(c){return N(c.firstChild)},contents:function(c){return c.contentDocument!=null&&i(c.contentDocument)?c.contentDocument:(V(c,"template")&&(c=c.content||c),g.merge([],c.childNodes))}},function(c,p){g.fn[c]=function(_,S){var b=g.map(this,p,_);return c.slice(-5)!=="Until"&&(S=_),S&&typeof S=="string"&&(b=g.filter(S,b)),1<this.length&&(ie[c]||g.uniqueSort(b),$.test(c)&&b.reverse()),this.pushStack(b)}});var me=/[^\x20\t\r\n\f]+/g;function Re(c){return c}function Ae(c){throw c}function ht(c,p,_,S){var b;try{c&&y(b=c.promise)?b.call(c).done(p).fail(_):c&&y(b=c.then)?b.call(c,p,_):p.apply(void 0,[c].slice(S))}catch(E){_.apply(void 0,[E])}}g.Callbacks=function(c){var p,_;c=typeof c=="string"?(p=c,_={},g.each(p.match(me)||[],function(ne,le){_[le]=!0}),_):g.extend({},c);var S,b,E,R,H=[],W=[],J=-1,ae=function(){for(R=R||c.once,E=S=!0;W.length;J=-1)for(b=W.shift();++J<H.length;)H[J].apply(b[0],b[1])===!1&&c.stopOnFalse&&(J=H.length,b=!1);c.memory||(b=!1),S=!1,R&&(H=b?[]:"")},pe={add:function(){return H&&(b&&!S&&(J=H.length-1,W.push(b)),function ne(le){g.each(le,function(Be,Xe){y(Xe)?c.unique&&pe.has(Xe)||H.push(Xe):Xe&&Xe.length&&T(Xe)!=="string"&&ne(Xe)})}(arguments),b&&!S&&ae()),this},remove:function(){return g.each(arguments,function(ne,le){for(var Be;-1<(Be=g.inArray(le,H,Be));)H.splice(Be,1),Be<=J&&J--}),this},has:function(ne){return ne?-1<g.inArray(ne,H):0<H.length},empty:function(){return H&&(H=[]),this},disable:function(){return R=W=[],H=b="",this},disabled:function(){return!H},lock:function(){return R=W=[],b||S||(H=b=""),this},locked:function(){return!!R},fireWith:function(ne,le){return R||(le=[ne,(le=le||[]).slice?le.slice():le],W.push(le),S||ae()),this},fire:function(){return pe.fireWith(this,arguments),this},fired:function(){return!!E}};return pe},g.extend({Deferred:function(c){var p=[["notify","progress",g.Callbacks("memory"),g.Callbacks("memory"),2],["resolve","done",g.Callbacks("once memory"),g.Callbacks("once memory"),0,"resolved"],["reject","fail",g.Callbacks("once memory"),g.Callbacks("once memory"),1,"rejected"]],_="pending",S={state:function(){return _},always:function(){return b.done(arguments).fail(arguments),this},catch:function(E){return S.then(null,E)},pipe:function(){var E=arguments;return g.Deferred(function(R){g.each(p,function(H,W){var J=y(E[W[4]])&&E[W[4]];b[W[1]](function(){var ae=J&&J.apply(this,arguments);ae&&y(ae.promise)?ae.promise().progress(R.notify).done(R.resolve).fail(R.reject):R[W[0]+"With"](this,J?[ae]:arguments)})}),E=null}).promise()},then:function(E,R,H){var W=0;function J(ae,pe,ne,le){return function(){var Be=this,Xe=arguments,Ve=function(){var ni,Di;if(!(ae<W)){if((ni=ne.apply(Be,Xe))===pe.promise())throw new TypeError("Thenable self-resolution");Di=ni&&(typeof ni=="object"||typeof ni=="function")&&ni.then,y(Di)?le?Di.call(ni,J(W,pe,Re,le),J(W,pe,Ae,le)):(W++,Di.call(ni,J(W,pe,Re,le),J(W,pe,Ae,le),J(W,pe,Re,pe.notifyWith))):(ne!==Re&&(Be=void 0,Xe=[ni]),(le||pe.resolveWith)(Be,Xe))}},Xt=le?Ve:function(){try{Ve()}catch(ni){g.Deferred.exceptionHook&&g.Deferred.exceptionHook(ni,Xt.stackTrace),W<=ae+1&&(ne!==Ae&&(Be=void 0,Xe=[ni]),pe.rejectWith(Be,Xe))}};ae?Xt():(g.Deferred.getStackHook&&(Xt.stackTrace=g.Deferred.getStackHook()),r.setTimeout(Xt))}}return g.Deferred(function(ae){p[0][3].add(J(0,ae,y(H)?H:Re,ae.notifyWith)),p[1][3].add(J(0,ae,y(E)?E:Re)),p[2][3].add(J(0,ae,y(R)?R:Ae))}).promise()},promise:function(E){return E!=null?g.extend(E,S):S}},b={};return g.each(p,function(E,R){var H=R[2],W=R[5];S[R[1]]=H.add,W&&H.add(function(){_=W},p[3-E][2].disable,p[3-E][3].disable,p[0][2].lock,p[0][3].lock),H.add(R[3].fire),b[R[0]]=function(){return b[R[0]+"With"](this===b?void 0:this,arguments),this},b[R[0]+"With"]=H.fireWith}),S.promise(b),c&&c.call(b,b),b},when:function(c){var p=arguments.length,_=p,S=Array(_),b=n.call(arguments),E=g.Deferred(),R=function(H){return function(W){S[H]=this,b[H]=1<arguments.length?n.call(arguments):W,--p||E.resolveWith(S,b)}};if(p<=1&&(ht(c,E.done(R(_)).resolve,E.reject,!p),E.state()==="pending"||y(b[_]&&b[_].then)))return E.then();for(;_--;)ht(b[_],R(_),E.reject);return E.promise()}});var yt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;g.Deferred.exceptionHook=function(c,p){r.console&&r.console.warn&&c&&yt.test(c.name)&&r.console.warn("jQuery.Deferred exception: "+c.message,c.stack,p)},g.readyException=function(c){r.setTimeout(function(){throw c})};var he=g.Deferred();function Se(){x.removeEventListener("DOMContentLoaded",Se),r.removeEventListener("load",Se),g.ready()}g.fn.ready=function(c){return he.then(c).catch(function(p){g.readyException(p)}),this},g.extend({isReady:!1,readyWait:1,ready:function(c){(c===!0?--g.readyWait:g.isReady)||(g.isReady=!0)!==c&&0<--g.readyWait||he.resolveWith(x,[g])}}),g.ready.then=he.then,x.readyState==="complete"||x.readyState!=="loading"&&!x.documentElement.doScroll?r.setTimeout(g.ready):(x.addEventListener("DOMContentLoaded",Se),r.addEventListener("load",Se));var Fe=function(c,p,_,S,b,E,R){var H=0,W=c.length,J=_==null;if(T(_)==="object")for(H in b=!0,_)Fe(c,p,H,_[H],!0,E,R);else if(S!==void 0&&(b=!0,y(S)||(R=!0),J&&(R?(p.call(c,S),p=null):(J=p,p=function(ae,pe,ne){return J.call(g(ae),ne)})),p))for(;H<W;H++)p(c[H],_,R?S:S.call(c[H],H,p(c[H],_)));return b?c:J?p.call(c):W?p(c[0],_):E},He=/^-ms-/,ut=/-([a-z])/g;function ft(c,p){return p.toUpperCase()}function tt(c){return c.replace(He,"ms-").replace(ut,ft)}var Ut=function(c){return c.nodeType===1||c.nodeType===9||!+c.nodeType};function G(){this.expando=g.expando+G.uid++}G.uid=1,G.prototype={cache:function(c){var p=c[this.expando];return p||(p={},Ut(c)&&(c.nodeType?c[this.expando]=p:Object.defineProperty(c,this.expando,{value:p,configurable:!0}))),p},set:function(c,p,_){var S,b=this.cache(c);if(typeof p=="string")b[tt(p)]=_;else for(S in p)b[tt(S)]=p[S];return b},get:function(c,p){return p===void 0?this.cache(c):c[this.expando]&&c[this.expando][tt(p)]},access:function(c,p,_){return p===void 0||p&&typeof p=="string"&&_===void 0?this.get(c,p):(this.set(c,p,_),_!==void 0?_:p)},remove:function(c,p){var _,S=c[this.expando];if(S!==void 0){if(p!==void 0)for(_=(p=Array.isArray(p)?p.map(tt):(p=tt(p))in S?[p]:p.match(me)||[]).length;_--;)delete S[p[_]];(p===void 0||g.isEmptyObject(S))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var p=c[this.expando];return p!==void 0&&!g.isEmptyObject(p)}};var Oe=new G,lt=new G,Lt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,qe=/[A-Z]/g;function Wt(c,p,_){var S,b;if(_===void 0&&c.nodeType===1)if(S="data-"+p.replace(qe,"-$&").toLowerCase(),typeof(_=c.getAttribute(S))=="string"){try{_=(b=_)==="true"||b!=="false"&&(b==="null"?null:b===+b+""?+b:Lt.test(b)?JSON.parse(b):b)}catch{}lt.set(c,p,_)}else _=void 0;return _}g.extend({hasData:function(c){return lt.hasData(c)||Oe.hasData(c)},data:function(c,p,_){return lt.access(c,p,_)},removeData:function(c,p){lt.remove(c,p)},_data:function(c,p,_){return Oe.access(c,p,_)},_removeData:function(c,p){Oe.remove(c,p)}}),g.fn.extend({data:function(c,p){var _,S,b,E=this[0],R=E&&E.attributes;if(c===void 0){if(this.length&&(b=lt.get(E),E.nodeType===1&&!Oe.get(E,"hasDataAttrs"))){for(_=R.length;_--;)R[_]&&(S=R[_].name).indexOf("data-")===0&&(S=tt(S.slice(5)),Wt(E,S,b[S]));Oe.set(E,"hasDataAttrs",!0)}return b}return typeof c=="object"?this.each(function(){lt.set(this,c)}):Fe(this,function(H){var W;if(E&&H===void 0)return(W=lt.get(E,c))!==void 0||(W=Wt(E,c))!==void 0?W:void 0;this.each(function(){lt.set(this,c,H)})},null,p,1<arguments.length,null,!0)},removeData:function(c){return this.each(function(){lt.remove(this,c)})}}),g.extend({queue:function(c,p,_){var S;if(c)return p=(p||"fx")+"queue",S=Oe.get(c,p),_&&(!S||Array.isArray(_)?S=Oe.access(c,p,g.makeArray(_)):S.push(_)),S||[]},dequeue:function(c,p){p=p||"fx";var _=g.queue(c,p),S=_.length,b=_.shift(),E=g._queueHooks(c,p);b==="inprogress"&&(b=_.shift(),S--),b&&(p==="fx"&&_.unshift("inprogress"),delete E.stop,b.call(c,function(){g.dequeue(c,p)},E)),!S&&E&&E.empty.fire()},_queueHooks:function(c,p){var _=p+"queueHooks";return Oe.get(c,_)||Oe.access(c,_,{empty:g.Callbacks("once memory").add(function(){Oe.remove(c,[p+"queue",_])})})}}),g.fn.extend({queue:function(c,p){var _=2;return typeof c!="string"&&(p=c,c="fx",_--),arguments.length<_?g.queue(this[0],c):p===void 0?this:this.each(function(){var S=g.queue(this,c,p);g._queueHooks(this,c),c==="fx"&&S[0]!=="inprogress"&&g.dequeue(this,c)})},dequeue:function(c){return this.each(function(){g.dequeue(this,c)})},clearQueue:function(c){return this.queue(c||"fx",[])},promise:function(c,p){var _,S=1,b=g.Deferred(),E=this,R=this.length,H=function(){--S||b.resolveWith(E,[E])};for(typeof c!="string"&&(p=c,c=void 0),c=c||"fx";R--;)(_=Oe.get(E[R],c+"queueHooks"))&&_.empty&&(S++,_.empty.add(H));return H(),b.promise(p)}});var st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,it=new RegExp("^(?:([+-])=|)("+st+")([a-z%]*)$","i"),B=["Top","Right","Bottom","Left"],A=x.documentElement,re=function(c){return g.contains(c.ownerDocument,c)},_e={composed:!0};A.getRootNode&&(re=function(c){return g.contains(c.ownerDocument,c)||c.getRootNode(_e)===c.ownerDocument});var ve=function(c,p){return(c=p||c).style.display==="none"||c.style.display===""&&re(c)&&g.css(c,"display")==="none"};function xe(c,p,_,S){var b,E,R=20,H=S?function(){return S.cur()}:function(){return g.css(c,p,"")},W=H(),J=_&&_[3]||(g.cssNumber[p]?"":"px"),ae=c.nodeType&&(g.cssNumber[p]||J!=="px"&&+W)&&it.exec(g.css(c,p));if(ae&&ae[3]!==J){for(W/=2,J=J||ae[3],ae=+W||1;R--;)g.style(c,p,ae+J),(1-E)*(1-(E=H()/W||.5))<=0&&(R=0),ae/=E;ae*=2,g.style(c,p,ae+J),_=_||[]}return _&&(ae=+ae||+W||0,b=_[1]?ae+(_[1]+1)*_[2]:+_[2],S&&(S.unit=J,S.start=ae,S.end=b)),b}var je={};function Ce(c,p){for(var _,S,b,E,R,H,W,J=[],ae=0,pe=c.length;ae<pe;ae++)(S=c[ae]).style&&(_=S.style.display,p?(_==="none"&&(J[ae]=Oe.get(S,"display")||null,J[ae]||(S.style.display="")),S.style.display===""&&ve(S)&&(J[ae]=(W=R=E=void 0,R=(b=S).ownerDocument,H=b.nodeName,(W=je[H])||(E=R.body.appendChild(R.createElement(H)),W=g.css(E,"display"),E.parentNode.removeChild(E),W==="none"&&(W="block"),je[H]=W)))):_!=="none"&&(J[ae]="none",Oe.set(S,"display",_)));for(ae=0;ae<pe;ae++)J[ae]!=null&&(c[ae].style.display=J[ae]);return c}g.fn.extend({show:function(){return Ce(this,!0)},hide:function(){return Ce(this)},toggle:function(c){return typeof c=="boolean"?c?this.show():this.hide():this.each(function(){ve(this)?g(this).show():g(this).hide()})}});var De,ot,we=/^(?:checkbox|radio)$/i,ze=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,xt=/^$|^module$|\/(?:java|ecma)script/i;De=x.createDocumentFragment().appendChild(x.createElement("div")),(ot=x.createElement("input")).setAttribute("type","radio"),ot.setAttribute("checked","checked"),ot.setAttribute("name","t"),De.appendChild(ot),m.checkClone=De.cloneNode(!0).cloneNode(!0).lastChild.checked,De.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!De.cloneNode(!0).lastChild.defaultValue,De.innerHTML="<option></option>",m.option=!!De.lastChild;var Ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Le(c,p){var _;return _=typeof c.getElementsByTagName<"u"?c.getElementsByTagName(p||"*"):typeof c.querySelectorAll<"u"?c.querySelectorAll(p||"*"):[],p===void 0||p&&V(c,p)?g.merge([c],_):_}function nt(c,p){for(var _=0,S=c.length;_<S;_++)Oe.set(c[_],"globalEval",!p||Oe.get(p[_],"globalEval"))}Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead,Ge.th=Ge.td,m.option||(Ge.optgroup=Ge.option=[1,"<select multiple='multiple'>","</select>"]);var pt=/<|&#?\w+;/;function kt(c,p,_,S,b){for(var E,R,H,W,J,ae,pe=p.createDocumentFragment(),ne=[],le=0,Be=c.length;le<Be;le++)if((E=c[le])||E===0)if(T(E)==="object")g.merge(ne,E.nodeType?[E]:E);else if(pt.test(E)){for(R=R||pe.appendChild(p.createElement("div")),H=(ze.exec(E)||["",""])[1].toLowerCase(),W=Ge[H]||Ge._default,R.innerHTML=W[1]+g.htmlPrefilter(E)+W[2],ae=W[0];ae--;)R=R.lastChild;g.merge(ne,R.childNodes),(R=pe.firstChild).textContent=""}else ne.push(p.createTextNode(E));for(pe.textContent="",le=0;E=ne[le++];)if(S&&-1<g.inArray(E,S))b&&b.push(E);else if(J=re(E),R=Le(pe.appendChild(E),"script"),J&&nt(R),_)for(ae=0;E=R[ae++];)xt.test(E.type||"")&&_.push(E);return pe}var K=/^([^.]*)(?:\.(.+)|)/;function Me(){return!0}function ue(){return!1}function fe(c,p){return c===function(){try{return x.activeElement}catch{}}()==(p==="focus")}function Te(c,p,_,S,b,E){var R,H;if(typeof p=="object"){for(H in typeof _!="string"&&(S=S||_,_=void 0),p)Te(c,H,_,S,p[H],E);return c}if(S==null&&b==null?(b=_,S=_=void 0):b==null&&(typeof _=="string"?(b=S,S=void 0):(b=S,S=_,_=void 0)),b===!1)b=ue;else if(!b)return c;return E===1&&(R=b,(b=function(W){return g().off(W),R.apply(this,arguments)}).guid=R.guid||(R.guid=g.guid++)),c.each(function(){g.event.add(this,p,b,S,_)})}function Ke(c,p,_){_?(Oe.set(c,p,!1),g.event.add(c,p,{namespace:!1,handler:function(S){var b,E,R=Oe.get(this,p);if(1&S.isTrigger&&this[p]){if(R.length)(g.event.special[p]||{}).delegateType&&S.stopPropagation();else if(R=n.call(arguments),Oe.set(this,p,R),b=_(this,p),this[p](),R!==(E=Oe.get(this,p))||b?Oe.set(this,p,!1):E={},R!==E)return S.stopImmediatePropagation(),S.preventDefault(),E&&E.value}else R.length&&(Oe.set(this,p,{value:g.event.trigger(g.extend(R[0],g.Event.prototype),R.slice(1),this)}),S.stopImmediatePropagation())}})):Oe.get(c,p)===void 0&&g.event.add(c,p,Me)}g.event={global:{},add:function(c,p,_,S,b){var E,R,H,W,J,ae,pe,ne,le,Be,Xe,Ve=Oe.get(c);if(Ut(c))for(_.handler&&(_=(E=_).handler,b=E.selector),b&&g.find.matchesSelector(A,b),_.guid||(_.guid=g.guid++),(W=Ve.events)||(W=Ve.events=Object.create(null)),(R=Ve.handle)||(R=Ve.handle=function(Xt){return typeof g<"u"&&g.event.triggered!==Xt.type?g.event.dispatch.apply(c,arguments):void 0}),J=(p=(p||"").match(me)||[""]).length;J--;)le=Xe=(H=K.exec(p[J])||[])[1],Be=(H[2]||"").split(".").sort(),le&&(pe=g.event.special[le]||{},le=(b?pe.delegateType:pe.bindType)||le,pe=g.event.special[le]||{},ae=g.extend({type:le,origType:Xe,data:S,handler:_,guid:_.guid,selector:b,needsContext:b&&g.expr.match.needsContext.test(b),namespace:Be.join(".")},E),(ne=W[le])||((ne=W[le]=[]).delegateCount=0,pe.setup&&pe.setup.call(c,S,Be,R)!==!1||c.addEventListener&&c.addEventListener(le,R)),pe.add&&(pe.add.call(c,ae),ae.handler.guid||(ae.handler.guid=_.guid)),b?ne.splice(ne.delegateCount++,0,ae):ne.push(ae),g.event.global[le]=!0)},remove:function(c,p,_,S,b){var E,R,H,W,J,ae,pe,ne,le,Be,Xe,Ve=Oe.hasData(c)&&Oe.get(c);if(Ve&&(W=Ve.events)){for(J=(p=(p||"").match(me)||[""]).length;J--;)if(le=Xe=(H=K.exec(p[J])||[])[1],Be=(H[2]||"").split(".").sort(),le){for(pe=g.event.special[le]||{},ne=W[le=(S?pe.delegateType:pe.bindType)||le]||[],H=H[2]&&new RegExp("(^|\\.)"+Be.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=E=ne.length;E--;)ae=ne[E],!b&&Xe!==ae.origType||_&&_.guid!==ae.guid||H&&!H.test(ae.namespace)||S&&S!==ae.selector&&(S!=="**"||!ae.selector)||(ne.splice(E,1),ae.selector&&ne.delegateCount--,pe.remove&&pe.remove.call(c,ae));R&&!ne.length&&(pe.teardown&&pe.teardown.call(c,Be,Ve.handle)!==!1||g.removeEvent(c,le,Ve.handle),delete W[le])}else for(le in W)g.event.remove(c,le+p[J],_,S,!0);g.isEmptyObject(W)&&Oe.remove(c,"handle events")}},dispatch:function(c){var p,_,S,b,E,R,H=new Array(arguments.length),W=g.event.fix(c),J=(Oe.get(this,"events")||Object.create(null))[W.type]||[],ae=g.event.special[W.type]||{};for(H[0]=W,p=1;p<arguments.length;p++)H[p]=arguments[p];if(W.delegateTarget=this,!ae.preDispatch||ae.preDispatch.call(this,W)!==!1){for(R=g.event.handlers.call(this,W,J),p=0;(b=R[p++])&&!W.isPropagationStopped();)for(W.currentTarget=b.elem,_=0;(E=b.handlers[_++])&&!W.isImmediatePropagationStopped();)W.rnamespace&&E.namespace!==!1&&!W.rnamespace.test(E.namespace)||(W.handleObj=E,W.data=E.data,(S=((g.event.special[E.origType]||{}).handle||E.handler).apply(b.elem,H))!==void 0&&(W.result=S)===!1&&(W.preventDefault(),W.stopPropagation()));return ae.postDispatch&&ae.postDispatch.call(this,W),W.result}},handlers:function(c,p){var _,S,b,E,R,H=[],W=p.delegateCount,J=c.target;if(W&&J.nodeType&&!(c.type==="click"&&1<=c.button)){for(;J!==this;J=J.parentNode||this)if(J.nodeType===1&&(c.type!=="click"||J.disabled!==!0)){for(E=[],R={},_=0;_<W;_++)R[b=(S=p[_]).selector+" "]===void 0&&(R[b]=S.needsContext?-1<g(b,this).index(J):g.find(b,this,null,[J]).length),R[b]&&E.push(S);E.length&&H.push({elem:J,handlers:E})}}return J=this,W<p.length&&H.push({elem:J,handlers:p.slice(W)}),H},addProp:function(c,p){Object.defineProperty(g.Event.prototype,c,{enumerable:!0,configurable:!0,get:y(p)?function(){if(this.originalEvent)return p(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[c]},set:function(_){Object.defineProperty(this,c,{enumerable:!0,configurable:!0,writable:!0,value:_})}})},fix:function(c){return c[g.expando]?c:new g.Event(c)},special:{load:{noBubble:!0},click:{setup:function(c){var p=this||c;return we.test(p.type)&&p.click&&V(p,"input")&&Ke(p,"click",Me),!1},trigger:function(c){var p=this||c;return we.test(p.type)&&p.click&&V(p,"input")&&Ke(p,"click"),!0},_default:function(c){var p=c.target;return we.test(p.type)&&p.click&&V(p,"input")&&Oe.get(p,"click")||V(p,"a")}},beforeunload:{postDispatch:function(c){c.result!==void 0&&c.originalEvent&&(c.originalEvent.returnValue=c.result)}}}},g.removeEvent=function(c,p,_){c.removeEventListener&&c.removeEventListener(p,_)},g.Event=function(c,p){if(!(this instanceof g.Event))return new g.Event(c,p);c&&c.type?(this.originalEvent=c,this.type=c.type,this.isDefaultPrevented=c.defaultPrevented||c.defaultPrevented===void 0&&c.returnValue===!1?Me:ue,this.target=c.target&&c.target.nodeType===3?c.target.parentNode:c.target,this.currentTarget=c.currentTarget,this.relatedTarget=c.relatedTarget):this.type=c,p&&g.extend(this,p),this.timeStamp=c&&c.timeStamp||Date.now(),this[g.expando]=!0},g.Event.prototype={constructor:g.Event,isDefaultPrevented:ue,isPropagationStopped:ue,isImmediatePropagationStopped:ue,isSimulated:!1,preventDefault:function(){var c=this.originalEvent;this.isDefaultPrevented=Me,c&&!this.isSimulated&&c.preventDefault()},stopPropagation:function(){var c=this.originalEvent;this.isPropagationStopped=Me,c&&!this.isSimulated&&c.stopPropagation()},stopImmediatePropagation:function(){var c=this.originalEvent;this.isImmediatePropagationStopped=Me,c&&!this.isSimulated&&c.stopImmediatePropagation(),this.stopPropagation()}},g.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},g.event.addProp),g.each({focus:"focusin",blur:"focusout"},function(c,p){g.event.special[c]={setup:function(){return Ke(this,c,fe),!1},trigger:function(){return Ke(this,c),!0},_default:function(){return!0},delegateType:p}}),g.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(c,p){g.event.special[c]={delegateType:p,bindType:p,handle:function(_){var S,b=_.relatedTarget,E=_.handleObj;return b&&(b===this||g.contains(this,b))||(_.type=E.origType,S=E.handler.apply(this,arguments),_.type=p),S}}}),g.fn.extend({on:function(c,p,_,S){return Te(this,c,p,_,S)},one:function(c,p,_,S){return Te(this,c,p,_,S,1)},off:function(c,p,_){var S,b;if(c&&c.preventDefault&&c.handleObj)return S=c.handleObj,g(c.delegateTarget).off(S.namespace?S.origType+"."+S.namespace:S.origType,S.selector,S.handler),this;if(typeof c=="object"){for(b in c)this.off(b,p,c[b]);return this}return p!==!1&&typeof p!="function"||(_=p,p=void 0),_===!1&&(_=ue),this.each(function(){g.event.remove(this,c,_,p)})}});var vt=/<script|<style|<link/i,Yt=/checked\s*(?:[^=]|=\s*.checked.)/i,ii=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function bt(c,p){return V(c,"table")&&V(p.nodeType!==11?p:p.firstChild,"tr")&&g(c).children("tbody")[0]||c}function sn(c){return c.type=(c.getAttribute("type")!==null)+"/"+c.type,c}function qi(c){return(c.type||"").slice(0,5)==="true/"?c.type=c.type.slice(5):c.removeAttribute("type"),c}function fo(c,p){var _,S,b,E,R,H;if(p.nodeType===1){if(Oe.hasData(c)&&(H=Oe.get(c).events))for(b in Oe.remove(p,"handle events"),H)for(_=0,S=H[b].length;_<S;_++)g.event.add(p,b,H[b][_]);lt.hasData(c)&&(E=lt.access(c),R=g.extend({},E),lt.set(p,R))}}function Ri(c,p,_,S){p=s(p);var b,E,R,H,W,J,ae=0,pe=c.length,ne=pe-1,le=p[0],Be=y(le);if(Be||1<pe&&typeof le=="string"&&!m.checkClone&&Yt.test(le))return c.each(function(Xe){var Ve=c.eq(Xe);Be&&(p[0]=le.call(this,Xe,Ve.html())),Ri(Ve,p,_,S)});if(pe&&(E=(b=kt(p,c[0].ownerDocument,!1,c,S)).firstChild,b.childNodes.length===1&&(b=E),E||S)){for(H=(R=g.map(Le(b,"script"),sn)).length;ae<pe;ae++)W=b,ae!==ne&&(W=g.clone(W,!0,!0),H&&g.merge(R,Le(W,"script"))),_.call(c[ae],W,ae);if(H)for(J=R[R.length-1].ownerDocument,g.map(R,qi),ae=0;ae<H;ae++)W=R[ae],xt.test(W.type||"")&&!Oe.access(W,"globalEval")&&g.contains(J,W)&&(W.src&&(W.type||"").toLowerCase()!=="module"?g._evalUrl&&!W.noModule&&g._evalUrl(W.src,{nonce:W.nonce||W.getAttribute("nonce")},J):D(W.textContent.replace(ii,""),W,J))}return c}function tr(c,p,_){for(var S,b=p?g.filter(p,c):c,E=0;(S=b[E])!=null;E++)_||S.nodeType!==1||g.cleanData(Le(S)),S.parentNode&&(_&&re(S)&&nt(Le(S,"script")),S.parentNode.removeChild(S));return c}g.extend({htmlPrefilter:function(c){return c},clone:function(c,p,_){var S,b,E,R,H,W,J,ae=c.cloneNode(!0),pe=re(c);if(!(m.noCloneChecked||c.nodeType!==1&&c.nodeType!==11||g.isXMLDoc(c)))for(R=Le(ae),S=0,b=(E=Le(c)).length;S<b;S++)H=E[S],W=R[S],(J=W.nodeName.toLowerCase())==="input"&&we.test(H.type)?W.checked=H.checked:J!=="input"&&J!=="textarea"||(W.defaultValue=H.defaultValue);if(p)if(_)for(E=E||Le(c),R=R||Le(ae),S=0,b=E.length;S<b;S++)fo(E[S],R[S]);else fo(c,ae);return 0<(R=Le(ae,"script")).length&&nt(R,!pe&&Le(c,"script")),ae},cleanData:function(c){for(var p,_,S,b=g.event.special,E=0;(_=c[E])!==void 0;E++)if(Ut(_)){if(p=_[Oe.expando]){if(p.events)for(S in p.events)b[S]?g.event.remove(_,S):g.removeEvent(_,S,p.handle);_[Oe.expando]=void 0}_[lt.expando]&&(_[lt.expando]=void 0)}}}),g.fn.extend({detach:function(c){return tr(this,c,!0)},remove:function(c){return tr(this,c)},text:function(c){return Fe(this,function(p){return p===void 0?g.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=p)})},null,c,arguments.length)},append:function(){return Ri(this,arguments,function(c){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||bt(this,c).appendChild(c)})},prepend:function(){return Ri(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var p=bt(this,c);p.insertBefore(c,p.firstChild)}})},before:function(){return Ri(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this)})},after:function(){return Ri(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this.nextSibling)})},empty:function(){for(var c,p=0;(c=this[p])!=null;p++)c.nodeType===1&&(g.cleanData(Le(c,!1)),c.textContent="");return this},clone:function(c,p){return c=c!=null&&c,p=p??c,this.map(function(){return g.clone(this,c,p)})},html:function(c){return Fe(this,function(p){var _=this[0]||{},S=0,b=this.length;if(p===void 0&&_.nodeType===1)return _.innerHTML;if(typeof p=="string"&&!vt.test(p)&&!Ge[(ze.exec(p)||["",""])[1].toLowerCase()]){p=g.htmlPrefilter(p);try{for(;S<b;S++)(_=this[S]||{}).nodeType===1&&(g.cleanData(Le(_,!1)),_.innerHTML=p);_=0}catch{}}_&&this.empty().append(p)},null,c,arguments.length)},replaceWith:function(){var c=[];return Ri(this,arguments,function(p){var _=this.parentNode;g.inArray(this,c)<0&&(g.cleanData(Le(this)),_&&_.replaceChild(p,this))},c)}}),g.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,p){g.fn[c]=function(_){for(var S,b=[],E=g(_),R=E.length-1,H=0;H<=R;H++)S=H===R?this:this.clone(!0),g(E[H])[p](S),o.apply(b,S.get());return this.pushStack(b)}});var ir=new RegExp("^("+st+")(?!px)[a-z%]+$","i"),Ts=function(c){var p=c.ownerDocument.defaultView;return p&&p.opener||(p=r),p.getComputedStyle(c)},Es=function(c,p,_){var S,b,E={};for(b in p)E[b]=c.style[b],c.style[b]=p[b];for(b in S=_.call(c),p)c.style[b]=E[b];return S},ca=new RegExp(B.join("|"),"i");function Mn(c,p,_){var S,b,E,R,H=c.style;return(_=_||Ts(c))&&((R=_.getPropertyValue(p)||_[p])!==""||re(c)||(R=g.style(c,p)),!m.pixelBoxStyles()&&ir.test(R)&&ca.test(p)&&(S=H.width,b=H.minWidth,E=H.maxWidth,H.minWidth=H.maxWidth=H.width=R,R=_.width,H.width=S,H.minWidth=b,H.maxWidth=E)),R!==void 0?R+"":R}function po(c,p){return{get:function(){if(!c())return(this.get=p).apply(this,arguments);delete this.get}}}(function(){function c(){if(J){W.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",J.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",A.appendChild(W).appendChild(J);var ae=r.getComputedStyle(J);_=ae.top!=="1%",H=p(ae.marginLeft)===12,J.style.right="60%",E=p(ae.right)===36,S=p(ae.width)===36,J.style.position="absolute",b=p(J.offsetWidth/3)===12,A.removeChild(W),J=null}}function p(ae){return Math.round(parseFloat(ae))}var _,S,b,E,R,H,W=x.createElement("div"),J=x.createElement("div");J.style&&(J.style.backgroundClip="content-box",J.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle=J.style.backgroundClip==="content-box",g.extend(m,{boxSizingReliable:function(){return c(),S},pixelBoxStyles:function(){return c(),E},pixelPosition:function(){return c(),_},reliableMarginLeft:function(){return c(),H},scrollboxSize:function(){return c(),b},reliableTrDimensions:function(){var ae,pe,ne,le;return R==null&&(ae=x.createElement("table"),pe=x.createElement("tr"),ne=x.createElement("div"),ae.style.cssText="position:absolute;left:-11111px;border-collapse:separate",pe.style.cssText="border:1px solid",pe.style.height="1px",ne.style.height="9px",ne.style.display="block",A.appendChild(ae).appendChild(pe).appendChild(ne),le=r.getComputedStyle(pe),R=parseInt(le.height,10)+parseInt(le.borderTopWidth,10)+parseInt(le.borderBottomWidth,10)===pe.offsetHeight,A.removeChild(ae)),R}}))})();var mo=["Webkit","Moz","ms"],ha=x.createElement("div").style,ua={};function go(c){var p=g.cssProps[c]||ua[c];return p||(c in ha?c:ua[c]=function(_){for(var S=_[0].toUpperCase()+_.slice(1),b=mo.length;b--;)if((_=mo[b]+S)in ha)return _}(c)||c)}var I=/^(none|table(?!-c[ea]).+)/,Z=/^--/,se={position:"absolute",visibility:"hidden",display:"block"},oe={letterSpacing:"0",fontWeight:"400"};function ee(c,p,_){var S=it.exec(p);return S?Math.max(0,S[2]-(_||0))+(S[3]||"px"):p}function be(c,p,_,S,b,E){var R=p==="width"?1:0,H=0,W=0;if(_===(S?"border":"content"))return 0;for(;R<4;R+=2)_==="margin"&&(W+=g.css(c,_+B[R],!0,b)),S?(_==="content"&&(W-=g.css(c,"padding"+B[R],!0,b)),_!=="margin"&&(W-=g.css(c,"border"+B[R]+"Width",!0,b))):(W+=g.css(c,"padding"+B[R],!0,b),_!=="padding"?W+=g.css(c,"border"+B[R]+"Width",!0,b):H+=g.css(c,"border"+B[R]+"Width",!0,b));return!S&&0<=E&&(W+=Math.max(0,Math.ceil(c["offset"+p[0].toUpperCase()+p.slice(1)]-E-W-H-.5))||0),W}function Ne(c,p,_){var S=Ts(c),b=(!m.boxSizingReliable()||_)&&g.css(c,"boxSizing",!1,S)==="border-box",E=b,R=Mn(c,p,S),H="offset"+p[0].toUpperCase()+p.slice(1);if(ir.test(R)){if(!_)return R;R="auto"}return(!m.boxSizingReliable()&&b||!m.reliableTrDimensions()&&V(c,"tr")||R==="auto"||!parseFloat(R)&&g.css(c,"display",!1,S)==="inline")&&c.getClientRects().length&&(b=g.css(c,"boxSizing",!1,S)==="border-box",(E=H in c)&&(R=c[H])),(R=parseFloat(R)||0)+be(c,p,_||(b?"border":"content"),E,S,R)+"px"}function Ie(c,p,_,S,b){return new Ie.prototype.init(c,p,_,S,b)}g.extend({cssHooks:{opacity:{get:function(c,p){if(p){var _=Mn(c,"opacity");return _===""?"1":_}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(c,p,_,S){if(c&&c.nodeType!==3&&c.nodeType!==8&&c.style){var b,E,R,H=tt(p),W=Z.test(p),J=c.style;if(W||(p=go(H)),R=g.cssHooks[p]||g.cssHooks[H],_===void 0)return R&&"get"in R&&(b=R.get(c,!1,S))!==void 0?b:J[p];(E=typeof _)=="string"&&(b=it.exec(_))&&b[1]&&(_=xe(c,p,b),E="number"),_!=null&&_==_&&(E!=="number"||W||(_+=b&&b[3]||(g.cssNumber[H]?"":"px")),m.clearCloneStyle||_!==""||p.indexOf("background")!==0||(J[p]="inherit"),R&&"set"in R&&(_=R.set(c,_,S))===void 0||(W?J.setProperty(p,_):J[p]=_))}},css:function(c,p,_,S){var b,E,R,H=tt(p);return Z.test(p)||(p=go(H)),(R=g.cssHooks[p]||g.cssHooks[H])&&"get"in R&&(b=R.get(c,!0,_)),b===void 0&&(b=Mn(c,p,S)),b==="normal"&&p in oe&&(b=oe[p]),_===""||_?(E=parseFloat(b),_===!0||isFinite(E)?E||0:b):b}}),g.each(["height","width"],function(c,p){g.cssHooks[p]={get:function(_,S,b){if(S)return!I.test(g.css(_,"display"))||_.getClientRects().length&&_.getBoundingClientRect().width?Ne(_,p,b):Es(_,se,function(){return Ne(_,p,b)})},set:function(_,S,b){var E,R=Ts(_),H=!m.scrollboxSize()&&R.position==="absolute",W=(H||b)&&g.css(_,"boxSizing",!1,R)==="border-box",J=b?be(_,p,b,W,R):0;return W&&H&&(J-=Math.ceil(_["offset"+p[0].toUpperCase()+p.slice(1)]-parseFloat(R[p])-be(_,p,"border",!1,R)-.5)),J&&(E=it.exec(S))&&(E[3]||"px")!=="px"&&(_.style[p]=S,S=g.css(_,p)),ee(0,S,J)}}}),g.cssHooks.marginLeft=po(m.reliableMarginLeft,function(c,p){if(p)return(parseFloat(Mn(c,"marginLeft"))||c.getBoundingClientRect().left-Es(c,{marginLeft:0},function(){return c.getBoundingClientRect().left}))+"px"}),g.each({margin:"",padding:"",border:"Width"},function(c,p){g.cssHooks[c+p]={expand:function(_){for(var S=0,b={},E=typeof _=="string"?_.split(" "):[_];S<4;S++)b[c+B[S]+p]=E[S]||E[S-2]||E[0];return b}},c!=="margin"&&(g.cssHooks[c+p].set=ee)}),g.fn.extend({css:function(c,p){return Fe(this,function(_,S,b){var E,R,H={},W=0;if(Array.isArray(S)){for(E=Ts(_),R=S.length;W<R;W++)H[S[W]]=g.css(_,S[W],!1,E);return H}return b!==void 0?g.style(_,S,b):g.css(_,S)},c,p,1<arguments.length)}}),((g.Tween=Ie).prototype={constructor:Ie,init:function(c,p,_,S,b,E){this.elem=c,this.prop=_,this.easing=b||g.easing._default,this.options=p,this.start=this.now=this.cur(),this.end=S,this.unit=E||(g.cssNumber[_]?"":"px")},cur:function(){var c=Ie.propHooks[this.prop];return c&&c.get?c.get(this):Ie.propHooks._default.get(this)},run:function(c){var p,_=Ie.propHooks[this.prop];return this.options.duration?this.pos=p=g.easing[this.easing](c,this.options.duration*c,0,1,this.options.duration):this.pos=p=c,this.now=(this.end-this.start)*p+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),_&&_.set?_.set(this):Ie.propHooks._default.set(this),this}}).init.prototype=Ie.prototype,(Ie.propHooks={_default:{get:function(c){var p;return c.elem.nodeType!==1||c.elem[c.prop]!=null&&c.elem.style[c.prop]==null?c.elem[c.prop]:(p=g.css(c.elem,c.prop,""))&&p!=="auto"?p:0},set:function(c){g.fx.step[c.prop]?g.fx.step[c.prop](c):c.elem.nodeType!==1||!g.cssHooks[c.prop]&&c.elem.style[go(c.prop)]==null?c.elem[c.prop]=c.now:g.style(c.elem,c.prop,c.now+c.unit)}}}).scrollTop=Ie.propHooks.scrollLeft={set:function(c){c.elem.nodeType&&c.elem.parentNode&&(c.elem[c.prop]=c.now)}},g.easing={linear:function(c){return c},swing:function(c){return .5-Math.cos(c*Math.PI)/2},_default:"swing"},g.fx=Ie.prototype.init,g.fx.step={};var ke,Je,$e,Ye,At=/^(?:toggle|show|hide)$/,Gt=/queueHooks$/;function Ht(){Je&&(x.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(Ht):r.setTimeout(Ht,g.fx.interval),g.fx.tick())}function mi(){return r.setTimeout(function(){ke=void 0}),ke=Date.now()}function Mt(c,p){var _,S=0,b={height:c};for(p=p?1:0;S<4;S+=2-p)b["margin"+(_=B[S])]=b["padding"+_]=c;return p&&(b.opacity=b.width=c),b}function We(c,p,_){for(var S,b=(Pt.tweeners[p]||[]).concat(Pt.tweeners["*"]),E=0,R=b.length;E<R;E++)if(S=b[E].call(_,p,c))return S}function Pt(c,p,_){var S,b,E=0,R=Pt.prefilters.length,H=g.Deferred().always(function(){delete W.elem}),W=function(){if(b)return!1;for(var pe=ke||mi(),ne=Math.max(0,J.startTime+J.duration-pe),le=1-(ne/J.duration||0),Be=0,Xe=J.tweens.length;Be<Xe;Be++)J.tweens[Be].run(le);return H.notifyWith(c,[J,le,ne]),le<1&&Xe?ne:(Xe||H.notifyWith(c,[J,1,0]),H.resolveWith(c,[J]),!1)},J=H.promise({elem:c,props:g.extend({},p),opts:g.extend(!0,{specialEasing:{},easing:g.easing._default},_),originalProperties:p,originalOptions:_,startTime:ke||mi(),duration:_.duration,tweens:[],createTween:function(pe,ne){var le=g.Tween(c,J.opts,pe,ne,J.opts.specialEasing[pe]||J.opts.easing);return J.tweens.push(le),le},stop:function(pe){var ne=0,le=pe?J.tweens.length:0;if(b)return this;for(b=!0;ne<le;ne++)J.tweens[ne].run(1);return pe?(H.notifyWith(c,[J,1,0]),H.resolveWith(c,[J,pe])):H.rejectWith(c,[J,pe]),this}}),ae=J.props;for(!function(pe,ne){var le,Be,Xe,Ve,Xt;for(le in pe)if(Xe=ne[Be=tt(le)],Ve=pe[le],Array.isArray(Ve)&&(Xe=Ve[1],Ve=pe[le]=Ve[0]),le!==Be&&(pe[Be]=Ve,delete pe[le]),(Xt=g.cssHooks[Be])&&"expand"in Xt)for(le in Ve=Xt.expand(Ve),delete pe[Be],Ve)le in pe||(pe[le]=Ve[le],ne[le]=Xe);else ne[Be]=Xe}(ae,J.opts.specialEasing);E<R;E++)if(S=Pt.prefilters[E].call(J,c,ae,J.opts))return y(S.stop)&&(g._queueHooks(J.elem,J.opts.queue).stop=S.stop.bind(S)),S;return g.map(ae,We,J),y(J.opts.start)&&J.opts.start.call(c,J),J.progress(J.opts.progress).done(J.opts.done,J.opts.complete).fail(J.opts.fail).always(J.opts.always),g.fx.timer(g.extend(W,{elem:c,anim:J,queue:J.opts.queue})),J}g.Animation=g.extend(Pt,{tweeners:{"*":[function(c,p){var _=this.createTween(c,p);return xe(_.elem,c,it.exec(p),_),_}]},tweener:function(c,p){y(c)?(p=c,c=["*"]):c=c.match(me);for(var _,S=0,b=c.length;S<b;S++)_=c[S],Pt.tweeners[_]=Pt.tweeners[_]||[],Pt.tweeners[_].unshift(p)},prefilters:[function(c,p,_){var S,b,E,R,H,W,J,ae,pe="width"in p||"height"in p,ne=this,le={},Be=c.style,Xe=c.nodeType&&ve(c),Ve=Oe.get(c,"fxshow");for(S in _.queue||((R=g._queueHooks(c,"fx")).unqueued==null&&(R.unqueued=0,H=R.empty.fire,R.empty.fire=function(){R.unqueued||H()}),R.unqueued++,ne.always(function(){ne.always(function(){R.unqueued--,g.queue(c,"fx").length||R.empty.fire()})})),p)if(b=p[S],At.test(b)){if(delete p[S],E=E||b==="toggle",b===(Xe?"hide":"show")){if(b!=="show"||!Ve||Ve[S]===void 0)continue;Xe=!0}le[S]=Ve&&Ve[S]||g.style(c,S)}if((W=!g.isEmptyObject(p))||!g.isEmptyObject(le))for(S in pe&&c.nodeType===1&&(_.overflow=[Be.overflow,Be.overflowX,Be.overflowY],(J=Ve&&Ve.display)==null&&(J=Oe.get(c,"display")),(ae=g.css(c,"display"))==="none"&&(J?ae=J:(Ce([c],!0),J=c.style.display||J,ae=g.css(c,"display"),Ce([c]))),(ae==="inline"||ae==="inline-block"&&J!=null)&&g.css(c,"float")==="none"&&(W||(ne.done(function(){Be.display=J}),J==null&&(ae=Be.display,J=ae==="none"?"":ae)),Be.display="inline-block")),_.overflow&&(Be.overflow="hidden",ne.always(function(){Be.overflow=_.overflow[0],Be.overflowX=_.overflow[1],Be.overflowY=_.overflow[2]})),W=!1,le)W||(Ve?"hidden"in Ve&&(Xe=Ve.hidden):Ve=Oe.access(c,"fxshow",{display:J}),E&&(Ve.hidden=!Xe),Xe&&Ce([c],!0),ne.done(function(){for(S in Xe||Ce([c]),Oe.remove(c,"fxshow"),le)g.style(c,S,le[S])})),W=We(Xe?Ve[S]:0,S,ne),S in Ve||(Ve[S]=W.start,Xe&&(W.end=W.start,W.start=0))}],prefilter:function(c,p){p?Pt.prefilters.unshift(c):Pt.prefilters.push(c)}}),g.speed=function(c,p,_){var S=c&&typeof c=="object"?g.extend({},c):{complete:_||!_&&p||y(c)&&c,duration:c,easing:_&&p||p&&!y(p)&&p};return g.fx.off?S.duration=0:typeof S.duration!="number"&&(S.duration in g.fx.speeds?S.duration=g.fx.speeds[S.duration]:S.duration=g.fx.speeds._default),S.queue!=null&&S.queue!==!0||(S.queue="fx"),S.old=S.complete,S.complete=function(){y(S.old)&&S.old.call(this),S.queue&&g.dequeue(this,S.queue)},S},g.fn.extend({fadeTo:function(c,p,_,S){return this.filter(ve).css("opacity",0).show().end().animate({opacity:p},c,_,S)},animate:function(c,p,_,S){var b=g.isEmptyObject(c),E=g.speed(p,_,S),R=function(){var H=Pt(this,g.extend({},c),E);(b||Oe.get(this,"finish"))&&H.stop(!0)};return R.finish=R,b||E.queue===!1?this.each(R):this.queue(E.queue,R)},stop:function(c,p,_){var S=function(b){var E=b.stop;delete b.stop,E(_)};return typeof c!="string"&&(_=p,p=c,c=void 0),p&&this.queue(c||"fx",[]),this.each(function(){var b=!0,E=c!=null&&c+"queueHooks",R=g.timers,H=Oe.get(this);if(E)H[E]&&H[E].stop&&S(H[E]);else for(E in H)H[E]&&H[E].stop&&Gt.test(E)&&S(H[E]);for(E=R.length;E--;)R[E].elem!==this||c!=null&&R[E].queue!==c||(R[E].anim.stop(_),b=!1,R.splice(E,1));!b&&_||g.dequeue(this,c)})},finish:function(c){return c!==!1&&(c=c||"fx"),this.each(function(){var p,_=Oe.get(this),S=_[c+"queue"],b=_[c+"queueHooks"],E=g.timers,R=S?S.length:0;for(_.finish=!0,g.queue(this,c,[]),b&&b.stop&&b.stop.call(this,!0),p=E.length;p--;)E[p].elem===this&&E[p].queue===c&&(E[p].anim.stop(!0),E.splice(p,1));for(p=0;p<R;p++)S[p]&&S[p].finish&&S[p].finish.call(this);delete _.finish})}}),g.each(["toggle","show","hide"],function(c,p){var _=g.fn[p];g.fn[p]=function(S,b,E){return S==null||typeof S=="boolean"?_.apply(this,arguments):this.animate(Mt(p,!0),S,b,E)}}),g.each({slideDown:Mt("show"),slideUp:Mt("hide"),slideToggle:Mt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(c,p){g.fn[c]=function(_,S,b){return this.animate(p,_,S,b)}}),g.timers=[],g.fx.tick=function(){var c,p=0,_=g.timers;for(ke=Date.now();p<_.length;p++)(c=_[p])()||_[p]!==c||_.splice(p--,1);_.length||g.fx.stop(),ke=void 0},g.fx.timer=function(c){g.timers.push(c),g.fx.start()},g.fx.interval=13,g.fx.start=function(){Je||(Je=!0,Ht())},g.fx.stop=function(){Je=null},g.fx.speeds={slow:600,fast:200,_default:400},g.fn.delay=function(c,p){return c=g.fx&&g.fx.speeds[c]||c,p=p||"fx",this.queue(p,function(_,S){var b=r.setTimeout(_,c);S.stop=function(){r.clearTimeout(b)}})},$e=x.createElement("input"),Ye=x.createElement("select").appendChild(x.createElement("option")),$e.type="checkbox",m.checkOn=$e.value!=="",m.optSelected=Ye.selected,($e=x.createElement("input")).value="t",$e.type="radio",m.radioValue=$e.value==="t";var Tt,fi=g.expr.attrHandle;g.fn.extend({attr:function(c,p){return Fe(this,g.attr,c,p,1<arguments.length)},removeAttr:function(c){return this.each(function(){g.removeAttr(this,c)})}}),g.extend({attr:function(c,p,_){var S,b,E=c.nodeType;if(E!==3&&E!==8&&E!==2)return typeof c.getAttribute>"u"?g.prop(c,p,_):(E===1&&g.isXMLDoc(c)||(b=g.attrHooks[p.toLowerCase()]||(g.expr.match.bool.test(p)?Tt:void 0)),_!==void 0?_===null?void g.removeAttr(c,p):b&&"set"in b&&(S=b.set(c,_,p))!==void 0?S:(c.setAttribute(p,_+""),_):b&&"get"in b&&(S=b.get(c,p))!==null?S:(S=g.find.attr(c,p))==null?void 0:S)},attrHooks:{type:{set:function(c,p){if(!m.radioValue&&p==="radio"&&V(c,"input")){var _=c.value;return c.setAttribute("type",p),_&&(c.value=_),p}}}},removeAttr:function(c,p){var _,S=0,b=p&&p.match(me);if(b&&c.nodeType===1)for(;_=b[S++];)c.removeAttribute(_)}}),Tt={set:function(c,p,_){return p===!1?g.removeAttr(c,_):c.setAttribute(_,_),_}},g.each(g.expr.match.bool.source.match(/\w+/g),function(c,p){var _=fi[p]||g.find.attr;fi[p]=function(S,b,E){var R,H,W=b.toLowerCase();return E||(H=fi[W],fi[W]=R,R=_(S,b,E)!=null?W:null,fi[W]=H),R}});var is=/^(?:input|select|textarea|button)$/i,wi=/^(?:a|area)$/i;function rn(c){return(c.match(me)||[]).join(" ")}function Ft(c){return c.getAttribute&&c.getAttribute("class")||""}function ji(c){return Array.isArray(c)?c:typeof c=="string"&&c.match(me)||[]}g.fn.extend({prop:function(c,p){return Fe(this,g.prop,c,p,1<arguments.length)},removeProp:function(c){return this.each(function(){delete this[g.propFix[c]||c]})}}),g.extend({prop:function(c,p,_){var S,b,E=c.nodeType;if(E!==3&&E!==8&&E!==2)return E===1&&g.isXMLDoc(c)||(p=g.propFix[p]||p,b=g.propHooks[p]),_!==void 0?b&&"set"in b&&(S=b.set(c,_,p))!==void 0?S:c[p]=_:b&&"get"in b&&(S=b.get(c,p))!==null?S:c[p]},propHooks:{tabIndex:{get:function(c){var p=g.find.attr(c,"tabindex");return p?parseInt(p,10):is.test(c.nodeName)||wi.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(g.propHooks.selected={get:function(c){var p=c.parentNode;return p&&p.parentNode&&p.parentNode.selectedIndex,null},set:function(c){var p=c.parentNode;p&&(p.selectedIndex,p.parentNode&&p.parentNode.selectedIndex)}}),g.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){g.propFix[this.toLowerCase()]=this}),g.fn.extend({addClass:function(c){var p,_,S,b,E,R,H,W=0;if(y(c))return this.each(function(J){g(this).addClass(c.call(this,J,Ft(this)))});if((p=ji(c)).length){for(;_=this[W++];)if(b=Ft(_),S=_.nodeType===1&&" "+rn(b)+" "){for(R=0;E=p[R++];)S.indexOf(" "+E+" ")<0&&(S+=E+" ");b!==(H=rn(S))&&_.setAttribute("class",H)}}return this},removeClass:function(c){var p,_,S,b,E,R,H,W=0;if(y(c))return this.each(function(J){g(this).removeClass(c.call(this,J,Ft(this)))});if(!arguments.length)return this.attr("class","");if((p=ji(c)).length){for(;_=this[W++];)if(b=Ft(_),S=_.nodeType===1&&" "+rn(b)+" "){for(R=0;E=p[R++];)for(;-1<S.indexOf(" "+E+" ");)S=S.replace(" "+E+" "," ");b!==(H=rn(S))&&_.setAttribute("class",H)}}return this},toggleClass:function(c,p){var _=typeof c,S=_==="string"||Array.isArray(c);return typeof p=="boolean"&&S?p?this.addClass(c):this.removeClass(c):y(c)?this.each(function(b){g(this).toggleClass(c.call(this,b,Ft(this),p),p)}):this.each(function(){var b,E,R,H;if(S)for(E=0,R=g(this),H=ji(c);b=H[E++];)R.hasClass(b)?R.removeClass(b):R.addClass(b);else c!==void 0&&_!=="boolean"||((b=Ft(this))&&Oe.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||c===!1?"":Oe.get(this,"__className__")||""))})},hasClass:function(c){var p,_,S=0;for(p=" "+c+" ";_=this[S++];)if(_.nodeType===1&&-1<(" "+rn(Ft(_))+" ").indexOf(p))return!0;return!1}});var xo=/\r/g;g.fn.extend({val:function(c){var p,_,S,b=this[0];return arguments.length?(S=y(c),this.each(function(E){var R;this.nodeType===1&&((R=S?c.call(this,E,g(this).val()):c)==null?R="":typeof R=="number"?R+="":Array.isArray(R)&&(R=g.map(R,function(H){return H==null?"":H+""})),(p=g.valHooks[this.type]||g.valHooks[this.nodeName.toLowerCase()])&&"set"in p&&p.set(this,R,"value")!==void 0||(this.value=R))})):b?(p=g.valHooks[b.type]||g.valHooks[b.nodeName.toLowerCase()])&&"get"in p&&(_=p.get(b,"value"))!==void 0?_:typeof(_=b.value)=="string"?_.replace(xo,""):_??"":void 0}}),g.extend({valHooks:{option:{get:function(c){var p=g.find.attr(c,"value");return p??rn(g.text(c))}},select:{get:function(c){var p,_,S,b=c.options,E=c.selectedIndex,R=c.type==="select-one",H=R?null:[],W=R?E+1:b.length;for(S=E<0?W:R?E:0;S<W;S++)if(((_=b[S]).selected||S===E)&&!_.disabled&&(!_.parentNode.disabled||!V(_.parentNode,"optgroup"))){if(p=g(_).val(),R)return p;H.push(p)}return H},set:function(c,p){for(var _,S,b=c.options,E=g.makeArray(p),R=b.length;R--;)((S=b[R]).selected=-1<g.inArray(g.valHooks.option.get(S),E))&&(_=!0);return _||(c.selectedIndex=-1),E}}}}),g.each(["radio","checkbox"],function(){g.valHooks[this]={set:function(c,p){if(Array.isArray(p))return c.checked=-1<g.inArray(g(c).val(),p)}},m.checkOn||(g.valHooks[this].get=function(c){return c.getAttribute("value")===null?"on":c.value})}),m.focusin="onfocusin"in r;var bi=/^(?:focusinfocus|focusoutblur)$/,nr=function(c){c.stopPropagation()};g.extend(g.event,{trigger:function(c,p,_,S){var b,E,R,H,W,J,ae,pe,ne=[_||x],le=u.call(c,"type")?c.type:c,Be=u.call(c,"namespace")?c.namespace.split("."):[];if(E=pe=R=_=_||x,_.nodeType!==3&&_.nodeType!==8&&!bi.test(le+g.event.triggered)&&(-1<le.indexOf(".")&&(le=(Be=le.split(".")).shift(),Be.sort()),W=le.indexOf(":")<0&&"on"+le,(c=c[g.expando]?c:new g.Event(le,typeof c=="object"&&c)).isTrigger=S?2:3,c.namespace=Be.join("."),c.rnamespace=c.namespace?new RegExp("(^|\\.)"+Be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=void 0,c.target||(c.target=_),p=p==null?[c]:g.makeArray(p,[c]),ae=g.event.special[le]||{},S||!ae.trigger||ae.trigger.apply(_,p)!==!1)){if(!S&&!ae.noBubble&&!w(_)){for(H=ae.delegateType||le,bi.test(H+le)||(E=E.parentNode);E;E=E.parentNode)ne.push(E),R=E;R===(_.ownerDocument||x)&&ne.push(R.defaultView||R.parentWindow||r)}for(b=0;(E=ne[b++])&&!c.isPropagationStopped();)pe=E,c.type=1<b?H:ae.bindType||le,(J=(Oe.get(E,"events")||Object.create(null))[c.type]&&Oe.get(E,"handle"))&&J.apply(E,p),(J=W&&E[W])&&J.apply&&Ut(E)&&(c.result=J.apply(E,p),c.result===!1&&c.preventDefault());return c.type=le,S||c.isDefaultPrevented()||ae._default&&ae._default.apply(ne.pop(),p)!==!1||!Ut(_)||W&&y(_[le])&&!w(_)&&((R=_[W])&&(_[W]=null),g.event.triggered=le,c.isPropagationStopped()&&pe.addEventListener(le,nr),_[le](),c.isPropagationStopped()&&pe.removeEventListener(le,nr),g.event.triggered=void 0,R&&(_[W]=R)),c.result}},simulate:function(c,p,_){var S=g.extend(new g.Event,_,{type:c,isSimulated:!0});g.event.trigger(S,null,p)}}),g.fn.extend({trigger:function(c,p){return this.each(function(){g.event.trigger(c,p,this)})},triggerHandler:function(c,p){var _=this[0];if(_)return g.event.trigger(c,p,_,!0)}}),m.focusin||g.each({focus:"focusin",blur:"focusout"},function(c,p){var _=function(S){g.event.simulate(p,S.target,g.event.fix(S))};g.event.special[p]={setup:function(){var S=this.ownerDocument||this.document||this,b=Oe.access(S,p);b||S.addEventListener(c,_,!0),Oe.access(S,p,(b||0)+1)},teardown:function(){var S=this.ownerDocument||this.document||this,b=Oe.access(S,p)-1;b?Oe.access(S,p,b):(S.removeEventListener(c,_,!0),Oe.remove(S,p))}}});var As=r.location,_o={guid:Date.now()},Vl=/\?/;g.parseXML=function(c){var p,_;if(!c||typeof c!="string")return null;try{p=new r.DOMParser().parseFromString(c,"text/xml")}catch{}return _=p&&p.getElementsByTagName("parsererror")[0],p&&!_||g.error("Invalid XML: "+(_?g.map(_.childNodes,function(S){return S.textContent}).join(`
`):c)),p};var dm=/\[\]$/,Lu=/\r?\n/g,fm=/^(?:submit|button|image|reset|file)$/i,pm=/^(?:input|select|textarea|keygen)/i;function Gl(c,p,_,S){var b;if(Array.isArray(p))g.each(p,function(E,R){_||dm.test(c)?S(c,R):Gl(c+"["+(typeof R=="object"&&R!=null?E:"")+"]",R,_,S)});else if(_||T(p)!=="object")S(c,p);else for(b in p)Gl(c+"["+b+"]",p[b],_,S)}g.param=function(c,p){var _,S=[],b=function(E,R){var H=y(R)?R():R;S[S.length]=encodeURIComponent(E)+"="+encodeURIComponent(H??"")};if(c==null)return"";if(Array.isArray(c)||c.jquery&&!g.isPlainObject(c))g.each(c,function(){b(this.name,this.value)});else for(_ in c)Gl(_,c[_],p,b);return S.join("&")},g.fn.extend({serialize:function(){return g.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var c=g.prop(this,"elements");return c?g.makeArray(c):this}).filter(function(){var c=this.type;return this.name&&!g(this).is(":disabled")&&pm.test(this.nodeName)&&!fm.test(c)&&(this.checked||!we.test(c))}).map(function(c,p){var _=g(this).val();return _==null?null:Array.isArray(_)?g.map(_,function(S){return{name:p.name,value:S.replace(Lu,`\r
`)}}):{name:p.name,value:_.replace(Lu,`\r
`)}}).get()}});var mm=/%20/g,gm=/#.*$/,xm=/([?&])_=[^&]*/,_m=/^(.*?):[ \t]*([^\r\n]*)$/gm,ym=/^(?:GET|HEAD)$/,vm=/^\/\//,Pu={},Wl={},Iu="*/".concat("*"),Xl=x.createElement("a");function Du(c){return function(p,_){typeof p!="string"&&(_=p,p="*");var S,b=0,E=p.toLowerCase().match(me)||[];if(y(_))for(;S=E[b++];)S[0]==="+"?(S=S.slice(1)||"*",(c[S]=c[S]||[]).unshift(_)):(c[S]=c[S]||[]).push(_)}}function Nu(c,p,_,S){var b={},E=c===Wl;function R(H){var W;return b[H]=!0,g.each(c[H]||[],function(J,ae){var pe=ae(p,_,S);return typeof pe!="string"||E||b[pe]?E?!(W=pe):void 0:(p.dataTypes.unshift(pe),R(pe),!1)}),W}return R(p.dataTypes[0])||!b["*"]&&R("*")}function ql(c,p){var _,S,b=g.ajaxSettings.flatOptions||{};for(_ in p)p[_]!==void 0&&((b[_]?c:S||(S={}))[_]=p[_]);return S&&g.extend(!0,c,S),c}Xl.href=As.href,g.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:As.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(As.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Iu,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":g.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(c,p){return p?ql(ql(c,g.ajaxSettings),p):ql(g.ajaxSettings,c)},ajaxPrefilter:Du(Pu),ajaxTransport:Du(Wl),ajax:function(c,p){typeof c=="object"&&(p=c,c=void 0),p=p||{};var _,S,b,E,R,H,W,J,ae,pe,ne=g.ajaxSetup({},p),le=ne.context||ne,Be=ne.context&&(le.nodeType||le.jquery)?g(le):g.event,Xe=g.Deferred(),Ve=g.Callbacks("once memory"),Xt=ne.statusCode||{},ni={},Di={},Ot="canceled",at={readyState:0,getResponseHeader:function(Et){var qt;if(W){if(!E)for(E={};qt=_m.exec(b);)E[qt[1].toLowerCase()+" "]=(E[qt[1].toLowerCase()+" "]||[]).concat(qt[2]);qt=E[Et.toLowerCase()+" "]}return qt==null?null:qt.join(", ")},getAllResponseHeaders:function(){return W?b:null},setRequestHeader:function(Et,qt){return W==null&&(Et=Di[Et.toLowerCase()]=Di[Et.toLowerCase()]||Et,ni[Et]=qt),this},overrideMimeType:function(Et){return W==null&&(ne.mimeType=Et),this},statusCode:function(Et){var qt;if(Et)if(W)at.always(Et[at.status]);else for(qt in Et)Xt[qt]=[Xt[qt],Et[qt]];return this},abort:function(Et){var qt=Et||Ot;return _&&_.abort(qt),Ci(0,qt),this}};if(Xe.promise(at),ne.url=((c||ne.url||As.href)+"").replace(vm,As.protocol+"//"),ne.type=p.method||p.type||ne.method||ne.type,ne.dataTypes=(ne.dataType||"*").toLowerCase().match(me)||[""],ne.crossDomain==null){H=x.createElement("a");try{H.href=ne.url,H.href=H.href,ne.crossDomain=Xl.protocol+"//"+Xl.host!=H.protocol+"//"+H.host}catch{ne.crossDomain=!0}}if(ne.data&&ne.processData&&typeof ne.data!="string"&&(ne.data=g.param(ne.data,ne.traditional)),Nu(Pu,ne,p,at),W)return at;for(ae in(J=g.event&&ne.global)&&g.active++==0&&g.event.trigger("ajaxStart"),ne.type=ne.type.toUpperCase(),ne.hasContent=!ym.test(ne.type),S=ne.url.replace(gm,""),ne.hasContent?ne.data&&ne.processData&&(ne.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ne.data=ne.data.replace(mm,"+")):(pe=ne.url.slice(S.length),ne.data&&(ne.processData||typeof ne.data=="string")&&(S+=(Vl.test(S)?"&":"?")+ne.data,delete ne.data),ne.cache===!1&&(S=S.replace(xm,"$1"),pe=(Vl.test(S)?"&":"?")+"_="+_o.guid+++pe),ne.url=S+pe),ne.ifModified&&(g.lastModified[S]&&at.setRequestHeader("If-Modified-Since",g.lastModified[S]),g.etag[S]&&at.setRequestHeader("If-None-Match",g.etag[S])),(ne.data&&ne.hasContent&&ne.contentType!==!1||p.contentType)&&at.setRequestHeader("Content-Type",ne.contentType),at.setRequestHeader("Accept",ne.dataTypes[0]&&ne.accepts[ne.dataTypes[0]]?ne.accepts[ne.dataTypes[0]]+(ne.dataTypes[0]!=="*"?", "+Iu+"; q=0.01":""):ne.accepts["*"]),ne.headers)at.setRequestHeader(ae,ne.headers[ae]);if(ne.beforeSend&&(ne.beforeSend.call(le,at,ne)===!1||W))return at.abort();if(Ot="abort",Ve.add(ne.complete),at.done(ne.success),at.fail(ne.error),_=Nu(Wl,ne,p,at)){if(at.readyState=1,J&&Be.trigger("ajaxSend",[at,ne]),W)return at;ne.async&&0<ne.timeout&&(R=r.setTimeout(function(){at.abort("timeout")},ne.timeout));try{W=!1,_.send(ni,Ci)}catch(Et){if(W)throw Et;Ci(-1,Et)}}else Ci(-1,"No Transport");function Ci(Et,qt,vo,da){var Ni,Rs,sr,Li,rr,$i=qt;W||(W=!0,R&&r.clearTimeout(R),_=void 0,b=da||"",at.readyState=0<Et?4:0,Ni=200<=Et&&Et<300||Et===304,vo&&(Li=function(jt,Ui,Fi){for(var Sn,ct,Rt,si,Oi=jt.contents,Zt=jt.dataTypes;Zt[0]==="*";)Zt.shift(),Sn===void 0&&(Sn=jt.mimeType||Ui.getResponseHeader("Content-Type"));if(Sn){for(ct in Oi)if(Oi[ct]&&Oi[ct].test(Sn)){Zt.unshift(ct);break}}if(Zt[0]in Fi)Rt=Zt[0];else{for(ct in Fi){if(!Zt[0]||jt.converters[ct+" "+Zt[0]]){Rt=ct;break}si||(si=ct)}Rt=Rt||si}if(Rt)return Rt!==Zt[0]&&Zt.unshift(Rt),Fi[Rt]}(ne,at,vo)),!Ni&&-1<g.inArray("script",ne.dataTypes)&&g.inArray("json",ne.dataTypes)<0&&(ne.converters["text script"]=function(){}),Li=function(jt,Ui,Fi,Sn){var ct,Rt,si,Oi,Zt,Bi={},or=jt.dataTypes.slice();if(or[1])for(si in jt.converters)Bi[si.toLowerCase()]=jt.converters[si];for(Rt=or.shift();Rt;)if(jt.responseFields[Rt]&&(Fi[jt.responseFields[Rt]]=Ui),!Zt&&Sn&&jt.dataFilter&&(Ui=jt.dataFilter(Ui,jt.dataType)),Zt=Rt,Rt=or.shift()){if(Rt==="*")Rt=Zt;else if(Zt!=="*"&&Zt!==Rt){if(!(si=Bi[Zt+" "+Rt]||Bi["* "+Rt])){for(ct in Bi)if((Oi=ct.split(" "))[1]===Rt&&(si=Bi[Zt+" "+Oi[0]]||Bi["* "+Oi[0]])){si===!0?si=Bi[ct]:Bi[ct]!==!0&&(Rt=Oi[0],or.unshift(Oi[1]));break}}if(si!==!0)if(si&&jt.throws)Ui=si(Ui);else try{Ui=si(Ui)}catch(fa){return{state:"parsererror",error:si?fa:"No conversion from "+Zt+" to "+Rt}}}}return{state:"success",data:Ui}}(ne,Li,at,Ni),Ni?(ne.ifModified&&((rr=at.getResponseHeader("Last-Modified"))&&(g.lastModified[S]=rr),(rr=at.getResponseHeader("etag"))&&(g.etag[S]=rr)),Et===204||ne.type==="HEAD"?$i="nocontent":Et===304?$i="notmodified":($i=Li.state,Rs=Li.data,Ni=!(sr=Li.error))):(sr=$i,!Et&&$i||($i="error",Et<0&&(Et=0))),at.status=Et,at.statusText=(qt||$i)+"",Ni?Xe.resolveWith(le,[Rs,$i,at]):Xe.rejectWith(le,[at,$i,sr]),at.statusCode(Xt),Xt=void 0,J&&Be.trigger(Ni?"ajaxSuccess":"ajaxError",[at,ne,Ni?Rs:sr]),Ve.fireWith(le,[at,$i]),J&&(Be.trigger("ajaxComplete",[at,ne]),--g.active||g.event.trigger("ajaxStop")))}return at},getJSON:function(c,p,_){return g.get(c,p,_,"json")},getScript:function(c,p){return g.get(c,void 0,p,"script")}}),g.each(["get","post"],function(c,p){g[p]=function(_,S,b,E){return y(S)&&(E=E||b,b=S,S=void 0),g.ajax(g.extend({url:_,type:p,dataType:E,data:S,success:b},g.isPlainObject(_)&&_))}}),g.ajaxPrefilter(function(c){var p;for(p in c.headers)p.toLowerCase()==="content-type"&&(c.contentType=c.headers[p]||"")}),g._evalUrl=function(c,p,_){return g.ajax({url:c,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(S){g.globalEval(S,p,_)}})},g.fn.extend({wrapAll:function(c){var p;return this[0]&&(y(c)&&(c=c.call(this[0])),p=g(c,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&p.insertBefore(this[0]),p.map(function(){for(var _=this;_.firstElementChild;)_=_.firstElementChild;return _}).append(this)),this},wrapInner:function(c){return y(c)?this.each(function(p){g(this).wrapInner(c.call(this,p))}):this.each(function(){var p=g(this),_=p.contents();_.length?_.wrapAll(c):p.append(c)})},wrap:function(c){var p=y(c);return this.each(function(_){g(this).wrapAll(p?c.call(this,_):c)})},unwrap:function(c){return this.parent(c).not("body").each(function(){g(this).replaceWith(this.childNodes)}),this}}),g.expr.pseudos.hidden=function(c){return!g.expr.pseudos.visible(c)},g.expr.pseudos.visible=function(c){return!!(c.offsetWidth||c.offsetHeight||c.getClientRects().length)},g.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var Mm={0:200,1223:204},yo=g.ajaxSettings.xhr();m.cors=!!yo&&"withCredentials"in yo,m.ajax=yo=!!yo,g.ajaxTransport(function(c){var p,_;if(m.cors||yo&&!c.crossDomain)return{send:function(S,b){var E,R=c.xhr();if(R.open(c.type,c.url,c.async,c.username,c.password),c.xhrFields)for(E in c.xhrFields)R[E]=c.xhrFields[E];for(E in c.mimeType&&R.overrideMimeType&&R.overrideMimeType(c.mimeType),c.crossDomain||S["X-Requested-With"]||(S["X-Requested-With"]="XMLHttpRequest"),S)R.setRequestHeader(E,S[E]);p=function(H){return function(){p&&(p=_=R.onload=R.onerror=R.onabort=R.ontimeout=R.onreadystatechange=null,H==="abort"?R.abort():H==="error"?typeof R.status!="number"?b(0,"error"):b(R.status,R.statusText):b(Mm[R.status]||R.status,R.statusText,(R.responseType||"text")!=="text"||typeof R.responseText!="string"?{binary:R.response}:{text:R.responseText},R.getAllResponseHeaders()))}},R.onload=p(),_=R.onerror=R.ontimeout=p("error"),R.onabort!==void 0?R.onabort=_:R.onreadystatechange=function(){R.readyState===4&&r.setTimeout(function(){p&&_()})},p=p("abort");try{R.send(c.hasContent&&c.data||null)}catch(H){if(p)throw H}},abort:function(){p&&p()}}}),g.ajaxPrefilter(function(c){c.crossDomain&&(c.contents.script=!1)}),g.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){return g.globalEval(c),c}}}),g.ajaxPrefilter("script",function(c){c.cache===void 0&&(c.cache=!1),c.crossDomain&&(c.type="GET")}),g.ajaxTransport("script",function(c){var p,_;if(c.crossDomain||c.scriptAttrs)return{send:function(S,b){p=g("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",_=function(E){p.remove(),_=null,E&&b(E.type==="error"?404:200,E.type)}),x.head.appendChild(p[0])},abort:function(){_&&_()}}});var Uu,Fu=[],jl=/(=)\?(?=&|$)|\?\?/;g.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var c=Fu.pop()||g.expando+"_"+_o.guid++;return this[c]=!0,c}}),g.ajaxPrefilter("json jsonp",function(c,p,_){var S,b,E,R=c.jsonp!==!1&&(jl.test(c.url)?"url":typeof c.data=="string"&&(c.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&jl.test(c.data)&&"data");if(R||c.dataTypes[0]==="jsonp")return S=c.jsonpCallback=y(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,R?c[R]=c[R].replace(jl,"$1"+S):c.jsonp!==!1&&(c.url+=(Vl.test(c.url)?"&":"?")+c.jsonp+"="+S),c.converters["script json"]=function(){return E||g.error(S+" was not called"),E[0]},c.dataTypes[0]="json",b=r[S],r[S]=function(){E=arguments},_.always(function(){b===void 0?g(r).removeProp(S):r[S]=b,c[S]&&(c.jsonpCallback=p.jsonpCallback,Fu.push(S)),E&&y(b)&&b(E[0]),E=b=void 0}),"script"}),m.createHTMLDocument=((Uu=x.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",Uu.childNodes.length===2),g.parseHTML=function(c,p,_){return typeof c!="string"?[]:(typeof p=="boolean"&&(_=p,p=!1),p||(m.createHTMLDocument?((S=(p=x.implementation.createHTMLDocument("")).createElement("base")).href=x.location.href,p.head.appendChild(S)):p=x),E=!_&&[],(b=X.exec(c))?[p.createElement(b[1])]:(b=kt([c],p,E),E&&E.length&&g(E).remove(),g.merge([],b.childNodes)));var S,b,E},g.fn.load=function(c,p,_){var S,b,E,R=this,H=c.indexOf(" ");return-1<H&&(S=rn(c.slice(H)),c=c.slice(0,H)),y(p)?(_=p,p=void 0):p&&typeof p=="object"&&(b="POST"),0<R.length&&g.ajax({url:c,type:b||"GET",dataType:"html",data:p}).done(function(W){E=arguments,R.html(S?g("<div>").append(g.parseHTML(W)).find(S):W)}).always(_&&function(W,J){R.each(function(){_.apply(this,E||[W.responseText,J,W])})}),this},g.expr.pseudos.animated=function(c){return g.grep(g.timers,function(p){return c===p.elem}).length},g.offset={setOffset:function(c,p,_){var S,b,E,R,H,W,J=g.css(c,"position"),ae=g(c),pe={};J==="static"&&(c.style.position="relative"),H=ae.offset(),E=g.css(c,"top"),W=g.css(c,"left"),(J==="absolute"||J==="fixed")&&-1<(E+W).indexOf("auto")?(R=(S=ae.position()).top,b=S.left):(R=parseFloat(E)||0,b=parseFloat(W)||0),y(p)&&(p=p.call(c,_,g.extend({},H))),p.top!=null&&(pe.top=p.top-H.top+R),p.left!=null&&(pe.left=p.left-H.left+b),"using"in p?p.using.call(c,pe):ae.css(pe)}},g.fn.extend({offset:function(c){if(arguments.length)return c===void 0?this:this.each(function(b){g.offset.setOffset(this,c,b)});var p,_,S=this[0];return S?S.getClientRects().length?(p=S.getBoundingClientRect(),_=S.ownerDocument.defaultView,{top:p.top+_.pageYOffset,left:p.left+_.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var c,p,_,S=this[0],b={top:0,left:0};if(g.css(S,"position")==="fixed")p=S.getBoundingClientRect();else{for(p=this.offset(),_=S.ownerDocument,c=S.offsetParent||_.documentElement;c&&(c===_.body||c===_.documentElement)&&g.css(c,"position")==="static";)c=c.parentNode;c&&c!==S&&c.nodeType===1&&((b=g(c).offset()).top+=g.css(c,"borderTopWidth",!0),b.left+=g.css(c,"borderLeftWidth",!0))}return{top:p.top-b.top-g.css(S,"marginTop",!0),left:p.left-b.left-g.css(S,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent;c&&g.css(c,"position")==="static";)c=c.offsetParent;return c||A})}}),g.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,p){var _=p==="pageYOffset";g.fn[c]=function(S){return Fe(this,function(b,E,R){var H;if(w(b)?H=b:b.nodeType===9&&(H=b.defaultView),R===void 0)return H?H[p]:b[E];H?H.scrollTo(_?H.pageXOffset:R,_?R:H.pageYOffset):b[E]=R},c,S,arguments.length)}}),g.each(["top","left"],function(c,p){g.cssHooks[p]=po(m.pixelPosition,function(_,S){if(S)return S=Mn(_,p),ir.test(S)?g(_).position()[p]+"px":S})}),g.each({Height:"height",Width:"width"},function(c,p){g.each({padding:"inner"+c,content:p,"":"outer"+c},function(_,S){g.fn[S]=function(b,E){var R=arguments.length&&(_||typeof b!="boolean"),H=_||(b===!0||E===!0?"margin":"border");return Fe(this,function(W,J,ae){var pe;return w(W)?S.indexOf("outer")===0?W["inner"+c]:W.document.documentElement["client"+c]:W.nodeType===9?(pe=W.documentElement,Math.max(W.body["scroll"+c],pe["scroll"+c],W.body["offset"+c],pe["offset"+c],pe["client"+c])):ae===void 0?g.css(W,J,H):g.style(W,J,ae,H)},p,R?b:void 0,R)}})}),g.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(c,p){g.fn[p]=function(_){return this.on(p,_)}}),g.fn.extend({bind:function(c,p,_){return this.on(c,null,p,_)},unbind:function(c,p){return this.off(c,null,p)},delegate:function(c,p,_,S){return this.on(p,c,_,S)},undelegate:function(c,p,_){return arguments.length===1?this.off(c,"**"):this.off(p,c||"**",_)},hover:function(c,p){return this.mouseenter(c).mouseleave(p||c)}}),g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(c,p){g.fn[p]=function(_,S){return 0<arguments.length?this.on(p,null,_,S):this.trigger(p)}});var Sm=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;g.proxy=function(c,p){var _,S,b;if(typeof p=="string"&&(_=c[p],p=c,c=_),y(c))return S=n.call(arguments,2),(b=function(){return c.apply(p||this,S.concat(n.call(arguments)))}).guid=c.guid=c.guid||g.guid++,b},g.holdReady=function(c){c?g.readyWait++:g.ready(!0)},g.isArray=Array.isArray,g.parseJSON=JSON.parse,g.nodeName=V,g.isFunction=y,g.isWindow=w,g.camelCase=tt,g.type=T,g.now=Date.now,g.isNumeric=function(c){var p=g.type(c);return(p==="number"||p==="string")&&!isNaN(c-parseFloat(c))},g.trim=function(c){return c==null?"":(c+"").replace(Sm,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return g});var wm=r.jQuery,bm=r.$;return g.noConflict=function(c){return r.$===g&&(r.$=bm),c&&r.jQuery===g&&(r.jQuery=wm),g},typeof e>"u"&&(r.jQuery=r.$=g),g});class uM{constructor(e){this.index=e,this.id="bus"+e,this.passengers=[],this.passengersGettingOff=[],this.position=0,this.destination,this.nextBus,this.drivingTarget=this.destination,this.model,this.velocity=0,this.MAX_VELOCITY=.2,this.ACCELERATION=.06,this.MAX_FILL=10,this.TIME_PER_PASSENGER=.25,this.timeLoading=0,this.atStop=!1,this.infoDiv=null,this.addInfoDiv(),this.logInfo=!1,this.backHalf,this.hold=!1}update(e){this.hold||(this.atStop?this.load(e):this.driveToNext(e),this.position>1&&(this.position%=1))}load(e){if(this.passengersGettingOff.length==0&&(this.passengers.length>=this.MAX_FILL||this.destination.passengers.length==0)){this.atStop=!1,this.destination=this.destination.next,this.logInfo&&(console.log(this.passengers.length+" next stop: "+this.destination.symbol),console.log(this)),this.timeLoading=0;return}if(this.timeLoading+=e,this.timeLoading>=this.TIME_PER_PASSENGER){if(this.passengersGettingOff.length>0){let t=this.passengersGettingOff.shift();this.dropOff(t)}else{let t=this.destination.pickUpPassenger();t!=null&&this.pickUp(t)}this.timeLoading=0}}driveToNext(e){let t=this.velocity**2/(this.ACCELERATION*2);this.position%=1,(this.drivingTarget==0?1:this.drivingTarget)<this.position+t?this.velocity-=this.ACCELERATION*e:this.velocity<this.MAX_VELOCITY&&(this.velocity+=this.ACCELERATION*e),this.velocity>this.MAX_VELOCITY?this.velocity=this.MAX_VELOCITY:this.velocity<0&&(this.velocity=0),Math.abs(this.drivingTarget-this.position)<5e-4&&(this.velocity=0),Math.abs(this.destination.position-this.position)<5e-4?(this.logInfo&&(console.log("stopping at: "+this.destination.symbol),console.log("position: "+this.position)),this.position=this.destination.position,this.velocity=0,this.atStop=!0,this.prepUnload(),this.load(e)):this.position+=this.velocity*e}prepUnload(){let e=this.passengers.filter(t=>t.destination!=this.destination);if(this.passengersGettingOff=this.passengers.filter(t=>t.destination==this.destination),this.passengers=e,this.logInfo){let t="Getting off: ";for(let i=0;i<this.passengersGettingOff.length;i++)t+=this.passengersGettingOff[i].destination.symbol;console.log(t)}}addInfoDiv(){let e=document.createElement("div");e.className="busPassengers",this.waitingPassengersDiv=e;let t=document.createElement("div");t.className="busInfo",t.id=this.id,t.appendChild(e),document.querySelector("body").appendChild(t),this.infoDiv=e}pickUp(e){this.logInfo&&console.log("Picking up: "+e.destination.symbol+"	Occupancy: "+this.passengers.length),this.passengers.push(e),this.infoDiv.appendChild(e.div)}dropOff(e){this.logInfo&&console.log("Dropping off: "+e.destination.symbol+"	Occupancy: "+this.passengers.length),e=this.infoDiv.querySelector("."+e.riderClass),e&&e.remove()}holdBus(e){e.key==this.index.toString()&&(this.hold=!0)}startBus(e){e.key==this.index.toString()&&(this.hold=!1)}}class dM{constructor(e){this.div=document.createElement("div"),this.riderClass=e.id+"Rider",this.div.classList.add("passenger"),this.div.classList.add(this.riderClass),this.div.textContent=e.symbol,this.div.style.color=e.color,this.destination=e}}class fM{constructor(e,t,i){this.id="stop"+e,this.passengers=[],this.nextStops=[],this.model,this.timeSinceLastPassenger=0,this.TIME_PER_PASSENGER=4,this.nextStopState=e,this.infoAddedToPage=!1,this.waitingPassengersDiv=null,this.symbol=t,this.color=i,this.passengerWidth=10,this.infoDiv=null,this.addInfoDiv()}update(e){this.timeSinceLastPassenger+=e,this.timeSinceLastPassenger>=this.TIME_PER_PASSENGER&&(this.timeSinceLastPassenger=0,this.addRider())}addRider(){this.nextStopState++,this.nextStopState%=this.nextStops.length;let e=new dM(this.nextStops[this.nextStopState]);this.passengers.push(e);let t=document.querySelector("#"+this.id).querySelector(".passengersWrapper"),i=t.scrollWidth;t.style.width=i+this.passengerWidth+"px",t.appendChild(e.div)}pickUpPassenger(){if(this.passengers.length<=0)return null;let e=document.querySelector("#"+this.id).querySelector(".passengersWrapper");if(e.querySelector(".passenger")){e.querySelector(".passenger").remove();let i=e.scrollWidth;e.style.width=i-this.passengerWidth+"px"}return this.passengers.shift()}addInfoDiv(){let e=document.createElement("div");e.className="infoTitle",e.textContent=this.symbol,e.style.color=this.color;let t=document.createElement("div");t.className="passengersWrapper",this.waitingPassengersDiv=t;let i=document.createElement("div");i.className="info",i.id=this.id,i.appendChild(e),i.appendChild(t),document.querySelector("body").appendChild(i),this.infoDiv=t}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="166",Il=0,pM=1,mM=2,Xd=1,qd=100,jd=204,$d=205,Yd=3,gM=0,Kd="attached",xM="detached",Vp=300,jo=1e3,Oo=1001,Gh=1002,Wh=1003,_M=1004,yM=1005,mu=1006,vM=1007,gu=1008,MM=1009,xu=1015,Gp=1023,SM=1028,$o=2300,Yo=2301,Ic=2302,Jd=2400,Zd=2401,Qd=2402,wM=2500,bM=0,Wp=1,Xh=2,TM=0,Xp="",Wi="srgb",nn="srgb-linear",EM="display-p3",qp="display-p3-linear",qh="linear",ef="srgb",tf="rec709",nf="p3",br=7680,sf=519,jh=35044,$s=2e3,$h=2001;class Bl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rf=1234567;const Ho=Math.PI/180,Ko=180/Math.PI;function _n(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yi[r&255]+yi[r>>8&255]+yi[r>>16&255]+yi[r>>24&255]+"-"+yi[e&255]+yi[e>>8&255]+"-"+yi[e>>16&15|64]+yi[e>>24&255]+"-"+yi[t&63|128]+yi[t>>8&255]+"-"+yi[t>>16&255]+yi[t>>24&255]+yi[i&255]+yi[i>>8&255]+yi[i>>16&255]+yi[i>>24&255]).toLowerCase()}function Si(r,e,t){return Math.max(e,Math.min(t,r))}function _u(r,e){return(r%e+e)%e}function AM(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function RM(r,e,t){return r!==e?(t-r)/(e-r):0}function Vo(r,e,t){return(1-t)*r+t*e}function CM(r,e,t,i){return Vo(r,e,1-Math.exp(-t*i))}function LM(r,e=1){return e-Math.abs(_u(r,e*2)-e)}function PM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function IM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function DM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function NM(r,e){return r+Math.random()*(e-r)}function UM(r){return r*(.5-Math.random())}function FM(r){r!==void 0&&(rf=r);let e=rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OM(r){return r*Ho}function BM(r){return r*Ko}function zM(r){return(r&r-1)===0&&r!==0}function kM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function HM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function VM(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),h=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),y=o((i-e)/2);switch(n){case"XYX":r.set(a*u,l*d,l*f,a*h);break;case"YZY":r.set(l*f,a*u,l*d,a*h);break;case"ZXZ":r.set(l*d,l*f,a*u,a*h);break;case"XZX":r.set(a*u,l*y,l*m,a*h);break;case"YXY":r.set(l*m,a*u,l*y,a*h);break;case"ZYZ":r.set(l*y,l*m,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const GM={DEG2RAD:Ho,RAD2DEG:Ko,generateUUID:_n,clamp:Si,euclideanModulo:_u,mapLinear:AM,inverseLerp:RM,lerp:Vo,damp:CM,pingpong:LM,smoothstep:PM,smootherstep:IM,randInt:DM,randFloat:NM,randFloatSpread:UM,seededRandom:FM,degToRad:OM,radToDeg:BM,isPowerOfTwo:zM,ceilPowerOfTwo:kM,floorPowerOfTwo:HM,setQuaternionFromProperEuler:VM,normalize:It,denormalize:gn};class $t{constructor(e=0,t=0){$t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class es{constructor(e,t,i,n,s,o,a,l,h){es.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,h)}set(e,t,i,n,s,o,a,l,h){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],d=i[7],f=i[2],m=i[5],y=i[8],w=n[0],x=n[3],v=n[6],D=n[1],T=n[4],C=n[7],g=n[2],F=n[5],U=n[8];return s[0]=o*w+a*D+l*g,s[3]=o*x+a*T+l*F,s[6]=o*v+a*C+l*U,s[1]=h*w+u*D+d*g,s[4]=h*x+u*T+d*F,s[7]=h*v+u*C+d*U,s[2]=f*w+m*D+y*g,s[5]=f*x+m*T+y*F,s[8]=f*v+m*C+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-i*s*u+i*a*l+n*s*h-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=u*o-a*h,f=a*l-u*s,m=h*s-o*l,y=t*d+i*f+n*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=d*w,e[1]=(n*h-u*i)*w,e[2]=(a*i-n*o)*w,e[3]=f*w,e[4]=(u*t-n*l)*w,e[5]=(n*s-a*t)*w,e[6]=m*w,e[7]=(i*l-h*t)*w,e[8]=(o*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-n*h,n*l,-n*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new es;function WM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const of={};function jp(r){r in of||(of[r]=!0,console.warn(r))}const af=new es().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lf=new es().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[nn]:{transfer:qh,primaries:tf,toReference:r=>r,fromReference:r=>r},[Wi]:{transfer:ef,primaries:tf,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[qp]:{transfer:qh,primaries:nf,toReference:r=>r.applyMatrix3(lf),fromReference:r=>r.applyMatrix3(af)},[EM]:{transfer:ef,primaries:nf,toReference:r=>r.convertSRGBToLinear().applyMatrix3(lf),fromReference:r=>r.applyMatrix3(af).convertLinearToSRGB()}},XM=new Set([nn,qp]),Gi={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!XM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Xa[e].toReference,n=Xa[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Xa[r].primaries},getTransfer:function(r){return r===Xp?qh:Xa[r].transfer}};function jr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class qM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Yh("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=jr(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jr(t[i]/255)*255):t[i]=jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jM=0;class $M{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Uc(n[o].image)):s.push(Uc(n[o]))}else s=Uc(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YM=0;class yn extends Bl{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=Oo,n=Oo,s=mu,o=gu,a=Gp,l=MM,h=yn.DEFAULT_ANISOTROPY,u=Xp){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=_n(),this.name="",this.source=new $M(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new es,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case Oo:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case Oo:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Vp;yn.DEFAULT_ANISOTROPY=1;class Qi{constructor(e=0,t=0,i=0,n=1){Qi.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,h=l[0],u=l[4],d=l[8],f=l[1],m=l[5],y=l[9],w=l[2],x=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-w)<.01&&Math.abs(y-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+w)<.1&&Math.abs(y+x)<.1&&Math.abs(h+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,C=(m+1)/2,g=(v+1)/2,F=(u+f)/4,U=(d+w)/4,q=(y+x)/4;return T>C&&T>g?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=F/i,s=U/i):C>g?C<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(C),i=F/n,s=q/n):g<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(g),i=U/s,n=q/s),this.set(i,n,s,t),this}let D=Math.sqrt((x-y)*(x-y)+(d-w)*(d-w)+(f-u)*(f-u));return Math.abs(D)<.001&&(D=1),this.x=(x-y)/D,this.y=(d-w)/D,this.z=(f-u)/D,this.w=Math.acos((h+m+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bs{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],h=i[n+1],u=i[n+2],d=i[n+3];const f=s[o+0],m=s[o+1],y=s[o+2],w=s[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=y,e[t+3]=w;return}if(d!==w||l!==f||h!==m||u!==y){let x=1-a;const v=l*f+h*m+u*y+d*w,D=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const g=Math.sqrt(T),F=Math.atan2(g,v*D);x=Math.sin(x*F)/g,a=Math.sin(a*F)/g}const C=a*D;if(l=l*x+f*C,h=h*x+m*C,u=u*x+y*C,d=d*x+w*C,x===1-a){const g=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=g,h*=g,u*=g,d*=g}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],h=i[n+2],u=i[n+3],d=s[o],f=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+u*d+l*m-h*f,e[t+1]=l*y+u*f+h*d-a*m,e[t+2]=h*y+u*m+a*f-l*d,e[t+3]=u*y-a*d-l*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(n/2),d=a(s/2),f=l(i/2),m=l(n/2),y=l(s/2);switch(o){case"XYZ":this._x=f*u*d+h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d-f*m*y;break;case"YXZ":this._x=f*u*d+h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d+f*m*y;break;case"ZXY":this._x=f*u*d-h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d-f*m*y;break;case"ZYX":this._x=f*u*d-h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d+f*m*y;break;case"YZX":this._x=f*u*d+h*m*y,this._y=h*m*d+f*u*y,this._z=h*u*y-f*m*d,this._w=h*u*d-f*m*y;break;case"XZY":this._x=f*u*d-h*m*y,this._y=h*m*d-f*u*y,this._z=h*u*y+f*m*d,this._w=h*u*d+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-h)*m,this._z=(o-n)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(s+h)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-h)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-n)/m,this._x=(s+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Si(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=i*u+o*a+n*h-s*l,this._y=n*u+o*l+s*a-i*h,this._z=s*u+o*h+i*l-n*a,this._w=o*u-i*a-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),d=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=n*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,i=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*n-a*i),u=2*(a*t-s*n),d=2*(s*i-o*t);return this.x=t+l*h+o*d-a*u,this.y=i+l*u+a*h-s*d,this.z=n+l*d+s*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new ce,cf=new bs;class ts{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),ja.subVectors(this.max,Ao),Er.subVectors(e.a,Ao),Ar.subVectors(e.b,Ao),Rr.subVectors(e.c,Ao),cs.subVectors(Ar,Er),hs.subVectors(Rr,Ar),Fs.subVectors(Er,Rr);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Fs.z,Fs.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Fs.z,0,-Fs.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Fs.y,Fs.x,0];return!Oc(t,Er,Ar,Rr,ja)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Er,Ar,Rr,ja))?!1:($a.crossVectors(cs,hs),t=[$a.x,$a.y,$a.z],Oc(t,Er,Ar,Rr,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],dn=new ce,qa=new ts,Er=new ce,Ar=new ce,Rr=new ce,cs=new ce,hs=new ce,Fs=new ce,Ao=new ce,ja=new ce,$a=new ce,Os=new ce;function Oc(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Os.fromArray(r,s);const a=n.x*Math.abs(Os.x)+n.y*Math.abs(Os.y)+n.z*Math.abs(Os.z),l=e.dot(Os),h=t.dot(Os),u=i.dot(Os);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const KM=new ts,Ro=new ce,Bc=new ce;class Dn{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):KM.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ro,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Bc)),this.expandByPoint(Ro.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new ce,zc=new ce,Ya=new ce,us=new ce,kc=new ce,Ka=new ce,Hc=new ce;class zl{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){zc.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),us.copy(this.origin).sub(zc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=us.dot(this.direction),l=-us.dot(Ya),h=us.lengthSq(),u=Math.abs(1-o*o);let d,f,m,y;if(u>0)if(d=o*l-a,f=o*a-l,y=s*u,d>=0)if(f>=-y)if(f<=y){const w=1/u;d*=w,f*=w,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+h}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+h;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+h;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+h):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+h):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+h);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(zc).addScaledVector(Ya,f),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),n=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,n=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,n=(e.min.x-f.x)*h),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,n,s){kc.subVectors(t,e),Ka.subVectors(i,e),Hc.crossVectors(kc,Ka);let o=this.direction.dot(Hc),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(us,Ka));if(l<0)return null;const h=a*this.direction.dot(kc.cross(us));if(h<0||l+h>o)return null;const u=-a*us.dot(Hc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,n,s,o,a,l,h,u,d,f,m,y,w,x){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,h,u,d,f,m,y,w,x)}set(e,t,i,n,s,o,a,l,h,u,d,f,m,y,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=h,v[6]=u,v[10]=d,v[14]=f,v[3]=m,v[7]=y,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,y=a*u,w=a*d;t[0]=l*u,t[4]=-l*d,t[8]=h,t[1]=m+y*h,t[5]=f-w*h,t[9]=-a*l,t[2]=w-f*h,t[6]=y+m*h,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,y=h*u,w=h*d;t[0]=f+w*a,t[4]=y*a-m,t[8]=o*h,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-y,t[6]=w+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,y=h*u,w=h*d;t[0]=f-w*a,t[4]=-o*d,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*u,t[9]=w-f*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,y=a*u,w=a*d;t[0]=l*u,t[4]=y*h-m,t[8]=f*h+w,t[1]=l*d,t[5]=w*h+f,t[9]=m*h-y,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*h,y=a*l,w=a*h;t[0]=l*u,t[4]=w-f*d,t[8]=y*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=m*d+y,t[10]=f-w*d}else if(e.order==="XZY"){const f=o*l,m=o*h,y=a*l,w=a*h;t[0]=l*u,t[4]=-d,t[8]=h*u,t[1]=f*d+w,t[5]=o*u,t[9]=m*d-y,t[2]=y*d-m,t[6]=a*u,t[10]=w*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JM,e,ZM)}lookAt(e,t,i){const n=this.elements;return Hi.subVectors(e,t),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),ds.crossVectors(i,Hi),ds.lengthSq()===0&&(Math.abs(i.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),ds.crossVectors(i,Hi)),ds.normalize(),Ja.crossVectors(Hi,ds),n[0]=ds.x,n[4]=Ja.x,n[8]=Hi.x,n[1]=ds.y,n[5]=Ja.y,n[9]=Hi.y,n[2]=ds.z,n[6]=Ja.z,n[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],d=i[5],f=i[9],m=i[13],y=i[2],w=i[6],x=i[10],v=i[14],D=i[3],T=i[7],C=i[11],g=i[15],F=n[0],U=n[4],q=n[8],N=n[12],L=n[1],V=n[5],X=n[9],O=n[13],j=n[2],z=n[6],$=n[10],ie=n[14],Q=n[3],me=n[7],Re=n[11],Ae=n[15];return s[0]=o*F+a*L+l*j+h*Q,s[4]=o*U+a*V+l*z+h*me,s[8]=o*q+a*X+l*$+h*Re,s[12]=o*N+a*O+l*ie+h*Ae,s[1]=u*F+d*L+f*j+m*Q,s[5]=u*U+d*V+f*z+m*me,s[9]=u*q+d*X+f*$+m*Re,s[13]=u*N+d*O+f*ie+m*Ae,s[2]=y*F+w*L+x*j+v*Q,s[6]=y*U+w*V+x*z+v*me,s[10]=y*q+w*X+x*$+v*Re,s[14]=y*N+w*O+x*ie+v*Ae,s[3]=D*F+T*L+C*j+g*Q,s[7]=D*U+T*V+C*z+g*me,s[11]=D*q+T*X+C*$+g*Re,s[15]=D*N+T*O+C*ie+g*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],d=e[6],f=e[10],m=e[14],y=e[3],w=e[7],x=e[11],v=e[15];return y*(+s*l*d-n*h*d-s*a*f+i*h*f+n*a*m-i*l*m)+w*(+t*l*m-t*h*f+s*o*f-n*o*m+n*h*u-s*l*u)+x*(+t*h*d-t*a*m-s*o*d+i*o*m+s*a*u-i*h*u)+v*(-n*a*u-t*l*d+t*a*f+n*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],d=e[9],f=e[10],m=e[11],y=e[12],w=e[13],x=e[14],v=e[15],D=d*x*h-w*f*h+w*l*m-a*x*m-d*l*v+a*f*v,T=y*f*h-u*x*h-y*l*m+o*x*m+u*l*v-o*f*v,C=u*w*h-y*d*h+y*a*m-o*w*m-u*a*v+o*d*v,g=y*d*l-u*w*l-y*a*f+o*w*f+u*a*x-o*d*x,F=t*D+i*T+n*C+s*g;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(w*f*s-d*x*s-w*n*m+i*x*m+d*n*v-i*f*v)*U,e[2]=(a*x*s-w*l*s+w*n*h-i*x*h-a*n*v+i*l*v)*U,e[3]=(d*l*s-a*f*s-d*n*h+i*f*h+a*n*m-i*l*m)*U,e[4]=T*U,e[5]=(u*x*s-y*f*s+y*n*m-t*x*m-u*n*v+t*f*v)*U,e[6]=(y*l*s-o*x*s-y*n*h+t*x*h+o*n*v-t*l*v)*U,e[7]=(o*f*s-u*l*s+u*n*h-t*f*h-o*n*m+t*l*m)*U,e[8]=C*U,e[9]=(y*d*s-u*w*s-y*i*m+t*w*m+u*i*v-t*d*v)*U,e[10]=(o*w*s-y*a*s+y*i*h-t*w*h-o*i*v+t*a*v)*U,e[11]=(u*a*s-o*d*s-u*i*h+t*d*h+o*i*m-t*a*m)*U,e[12]=g*U,e[13]=(u*w*n-y*d*n+y*i*f-t*w*f-u*i*x+t*d*x)*U,e[14]=(y*a*n-o*w*n-y*i*l+t*w*l+o*i*x-t*a*x)*U,e[15]=(o*d*n-u*a*n+u*i*l-t*d*l-o*i*f+t*a*f)*U,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,h=s*o,u=s*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,u*a+i,u*l-n*o,0,h*l-n*a,u*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,h=s+s,u=o+o,d=a+a,f=s*h,m=s*u,y=s*d,w=o*u,x=o*d,v=a*d,D=l*h,T=l*u,C=l*d,g=i.x,F=i.y,U=i.z;return n[0]=(1-(w+v))*g,n[1]=(m+C)*g,n[2]=(y-T)*g,n[3]=0,n[4]=(m-C)*F,n[5]=(1-(f+v))*F,n[6]=(x+D)*F,n[7]=0,n[8]=(y+T)*U,n[9]=(x-D)*U,n[10]=(1-(f+w))*U,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Cr.set(n[0],n[1],n[2]).length();const o=Cr.set(n[4],n[5],n[6]).length(),a=Cr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],fn.copy(this);const h=1/s,u=1/o,d=1/a;return fn.elements[0]*=h,fn.elements[1]*=h,fn.elements[2]*=h,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=$s){const l=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let m,y;if(a===$s)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===$h)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=$s){const l=this.elements,h=1/(t-e),u=1/(i-n),d=1/(o-s),f=(t+e)*h,m=(i+n)*u;let y,w;if(a===$s)y=(o+s)*d,w=-2*d;else if(a===$h)y=s*d,w=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=w,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Cr=new ce,fn=new wt,JM=new ce(0,0,0),ZM=new ce(1,1,1),ds=new ce,Ja=new ce,Hi=new ce,hf=new wt,uf=new bs;class ao{constructor(e=0,t=0,i=0,n=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],h=n[5],u=n[9],d=n[2],f=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Si(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Si(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Si(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Si(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Si(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Si(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class QM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eS=0;const df=new ce,Lr=new bs,Xn=new wt,Za=new ce,Co=new ce,tS=new ce,iS=new bs,ff=new ce(1,0,0),pf=new ce(0,1,0),mf=new ce(0,0,1),gf={type:"added"},nS={type:"removed"},Pr={type:"childadded",child:null},Vc={type:"childremoved",child:null};class Jt extends Bl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new ce,t=new ao,i=new bs,n=new ce(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new wt},normalMatrix:{value:new es}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new QM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(ff,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ff,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Co,Za,this.up):Xn.lookAt(Za,Co,this.up),this.quaternion.setFromRotationMatrix(Xn),n&&(Xn.extractRotation(n.matrixWorld),Lr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nS),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,tS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=n,i;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Jt.DEFAULT_UP=new ce(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new ce,qn=new ce,Gc=new ce,jn=new ce,Ir=new ce,Dr=new ce,xf=new ce,Wc=new ce,Xc=new ce,qc=new ce;class Rn{constructor(e=new ce,t=new ce,i=new ce){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),pn.subVectors(e,t),n.cross(pn);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){pn.subVectors(n,t),qn.subVectors(i,t),Gc.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(qn),l=pn.dot(Gc),h=qn.dot(qn),u=qn.dot(Gc),d=o*h-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(h*l-a*u)*f,y=(o*u-a*l)*f;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(e,t,i,n){return pn.subVectors(i,t),qn.subVectors(e,t),pn.cross(qn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),pn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Ir.subVectors(n,i),Dr.subVectors(s,i),Wc.subVectors(e,i);const l=Ir.dot(Wc),h=Dr.dot(Wc);if(l<=0&&h<=0)return t.copy(i);Xc.subVectors(e,n);const u=Ir.dot(Xc),d=Dr.dot(Xc);if(u>=0&&d<=u)return t.copy(n);const f=l*d-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ir,o);qc.subVectors(e,s);const m=Ir.dot(qc),y=Dr.dot(qc);if(y>=0&&m<=y)return t.copy(s);const w=m*h-l*y;if(w<=0&&h>=0&&y<=0)return a=h/(h-y),t.copy(i).addScaledVector(Dr,a);const x=u*y-m*d;if(x<=0&&d-u>=0&&m-y>=0)return xf.subVectors(s,n),a=(d-u)/(d-u+(m-y)),t.copy(n).addScaledVector(xf,a);const v=1/(x+w+f);return o=w*v,a=f*v,t.copy(i).addScaledVector(Ir,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function jc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ai{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Gi.workingColorSpace){return this.r=e,this.g=t,this.b=i,Gi.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Gi.workingColorSpace){if(e=_u(e,1),t=Si(t,0,1),i=Si(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jc(o,s,e+1/3),this.g=jc(o,s,e),this.b=jc(o,s,e-1/3)}return Gi.toWorkingColorSpace(this,n),this}setStyle(e,t=Wi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wi){const i=$p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wi){return Gi.fromWorkingColorSpace(vi.copy(this),e),Math.round(Si(vi.r*255,0,255))*65536+Math.round(Si(vi.g*255,0,255))*256+Math.round(Si(vi.b*255,0,255))}getHexString(e=Wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gi.workingColorSpace){Gi.fromWorkingColorSpace(vi.copy(this),t);const i=vi.r,n=vi.g,s=vi.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Gi.workingColorSpace){return Gi.fromWorkingColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=Wi){Gi.fromWorkingColorSpace(vi.copy(this),e);const t=vi.r,i=vi.g,n=vi.b;return e!==Wi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Qa);const i=Vo(fs.h,Qa.h,t),n=Vo(fs.s,Qa.s,t),s=Vo(fs.l,Qa.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new ai;ai.NAMES=$p;let sS=0;class Ys extends Bl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Xd,this.side=Il,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=$d,this.blendEquation=qd,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ai(0,0,0),this.blendAlpha=0,this.depthFunc=Yd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xd&&(i.blending=this.blending),this.side!==Il&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==qd&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Gr extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ai(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ao,this.combine=gM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ti=new ce,el=new $t;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xu,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}}class rS extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oS extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yu extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let aS=0;const Ki=new wt,$c=new Jt,Nr=new ce,Vi=new ts,Lo=new ts,di=new ce;class lo extends Bl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WM(e)?oS:rS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new es().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ki.makeRotationFromQuaternion(e),this.applyMatrix4(Ki),this}rotateX(e){return Ki.makeRotationX(e),this.applyMatrix4(Ki),this}rotateY(e){return Ki.makeRotationY(e),this.applyMatrix4(Ki),this}rotateZ(e){return Ki.makeRotationZ(e),this.applyMatrix4(Ki),this}translate(e,t,i){return Ki.makeTranslation(e,t,i),this.applyMatrix4(Ki),this}scale(e,t,i){return Ki.makeScale(e,t,i),this.applyMatrix4(Ki),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yu(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Vi.setFromBufferAttribute(s),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const i=this.boundingSphere.center;if(Vi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(di.addVectors(Vi.min,Lo.min),Vi.expandByPoint(di),di.addVectors(Vi.max,Lo.max),Vi.expandByPoint(di)):(Vi.expandByPoint(Lo.min),Vi.expandByPoint(Lo.max))}Vi.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)di.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(di));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)di.fromBufferAttribute(a,h),l&&(Nr.fromBufferAttribute(e,h),di.add(Nr)),n=Math.max(n,i.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let q=0;q<i.count;q++)a[q]=new ce,l[q]=new ce;const h=new ce,u=new ce,d=new ce,f=new $t,m=new $t,y=new $t,w=new ce,x=new ce;function v(q,N,L){h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,q),m.fromBufferAttribute(s,N),y.fromBufferAttribute(s,L),u.sub(h),d.sub(h),m.sub(f),y.sub(f);const V=1/(m.x*y.y-y.x*m.y);isFinite(V)&&(w.copy(u).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(V),x.copy(d).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(V),a[q].add(w),a[N].add(w),a[L].add(w),l[q].add(x),l[N].add(x),l[L].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,N=D.length;q<N;++q){const L=D[q],V=L.start,X=L.count;for(let O=V,j=V+X;O<j;O+=3)v(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new ce,C=new ce,g=new ce,F=new ce;function U(q){g.fromBufferAttribute(n,q),F.copy(g);const N=a[q];T.copy(N),T.sub(g.multiplyScalar(g.dot(N))).normalize(),C.crossVectors(F,N);const V=C.dot(l[q])<0?-1:1;o.setXYZW(q,T.x,T.y,T.z,V)}for(let q=0,N=D.length;q<N;++q){const L=D[q],V=L.start,X=L.count;for(let O=V,j=V+X;O<j;O+=3)U(e.getX(O+0)),U(e.getX(O+1)),U(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const n=new ce,s=new ce,o=new ce,a=new ce,l=new ce,h=new ce,u=new ce,d=new ce;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),w=e.getX(f+1),x=e.getX(f+2);n.fromBufferAttribute(t,y),s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,x),u.subVectors(o,s),d.subVectors(n,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),a.add(u),l.add(u),h.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let f=0,m=t.count;f<m;f+=3)n.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(n,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)di.fromBufferAttribute(e,t),di.normalize(),e.setXYZ(t,di.x,di.y,di.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,d=a.normalized,f=new h.constructor(l.length*u);let m=0,y=0;for(let w=0,x=l.length;w<x;w++){a.isInterleavedBufferAttribute?m=l[w]*a.data.stride+a.offset:m=l[w]*u;for(let v=0;v<u;v++)f[y++]=h[m++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lo,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],h=e(l,i);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let u=0,d=h.length;u<d;u++){const f=h[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let d=0,f=h.length;d<f;d++){const m=h[d];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const u=n[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],d=s[h];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _f=new wt,Bs=new zl,tl=new Dn,yf=new ce,Ur=new ce,Fr=new ce,Or=new ce,Yc=new ce,il=new ce,nl=new $t,sl=new $t,rl=new $t,vf=new ce,Mf=new ce,Sf=new ce,ol=new ce,al=new ce;class kl extends Jt{constructor(e=new lo,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=a[l],d=s[l];u!==0&&(Yc.fromBufferAttribute(d,e),o?il.addScaledVector(Yc,u):il.addScaledVector(Yc.sub(t),u))}t.add(il)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),Bs.copy(e.ray).recast(e.near),!(tl.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(tl,yf)===null||Bs.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(_f.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=f.length;y<w;y++){const x=f[y],v=o[x.materialIndex],D=Math.max(x.start,m.start),T=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let C=D,g=T;C<g;C+=3){const F=a.getX(C),U=a.getX(C+1),q=a.getX(C+2);n=ll(this,v,e,i,h,u,d,F,U,q),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const y=Math.max(0,m.start),w=Math.min(a.count,m.start+m.count);for(let x=y,v=w;x<v;x+=3){const D=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);n=ll(this,o,e,i,h,u,d,D,T,C),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=f.length;y<w;y++){const x=f[y],v=o[x.materialIndex],D=Math.max(x.start,m.start),T=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let C=D,g=T;C<g;C+=3){const F=C,U=C+1,q=C+2;n=ll(this,v,e,i,h,u,d,F,U,q),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const y=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let x=y,v=w;x<v;x+=3){const D=x,T=x+1,C=x+2;n=ll(this,o,e,i,h,u,d,D,T,C),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}}}function lS(r,e,t,i,n,s,o,a){let l;if(e.side===pM?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Il,a),l===null)return null;al.copy(a),al.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(al);return h<t.near||h>t.far?null:{distance:h,point:al.clone(),object:r}}function ll(r,e,t,i,n,s,o,a,l,h){r.getVertexPosition(a,Ur),r.getVertexPosition(l,Fr),r.getVertexPosition(h,Or);const u=lS(r,e,t,i,Ur,Fr,Or,ol);if(u){n&&(nl.fromBufferAttribute(n,a),sl.fromBufferAttribute(n,l),rl.fromBufferAttribute(n,h),u.uv=Rn.getInterpolation(ol,Ur,Fr,Or,nl,sl,rl,new $t)),s&&(nl.fromBufferAttribute(s,a),sl.fromBufferAttribute(s,l),rl.fromBufferAttribute(s,h),u.uv1=Rn.getInterpolation(ol,Ur,Fr,Or,nl,sl,rl,new $t)),o&&(vf.fromBufferAttribute(o,a),Mf.fromBufferAttribute(o,l),Sf.fromBufferAttribute(o,h),u.normal=Rn.getInterpolation(ol,Ur,Fr,Or,vf,Mf,Sf,new ce),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new ce,materialIndex:0};Rn.getNormal(Ur,Fr,Or,d.normal),u.face=d}return u}class Yp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=$s}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new ce,wf=new $t,bf=new $t;class vu extends Yp{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,wf,bf),t.subVectors(bf,wf)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kc=new ce,cS=new ce,hS=new es;class Br{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Kc.subVectors(i,t).cross(cS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hS.getNormalMatrix(e),n=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Dn,cl=new ce;class uS{constructor(e=new Br,t=new Br,i=new Br,n=new Br,s=new Br,o=new Br){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$s){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],y=n[9],w=n[10],x=n[11],v=n[12],D=n[13],T=n[14],C=n[15];if(i[0].setComponents(l-s,f-h,x-m,C-v).normalize(),i[1].setComponents(l+s,f+h,x+m,C+v).normalize(),i[2].setComponents(l+o,f+u,x+y,C+D).normalize(),i[3].setComponents(l-o,f-u,x-y,C-D).normalize(),i[4].setComponents(l-a,f-d,x-w,C-T).normalize(),t===$s)i[5].setComponents(l+a,f+d,x+w,C+T).normalize();else if(t===$h)i[5].setComponents(a,d,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(cl.x=n.normal.x>0?e.max.x:e.min.x,cl.y=n.normal.y>0?e.max.y:e.min.y,cl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kp extends Yp{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jc extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ei=new ce;class Mu{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ei.fromBufferAttribute(this,t),Ei.applyMatrix4(e),this.setXYZ(t,Ei.x,Ei.y,Ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ei.fromBufferAttribute(this,t),Ei.applyNormalMatrix(e),this.setXYZ(t,Ei.x,Ei.y,Ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ei.fromBufferAttribute(this,t),Ei.transformDirection(e),this.setXYZ(t,Ei.x,Ei.y,Ei.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tf=new ce,Ef=new Qi,Af=new Qi,fS=new ce,Rf=new wt,hl=new ce,Zc=new Dn,Cf=new wt,Qc=new zl;class pS extends kl{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kd,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ts),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hl),this.boundingBox.expandByPoint(hl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hl),this.boundingSphere.expandByPoint(hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(n),e.ray.intersectsSphere(Zc)!==!1&&(Cf.copy(n).invert(),Qc.copy(e.ray).applyMatrix4(Cf),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qi,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Ef.fromBufferAttribute(n.attributes.skinIndex,e),Af.fromBufferAttribute(n.attributes.skinWeight,e),Tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Af.getComponent(s);if(o!==0){const a=Ef.getComponent(s);Rf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fS.copy(Tf).applyMatrix4(Rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jp extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zp extends yn{constructor(e=null,t=1,i=1,n,s,o,a,l,h=Wh,u=Wh,d,f){super(null,o,a,l,h,u,n,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lf=new wt,mS=new wt;class Su{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new wt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:mS;Lf.multiplyMatrices(a,t[s]),Lf.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Su(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Zp(t,e,e,Gp,xu);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Jp),this.bones.push(o),this.boneInverses.push(new wt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class Kh extends vn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new wt,Pf=new wt,ul=[],If=new ts,gS=new wt,Po=new kl,Io=new Dn;class xS extends kl{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,gS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),If.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(If)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Io.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,zr),Pf.multiplyMatrices(i,zr),Po.matrixWorld=Pf,Po.raycast(e,ul);for(let o=0,a=ul.length;o<a;o++){const l=ul[o];l.instanceId=s,l.object=this,t.push(l)}ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zp(new Float32Array(n*this.count),n,this.count,SM,xu));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qp extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ai(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new ce,Nl=new ce,Df=new wt,Do=new zl,dl=new Dn,eh=new ce,Nf=new ce;class wu extends Jt{constructor(e=new lo,t=new Qp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Dl.fromBufferAttribute(t,n-1),Nl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Dl.distanceTo(Nl);e.setAttribute("lineDistance",new yu(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(n),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Df.copy(n).invert(),Do.copy(e.ray).applyMatrix4(Df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let w=m,x=y-1;w<x;w+=h){const v=u.getX(w),D=u.getX(w+1),T=fl(this,e,Do,l,v,D);T&&t.push(T)}if(this.isLineLoop){const w=u.getX(y-1),x=u.getX(m),v=fl(this,e,Do,l,w,x);v&&t.push(v)}}else{const m=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let w=m,x=y-1;w<x;w+=h){const v=fl(this,e,Do,l,w,w+1);v&&t.push(v)}if(this.isLineLoop){const w=fl(this,e,Do,l,y-1,m);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(r,e,t,i,n,s){const o=r.geometry.attributes.position;if(Dl.fromBufferAttribute(o,n),Nl.fromBufferAttribute(o,s),t.distanceSqToSegment(Dl,Nl,eh,Nf)>i)return;eh.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(eh);if(!(l<e.near||l>e.far))return{distance:l,point:Nf.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,object:r}}const Uf=new ce,Ff=new ce;class _S extends wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Uf.fromBufferAttribute(t,n),Ff.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Uf.distanceTo(Ff);e.setAttribute("lineDistance",new yu(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yS extends wu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class em extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ai(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Of=new wt,Jh=new zl,pl=new Dn,ml=new ce;class vS extends Jt{constructor(e=new lo,t=new em){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(n),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;Of.copy(n).invert(),Jh.copy(e.ray).applyMatrix4(Of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=f,w=m;y<w;y++){const x=h.getX(y);ml.fromBufferAttribute(d,x),Bf(ml,x,l,n,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,w=m;y<w;y++)ml.fromBufferAttribute(d,y),Bf(ml,y,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bf(r,e,t,i,n,s,o){const a=Jh.distanceSqToPoint(r);if(a<t){const l=new ce;Jh.closestPointToPoint(r,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class bu extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ai(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ai(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TM,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ao,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends bu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Si(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ai(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ai(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ai(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function gl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function MS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function SS(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function zf(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function tm(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}class aa{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wS extends aa{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jd,endingEnd:Jd}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zd:s=e,a=2*t-i;break;case Qd:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zd:o=e,l=2*i-t;break;case Qd:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const h=(i-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,y=(i-t)/(n-t),w=y*y,x=w*y,v=-f*x+2*f*w-f*y,D=(1+f)*x+(-1.5-2*f)*w+(-.5+f)*y+1,T=(-1-m)*x+(1.5+m)*w+.5*y,C=m*x-m*w;for(let g=0;g!==a;++g)s[g]=v*o[u+g]+D*o[h+g]+T*o[l+g]+C*o[d+g];return s}}class bS extends aa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(i-t)/(n-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[h+f]*d+o[l+f]*u;return s}}class TS extends aa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gl(t,this.TimeBufferType),this.values=gl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gl(e.times,Array),values:gl(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new TS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $o:t=this.InterpolantFactoryMethodDiscrete;break;case Yo:t=this.InterpolantFactoryMethodLinear;break;case Ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&MS(n))for(let a=0,l=n.length;a!==l;++a){const h=n[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ic,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(n)l=!0;else{const d=a*i,f=d-i,m=d+i;for(let y=0;y!==i;++y){const w=t[d+y];if(w!==t[f+y]||w!==t[m+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,h=0;h!==i;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Yo;class co extends Un{constructor(e,t,i){super(e,t,i)}}co.prototype.ValueTypeName="bool";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=$o;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;class im extends Un{}im.prototype.ValueTypeName="color";class to extends Un{}to.prototype.ValueTypeName="number";class ES extends aa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let h=e*a;for(let u=h+a;h!==u;h+=4)bs.slerpFlat(s,0,o,h-a,o,h,l);return s}}class io extends Un{InterpolantFactoryMethodLinear(e){return new ES(this.times,this.values,this.getValueSize(),e)}}io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends Un{constructor(e,t,i){super(e,t,i)}}ho.prototype.ValueTypeName="string";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=$o;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Un{}no.prototype.ValueTypeName="vector";class AS{constructor(e="",t=-1,i=[],n=wM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(CS(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Un.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],h=[];l.push((a+s-1)%s,a,(a+1)%s),h.push(0,1,0);const u=SS(l);l=zf(l,1,u),h=zf(h,1,u),!n&&l[0]===0&&(l.push(s),h.push(h[0])),o.push(new to(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],u=h.name.match(s);if(u&&u.length>1){const d=u[1];let f=n[d];f||(n[d]=f=[]),f.push(h)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,m,y,w){if(m.length!==0){const x=[],v=[];tm(m,x,v,y),x.length!==0&&w.push(new d(f,x,v))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let y;for(y=0;y<f.length;y++)if(f[y].morphTargets)for(let w=0;w<f[y].morphTargets.length;w++)m[f[y].morphTargets[w]]=-1;for(const w in m){const x=[],v=[];for(let D=0;D!==f[y].morphTargets.length;++D){const T=f[y];x.push(T.time),v.push(T.morphTarget===w?1:0)}n.push(new to(".morphTargetInfluence["+w+"]",x,v))}l=m.length*o}else{const m=".bones["+t[d].name+"]";i(no,m+".position",f,"pos",n),i(io,m+".quaternion",f,"rot",n),i(no,m+".scale",f,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function RS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return im;case"quaternion":return io;case"bool":case"boolean":return co;case"string":return ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function CS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=RS(r.type);if(r.times===void 0){const t=[],i=[];tm(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class LS{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&n.onStart!==void 0&&n.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const m=h[d],y=h[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}}const PS=new LS;class uo{constructor(e){this.manager=e!==void 0?e:PS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class IS extends Error{constructor(e,t){super(e),this.response=t}}class nm extends uo{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:i,onError:n});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=$n[e],d=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),m=f?parseInt(f):0,y=m!==0;let w=0;const x=new ReadableStream({start(v){D();function D(){d.read().then(({done:T,value:C})=>{if(T)v.close();else{w+=C.byteLength;const g=new ProgressEvent("progress",{lengthComputable:y,loaded:w,total:m});for(let F=0,U=u.length;F<U;F++){const q=u[F];q.onProgress&&q.onProgress(g)}v.enqueue(C),D()}},T=>{v.error(T)})}}});return new Response(x)}else throw new IS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return h.arrayBuffer().then(y=>m.decode(y))}}}).then(h=>{xs.add(e,h);const u=$n[e];delete $n[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(h)}}).catch(h=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),h;delete $n[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class DS extends uo{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Yh("img");function l(){u(),xs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(d){u(),n&&n(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class NS extends uo{constructor(e){super(e)}load(e,t,i,n){const s=new yn,o=new DS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class Tu extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ai(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const th=new wt,kf=new ce,Hf=new ce;class Eu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uS,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Qi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hf),t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class US extends Eu{constructor(){super(new vu(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ko*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class FS extends Tu{constructor(e,t,i=0,n=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new US}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vf=new wt,No=new ce,ih=new ce;class OS extends Eu{constructor(){super(new vu(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new Qi(2,1,1,1),new Qi(0,1,1,1),new Qi(3,1,1,1),new Qi(1,1,1,1),new Qi(3,0,1,1),new Qi(1,0,1,1)],this._cubeDirections=[new ce(1,0,0),new ce(-1,0,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,1,0),new ce(0,-1,0)],this._cubeUps=[new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,0,1),new ce(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),i.position.copy(No),ih.copy(i.position),ih.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ih),i.updateMatrixWorld(),n.makeTranslation(-No.x,-No.y,-No.z),Vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf)}}class BS extends Tu{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new OS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zS extends Eu{constructor(){super(new Kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kS extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new zS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class HS extends uo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xs.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return xs.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){n&&n(h),xs.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});xs.add(e,l),s.manager.itemStart(e)}}const Au="\\[\\]\\.:\\/",VS=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",GS="[^"+Au.replace("\\.","")+"]",WS=/((?:WC+[\/:])*)/.source.replace("WC",Ru),XS=/(WCOD+)?/.source.replace("WCOD",GS),qS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),jS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),$S=new RegExp("^"+WS+XS+qS+jS+"$"),YS=["material","materials","bones","map"];class KS{constructor(e,t,i){const n=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Dt{constructor(e,t,i){this.path=t,this.parsedPath=i||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,i):new Dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VS,"")}static parseTrackName(e){const t=$S.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);YS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[n];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=KS;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);var Cu=new nM;Cu.add(new fu(new M(10,0,0),new M(10,690,0)));Cu.add(new fu(new M(10,690,0),new M(890,690,0)));Cu.add(new Bp(new M(0,1,0),new M(0,0,1),new M(1,0,0)));new oa([new M(0,0,0),new M(5,0,5),new M(0,0,10),new M(-5,0,5)],!0);new oa([new M(0,1,0),new M(3,1,0),new M(6,1,0),new M(9,1,0),new M(12,1,0),new M(15,1,0),new M(17.5,1,.67),new M(19.33,1,2.5),new M(20,1,5),new M(19.33,1,7.5),new M(17.5,1,9.33),new M(15,1,10),new M(12,1,10),new M(9,1,10),new M(6,1,10),new M(3,1,10),new M(0,1,10),new M(-3,1,10),new M(-6,1,10),new M(-9,1,10),new M(-12,1,10),new M(-15,1,10),new M(-17.5,1,9.33),new M(-19.33,1,7.5),new M(-20,1,5),new M(-19.33,1,2.5),new M(-17.5,1,.67),new M(-15,1,0),new M(-12,1,0),new M(-9,1,0),new M(-6,1,0),new M(-3,1,0)],!0);const JS=new oa([new M(-.5,0,0),new M(.53,0,0),new M(1.22,0,0),new M(1.72,0,0),new M(3.04,.02,0),new M(3.41,.05,0),new M(3.55,.08,0),new M(3.75,.09,0),new M(4,.1,0),new M(4.25,.09,0),new M(4.45,.08,0),new M(4.59,.05,0),new M(5.11,.02,0),new M(6.33,0,0),new M(6.65,0,0),new M(6.96,0,0),new M(7.25,0,-.01),new M(7.52,0,-.02),new M(7.75,0,-.05),new M(7.95,0,-.1),new M(8.13,0,-.16),new M(8.3,0,-.24),new M(8.45,0,-.35),new M(8.59,0,-.47),new M(8.7,0,-.62),new M(8.79,0,-.78),new M(8.87,0,-.95),new M(8.92,0,-1.13),new M(8.95,0,-1.32),new M(8.98,0,-1.5),new M(8.99,0,-1.69),new M(8.99,0,-1.89),new M(8.99,0,-2.11),new M(8.99,0,-2.38),new M(8.99,0,-2.68),new M(8.99,0,-3),new M(8.99,0,-3.32),new M(8.99,0,-3.65),new M(8.99,0,-3.98),new M(8.99,0,-4.29),new M(8.99,0,-4.59),new M(8.99,0,-4.86),new M(8.99,0,-5.08),new M(8.99,0,-5.26),new M(8.99,0,-5.38),new M(8.99,0,-5.46),new M(8.99,0,-5.52),new M(8.98,0,-5.59),new M(8.96,0,-5.7),new M(8.92,0,-5.85),new M(8.87,0,-6.02),new M(8.8,0,-6.19),new M(8.71,0,-6.36),new M(8.6,0,-6.5),new M(8.47,0,-6.63),new M(8.32,0,-6.74),new M(8.15,0,-6.82),new M(7.98,0,-6.89),new M(7.79,0,-6.93),new M(7.61,0,-6.96),new M(7.43,0,-6.98),new M(7.26,0,-6.99),new M(7.09,0,-6.99),new M(6.92,0,-7),new M(6.75,0,-7),new M(6.54,0,-7),new M(6.31,0,-7),new M(6.03,0,-7),new M(5.72,0,-7),new M(5.4,0,-7),new M(5.08,0,-7),new M(4.75,0,-7),new M(4.42,0,-7),new M(4.1,0,-7),new M(3.77,0,-7),new M(3.45,0,-7),new M(3.12,0,-7),new M(2.79,0,-7),new M(2.47,0,-7),new M(2.14,0,-7),new M(1.82,0,-7),new M(1.49,0,-7),new M(1.16,0,-7),new M(.84,0,-7),new M(.51,0,-7),new M(.18,0,-7),new M(-.13,0,-7),new M(-.46,0,-7),new M(-.78,0,-7),new M(-1.11,0,-7),new M(-1.44,0,-7),new M(-1.76,0,-7),new M(-2.09,0,-7),new M(-2.41,0,-7),new M(-2.73,0,-7),new M(-3.04,0,-7),new M(-3.31,0,-7),new M(-3.55,0,-7),new M(-3.75,0,-7),new M(-3.93,0,-7),new M(-4.1,0,-6.99),new M(-4.26,0,-6.99),new M(-4.44,0,-6.98),new M(-4.62,0,-6.96),new M(-4.8,0,-6.93),new M(-4.98,0,-6.88),new M(-5.16,0,-6.82),new M(-5.33,0,-6.73),new M(-5.48,0,-6.63),new M(-5.61,0,-6.5),new M(-5.72,0,-6.35),new M(-5.81,0,-6.19),new M(-5.88,0,-6.01),new M(-5.93,0,-5.83),new M(-5.96,0,-5.64),new M(-5.98,0,-5.47),new M(-5.99,0,-5.31),new M(-5.99,0,-5.17),new M(-6,0,-5.08),new M(-6,0,-5),new M(-6,0,-4.91),new M(-6,0,-4.77),new M(-6,0,-4.55),new M(-6,0,-4.28),new M(-6,0,-3.97),new M(-6,0,-3.65),new M(-6,0,-3.36),new M(-6,0,-3.09),new M(-6,0,-2.87),new M(-6,0,-2.67),new M(-6.02,0,-2.48),new M(-6.04,0,-2.3),new M(-6.08,0,-2.12),new M(-6.13,0,-1.94),new M(-6.2,0,-1.76),new M(-6.3,0,-1.6),new M(-6.41,0,-1.46),new M(-6.55,0,-1.34),new M(-6.7,0,-1.23),new M(-6.87,0,-1.15),new M(-7.05,0,-1.09),new M(-7.24,0,-1.05),new M(-7.42,0,-1.02),new M(-7.6,0,-1.01),new M(-7.77,0,-1),new M(-7.93,0,-1),new M(-8.1,0,-1),new M(-8.28,0,-1),new M(-8.49,0,-1),new M(-8.74,0,-1),new M(-9,0,-1),new M(-9.27,0,-1),new M(-9.51,0,-1),new M(-9.72,0,-1),new M(-9.9,0,-1),new M(-10.07,0,-1),new M(-10.23,0,-1),new M(-10.4,0,-1.01),new M(-10.58,0,-1.02),new M(-10.76,0,-1.05),new M(-10.95,0,-1.09),new M(-11.13,0,-1.16),new M(-11.29,0,-1.24),new M(-11.45,0,-1.34),new M(-11.58,0,-1.47),new M(-11.7,0,-1.61),new M(-11.79,0,-1.77),new M(-11.87,0,-1.94),new M(-11.92,0,-2.13),new M(-11.96,0,-2.32),new M(-12,0,-2.51),new M(-12.04,0,-2.71),new M(-12.08,0,-2.9),new M(-12.14,0,-3.08),new M(-12.22,0,-3.25),new M(-12.31,0,-3.41),new M(-12.43,0,-3.55),new M(-12.57,0,-3.67),new M(-12.73,0,-3.77),new M(-12.9,0,-3.85),new M(-13.08,0,-3.9),new M(-13.26,0,-3.95),new M(-13.44,0,-3.97),new M(-13.62,0,-3.99),new M(-13.79,0,-3.99),new M(-13.96,0,-3.99),new M(-14.13,0,-3.99),new M(-14.31,0,-4),new M(-14.52,0,-4),new M(-14.78,0,-4),new M(-15.07,0,-4),new M(-15.38,0,-4),new M(-15.7,0,-4),new M(-16.03,0,-4),new M(-16.35,0,-4),new M(-16.67,0,-4),new M(-16.98,0,-4),new M(-17.27,0,-4),new M(-17.51,0,-4),new M(-17.72,0,-4),new M(-17.9,0,-3.99),new M(-18.07,0,-3.99),new M(-18.23,0,-3.99),new M(-18.4,0,-3.98),new M(-18.58,0,-3.97),new M(-18.76,0,-3.94),new M(-18.95,0,-3.9),new M(-19.13,0,-3.83),new M(-19.3,0,-3.75),new M(-19.45,0,-3.65),new M(-19.58,0,-3.52),new M(-19.7,0,-3.38),new M(-19.79,0,-3.22),new M(-19.87,0,-3.05),new M(-19.92,0,-2.86),new M(-19.95,0,-2.68),new M(-19.98,0,-2.5),new M(-19.99,0,-2.31),new M(-19.99,0,-2.11),new M(-20,0,-1.89),new M(-20,0,-1.62),new M(-20,0,-1.32),new M(-20,0,-1.01),new M(-20,0,-.69),new M(-20,0,-.39),new M(-20,0,-.12),new M(-19.99,0,.1),new M(-19.99,0,.3),new M(-19.98,0,.48),new M(-19.96,0,.67),new M(-19.92,0,.85),new M(-19.87,0,1.03),new M(-19.8,0,1.21),new M(-19.71,0,1.37),new M(-19.59,0,1.51),new M(-19.46,0,1.64),new M(-19.31,0,1.74),new M(-19.14,0,1.83),new M(-18.96,0,1.89),new M(-18.78,0,1.94),new M(-18.59,0,1.97),new M(-18.41,0,1.98),new M(-18.22,0,1.99),new M(-18.01,0,1.99),new M(-17.77,0,1.99),new M(-17.5,0,2),new M(-17.24,0,2),new M(-16.99,0,2),new M(-16.78,0,2),new M(-16.59,0,2.01),new M(-16.41,0,2.02),new M(-16.23,0,2.05),new M(-16.04,0,2.1),new M(-15.86,0,2.16),new M(-15.7,0,2.24),new M(-15.54,0,2.34),new M(-15.41,0,2.47),new M(-15.29,0,2.61),new M(-15.2,0,2.77),new M(-15.13,0,2.95),new M(-15.07,0,3.13),new M(-15.04,0,3.31),new M(-15.02,0,3.5),new M(-15,0,3.68),new M(-15,0,3.88),new M(-15,0,4.11),new M(-15,0,4.37),new M(-15,0,4.67),new M(-15,0,4.99),new M(-15,0,5.31),new M(-15,0,5.64),new M(-15,0,5.96),new M(-15,0,6.28),new M(-15,0,6.58),new M(-15,0,6.85),new M(-14.99,0,7.09),new M(-14.99,0,7.29),new M(-14.98,0,7.47),new M(-14.96,0,7.65),new M(-14.92,0,7.84),new M(-14.87,0,8.02),new M(-14.8,0,8.2),new M(-14.71,0,8.36),new M(-14.6,0,8.51),new M(-14.47,0,8.63),new M(-14.32,0,8.74),new M(-14.15,0,8.82),new M(-13.97,0,8.89),new M(-13.79,0,8.93),new M(-13.61,0,8.96),new M(-13.43,0,8.98),new M(-13.25,0,8.99),new M(-13.09,0,8.99),new M(-12.92,0,9),new M(-12.74,0,9),new M(-12.54,0,9),new M(-12.3,0,9),new M(-12.02,0,9),new M(-11.72,0,9),new M(-11.4,0,9),new M(-11.07,0,9),new M(-10.74,0,9),new M(-10.42,0,9),new M(-10.09,0,9),new M(-9.77,0,9),new M(-9.44,0,9),new M(-9.11,0,9),new M(-8.79,0,9),new M(-8.46,0,9),new M(-8.13,0,9),new M(-7.81,0,9),new M(-7.48,0,9),new M(-7.16,0,9),new M(-6.83,0,9),new M(-6.51,0,9),new M(-6.19,0,9),new M(-5.89,0,9),new M(-5.62,0,9),new M(-5.39,0,9),new M(-5.2,0,8.99),new M(-5.02,0,8.99),new M(-4.86,0,8.99),new M(-4.69,0,8.99),new M(-4.52,0,8.98),new M(-4.34,0,8.96),new M(-4.15,0,8.92),new M(-3.97,0,8.87),new M(-3.79,0,8.8),new M(-3.63,0,8.71),new M(-3.48,0,8.6),new M(-3.36,0,8.47),new M(-3.25,0,8.31),new M(-3.17,0,8.15),new M(-3.1,0,7.97),new M(-3.06,0,7.79),new M(-3.03,0,7.6),new M(-3.01,0,7.42),new M(-3,0,7.23),new M(-3,0,7.02),new M(-3,0,6.78),new M(-3,0,6.5),new M(-3,0,6.19),new M(-3,0,5.87),new M(-3,0,5.55),new M(-3,0,5.22),new M(-3,0,4.89),new M(-3,0,4.57),new M(-3,0,4.24),new M(-3,0,3.91),new M(-3,0,3.59),new M(-3,0,3.27),new M(-3,0,2.96),new M(-3,0,2.66),new M(-3,0,2.38),new M(-3,0,2.13),new M(-2.99,0,1.9),new M(-2.99,0,1.69),new M(-2.97,0,1.49),new M(-2.95,0,1.29),new M(-2.91,0,1.1),new M(-2.86,0,.92),new M(-2.78,0,.75),new M(-2.68,0,.59),new M(-2.57,0,.45),new M(-2.42,0,.33),new M(-2.26,0,.22),new M(-2.07,0,.14),new M(-1.84,0,.08),new M(-1.59,0,.03),new M(-1.29,0,.01),new M(-.91,0,0)],!0);function ZS(r,e){const t=r.getPoints(100);for(let i=0;i<t.length;i++)t[i].multiplyScalar(e),t[i].add(new M(0,1,0));return new oa(t)}const QS=ZS(JS,3);function Gf(r,e){if(e===bM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Xh||e===Wp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===Xh)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ew extends uo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new yw(t)})}load(e,t,i,n){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Go.extractUrlBase(e);o=Go.resolveURL(h,this.path)}else o=Go.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){n?n(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new nm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sm){try{o[_t.KHR_BINARY_GLTF]=new vw(e)}catch(d){n&&n(d);return}s=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Dw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case _t.KHR_MATERIALS_UNLIT:o[d]=new nw;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[d]=new Mw(s,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[d]=new Sw;break;case _t.KHR_MESH_QUANTIZATION:o[d]=new ww;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function tw(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class iw{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const u=new ai(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],nn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new kS(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new BS(u),h.distance=d;break;case"spot":h=new FS(u),h.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Kn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(h),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class nw{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Gr}extendParams(e,t,i){const n=[];e.color=new ai(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Wi))}return Promise.all(n)}}class sw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class rw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $t(a,a)}return Promise.all(s)}}class ow{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class aw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class lw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ai(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wi)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class cw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class hw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ai().setRGB(a[0],a[1],a[2],nn),Promise.all(s)}}class uw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class dw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ai().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Wi)),Promise.all(s)}}class fw{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class pw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class mw{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class gw{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const h=i.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xw{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const h=i.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _w{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=n.byteOffset||0,h=n.byteLength||0,u=n.count,d=n.byteStride,f=new Uint8Array(a,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,n.mode,n.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(m),u,d,f,n.mode,n.filter),m})})}else return null}}class yw{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const h of n.primitives)if(h.mode!==Ji.TRIANGLES&&h.mode!==Ji.TRIANGLE_STRIP&&h.mode!==Ji.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const u=h.pop(),d=u.isGroup?u.children:[u],f=h[0].count,m=[];for(const y of d){const w=new wt,x=new ce,v=new bs,D=new ce(1,1,1),T=new xS(y.geometry,y.material,f);for(let C=0;C<f;C++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,C),l.SCALE&&D.fromBufferAttribute(l.SCALE,C),T.setMatrixAt(C,w.compose(x,v,D));for(const C in l)if(C==="_COLOR_0"){const g=l[C];T.instanceColor=new Kh(g.array,g.itemSize,g.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&y.geometry.setAttribute(C,l[C]);Jt.prototype.copy.call(T,y),this.parser.assignFinalMaterial(T),m.push(T)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const sm="glTF",Uo=12,Wf={JSON:1313821514,BIN:5130562};class vw{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Uo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Uo,s=new DataView(e,Uo);let o=0;for(;o<n;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Wf.JSON){const h=new Uint8Array(e,Uo+o,a);this.content=i.decode(h)}else if(l===Wf.BIN){const h=Uo+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Mw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},h={};for(const u in o){const d=Zh[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Zh[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],m=$r[f.componentType];h[d]=m.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){n.decodeDracoFile(u,function(m){for(const y in m.attributes){const w=m.attributes[y],x=l[y];x!==void 0&&(w.normalized=x)}d(m)},a,h,nn,f)})})}}class Sw{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ww{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class rm extends aa{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=n-t,d=(i-t)/u,f=d*d,m=f*d,y=e*h,w=y-h,x=-2*m+3*f,v=m-f,D=1-x,T=v-f+d;for(let C=0;C!==a;C++){const g=o[w+C+a],F=o[w+C+l]*u,U=o[y+C+a],q=o[y+C]*u;s[C]=D*g+T*F+x*U+v*q}return s}}const bw=new bs;class Tw extends rm{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return bw.fromArray(s).normalize().toArray(s),s}}const Ji={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xf={9728:Wh,9729:mu,9984:_M,9985:vM,9986:yM,9987:gu},qf={33071:Oo,33648:Gh,10497:jo},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ew={CUBICSPLINE:void 0,LINEAR:Yo,STEP:$o},sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Aw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new bu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Il})),r.DefaultMaterial}function ks(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Kn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Rw(r,e,t){let i=!1,n=!1,s=!1;for(let h=0,u=e.length;h<u;h++){const d=e[h];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let h=0,u=e.length;h<u;h++){const d=e[h];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;o.push(f)}if(n){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],d=h[1],f=h[2];return i&&(r.morphAttributes.position=u),n&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Cw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lw(r){let e;const t=r.extensions&&r.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rh(t.attributes):e=r.indices+":"+rh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+rh(r.targets[i]);return e}function rh(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Qh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Pw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Iw=new wt;class Dw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&o<98?this.textureLoader=new NS(this.options.manager):this.textureLoader=new HS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return ks(s,a,n),Kn(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[h,u]of o.children.entries())s(u,a.children[h])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,o){i.load(Go.resolveURL(t.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=nh[n.type],a=$r[n.componentType],l=n.normalized===!0,h=new a(n.count*o);return Promise.resolve(new vn(h,o,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=nh[n.type],h=$r[n.componentType],u=h.BYTES_PER_ELEMENT,d=u*l,f=n.byteOffset||0,m=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,y=n.normalized===!0;let w,x;if(m&&m!==d){const v=Math.floor(f/m),D="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+v+":"+n.count;let T=t.cache.get(D);T||(w=new h(a,v*m,n.count*m/u),T=new dS(w,m/u),t.cache.add(D,T)),x=new Mu(T,l,f%m/u,y)}else a===null?w=new h(n.count*l):w=new h(a,f,n.count*l),x=new vn(w,l,y);if(n.sparse!==void 0){const v=nh.SCALAR,D=$r[n.sparse.indices.componentType],T=n.sparse.indices.byteOffset||0,C=n.sparse.values.byteOffset||0,g=new D(o[1],T,n.sparse.count*v),F=new h(o[2],C,n.sparse.count*l);a!==null&&(x=new vn(x.array.slice(),x.itemSize,x.normalized));for(let U=0,q=g.length;U<q;U++){const N=g[U];if(x.setX(N,F[U*l]),l>=2&&x.setY(N,F[U*l+1]),l>=3&&x.setZ(N,F[U*l+2]),l>=4&&x.setW(N,F[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const n=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Xf[f.magFilter]||mu,u.minFilter=Xf[f.minFilter]||gu,u.wrapS=qf[f.wrapS]||jo,u.wrapT=qf[f.wrapT]||jo,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){h=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let y=f;t.isImageBitmapLoader===!0&&(y=function(w){const x=new yn(w);x.needsUpdate=!0,f(x)}),t.load(Go.resolveURL(d,s.path),y,void 0,m)})}).then(function(d){return h===!0&&a.revokeObjectURL(l),Kn(d,o),d.userData.mimeType=o.mimeType||Pw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[_t.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new em,Ys.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Qp,Ys.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return bu}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},h=[];if(l[_t.KHR_MATERIALS_UNLIT]){const d=n[_t.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),h.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new ai(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],nn),a.opacity=f[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",d.baseColorTexture,Wi)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=mM);const u=s.alphaMode||sh.OPAQUE;if(u===sh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Gr&&(h.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $t(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Gr&&(h.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Gr){const d=s.emissiveFactor;a.emissive=new ai().setRGB(d[0],d[1],d[2],nn)}return s.emissiveTexture!==void 0&&o!==Gr&&h.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Wi)),Promise.all(h).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Kn(d,s),t.associations.set(d,{materials:e}),s.extensions&&ks(n,d,s),d})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const h=e[a],u=Lw(h),d=n[u];if(d)o.push(d.promise);else{let f;h.extensions&&h.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=s(h):f=jf(new lo,h,t),n[u]={primitive:h,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,h=o.length;l<h;l++){const u=o[l].material===void 0?Aw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,y=u.length;m<y;m++){const w=u[m],x=o[m];let v;const D=h[m];if(x.mode===Ji.TRIANGLES||x.mode===Ji.TRIANGLE_STRIP||x.mode===Ji.TRIANGLE_FAN||x.mode===void 0)v=s.isSkinnedMesh===!0?new pS(w,D):new kl(w,D),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),x.mode===Ji.TRIANGLE_STRIP?v.geometry=Gf(v.geometry,Wp):x.mode===Ji.TRIANGLE_FAN&&(v.geometry=Gf(v.geometry,Xh));else if(x.mode===Ji.LINES)v=new _S(w,D);else if(x.mode===Ji.LINE_STRIP)v=new wu(w,D);else if(x.mode===Ji.LINE_LOOP)v=new yS(w,D);else if(x.mode===Ji.POINTS)v=new vS(w,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(v.geometry.morphAttributes).length>0&&Cw(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),Kn(v,s),x.extensions&&ks(n,v,x),t.assignFinalMaterial(v),d.push(v)}for(let m=0,y=d.length;m<y;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return s.extensions&&ks(n,d[0],s),d[0];const f=new Jc;s.extensions&&ks(n,f,s),t.associations.set(f,{meshes:e});for(let m=0,y=d.length;m<y;m++)f.add(d[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new vu(GM.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Kp(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Kn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),o=n,a=[],l=[];for(let h=0,u=o.length;h<u;h++){const d=o[h];if(d){a.push(d);const f=new wt;s!==null&&f.fromArray(s.array,h*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Su(a,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,o=[],a=[],l=[],h=[],u=[];for(let d=0,f=n.channels.length;d<f;d++){const m=n.channels[d],y=n.samplers[m.sampler],w=m.target,x=w.node,v=n.parameters!==void 0?n.parameters[y.input]:y.input,D=n.parameters!==void 0?n.parameters[y.output]:y.output;w.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",v)),l.push(this.getDependency("accessor",D)),h.push(y),u.push(w))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(d){const f=d[0],m=d[1],y=d[2],w=d[3],x=d[4],v=[];for(let D=0,T=f.length;D<T;D++){const C=f[D],g=m[D],F=y[D],U=w[D],q=x[D];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const N=i._createAnimationTracks(C,g,F,U,q);if(N)for(let L=0;L<N.length;L++)v.push(N[L])}return new AS(s,void 0,v)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,h=n.weights.length;l<h;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=n.children||[];for(let h=0,u=a.length;h<u;h++)o.push(i.getDependency("node",a[h]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),l]).then(function(h){const u=h[0],d=h[1],f=h[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,Iw)});for(let m=0,y=d.length;m<y;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(h){return n._getNodeRef(n.cameraCache,s.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let u;if(s.isBone===!0?u=new Jp:h.length>1?u=new Jc:h.length===1?u=h[0]:u=new Jt,u!==h[0])for(let d=0,f=h.length;d<f;d++)u.add(h[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Kn(u,s),s.extensions&&ks(i,u,s),s.matrix!==void 0){const d=new wt;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Jc;i.name&&(s.name=n.createUniqueName(i.name)),Kn(s,i),i.extensions&&ks(t,s,i);const o=i.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const h=u=>{const d=new Map;for(const[f,m]of n.associations)(f instanceof Ys||f instanceof yn)&&d.set(f,m);return u.traverse(f=>{const m=n.associations.get(f);m!=null&&d.set(f,m)}),d};return n.associations=h(s),s})}_createAnimationTracks(e,t,i,n,s){const o=[],a=e.name?e.name:e.uuid,l=[];ms[s.path]===ms.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let h;switch(ms[s.path]){case ms.weights:h=to;break;case ms.rotation:h=io;break;case ms.position:case ms.scale:h=no;break;default:switch(i.itemSize){case 1:h=to;break;case 2:case 3:default:h=no;break}break}const u=n.interpolation!==void 0?Ew[n.interpolation]:Yo,d=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const y=new h(l[f]+"."+ms[s.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Qh(t.constructor),n=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof io?Tw:rm;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Nw(r,e,t){const i=e.attributes,n=new ts;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(n.set(new ce(l[0],l[1],l[2]),new ce(h[0],h[1],h[2])),a.normalized){const u=Qh($r[a.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new ce,l=new ce;for(let h=0,u=s.length;h<u;h++){const d=s[h];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],m=f.min,y=f.max;if(m!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(y[2]))),f.normalized){const w=Qh($r[f.componentType]);l.multiplyScalar(w)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;const o=new Dn;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function jf(r,e,t){const i=e.attributes,n=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in i){const a=Zh[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});n.push(o)}return Gi.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gi.workingColorSpace}" not supported.`),Kn(r,e),Nw(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Rw(r,e.targets,t):r})}const Uw=new Qs(1,1,1),Fw=new sa({color:65280});new Xi(Uw,Fw);const Ow=new sa({color:16755200}),Bw=new Qs(1,1,3);let zw=new Xi(Bw,Ow);const om=new ra(1e3,1e3,32,32);om.rotateX(Math.PI/2);const kw=new sM({color:5592422,side:An}),Hw=new Xi(om,kw),la={};la.bus=zw;la.road=Hw;const Wo=new rM;Wo.onStart=function(r,e,t){console.log("Started loading file: "+r+`.
Loaded `+e+" of "+t+" files.")};Wo.onProgress=function(r,e,t){console.log("Loading file: "+r+`.
Loaded `+e+" of "+t+" files.")};function Vw(r){console.log("STARTING LOAD"),Wo.onLoad=r,Wo.onError=r;const e=new ew(Wo);e.load("./models/small-bus.glb",t=>{$f(t,.4,"bus")}),e.load("./models/scene.glb",t=>{$f(t,3,"road")})}function $f(r,e,t){r.scene.scale.set(e,e,e),la[t]=r.scene}const Jo=2736,Zo=1216,am=new hM(!0),Zs=QS,Gw=new pu(Zs,100,2,8,!1),Ww=new sa({color:16711680}),Xw=new Xi(Gw,Ww);Xw.scale.set(4,4,4);const Hl=new Gv({antialias:!0,powerPreference:"high-performance"});Hl.setSize(Jo,Zo);Hl.shadowMap.enabled=!0;document.body.appendChild(Hl.domElement);new Zi(75,Jo/Zo,.1,100);const xl=1/25,qw=new hu(Jo*xl/-2,Jo*xl/2,Zo*xl/2,Zo*xl/-2,.1,200),er=qw,jw=new M(20,32,40),$w=new M(-4,9,2);er.position.set(0,0,0);er.position.add(jw);er.lookAt(0,0,0);er.position.add($w);const Yr=new Wv,lm=new lM(16777210,6);lm.position.set(5e3,1e4,-5e3);const Yw=new cM(8900331,4);function Kw(){Yr.add(lm),Yr.add(Yw),Yr.add(la.road)}const Bo=5,Hr=3,Yf=["■","▲","●","♥"],Kf=["#EE6352","#08B2E3","#57A773","#8657a7","#2222AA"],Jw=4,Jf=Jo/2,Zf=Zo/2,Zw=4.5/Zs.getLength();let cm=!1,bn=[],Gs=[];console.log("LOAD MODELS");Vw(ib);let oh=am.getDelta();function hm(){if(cm){oh=am.getDelta();for(let r=0;r<Hr;r++)eb(Gs[r],oh);for(let r=0;r<Bo;r++)tb(bn[r],oh)}requestAnimationFrame(hm),Hl.render(Yr,er)}hm();function um(r,e){e.x=e.x*Jf+Jf,e.y=-(e.y*Zf)+Zf,r.style.top=`${e.y}px`,r.style.left=`${e.x}px`}function Qw(r,e){let t=Zs.getPointAt(r),i=new M(0,0,0);return Zs.getTangentAt(r,i),i.normalize().multiplyScalar(e).applyAxisAngle(new M(0,1,0),Math.PI/2),t.add(i)}function eb(r,e){r.drivingTarget=r.destination.position;let t=(1+r.nextBus.position-Zw)%1;t<=r.destination.position&&t>r.position||r.nextBus.destination==r.destination&&(r.position<r.nextBus.position||r.nextBus.position==0)?r.drivingTarget=t:r.drivingTarget=r.destination.position,r.update(e);let i=Zs.getPointAt(r.position);r.model.position.copy(i),r.model.lookAt(Zs.getTangentAt(r.position).normalize().add(i));const n=document.getElementById(r.id),s=i.project(er);um(n,s)}function tb(r,e){r.update(e),um(document.getElementById(r.id),Qw(r.position,Jw).project(er))}function ib(){console.log("START SCENE"),Kw();for(let r=0;r<Bo;r++){let e=new fM(r,Yf[r%Yf.length],Kf[r%Kf.length]),t=r/Bo;e.position=t,bn.push(e)}for(let r=0;r<bn.length;r++)bn[r].next=bn[(r+1)%bn.length],bn[r].nextStops=bn.map(e=>e),bn[r].nextStops.splice(r,1);for(let r=0;r<Hr;r++){let e=new uM(r),t=la.bus.clone();t.position.copy(Zs.getPointAt(r/Hr)),Yr.add(t),e.model=t,e.position=r/Hr,e.destination=bn[Math.ceil(e.position*Bo)%Bo],Gs.push(e)}for(let r=0;r<Hr;r++)Gs[r].nextBus=Gs[(r+1)%Hr],document.addEventListener("keydown",function(e){Gs[r].holdBus(e)}),document.addEventListener("keyup",function(e){Gs[r].startBus(e)}),Yr.add(Gs[r].model);cm=!0}});export default nb();
