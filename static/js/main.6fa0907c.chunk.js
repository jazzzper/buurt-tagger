(this["webpackJsonpbuurt-tagger"]=this["webpackJsonpbuurt-tagger"]||[]).push([[0],{36:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);t(36);var r,i,a,c=t(0),o=t.n(c),s=t(31),l=t.n(s),b=t(22),u=t(6),j=t(5),d=t(7),h=t(16),x=t(3);!function(e){e.start="flex-start",e.center="center",e.end="flex-end",e.spaceBetween="space-between",e.spaceAround="space-around",e.spaceEvenly="space-evenly",e.stretch="stretch"}(r||(r={})),function(e){e.start="flex-start",e.center="center",e.end="flex-end",e.stretch="stretch",e.baseline="baseline"}(i||(i={})),function(e){e.primaryBlack="rgb(0, 0, 0)",e.primaryDarkblue="rgb(0, 70, 153)",e.primaryRed="rgb(236, 0, 0)",e.primaryWhite="rgb(255, 255, 255)",e.neutralGrey1="rgb(245, 245, 245)",e.neutralGrey2="rgb(230, 230, 230)",e.neutralGrey3="rgb(180, 180, 180)",e.neutralGrey4="rgb(118, 118, 118)",e.neutralGrey5="rgb(50, 50, 50)"}(a||(a={}));var p,g,O,f,m,v,y,w,k,z,A=a,B=x.b.div((function(e){var n=e.stretch,t=e.mainAxisAlignment,r=e.crossAxisAlignment;return Object(x.a)(p||(p=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: ",";\n    align-items: ",";\n    max-width: 100%;\n    ","\n  "])),t,r,n&&Object(x.a)(g||(g=Object(j.a)(["\n      flex-grow: 1;\n    "]))))})),R=t(1),C=Object(x.b)(B)(O||(O=Object(j.a)(["\n  background-color: ",";\n"])),A.neutralGrey1),G=x.b.div(f||(f=Object(j.a)(["\n  padding: 0 20px;\n  min-height: 100vh;\n  width: 90%;\n  background-color: ",";\n\n  @media (min-width: 540px) {\n    width: 70%;\n  }\n\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"])),A.primaryWhite),S=function(e){var n=e.children,t=Object(h.a)(e,["children"]);return Object(R.jsx)(C,Object(d.a)(Object(d.a)({},t),{},{crossAxisAlignment:i.center,children:Object(R.jsx)(G,{children:n})}))},D=t(12),L=t(11),W=[{name:"Staatsliedenbuurt",tags:["Naast Westerpark","GWL terrein","Hier woont Jasper","West"]},{name:"Rivierenbuurt",tags:["Berlage","Amsterdamse School","Zuid"]},{name:"Indische Buurt",tags:[]},{name:"Bijlmermeer",tags:["Modernisme","Honingraatflats","Vliegramp","Zuid-Oost"]}],I=o.a.createContext(void 0),F=function(){var e=o.a.useContext(I);if(void 0===e)throw new Error("useBuurten must be used within a BuurtenProvider");return e},E=function(e){var n=e.children,t=o.a.useState([]),r=Object(L.a)(t,2),i=r[0],a=r[1],c={buurten:i,findBuurt:function(e){return i.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))},updateBuurt:function(e){var n=i.reduce((function(n,t){return t.name===e.name?[].concat(Object(D.a)(n),[e]):[].concat(Object(D.a)(n),[t])}),[]);a(n)}};return o.a.useEffect((function(){a(W)}),[]),Object(R.jsx)(I.Provider,{value:c,children:n})},M=t(15),V=x.b.div((function(e){var n=e.reverse,t=e.stretch,r=e.mainAxisAlignment,i=e.crossAxisAlignment;return Object(x.a)(m||(m=Object(j.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    max-height: 100%;\n    ","\n  "])),n?"row-reverse":"row",r,i,t&&Object(x.a)(v||(v=Object(j.a)(["\n      flex-grow: 1;\n    "]))))}));!function(e){e.required="Vul dit veld in",e.maxLength="Dit veld overschrijdt het maximaal aantal karakters"}(y||(y={})),function(e){e.vertical="vertical",e.horizontal="horizontal"}(w||(w={}));var J,N,T,q,H,P,Z,K,U,Q,X=x.b.div((function(e){var n=e.orientation,t=void 0===n?w.vertical:n,r=e.size;return t===w.horizontal?Object(x.a)(k||(k=Object(j.a)(["\n        width: ","px;\n        display: inline-block;\n      "])),r):t===w.vertical?Object(x.a)(z||(z=Object(j.a)(["\n        height: ","px;\n      "])),r):void 0})),Y=x.b.div(J||(J=Object(j.a)(["\n  flex-grow: 1;\n"]))),$=x.b.label(N||(N=Object(j.a)(["\n  font-size: 16px;\n  color: ",";\n  letter-spacing: 0;\n  line-height: 22px;\n  font-weight: 700;\n  text-align: left;\n"])),A.primaryRed),_=x.b.label(T||(T=Object(j.a)(["\n  font-size: 18px;\n  color: ",";\n  letter-spacing: 0;\n  line-height: 25px;\n  font-weight: 700;\n  text-align: left;\n"])),A.primaryBlack),ee=function(e){var n=e.label,t=e.name,r=e.errorMessage,i=e.input;return Object(R.jsxs)(Y,{children:[Object(R.jsx)(_,{htmlFor:t,children:n}),Object(R.jsx)(X,{size:10}),i,r&&Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(X,{size:15}),Object(R.jsx)($,{children:r})]})]})},ne=x.b.input.attrs((function(){return{type:"text"}}))(q||(q=Object(j.a)(["\n  font-size: 16px;\n  color: ",";\n  letter-spacing: 0;\n  line-height: 22px;\n  font-weight: 400;\n  text-align: left;\n  padding: 10px 10px 12px 10px;\n  border: 1px solid ",";\n  width: 100%;\n\n  &:hover,\n  :active {\n    border: 1px solid ",";\n  }\n"])),A.primaryBlack,A.neutralGrey4,A.primaryBlack),te=x.b.ul(H||(H=Object(j.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]))),re=x.b.li(P||(P=Object(j.a)(["\n  margin: 10px 0;\n"]))),ie=t(35),ae=x.b.button((function(){return Object(x.a)(Z||(Z=Object(j.a)(["\n    background-color: ",";\n    color: ",";\n    border: 0;\n    padding: 12px 15px;\n    font-size: 16px;\n    letter-spacing: 0px;\n    line-height: 22px;\n    font-weight: 700;\n    white-space: nowrap;\n    min-width: 90px;\n\n    &:hover,\n    :active {\n      background-color: ",";\n      cursor: pointer;\n    }\n\n    &:disabled {\n      background-color: ",";\n      color: ",";\n    }\n  "])),A.primaryRed,A.primaryWhite,Object(ie.a)(.1,A.primaryRed),A.neutralGrey4,A.neutralGrey3)})),ce=x.b.button((function(){return Object(x.a)(K||(K=Object(j.a)(["\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n    padding: 12px 15px;\n    font-size: 16px;\n    letter-spacing: 0px;\n    line-height: 22px;\n    font-weight: 700;\n    white-space: nowrap;\n\n    &:hover,\n    :active {\n      cursor: pointer;\n      border-width: 2px;\n      padding: 11px 14px;\n    }\n\n    &:disabled {\n      background-color: ",";\n      color: ",";\n      border: 0;\n    }\n  "])),A.primaryWhite,A.primaryDarkblue,A.primaryDarkblue,A.neutralGrey4,A.neutralGrey3)})),oe=t(19),se=x.b.span((function(e){var n=e.withRemoveIcon;return Object(x.a)(U||(U=Object(j.a)(["\n    ","\n    display: inline-block;\n    background-color: ",";\n    color: ",";\n    padding: 7px 20px 7px 10px;\n    font-size: 16px;\n    letter-spacing: 0;\n    font-weight: 700;\n    text-align: left;\n  "])),n?"cursor: pointer;":"cursor: initial;",A.neutralGrey4,A.primaryWhite)})),le=function(e){var n=e.withRemoveIcon,t=void 0!==n&&n,r=e.children,i=Object(h.a)(e,["withRemoveIcon","children"]);return Object(R.jsxs)(se,Object(d.a)(Object(d.a)({},i),{},{withRemoveIcon:t,tabIndex:t?0:-1,children:[t&&Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(oe.a,{icon:M.c}),Object(R.jsx)(X,{orientation:w.horizontal,size:10})]}),r]}))},be=function(e){var n=e.buurt,t=e.onSubmit,r=o.a.useState({tags:n.tags}),a=Object(L.a)(r,2),c=a[0],s=a[1],l=o.a.useState(""),b=Object(L.a)(l,2),u=b[0],j=b[1],h=o.a.useState(void 0),x=Object(L.a)(h,2),p=x[0],g=x[1],O=function(e,n){e.preventDefault();var t=c.tags.reduce((function(e,t){return t===n?Object(D.a)(e):[].concat(Object(D.a)(e),[t])}),[]),r=Object(d.a)(Object(d.a)({},c),{},{tags:t});s(r)},f=o.a.useCallback((function(e){if(e.preventDefault(),""!==u)if(u.length>128)g("maxLength");else{g(void 0);var n=Object(D.a)(c.tags);n.push(u);var t=Object(d.a)(Object(d.a)({},c),{},{tags:n});s(t),j("")}else g("required")}),[c,s,u,j]),m=o.a.useCallback((function(e){e.preventDefault(),t(c)}),[c,s]);return Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(te,{children:c.tags.map((function(e,n){return Object(R.jsx)(re,{children:Object(R.jsx)(le,{withRemoveIcon:!0,onClick:function(n){return O(n,e)},onKeyUp:function(n){"Enter"===n.code&&O(n,e)},children:e})},n)}))}),Object(R.jsxs)("form",{onSubmit:m,children:[Object(R.jsx)(ee,{name:"formfield-tags",label:"Voer hier je tag in",errorMessage:p&&y[p],input:Object(R.jsxs)(V,{crossAxisAlignment:i.center,children:[Object(R.jsx)(ne,{name:"formfield-tags",value:u,onChange:function(e){return j(e.target.value)}}),Object(R.jsx)(X,{orientation:w.horizontal,size:10}),Object(R.jsx)(ce,{onClick:f,children:"Voeg tag toe"})]})}),Object(R.jsx)(X,{orientation:w.vertical,size:15}),Object(R.jsx)(ae,{type:"submit",value:"Submit",children:"Sla op"})]})]})},ue=x.b.button(Q||(Q=Object(j.a)(["\n  cursor: pointer;\n  height: auto;\n  border: none;\n  // TODO: Remove default styling from useragent and set background - color to none\n  background-color: ",";\n  padding: 0;\n  align-self: baseline;\n  white-space: normal;\n  text-align: left;\n  color: ",";\n  font-size: 16px;\n  letter-spacing: 0px;\n  line-height: 22px;\n  font-weight: 700;\n\n  &:hover {\n    color: ",";\n  }\n"])),A.primaryWhite,A.primaryDarkblue,A.primaryRed),je=function(e){var n=e.iconLeft,t=e.iconRight,r=e.children,i=Object(h.a)(e,["iconLeft","iconRight","children"]);return Object(R.jsxs)(ue,Object(d.a)(Object(d.a)({},i),{},{children:[!!n&&Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(oe.a,{icon:n}),Object(R.jsx)(X,{orientation:w.horizontal,size:10})]}),r,!!t&&Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(X,{orientation:w.horizontal,size:10}),Object(R.jsx)(oe.a,{icon:t})]})]}))},de=function(){var e=Object(u.g)().buurtName,n=F(),t=n.findBuurt,a=n.updateBuurt,c=o.a.useState(),s=Object(L.a)(c,2),l=s[0],b=s[1],j=Object(u.f)();o.a.useEffect((function(){var n=t(e);b(n)}),[t]);var h=o.a.useCallback((function(e){e.preventDefault(),j.push("/")}),[j]),x=o.a.useCallback((function(e){void 0!==l&&(a(Object(d.a)(Object(d.a)({},l),e)),j.push("/"))}),[l,a,j]);return void 0===l?Object(R.jsxs)("p",{children:["Buurt met de naam ",e," bestaat niet"]}):Object(R.jsxs)(B,{children:[Object(R.jsxs)(V,{mainAxisAlignment:r.spaceBetween,crossAxisAlignment:i.baseline,children:[Object(R.jsx)("h2",{children:l.name}),Object(R.jsx)(je,{onClick:h,iconLeft:M.a,children:"Terug"})]}),Object(R.jsx)(be,{buurt:l,onSubmit:x})]})},he=function(){var e=Object(u.f)(),n=F().buurten;return Object(R.jsxs)(o.a.Fragment,{children:[Object(R.jsx)(V,{mainAxisAlignment:r.spaceBetween,crossAxisAlignment:i.baseline,children:Object(R.jsx)("h2",{children:"Buurten overzicht"})}),Object(R.jsx)(te,{children:n.map((function(n,t){return Object(R.jsxs)(re,{children:[Object(R.jsx)(je,{iconRight:M.b,onClick:function(t){return function(n,t){n.preventDefault(),e.push("/".concat(t.name.toLowerCase()))}(t,n)},children:n.name}),!!n.tags.length&&Object(R.jsx)(te,{children:n.tags.map((function(e,n){return Object(R.jsx)(re,{children:Object(R.jsx)(le,{children:e},n)},n)}))})]},t)}))})]})},xe=function(){return Object(R.jsx)(E,{children:Object(R.jsxs)(S,{children:[Object(R.jsx)("header",{children:Object(R.jsx)("h1",{children:"Buurt Tagger"})}),Object(R.jsx)("main",{children:Object(R.jsx)(b.a,{basename:"/buurt-tagger",children:Object(R.jsxs)(u.c,{children:[Object(R.jsx)(u.a,{path:"/:buurtName",children:Object(R.jsx)(de,{})}),Object(R.jsx)(u.a,{exact:!0,path:"/",children:Object(R.jsx)(he,{})})]})})})]})})};l.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(xe,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.6fa0907c.chunk.js.map