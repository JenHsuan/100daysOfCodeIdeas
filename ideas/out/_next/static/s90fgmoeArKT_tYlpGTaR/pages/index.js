(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"1c7f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=r(t("q1tI")),n=r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,r=e.onClick,i=t||"break";return l.default.createElement("li",{className:i},l.default.createElement("a",{className:n,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};i.propTypes={breakLabel:n.default.oneOfType([n.default.string,n.default.node]),breakClassName:n.default.string,breakLinkClassName:n.default.string,onClick:n.default.func.isRequired},a.default=i},"3LHp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=r(t("q1tI")),n=r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,r=e.href,i=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",i=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),l.default.createElement("li",{className:a},l.default.createElement("a",{onClick:n,role:"button",className:t,href:r,tabIndex:"0","aria-label":i,"aria-current":s,onKeyPress:n},e.page))};i.propTypes={onClick:n.default.func.isRequired,selected:n.default.bool.isRequired,pageClassName:n.default.string,pageLinkClassName:n.default.string,activeClassName:n.default.string,activeLinkClassName:n.default.string,extraAriaContext:n.default.string,href:n.default.string,ariaLabel:n.default.string,page:n.default.number.isRequired},a.default=i},QeBL:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("o0o1"),i=t.n(r),s=t("HaE+"),o=t("/MKj"),u=t("werx"),c=t.n(u),d=t("ldY6"),f=t("NUse"),p=t("VeD8"),g=t("pQ8y"),b=t("T/rR"),m=t("kPp+"),h=(t("q4sD"),t("b2pr")),v=t("vDqi"),C=t.n(v),k=t("nOHt"),N=t("DOl8"),y=t("VTCk"),P=n.a.createElement,L=function(){var e=Object(o.b)(),a=(Object(k.useRouter)(),Object(o.c)(d.j),Object(o.c)(d.b)),t=Object(o.c)(d.h),n=Object(o.c)(d.o),r=Object(o.c)(d.p),u=Object(o.c)(d.n),v=Object(o.c)(d.m),L=Object(o.c)(d.r),x=Object(y.useMediaPredicate)("(max-width: 800px)"),O=Object(o.c)(d.l);Object(l.useEffect)((function(){j(),0===a.length&&(console.log("fetch articles"),e(Object(f.c)()));var t=localStorage.getItem("bookmarks");if(null!==t){var l=t.split(",");e(Object(f.f)(l.filter((function(e){return""!==e}))))}var n=localStorage.getItem("filterArticles");if(null!==n){var r=n.split(",");e(Object(f.j)(r.filter((function(e){return""!==e}))))}}),[]);Object(l.useEffect)((function(){console.log("articles updated");var t=a.slice(v,v+r);e(Object(f.p)(t));var l=Math.ceil(a.length/r);e(Object(f.o)(l))}),[a]),Object(l.useEffect)((function(){console.log("filtered articles updated");var l=0===t.length?Math.ceil(a.length/r):Math.ceil(t.length/r);e(Object(f.o)(l)),D()}),[t]),Object(l.useEffect)((function(){var l=0===t.length?Math.ceil(a.length/r):Math.ceil(t.length/r);e(Object(f.o)(l)),D(),window.scrollTo(0,0)}),[v]);var j=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("api/renew-token/");case 3:e.sent,e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),w(),localStorage.removeItem("login"),localStorage.removeItem("username"),localStorage.removeItem("email"),localStorage.removeItem("finishedArticles"),localStorage.removeItem("bookmarks"),localStorage.removeItem("token"),localStorage.removeItem("provider");case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),w=function(){e(Object(f.m)()),e(Object(f.t)("")),e(Object(f.s)(-1)),e(Object(f.h)("")),e(Object(f.j)([])),e(Object(f.e)("")),e(Object(f.r)("")),e(Object(f.f)([]))},D=function(){var l=0===t.length?a.slice(v,v+r):t.slice(v,v+r);e(Object(f.p)(l))};return P(l.Fragment,null,P("div",{className:"".concat(!0===L?"articles-hide-siderbar-head":"articles-hide-siderbar-head articles-hide-siderbar-head-remove-left")},P("div",{className:"title"},"Learning materials (".concat(0===t.length?a.length:t.length,")")),O?P("div",{className:"subtitle"},"Click the details button to check the article."):P("div",{className:"subtitle"},P("a",{href:"/signin"},"Login "),"to add articles or skills in your learning plan or open them directly."),x&&P(N.a,null)),P("div",{className:"".concat(!0!==L?"articles-hide-siderbar":"articles-hide-siderbar articles-hide-siderbar-remove-left")},P("div",{className:"articles-row row"},0===a.length?P("div",{className:"articles-spinner"},P(b.a,{animation:"border",role:"status"},P("span",{className:"sr-only"},"Loading..."))):n.map((function(e){return P(p.a,null,P(g.a,{key:e.id,timeout:500,classNames:"item"},P(m.a,{key:e.id,article:e})))}))),n.length>0&&P("div",{className:"article-pagination"},P(c.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:u,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(a){j(),e(Object(f.n)(a.selected*r))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})),n.length>0&&P(h.a,null)))},x=t("9idV"),O=t("xrSH"),j=t("DjIZ"),w=(t("PQpL"),t("v+B1"),t("QvYV")),D=t("i30r"),E=n.a.createElement;a.default=function(){return E(w.a,null,E(D.a,{title:"ALayman Daily Learning",keywords:"Software Development, Tesing, DveOps, SRE, Inteviews, Data Sciences",url:"https://daily-learning.herokuapp.com/",description:"Daily learning provides articles, challenges, or videos to people who are also self-learner for programming."}),E(o.a,{store:x.a},E(j.a,null),E("div",{className:"mainpage-grid-box"},E(O.a,null),E(L,null))))}},kzof:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),n=t("q1tI"),r=u(n),i=u(t("17x9")),s=u(t("3LHp")),o=u(t("1c7f"));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,l=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<l-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var l=t.state.selected;t.handlePageSelected(l<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,l=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,s=a.breakLabel,u=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(n<=l)for(var f=0;f<n;f++)e.push(t.getPageElement(f));else{var p=l/2,g=l-p;d>n-l/2?p=l-(g=n-d):d<l/2&&(g=l-(p=d));var b=void 0,m=void 0,h=void 0,v=function(e){return t.getPageElement(e)};for(b=0;b<n;b++)(m=b+1)<=i?e.push(v(b)):m>n-i?e.push(v(b)):b>=d-p&&b<=d+g?e.push(v(b)):s&&e[e.length-1]!==h&&(h=r.default.createElement(o.default,{key:b,breakLabel:s,breakClassName:u,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,b)}),e.push(h))}return e};var l=void 0;return l=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:l},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),l(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,l=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),l&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,l=e+a.pageRangeDisplayed;return l>=t?t-1:l}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,l=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<l)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,l=t.pageClassName,n=t.pageLinkClassName,i=t.activeClassName,o=t.activeLinkClassName,u=t.extraAriaContext;return r.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:l,pageLinkClassName:n,activeClassName:i,activeLinkClassName:o,extraAriaContext:u,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,l=e.nextClassName,n=e.pageCount,i=e.containerClassName,s=e.previousLinkClassName,o=e.previousLabel,u=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,f=t+(0===d?" "+a:""),p=l+(d===n-1?" "+a:""),g=0===d?"true":"false",b=d===n-1?"true":"false";return r.default.createElement("ul",{className:i},r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":g},o)),this.pagination(),r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":b},c)))}}]),a}(n.Component);c.propTypes={pageCount:i.default.number.isRequired,pageRangeDisplayed:i.default.number.isRequired,marginPagesDisplayed:i.default.number.isRequired,previousLabel:i.default.node,nextLabel:i.default.node,breakLabel:i.default.oneOfType([i.default.string,i.default.node]),hrefBuilder:i.default.func,onPageChange:i.default.func,initialPage:i.default.number,forcePage:i.default.number,disableInitialCallback:i.default.bool,containerClassName:i.default.string,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,previousClassName:i.default.string,nextClassName:i.default.string,previousLinkClassName:i.default.string,nextLinkClassName:i.default.string,disabledClassName:i.default.string,breakClassName:i.default.string,breakLinkClassName:i.default.string,extraAriaContext:i.default.string,ariaLabelBuilder:i.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},werx:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,n=t("kzof"),r=(l=n)&&l.__esModule?l:{default:l};a.default=r.default}},[["/EDR",0,2,3,1,4,7,5]]]);