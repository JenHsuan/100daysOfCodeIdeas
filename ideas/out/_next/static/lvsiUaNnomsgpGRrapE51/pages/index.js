(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"1c7f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(t("q1tI")),r=l(t("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,l=e.onClick,s=t||"break";return n.default.createElement("li",{className:s},n.default.createElement("a",{className:r,onClick:l,role:"button",tabIndex:"0",onKeyPress:l},a))};s.propTypes={breakLabel:r.default.oneOfType([r.default.string,r.default.node]),breakClassName:r.default.string,breakLinkClassName:r.default.string,onClick:r.default.func.isRequired},a.default=s},"3LHp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(t("q1tI")),r=l(t("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.onClick,l=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:r,role:"button",className:t,href:l,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:r},e.page))};s.propTypes={onClick:r.default.func.isRequired,selected:r.default.bool.isRequired,pageClassName:r.default.string,pageLinkClassName:r.default.string,activeClassName:r.default.string,activeLinkClassName:r.default.string,extraAriaContext:r.default.string,href:r.default.string,ariaLabel:r.default.string,page:r.default.number.isRequired},a.default=s},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"getStaticProp",(function(){return T}));var n=t("o0o1"),r=t.n(n),l=t("HaE+"),s=t("q1tI"),i=t.n(s),u=t("/MKj"),o=t("werx"),c=t.n(o),d=t("ldY6"),p=t("NUse"),f=t("VeD8"),g=t("pQ8y"),b=t("T/rR"),h=t("kPp+"),m=(t("q4sD"),t("b2pr")),v=t("nOHt"),C=t("DOl8"),k=t("VTCk"),N=t("ycUj"),y=t("IpVZ"),P=i.a.createElement,L=Object(N.a)({WrappedComponent:function(){var e=Object(u.b)(),a=(Object(v.useRouter)(),Object(u.c)(d.j),Object(u.c)(d.b)),t=Object(u.c)(d.h),n=Object(u.c)(d.o),r=Object(u.c)(d.p),l=Object(u.c)(d.n),i=Object(u.c)(d.m),o=Object(u.c)(d.r),N=Object(k.useMediaPredicate)("(max-width: 800px)"),L=Object(u.c)(d.l);Object(s.useEffect)((function(){console.log("articles updated");var t=a.slice(i,i+r);e(Object(p.p)(t));var n=Math.ceil(a.length/r);e(Object(p.o)(n))}),[a]),Object(s.useEffect)((function(){console.log("filtered articles updated");var n=0===t.length?Math.ceil(a.length/r):Math.ceil(t.length/r);e(Object(p.o)(n)),x()}),[t]),Object(s.useEffect)((function(){var n=0===t.length?Math.ceil(a.length/r):Math.ceil(t.length/r);e(Object(p.o)(n)),x(),window.scrollTo(0,0)}),[i]);var x=function(){var n=0===t.length?a.slice(i,i+r):t.slice(i,i+r);e(Object(p.p)(n))};return P(s.Fragment,null,P("div",{className:"".concat(!0===o?"articles-hide-siderbar-head":"articles-hide-siderbar-head articles-hide-siderbar-head-remove-left")},P("div",{className:"title"},"Learning materials (".concat(0===t.length?a.length:t.length,")")),L?P("div",{className:"subtitle"},"Click the details button to check the article."):P("div",{className:"subtitle"},P("a",{href:"/signin"},"Login "),"to add articles or skills in your learning plan or open them directly."),N&&P(C.a,null)),P("div",{className:"".concat(!0!==o?"articles-hide-siderbar":"articles-hide-siderbar articles-hide-siderbar-remove-left")},P("div",{className:"articles-row row"},0===a.length?P("div",{className:"articles-spinner"},P(b.a,{animation:"border",role:"status"},P("span",{className:"sr-only"},"Loading..."))):n.map((function(e){return P(f.a,null,P(g.a,{key:e.id,timeout:500,classNames:"item"},P(h.a,{key:e.id,article:e})))}))),n.length>0&&P("div",{className:"article-pagination"},P(c.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:l,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(a){Object(y.a)((function(){})),e(Object(p.n)(a.selected*r))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})),n.length>0&&P(m.a,null)))}}),x=t("9idV"),O=t("xrSH"),j=t("DjIZ"),w=(t("PQpL"),t("v+B1"),t("QvYV")),D=t("i30r"),E=t("vDqi"),_=t.n(E),R=t("SkY1");function B(){return M.apply(this,arguments)}function M(){return(M=Object(l.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,e.next=4,_.a.get("https://daily-learning.herokuapp.com/api/articles");case 4:t=e.sent,a=JSON.stringify(Object(R.a)(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.abrupt("return",{props:{jsonLdData:a}});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var S=i.a.createElement;function T(){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.default=function(e){var a=e.jsonLdData;return S(w.a,null,S(D.a,{title:"ALayman Daily Learning",keywords:"Software Development, Tesing, DveOps, SRE, Inteviews, Data Sciences",url:"https://daily-learning.herokuapp.com/",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.",jsonLd:a}),S(u.a,{store:x.a},S(j.a,null),S("div",{className:"mainpage-grid-box"},S(O.a,null),S(L,null))))}},kzof:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),r=t("q1tI"),l=o(r),s=o(t("17x9")),i=o(t("3LHp")),u=o(t("1c7f"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var f=n/2,g=n-f;d>r-n/2?f=n-(g=r-d):d<n/2&&(g=n-(f=d));var b=void 0,h=void 0,m=void 0,v=function(e){return t.getPageElement(e)};for(b=0;b<r;b++)(h=b+1)<=s?e.push(v(b)):h>r-s?e.push(v(b)):b>=d-f&&b<=d+g?e.push(v(b)):i&&e[e.length-1]!==m&&(m=l.default.createElement(u.default,{key:b,breakLabel:i,breakClassName:o,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,b)}),e.push(m))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,s=t.activeClassName,u=t.activeLinkClassName,o=t.extraAriaContext;return l.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:u,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,r=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,u=e.previousLabel,o=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,p=t+(0===d?" "+a:""),f=n+(d===r-1?" "+a:""),g=0===d?"true":"false",b=d===r-1?"true":"false";return l.default.createElement("ul",{className:s},l.default.createElement("li",{className:p},l.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":g},u)),this.pagination(),l.default.createElement("li",{className:f},l.default.createElement("a",{onClick:this.handleNextPage,className:o,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":b},c)))}}]),a}(r.Component);c.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},werx:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,r=t("kzof"),l=(n=r)&&n.__esModule?n:{default:n};a.default=l.default}},[["/EDR",0,2,4,1,3,7,5]]]);