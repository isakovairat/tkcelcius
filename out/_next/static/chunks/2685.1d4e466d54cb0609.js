"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2685],{5202:function(e,t,n){n.d(t,{y:function(){return PolygonDrawerBase}});var r=n(1457);let a={x:0,y:0};let PolygonDrawerBase=class PolygonDrawerBase{draw(e){let{particle:t,radius:n}=e,o=this.getCenter(t,n),u=this.getSidesData(t,n);!function(e,t,n){let{context:o}=e,u=n.count.numerator*n.count.denominator,s=n.count.numerator/n.count.denominator,i=Math.PI-(0,r.Id)(180*(s-2)/s);if(o){o.beginPath(),o.translate(t.x,t.y),o.moveTo(a.x,a.y);for(let e=0;e<u;e++)o.lineTo(n.length,a.y),o.translate(n.length,a.y),o.rotate(i)}}(e,o,u)}getSidesCount(e){let t=e.shapeData;return Math.round((0,r.Gu)(t?.sides??5))}}},2685:function(e,t,n){n.d(t,{TriangleDrawer:function(){return TriangleDrawer}});var r=n(5202);let TriangleDrawer=class TriangleDrawer extends r.y{getCenter(e,t){return{x:-t,y:t/1.66}}getSidesCount(){return 3}getSidesData(e,t){return{count:{denominator:2,numerator:3},length:2*t}}}}}]);