(this["webpackJsonpbuurt-tagger"]=this["webpackJsonpbuurt-tagger"]||[]).push([[0],{36:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);t(36);var r,i,a,c,o=t(0),s=t.n(o),l=t(31),u=t.n(l),b=t(21),j=t(6),d=t(5),h=t(3);!function(e){e.start="flex-start",e.center="center",e.end="flex-end",e.spaceBetween="space-between",e.spaceAround="space-around",e.spaceEvenly="space-evenly",e.stretch="stretch"}(r||(r={})),function(e){e.start="flex-start",e.center="center",e.end="flex-end",e.stretch="stretch",e.baseline="baseline"}(i||(i={}));var x,p,g,O,f,m,v=h.b.div((function(e){var n=e.stretch,t=e.mainAxisAlignment,r=e.crossAxisAlignment;return Object(h.a)(a||(a=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: ",";\n    align-items: ",";\n    max-width: 100%;\n    ","\n  "])),t,r,n&&Object(h.a)(c||(c=Object(d.a)(["\n      flex-grow: 1;\n    "]))))})),w=t(1),y=h.b.div(x||(x=Object(d.a)(["\n  width: 90%;\n\n  @media (min-width: 540px) {\n    width: 70%;\n  }\n\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"]))),k=function(e){var n=e.children;return Object(w.jsx)(v,{crossAxisAlignment:i.center,children:Object(w.jsx)(y,{children:n})})},z=t(12),A=t(11),B=[{name:"Staatsliedenbuurt",tags:["Naast Westerpark","GWL terrein","Hier woont Jasper","West"]},{name:"Rivierenbuurt",tags:["Berlage","Amsterdamse School","Zuid"]},{name:"Indische Buurt",tags:[]},{name:"Bijlmermeer",tags:["Modernisme","Honingraatflats","Vliegramp","Zuid-Oost"]}],C=s.a.createContext(void 0),R=function(){var e=s.a.useContext(C);if(void 0===e)throw new Error("useBuurten must be used within a BuurtenProvider");return e},S=function(e){var n=e.children,t=s.a.useState([]),r=Object(A.a)(t,2),i=r[0],a=r[1],c={buurten:i,findBuurt:function(e){return i.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))},updateBuurt:function(e){var n=i.reduce((function(n,t){return t.name===e.name?[].concat(Object(z.a)(n),[e]):[].concat(Object(z.a)(n),[t])}),[]);a(n)}};return s.a.useEffect((function(){a(B)}),[]),Object(w.jsx)(C.Provider,{value:c,children:n})},G=t(8),D=t(15),L=h.b.div((function(e){var n=e.reverse,t=e.stretch,r=e.mainAxisAlignment,i=e.crossAxisAlignment;return Object(h.a)(p||(p=Object(d.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    max-height: 100%;\n    ","\n  "])),n?"row-reverse":"row",r,i,t&&Object(h.a)(g||(g=Object(d.a)(["\n      flex-grow: 1;\n    "]))))}));!function(e){e.required="Vul dit veld in",e.maxLength="Dit veld overschrijdt het maximaal aantal karakters "}(O||(O={})),function(e){e.vertical="vertical",e.horizontal="horizontal"}(f||(f={})),function(e){e.primaryBlack="rgb(0, 0, 0)",e.primaryDarkblue="rgb(0, 70, 153)",e.primaryRed="rgb(236, 0, 0)",e.primaryWhite="rgb(255, 255, 255)",e.neutralGrey1="rgb(245, 245, 245)",e.neutralGrey2="rgb(230, 230, 230)",e.neutralGrey3="rgb(180, 180, 180)",e.neutralGrey4="rgb(118, 118, 118)",e.neutralGrey5="rgb(50, 50, 50)"}(m||(m={}));var I,W,F,E,M,V,J,N,q,H,P,T,Z=m,K=h.b.div((function(e){var n=e.orientation,t=void 0===n?f.vertical:n,r=e.size;return t===f.horizontal?Object(h.a)(I||(I=Object(d.a)(["\n        width: ","px;\n        display: inline-block;\n      "])),r):t===f.vertical?Object(h.a)(W||(W=Object(d.a)(["\n        height: ","px;\n      "])),r):void 0})),U=h.b.div(F||(F=Object(d.a)(["\n  flex-grow: 1;\n"]))),Q=h.b.label(E||(E=Object(d.a)(["\n  font-size: 16px;\n  color: ",";\n  letter-spacing: 0;\n  line-height: 22px;\n  font-weight: 700;\n  text-align: left;\n"])),Z.primaryRed),X=h.b.label(M||(M=Object(d.a)(["\n  font-size: 18px;\n  color: ",";\n  letter-spacing: 0;\n  line-height: 25px;\n  font-weight: 700;\n  text-align: left;\n"])),Z.primaryBlack),Y=function(e){var n=e.label,t=e.name,r=e.errorMessage,i=e.input;return Object(w.jsxs)(U,{children:[Object(w.jsx)(X,{htmlFor:t,children:n}),Object(w.jsx)(K,{size:10}),i,r&&Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)(K,{size:15}),Object(w.jsx)(Q,{children:r})]})]})},$=h.b.input.attrs((function(){return{type:"text"}}))(V||(V=Object(d.a)(["\n  font-size: 16px;\n  color: ",";\n  letter-spacing: 0;\n  line-height: 22px;\n  font-weight: 400;\n  text-align: left;\n  padding: 10px 10px 12px 10px;\n  border: 1px solid ",";\n  width: 100%;\n\n  &:hover,\n  :active {\n    border: 1px solid ",";\n  }\n"])),Z.primaryBlack,Z.neutralGrey4,Z.primaryBlack),_=h.b.ul(J||(J=Object(d.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]))),ee=h.b.li(N||(N=Object(d.a)(["\n  margin: 10px 0;\n"]))),ne=t(35),te=h.b.button((function(){return Object(h.a)(q||(q=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    border: 0;\n    padding: 12px 15px;\n    font-size: 16px;\n    letter-spacing: 0px;\n    line-height: 22px;\n    font-weight: 700;\n    white-space: nowrap;\n    min-width: 90px;\n\n    &:hover,\n    :active {\n      background-color: ",";\n      cursor: pointer;\n    }\n\n    &:disabled {\n      background-color: ",";\n      color: ",";\n    }\n  "])),Z.primaryRed,Z.primaryWhite,Object(ne.a)(.1,Z.primaryRed),Z.neutralGrey4,Z.neutralGrey3)})),re=h.b.button((function(){return Object(h.a)(H||(H=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n    padding: 12px 15px;\n    font-size: 16px;\n    letter-spacing: 0px;\n    line-height: 22px;\n    font-weight: 700;\n    white-space: nowrap;\n\n    &:hover,\n    :active {\n      cursor: pointer;\n      border-width: 2px;\n      padding: 11px 14px;\n    }\n\n    &:disabled {\n      background-color: ",";\n      color: ",";\n      border: 0;\n    }\n  "])),Z.primaryWhite,Z.primaryDarkblue,Z.primaryDarkblue,Z.neutralGrey4,Z.neutralGrey3)})),ie=t(23),ae=t(18),ce=h.b.span((function(e){var n=e.withRemoveIcon;return Object(h.a)(P||(P=Object(d.a)(["\n    ","\n    display: inline-block;\n    background-color: ",";\n    color: ",";\n    padding: 7px 20px 7px 10px;\n    font-size: 16px;\n    letter-spacing: 0;\n    font-weight: 700;\n    text-align: left;\n  "])),n?"cursor: pointer;":"cursor: initial;",Z.neutralGrey4,Z.primaryWhite)})),oe=function(e){var n=e.withRemoveIcon,t=void 0!==n&&n,r=e.children,i=Object(ie.a)(e,["withRemoveIcon","children"]);return Object(w.jsxs)(ce,Object(G.a)(Object(G.a)({},i),{},{withRemoveIcon:t,tabIndex:t?0:-1,children:[t&&Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)(ae.a,{icon:D.c}),Object(w.jsx)(K,{orientation:f.horizontal,size:10})]}),r]}))},se=function(e){var n=e.buurt,t=e.onSubmit,r=s.a.useState({tags:n.tags}),a=Object(A.a)(r,2),c=a[0],o=a[1],l=s.a.useState(""),u=Object(A.a)(l,2),b=u[0],j=u[1],d=s.a.useState(void 0),h=Object(A.a)(d,2),x=h[0],p=h[1],g=function(e,n){e.preventDefault();var t=c.tags.reduce((function(e,t){return t===n?Object(z.a)(e):[].concat(Object(z.a)(e),[t])}),[]),r=Object(G.a)(Object(G.a)({},c),{},{tags:t});o(r)},m=s.a.useCallback((function(e){if(e.preventDefault(),""!==b)if(b.length>128)p("maxLength");else{p(void 0);var n=Object(z.a)(c.tags);n.push(b);var t=Object(G.a)(Object(G.a)({},c),{},{tags:n});o(t),j("")}else p("required")}),[c,o,b,j]),v=s.a.useCallback((function(e){e.preventDefault(),t(c)}),[c,o]);return Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)(_,{children:c.tags.map((function(e,n){return Object(w.jsx)(ee,{children:Object(w.jsx)(oe,{withRemoveIcon:!0,onClick:function(n){return g(n,e)},onKeyUp:function(n){"Enter"===n.code&&g(n,e)},children:e})},n)}))}),Object(w.jsxs)("form",{onSubmit:v,children:[Object(w.jsx)(Y,{name:"input-tag",label:"Voer hier je tag in",errorMessage:x&&O[x],input:Object(w.jsxs)(L,{crossAxisAlignment:i.center,children:[Object(w.jsx)($,{value:b,onChange:function(e){return j(e.target.value)}}),Object(w.jsx)(K,{orientation:f.horizontal,size:10}),Object(w.jsx)(re,{onClick:m,children:"Voeg tag toe"})]})}),Object(w.jsx)(K,{orientation:f.vertical,size:15}),Object(w.jsx)(te,{type:"submit",value:"Submit",children:"Sla op"})]})]})},le=h.b.button(T||(T=Object(d.a)(["\n  cursor: pointer;\n  height: auto;\n  border: none;\n  background-color: ",";\n  padding: 0;\n  align-self: baseline;\n  white-space: normal;\n  text-align: left;\n  color: ",";\n  font-size: 16px;\n  letter-spacing: 0px;\n  line-height: 22px;\n  font-weight: 700;\n\n  &:hover {\n    color: ",";\n  }\n"])),Z.primaryWhite,Z.primaryDarkblue,Z.primaryRed),ue=function(e){var n=e.iconLeft,t=e.iconRight,r=e.children,i=Object(ie.a)(e,["iconLeft","iconRight","children"]);return Object(w.jsxs)(le,Object(G.a)(Object(G.a)({},i),{},{children:[!!n&&Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)(ae.a,{icon:n}),Object(w.jsx)(K,{orientation:f.horizontal,size:10})]}),r,!!t&&Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)(K,{orientation:f.horizontal,size:10}),Object(w.jsx)(ae.a,{icon:t})]})]}))},be=function(){var e=Object(j.g)().buurtName,n=R(),t=n.findBuurt,a=n.updateBuurt,c=s.a.useState(),o=Object(A.a)(c,2),l=o[0],u=o[1],b=Object(j.f)();s.a.useEffect((function(){var n=t(e);u(n)}),[t]);var d=s.a.useCallback((function(e){e.preventDefault(),b.push("/")}),[b]),h=s.a.useCallback((function(e){void 0!==l&&(a(Object(G.a)(Object(G.a)({},l),e)),b.push("/"))}),[l,a,b]);return void 0===l?Object(w.jsxs)("p",{children:["Buurt met de naam ",e," bestaat niet"]}):Object(w.jsxs)(v,{children:[Object(w.jsxs)(L,{mainAxisAlignment:r.spaceBetween,crossAxisAlignment:i.baseline,children:[Object(w.jsx)("h2",{children:l.name}),Object(w.jsx)(ue,{onClick:d,iconLeft:D.a,children:"Terug"})]}),Object(w.jsx)(se,{buurt:l,onSubmit:h})]})},je=function(){var e=Object(j.f)(),n=R().buurten;return Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)(L,{mainAxisAlignment:r.spaceBetween,crossAxisAlignment:i.baseline,children:Object(w.jsx)("h2",{children:"Buurten overzicht"})}),Object(w.jsx)(_,{children:n.map((function(n,t){return Object(w.jsxs)(ee,{children:[Object(w.jsx)(ue,{iconRight:D.b,onClick:function(t){return function(n,t){n.preventDefault(),e.push("/".concat(t.name.toLowerCase()))}(t,n)},children:n.name}),!!n.tags.length&&Object(w.jsx)(_,{children:n.tags.map((function(e,n){return Object(w.jsx)(ee,{children:Object(w.jsx)(oe,{children:e},n)},n)}))})]},t)}))})]})},de=function(){return Object(w.jsx)(S,{children:Object(w.jsxs)(k,{children:[Object(w.jsx)("header",{children:Object(w.jsx)("h1",{children:"Buurt Tagger"})}),Object(w.jsx)("main",{children:Object(w.jsx)(b.a,{basename:"/buurt-tagger",children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/:buurtName",children:Object(w.jsx)(be,{})}),Object(w.jsx)(j.a,{exact:!0,path:"/",children:Object(w.jsx)(je,{})})]})})})]})})};u.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(de,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.26aaf310.chunk.js.map