(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9qlI":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),s=n("/MKj"),o=n("9idV"),i=n("DjIZ"),c=n("o0o1"),l=n.n(c),u=n("HaE+"),p=n("rePB"),b=n("Gwco"),f=n.n(b),m=n("mlGW"),d=n.n(m),O=(n("Txfo"),n("vDqi")),g=n.n(O),v=n("T/rR"),j=n("QojX"),w=n("ldY6"),h=n("OK22"),k=n("NUse"),y=a.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(h.a)((function(e){var t=e.responseFacebook,n=e.ResponseGithubOnSuccess,a=e.ResponseGithubOnFailure,o=e.SetLogin,i=Object(s.b)(),c=Object(s.c)(w.r),b=Object(s.c)(w.f),m=Object(s.c)(w.k),O=Object(s.c)(w.s),h=Object(s.c)(w.l),N=Object(r.useState)(""),P=N[0],S=N[1];Object(r.useEffect)((function(){S(window.location.href)}),[]);var E=Object(r.useState)({username:"",password:""}),I=E[0],D=E[1],C=I.username,q=I.password,G=function(e){return function(t){D(x(x({},I),{},Object(p.a)({},e,t.target.value.trim())))}},_=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,i(Object(k.k)(!0)),e.next=5,g.a.post("/api/token-auth/",{username:C,password:q});case 5:n=e.sent,r=n.data.token,a=n.data.user.profile.email,s=n.data.user.id,o(r,a,C,"normal"),i(Object(k.s)(s)),i(Object(k.k)(!1)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),i(Object(k.k)(!1)),i(Object(k.i)(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h&&function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("api/profile/?reader=".concat(O));case 3:void 0===(t=e.sent).error&&(n=t.data.bookmarks.split(","),i(Object(k.f)(n.filter((function(e){return""!==e})))),localStorage.setItem("bookmarks",t.data.bookmarks.trim()),r=t.data.finishedArticles.split(","),i(Object(k.f)(r.filter((function(e){return""!==e})))),localStorage.setItem("finishedArticles",t.data.finishedArticles.trim())),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[O,h]),y(r.Fragment,null,y("div",{className:"".concat(!0===c?"signinform-move-left signinform":"signinform")},!0===m?y("div",{className:"signinform-grid-box"},y("div",{className:"signinform-spinner"},y(v.a,{animation:"border",role:"status"},y("span",{className:"sr-only"},"Loading...")))):y("div",{className:"signinform-grid-box"},y("div",{className:"title"},"Welcome back!"),y(f.a,{cssClass:"fb-btn",appId:"240314257268798",autoLoad:!1,fields:"name,email,picture",callback:t,render:function(e){return y("button",{onClick:e.onClick,className:"fb-btn"},"Facebook")}}),y(d.a,{className:"github-btn",clientId:"Iv1.ca8ab67c0ba860ab",redirectUri:P,onSuccess:n,onFailure:a,buttonText:"Github"}),y("div",{className:"split-line"},"Or signin by username"),y("div",{className:"signin-form"},y(j.a,{onSubmit:_},y(j.a.Group,{controlId:"formBasicEmail"},y(j.a.Control,{type:"text",placeholder:"Enter Username",className:"username",onChange:G("username")})),y(j.a.Group,{controlId:"formBasicPassword"},y(j.a.Control,{type:"password",placeholder:"Password",className:"password",onChange:G("password")})),y("button",{className:"btn-submit"},"Sign in"))),y("div",{className:"messages"},b))))})),S=(n("v+B1"),n("q4sD"),n("CKl+")),E=n("xrSH"),I=n("QvYV"),D=n("i30r"),C=a.a.createElement;t.default=function(){return C(I.a,null,C(D.a,{title:"ALayman Daily Learning - Signin",keywords:"signin",url:"https://daily-learning.herokuapp.com/",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming."}),C(s.a,{store:o.a},C(i.a,null),C("div",{className:"signin-grid-box"},C(E.a,null),C(P,null),C(S.a,null))))}},qt10:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n("9qlI")}])}},[["qt10",0,2,3,1,4,6,5]]]);