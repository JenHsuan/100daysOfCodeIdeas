(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"CKl+":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("/MKj"),i=n("ldY6"),s=(n("v+B1"),n("b2pr")),c=(n("Stkp"),r.a.createElement);t.a=function(){var e=Object(o.c)(i.r);return c("div",{className:"".concat(!0===e?"signin-footer":"signin-footer signin-footer-move-left")},c(s.a,null))}},DOl8:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("/MKj"),i=n("ldY6"),s=n("NUse"),c=n("nOHt"),l=n.n(c),u=r.a.createElement;t.a=function(){var e=Object(a.createRef)(),t=Object(c.useRouter)(),n=Object(o.b)(),r=Object(o.c)(i.g);Object(a.useEffect)((function(){0!==r.length&&(e.current.value=r)}),[]);return u("input",{className:"article-searchbar",ref:e,type:"text",placeholder:"ex, ReactJS, next.js, Golang...",onChange:function(a){""!==e.current.value?(n(Object(s.d)(a.target.value)),"/"!==t.pathname&&l.a.push("/")):n(Object(s.b)())}})}},Gwco:function(e,t,n){var a;e.exports=(a=n("q1tI"),function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=a(n(2)),c=a(n(1)),l=a(n(5)),u=a(n(3)),d=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={isSdkLoaded:!1,isProcessing:!1},a.responseApi=function(e){window.FB.api("/me",{locale:a.props.language,fields:a.props.fields},(function(t){o(t,e),a.props.callback(t)}))},a.checkLoginState=function(e){a.setStateIfMounted({isProcessing:!1}),e.authResponse?a.responseApi(e.authResponse):a.props.onFailure?a.props.onFailure({status:e.status}):a.props.callback({status:e.status})},a.checkLoginAfterRefresh=function(e){"connected"===e.status?a.checkLoginState(e):window.FB.login((function(e){return a.checkLoginState(e)}),!0)},a.click=function(e){if(a.state.isSdkLoaded&&!a.state.isProcessing&&!a.props.isDisabled){a.setState({isProcessing:!0});var t=a.props,n=t.scope,r=t.appId,o=t.onClick,i=t.returnScopes,s=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,d=t.authType,f=t.state;if("function"!=typeof o||(o(e),!e.defaultPrevented)){var p={client_id:r,redirect_uri:c,state:f,return_scopes:i,scope:n,response_type:s,auth_type:d};if(a.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,l.default)(p);else{if(!window.FB)return void(a.props.onFailure&&a.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(a.checkLoginState,{scope:n,return_scopes:i,auth_type:p.auth_type})}}}},r(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,a=t.xfbml,r=t.cookie,o=t.version,i=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+o,appId:n,xfbml:a,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(i||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,u.default)(e,"code")||(0,u.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,n,a){var r=t.getElementsByTagName(n)[0],o=r,i=r;t.getElementById(a)||((i=t.createElement(n)).id=a,i.src="https://connect.facebook.net/"+e+"/sdk.js",o.parentNode.insertBefore(i,o))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(s.default.Component);d.propTypes={isDisabled:c.default.bool,callback:c.default.func.isRequired,appId:c.default.string.isRequired,xfbml:c.default.bool,cookie:c.default.bool,authType:c.default.string,scope:c.default.string,state:c.default.string,responseType:c.default.string,returnScopes:c.default.bool,redirectUri:c.default.string,autoLoad:c.default.bool,disableMobileRedirect:c.default.bool,isMobile:c.default.bool,fields:c.default.string,version:c.default.string,language:c.default.string,onClick:c.default.func,onFailure:c.default.func,render:c.default.func.isRequired},d.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e}(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,n){"use strict";function a(){}var r=n(7);e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]))},OK22:function(e,t,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("wx14"),s=n("q1tI"),c=n.n(s),l=n("nOHt"),u=n.n(l),d=n("/MKj"),f=n("ldY6"),p=n("vDqi"),b=n.n(p),m=n("NUse"),v=n("VTCk"),h=c.a.createElement;t.a=function(e){var t=e.WrappedComponent;return function(e){var n=Object(i.a)({},e),a=Object(d.b)(),c=Object(d.c)(f.l),l=Object(d.c)(f.b),p=Object(d.c)(f.q),y=Object(d.c)(f.e),O=Object(v.useMediaPredicate)("(max-width: 700px)");Object(s.useEffect)((function(){0===l.length&&(console.log("fetch articles"),a(Object(m.c)())),O&&a(Object(m.q)(!1))}),[]),Object(s.useEffect)((function(){c&&u.a.push("/")}),[c]);var g=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var a,o,i,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:"none",o={provider:t,access_token:n,email:a},e.next=4,b.a.post("/api/social-auth",o);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var o,i,s,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(Object(m.k)(!0)),o=t.email,e.next=5,g("facebook",t.accessToken,o);case 5:i=e.sent,s=i.data.token,c=i.data.username,l=i.data.provider,x(s,o,c,l),a(Object(m.k)(!1)),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),a(Object(m.k)(!1)),a(Object(m.i)(e.t0.message)),console.log(e.t0),w();case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){a(Object(m.m)()),a(Object(m.t)("")),a(Object(m.h)("")),a(Object(m.j)([])),a(Object(m.e)("")),a(Object(m.r)("")),a(Object(m.f)([])),a(Object(m.s)(-1))},x=function(e,t,n,r){null!==t&&void 0!==t&&t.length>0&&(a(Object(m.h)(t)),localStorage.setItem("email",t)),null!==n&&void 0!==n&&n.length>0&&(a(Object(m.t)(n)),localStorage.setItem("username",n)),null!==r&&void 0!==r&&r.length>0&&(a(Object(m.r)(r)),localStorage.setItem("provider",r)),a(Object(m.l)()),a(Object(m.e)(e)),localStorage.setItem("login","true")};Object(s.useEffect)((function(){c&&function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("api/profilesocial/?provider=".concat(p,"&email=").concat(y));case 3:void 0===(t=e.sent).error&&(n=t.data.bookmarks.split(","),a(Object(m.f)(n.filter((function(e){return""!==e})))),localStorage.setItem("bookmarks",t.data.bookmarks.trim()),o=t.data.finishedArticles.split(","),a(Object(m.j)(o.filter((function(e){return""!==e})))),localStorage.setItem("finishedArticles",t.data.finishedArticles.trim())),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[p,y,c]);var k=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var o,i,s,c,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(Object(m.k)(!0)),e.next=4,b.a.post("/api/get-github-access-token",{code:t.code});case 4:return o=e.sent,e.next=7,g("github",o.data);case 7:i=e.sent,s=i.data.token,c=i.data.email,l=i.data.provider,u=i.data.username,x(s,c,u,l),a(Object(m.k)(!1)),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),a(Object(m.k)(!1)),a(Object(m.i)(e.t0.message)),console.log(e.t0),w();case 22:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}();return h(t,Object(i.a)({},n,{responseFacebook:j,ResponseGithubOnSuccess:k,ResponseGithubOnFailure:function(e){return console.error(e)},SetLogin:x}))}}},QojX:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=(n("K9S6"),n("17x9")),u=n.n(l),d={type:u.a.string.isRequired,as:u.a.elementType},f=c.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,s=e.className,l=e.type,u=Object(r.a)(e,["as","className","type"]);return(c.a.createElement(o,Object(a.a)({},u,{ref:t,className:i()(s,l&&l+"-feedback")})))}));f.displayName="Feedback",f.propTypes=d,f.defaultProps={type:"valid"};var p=f,b=c.a.createContext({controlId:void 0}),m=n("vUet"),v=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,p=e.isStatic,v=e.as,h=void 0===v?"input":v,y=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(s.useContext)(b),g=O.controlId,j=O.custom?[l,"custom-control-input"]:[o,"form-check-input"],w=j[0],x=j[1];return o=Object(m.b)(w,x),c.a.createElement(h,Object(a.a)({},y,{ref:t,id:n||g,className:i()(u,o,d&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var h=v,y=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(b),p=f.controlId,v=f.custom?[o,"custom-control-label"]:[n,"form-check-label"],h=v[0],y=v[1];return n=Object(m.b)(h,y),c.a.createElement("label",Object(a.a)({},d,{ref:t,htmlFor:u||p,className:i()(l,n)}))}));y.displayName="FormCheckLabel";var O=y,g=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.inline,d=e.disabled,f=e.isValid,v=e.isInvalid,y=e.feedback,g=e.className,j=e.style,w=e.title,x=e.type,k=e.label,P=e.children,N=e.custom,E=e.as,I=void 0===E?"input":E,_=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),R="switch"===x||N,S=R?[l,"custom-control"]:[o,"form-check"],C=S[0],F=S[1];o=Object(m.b)(C,F);var T=Object(s.useContext)(b).controlId,L=Object(s.useMemo)((function(){return{controlId:n||T,custom:R}}),[T,R,n]),M=null!=k&&!1!==k&&!P,A=c.a.createElement(h,Object(a.a)({},_,{type:"switch"===x?"checkbox":x,ref:t,isValid:f,isInvalid:v,isStatic:!M,disabled:d,as:I}));return c.a.createElement(b.Provider,{value:L},c.a.createElement("div",{style:j,className:i()(g,o,R&&"custom-"+x,u&&o+"-inline")},P||c.a.createElement(c.a.Fragment,null,A,M&&c.a.createElement(O,{title:w},k),(f||v)&&c.a.createElement(p,{type:f?"valid":"invalid"},y))))}));g.displayName="FormCheck",g.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},g.Input=h,g.Label=O;var j=g,w=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,p=e.lang,v=e.as,h=void 0===v?"input":v,y=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(s.useContext)(b),g=O.controlId,j=O.custom?[l,"custom-file-input"]:[o,"form-control-file"],w=j[0],x=j[1];return o=Object(m.b)(w,x),c.a.createElement(h,Object(a.a)({},y,{ref:t,id:n||g,type:"file",lang:p,className:i()(u,o,d&&"is-valid",f&&"is-invalid")}))}));w.displayName="FormFileInput";var x=w,k=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(b),p=f.controlId,v=f.custom?[o,"custom-file-label"]:[n,"form-file-label"],h=v[0],y=v[1];return n=Object(m.b)(h,y),c.a.createElement("label",Object(a.a)({},d,{ref:t,htmlFor:u||p,className:i()(l,n),"data-browse":d["data-browse"]}))}));k.displayName="FormFileLabel";var P=k,N=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,u=e.disabled,d=e.isValid,f=e.isInvalid,v=e.feedback,h=e.className,y=e.style,O=e.label,g=e.children,j=e.custom,w=e.lang,k=e["data-browse"],N=e.as,E=void 0===N?"div":N,I=e.inputAs,_=void 0===I?"input":I,R=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=j?[l,"custom"]:[o,"form-file"],C=S[0],F=S[1];o=Object(m.b)(C,F);var T=Object(s.useContext)(b).controlId,L=Object(s.useMemo)((function(){return{controlId:n||T,custom:j}}),[T,j,n]),M=null!=O&&!1!==O&&!g,A=c.a.createElement(x,Object(a.a)({},R,{ref:t,isValid:d,isInvalid:f,disabled:u,as:_,lang:w}));return c.a.createElement(b.Provider,{value:L},c.a.createElement(E,{style:y,className:i()(h,o,j&&"custom-file")},g||c.a.createElement(c.a.Fragment,null,j?c.a.createElement(c.a.Fragment,null,A,M&&c.a.createElement(P,{"data-browse":k},O)):c.a.createElement(c.a.Fragment,null,M&&c.a.createElement(P,null,O),A),(d||f)&&c.a.createElement(p,{type:d?"valid":"invalid"},v))))}));N.displayName="FormFile",N.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},N.Input=x,N.Label=P;var E=N,I=(n("2W6z"),c.a.forwardRef((function(e,t){var n,o,l=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,p=e.id,v=e.className,h=e.isValid,y=e.isInvalid,O=e.plaintext,g=e.readOnly,j=e.custom,w=e.as,x=void 0===w?"input":w,k=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),P=Object(s.useContext)(b).controlId,N=j?[u,"custom"]:[l,"form-control"],E=N[0],I=N[1];if(l=Object(m.b)(E,I),O)(o={})[l+"-plaintext"]=!0,n=o;else if("file"===d){var _;(_={})[l+"-file"]=!0,n=_}else if("range"===d){var R;(R={})[l+"-range"]=!0,n=R}else if("select"===x&&j){var S;(S={})[l+"-select"]=!0,S[l+"-select-"+f]=f,n=S}else{var C;(C={})[l]=!0,C[l+"-"+f]=f,n=C}return c.a.createElement(x,Object(a.a)({},k,{type:d,ref:t,readOnly:g,id:p||P,className:i()(v,n,h&&"is-valid",y&&"is-invalid")}))})));I.displayName="FormControl",I.Feedback=p;var _=I,R=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);n=Object(m.b)(n,"form-group");var v=Object(s.useMemo)((function(){return{controlId:u}}),[u]);return(c.a.createElement(b.Provider,{value:v},c.a.createElement(f,Object(a.a)({},p,{ref:t,className:i()(o,n)}),l)))}));R.displayName="FormGroup";var S=R,C=["xl","lg","md","sm","xs"],F=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"div":s,u=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(m.b)(n,"col"),f=[],p=[];return C.forEach((function(e){var t,n,a,r=u[e];if(delete u[e],null!=r&&"object"===typeof r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+d+i:""+d+i+"-"+t),null!=a&&p.push("order"+i+"-"+a),null!=n&&p.push("offset"+i+"-"+n)})),f.length||f.push(d),c.a.createElement(l,Object(a.a)({},u,{ref:t,className:i.a.apply(void 0,[o].concat(f,p))}))}));F.displayName="Col";var T=F,L=c.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"label":n,l=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,p=e.htmlFor,v=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(s.useContext)(b).controlId;l=Object(m.b)(l,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+"-"+u);var O=i()(f,l,d&&"sr-only",u&&y);return p=p||h,u?c.a.createElement(T,Object(a.a)({as:"label",className:O,htmlFor:p},v)):c.a.createElement(o,Object(a.a)({ref:t,className:O,htmlFor:p},v))}));L.displayName="FormLabel",L.defaultProps={column:!1,srOnly:!1};var M=L,A=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"small":s,u=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return n=Object(m.b)(n,"form-text"),c.a.createElement(l,Object(a.a)({},d,{ref:t,className:i()(o,n,u&&"text-muted")}))}));A.displayName="FormText";var q=A,V=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(a.a)({},e,{ref:t,type:"switch"}))}));V.displayName="Switch",V.Input=j.Input,V.Label=j.Label;var B=V,U=n("YdCC"),D=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.inline,s=e.className,l=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return n=Object(m.b)(n,"form"),c.a.createElement(d,Object(a.a)({},f,{ref:t,className:i()(s,l&&"was-validated",o&&n+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=Object(U.a)("form-row"),D.Group=S,D.Control=_,D.Check=j,D.File=E,D.Switch=B,D.Label=M,D.Text=q;t.a=D},SkY1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=[];return e.data.forEach((function(e){t.push({"@context":"http://schema.org","@type":"Article",name:e.title,mainEntityOfPage:{"@type":"WebPage","@id":e.url},author:{"@type":"Person",name:e.name},datePublished:e.time,dateModified:e.time,url:e.url,image:e.image,publisher:{"@type":"Organization",name:e.name,logo:{"@type":"ImageObject",url:"https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png"}},headline:e.title})})),console.log(t),t}},Stkp:function(e,t,n){},"T/rR":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,s=e.animation,u=e.size,d=e.children,f=e.as,p=void 0===f?"div":f,b=e.className,m=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),v=(n=Object(l.b)(n,"spinner"))+"-"+s;return c.a.createElement(p,Object(a.a)({ref:t},m,{className:i()(b,v,u&&v+"-"+u,o&&"text-"+o)}),d)}));u.displayName="Spinner",t.a=u},Txfo:function(e,t,n){},VTCk:function(e,t,n){var a=n("q1tI");function r(e){return"function"!==typeof matchMedia?null:matchMedia(e)}function o(e){return e?{media:e.media,matches:e.matches}:null}function i(e){var t=a.useState((function(){return o(r(e))})),n=t[1],i=a.useCallback((function(e){return n(o(e))}),[n]);return a.useEffect((function(){var t=r(e);return i(t),t.addListener(i),function(){return t.removeListener(i)}}),[i,e]),t[0]}e.exports={useMedia:i,useMediaPredicate:function(e){var t=i(e);return t&&t.matches||!1}}},mlGW:function(e,t,n){var a;e.exports=(a=n("q1tI"),function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.toParams=function(e){return e.replace(/^\??\//,"").split("&").reduce((function(e,t){var n=t.split("="),r=a(n,2),o=r[0],i=r[1];return e[o]=i,e}),{})},t.toQuery=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=Object.keys(e);return n.reduce((function(a,r,o){var i=""+a+r+"="+e[r];return o<n.length-1&&(i+=t),i}),"")}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(3));t.default=a.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(4),s=a(i),c=a(n(5)),l=a(n(10)),u=n(0),d=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.onBtnClick=function(){var e=a.props,t=e.clientId,n=e.scope,r=e.redirectUri,o=(0,u.toQuery)({client_id:t,scope:n,redirect_uri:r}),i=a.popup=l.default.open("github-oauth-authorize","https://github.com/login/oauth/authorize?"+o,{height:1e3,width:600});a.onRequest(),i.then((function(e){return a.onSuccess(e)}),(function(e){return a.onFailure(e)}))},a.onRequest=function(){a.props.onRequest()},a.onSuccess=function(e){if(!e.code)return a.onFailure(new Error("'code' not found"));a.props.onSuccess(e)},a.onFailure=function(e){a.props.onFailure(e)},r(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.buttonText,a=e.children,r={onClick:this.onBtnClick};return t&&(r.className=t),s.default.createElement("button",r,a||n)}}]),t}(i.Component);d.propTypes={buttonText:c.default.string,children:c.default.node,className:c.default.string,clientId:c.default.string.isRequired,onRequest:c.default.func,onSuccess:c.default.func,onFailure:c.default.func,redirectUri:c.default.string.isRequired,scope:c.default.string},d.defaultProps={buttonText:"Sign in with GitHub",scope:"user:email",onRequest:function(){},onSuccess:function(){},onFailure:function(){}},t.default=d},function(e,t){e.exports=a},function(e,t,n){e.exports=n(6)()},function(e,t,n){"use strict";var a=n(7),r=n(8),o=n(9);e.exports=function(){function e(e,t,n,a,i,s){s!==o&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";var a=function(e){};e.exports=function(e,t,n,r,o,i,s,c){if(a(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,c],d=0;(l=new Error(t.replace(/%s/g,(function(){return u[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=function(){function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.id=t,this.url=n,this.options=a}return a(e,[{key:"open",value:function(){var e=this.url,t=this.id,n=this.options;this.window=window.open(e,t,(0,r.toQuery)(n,","))}},{key:"close",value:function(){this.cancel(),this.window.close()}},{key:"poll",value:function(){var e=this;this.promise=new Promise((function(t,n){e._iid=window.setInterval((function(){try{var a=e.window;if(!a||!1!==a.closed)return e.close(),void n(new Error("The popup was closed"));if(a.location.href===e.url||"blank"===a.location.pathname)return;var o=(0,r.toParams)(a.location.search.replace(/^\?/,""));t(o),e.close()}catch(e){}}),500)}))}},{key:"cancel",value:function(){this._iid&&(window.clearInterval(this._iid),this._iid=null)}},{key:"then",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}},{key:"catch",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}}],[{key:"open",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=new(Function.prototype.bind.apply(this,[null].concat(t)));return a.open(),a.poll(),a}}]),e}();t.default=o}]))},"v+B1":function(e,t,n){},xrSH:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("DOl8"),i=n("wx14"),s=n("zLVn"),c=n("17x9"),l=n.n(c),u=n("97+O"),d={id:l.a.any,href:l.a.string,onClick:l.a.func,title:l.a.node.isRequired,disabled:l.a.bool,menuRole:l.a.string,renderMenuOnMount:l.a.bool,rootCloseEvent:l.a.string,bsPrefix:l.a.string,variant:l.a.string,size:l.a.string},f=r.a.forwardRef((function(e,t){var n=e.title,a=e.children,o=e.bsPrefix,c=e.rootCloseEvent,l=e.variant,d=e.size,f=e.menuRole,p=e.renderMenuOnMount,b=e.disabled,m=e.href,v=e.id,h=Object(s.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id"]);return(r.a.createElement(u.a,Object(i.a)({ref:t},h),r.a.createElement(u.a.Toggle,{id:v,href:m,size:d,variant:l,disabled:b,childBsPrefix:o},n),r.a.createElement(u.a.Menu,{role:f,renderOnMount:p,rootCloseEvent:c},a)))}));f.displayName="DropdownButton",f.propTypes=d;var p=f,b=n("/MKj"),m=n("NUse"),v=n("ldY6"),h=n("nOHt"),y=n.n(h),O=r.a.createElement,g=function(){var e=Object(b.b)(),t=Object(h.useRouter)(),n=Object(b.c)(v.d);return O(p,{className:"article-dropdown",id:"dropdown-basic-button",title:-1==n?"All articles":0==n?"Challenges":1==n?"Programming":void 0,onSelect:function(n){"-1"!=n?(console.log(n),e(Object(m.g)(n)),"/"!==t.pathname&&y.a.push("/")):e(Object(m.a)())}},O(u.a.Item,{eventKey:"-1"},"All"),O(u.a.Item,{eventKey:"0"},"100DaysOfCode"),O(u.a.Item,{eventKey:"1"},"Programming"))},j=(n("v+B1"),n("VTCk")),w=r.a.createElement;t.a=function(){var e=Object(b.b)(),t=Object(b.c)(v.r),n=(Object(b.c)(v.l),Object(j.useMediaPredicate)("(max-width: 700px)"));Object(a.useEffect)((function(){n&&e(Object(m.q)(!1))}),[]);var r=function(){!0===t?(console.log("Hide Planner"),e(Object(m.q)(!1))):(console.log("Show Planner"),e(Object(m.q)(!0)))};return w("div",{className:"sidebar",style:{width:1==t?"23%":"2%"}},w("div",{className:"sidebar-grid-box"},1==t&&w(a.Fragment,null,w("div",{className:"sidebar-title"},"Let's Create Your Learning Plan",w("div",{className:"sidebar-subtitle"},"Choose the topics about Software development, Testing, DevOps, or 100DaysOfCode to build the personal learning plan")),w("div",{className:"sidebar-dropdown"},w("div",{className:"sidebar-dropdown-content"},w(g,null))),w("div",{className:"sidebar-search"},w("div",{className:"sidebar-search-content"},w(o.a,null)))),1==t?w("div",{className:"sidebar-remove-left"},w("span",{className:"btn-o",onClick:r},w("a",{href:"#"},w("img",{src:"https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-left.png",alt:"Hide",title:"Hide"})))):w("div",{className:"sidebar-remove-right"},w("span",{className:"btn-o",onClick:r},w("a",{href:"#"},w("img",{src:"https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-right.png",alt:"Show",title:"Show"}))))))}}}]);