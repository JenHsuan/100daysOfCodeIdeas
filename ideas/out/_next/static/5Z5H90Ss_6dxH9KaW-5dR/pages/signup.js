(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Nwme:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return a("smJ5")}])},smJ5:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("/MKj"),o=a("9idV"),c=a("DjIZ"),i=a("o0o1"),l=a.n(i),u=a("HaE+"),b=a("rePB"),m=a("Gwco"),p=a.n(m),d=a("mlGW"),f=a.n(d),O=(a("Txfo"),a("vDqi")),g=a.n(O),j=a("T/rR"),v=a("QojX"),w=a("nOHt"),k=a.n(w),h=a("ldY6"),y=a("NUse"),N=a("OK22"),x=n.a.createElement;function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=Object(N.a)((function(e){var t=e.responseFacebook,a=e.ResponseGithubOnSuccess,n=e.ResponseGithubOnFailure,o=e.SetLogin,c=Object(s.b)(),i=Object(s.c)(h.l),m=Object(s.c)(h.r),d=Object(s.c)(h.f),O=Object(s.c)(h.k),w=Object(r.useState)(""),N=w[0],P=w[1];Object(r.useEffect)((function(){P(window.location.href)}),[]),Object(r.useEffect)((function(){i&&k.a.push("/")}),[i]);var E=Object(r.useState)({username:"",email:"",password:""}),C=E[0],D=E[1],I=C.username,G=C.email,A=C.password,F=function(e){return function(t){D(S(S({},C),{},Object(b.a)({},e,t.target.value.trim())))}},T=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,n,s,i,u,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c(Object(y.k)(!0)),e.next=5,g.a.post("/api/users/",{username:I,password:A});case 5:if(void 0===(a=e.sent).data.error){e.next=11;break}r=a.data.error,c(Object(y.i)("".concat(Object.keys(r)[0]," : ").concat(Object.values(r)[0]))),e.next=26;break;case 11:return n=a.data.id,s=a.data.token,{Authorization:"JWT ".concat(s)},e.next=16,g.a.post("/api/profile/",{email:G,reader:n});case 16:if(i=e.sent,void 0!==(r=i.data.error)&&c(Object(y.i)("".concat(Object.keys(r)[0]," : ").concat(Object.values(r)[0]))),void 0===i||i.data.email!==G){e.next=26;break}return e.next=22,g.a.post("/api/token-auth/",{username:I,password:A});case 22:e.sent,o(s,G,I,"normal"),c(Object(y.s)(n)),void 0===i.error&&(u=i.data.bookmarks.split(","),c(Object(y.f)(u.filter((function(e){return""!==e})))),localStorage.setItem("bookmarks",i.data.bookmarks.trim()),b=i.data.finishedArticles.split(","),c(Object(y.f)(b.filter((function(e){return""!==e})))),localStorage.setItem("finishedArticles",i.data.finishedArticles.trim()));case 26:c(Object(y.k)(!1)),e.next=34;break;case 29:e.prev=29,e.t0=e.catch(1),c(Object(y.k)(!1)),c(Object(y.i)(e.t0.message)),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[1,29]])})));return function(t){return e.apply(this,arguments)}}();return x(r.Fragment,null,x("div",{className:"".concat(!0===m?"signinform-move-left signinform":"signinform")},!0===O?x("div",{className:"signinform-grid-box"},x("div",{className:"signinform-spinner"},x(j.a,{animation:"border",role:"status"},x("span",{className:"sr-only"},"Loading...")))):x("div",{className:"signinform-grid-box"},x("div",{className:"title"},"Create Your Free Account"),x(p.a,{cssClass:"fb-btn",appId:"240314257268798",autoLoad:!1,fields:"name,email,picture",callback:t,render:function(e){return x("button",{onClick:e.onClick,className:"fb-btn"},"Facebook")}}),x(f.a,{className:"github-btn",clientId:"Iv1.ca8ab67c0ba860ab",redirectUri:N,onSuccess:a,onFailure:n,buttonText:"Github"}),x("div",{className:"split-line"},"Or signup by email"),x("div",{className:"signin-form"},x(v.a,{onSubmit:T},x(v.a.Group,{controlId:"formBasicEmail"},x(v.a.Control,{type:"text",placeholder:"Enter Username",className:"username",onChange:F("username")})),x(v.a.Group,{controlId:"formBasicPassword"},x(v.a.Control,{type:"text",placeholder:"Enter Email",className:"email",onChange:F("email")})),x(v.a.Group,{controlId:"formBasicPassword"},x(v.a.Control,{type:"password",placeholder:"Password",className:"password",onChange:F("password")})),x("button",{className:"btn-submit"},"Get Started"))),x("div",{className:"messages"},d))))})),C=(a("Stkp"),a("q4sD"),a("CKl+")),D=a("xrSH"),I=(a("v+B1"),a("QvYV")),G=a("i30r"),A=n.a.createElement;t.default=function(){return A(I.a,null,A(G.a,{title:"ALayman Daily Learning - Signup",keywords:"signup",url:"",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming."}),A(s.a,{store:o.a},A(c.a,null),A("div",{className:"signin-grid-box"},A(D.a,null),A(E,null),A(C.a,null))))}}},[["Nwme",0,2,4,1,3,6,5]]]);