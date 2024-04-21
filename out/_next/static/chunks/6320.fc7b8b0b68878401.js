"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6320],{6320:function(t,e,a){a.d(e,{Eo:function(){return drawGif},loadGifImage:function(){return loadGifImage}});let o=[0,4,2,1],i=[8,8,4,2];let ByteStream=class ByteStream{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t)}getString(t){let e=this.data.slice(this.pos,this.pos+t);return this.pos+=e.length,e.reduce((t,e)=>t+String.fromCharCode(e),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let t="",e=0;do{e=this.data[this.pos++];for(let a=e;--a>=0;t+=String.fromCharCode(this.data[this.pos++]));}while(0!==e);return t}readSubBlocksBin(){let t=this.data[this.pos],e=0;for(let a=0;0!==t;a+=t+1,t=this.data[this.pos+a])e+=t;let a=new Uint8Array(e);t=this.data[this.pos++];for(let e=0;0!==t;t=this.data[this.pos++])for(let o=t;--o>=0;a[e++]=this.data[this.pos++]);return a}skipSubBlocks(){for(;0!==this.data[this.pos];this.pos+=this.data[this.pos]+1);this.pos++}};let r={x:0,y:0};function parseColorTable(t,e){let a=[];for(let o=0;o<e;o++)a.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return a}async function parseImageBlock(t,e,a,r,l,s){let n=e.frames[r(!0)];n.left=t.nextTwoBytes(),n.top=t.nextTwoBytes(),n.width=t.nextTwoBytes(),n.height=t.nextTwoBytes();let h=t.nextByte(),g=(128&h)==128;n.sortFlag=(32&h)==32,n.reserved=(24&h)>>>3,g&&(n.localColorTable=parseColorTable(t,1<<(7&h)+1));let getColor=t=>{let{r:o,g:i,b:r}=(g?n.localColorTable:e.globalColorTable)[t];return t!==l(null)?{r:o,g:i,b:r,a:255}:{r:o,g:i,b:r,a:a?~~((o+i+r)/3):0}},f=(()=>{try{return new ImageData(n.width,n.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==f)throw EvalError("GIF frame size is to large");let c=t.nextByte(),d=t.readSubBlocksBin(),p=1<<c,readBits=(t,e)=>{let a=t>>>3,o=7&t;return(d[a]+(d[a+1]<<8)+(d[a+2]<<16)&(1<<e)-1<<o)>>>o};if((64&h)==64){for(let a=0,l=c+1,h=0,g=[[0]],d=0;d<4;d++){if(o[d]<n.height){let t=0,e=0,r=!1;for(;!r;){let s=a;if(a=readBits(h,l),h+=l+1,a===p){l=c+1,g.length=p+2;for(let t=0;t<g.length;t++)g[t]=t<p?[t]:[]}else{for(let r of(a>=g.length?g.push(g[s].concat(g[s][0])):s!==p&&g.push(g[s].concat(g[a][0])),g[a])){let{r:a,g:l,b:s,a:h}=getColor(r);f.data.set([a,l,s,h],o[d]*n.width+i[d]*e+t%(4*n.width)),t+=4}g.length===1<<l&&l<12&&l++}t===4*n.width*(e+1)&&(e++,o[d]+i[d]*e>=n.height&&(r=!0))}}s?.(t.pos/(t.data.length-1),r(!1)+1,f,{x:n.left,y:n.top},{width:e.width,height:e.height})}n.image=f,n.bitmap=await createImageBitmap(f)}else{let a=0,o=c+1,i=0,l=-4,h=!1,g=[[0]];for(;!h;){let t=a;if(a=readBits(i,o),i+=o,a===p){o=c+1,g.length=p+2;for(let t=0;t<g.length;t++)g[t]=t<p?[t]:[]}else{if(a===p+1){h=!0;break}for(let e of(a>=g.length?g.push(g[t].concat(g[t][0])):t!==p&&g.push(g[t].concat(g[a][0])),g[a])){let{r:t,g:a,b:o,a:i}=getColor(e);f.data.set([t,a,o,i],l+=4)}g.length>=1<<o&&o<12&&o++}}n.image=f,n.bitmap=await createImageBitmap(f),s?.((t.pos+1)/t.data.length,r(!1)+1,n.image,{x:n.left,y:n.top},{width:e.width,height:e.height})}}async function parseBlock(t,e,a,o,i,r){switch(t.nextByte()){case 59:return!0;case 44:await parseImageBlock(t,e,a,o,i,r);break;case 33:!function(t,e,a,o){switch(t.nextByte()){case 249:{let i=e.frames[a(!1)];t.pos++;let r=t.nextByte();i.GCreserved=(224&r)>>>5,i.disposalMethod=(28&r)>>>2,i.userInputDelayFlag=(2&r)==2,i.delayTime=10*t.nextTwoBytes();let l=t.nextByte();(1&r)==1&&o(l),t.pos++;break}case 255:{t.pos++;let a={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(a);break}case 254:e.comments.push([a(!1),t.readSubBlocks()]);break;case 1:if(0===e.globalColorTable.length)throw EvalError("plain text extension without global color table");t.pos++,e.frames[a(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break;default:t.skipSubBlocks()}}(t,e,o,i);break;default:throw EvalError("undefined block found")}return!1}async function decodeGIF(t,e,a){a||(a=!1);let o=await fetch(t);if(!o.ok&&404===o.status)throw EvalError("file not found");let i=await o.arrayBuffer(),r={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},l=new ByteStream(new Uint8ClampedArray(i));if("GIF89a"!==l.getString(6))throw Error("not a supported GIF file");r.width=l.nextTwoBytes(),r.height=l.nextTwoBytes();let s=l.nextByte(),n=(128&s)==128;r.colorRes=(112&s)>>>4,r.sortFlag=(8&s)==8;let h=l.nextByte();r.pixelAspectRatio=l.nextByte(),0!==r.pixelAspectRatio&&(r.pixelAspectRatio=(r.pixelAspectRatio+15)/64),n&&(r.globalColorTable=parseColorTable(l,1<<(7&s)+1));let g=(()=>{try{return new ImageData(r.width,r.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==g)throw Error("GIF frame size is to large");let{r:f,g:c,b:d}=r.globalColorTable[h];g.data.set(n?[f,c,d,255]:[0,0,0,0]);for(let t=4;t<g.data.length;t*=2)g.data.copyWithin(t,0,t);r.backgroundImage=g;let p=-1,u=!0,m=-1,getframeIndex=t=>(t&&(u=!0),p),getTransparencyIndex=t=>(null!=t&&(m=t),m);try{do u&&(r.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),p++,m=-1,u=!1);while(!await parseBlock(l,r,a,getframeIndex,getTransparencyIndex,e));for(let t of(r.frames.length--,r.frames)){if(t.userInputDelayFlag&&0===t.delayTime){r.totalTime=1/0;break}r.totalTime+=t.delayTime}return r}catch(t){if(t instanceof EvalError)throw Error(`error while parsing frame ${p} "${t.message}"`);throw t}}function drawGif(t){let{context:e,radius:a,particle:o,delta:i}=t,l=o.image;if(!l?.gifData||!l.gif)return;let s=new OffscreenCanvas(l.gifData.width,l.gifData.height),n=s.getContext("2d");if(!n)throw Error("could not create offscreen canvas context");n.imageSmoothingQuality="low",n.imageSmoothingEnabled=!1,n.clearRect(r.x,r.y,s.width,s.height),void 0===o.gifLoopCount&&(o.gifLoopCount=l.gifLoopCount??0);let h=o.gifFrame??0,g={x:-(.5*l.gifData.width),y:-(.5*l.gifData.height)},f=l.gifData.frames[h];if(void 0===o.gifTime&&(o.gifTime=0),f.bitmap){switch(e.scale(a/l.gifData.width,a/l.gifData.height),f.disposalMethod){case 4:case 5:case 6:case 7:case 0:n.drawImage(f.bitmap,f.left,f.top),e.drawImage(s,g.x,g.y),n.clearRect(r.x,r.y,s.width,s.height);break;case 1:n.drawImage(f.bitmap,f.left,f.top),e.drawImage(s,g.x,g.y);break;case 2:n.drawImage(f.bitmap,f.left,f.top),e.drawImage(s,g.x,g.y),n.clearRect(r.x,r.y,s.width,s.height),l.gifData.globalColorTable.length?n.putImageData(l.gifData.backgroundImage,g.x,g.y):n.putImageData(l.gifData.frames[0].image,g.x+f.left,g.y+f.top);break;case 3:{let t=n.getImageData(r.x,r.y,s.width,s.height);n.drawImage(f.bitmap,f.left,f.top),e.drawImage(s,g.x,g.y),n.clearRect(r.x,r.y,s.width,s.height),n.putImageData(t,r.x,r.y)}}if(o.gifTime+=i.value,o.gifTime>f.delayTime){if(o.gifTime-=f.delayTime,++h>=l.gifData.frames.length){if(--o.gifLoopCount<=0)return;h=0,n.clearRect(r.x,r.y,s.width,s.height)}o.gifFrame=h}e.scale(l.gifData.width/a,l.gifData.height/a)}}async function loadGifImage(t){if("gif"!==t.type){let{loadImage:e}=await Promise.resolve().then(a.bind(a,4632));await e(t);return}t.loading=!0;try{t.gifData=await decodeGIF(t.source),t.gifLoopCount=function(t){for(let e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}(t.gifData)??0,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}}}]);