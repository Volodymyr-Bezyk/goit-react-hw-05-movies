"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[393],{4315:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(6444),o=t(407),i=(0,r.ZP)("div")(o.cp,o.Dh,o.$_,o.bK,o.GQ,o.Oq,o.Cg,o.FK,o.AF,o.eC)},8866:function(n,e,t){var r=t(1413),o=t(4315),i=(t(2791),t(8175)),a=t(184);e.Z=function(n){var e=n.count,t=n.width,u=n.height,s=n.gap;return(0,a.jsx)(o.Z,{pt:3,pr:3,pl:3,display:"flex",flexWrap:"wrap",justifyContent:"center",as:"ul",gridGap:null!==s&&void 0!==s?s:3,children:Array(e).fill(0).map((function(e,s){return(0,a.jsx)(o.Z,{as:"li",children:(0,a.jsx)(i.ZP,(0,r.Z)((0,r.Z)({speed:2,backgroundColor:"#545454",foregroundColor:"#f3f2f2"},n),{},{children:(0,a.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:t,height:u})}))},s)}))})}},2645:function(n,e,t){t.d(e,{JS:function(){return s},h$:function(){return g},kh:function(){return d},ts:function(){return l},z6:function(){return f}});var r=t(5861),o=t(7757),i=t.n(o),a=t(1044),u="7254cc1ad31c69d2a534e79f9d285c60";function s(n){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/3/trending/movie/day",n.next=3,a.ZP.get("/3/trending/movie/day",{signal:e.signal,params:{api_key:u}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/3/movie/".concat(e),n.next=3,a.ZP.get(r,{signal:t.signal,params:{api_key:u}});case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/3/movie/".concat(e,"/credits"),n.next=3,a.ZP.get(r,{signal:t.signal,params:{api_key:u}});case 3:return o=n.sent,n.abrupt("return",o.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/3/movie/".concat(e,"/reviews"),n.next=3,a.ZP.get(r,{signal:t.signal,params:{api_key:u}});case 3:return o=n.sent,n.abrupt("return",o.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e,t,r){var o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/3/search/movie",n.next=3,a.ZP.get("/3/search/movie",{signal:r.signal,params:{api_key:u,query:e,page:t}});case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a.ZP.defaults.baseURL="https://api.themoviedb.org"},4393:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,i,a,u,s,c,l,p=t(5861),f=t(885),h=t(7757),d=t.n(h),m=t(6731),g=t(2645),x=t(2791),v=t(5218),b=t(4315),y=t(8617),Z=t(168),w=t(6444),P=w.ZP.input(r||(r=(0,Z.Z)(["\n  padding: ","px;\n  height: ",";\n  width: ",";\n  margin-right: ","px;\n\n  border-radius: ",";\n  border-color: ",";\n  outline: none;\n  background-color: ",";\n  font-size: ","px;\n\n  :placeholder {\n    font-size: ","px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.sizes.h.min}),(function(n){return n.theme.sizes.w.min}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.radii.med}),(function(n){return n.theme.colors.textP}),(function(n){return n.theme.colors.btnBg}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.colors.textP})),j=w.ZP.button(o||(o=(0,Z.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n\n  svg {\n    transition: color 300ms ease-in-out;\n    color: ",";\n  }\n\n  :hover,\n  :focus {\n    svg {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.textP}),(function(n){return n.theme.colors.hover})),k=t(184),C=function(n){var e=n.setSearchParams,t=n.isRenderWithNewQuery;return(0,k.jsx)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget,o=r.elements.query.value.trim();e(o?{query:o,page:1}:{}),t.current=!0,r.reset()},children:(0,k.jsxs)(b.Z,{display:"flex",justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(P,{type:"text",name:"query",placeholder:"Please type here"}),(0,k.jsx)(j,{type:"submit",children:(0,k.jsx)(y.cMR,{size:40})})]})})},S=w.ZP.ul(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: ","px;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),_=w.ZP.li(a||(a=(0,Z.Z)(["\n  border-radius: ",";\n  overflow: hidden;\n  position: relative;\n  transition: box-shadow 300ms ease-in-out;\n\n  :hover,\n  :focus {\n    box-shadow: 1px 1px 27px 4px ",";\n  }\n"])),(function(n){return n.theme.radii.med}),(function(n){return n.theme.colors.hoverText})),z=t(7689),q=(0,w.ZP)(m.rU)(u||(u=(0,Z.Z)(["\n  display: block;\n  transition: transform 400ms ease-in-out;\n  :hover {\n    transform: scale(1.1);\n    p {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.hoverText})),R=w.ZP.p(s||(s=(0,Z.Z)(["\n  position: absolute;\n  bottom: 5%;\n  left: 10%;\n  color: ",";\n  font-weight: ",";\n  font-size: ","px;\n  text-decoration: underline;\n  transition: color 400ms ease-in-out;\n"])),(function(n){return n.theme.colors.title}),(function(n){return n.theme.fontWeights.heading}),(function(n){return n.theme.fontSizes[2]})),W=w.ZP.img(c||(c=(0,Z.Z)(["\n  max-width: 100%;\n  display: block;\n"]))),F=t(4630),B=function(n){var e=n.movie,t=e.id,r=e.backdrop_path,o=e.title,i=(0,z.TH)();return(0,k.jsxs)(q,{to:"".concat(t),state:{from:i},children:[(0,k.jsx)(W,{height:"236",width:"420",src:r?"https://image.tmdb.org/t/p/w500/".concat(r):F,alt:o}),(0,k.jsx)(R,{children:o})]})},D=function(n){var e=n.movies;return(0,k.jsx)(k.Fragment,{children:e.length>0&&(0,k.jsx)(S,{children:e.map((function(n){return(0,k.jsx)(_,{children:(0,k.jsx)(B,{movie:n})},n.id)}))})})},E=t(8866),L=t(1413),N=t(2982),T=t(4164),U=t(6048),A=t.n(U),O=(0,w.ZP)(A())(l||(l=(0,Z.Z)(["\n  padding: ","px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  li a {\n    font-family: inherit;\n    border-radius: ",";\n    padding: ","px ","px;\n    border: 1px solid ",";\n    background-color: ",";\n\n    cursor: pointer;\n  }\n  li.previous a,\n  li.next a {\n    border: 1px solid ",";\n    background-color: ",";\n    font-weight: ",";\n    color: ",";\n  }\n  li.selected a {\n    background-color: ",";\n    color: ",";\n    font-weight: ",";\n  }\n  li.disabled a {\n    color: grey;\n  }\n  li.disable,\n  li.disabled a {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.med}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.textP}),(function(n){return n.theme.colors.btnBg}),(function(n){return n.theme.colors.textP}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.textP}),(function(n){return n.theme.colors.textP}),(function(n){return n.theme.colors.modalBg}),(function(n){return n.theme.fontWeights.bold})),Q=document.getElementById("container"),$=function(n){var e=n.response,t=n.setSearchParams,r=(0,x.useState)(0),o=(0,f.Z)(r,2),i=o[0],a=o[1],u=(0,m.lr)(),s=(0,f.Z)(u,1)[0],c=Object.fromEntries((0,N.Z)(s)),l=e.total_pages,p=e.page;(0,x.useEffect)((function(){a(l)}),[l]);return(0,T.createPortal)((0,k.jsx)(k.Fragment,{children:(0,k.jsx)(O,{breakLabel:"...",nextLabel:"Next >>",pageRangeDisplayed:5,pageCount:i,previousLabel:"<< Prev",renderOnZeroPageCount:null,marginPagesDisplayed:1,onPageChange:function(n){var e=n.selected+1;t((0,L.Z)((0,L.Z)({},c),{},{page:e}))},forcePage:p-1})}),Q)},G=function(){var n=(0,x.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,m.lr)(),i=(0,f.Z)(o,2),a=i[0],u=i[1],s=a.get("query"),c=a.get("page"),l=(0,x.useState)(null),h=(0,f.Z)(l,2),y=h[0],Z=h[1],w=(0,x.useRef)(!1);return(0,x.useEffect)((function(){var n=new AbortController;if(s)return function(){var e=(0,p.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,(0,g.h$)(s,c,n);case 4:if(t=e.sent,Z(t),0!==t.results.length){e.next=9;break}return v.ZP.error("Nothing found for your query ".concat(s.toUpperCase())),e.abrupt("return");case 9:w.current&&(v.ZP.success("Successfully found ".concat(s.toUpperCase())),w.current=!1),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return");case 15:return e.prev=15,r(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}()(),function(){n.abort()}}),[s,c]),(0,k.jsxs)("div",{children:[(0,k.jsx)(b.Z,{p:4,children:(0,k.jsx)(C,{setSearchParams:u,isRenderWithNewQuery:w})}),t&&(0,k.jsx)(E.Z,{count:12,width:420,height:236}),!t&&y&&(0,k.jsxs)("div",{children:[(0,k.jsx)(D,{movies:y.results}),(0,k.jsx)($,{response:y,setSearchParams:u})]})]})}},4630:function(n,e,t){n.exports=t.p+"static/media/notFound.c4029bf390b06f8f019b.png"}}]);
//# sourceMappingURL=393.e310059c.chunk.js.map