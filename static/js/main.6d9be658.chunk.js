(this["webpackJsonpreact__simple-game"]=this["webpackJsonpreact__simple-game"]||[]).push([[0],{24:function(e,c,t){},25:function(e,c,t){},26:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t(1),a=t(17),i=t.n(a),r=(t(24),t(8)),o=t(6),l=(t(25),function(e){var c=e.click,t=e.handleClass;return Object(n.jsx)("button",{className:t?"hamburger hamburger_active":"hamburger",onClick:c,children:Object(n.jsx)("span",{className:"hamburger__box",children:Object(n.jsx)("span",{className:"hamburger__inner"})})})}),j=(t(26),[{name:"Start",path:"/",ecaxt:!0},{name:"Upgrades",path:"/Upgrades"},{name:"Achievements",path:"/Achievements"},{name:"Reset",path:"/Reset",class:"lastItem"}]),u=function(){var e=Object(s.useState)(!1),c=Object(o.a)(e,2),t=c[0],a=c[1],i=function(){a(!t)},u=j.map((function(e){return Object(n.jsx)("li",{className:"nav__list--item",children:Object(n.jsx)(r.b,{className:e.class?"nav__link lastItem":"nav__link",to:e.path,onClick:i,exact:!!e.ecaxt&&e.exact,children:e.name})},e.name)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"navigation",children:[Object(n.jsx)(l,{click:function(){a(!t)},handleClass:t}),Object(n.jsx)("nav",{className:t?"nav nav__active":"nav",children:Object(n.jsx)("ul",{className:"nav__list",children:u})})]})})},b=t(2),d=(t(32),t.p+"static/media/button.88e6cbd1.svg"),m=function(e){var c=e.handleGame,t=e.score;return Object(n.jsxs)("div",{className:"gamePage",children:[Object(n.jsxs)("h1",{className:"logo",children:["C",Object(n.jsx)("span",{className:"logo__color1",children:"lik"}),Object(n.jsx)("span",{className:"logo__color2",children:"ens"})]}),Object(n.jsx)("img",{className:"button",onClick:c,src:d,alt:""}),Object(n.jsx)("div",{className:"score__box",children:Object(n.jsx)("h2",{className:"score",children:t})})]})},O=t(15),h=(t(33),function(e){var c=e.achieveScore,t=e.scoree,s=e.name,a=e.description,i=e.color,r=e.setBgcolor;return console.log(i),Object(n.jsx)("div",{className:"achievement__boxitem",children:c>=t&&Object(n.jsxs)("div",{className:"achievement__element",style:{backgroundColor:i},onClick:function(){r(i)},children:[Object(n.jsx)("h2",{className:"achievement__name",children:s}),Object(n.jsx)("p",{className:"achievement__description",children:a})]})})}),x=(t(34),[{id:1,name:"first point",description:"\ud83d\ude42",scoree:1,color:"#D9D9D9"},{id:2,name:"100 points",description:"first 100 points",scoree:100,color:"#219653"},{id:3,name:"500 points",description:"\ud83d\ude01",scoree:1e3,color:"#F2994A"},{id:4,name:"1000 points",description:"\ud83d\udc17",scoree:5e3,color:"#BB6BD9"},{id:5,name:"5000 points",description:"\ud83d\udc31\u200d\ud83c\udfcd",scoree:1e4,color:"#EB5757"},{id:6,name:"10000 points",description:"Kox \ud83d\ude0e",scoree:2e4,color:"#F2C94C"},{id:7,name:"10000 points",description:"Kilo kox \ud83d\ude35",scoree:1e5,color:"#E6F5B0"},{id:8,name:"10000 points",description:"Mega kox \ud83e\udddf\u200d\u2642\ufe0f",scoree:2e5,color:"#BFB4FA"},{id:9,name:"10000 points",description:"Giga kox \ud83e\udd20",scoree:1e6,color:"#A38D5B"},{id:10,name:"10000 points",description:"Tera kox \ud83d\ude80",scoree:1e7,color:"#C777B8"}]),p=function(e){var c=e.achieveScore,t=e.setBgcolor,s=x.map((function(e){return Object(n.jsx)(h,Object(O.a)(Object(O.a)({},e),{},{achieveScore:c,setBgcolor:t}),e.id)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"achievements",children:[Object(n.jsx)("h2",{className:"achievements__header",children:"Achievements"}),Object(n.jsx)("div",{className:"achievements__grid",children:s})]})})},v=(t(35),function(e){var c=e.setIsRunning,t=e.isRunning,s=e.bonus,a=e.bonusActive,i=e.score,r=e.handleClickBonus,o=e.clickBonus;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"upgrades",children:[Object(n.jsxs)("p",{children:["SCORE: ",i]}),Object(n.jsxs)("div",{className:"information",children:[Object(n.jsxs)("div",{className:"information__box",children:[Object(n.jsx)("p",{className:"information__header",children:"CLICK"}),Object(n.jsxs)("span",{children:["click = ",o]})]}),Object(n.jsxs)("div",{className:"information__box",children:[Object(n.jsx)("p",{className:"information__header",children:"AUTO-CLICK"}),Object(n.jsxs)("span",{children:["second = ",s]})]})]}),Object(n.jsxs)("div",{className:"isActive",children:[Object(n.jsxs)("p",{className:"isActive__text",children:["AUTO-CLICK is ",Object(n.jsx)("span",{className:"isActive__text--bold",children:t?"ON":"OFF"})]}),Object(n.jsx)("button",{className:t?"upgrade upgrade__on":"upgrade upgrade__off",onClick:function(){c(!t)}})]}),Object(n.jsxs)("div",{className:"upgrade__section",children:[Object(n.jsxs)("div",{className:"upgrade__section--box",children:[Object(n.jsx)("p",{children:"Click upgrade"}),Object(n.jsx)("button",{className:"upgrade__button",onClick:r,children:"cost: 200"})]}),Object(n.jsxs)("div",{className:"upgrade__section--box",children:[Object(n.jsx)("p",{children:"Auto-Click upgrade"}),Object(n.jsx)("button",{className:"upgrade__button",onClick:a,children:"cost: 500"})]})]})]})})});t(36);var f=function(e,c){var t=Object(s.useRef)();Object(s.useEffect)((function(){t.current=e}),[e]),Object(s.useEffect)((function(){if(null!==c){var e=setInterval((function(){t.current()}),c);return function(){return clearInterval(e)}}}),[c])},_=(t(37),function(e){var c=e.setScore,t=e.setBonus,a=e.setAchieveScore,i=e.setclickBonus,r=Object(s.useState)(!1),l=Object(o.a)(r,2),j=l[0],u=l[1],b=function(){u(!j)};return Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsx)("button",{className:"confirmationButton resetButton",onClick:b,children:"RESET"}),j?Object(n.jsxs)("div",{className:"confirmationView",children:[Object(n.jsx)("p",{className:"confirmationText",children:"Are you sure?"}),Object(n.jsxs)("div",{className:"confirmationBox",children:[Object(n.jsx)("button",{className:"confirmationButton",onClick:b,children:"No"}),Object(n.jsx)("button",{className:"confirmationButton",onClick:function(){b(),c(0),t(0),a(0),i(1)},children:"Yes"})]})]}):[]]})}),g=(t(38),function(){return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsx)("h2",{children:"ERROR"}),Object(n.jsx)(r.b,{to:"/",className:"error__button",children:"Start"})]})}),N=function(){var e=Object(s.useState)((function(){var e=localStorage.getItem("score");return e?JSON.parse(e):0})),c=Object(o.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){localStorage.setItem("score",t)}),[t]);var i=Object(s.useState)((function(){var e=localStorage.getItem("clickBonus");return e?JSON.parse(e):1})),r=Object(o.a)(i,2),l=r[0],j=r[1];Object(s.useEffect)((function(){localStorage.setItem("clickBonus",l)}),[l]);var u=Object(s.useState)((function(){var e=localStorage.getItem("achieveScore");return e?JSON.parse(e):0})),d=Object(o.a)(u,2),O=d[0],h=d[1];Object(s.useEffect)((function(){localStorage.setItem("achieveScore",O)}),[t]);var x=Object(s.useState)(!1),N=Object(o.a)(x,2),S=N[0],k=N[1],B=function(){k(!S),t>=200&&S&&(j(l+1),a(t-200))},C=function(){a(t+l),h(O+l)},A=Object(s.useState)((function(){var e=localStorage.getItem("bonus");return e?JSON.parse(e):0})),I=Object(o.a)(A,2),R=I[0],E=I[1];Object(s.useEffect)((function(){localStorage.setItem("bonus",R)}),[R]);var F=Object(s.useState)(!1),J=Object(o.a)(F,2),D=J[0],K=J[1];f((function(){a(t+R),h(O+R)}),D?1e3:null);var T=Object(s.useState)(!1),U=Object(o.a)(T,2),y=U[0],w=U[1],G=function(){w(!y),t>=500&&y&&(E(R+1),a(t-500))},L=Object(s.useState)(),M=Object(o.a)(L,2),P=M[0],V=M[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"page",style:{backgroundColor:P},children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(m,{score:t,handleGame:C})}}),Object(n.jsx)(b.a,{path:"/Upgrades",render:function(){return Object(n.jsx)(v,{setIsRunning:K,isRunning:D,bonus:R,bonusActive:G,score:t,handleClickBonus:B,clickBonus:l})}}),Object(n.jsx)(b.a,{path:"/achievements",render:function(){return Object(n.jsx)(p,{achieveScore:O,setBgcolor:V})}}),Object(n.jsx)(b.a,{path:"/Reset",render:function(){return Object(n.jsx)(_,{setScore:a,setBonus:E,setAchieveScore:h,setclickBonus:j})}}),Object(n.jsx)(b.a,{component:g})]})})})};var S=function(){return Object(n.jsx)(r.a,{basename:"/React__simple-game",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(N,{})]})})};i.a.render(Object(n.jsx)(S,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6d9be658.chunk.js.map