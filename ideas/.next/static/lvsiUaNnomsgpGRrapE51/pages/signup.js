(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Nwme:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return a("smJ5")}])},smJ5:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),n=a.n(r),s=a("HaE+"),o=a("q1tI"),c=a.n(o),i=a("/MKj"),l=a("9idV"),u=a("DjIZ"),p=a("rePB"),b=a("Gwco"),d=a.n(b),m=a("mlGW"),f=a.n(m),O=(a("Txfo"),a("vDqi")),g=a.n(O),j=a("T/rR"),v=a("QojX"),w=a("nOHt"),h=a.n(w),k=a("ldY6"),y=a("NUse"),N=a("OK22"),x=c.a.createElement;function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=Object(N.a)({WrappedComponent:function(e){var t=e.responseFacebook,a=e.ResponseGithubOnSuccess,r=e.ResponseGithubOnFailure,c=e.SetLogin,l=Object(i.b)(),u=Object(i.c)(k.l),b=Object(i.c)(k.r),m=Object(i.c)(k.f),O=Object(i.c)(k.k),w=Object(o.useState)(""),N=w[0],S=w[1];Object(o.useEffect)((function(){S(window.location.href)}),[]),Object(o.useEffect)((function(){u&&h.a.push("/")}),[u]);var E=Object(o.useState)({username:"",email:"",password:""}),C=E[0],D=E[1],I=C.username,G=C.email,L=C.password,J=function(e){return function(t){D(P(P({},C),{},Object(p.a)({},e,t.target.value.trim())))}},A=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,o,i,u,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,l(Object(y.k)(!0)),e.next=5,g.a.post("/api/users/",{username:I,password:L});case 5:if(void 0===(a=e.sent).data.error){e.next=11;break}r=a.data.error,l(Object(y.i)("".concat(Object.keys(r)[0]," : ").concat(Object.values(r)[0]))),e.next=26;break;case 11:return s=a.data.id,o=a.data.token,{Authorization:"JWT ".concat(o)},e.next=16,g.a.post("/api/profile/",{email:G,reader:s});case 16:if(i=e.sent,void 0!==(r=i.data.error)&&l(Object(y.i)("".concat(Object.keys(r)[0]," : ").concat(Object.values(r)[0]))),void 0===i||i.data.email!==G){e.next=26;break}return e.next=22,g.a.post("/api/token-auth/",{username:I,password:L});case 22:e.sent,c(o,G,I,"normal"),l(Object(y.s)(s)),void 0===i.error&&(u=i.data.bookmarks.split(","),l(Object(y.f)(u.filter((function(e){return""!==e})))),localStorage.setItem("bookmarks",i.data.bookmarks.trim()),p=i.data.finishedArticles.split(","),l(Object(y.j)(p.filter((function(e){return""!==e})))),localStorage.setItem("finishedArticles",i.data.finishedArticles.trim()));case 26:l(Object(y.k)(!1)),e.next=34;break;case 29:e.prev=29,e.t0=e.catch(1),l(Object(y.k)(!1)),l(Object(y.i)(e.t0.message)),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[1,29]])})));return function(t){return e.apply(this,arguments)}}();return x(o.Fragment,null,x("div",{className:"".concat(!0===b?"signinform-move-left signinform":"signinform")},!0===O?x("div",{className:"signinform-grid-box"},x("div",{className:"signinform-spinner"},x(j.a,{animation:"border",role:"status"},x("span",{className:"sr-only"},"Loading...")))):x("div",{className:"signinform-grid-box"},x("div",{className:"title"},"Create Your Free Account"),x(d.a,{cssClass:"fb-btn",appId:"240314257268798",autoLoad:!1,fields:"name,email,picture",callback:t,render:function(e){return x("button",{onClick:e.onClick,className:"fb-btn"},"Facebook")}}),x(f.a,{className:"github-btn",clientId:"Iv1.ca8ab67c0ba860ab",redirectUri:N,onSuccess:a,onFailure:r,buttonText:"Github"}),x("div",{className:"split-line"},"Or signup by email"),x("div",{className:"signin-form"},x(v.a,{onSubmit:A},x(v.a.Group,{controlId:"formBasicEmail"},x(v.a.Control,{type:"text",placeholder:"Enter Username",className:"username",onChange:J("username")})),x(v.a.Group,{controlId:"formBasicPassword"},x(v.a.Control,{type:"text",placeholder:"Enter Email",className:"email",onChange:J("email")})),x(v.a.Group,{controlId:"formBasicPassword"},x(v.a.Control,{type:"password",placeholder:"Password",className:"password",onChange:J("password")})),x("button",{className:"btn-submit"},"Get Started"))),x("div",{className:"messages"},m))))}}),C=(a("Stkp"),a("q4sD"),a("CKl+")),D=a("xrSH"),I=(a("v+B1"),a("QvYV")),G=a("i30r"),L=a("SkY1"),J=c.a.createElement,A=function(e){var t=e.jsonLdData;return J(I.a,null,J(G.a,{title:"ALayman Daily Learning - Signup",keywords:"signup",url:"https://daily-learning.herokuapp.com/",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.",jsonLd:t}),J(i.a,{store:l.a},J(u.a,null),J("div",{className:"signin-grid-box"},J(D.a,null),J(E,null),J(C.a,null))))};A.getInitialProps=function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,e.next=4,g.a.get("/api/articles");case 4:r=e.sent,a=Object(L.a)(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return console.log(JSON.stringify(a)),e.abrupt("return",{jsonLdData:JSON.stringify(a)});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();t.default=A}},[["Nwme",0,2,4,1,3,6,5]]]);