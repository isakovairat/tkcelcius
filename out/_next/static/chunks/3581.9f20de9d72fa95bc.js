"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3581],{3581:function(t,e,i){i.d(e,{Container:function(){return Container}});var s=i(6342),a=i(1020),n=i(7287),r=i(5647);function setStyle(t,e,i=!1){if(!e||!t)return;let s=t.style;if(s)for(let t in e){let a=e[t];a&&s.setProperty(t,a,i?"important":"")}}let Canvas=class Canvas{constructor(t){this.container=t,this._applyPostDrawUpdaters=t=>{for(let e of this._postDrawUpdaters)e.afterDraw?.(t)},this._applyPreDrawUpdaters=(t,e,i,s,a,n)=>{for(let r of this._preDrawUpdaters){if(r.getColorStyles){let{fill:n,stroke:o}=r.getColorStyles(e,t,i,s);n&&(a.fill=n),o&&(a.stroke=o)}if(r.getTransformValues){let t=r.getTransformValues(e);for(let e in t)!function(t,e,i){let s=e[i];void 0!==s&&(t[i]=(t[i]??1)*s)}(n,t,e)}r.beforeDraw?.(e)}},this._applyResizePlugins=()=>{for(let t of this._resizePlugins)t.resize?.()},this._getPluginParticleColors=t=>{let e,i;for(let s of this._colorPlugins)if(!e&&s.particleFillColor&&(e=(0,r.lN)(s.particleFillColor(t))),!i&&s.particleStrokeColor&&(i=(0,r.lN)(s.particleStrokeColor(t))),e&&i)break;return[e,i]},this._initCover=async()=>{let t=this.container.actualOptions,e=t.backgroundMask.cover,i=e.color;if(i){let t=(0,r.tX)(i);if(t){let i={...t,a:e.opacity};this._coverColorStyle=(0,r.iz)(i,i.a)}}else await new Promise((t,i)=>{if(!e.image)return;let s=document.createElement("img");s.addEventListener("load",()=>{this._coverImage={image:s,opacity:e.opacity},t()}),s.addEventListener("error",t=>{i(t.error)}),s.src=e.image})},this._initStyle=()=>{let t=this.element,e=this.container.actualOptions;if(t)for(let i in this._fullScreen?(this._originalStyle=(0,a.ZB)({},t.style),this._setFullScreenStyle()):this._resetOriginalStyle(),e.style){if(!i||!e.style)continue;let s=e.style[i];s&&t.style.setProperty(i,s,"important")}},this._initTrail=async()=>{let t=this.container.actualOptions,e=t.particles.move.trail,i=e.fill;if(!e.enable)return;let s=1/e.length;if(i.color){let t=(0,r.tX)(i.color);if(!t)return;this._trailFill={color:{...t},opacity:s}}else await new Promise((t,e)=>{if(!i.image)return;let a=document.createElement("img");a.addEventListener("load",()=>{this._trailFill={image:a,opacity:s},t()}),a.addEventListener("error",t=>{e(t.error)}),a.src=i.image})},this._paintBase=t=>{this.draw(e=>(0,n.TQ)(e,this.size,t))},this._paintImage=(t,e)=>{this.draw(i=>(0,n.C3)(i,this.size,t,e))},this._repairStyle=()=>{let t=this.element;t&&(this._safeMutationObserver(t=>t.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(e=>e.observe(t,{attributes:!0})))},this._resetOriginalStyle=()=>{let t=this.element,e=this._originalStyle;t&&e&&setStyle(t,e)},this._safeMutationObserver=t=>{this._mutationObserver&&t(this._mutationObserver)},this._setFullScreenStyle=()=>{let t=this.element;t&&setStyle(t,{position:"fixed",zIndex:this.container.actualOptions.fullScreen.zIndex.toString(10),top:"0",left:"0",width:"100%",height:"100%"},!0)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){let t=this.container.actualOptions,e=t.particles.move.trail,i=this._trailFill;t.backgroundMask.enable?this.paint():e.enable&&e.length>0&&i?i.color?this._paintBase((0,r.iz)(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):t.clear&&this.draw(t=>{(0,n.ZH)(t,this.size)})}destroy(){if(this.stop(),this._generated){let t=this.element;t?.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){let e=this._context;if(e)return t(e)}drawAsync(t){let e=this._context;if(e)return t(e)}drawParticle(t,e){if(t.spawning||t.destroyed)return;let i=t.getRadius();if(i<=0)return;let s=t.getFillColor(),a=t.getStrokeColor()??s,[o,h]=this._getPluginParticleColors(t);o||(o=s),h||(h=a),(o||h)&&this.draw(s=>{let a=this.container,l=a.actualOptions,c=t.options.zIndex,d=1-t.zIndexFactor,u=d**c.opacityRate,p=t.bubble.opacity??t.opacity?.value??1,f=t.strokeOpacity??p,_=p*u,g={},m={fill:o?(0,r.vz)(o,_):void 0};m.stroke=h?(0,r.vz)(h,f*u):m.fill,this._applyPreDrawUpdaters(s,t,i,_,m,g),(0,n.zv)({container:a,context:s,particle:t,delta:e,colorStyles:m,backgroundMask:l.backgroundMask.enable,composite:l.backgroundMask.composite,radius:i*d**c.sizeRate,opacity:_,shadow:t.options.shadow,transform:g}),this._applyPostDrawUpdaters(t)})}drawParticlePlugin(t,e,i){this.draw(s=>(0,n.$F)(s,t,e,i))}drawPlugin(t,e){this.draw(i=>(0,n.Zw)(i,t,e))}async init(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=(0,a.yf)(t=>{for(let e of t)"attributes"===e.type&&"style"===e.attributeName&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(t){(0,a.jl)().error(t)}this.initBackground(),this._safeMutationObserver(t=>{this.element&&t.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){let t=this.container.actualOptions,e=t.background,i=this.element;if(!i)return;let s=i.style;if(s){if(e.color){let t=(0,r.tX)(e.color);s.backgroundColor=t?(0,r.iz)(t,e.opacity):""}else s.backgroundColor="";s.backgroundImage=e.image||"",s.backgroundPosition=e.position||"",s.backgroundRepeat=e.repeat||"",s.backgroundSize=e.size||""}}initPlugins(){for(let[,t]of(this._resizePlugins=[],this.container.plugins))t.resize&&this._resizePlugins.push(t),(t.particleFillColor??t.particleStrokeColor)&&this._colorPlugins.push(t)}initUpdaters(){for(let t of(this._preDrawUpdaters=[],this._postDrawUpdaters=[],this.container.particles.updaters))t.afterDraw&&this._postDrawUpdaters.push(t),(t.getColorStyles??t.getTransformValues??t.beforeDraw)&&this._preDrawUpdaters.push(t)}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&s.YU in t.dataset?"true"===t.dataset[s.YU]:this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=(0,a.ZB)({},this.element.style),this.size.height=t.offsetHeight,this.size.width=t.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(t=>{this.element&&t.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){let t=this.container.actualOptions;this.draw(e=>{t.backgroundMask.enable&&t.backgroundMask.cover?((0,n.ZH)(e,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;let t=this.container,e=t.retina.pixelRatio,i=t.canvas.size,s={width:this.element.offsetWidth*e,height:this.element.offsetHeight*e};if(s.height===i.height&&s.width===i.width&&s.height===this.element.height&&s.width===this.element.width)return!1;let a={...i};return this.element.width=i.width=this.element.offsetWidth*e,this.element.height=i.height=this.element.offsetHeight*e,this.container.started&&t.particles.setResizeFactor({width:i.width/a.width,height:i.height/a.height}),!0}stop(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=void 0,this.draw(t=>(0,n.ZH)(t,this.size))}async windowResize(){if(!this.element||!this.resize())return;let t=this.container,e=t.updateActualOptions();t.particles.setDensity(),this._applyResizePlugins(),e&&await t.refresh()}};var o=i(346);function manageListener(t,e,i,s,a){if(s){let s={passive:!0};(0,o.jn)(a)?s.capture=a:void 0!==a&&(s=a),t.addEventListener(e,i,s)}else t.removeEventListener(e,i,a)}let EventListeners=class EventListeners{constructor(t){this.container=t,this._doMouseTouchClick=t=>{let e=this.container,i=e.actualOptions;if(this._canPush){let t=e.interactivity.mouse,s=t.position;if(!s)return;t.clickPosition={...s},t.clickTime=new Date().getTime();let n=i.interactivity.events.onClick;(0,a.KH)(n.mode,t=>this.container.handleClickMode(t))}"touchend"===t.type&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=t=>{let e=this.container,i=e.options,s=i.defaultThemes,a=t.matches?s.dark:s.light,n=i.themes.find(t=>t.name===a);n&&n.default.auto&&e.loadTheme(a)},this._handleVisibilityChange=()=>{let t=this.container,e=t.actualOptions;this._mouseTouchFinish(),e.pauseOnBlur&&(document&&document.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);let handleResize=async()=>{let t=this.container.canvas;await t?.windowResize()};this._resizeTimeout=setTimeout(()=>void handleResize(),this.container.actualOptions.interactivity.events.resize.delay*s.X5)},this._manageInteractivityListeners=(t,e)=>{let i=this._handlers,a=this.container,n=a.actualOptions,r=a.interactivity.element;if(!r)return;let o=a.canvas.element;o&&(o.style.pointerEvents=r===o?"initial":"none"),(n.interactivity.events.onHover.enable||n.interactivity.events.onClick.enable)&&(manageListener(r,s.Wt,i.mouseMove,e),manageListener(r,s.Re,i.touchStart,e),manageListener(r,s.zX,i.touchMove,e),n.interactivity.events.onClick.enable?(manageListener(r,s.$o,i.touchEndClick,e),manageListener(r,s.zw,i.mouseUp,e),manageListener(r,s.ZL,i.mouseDown,e)):manageListener(r,s.$o,i.touchEnd,e),manageListener(r,t,i.mouseLeave,e),manageListener(r,s.VH,i.touchCancel,e))},this._manageListeners=t=>{let e=this._handlers,i=this.container,a=i.actualOptions,n=a.interactivity.detectsOn,r=i.canvas.element,o=s.aM;"window"===n?(i.interactivity.element=window,o=s.G1):"parent"===n&&r?i.interactivity.element=r.parentElement??r.parentNode:i.interactivity.element=r,this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(o,t),document&&manageListener(document,s.QL,e.visibilityChange,t,!1)},this._manageMediaMatch=t=>{let e=this._handlers,i=(0,a.HY)("(prefers-color-scheme: dark)");if(i){if(void 0!==i.addEventListener){manageListener(i,"change",e.themeChange,t);return}void 0!==i.addListener&&(t?i.addListener(e.oldThemeChange):i.removeListener(e.oldThemeChange))}},this._manageResize=t=>{let e=this._handlers,i=this.container,a=i.actualOptions;if(!a.interactivity.events.resize)return;if("undefined"==typeof ResizeObserver){manageListener(window,s.rR,e.resize,t);return}let n=i.canvas.element;this._resizeObserver&&!t?(n&&this._resizeObserver.unobserve(n),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&n&&(this._resizeObserver=new ResizeObserver(t=>{let e=t.find(t=>t.target===n);e&&this._handleWindowResize()}),this._resizeObserver.observe(n))},this._mouseDown=()=>{let{interactivity:t}=this.container;if(!t)return;let{mouse:e}=t;e.clicking=!0,e.downPosition=e.position},this._mouseTouchClick=t=>{let e=this.container,i=e.actualOptions,{mouse:s}=e.interactivity;s.inside=!0;let a=!1,n=s.position;if(n&&i.interactivity.events.onClick.enable){for(let[,t]of e.plugins)if(t.clickPositionValid&&(a=t.clickPositionValid(n)))break;a||this._doMouseTouchClick(t),s.clicking=!1}},this._mouseTouchFinish=()=>{let t=this.container.interactivity;if(!t)return;let e=t.mouse;delete e.position,delete e.clickPosition,delete e.downPosition,t.status=s.aM,e.inside=!1,e.clicking=!1},this._mouseTouchMove=t=>{let e;let i=this.container,a=i.actualOptions,n=i.interactivity,r=i.canvas.element;if(!n?.element)return;if(n.mouse.inside=!0,t.type.startsWith("pointer")){if(this._canPush=!0,n.element===window){if(r){let i=r.getBoundingClientRect();e={x:t.clientX-i.left,y:t.clientY-i.top}}}else if("parent"===a.interactivity.detectsOn){let i=t.target,s=t.currentTarget;if(i&&s&&r){let a=i.getBoundingClientRect(),n=s.getBoundingClientRect(),o=r.getBoundingClientRect();e={x:t.offsetX+2*a.left-(n.left+o.left),y:t.offsetY+2*a.top-(n.top+o.top)}}else e={x:t.offsetX??t.clientX,y:t.offsetY??t.clientY}}else t.target===r&&(e={x:t.offsetX??t.clientX,y:t.offsetY??t.clientY})}else if(this._canPush="touchmove"!==t.type,r){let i=t.touches[t.touches.length-1],s=r.getBoundingClientRect();e={x:i.clientX-(s.left??0),y:i.clientY-(s.top??0)}}let o=i.retina.pixelRatio;e&&(e.x*=o,e.y*=o),n.mouse.position=e,n.status=s.Wt},this._touchEnd=t=>{let e=Array.from(t.changedTouches);for(let t of e)this._touches.delete(t.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{let e=Array.from(t.changedTouches);for(let t of e)this._touches.delete(t.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{let e=Array.from(t.changedTouches);for(let t of e)this._touches.set(t.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}};var h=i(5829);let InteractionManager=class InteractionManager{constructor(t,e){this.container=e,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(t){for(let e of this._externalInteractors)e.isEnabled()&&e.interact(t)}handleClickMode(t){for(let e of this._externalInteractors)e.handleClickMode?.(t)}async init(){for(let t of(this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[],this._interactors)){switch(t.type){case"external":this._externalInteractors.push(t);break;case"particles":this._particleInteractors.push(t)}t.init()}}particlesInteract(t,e){for(let i of this._externalInteractors)i.clear(t,e);for(let i of this._particleInteractors)i.isEnabled(t)&&i.interact(t,e)}reset(t){for(let e of this._externalInteractors)e.isEnabled()&&e.reset(t);for(let e of this._particleInteractors)e.isEnabled(t)&&e.reset(t)}};var l=i(4572),c=i(290),d=i(3585),u=i(8841);let p=0;function fixOutMode(t){if(!(0,a.dB)(t.outMode,t.checkModes))return;let e=2*t.radius;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)}let Particle=class Particle{constructor(t,e){this.container=e,this._calcPosition=(t,e,i,s=p)=>{for(let[,s]of t.plugins){let t=void 0!==s.particlePosition?s.particlePosition(e,this):void 0;if(t)return l.U.create(t.x,t.y,i)}let a=t.canvas.size,n=(0,c.mC)({size:a,position:e}),r=l.U.create(n.x,n.y,i),o=this.getRadius(),h=this.options.move.outModes,fixHorizontal=e=>{fixOutMode({outMode:e,checkModes:["bounce"],coord:r.x,maxCoord:t.canvas.size.width,setCb:t=>r.x+=t,radius:o})},fixVertical=e=>{fixOutMode({outMode:e,checkModes:["bounce"],coord:r.y,maxCoord:t.canvas.size.height,setCb:t=>r.y+=t,radius:o})};return(fixHorizontal(h.left??h.default),fixHorizontal(h.right??h.default),fixVertical(h.top??h.default),fixVertical(h.bottom??h.default),this._checkOverlap(r,s))?this._calcPosition(t,void 0,i,s+1):r},this._calculateVelocity=()=>{let t=(0,c.lQ)(this.direction),e=t.copy(),i=this.options.move;if("inside"===i.direction||"outside"===i.direction)return e;let s=(0,c.Id)((0,c.Gu)(i.angle.value)),a=(0,c.Id)((0,c.Gu)(i.angle.offset)),n={left:a-.5*s,right:a+.5*s};return i.straight||(e.angle+=(0,c.vd)((0,c.Cs)(n.left,n.right))),i.random&&"number"==typeof i.speed&&(e.length*=(0,c.sZ)()),e},this._checkOverlap=(t,e=p)=>{let i=this.options.collisions,a=this.getRadius();if(!i.enable)return!1;let n=i.overlap;if(n.enable)return!1;let r=n.retries;if(r>=0&&e>r)throw Error(`${s.gK} particle is overlapping and can't be placed`);return!!this.container.particles.find(e=>(0,c.Sp)(t,e.position)<a+e.getRadius())},this._getRollColor=t=>{if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;let e=this.roll.horizontal&&this.roll.vertical?2:1,i=this.roll.horizontal?.5*Math.PI:0,s=Math.floor(((this.roll.angle??0)+i)/(Math.PI/e))%2;return s?this.backColor?this.backColor:this.roll.alter?(0,n.PL)(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{let e=this.container,i=(0,c.Gu)(this.options.zIndex.value);this.position=this._calcPosition(e,t,(0,c.uZ)(i,0,e.zLayers)),this.initialPosition=this.position.copy();let s=e.canvas.size;switch(this.moveCenter={...(0,a.bt)(this.options.move.center,s),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=(0,c.Gk)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=l.O.origin},this._engine=t}destroy(t){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;let e=this.container,i=this.pathGenerator,s=e.shapeDrawers.get(this.shape);for(let[,i]of(s?.particleDestroy?.(this),e.plugins))i.particleDestroyed?.(this,t);for(let i of e.particles.updaters)i.particleDestroyed?.(this,t);i?.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}draw(t){let e=this.container,i=e.canvas;for(let[,s]of e.plugins)i.drawParticlePlugin(s,this,t);i.drawParticle(this,t)}getFillColor(){return this._getRollColor(this.bubble.color??(0,r.gW)(this.color))}getMass(){return this.getRadius()**2*Math.PI*.5}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??(0,r.gW)(this.strokeColor))}init(t,e,i,n){let o=this.container,h=this._engine;this.id=t,this.group=n,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;let l=o.retina.pixelRatio,p=o.actualOptions,f=(0,u.x)(this._engine,o,p.particles),_=f.effect.type,g=f.shape.type,{reduceDuplicates:m}=f;this.effect=(0,a.wA)(_,this.id,m),this.shape=(0,a.wA)(g,this.id,m);let v=f.effect,y=f.shape;if(i){if(i.effect?.type){let t=i.effect.type,e=(0,a.wA)(t,this.id,m);e&&(this.effect=e,v.load(i.effect))}if(i.shape?.type){let t=i.shape.type,e=(0,a.wA)(t,this.id,m);e&&(this.shape=e,y.load(i.shape))}}this.effectData=function(t,e,i,s){let n=e.options[t];if(n)return(0,a.ZB)({close:e.close,fill:e.fill},(0,a.wA)(n,i,s))}(this.effect,v,this.id,m),this.shapeData=function(t,e,i,s){let n=e.options[t];if(n)return(0,a.ZB)({close:e.close,fill:e.fill},(0,a.wA)(n,i,s))}(this.shape,y,this.id,m),f.load(i);let w=this.effectData;w&&f.load(w.particles);let b=this.shapeData;b&&f.load(b.particles);let C=new d.o(h,o);C.load(o.actualOptions.interactivity),C.load(f.interactivity),this.interactivity=C,this.effectFill=w?.fill??f.effect.fill,this.effectClose=w?.close??f.effect.close,this.shapeFill=b?.fill??f.shape.fill,this.shapeClose=b?.close??f.shape.close,this.options=f;let z=this.options.move.path;this.pathDelay=(0,c.Gu)(z.delay.value)*s.X5,z.generator&&(this.pathGenerator=this._engine.getPathGenerator(z.generator),this.pathGenerator&&o.addPath(z.generator,this.pathGenerator)&&this.pathGenerator.init(o)),o.retina.initParticle(this),this.size=(0,a.V0)(this.options.size,l),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(e),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-(0,c.Gu)(this.options.move.decay);let k=o.particles;k.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/o.zLayers,this.sides=24;let O=o.effectDrawers.get(this.effect);!O&&(O=this._engine.getEffectDrawer(this.effect))&&o.effectDrawers.set(this.effect,O),O?.loadEffect&&O.loadEffect(this);let x=o.shapeDrawers.get(this.shape);!x&&(x=this._engine.getShapeDrawer(this.shape))&&o.shapeDrawers.set(this.shape,x),x?.loadShape&&x.loadShape(this);let P=x?.getSidesCount;for(let t of(P&&(this.sides=P(this)),this.spawning=!1,this.shadowColor=(0,r.tX)(this.options.shadow.color),k.updaters))t.init(this);for(let t of k.movers)t.init?.(this);for(let[,t]of(O?.particleInit?.(o,this),x?.particleInit?.(o,this),o.plugins))t.particleCreated?.(this)}isInsideCanvas(){let t=this.getRadius(),e=this.container.canvas.size,i=this.position;return i.x>=-t&&i.y>=-t&&i.y<=e.height+t&&i.x<=e.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(let t of this.container.particles.updaters)t.reset?.(this)}};let Point=class Point{constructor(t,e){this.position=t,this.particle=e}};var f=i(6452);let QuadTree=class QuadTree{constructor(t,e){this.rectangle=t,this.capacity=e,this._subdivide=()=>{let{x:t,y:e}=this.rectangle.position,{width:i,height:s}=this.rectangle.size,{capacity:a}=this;for(let n=0;n<4;n++){let r=n%2;this._subs.push(new QuadTree(new f.Ae(t+.5*i*r,e+.5*s*(Math.round(.5*n)-r),.5*i,.5*s),a))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return!!this.rectangle.contains(t.position)&&(this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some(e=>e.insert(t))))}query(t,e){let i=[];if(!t.intersects(this.rectangle))return[];for(let s of this._points)!t.contains(s.position)&&(0,c.Sp)(t.position,s.position)>s.particle.getRadius()&&(!e||e(s.particle))||i.push(s.particle);if(this._divided)for(let s of this._subs)i.push(...s.query(t,e));return i}queryCircle(t,e,i){return this.query(new f.Cd(t.x,t.y,e),i)}queryRectangle(t,e,i){return this.query(new f.Ae(t.x,t.y,e.width,e.height),i)}};let qTreeRectangle=t=>{let{height:e,width:i}=t;return new f.Ae(-.25*i,-.25*e,1.5*i,1.5*e)};let Particles=class Particles{constructor(t,e){this._addToPool=(...t)=>{for(let e of t)this._pool.push(e)},this._applyDensity=(t,e,i)=>{let s=t.number;if(!t.number.density?.enable){void 0===i?this._limit=s.limit.value:s.limit&&this._groupLimits.set(i,s.limit.value);return}let a=this._initDensityFactor(s.density),n=s.value,r=s.limit.value>0?s.limit.value:n,o=Math.min(n,r)*a+e,h=Math.min(this.count,this.filter(t=>t.group===i).length);void 0===i?this._limit=s.limit.value*a:this._groupLimits.set(i,s.limit.value*a),h<o?this.push(Math.abs(o-h),void 0,t,i):h>o&&this.removeQuantity(h-o,i)},this._initDensityFactor=t=>{let e=this._container;if(!e.canvas.element||!t.enable)return 1;let i=e.canvas.element,s=e.retina.pixelRatio;return i.width*i.height/(t.height*t.width*s**2)},this._pushParticle=(t,e,i,n)=>{try{let s=this._pool.pop();s||(s=new Particle(this._engine,this._container)),s.init(this._nextId,t,e,i);let a=!0;if(n&&(a=n(s)),!a)return;return this._array.push(s),this._zArray.push(s),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:s}}),s}catch(t){(0,a.jl)().warning(`${s.gK} adding particle: ${t}`)}},this._removeParticle=(t,e,i)=>{let s=this._array[t];if(!s||s.group!==e)return!1;let a=this._zArray.indexOf(s);return this._array.splice(t,1),this._zArray.splice(a,1),s.destroy(i),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:s}}),this._addToPool(s),!0},this._engine=t,this._container=e,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new InteractionManager(t,e),this._pluginsInitialized=!1;let i=e.canvas.size;this.quadTree=new QuadTree(qTreeRectangle(i),4),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){let t=this._container,e=t.actualOptions;for(let i of e.manualParticles)this.addParticle(i.position?(0,a.bt)(i.position,t.canvas.size):void 0,i.options)}addParticle(t,e,i,s){let a=this._container.actualOptions.particles.number.limit,n=void 0===i?this._limit:this._groupLimits.get(i)??this._limit,r=this.count;if(n>0){if("delete"===a.mode){let t=r+1-n;t>0&&this.removeQuantity(t)}else if("wait"===a.mode&&r>=n)return}return this._pushParticle(t,e,i,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(t){let e=this._container,i=e.canvas;for(let[,s]of(i.clear(),this.update(t),e.plugins))i.drawPlugin(s,t);for(let e of this._zArray)e.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}async init(){let t=this._container,e=t.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let i=!1;for(let[,e]of t.plugins)if(void 0!==e.particlesInitialization&&(i=e.particlesInitialization()),i)break;if(this.addManualParticles(),!i){let t=e.particles,i=t.groups;for(let e in i){let s=i[e];for(let i=this.count,a=0;a<s.number?.value&&i<t.number.value;i++,a++)this.addParticle(void 0,s,e)}for(let e=this.count;e<t.number.value;e++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;let t=this._container;for(let[,e]of(this.movers=await this._engine.getMovers(t,!0),this.updaters=await this._engine.getUpdaters(t,!0),await this._interactionManager.init(),t.pathGenerators))e.init(t)}push(t,e,i,s){for(let a=0;a<t;a++)this.addParticle(e?.position,i,s)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(t,e,i){this.removeAt(this._array.indexOf(t),void 0,e,i)}removeAt(t,e=1,i,s){if(t<0||t>this.count)return;let a=0;for(let n=t;a<e&&n<this.count;n++)this._removeParticle(n--,i,s)&&a++}removeQuantity(t,e){this.removeAt(0,t,e)}setDensity(){let t=this._container.actualOptions,e=t.particles.groups;for(let t in e)this._applyDensity(e[t],0,t);this._applyDensity(t.particles,t.manualParticles.length)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}update(t){let e=this._container,i=new Set;for(let[,t]of(this.quadTree=new QuadTree(qTreeRectangle(e.canvas.size),4),e.pathGenerators))t.update();for(let[,i]of e.plugins)i.update?.(t);let s=this._resizeFactor;for(let e of this._array){for(let[,i]of(s&&!e.ignoresResizeRatio&&(e.position.x*=s.width,e.position.y*=s.height,e.initialPosition.x*=s.width,e.initialPosition.y*=s.height),e.ignoresResizeRatio=!1,this._interactionManager.reset(e),this._container.plugins)){if(e.destroyed)break;i.particleUpdate?.(e,t)}for(let i of this.movers)i.isEnabled(e)&&i.move(e,t);if(e.destroyed){i.add(e);continue}this.quadTree.insert(new Point(e.getPosition(),e))}if(i.size){let checkDelete=t=>!i.has(t);for(let t of(this._array=this.filter(checkDelete),this._zArray=this._zArray.filter(checkDelete),i))this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:t}});this._addToPool(...i)}for(let e of(this._interactionManager.externalInteract(t),this._array)){for(let i of this.updaters)i.update(e,t);e.destroyed||e.spawning||this._interactionManager.particlesInteract(e,t)}if(delete this._resizeFactor,this._needsSort){let t=this._zArray;t.sort((t,e)=>e.position.z-t.position.z||t.id-e.id),this._lastZIndex=t[t.length-1].position.z,this._needsSort=!1}}};let Retina=class Retina{constructor(t){this.container=t,this.pixelRatio=1,this.reduceFactor=1}init(){let t=this.container,e=t.actualOptions;this.pixelRatio=!e.detectRetina||(0,a.Kr)()?1:window.devicePixelRatio,this.reduceFactor=1;let i=this.pixelRatio,s=t.canvas;if(s.element){let t=s.element;s.size.width=t.offsetWidth*i,s.size.height=t.offsetHeight*i}let n=e.particles,r=n.move;this.maxSpeed=(0,c.Gu)(r.gravity.maxSpeed)*i,this.sizeAnimationSpeed=(0,c.Gu)(n.size.animation.speed)*i}initParticle(t){let e=t.options,i=this.pixelRatio,s=e.move,a=s.distance,n=t.retina;n.moveDrift=(0,c.Gu)(s.drift)*i,n.moveSpeed=(0,c.Gu)(s.speed)*i,n.sizeAnimationSpeed=(0,c.Gu)(e.size.animation.speed)*i;let r=n.maxDistance;r.horizontal=void 0!==a.horizontal?a.horizontal*i:void 0,r.vertical=void 0!==a.vertical?a.vertical*i:void 0,n.maxSpeed=(0,c.Gu)(s.gravity.maxSpeed)*i}};function guardCheck(t){return t&&!t.destroyed}function loadContainerOptions(t,e,...i){let s=new h.E(t,e);return(0,u.h)(s,...i),s}let Container=class Container{constructor(t,e,i){this._intersectionManager=t=>{if(guardCheck(this)&&this.actualOptions.pauseOnOutsideViewport)for(let e of t)e.target===this.interactivity.element&&(e.isIntersecting?this.play():this.pause())},this._nextFrame=t=>{try{if(!this._smooth&&void 0!==this._lastFrameTime&&t<this._lastFrameTime+s.X5/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=t;let e=function(t,e=60,i=!1){return{value:t,factor:i?60/e:60*t/s.X5}}(t-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(e.value),this._lastFrameTime=t,e.value>s.X5){this.draw(!1);return}if(this.particles.draw(e),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(t){(0,a.jl)().error(`${s.gK} in animation loop`,t)}},this._engine=t,this.id=Symbol(e),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Retina(this),this.canvas=new Canvas(this),this.particles=new Particles(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=loadContainerOptions(this._engine,this),this.actualOptions=loadContainerOptions(this._engine,this),this._eventListeners=new EventListeners(this),this._intersectionObserver=(0,a.NM)(t=>this._intersectionManager(t)),this._engine.dispatchEvent("containerBuilt",{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&guardCheck(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!guardCheck(this))return;let e=this.interactivity.element;if(!e)return;let clickOrTouchHandler=(e,i,s)=>{if(!guardCheck(this))return;let a=this.retina.pixelRatio,n={x:i.x*a,y:i.y*a},r=this.particles.quadTree.queryCircle(n,s*a);t(e,r)},i=!1,s=!1;e.addEventListener("click",t=>{if(!guardCheck(this))return;let e={x:t.offsetX||t.clientX,y:t.offsetY||t.clientY};clickOrTouchHandler(t,e,1)}),e.addEventListener("touchstart",()=>{guardCheck(this)&&(i=!0,s=!1)}),e.addEventListener("touchmove",()=>{guardCheck(this)&&(s=!0)}),e.addEventListener("touchend",t=>{if(guardCheck(this)){if(i&&!s){let e=t.touches[t.touches.length-1];if(!e&&!(e=t.changedTouches[t.changedTouches.length-1]))return;let i=this.canvas.element,s=i?i.getBoundingClientRect():void 0,a={x:e.clientX-(s?s.left:0),y:e.clientY-(s?s.top:0)};clickOrTouchHandler(t,a,Math.max(e.radiusX,e.radiusY))}i=!1,s=!1}}),e.addEventListener("touchcancel",()=>{guardCheck(this)&&(i=!1,s=!1)})}addLifeTime(t){this._lifeTime+=t}addPath(t,e,i=!1){return!(!guardCheck(this)||!i&&this.pathGenerators.has(t))&&(this.pathGenerators.set(t,e),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!guardCheck(this))return;for(let[,t]of(this.stop(),this.particles.destroy(),this.canvas.destroy(),this.effectDrawers))t.destroy?.(this);for(let[,t]of this.shapeDrawers)t.destroy?.(this);for(let t of this.effectDrawers.keys())this.effectDrawers.delete(t);for(let t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);this._engine.clearPlugins(this),this.destroyed=!0;let t=this._engine.dom(),e=t.findIndex(t=>t===this);e>=0&&t.splice(e,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(t){if(!guardCheck(this))return;let e=t,frame=t=>{e&&(this._lastFrameTime=void 0,e=!1),this._nextFrame(t)};this._drawAnimationFrame=requestAnimationFrame(t=>frame(t))}async export(t,e={}){for(let[,i]of this.plugins){if(!i.export)continue;let s=await i.export(t,e);if(s.supported)return s.blob}(0,a.jl)().error(`${s.gK} - Export plugin with type ${t} not found`)}handleClickMode(t){if(guardCheck(this))for(let[,e]of(this.particles.handleClickMode(t),this.plugins))e.handleClickMode?.(t)}async init(){if(!guardCheck(this))return;let t=this._engine.getSupportedEffects();for(let e of t){let t=this._engine.getEffectDrawer(e);t&&this.effectDrawers.set(e,t)}let e=this._engine.getSupportedShapes();for(let t of e){let e=this._engine.getShapeDrawer(t);e&&this.shapeDrawers.set(t,e)}await this.particles.initPlugins(),this._options=loadContainerOptions(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=loadContainerOptions(this._engine,this,this._options);let i=await this._engine.getAvailablePlugins(this);for(let[t,e]of i)this.plugins.set(t,e);for(let[,t]of(this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=(0,c.Gu)(this.actualOptions.duration)*s.X5,this._delay=(0,c.Gu)(this.actualOptions.delay)*s.X5,this._lifeTime=0,this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this._smooth=this.actualOptions.smooth,this.effectDrawers))await t.init?.(this);for(let[,t]of this.shapeDrawers)await t.init?.(this);for(let[,t]of this.plugins)await t.init?.();for(let[,t]of(this._engine.dispatchEvent("containerInit",{container:this}),await this.particles.init(),this.particles.setDensity(),this.plugins))t.particlesSetup?.();this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(t){guardCheck(this)&&(this._currentTheme=t,await this.refresh())}pause(){if(guardCheck(this)&&(void 0!==this._drawAnimationFrame&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(let[,t]of this.plugins)t.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(t){if(!guardCheck(this))return;let e=this._paused||t;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),e)for(let[,t]of this.plugins)t.play&&t.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(e??!1)}async refresh(){if(guardCheck(this))return this.stop(),this.start()}async reset(){if(guardCheck(this))return this._initialSourceOptions=void 0,this._options=loadContainerOptions(this._engine,this),this.actualOptions=loadContainerOptions(this._engine,this,this._options),this.refresh()}async start(){guardCheck(this)&&!this.started&&(await this.init(),this.started=!0,await new Promise(t=>{let start=async()=>{for(let[,t]of(this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element),this.plugins))await t.start?.();this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),t()};this._delayTimeout=setTimeout(()=>void start(),this._delay)}))}stop(){if(guardCheck(this)&&this.started){for(let[,t]of(this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element),this.plugins))t.stop?.();for(let t of this.plugins.keys())this.plugins.delete(t);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];let t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth!==t&&(this._responsiveMaxWidth=t,!0)}}}}]);