(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{11461:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[...keys]",function(){return n(16905)}])},16905:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return H},default:function(){return G}});var r=n(26042),i=n(828),a=n(85893),l=n(68948),o=n(60335),u=n(69396),s=n(72523),d=n(67294),c=function(t){return(0,a.jsx)("div",{style:{marginTop:10,width:"100%"},children:(0,a.jsx)("button",{style:{width:"100%"},type:"button",className:"af-button af-button-dark",children:"ADD TO MY BAG"})})},p=n(14924),m=(0,d.createContext)(null);function f(){return(0,d.useContext)(m)}var v=function(t){var e=(0,d.useState)({}),n=e[0],i=e[1],l=t.product.variants.find((function(t){var e=!0,r=!1,i=void 0;try{for(var a,l=Object.keys(n)[Symbol.iterator]();!(e=(a=l.next()).done);e=!0){var o=a.value;if(t[o]!=n[o])return!1}}catch(u){r=!0,i=u}finally{try{e||null==l.return||l.return()}finally{if(r)throw i}}return!0}))||t.product.variants[0];return(0,a.jsx)(m.Provider,{value:(0,u.Z)((0,r.Z)({},t),{productVariant:l,attributes:n,setAttribute:function(t,e){i((0,u.Z)((0,r.Z)({},n),(0,p.Z)({},t,e)))}}),children:t.children})},x=function(t){var e=t.variant,n=void 0===e?"name":e,r=f()||{},i=r.product,l=r.productVariant;return i?(0,a.jsx)(a.Fragment,{children:l[n]||i[n]}):null},b=n(51351),h=n(29815),j=n(94054),g=n(33841),y=n(34473),_=n(23599),w=n(53416),Z=n(96486),q=n.n(Z),N=function(t){t=null!==t?t:(0,b.Z)(new TypeError("Cannot destructure undefined"));var e=f()||{},n=e.product,r=e.setAttribute,i=e.attributes,l=e.productVariant;if(!n)return(0,a.jsx)(a.Fragment,{});if(!l.color)return(0,a.jsx)(a.Fragment,{});var o=n&&n.variants?(0,h.Z)(new Set(n.variants.map((function(t){return t.color})))):[];return(0,a.jsx)("div",{style:{marginTop:10},children:(0,a.jsxs)(j.Z,{variant:"standard",children:[(0,a.jsx)(g.Z,{children:"Color"}),(0,a.jsx)(y.Z,{id:"product_color_select",defaultValue:q().first(o),value:null===i||void 0===i?void 0:i.color,onChange:function(t){return r&&r("color",t.target.value)},children:o.map((function(t){return(0,a.jsx)(_.Z,{value:t,children:t},(0,w.x0)())}))})]})})},k=n(15861),C=function(t){t=null!==t?t:(0,b.Z)(new TypeError("Cannot destructure undefined"));var e=f()||{},n=e.product,r=(e.setAttribute,e.attributes,e.productVariant);return n?(0,a.jsxs)("div",{className:"af-pdp-details-summary",style:{marginBottom:10},children:[r&&r.listPrice===r.salePrice&&(0,a.jsx)("div",{className:"af-pdp-details-summary__price",children:r.listPrice}),r&&r.listPrice!==r.salePrice&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"af-pdp-details-summary__list_price",children:r.listPrice}),(0,a.jsx)("span",{className:"af-pdp-details-summary__sale_price",children:r.salePrice})]}),(0,a.jsx)(k.Z,{component:"h3",className:"af-pdp-details-summary__name",children:n&&n.name})]}):(0,a.jsx)(a.Fragment,{})},P=n(99534),T=n(31638),S=n(66982),F=n.n(S),z=n(58377),E=(0,z.Z)((function(t){return{}}))((function(t){t.classes;var e=t.variant,n=void 0===e?"portrait":e,r=t.numItems,i=void 0===r?2:r,l=((0,P.Z)(t,["classes","variant","numItems"]),(f()||{}).product),o=(0,T.bp)().cms,u=(0,d.createRef)();return(0,d.useEffect)((function(){if(window&&u.current&&l&&l.imageSetId){var t=window.amp,e=u.current,r=l.imageSetId.padStart(6,"0");return o.imageHub?new t.Viewer({target:e,client:o.imageHub,imageBasePath:"https://cdn.media.amplience.net/",set:r,view:n,secure:!0,templates:{thumb:"w=85&h=85&qlt=65&unsharp=0,1,1,7&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",desktop:{main:"w=600&qlt=75&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",mainRetina:"w=1200&qlt=75&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40"},desktopFull:{main:"w=1000&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",mainRetina:"w=2000&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40"},mobile:{main:"w=500&h=500&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",mainRetina:"w=1000&h=1000&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40"}},ampConfigs:{mainContainerCarousel:{listVisible:Number(i)}}}):console.error("product image hub not found"),function(){e&&(e.innerHTML="")}}}),[u,i,n,o,l]),l.imageSetId?(0,a.jsx)("div",{className:"af-pdp-viewer",children:(0,a.jsx)("div",{ref:u,className:"af-pdp-viewer__target",id:"amp-container"})}):(0,a.jsx)(F(),{items:q().uniqBy(q().map(q().flatten(q().map(l.variants,"images")),(function(t){return{original:t.url,thumbnail:t.thumb||t.url}})),"original")})})),V=n(46959),A=function(t){var e=t.variant,n=void 0===e?"text":e,r=(f()||{}).product;return r&&r[n]?(0,a.jsx)(V.Z,{text:r[n]}):null},I=function(t){t=null!==t?t:(0,b.Z)(new TypeError("Cannot destructure undefined"));var e=f()||{},n=e.product,r=e.setAttribute,i=e.attributes,l=e.productVariant;if(!n)return(0,a.jsx)(a.Fragment,{});if(!l.size)return(0,a.jsx)(a.Fragment,{});var o=n&&n.variants?(0,h.Z)(new Set(n.variants.map((function(t){return t.size})))):[];return(0,a.jsx)("div",{style:{marginTop:10},children:(0,a.jsxs)(j.Z,{variant:"standard",children:[(0,a.jsx)(g.Z,{id:"demo-simple-select-outlined-label",children:"Size"}),(0,a.jsx)(y.Z,{labelId:"product_size_select_label",id:"product_size_select",defaultValue:q().first(o),value:null===i||void 0===i?void 0:i.size,onChange:function(t){return r&&r("size",t.target.value)},children:o.map((function(t){return(0,a.jsx)(_.Z,{value:t,children:t},(0,w.x0)())}))})]})})},L=(0,z.Z)((function(t){return{root:{marginTop:10},header:{borderTop:"1px solid #000",borderBottom:"1px solid #000",cursor:"pointer",padding:"10px 47.6px 10px 20px"},headerText:{"&::before":{content:'"+"',fontSize:20,position:"absolute",display:"inline-block",right:20,top:15}},body:{padding:"15px 0px 0px 15px",display:"inline-block"}}}))((function(t){var e=t.classes,n=t.title,r=t.children;(0,P.Z)(t,["classes","title","children"]);return d.Children.count(r)?(0,a.jsxs)("div",{className:e.root,children:[(0,a.jsx)("div",{className:e.header,children:(0,a.jsx)("span",{className:e.headerText,children:n})}),(0,a.jsx)("div",{className:e.body,children:r})]}):(0,a.jsx)(a.Fragment,{})})),B=n(86886),O={text:function(t){return(0,a.jsx)(a.Fragment,{children:t.text})},section:n(31791).$0,typography:k.Z,grid:function(t){var e,n,i,l,o,s,d,c,p,m,f={xs:(null===t||void 0===t||null===(e=t.breakpoints)||void 0===e?void 0:e.xs)&&"item"===t.type?Number(null===t||void 0===t||null===(n=t.breakpoints)||void 0===n?void 0:n.xs):void 0,sm:(null===t||void 0===t||null===(i=t.breakpoints)||void 0===i?void 0:i.sm)&&"item"===t.type?Number(null===t||void 0===t||null===(l=t.breakpoints)||void 0===l?void 0:l.sm):void 0,md:(null===t||void 0===t||null===(o=t.breakpoints)||void 0===o?void 0:o.md)&&"item"===t.type?Number(null===t||void 0===t||null===(s=t.breakpoints)||void 0===s?void 0:s.md):void 0,lg:(null===t||void 0===t||null===(d=t.breakpoints)||void 0===d?void 0:d.lg)&&"item"===t.type?Number(null===t||void 0===t||null===(c=t.breakpoints)||void 0===c?void 0:c.lg):void 0,xl:(null===t||void 0===t||null===(p=t.breakpoints)||void 0===p?void 0:p.xl)&&"item"===t.type?Number(null===t||void 0===t||null===(m=t.breakpoints)||void 0===m?void 0:m.xl):void 0},v=(0,r.Z)((0,u.Z)((0,r.Z)({},t),{item:"item"===t.type,container:"container"===t.type,direction:"container"===t.type&&t.direction||void 0,spacing:t.spacing?Number(t.spacing):void 0}),f);return(0,a.jsx)(B.ZP,(0,r.Z)({},v))},product_image_viewer:E,product_attribute:x,product_atb:c,product_size:I,product_color:N,product_hero:C,product_rich_text:A,content_block:s.b0,accordion:L},D=function(t){var e=t.data;if(!e)return null;var n=e.name,i=e.properties,l=e.slots,o=O[n];if(!o)return null;var u={};if(l){var s=!0,d=!1,c=void 0;try{for(var p,m=function(){var t=p.value;u[t]=(0,a.jsx)(a.Fragment,{children:l[t].map((function(e){return(0,a.jsx)(D,{data:e},"".concat(t,"-").concat((0,w.x0)()))}))})},f=Object.keys(l)[Symbol.iterator]();!(s=(p=f.next()).done);s=!0)m()}catch(v){d=!0,c=v}finally{try{s||null==f.return||f.return()}finally{if(d)throw c}}}return(0,a.jsx)(o,(0,r.Z)({},i,u))},R=D,H=!0;function G(t){var e,n,l=t.vse,u=t.product,s=t.content,d=t.experienceConfig,c=t.forceDefaultLayout,p=(0,i.Z)((0,o.r0)((null===d||void 0===d||null===(e=d.experience)||void 0===e?void 0:e.pdpLayout)&&!c?null===d||void 0===d||null===(n=d.experience)||void 0===n?void 0:n.pdpLayout:s.defaultPDPLayout,l),1)[0],m=(0,i.Z)((0,o.r0)(s.productContent,l),1)[0],f=(0,r.Z)({},u,m);return(0,a.jsx)(v,{product:f,children:(0,a.jsx)("div",{style:{flexGrow:1},children:p&&((p.slots||{}).main||[]).map((function(t){return(0,a.jsx)(R,{data:t},(0,w.x0)())}))})})}G.Layout=l.Ar}},function(t){t.O(0,[982,774,888,179],(function(){return e=11461,t(t.s=e);var e}));var e=t.O();_N_E=e}]);