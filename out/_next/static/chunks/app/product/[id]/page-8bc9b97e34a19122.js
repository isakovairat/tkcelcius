(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{5925:function(e,r,t){Promise.resolve().then(t.t.bind(t,8326,23)),Promise.resolve().then(t.bind(t,2875))},2061:function(e,r,t){"use strict";t.d(r,{P:function(){return f}});var n=t(7437),a=t(3239),l=t(3088),s=t(8004),o=t(1827),i=t(2741),c=t(3067),u=t(8291),d=t(2549);let f={sun:a.Z,moon:l.Z,menu:s.Z,search:o.Z,phone:i.Z,arrowLeft:c.Z,arrowRight:u.Z,x:d.Z,logo:e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"})})}},2875:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ProductCarousel}});var n=t(7437),a=t(609),l=t(2265),s=t(345),o=t(9370),i=t(2061),c=t(3089);let u=l.createContext(null);function useCarousel(){let e=l.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let d=l.forwardRef((e,r)=>{let{orientation:t="horizontal",opts:a,setApi:i,plugins:c,className:d,children:f,...m}=e,[x,p]=(0,o.Z)({...a,axis:"horizontal"===t?"x":"y"},c),[v,h]=l.useState(!1),[g,N]=l.useState(!1),b=l.useCallback(e=>{e&&(h(e.canScrollPrev()),N(e.canScrollNext()))},[]),y=l.useCallback(()=>{null==p||p.scrollPrev()},[p]),w=l.useCallback(()=>{null==p||p.scrollNext()},[p]),C=l.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[y,w]);return l.useEffect(()=>{p&&i&&i(p)},[p,i]),l.useEffect(()=>{if(p)return b(p),p.on("reInit",b),p.on("select",b),()=>{null==p||p.off("select",b)}},[p,b]),(0,n.jsx)(u.Provider,{value:{carouselRef:x,api:p,opts:a,orientation:t||((null==a?void 0:a.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:w,canScrollPrev:v,canScrollNext:g},children:(0,n.jsx)("div",{ref:r,onKeyDownCapture:C,className:(0,s.cn)("relative",d),role:"region","aria-roledescription":"carousel",...m,children:f})})});d.displayName="Carousel";let f=l.forwardRef((e,r)=>{let{className:t,...a}=e,{carouselRef:l,orientation:o}=useCarousel();return(0,n.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex","horizontal"===o?"-ml-4":"-mt-4 flex-col",t),...a})})});f.displayName="CarouselContent";let m=l.forwardRef((e,r)=>{let{className:t,...a}=e,{orientation:l}=useCarousel();return(0,n.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,s.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",t),...a})});m.displayName="CarouselItem";let x=l.forwardRef((e,r)=>{let{className:t,variant:a="outline",size:l="icon",...o}=e,{orientation:u,scrollPrev:d,canScrollPrev:f}=useCarousel();return(0,n.jsxs)(c.z,{ref:r,variant:a,size:l,className:(0,s.cn)("absolute  size-8 rounded-full","horizontal"===u?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!f,onClick:d,...o,children:[(0,n.jsx)(i.P.arrowLeft,{className:"size-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});x.displayName="CarouselPrevious";let p=l.forwardRef((e,r)=>{let{className:t,variant:a="outline",size:l="icon",...o}=e,{orientation:u,scrollNext:d,canScrollNext:f}=useCarousel();return(0,n.jsxs)(c.z,{ref:r,variant:a,size:l,className:(0,s.cn)("absolute size-8 rounded-full","horizontal"===u?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!f,onClick:d,...o,children:[(0,n.jsx)(i.P.arrowRight,{className:"size-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Next slide"})]})});p.displayName="CarouselNext";var v=t(6136);function ProductCarousel(e){let{images:r}=e;return(0,n.jsxs)(d,{plugins:[(0,v.Z)({delay:2e3})],className:"w-full lg:max-w-md",children:[(0,n.jsx)(f,{children:r.map((e,r)=>(0,n.jsx)(m,{children:(0,n.jsx)("div",{className:"p-1",children:(0,n.jsx)(a.Zb,{children:(0,n.jsx)(a.aY,{className:"flex aspect-square items-center justify-center p-0",children:(0,n.jsx)("img",{src:e.src,alt:e.alt})})})})},r))}),(0,n.jsx)(x,{}),(0,n.jsx)(p,{})]})}},3089:function(e,r,t){"use strict";t.d(r,{d:function(){return i},z:function(){return c}});var n=t(7437),a=t(2265),l=t(7256),s=t(7404),o=t(345);let i=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,r)=>{let{className:t,variant:a,size:s,asChild:c=!1,...u}=e,d=c?l.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(i({variant:a,size:s,className:t})),ref:r,...u})});c.displayName="Button"},609:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return s},aY:function(){return u},eW:function(){return d},ll:function(){return i}});var n=t(7437),a=t(2265),l=t(345);let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});s.displayName="Card";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...a})});o.displayName="CardHeader";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});i.displayName="CardTitle";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})});c.displayName="CardDescription";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",t),...a})});u.displayName="CardContent";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",t),...a})});d.displayName="CardFooter"},345:function(e,r,t){"use strict";t.d(r,{cn:function(){return cn}});var n=t(348),a=t(3986);function cn(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m)((0,n.W)(r))}}},function(e){e.O(0,[5135,8326,8581,2971,2472,1744],function(){return e(e.s=5925)}),_N_E=e.O()}]);