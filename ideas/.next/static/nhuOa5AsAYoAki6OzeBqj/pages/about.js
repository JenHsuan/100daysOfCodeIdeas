(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2l/u":function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),o=a("HaE+"),i=a("q1tI"),l=a.n(i),s=a("/MKj"),c=a("9idV"),u=a("DjIZ"),m=(a("CUzW"),a("q4sD"),a("b2pr")),p=a("ycUj"),b=l.a.createElement,v=Object(p.a)({WrappedComponent:function(){return b(i.Fragment,null,b("div",{className:"column-top-grid-box"},b("img",{src:"https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/code-cover-min.png",alt:""})),b("div",{className:"column-right-grid-box"},b("div",{className:"about-website-title"},"About Daily Learning",b("hr",null)),b("div",{className:"about-website-subtitle-1"},"Read an Article a Day"),b("div",{className:"about-website-content-1"},"There are many information around us today. To improve ourselves, we just need to move a further move every day. Daily learning provides articles, challenges, or videos to people who are also self-learner for programming."),b("div",{className:"about-website-subtitle-2"},"About the Author"),b("div",{className:"about-website-content-2"},"Jen-Hsuan Hsieh (Sean Hsieh) is also a self-learner, writer, and developer. He is a senior web developer with front-end JavaScript framework's experiences. He is familiar with React.js, Knockout.js, server-side languages like NodeJS and ASP.NET MVC"),b("div",{className:"about-website-subtitle-3"},"Get In Touch"),b("div",{className:"about-website-content-3"},"For any general questions, email to ",b("a",{href:"ofalpha@gmail.com"},"ofalpha@gmail.com"),". We'll get back to you ASAP.")))}}),d=a("QvYV"),f=a("i30r"),g=a("vDqi"),h=a.n(g),w=a("SkY1"),j=l.a.createElement,y=function(e){var t=e.jsonLdData;return j(d.a,null,j(f.a,{title:"ALayman Daily Learning - About Daily Learning",keywords:"about,contacts,learning",url:"https://daily-learning.herokuapp.com/",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.",jsonLd:t}),j(s.a,{store:c.a},j(u.a,null),j("div",{className:"aboutpage-grid-box"},j(v,null),j("div",{className:"footer"},j(m.a,null)))))};y.getInitialProps=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,e.next=4,h.a.get("/api/articles");case 4:n=e.sent,a=Object(w.a)(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return console.log(JSON.stringify(a)),e.abrupt("return",{jsonLdData:JSON.stringify(a)});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();t.default=y},IpVZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("o0o1"),r=a.n(n),o=a("HaE+"),i=a("vDqi"),l=a.n(i),s=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("api/renew-token/");case 3:e.sent,e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),t(),c();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){localStorage.removeItem("login"),localStorage.removeItem("username"),localStorage.removeItem("email"),localStorage.removeItem("finishedArticles"),localStorage.removeItem("bookmarks"),localStorage.removeItem("token"),localStorage.removeItem("provider")}},hIud:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a("2l/u")}])},ycUj:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("/MKj"),i=a("ldY6"),l=a("NUse"),s=a("IpVZ"),c=r.a.createElement;t.a=function(e){var t=e.WrappedComponent;return function(){var e=Object(o.b)(),a=Object(o.c)(i.b);Object(n.useEffect)((function(){Object(s.a)(r),0===a.length&&(console.log("fetch articles"),e(Object(l.c)()));var t=localStorage.getItem("bookmarks");if(null!==t){var n=t.split(",");e(Object(l.f)(n.filter((function(e){return""!==e}))))}var o=localStorage.getItem("filterArticles");if(null!==o){var i=o.split(",");e(Object(l.j)(i.filter((function(e){return""!==e}))))}}),[]);var r=function(){e(Object(l.m)()),e(Object(l.t)("")),e(Object(l.s)(-1)),e(Object(l.h)("")),e(Object(l.j)([])),e(Object(l.e)("")),e(Object(l.r)("")),e(Object(l.f)([]))};return c(t,null)}}}},[["hIud",0,2,3,1,4,5]]]);