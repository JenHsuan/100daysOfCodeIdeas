(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Nwme:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return a("smJ5")}])},smJ5:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return L}));var n=a("q1tI"),r=a.n(n),o=a("/MKj"),s=a("9idV"),i=a("DjIZ"),c=a("o0o1"),l=a.n(c),u=a("HaE+"),p=a("rePB"),b=a("Gwco"),d=a.n(b),m=a("mlGW"),f=a.n(m),O=(a("Txfo"),a("vDqi")),j=a.n(O),g=a("T/rR"),v=a("QojX"),w=a("nOHt"),h=a.n(w),k=a("ldY6"),y=a("NUse"),N=a("OK22"),x=r.a.createElement;function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=Object(N.a)({WrappedComponent:function(e){var t=e.responseFacebook,a=e.ResponseGithubOnSuccess,r=e.ResponseGithubOnFailure,s=e.SetLogin,i=Object(o.b)(),c=Object(o.c)(k.l),b=Object(o.c)(k.r),m=Object(o.c)(k.f),O=Object(o.c)(k.k),w=Object(n.useState)(""),N=w[0],S=w[1];Object(n.useEffect)((function(){S(window.location.href)}),[]),Object(n.useEffect)((function(){c&&h.a.push("/")}),[c]);var E=Object(n.useState)({username:"",email:"",password:""}),C=E[0],D=E[1],G=C.username,I=C.email,_=C.password,L=function(e){return function(t){D(P(P({},C),{},Object(p.a)({},e,t.target.value.trim())))}},A=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,o,c,u,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,i(Object(y.k)(!0)),e.next=5,j.a.post("/api/users/",{username:G,password:_});case 5:if(void 0===(a=e.sent).data.error){e.next=11;break}n=a.data.error,i(Object(y.i)("".concat(Object.keys(n)[0]," : ").concat(Object.values(n)[0]))),e.next=26;break;case 11:return r=a.data.id,o=a.data.token,{Authorization:"JWT ".concat(o)},e.next=16,j.a.post("/api/profile/",{email:I,reader:r});case 16:if(c=e.sent,void 0!==(n=c.data.error)&&i(Object(y.i)("".concat(Object.keys(n)[0]," : ").concat(Object.values(n)[0]))),void 0===c||c.data.email!==I){e.next=26;break}return e.next=22,j.a.post("/api/token-auth/",{username:G,password:_});case 22:e.sent,s(o,I,G,"normal"),i(Object(y.s)(r)),void 0===c.error&&(u=c.data.bookmarks.split(","),i(Object(y.f)(u.filter((function(e){return""!==e})))),localStorage.setItem("bookmarks",c.data.bookmarks.trim()),p=c.data.finishedArticles.split(","),i(Object(y.j)(p.filter((function(e){return""!==e})))),localStorage.setItem("finishedArticles",c.data.finishedArticles.trim()));case 26:i(Object(y.k)(!1)),e.next=34;break;case 29:e.prev=29,e.t0=e.catch(1),i(Object(y.k)(!1)),i(Object(y.i)(e.t0.message)),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[1,29]])})));return function(t){return e.apply(this,arguments)}}();return x(n.Fragment,null,x("div",{className:"".concat(!0===b?"signinform-move-left signinform":"signinform")},!0===O?x("div",{className:"signinform-grid-box"},x("div",{className:"signinform-spinner"},x(g.a,{animation:"border",role:"status"},x("span",{className:"sr-only"},"Loading...")))):x("div",{className:"signinform-grid-box"},x("div",{className:"title"},"Create Your Free Account"),x(d.a,{cssClass:"fb-btn",appId:"240314257268798",autoLoad:!1,fields:"name,email,picture",callback:t,render:function(e){return x("button",{onClick:e.onClick,className:"fb-btn"},"Facebook")}}),x(f.a,{className:"github-btn",clientId:"Iv1.ca8ab67c0ba860ab",redirectUri:N,onSuccess:a,onFailure:r,buttonText:"Github"}),x("div",{className:"split-line"},"Or signup by email"),x("div",{className:"signin-form"},x(v.a,{onSubmit:A},x(v.a.Group,{controlId:"formBasicEmail"},x(v.a.Control,{type:"text",placeholder:"Enter Username",className:"username",onChange:L("username")})),x(v.a.Group,{controlId:"formBasicPassword"},x(v.a.Control,{type:"text",placeholder:"Enter Email",className:"email",onChange:L("email")})),x(v.a.Group,{controlId:"formBasicPassword"},x(v.a.Control,{type:"password",placeholder:"Password",className:"password",onChange:L("password")})),x("button",{className:"btn-submit"},"Get Started"))),x("div",{className:"messages"},m))))}}),C=(a("Stkp"),a("q4sD"),a("CKl+")),D=a("xrSH"),G=(a("v+B1"),a("QvYV")),I=a("i30r"),_=r.a.createElement,L=!0;t.default=function(e){var t=e.jsonLdData;return _(G.a,null,_(I.a,{title:"ALayman Daily Learning - Signup",keywords:"signup",url:"https://daily-learning.herokuapp.com/",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.",jsonLd:t}),_(o.a,{store:s.a},_(i.a,null),_("div",{className:"signin-grid-box"},_(D.a,null),_(E,null),_(C.a,null))))}}},[["Nwme",0,2,3,1,4,7,5]]]);