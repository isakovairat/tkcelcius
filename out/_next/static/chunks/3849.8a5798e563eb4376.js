"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3849],{3849:function(e,i,s){s.d(i,{SizeUpdater:function(){return SizeUpdater}});var n=s(1457);let SizeUpdater=class SizeUpdater{init(e){let i=e.container,s=e.options.size,t=s.animation;t.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??i.retina.sizeAnimationSpeed)/n.tZ*i.retina.reduceFactor,t.sync||(e.size.velocity*=(0,n.sZ)()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??0)<=0||(e.size.maxLoops??0)>0&&(e.size.loops??0)<(e.size.maxLoops??0))}reset(e){e.size.loops=0}update(e,i){this.isEnabled(e)&&(0,n.Cr)(e,e.size,!0,e.options.size.animation.destroy,i)}}}}]);