(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"CKl+":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("/MKj"),i=n("ldY6"),s=(n("v+B1"),n("b2pr")),c=(n("Stkp"),a.a.createElement);t.a=function(){var e=Object(o.c)(i.r);return c("div",{className:"".concat(!0===e?"signin-footer":"signin-footer signin-footer-move-left")},c(s.a,null))}},DOl8:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("/MKj"),i=n("ldY6"),s=n("NUse"),c=n("nOHt"),l=n.n(c),u=a.a.createElement;t.a=function(){var e=Object(r.createRef)(),t=Object(c.useRouter)(),n=Object(o.b)(),a=Object(o.c)(i.g);Object(r.useEffect)((function(){0!==a.length&&(e.current.value=a)}),[]);return u("input",{className:"article-searchbar",ref:e,type:"text",placeholder:"ex, ReactJS, next.js, Golang...",onChange:function(r){""!==e.current.value?(n(Object(s.d)(r.target.value)),"/"!==t.pathname&&l.a.push("/")):n(Object(s.b)())}})}},Gwco:function(e,t,n){var r;e.exports=(r=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=r(n(2)),c=r(n(1)),l=r(n(5)),u=r(n(3)),d=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={isSdkLoaded:!1,isProcessing:!1},r.responseApi=function(e){window.FB.api("/me",{locale:r.props.language,fields:r.props.fields},(function(t){o(t,e),r.props.callback(t)}))},r.checkLoginState=function(e){r.setStateIfMounted({isProcessing:!1}),e.authResponse?r.responseApi(e.authResponse):r.props.onFailure?r.props.onFailure({status:e.status}):r.props.callback({status:e.status})},r.checkLoginAfterRefresh=function(e){"connected"===e.status?r.checkLoginState(e):window.FB.login((function(e){return r.checkLoginState(e)}),!0)},r.click=function(e){if(r.state.isSdkLoaded&&!r.state.isProcessing&&!r.props.isDisabled){r.setState({isProcessing:!0});var t=r.props,n=t.scope,a=t.appId,o=t.onClick,i=t.returnScopes,s=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,d=t.authType,f=t.state;if("function"!=typeof o||(o(e),!e.defaultPrevented)){var p={client_id:a,redirect_uri:c,state:f,return_scopes:i,scope:n,response_type:s,auth_type:d};if(r.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,l.default)(p);else{if(!window.FB)return void(r.props.onFailure&&r.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(r.checkLoginState,{scope:n,return_scopes:i,auth_type:p.auth_type})}}}},a(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,r=t.xfbml,a=t.cookie,o=t.version,i=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+o,appId:n,xfbml:r,cookie:a}),e.setStateIfMounted({isSdkLoaded:!0}),(i||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,u.default)(e,"code")||(0,u.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,n,r){var a=t.getElementsByTagName(n)[0],o=a,i=a;t.getElementById(r)||((i=t.createElement(n)).id=r,i.src="https://connect.facebook.net/"+e+"/sdk.js",o.parentNode.insertBefore(i,o))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(s.default.Component);d.propTypes={isDisabled:c.default.bool,callback:c.default.func.isRequired,appId:c.default.string.isRequired,xfbml:c.default.bool,cookie:c.default.bool,authType:c.default.string,scope:c.default.string,state:c.default.string,responseType:c.default.string,returnScopes:c.default.bool,redirectUri:c.default.string,autoLoad:c.default.bool,disableMobileRedirect:c.default.bool,isMobile:c.default.bool,fields:c.default.string,version:c.default.string,language:c.default.string,onClick:c.default.func,onFailure:c.default.func,render:c.default.func.isRequired},d.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e}(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,n){"use strict";function r(){}var a=n(7);e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]))},OK22:function(e,t,n){"use strict";var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("q1tI"),s=n.n(i),c=n("nOHt"),l=n.n(c),u=n("/MKj"),d=n("ldY6"),f=n("vDqi"),p=n.n(f),b=n("NUse"),m=n("VTCk"),v=s.a.createElement;t.a=function(e){return function(){var t=Object(u.b)(),n=Object(u.c)(d.l),r=Object(u.c)(d.b),s=Object(u.c)(d.q),c=Object(u.c)(d.e),f=Object(m.useMediaPredicate)("(max-width: 700px)");Object(i.useEffect)((function(){0===r.length&&(console.log("fetch articles"),t(Object(b.c)())),f&&t(Object(b.q)(!1))}),[]),Object(i.useEffect)((function(){n&&l.a.push("/")}),[n]);var h=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o,i,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:"none",o={provider:t,access_token:n,email:r},e.next=4,p.a.post("/api/social-auth",o);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(a.a.mark((function e(n,r){var o,i,s,c,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Object(b.k)(!0)),o=n.email,e.next=5,h("facebook",n.accessToken,o);case 5:i=e.sent,s=i.data.token,c=i.data.username,l=i.data.provider,g(s,o,c,l),t(Object(b.k)(!1)),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),t(Object(b.k)(!1)),t(Object(b.i)(e.t0.message)),console.log(e.t0),O();case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){t(Object(b.m)()),t(Object(b.t)("")),t(Object(b.h)("")),t(Object(b.j)([])),t(Object(b.e)("")),t(Object(b.r)("")),t(Object(b.f)([])),t(Object(b.s)(-1))},g=function(e,n,r,a){null!==n&&void 0!==n&&n.length>0&&(t(Object(b.h)(n)),localStorage.setItem("email",n)),null!==r&&void 0!==r&&r.length>0&&(t(Object(b.t)(r)),localStorage.setItem("username",r)),null!==a&&void 0!==a&&a.length>0&&(t(Object(b.r)(a)),localStorage.setItem("provider",a)),t(Object(b.l)()),t(Object(b.e)(e)),localStorage.setItem("login","true")};Object(i.useEffect)((function(){n&&function(){var e=Object(o.a)(a.a.mark((function e(){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("api/profilesocial/?provider=".concat(s,"&email=").concat(c));case 3:void 0===(n=e.sent).error&&(r=n.data.bookmarks.split(","),t(Object(b.f)(r.filter((function(e){return""!==e})))),localStorage.setItem("bookmarks",n.data.bookmarks.trim()),o=n.data.finishedArticles.split(","),t(Object(b.f)(o.filter((function(e){return""!==e})))),localStorage.setItem("finishedArticles",n.data.finishedArticles.trim())),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[s,c,n]);var j=function(){var e=Object(o.a)(a.a.mark((function e(n,r){var o,i,s,c,l,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Object(b.k)(!0)),e.next=4,p.a.post("/api/get-github-access-token",{code:n.code});case 4:return o=e.sent,e.next=7,h("github",o.data);case 7:i=e.sent,s=i.data.token,c=i.data.email,l=i.data.provider,u=i.data.username,g(s,c,u,l),t(Object(b.k)(!1)),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),t(Object(b.k)(!1)),t(Object(b.i)(e.t0.message)),console.log(e.t0),O();case 22:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}();return v(e,{passAccessToken:h,responseFacebook:y,ResponseGithubOnSuccess:j,ResponseGithubOnFailure:function(e){return console.error(e)},SetLogin:g})}}},QojX:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=(n("K9S6"),n("17x9")),u=n.n(l),d={type:u.a.string.isRequired,as:u.a.elementType},f=c.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,s=e.className,l=e.type,u=Object(a.a)(e,["as","className","type"]);return(c.a.createElement(o,Object(r.a)({},u,{ref:t,className:i()(s,l&&l+"-feedback")})))}));f.displayName="Feedback",f.propTypes=d,f.defaultProps={type:"valid"};var p=f,b=c.a.createContext({controlId:void 0}),m=n("vUet"),v=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,p=e.isStatic,v=e.as,h=void 0===v?"input":v,y=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(s.useContext)(b),g=O.controlId,j=O.custom?[l,"custom-control-input"]:[o,"form-check-input"],w=j[0],x=j[1];return o=Object(m.b)(w,x),c.a.createElement(h,Object(r.a)({},y,{ref:t,id:n||g,className:i()(u,o,d&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var h=v,y=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(a.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(b),p=f.controlId,v=f.custom?[o,"custom-control-label"]:[n,"form-check-label"],h=v[0],y=v[1];return n=Object(m.b)(h,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||p,className:i()(l,n)}))}));y.displayName="FormCheckLabel";var O=y,g=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.inline,d=e.disabled,f=e.isValid,v=e.isInvalid,y=e.feedback,g=e.className,j=e.style,w=e.title,x=e.type,k=e.label,P=e.children,N=e.custom,I=e.as,E=void 0===I?"input":I,_=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),R="switch"===x||N,S=R?[l,"custom-control"]:[o,"form-check"],C=S[0],F=S[1];o=Object(m.b)(C,F);var T=Object(s.useContext)(b).controlId,L=Object(s.useMemo)((function(){return{controlId:n||T,custom:R}}),[T,R,n]),M=null!=k&&!1!==k&&!P,q=c.a.createElement(h,Object(r.a)({},_,{type:"switch"===x?"checkbox":x,ref:t,isValid:f,isInvalid:v,isStatic:!M,disabled:d,as:E}));return c.a.createElement(b.Provider,{value:L},c.a.createElement("div",{style:j,className:i()(g,o,R&&"custom-"+x,u&&o+"-inline")},P||c.a.createElement(c.a.Fragment,null,q,M&&c.a.createElement(O,{title:w},k),(f||v)&&c.a.createElement(p,{type:f?"valid":"invalid"},y))))}));g.displayName="FormCheck",g.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},g.Input=h,g.Label=O;var j=g,w=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,p=e.lang,v=e.as,h=void 0===v?"input":v,y=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(s.useContext)(b),g=O.controlId,j=O.custom?[l,"custom-file-input"]:[o,"form-control-file"],w=j[0],x=j[1];return o=Object(m.b)(w,x),c.a.createElement(h,Object(r.a)({},y,{ref:t,id:n||g,type:"file",lang:p,className:i()(u,o,d&&"is-valid",f&&"is-invalid")}))}));w.displayName="FormFileInput";var x=w,k=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(a.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(b),p=f.controlId,v=f.custom?[o,"custom-file-label"]:[n,"form-file-label"],h=v[0],y=v[1];return n=Object(m.b)(h,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||p,className:i()(l,n),"data-browse":d["data-browse"]}))}));k.displayName="FormFileLabel";var P=k,N=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.disabled,d=e.isValid,f=e.isInvalid,v=e.feedback,h=e.className,y=e.style,O=e.label,g=e.children,j=e.custom,w=e.lang,k=e["data-browse"],N=e.as,I=void 0===N?"div":N,E=e.inputAs,_=void 0===E?"input":E,R=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=j?[l,"custom"]:[o,"form-file"],C=S[0],F=S[1];o=Object(m.b)(C,F);var T=Object(s.useContext)(b).controlId,L=Object(s.useMemo)((function(){return{controlId:n||T,custom:j}}),[T,j,n]),M=null!=O&&!1!==O&&!g,q=c.a.createElement(x,Object(r.a)({},R,{ref:t,isValid:d,isInvalid:f,disabled:u,as:_,lang:w}));return c.a.createElement(b.Provider,{value:L},c.a.createElement(I,{style:y,className:i()(h,o,j&&"custom-file")},g||c.a.createElement(c.a.Fragment,null,j?c.a.createElement(c.a.Fragment,null,q,M&&c.a.createElement(P,{"data-browse":k},O)):c.a.createElement(c.a.Fragment,null,M&&c.a.createElement(P,null,O),q),(d||f)&&c.a.createElement(p,{type:d?"valid":"invalid"},v))))}));N.displayName="FormFile",N.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},N.Input=x,N.Label=P;var I=N,E=(n("2W6z"),c.a.forwardRef((function(e,t){var n,o,l=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,p=e.id,v=e.className,h=e.isValid,y=e.isInvalid,O=e.plaintext,g=e.readOnly,j=e.custom,w=e.as,x=void 0===w?"input":w,k=Object(a.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),P=Object(s.useContext)(b).controlId,N=j?[u,"custom"]:[l,"form-control"],I=N[0],E=N[1];if(l=Object(m.b)(I,E),O)(o={})[l+"-plaintext"]=!0,n=o;else if("file"===d){var _;(_={})[l+"-file"]=!0,n=_}else if("range"===d){var R;(R={})[l+"-range"]=!0,n=R}else if("select"===x&&j){var S;(S={})[l+"-select"]=!0,S[l+"-select-"+f]=f,n=S}else{var C;(C={})[l]=!0,C[l+"-"+f]=f,n=C}return c.a.createElement(x,Object(r.a)({},k,{type:d,ref:t,readOnly:g,id:p||P,className:i()(v,n,h&&"is-valid",y&&"is-invalid")}))})));E.displayName="FormControl",E.Feedback=p;var _=E,R=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,p=Object(a.a)(e,["bsPrefix","className","children","controlId","as"]);n=Object(m.b)(n,"form-group");var v=Object(s.useMemo)((function(){return{controlId:u}}),[u]);return(c.a.createElement(b.Provider,{value:v},c.a.createElement(f,Object(r.a)({},p,{ref:t,className:i()(o,n)}),l)))}));R.displayName="FormGroup";var S=R,C=["xl","lg","md","sm","xs"],F=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"div":s,u=Object(a.a)(e,["bsPrefix","className","as"]),d=Object(m.b)(n,"col"),f=[],p=[];return C.forEach((function(e){var t,n,r,a=u[e];if(delete u[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&p.push("order"+i+"-"+r),null!=n&&p.push("offset"+i+"-"+n)})),f.length||f.push(d),c.a.createElement(l,Object(r.a)({},u,{ref:t,className:i.a.apply(void 0,[o].concat(f,p))}))}));F.displayName="Col";var T=F,L=c.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"label":n,l=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,p=e.htmlFor,v=Object(a.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(s.useContext)(b).controlId;l=Object(m.b)(l,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+"-"+u);var O=i()(f,l,d&&"sr-only",u&&y);return p=p||h,u?c.a.createElement(T,Object(r.a)({as:"label",className:O,htmlFor:p},v)):c.a.createElement(o,Object(r.a)({ref:t,className:O,htmlFor:p},v))}));L.displayName="FormLabel",L.defaultProps={column:!1,srOnly:!1};var M=L,q=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"small":s,u=e.muted,d=Object(a.a)(e,["bsPrefix","className","as","muted"]);return n=Object(m.b)(n,"form-text"),c.a.createElement(l,Object(r.a)({},d,{ref:t,className:i()(o,n,u&&"text-muted")}))}));q.displayName="FormText";var A=q,V=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));V.displayName="Switch",V.Input=j.Input,V.Label=j.Label;var B=V,U=n("YdCC"),D=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.inline,s=e.className,l=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(a.a)(e,["bsPrefix","inline","className","validated","as"]);return n=Object(m.b)(n,"form"),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i()(s,l&&"was-validated",o&&n+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=Object(U.a)("form-row"),D.Group=S,D.Control=_,D.Check=j,D.File=I,D.Switch=B,D.Label=M,D.Text=A;t.a=D},Stkp:function(e,t,n){},"T/rR":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,s=e.animation,u=e.size,d=e.children,f=e.as,p=void 0===f?"div":f,b=e.className,m=Object(a.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),v=(n=Object(l.b)(n,"spinner"))+"-"+s;return c.a.createElement(p,Object(r.a)({ref:t},m,{className:i()(b,v,u&&v+"-"+u,o&&"text-"+o)}),d)}));u.displayName="Spinner",t.a=u},Txfo:function(e,t,n){},VTCk:function(e,t,n){var r=n("q1tI");function a(e){return"function"!==typeof matchMedia?null:matchMedia(e)}function o(e){return e?{media:e.media,matches:e.matches}:null}function i(e){var t=r.useState((function(){return o(a(e))})),n=t[1],i=r.useCallback((function(e){return n(o(e))}),[n]);return r.useEffect((function(){var t=a(e);return i(t),t.addListener(i),function(){return t.removeListener(i)}}),[i,e]),t[0]}e.exports={useMedia:i,useMediaPredicate:function(e){var t=i(e);return t&&t.matches||!1}}},mlGW:function(e,t,n){var r;e.exports=(r=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.toParams=function(e){return e.replace(/^\??\//,"").split("&").reduce((function(e,t){var n=t.split("="),a=r(n,2),o=a[0],i=a[1];return e[o]=i,e}),{})},t.toQuery=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=Object.keys(e);return n.reduce((function(r,a,o){var i=""+r+a+"="+e[a];return o<n.length-1&&(i+=t),i}),"")}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3));t.default=r.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),s=r(i),c=r(n(5)),l=r(n(10)),u=n(0),d=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onBtnClick=function(){var e=r.props,t=e.clientId,n=e.scope,a=e.redirectUri,o=(0,u.toQuery)({client_id:t,scope:n,redirect_uri:a}),i=r.popup=l.default.open("github-oauth-authorize","https://github.com/login/oauth/authorize?"+o,{height:1e3,width:600});r.onRequest(),i.then((function(e){return r.onSuccess(e)}),(function(e){return r.onFailure(e)}))},r.onRequest=function(){r.props.onRequest()},r.onSuccess=function(e){if(!e.code)return r.onFailure(new Error("'code' not found"));r.props.onSuccess(e)},r.onFailure=function(e){r.props.onFailure(e)},a(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.buttonText,r=e.children,a={onClick:this.onBtnClick};return t&&(a.className=t),s.default.createElement("button",a,r||n)}}]),t}(i.Component);d.propTypes={buttonText:c.default.string,children:c.default.node,className:c.default.string,clientId:c.default.string.isRequired,onRequest:c.default.func,onSuccess:c.default.func,onFailure:c.default.func,redirectUri:c.default.string.isRequired,scope:c.default.string},d.defaultProps={buttonText:"Sign in with GitHub",scope:"user:email",onRequest:function(){},onSuccess:function(){},onFailure:function(){}},t.default=d},function(e,t){e.exports=r},function(e,t,n){e.exports=n(6)()},function(e,t,n){"use strict";var r=n(7),a=n(8),o=n(9);e.exports=function(){function e(e,t,n,r,i,s){s!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,a,o,i,s,c){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,o,i,s,c],d=0;(l=new Error(t.replace(/%s/g,(function(){return u[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.id=t,this.url=n,this.options=r}return r(e,[{key:"open",value:function(){var e=this.url,t=this.id,n=this.options;this.window=window.open(e,t,(0,a.toQuery)(n,","))}},{key:"close",value:function(){this.cancel(),this.window.close()}},{key:"poll",value:function(){var e=this;this.promise=new Promise((function(t,n){e._iid=window.setInterval((function(){try{var r=e.window;if(!r||!1!==r.closed)return e.close(),void n(new Error("The popup was closed"));if(r.location.href===e.url||"blank"===r.location.pathname)return;var o=(0,a.toParams)(r.location.search.replace(/^\?/,""));t(o),e.close()}catch(e){}}),500)}))}},{key:"cancel",value:function(){this._iid&&(window.clearInterval(this._iid),this._iid=null)}},{key:"then",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}},{key:"catch",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}}],[{key:"open",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=new(Function.prototype.bind.apply(this,[null].concat(t)));return r.open(),r.poll(),r}}]),e}();t.default=o}]))},"v+B1":function(e,t,n){},xrSH:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("DOl8"),i=n("wx14"),s=n("zLVn"),c=n("17x9"),l=n.n(c),u=n("97+O"),d={id:l.a.any,href:l.a.string,onClick:l.a.func,title:l.a.node.isRequired,disabled:l.a.bool,menuRole:l.a.string,renderMenuOnMount:l.a.bool,rootCloseEvent:l.a.string,bsPrefix:l.a.string,variant:l.a.string,size:l.a.string},f=a.a.forwardRef((function(e,t){var n=e.title,r=e.children,o=e.bsPrefix,c=e.rootCloseEvent,l=e.variant,d=e.size,f=e.menuRole,p=e.renderMenuOnMount,b=e.disabled,m=e.href,v=e.id,h=Object(s.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id"]);return(a.a.createElement(u.a,Object(i.a)({ref:t},h),a.a.createElement(u.a.Toggle,{id:v,href:m,size:d,variant:l,disabled:b,childBsPrefix:o},n),a.a.createElement(u.a.Menu,{role:f,renderOnMount:p,rootCloseEvent:c},r)))}));f.displayName="DropdownButton",f.propTypes=d;var p=f,b=n("/MKj"),m=n("NUse"),v=n("ldY6"),h=n("nOHt"),y=n.n(h),O=a.a.createElement,g=function(){var e=Object(b.b)(),t=Object(h.useRouter)(),n=Object(b.c)(v.d);return O(p,{className:"article-dropdown",id:"dropdown-basic-button",title:-1==n?"All articles":0==n?"Challenges":1==n?"Programming":void 0,onSelect:function(n){"-1"!=n?(console.log(n),e(Object(m.g)(n)),"/"!==t.pathname&&y.a.push("/")):e(Object(m.a)())}},O(u.a.Item,{eventKey:"-1"},"All"),O(u.a.Item,{eventKey:"0"},"Challenges"),O(u.a.Item,{eventKey:"1"},"Programming"))},j=(n("v+B1"),n("VTCk")),w=a.a.createElement;t.a=function(){var e=Object(b.b)(),t=Object(b.c)(v.r),n=(Object(b.c)(v.l),Object(j.useMediaPredicate)("(max-width: 700px)"));Object(r.useEffect)((function(){n&&e(Object(m.q)(!1))}),[]);var a=function(){!0===t?(console.log("Hide Planner"),e(Object(m.q)(!1))):(console.log("Show Planner"),e(Object(m.q)(!0)))};return w("div",{className:"sidebar",style:{width:1==t?"23%":"2%"}},w("div",{className:"sidebar-grid-box"},1==t&&w(r.Fragment,null,w("div",{className:"sidebar-title"},"Let's Create Your Learning Plan",w("div",{className:"sidebar-subtitle"},"Choose the topics about Software development, Testing, DevOps, or 100DaysOfCode to build the personal learning plan")),w("div",{className:"sidebar-dropdown"},w("div",{className:"sidebar-dropdown-content"},w(g,null))),w("div",{className:"sidebar-search"},w("div",{className:"sidebar-search-content"},w(o.a,null)))),1==t?w("div",{className:"sidebar-remove-left"},w("span",{className:"btn-o",onClick:a},w("a",{href:"#"},w("img",{src:"https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-left.png",alt:"Hide",title:"Hide"})))):w("div",{className:"sidebar-remove-right"},w("span",{className:"btn-o",onClick:a},w("a",{href:"#"},w("img",{src:"https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-right.png",alt:"Show",title:"Show"}))))))}}}]);