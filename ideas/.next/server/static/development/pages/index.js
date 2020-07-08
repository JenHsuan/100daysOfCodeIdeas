module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/Article.tsx":
/*!************************************!*\
  !*** ./src/components/Article.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ArticleModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArticleModal */ "./src/components/ArticleModal.tsx");
/* harmony import */ var _css_article_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././css/article.css */ "./src/css/article.css");
/* harmony import */ var _css_article_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_article_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_card_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././css/card.css */ "./src/css/card.css");
/* harmony import */ var _css_card_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_card_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Article = ({
  article
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isBookmarked,
    1: setBookmark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isChecked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_6__["selectLoginState"]);
  const bookmarks = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_6__["selectBookmarksState"]);
  const userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_6__["selectUserIdState"]);
  const provider = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_6__["selectProviderState"]);
  const email = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_6__["selectEmailState"]);
  const finishedArticles = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_6__["selectFinishedArticlessState"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (bookmarks.find(bookmark => bookmark == article.id) !== undefined) {
      console.log('bookmark');
      setBookmark(true);
    }
  }, [bookmarks]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (finishedArticles.find(finishedArticle => finishedArticle === article.id) !== undefined) {
      console.log('finishedArticle');
      setChecked(true);
    }
  }, [finishedArticles]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleCheckingTrue = async () => {
    let finishedArticlesString = localStorage.getItem("finishedArticles");
    let finishedArticlesList;
    let localfinishedArticles;

    if (finishedArticlesString === '') {
      localfinishedArticles = `${article.id}`;
      finishedArticlesList = [article.id];
    } else {
      finishedArticlesList = finishedArticlesString.split(',');
      finishedArticlesList.indexOf(article.id) === -1 ? finishedArticlesList.push(article.id) : console.log("This item already exists");
    } //set bookmarks to local state


    setChecked(true);
    let newfinishedArticlesString = finishedArticlesList.join(); //set bookmarks to localStorage

    localStorage.setItem("finishedArticles", newfinishedArticlesString); //set bookmarks to global state

    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_7__["setFinishedArticles"])(finishedArticlesList)); //update server

    if (provider === 'normal') {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.put(`api/profile/?finishedArticles=${newfinishedArticlesString}&reader_id=${userId}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.put(`api/profilesocial/?finishedArticles=${newfinishedArticlesString}&email=${email}&provider=${provider}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCheckingFalse = async () => {
    let finishedArticlesString = localStorage.getItem("finishedArticles");

    if (isChecked) {
      if (finishedArticlesString !== null) {
        let finishedArticlesList = finishedArticlesString.split(',');
        finishedArticlesList = finishedArticlesList.filter(finishedArticle => Number(finishedArticle) !== article.id);
        let newfinishedArticlesString = finishedArticlesList.join(); //set bookmarks to localStorage

        localStorage.setItem("finishedArticles", newfinishedArticlesString); //set bookmarks to global state

        disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_7__["setFinishedArticles"])(finishedArticlesList)); //update server

        if (provider === 'normal') {
          try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.put(`api/profile/?finishedArticles=${newfinishedArticlesString}&reader_id=${userId}`);
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.put(`api/profilesocial/?finishedArticles=${newfinishedArticlesString}&email=${email}&provider=${provider}`);
          } catch (error) {
            console.log(error);
          }
        }
      } //set bookmarks to local state


      setChecked(false);
    }
  };

  const setBookmarksState = async bookmarksList => {
    let newbookmarksString = bookmarksList.join(); //set bookmarks to localStorage

    localStorage.setItem("bookmarks", newbookmarksString); //set bookmarks to global state

    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_7__["setBookmarks"])(bookmarksList)); //update server

    if (provider === 'normal') {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.put(`api/profile/?bookmarks=${newbookmarksString}&reader_id=${userId}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.put(`api/profilesocial/?bookmarks=${newbookmarksString}&email=${email}&provider=${localStorage.getItem("provider")}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onBookmarkClick = async () => {
    let bookmarksString = localStorage.getItem("bookmarks");
    let localBookmarks;
    let bookmarksList;

    if (isBookmarked) {
      if (bookmarksString !== null) {
        bookmarksList = bookmarksString.split(',');
        bookmarksList = bookmarksList.filter(bookmark => Number(bookmark) !== article.id);
      } //set bookmarks to local state


      setBookmark(false);
      await setBookmarksState(bookmarksList);
    } else {
      if (bookmarksString === '') {
        console.log(999);
        localBookmarks = `${article.id}`;
        bookmarksList = [article.id];
      } else {
        bookmarksList = bookmarksString.split(',');
        bookmarksList.indexOf(article.id) === -1 ? bookmarksList.push(article.id) : console.log("This item already exists");
      } //set bookmarks to local state


      setBookmark(true);
      await setBookmarksState(bookmarksList); //redirect

      if (router.pathname !== 'bookmarks') {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(`/bookmarks`);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, []);
  return __jsx("div", {
    className: "articles-row"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "article-card",
    border: "light"
  }, isLogin && router.pathname !== '/bookmarks' && __jsx("div", {
    className: "article-bookmark"
  }, __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      onBookmarkClick();
      return false;
    }
  }, isBookmarked ? __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/bookmark-yellow.png",
    alt: "Add this article to the bookmark",
    title: "Add this article to the bookmark"
  }) : __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/bookmark-white.png",
    alt: "Add this article to the bookmark",
    title: "Add this article to the bookmark"
  })))), router.pathname === '/bookmarks' && __jsx("div", {
    className: "article-checked"
  }, __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: "#",
    onClick: () => {
      handleCheckingFalse();
      return false;
    }
  }, isChecked ? __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/check.png",
    alt: "Marked as unfinished",
    title: "Marked as unfinished"
  }) : __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/uncheck.png",
    alt: "Marked as finished",
    title: "Marked as finished"
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    className: "article-card-body"
  }, __jsx("img", {
    className: "article-card-img",
    src: `${article.image}`,
    alt: article.title,
    title: article.title
  }), __jsx("div", {
    className: "title"
  }, article.title), __jsx("div", {
    className: "date"
  }, article.name), __jsx("div", {
    className: "date"
  }, __jsx("span", {
    className: "date"
  }, article.time), __jsx("span", null, " . "), __jsx("span", {
    className: "readtime"
  }, article.readtime)), __jsx("button", {
    className: "article-btn",
    onClick: handleShow
  }, "Details"))), __jsx(_components_ArticleModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: show,
    handleClose: handleClose,
    article: article,
    handleOpen: handleCheckingTrue
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./src/components/ArticleDropdown.tsx":
/*!********************************************!*\
  !*** ./src/components/ArticleDropdown.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ArticleDropdown = () => {
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const category = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__["selectCategoryState"]);

  const handleSelect = e => {
    if (e != "-1") {
      console.log(e);
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setCategory"])(e));

      if (router.pathname !== '/') {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/`);
      }
    } else {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["clearCategory"])());
    }
  };

  const getTitle = () => {
    if (category == -1) {
      return 'All articles';
    } else if (category == 0) {
      return 'Challenges';
    } else if (category == 1) {
      return 'Programming';
    }
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
    className: "article-dropdown",
    id: "dropdown-basic-button",
    title: getTitle(),
    onSelect: handleSelect
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    eventKey: "-1"
  }, "All"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    eventKey: "0"
  }, "100DaysOfCode"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    eventKey: "1"
  }, "Programming"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleDropdown);

/***/ }),

/***/ "./src/components/ArticleList.tsx":
/*!****************************************!*\
  !*** ./src/components/ArticleList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "react-paginate");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Article */ "./src/components/Article.tsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ArticleSearchBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArticleSearchBar */ "./src/components/ArticleSearchBar.tsx");
/* harmony import */ var react_media_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-media-hook */ "react-media-hook");
/* harmony import */ var react_media_hook__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_media_hook__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper.tsx");
/* harmony import */ var _components_account__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/account */ "./src/components/account.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const ArticleList = () => {
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectIsLoadingState"]);
  const articles = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectArticlesState"]);
  const filteredArticles = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectFilteredArticlesState"]);
  const partialArticles = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectPartialArticlesState"]);
  const perpage = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectPerpageState"]);
  const pageCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectPageCountState"]);
  const offset = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectOffsetState"]);
  const showPlanner = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectShowPlannerState"]);
  const smallerThan800 = Object(react_media_hook__WEBPACK_IMPORTED_MODULE_12__["useMediaPredicate"])("(max-width: 800px)");
  const isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectLoginState"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('articles updated');
    const partialData = articles.slice(offset, offset + perpage);
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__["setPartialArticles"])(partialData));
    var count = Math.ceil(articles.length / perpage);
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__["setPageCount"])(count));
  }, [articles]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('filtered articles updated');
    var count = filteredArticles.length === 0 ? Math.ceil(articles.length / perpage) : Math.ceil(filteredArticles.length / perpage);
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__["setPageCount"])(count));
    setPartialData();
  }, [filteredArticles]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var count = filteredArticles.length === 0 ? Math.ceil(articles.length / perpage) : Math.ceil(filteredArticles.length / perpage);
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__["setPageCount"])(count));
    setPartialData();
    window.scrollTo(0, 0);
  }, [offset]);

  const setPartialData = () => {
    const partialData = filteredArticles.length === 0 ? articles.slice(offset, offset + perpage) : filteredArticles.slice(offset, offset + perpage);
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__["setPartialArticles"])(partialData));
  };

  const handlePageSlected = e => {
    //Refresh JWT token or logout
    Object(_components_account__WEBPACK_IMPORTED_MODULE_14__["refreshToken"])();
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_4__["setOffset"])(e.selected * perpage));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: `${showPlanner === true ? 'articles-hide-siderbar-head' : 'articles-hide-siderbar-head articles-hide-siderbar-head-remove-left'}`
  }, __jsx("div", {
    className: "title"
  }, `Learning materials (${filteredArticles.length === 0 ? articles.length : filteredArticles.length})`), isLogin ? __jsx("div", {
    className: "subtitle"
  }, "Click the details button to check the article.") : __jsx("div", {
    className: "subtitle"
  }, __jsx("a", {
    href: "/signin"
  }, "Login "), "to add articles or skills in your learning plan or open them directly."), smallerThan800 && __jsx(_ArticleSearchBar__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx("div", {
    className: `${showPlanner !== true ? 'articles-hide-siderbar' : 'articles-hide-siderbar articles-hide-siderbar-remove-left'}`
  }, __jsx("div", {
    className: "articles-row row"
  }, articles.length === 0 ? __jsx("div", {
    className: "articles-spinner"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
    animation: "border",
    role: "status"
  }, __jsx("span", {
    className: "sr-only"
  }, "Loading..."))) : partialArticles.map(article => __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["TransitionGroup"], null, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
    key: article.id,
    timeout: 500,
    classNames: "item"
  }, __jsx(_Article__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: article.id,
    article: article
  }))))), partialArticles.length > 0 && __jsx("div", {
    className: "article-pagination"
  }, __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_2___default.a, {
    previousLabel: "prev",
    nextLabel: "next",
    breakLabel: "...",
    breakClassName: "break-me",
    pageCount: pageCount,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 5,
    onPageChange: handlePageSlected,
    containerClassName: "pagination",
    subContainerClassName: "pages pagination",
    activeClassName: "active"
  })), partialArticles.length > 0 && __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_13__["default"])({
  WrappedComponent: ArticleList
}));

/***/ }),

/***/ "./src/components/ArticleModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/ArticleModal.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_articleModal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././css/articleModal.css */ "./src/css/articleModal.css");
/* harmony import */ var _css_articleModal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_articleModal_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ArticleModal = ({
  show,
  handleClose,
  article,
  handleOpen
}) => {
  const openArticle = () => {
    handleOpen();
    window.open(article.url, '_blank');
    handleClose();
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "article-modal-image",
    src: article.image,
    alt: article.title,
    title: article.title
  }), __jsx("div", {
    className: "article-modal-title"
  }, `${article.title}...`), __jsx("div", {
    className: "article-modal-subtitle"
  }, `${article.subtitle}...`), __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "article-modal-item d-flex"
  }, "Author: ", article.name)), __jsx("li", null, __jsx("div", {
    className: "article-modal-item d-flex"
  }, "Category: ", Number(article.category) === 0 ? '100 days of code' : 'Learning materials')), __jsx("li", null, __jsx("div", {
    className: "article-modal-item d-flex"
  }, "DateTime: ", article.time)), __jsx("li", null, __jsx("div", {
    className: "article-modal-item d-flex"
  }, "Read time: ", article.readtime)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: handleClose
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: openArticle
  }, "Open the article")));
};

ArticleModal.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  article: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  handleOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleModal);

/***/ }),

/***/ "./src/components/ArticleSearchBar.tsx":
/*!*********************************************!*\
  !*** ./src/components/ArticleSearchBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ArticleSearchBar = () => {
  const text = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const filterText = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_2__["selectFilterTextState"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (filterText.length !== 0) {
      text.current.value = filterText;
    }
  }, []);

  const onChange = e => {
    if (text.current.value !== '') {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["getFilteredArticles"])(e.target.value));

      if (router.pathname !== '/') {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/`);
      }
    } else {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["clearFilter"])());
    }
  };

  return __jsx("input", {
    className: "article-searchbar",
    ref: text,
    type: "text",
    placeholder: "ex, ReactJS, next.js, Golang...",
    onChange: onChange
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleSearchBar);

/***/ }),

/***/ "./src/components/CommonHead.tsx":
/*!***************************************!*\
  !*** ./src/components/CommonHead.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CommonHead = ({
  title,
  url,
  description,
  keywords,
  jsonLd
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("link", {
    rel: "icon",
    href: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png",
    type: "image/x-icon"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@JenHsuanHsieh"
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@JenHsuanHsieh"
  }), __jsx("meta", {
    property: "og:title",
    content: title
  }), __jsx("meta", {
    property: "og:url",
    content: url
  }), __jsx("meta", {
    property: "og:image",
    content: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/ideas-getstarted-cover.png"
  }), __jsx("meta", {
    property: "og:description",
    content: description
  }), __jsx("meta", {
    name: "keywords",
    content: keywords
  }), __jsx("meta", {
    name: "author",
    content: "Jen-Hsuan Hsieh (Sean Hsieh)"
  }), __jsx("link", {
    rel: "dns-fetch",
    href: "https://raw.githubusercontent.com/"
  }), __jsx("link", {
    rel: "canonical",
    href: url
  }), __jsx("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: jsonLd
    }
  }));
};

CommonHead.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  jsonLd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommonHead);

/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = () => {
  const showPlanner = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__["selectShowPlannerState"]);
  const twitter = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/twitter.png';
  const twitterUrl = 'https://twitter.com/JenHsuanHsieh';
  const instagram = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/instagram.png';
  const instagramUrl = 'https://www.instagram.com/seanhsgogo/';
  const facebook = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/facebook.png';
  const facebookUrl = 'https://www.facebook.com/imalayman';
  const github = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/github.png';
  const githubUrl = 'https://github.com/JenHsuan';
  const linkedin = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/linkedin.png';
  const linkedinUrl = 'https://www.linkedin.com/in/jen-hsuan-hsieh-6a13347a/';
  const youtube = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/youtube.png';
  const youtubeUrl = 'https://www.youtube.com/channel/UCQz6a3i_kmuuYXi0hOd8EWQ';
  const medium = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/medium-icon.png';
  const mediumUrl = 'https://medium.com/a-layman';
  const devto = 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg';
  const devtoUrl = 'https://dev.to/jenhsuan';
  const copyrightText = "@2020 Jen-Hsuan Hsieh. All right reserved.";
  return __jsx("div", {
    className: "common-footer"
  }, __jsx("div", {
    className: `${showPlanner !== true ? 'common-footer-grid-box' : 'common-footer-grid-box common-footer-grid-box-move-left'}`
  }, __jsx("div", {
    className: "slogon"
  }, "Learn, Think, and Improve"), __jsx("div", {
    className: "footer-author"
  }, __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: "https://jenhsuan.github.io/ALayman/profile.html"
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/JenHsuan.png",
    alt: "Sean Hsieh's website",
    title: "Sean Hsieh's website"
  }))), __jsx("span", {
    className: "author-name"
  }, "Jen-Hsuan Hsieh")), __jsx("div", {
    className: "subscribe-btn"
  }, __jsx("button", {
    type: "submit",
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/signup`);
      window.scrollTo(0, 0);
    }
  }, "Get Statred")), __jsx("div", {
    className: "subscribe-social-btn"
  }, __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: twitterUrl
  }, __jsx("img", {
    src: twitter,
    alt: "Sean Hsieh's Twiiter",
    title: "Sean Hsieh's Twiiter"
  }))), __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: facebookUrl
  }, __jsx("img", {
    src: facebook,
    alt: "A Layman's Facebook",
    title: "A Layman's Facebook"
  }))), __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: githubUrl
  }, __jsx("img", {
    src: github,
    alt: "A Layman's Facebook",
    title: "A Layman's Facebook"
  }))), __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: youtubeUrl
  }, __jsx("img", {
    src: youtube,
    alt: "Sean Hsieh's Youtube",
    title: "Sean Hsieh's Youtube"
  }))), __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: mediumUrl
  }, __jsx("img", {
    src: medium
  }))), __jsx("span", {
    className: "btn-o"
  }, __jsx("a", {
    href: linkedinUrl
  }, __jsx("img", {
    src: linkedin,
    alt: "Sean Hsieh's Linkedin",
    title: "Sean Hsieh's Linkedin"
  })))), __jsx("div", {
    className: "subscribe-copyright"
  }, copyrightText)));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/GaLayout.tsx":
/*!*************************************!*\
  !*** ./src/components/GaLayout.tsx ***!
  \*************************************/
/*! exports provided: GaLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaLayout", function() { return GaLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _googleAnalytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googleAnalytics */ "./src/components/googleAnalytics.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class GaLayout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_googleAnalytics__WEBPACK_IMPORTED_MODULE_1__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_googleAnalytics__WEBPACK_IMPORTED_MODULE_1__["logPageView"])();
  }

  render() {
    return __jsx("div", null, this.props.children);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (GaLayout);

/***/ }),

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/navbar.css */ "./src/css/navbar.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const NavBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const showPlannerFlag = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__["selectShowPlannerState"]);
  const isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__["selectLoginState"]);
  const username = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__["selectUsernameState"]);

  const showPlanner = () => {
    if (showPlannerFlag === true) {
      console.log('Hide Planner');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setPlanner"])(false));
    } else {
      console.log('Show Planner');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setPlanner"])(true));
    }
  };

  const SetLogoutForLocalSorage = () => {
    localStorage.removeItem('bookmarks');
    localStorage.removeItem('login');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('finishedArticles');
    localStorage.removeItem('token');
    localStorage.removeItem('provider');
  };

  const SetLogout = () => {
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setLogout"])());
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setUsername"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setUserId"])(-1));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setEmail"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setFinishedArticles"])([]));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setAccessToken"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setProvider"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setBookmarks"])([]));
  };

  const SetLogin = (email, username) => {
    if (email !== null && email !== undefined && email.length > 0) {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setEmail"])(email)); //local storage

      localStorage.setItem("email", email);
    }

    if (username !== null && username !== undefined && username.length > 0) {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setUsername"])(username)); //local storage

      localStorage.setItem("username", username);
    }

    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setLogin"])()); //local storage

    localStorage.setItem("login", "true");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const login = localStorage.getItem("login");

    if (login !== null && login === 'true') {
      const email = localStorage.getItem("email");
      const username = localStorage.getItem("username");
      SetLogin(email, username);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLogin === false) {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setUsername"])(''));
    } else {
      const username = localStorage.getItem("username");
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__["setUsername"])(username));
    }
  }, [isLogin]);

  const handleLogout = () => {
    SetLogout();
    SetLogoutForLocalSorage();

    if (router.pathname !== 'signin') {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(`/signin`);
    }
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "dark",
    expand: "lg",
    variant: "dark",
    fixed: "top"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "/"
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png",
    width: "30",
    height: "30",
    className: "d-inline-block align-top navbar-logo-img",
    alt: "Learning Booster",
    title: "Learning Booster from Sean Hsieh"
  }), "Daily Learning"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "about"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/about"
  }, __jsx("a", null, "About"))), isLogin && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "bookmarks"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/bookmarks"
  }, __jsx("a", null, "Plans"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "achievements"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/achievements"
  }, __jsx("a", null, "Achievements"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "feed"
  }, __jsx("a", {
    href: "/feed/"
  }, "RSS"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, !isLogin && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    title: "Account",
    id: "basic-nav-dropdown"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: "/signin"
  }, "Sign in"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    href: "/signup"
  }, "Sign up")), isLogin && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    title: username,
    id: "basic-nav-dropdown"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    onSelect: handleLogout
  }, "Sign out")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/PageWrapper.tsx":
/*!****************************************!*\
  !*** ./src/components/PageWrapper.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var _components_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/account */ "./src/components/account.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PageWrapper = ({
  WrappedComponent
}) => () => {
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const articles = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_2__["selectArticlesState"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //Refresh JWT token or logout
    Object(_components_account__WEBPACK_IMPORTED_MODULE_4__["refreshToken"])(SetLogout); //Fetch articles

    if (articles.length === 0) {
      console.log('fetch articles');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["getArticles"])());
    } //Fetch Load bookmarks and finished articles


    var bookmarksJson = localStorage.getItem("bookmarks");

    if (bookmarksJson !== null) {
      var bookmarksList = bookmarksJson.split(',');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setBookmarks"])(bookmarksList.filter(bookmark => bookmark !== '')));
    }

    var filterArticlesJson = localStorage.getItem("filterArticles");

    if (filterArticlesJson !== null) {
      var filterArticlesList = filterArticlesJson.split(',');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setFinishedArticles"])(filterArticlesList.filter(filterArticle => filterArticle !== '')));
    }
  }, []);

  const SetLogout = () => {
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setLogout"])());
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setUsername"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setUserId"])(-1));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setEmail"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setFinishedArticles"])([]));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setAccessToken"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setProvider"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__["setBookmarks"])([]));
  };

  return __jsx(WrappedComponent, null);
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./src/components/SideBar.tsx":
/*!************************************!*\
  !*** ./src/components/SideBar.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleSearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleSearchBar */ "./src/components/ArticleSearchBar.tsx");
/* harmony import */ var _ArticleDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleDropdown */ "./src/components/ArticleDropdown.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/sidebar.css */ "./src/css/sidebar.css");
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/states */ "./src/components/states/states.ts");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/articlesAction */ "./src/components/actions/articlesAction.ts");
/* harmony import */ var react_media_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-media-hook */ "react-media-hook");
/* harmony import */ var react_media_hook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_media_hook__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const SideBar = () => {
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const showPlannerFlag = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_5__["selectShowPlannerState"]);
  const isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_5__["selectLoginState"]);
  const smallerThan700 = Object(react_media_hook__WEBPACK_IMPORTED_MODULE_7__["useMediaPredicate"])("(max-width: 700px)");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (smallerThan700) {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__["setPlanner"])(false));
    }
  }, []);

  const showPlanner = () => {
    if (showPlannerFlag === true) {
      console.log('Hide Planner');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__["setPlanner"])(false));
    } else {
      console.log('Show Planner');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__["setPlanner"])(true));
    }
  };

  return __jsx("div", {
    className: "sidebar",
    style: {
      width: showPlannerFlag == true ? '23%' : '2%'
    }
  }, __jsx("div", {
    className: "sidebar-grid-box"
  }, showPlannerFlag == true && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "sidebar-title"
  }, "Let's Create Your Learning Plan", __jsx("div", {
    className: "sidebar-subtitle"
  }, "Choose the topics about Software development, Testing, DevOps, or 100DaysOfCode to build the personal learning plan")), __jsx("div", {
    className: "sidebar-dropdown"
  }, __jsx("div", {
    className: "sidebar-dropdown-content"
  }, __jsx(_ArticleDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], null))), __jsx("div", {
    className: "sidebar-search"
  }, __jsx("div", {
    className: "sidebar-search-content"
  }, __jsx(_ArticleSearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), showPlannerFlag == true ? __jsx("div", {
    className: "sidebar-remove-left"
  }, __jsx("span", {
    className: "btn-o",
    onClick: showPlanner
  }, __jsx("a", {
    href: "#"
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-left.png",
    alt: "Hide",
    title: "Hide"
  })))) : __jsx("div", {
    className: "sidebar-remove-right"
  }, __jsx("span", {
    className: "btn-o",
    onClick: showPlanner
  }, __jsx("a", {
    href: "#"
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-right.png",
    alt: "Show",
    title: "Show"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/components/account.ts":
/*!***********************************!*\
  !*** ./src/components/account.ts ***!
  \***********************************/
/*! exports provided: refreshToken, SetLogoutForLocalSorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return refreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLogoutForLocalSorage", function() { return SetLogoutForLocalSorage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const refreshToken = async () => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/renew-token/');
  } catch (error) {
    console.log(error);
    SetLogout();
    SetLogoutForLocalSorage();
  }
};
const SetLogoutForLocalSorage = () => {
  localStorage.removeItem('login');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('finishedArticles');
  localStorage.removeItem('bookmarks');
  localStorage.removeItem('token');
  localStorage.removeItem('provider');
};

/***/ }),

/***/ "./src/components/actions/articlesAction.ts":
/*!**************************************************!*\
  !*** ./src/components/actions/articlesAction.ts ***!
  \**************************************************/
/*! exports provided: getArticles, getFilteredArticles, setPartialArticles, setLoading, setOffset, setPageCount, clearFilter, setLogin, setLogout, setAccessToken, setCategory, clearCategory, resetLoading, setPlanner, setEmail, setUsername, setErrorMessage, removeBookmark, setBookmarks, setFinishedArticles, removeFinishedArticle, setProvider, setUserId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticles", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredArticles", function() { return getFilteredArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPartialArticles", function() { return setPartialArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffset", function() { return setOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageCount", function() { return setPageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFilter", function() { return clearFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogin", function() { return setLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogout", function() { return setLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccessToken", function() { return setAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategory", function() { return setCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCategory", function() { return clearCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLoading", function() { return resetLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlanner", function() { return setPlanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmail", function() { return setEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsername", function() { return setUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorMessage", function() { return setErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBookmark", function() { return removeBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBookmarks", function() { return setBookmarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFinishedArticles", function() { return setFinishedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFinishedArticle", function() { return removeFinishedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProvider", function() { return setProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserId", function() { return setUserId; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/components/types/index.ts");
 //Types

 //Actions

const getArticles = () => async dispatch => {
  var res = {
    data: []
  };

  try {
    res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/articles');
    await dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_ARTICLES"],
      payload: res.data
    });
  } catch (error) {
    //res.data = error;
    console.log(error);
  }
};
const getFilteredArticles = text => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_FILTERED_ARTICLES"],
    payload: text
  });
};
const setPartialArticles = articles => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_PARTIAL_ARTICLES"],
    payload: articles
  });
};
const setLoading = isLoading => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_LOADING"],
    payload: isLoading
  });
};
const setOffset = offset => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_OFFSET"],
    payload: offset
  });
};
const setPageCount = pageCount => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_PAPE_COUNT"],
    payload: pageCount
  });
};
const clearFilter = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_FILTER"]
  });
};
const setLogin = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_LOGIN"]
  });
};
const setLogout = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_LOGOUT"]
  });
};
const setAccessToken = token => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ACCESS_TOKEN"],
    payload: token
  });
};
const setCategory = category => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_CATEGORY"],
    payload: category
  });
};
const clearCategory = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CATEGORY"]
  });
};
const resetLoading = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["RESET_LOADING"]
  });
};
const setPlanner = showPlanner => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_PLANNER"],
    payload: showPlanner
  });
};
const setEmail = email => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_EMAIL"],
    payload: email
  });
};
const setUsername = username => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_USERNAME"],
    payload: username
  });
};
const setErrorMessage = message => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ERRORMESSAGE"],
    payload: message
  });
};
const removeBookmark = id => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BOOKMARK"],
    payload: id
  });
};
const setBookmarks = bookmarks => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_BOOKMARKS"],
    payload: bookmarks
  });
};
const setFinishedArticles = finishedArticles => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_MARKASFINISHED"],
    payload: finishedArticles
  });
};
const removeFinishedArticle = finishedArticle => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_UNMARKASFINISHED"],
    payload: finishedArticle
  });
};
const setProvider = provider => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_PROVIDER"],
    payload: provider
  });
};
const setUserId = userId => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_USERID"],
    payload: userId
  });
};

/***/ }),

/***/ "./src/components/googleAnalytics.ts":
/*!*******************************************!*\
  !*** ./src/components/googleAnalytics.ts ***!
  \*******************************************/
/*! exports provided: initGA, logPageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-170160002-1");
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};

/***/ }),

/***/ "./src/components/reducers/articlesReducer.ts":
/*!****************************************************!*\
  !*** ./src/components/reducers/articlesReducer.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/components/types/index.ts");
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/states */ "./src/components/states/states.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Types
 //States

 //Reducer

const articlesReducer = (state = _states_states__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        articles: action.payload,
        offset: 0,
        partialArticles: action.payload.slice(0, state.perpage)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_FILTERED_ARTICLES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        filterText: action.payload,
        filteredArticles: state.articles.filter(article => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return article.title.match(regex) || article.subtitle.match(regex);
        }),
        offset: 0,
        partialArticles: state.articles.filter(article => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return article.title.match(regex) || article.subtitle.match(regex);
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PARTIAL_ARTICLES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        partialArticles: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_FILTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: -1,
        filteredArticles: []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        category: action.payload,
        filteredArticles: state.articles.filter(article => {
          return article.category == action.payload;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filteredArticles: []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["RESET_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PLANNER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        showPlanner: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_OFFSET"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        offset: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PAPE_COUNT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pageCount: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PERPAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        perpage: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOGIN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOGOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ACCESS_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        accessToken: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_EMAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        email: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_USERNAME"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        username: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORMESSAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorMessage: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_BOOKMARK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookmarks: state.bookmarks.filter(bookmark => {
          return bookmark !== action.payload;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_BOOKMARKS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookmarks: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_MARKASFINISHED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        finishedArticles: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_UNMARKASFINISHED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        finishedArticles: state.finishedArticles.filter(finishedArticle => {
          return finishedArticle !== action.payload;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_PROVIDER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        provider: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_USERID"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userId: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (articlesReducer);

/***/ }),

/***/ "./src/components/reducers/index.ts":
/*!******************************************!*\
  !*** ./src/components/reducers/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _articlesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlesReducer */ "./src/components/reducers/articlesReducer.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  articlesReducer: _articlesReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/components/states/states.ts":
/*!*****************************************!*\
  !*** ./src/components/states/states.ts ***!
  \*****************************************/
/*! exports provided: initialState, selectArticlesState, selectFilteredArticlesState, selectPartialArticlesState, selectIsLoadingState, selectShowPlannerState, selectPerpageState, selectPageCountState, selectOffsetState, selectLoadingState, selectLoginState, selectAccessTokenState, selectEmailState, selectUsernameState, selectFilterTextState, selectCategoryState, selectErrorMessageState, selectBookmarksState, selectFinishedArticlessState, selectProviderState, selectUserIdState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectArticlesState", function() { return selectArticlesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredArticlesState", function() { return selectFilteredArticlesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPartialArticlesState", function() { return selectPartialArticlesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLoadingState", function() { return selectIsLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShowPlannerState", function() { return selectShowPlannerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPerpageState", function() { return selectPerpageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageCountState", function() { return selectPageCountState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOffsetState", function() { return selectOffsetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingState", function() { return selectLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoginState", function() { return selectLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAccessTokenState", function() { return selectAccessTokenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailState", function() { return selectEmailState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUsernameState", function() { return selectUsernameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterTextState", function() { return selectFilterTextState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategoryState", function() { return selectCategoryState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectErrorMessageState", function() { return selectErrorMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBookmarksState", function() { return selectBookmarksState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFinishedArticlessState", function() { return selectFinishedArticlessState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProviderState", function() { return selectProviderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIdState", function() { return selectUserIdState; });
//Types
//Initial state
const initialState = {
  articles: [],
  filteredArticles: [],
  partialArticles: [],
  isLoading: false,
  showPlanner: true,
  perpage: 18,
  pageCount: 1,
  offset: 0,
  isLogin: false,
  accessToken: '',
  email: '',
  username: '',
  filterText: '',
  category: -1,
  errorMessage: '',
  bookmarks: [],
  finishedArticles: [],
  provider: '',
  userId: -1
}; //Selector functions

const selectArticlesState = rootState => rootState.articlesReducer.articles;
const selectFilteredArticlesState = rootState => rootState.articlesReducer.filteredArticles;
const selectPartialArticlesState = rootState => rootState.articlesReducer.partialArticles;
const selectIsLoadingState = rootState => rootState.articlesReducer.isLoading;
const selectShowPlannerState = rootState => rootState.articlesReducer.showPlanner;
const selectPerpageState = rootState => rootState.articlesReducer.perpage;
const selectPageCountState = rootState => rootState.articlesReducer.pageCount;
const selectOffsetState = rootState => rootState.articlesReducer.offset;
const selectLoadingState = rootState => rootState.articlesReducer.isLoading;
const selectLoginState = rootState => rootState.articlesReducer.isLogin;
const selectAccessTokenState = rootState => rootState.articlesReducer.accessToken;
const selectEmailState = rootState => rootState.articlesReducer.email;
const selectUsernameState = rootState => rootState.articlesReducer.username;
const selectFilterTextState = rootState => rootState.articlesReducer.filterText;
const selectCategoryState = rootState => rootState.articlesReducer.category;
const selectErrorMessageState = rootState => rootState.articlesReducer.errorMessage;
const selectBookmarksState = rootState => rootState.articlesReducer.bookmarks;
const selectFinishedArticlessState = rootState => rootState.articlesReducer.finishedArticles;
const selectProviderState = rootState => rootState.articlesReducer.provider;
const selectUserIdState = rootState => rootState.articlesReducer.userId;

/***/ }),

/***/ "./src/components/store/store.ts":
/*!***************************************!*\
  !*** ./src/components/store/store.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension/developmentOnly */ "redux-devtools-extension/developmentOnly");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/components/reducers/index.ts");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/components/types/index.ts":
/*!***************************************!*\
  !*** ./src/components/types/index.ts ***!
  \***************************************/
/*! exports provided: GET_ARTICLES, GET_FILTERED_ARTICLES, CLEAR_FILTER, SET_CATEGORY, CLEAR_CATEGORY, RESET_LOADING, SET_PLANNER, SET_PARTIAL_ARTICLES, SET_PERPAGE, SET_PAPE_COUNT, SET_OFFSET, SET_LOADING, SET_LOGIN, SET_LOGOUT, SET_ACCESS_TOKEN, SET_EMAIL, SET_USERNAME, SET_ERRORMESSAGE, REMOVE_BOOKMARK, SET_BOOKMARKS, SET_MARKASFINISHED, SET_UNMARKASFINISHED, SET_PROVIDER, SET_USERID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLES", function() { return GET_ARTICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTERED_ARTICLES", function() { return GET_FILTERED_ARTICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_FILTER", function() { return CLEAR_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CATEGORY", function() { return SET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CATEGORY", function() { return CLEAR_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_LOADING", function() { return RESET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLANNER", function() { return SET_PLANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PARTIAL_ARTICLES", function() { return SET_PARTIAL_ARTICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PERPAGE", function() { return SET_PERPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PAPE_COUNT", function() { return SET_PAPE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OFFSET", function() { return SET_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGIN", function() { return SET_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGOUT", function() { return SET_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACCESS_TOKEN", function() { return SET_ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EMAIL", function() { return SET_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERRORMESSAGE", function() { return SET_ERRORMESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_BOOKMARK", function() { return REMOVE_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BOOKMARKS", function() { return SET_BOOKMARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MARKASFINISHED", function() { return SET_MARKASFINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNMARKASFINISHED", function() { return SET_UNMARKASFINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROVIDER", function() { return SET_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERID", function() { return SET_USERID; });
const GET_ARTICLES = 'GET_ARTICLES';
const GET_FILTERED_ARTICLES = 'GET_FILTERED_ARTICLES';
const CLEAR_FILTER = 'CLEAR_FILTER';
const SET_CATEGORY = 'SET_CATEGORY';
const CLEAR_CATEGORY = 'CLEAR_CATEGORY';
const RESET_LOADING = 'RESET_LOADING';
const SET_PLANNER = 'SET_PLANNER';
const SET_PARTIAL_ARTICLES = 'SET_PARTIAL_ARTICLES';
const SET_PERPAGE = 'SET_PERPAGE';
const SET_PAPE_COUNT = 'SET_PAPE_COUNT';
const SET_OFFSET = 'SET_OFFSET';
const SET_LOADING = 'SET_LOADING';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_EMAIL = 'SET_EMAIL';
const SET_USERNAME = 'SET_USERNAME';
const SET_ERRORMESSAGE = 'SET_ERRORMESSAGE';
const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
const SET_BOOKMARKS = 'SET_BOOKMARKS';
const SET_MARKASFINISHED = 'SET_MARKASFINISHED';
const SET_UNMARKASFINISHED = 'SET_UNMARKASFINISHED';
const SET_PROVIDER = 'SET_PROVIDER';
const SET_USERID = 'SET_USERID';

/***/ }),

/***/ "./src/css/article.css":
/*!*****************************!*\
  !*** ./src/css/article.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/articleModal.css":
/*!**********************************!*\
  !*** ./src/css/articleModal.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/card.css":
/*!**************************!*\
  !*** ./src/css/card.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/mainpage.css":
/*!******************************!*\
  !*** ./src/css/mainpage.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/sidebar.css":
/*!*****************************!*\
  !*** ./src/css/sidebar.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ArticleList */ "./src/components/ArticleList.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store/store */ "./src/components/store/store.ts");
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideBar */ "./src/components/SideBar.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var _css_mainpage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/mainpage.css */ "./src/css/mainpage.css");
/* harmony import */ var _css_mainpage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_mainpage_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/sidebar.css */ "./src/css/sidebar.css");
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_GaLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/GaLayout */ "./src/components/GaLayout.tsx");
/* harmony import */ var _components_CommonHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CommonHead */ "./src/components/CommonHead.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = ({
  jsonLdData
}) => {
  const title = "ALayman Daily Learning";
  const keywords = "Software Development, Tesing, DveOps, SRE, Inteviews, Data Sciences";
  const url = "https://daily-learning.herokuapp.com/";
  const description = "Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.";
  return __jsx(_components_GaLayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(_components_CommonHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: title,
    keywords: keywords,
    url: url,
    description: description,
    jsonLd: jsonLdData
  }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _components_store_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "mainpage-grid-box"
  }, __jsx(_components_SideBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_ArticleList__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seanhsieh/github/100daysOfCodeIdeas/ideas/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-media-hook":
/*!***********************************!*\
  !*** external "react-media-hook" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-media-hook");

/***/ }),

/***/ "react-paginate":
/*!*********************************!*\
  !*** external "react-paginate" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension/developmentOnly":
/*!***********************************************************!*\
  !*** external "redux-devtools-extension/developmentOnly" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FydGljbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FydGljbGVEcm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FydGljbGVNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZVNlYXJjaEJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tbW9uSGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYUxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY3Rpb25zL2FydGljbGVzQWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dvb2dsZUFuYWx5dGljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWR1Y2Vycy9hcnRpY2xlc1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGVzL3N0YXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdG9yZS9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1lZGlhLWhvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYWdpbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2RldmVsb3BtZW50T25seVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiQXJ0aWNsZSIsImFydGljbGUiLCJkaXNQYXRjaCIsInVzZURpc3BhdGNoIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImlzQm9va21hcmtlZCIsInNldEJvb2ttYXJrIiwiaXNDaGVja2VkIiwic2V0Q2hlY2tlZCIsImlzTG9naW4iLCJ1c2VTZWxlY3RvciIsInNlbGVjdExvZ2luU3RhdGUiLCJib29rbWFya3MiLCJzZWxlY3RCb29rbWFya3NTdGF0ZSIsInVzZXJJZCIsInNlbGVjdFVzZXJJZFN0YXRlIiwicHJvdmlkZXIiLCJzZWxlY3RQcm92aWRlclN0YXRlIiwiZW1haWwiLCJzZWxlY3RFbWFpbFN0YXRlIiwiZmluaXNoZWRBcnRpY2xlcyIsInNlbGVjdEZpbmlzaGVkQXJ0aWNsZXNzU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaW5kIiwiYm9va21hcmsiLCJpZCIsImxvZyIsImZpbmlzaGVkQXJ0aWNsZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImhhbmRsZUNoZWNraW5nVHJ1ZSIsImZpbmlzaGVkQXJ0aWNsZXNTdHJpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmluaXNoZWRBcnRpY2xlc0xpc3QiLCJsb2NhbGZpbmlzaGVkQXJ0aWNsZXMiLCJuZXdmaW5pc2hlZEFydGljbGVzU3RyaW5nIiwic2V0SXRlbSIsInNldEZpbmlzaGVkQXJ0aWNsZXMiLCJheGlvcyIsInB1dCIsImhhbmRsZUNoZWNraW5nRmFsc2UiLCJOdW1iZXIiLCJzZXRCb29rbWFya3NTdGF0ZSIsImJvb2ttYXJrc0xpc3QiLCJuZXdib29rbWFya3NTdHJpbmciLCJzZXRCb29rbWFya3MiLCJvbkJvb2ttYXJrQ2xpY2siLCJib29rbWFya3NTdHJpbmciLCJsb2NhbEJvb2ttYXJrcyIsImltYWdlIiwidGl0bGUiLCJ0aW1lIiwicmVhZHRpbWUiLCJBcnRpY2xlRHJvcGRvd24iLCJjYXRlZ29yeSIsInNlbGVjdENhdGVnb3J5U3RhdGUiLCJoYW5kbGVTZWxlY3QiLCJzZXRDYXRlZ29yeSIsImNsZWFyQ2F0ZWdvcnkiLCJnZXRUaXRsZSIsIkFydGljbGVMaXN0IiwiaXNMb2FkaW5nIiwic2VsZWN0SXNMb2FkaW5nU3RhdGUiLCJhcnRpY2xlcyIsInNlbGVjdEFydGljbGVzU3RhdGUiLCJmaWx0ZXJlZEFydGljbGVzIiwic2VsZWN0RmlsdGVyZWRBcnRpY2xlc1N0YXRlIiwicGFydGlhbEFydGljbGVzIiwic2VsZWN0UGFydGlhbEFydGljbGVzU3RhdGUiLCJwZXJwYWdlIiwic2VsZWN0UGVycGFnZVN0YXRlIiwicGFnZUNvdW50Iiwic2VsZWN0UGFnZUNvdW50U3RhdGUiLCJvZmZzZXQiLCJzZWxlY3RPZmZzZXRTdGF0ZSIsInNob3dQbGFubmVyIiwic2VsZWN0U2hvd1BsYW5uZXJTdGF0ZSIsInNtYWxsZXJUaGFuODAwIiwidXNlTWVkaWFQcmVkaWNhdGUiLCJwYXJ0aWFsRGF0YSIsInNldFBhcnRpYWxBcnRpY2xlcyIsImNvdW50IiwiTWF0aCIsImNlaWwiLCJzZXRQYWdlQ291bnQiLCJzZXRQYXJ0aWFsRGF0YSIsImhhbmRsZVBhZ2VTbGVjdGVkIiwicmVmcmVzaFRva2VuIiwic2V0T2Zmc2V0Iiwic2VsZWN0ZWQiLCJQYWdlV3JhcHBlciIsIldyYXBwZWRDb21wb25lbnQiLCJBcnRpY2xlTW9kYWwiLCJoYW5kbGVPcGVuIiwib3BlbkFydGljbGUiLCJvcGVuIiwic3VidGl0bGUiLCJmdW5jIiwiQXJ0aWNsZVNlYXJjaEJhciIsInRleHQiLCJjcmVhdGVSZWYiLCJmaWx0ZXJUZXh0Iiwic2VsZWN0RmlsdGVyVGV4dFN0YXRlIiwib25DaGFuZ2UiLCJnZXRGaWx0ZXJlZEFydGljbGVzIiwiY2xlYXJGaWx0ZXIiLCJDb21tb25IZWFkIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImpzb25MZCIsIl9faHRtbCIsIkZvb3RlciIsInR3aXR0ZXIiLCJ0d2l0dGVyVXJsIiwiaW5zdGFncmFtIiwiaW5zdGFncmFtVXJsIiwiZmFjZWJvb2siLCJmYWNlYm9va1VybCIsImdpdGh1YiIsImdpdGh1YlVybCIsImxpbmtlZGluIiwibGlua2VkaW5VcmwiLCJ5b3V0dWJlIiwieW91dHViZVVybCIsIm1lZGl1bSIsIm1lZGl1bVVybCIsImRldnRvIiwiZGV2dG9VcmwiLCJjb3B5cmlnaHRUZXh0IiwiR2FMYXlvdXQiLCJjb21wb25lbnREaWRNb3VudCIsIkdBX0lOSVRJQUxJWkVEIiwiaW5pdEdBIiwibG9nUGFnZVZpZXciLCJOYXZCYXIiLCJzaG93UGxhbm5lckZsYWciLCJ1c2VybmFtZSIsInNlbGVjdFVzZXJuYW1lU3RhdGUiLCJzZXRQbGFubmVyIiwiU2V0TG9nb3V0Rm9yTG9jYWxTb3JhZ2UiLCJyZW1vdmVJdGVtIiwiU2V0TG9nb3V0Iiwic2V0TG9nb3V0Iiwic2V0VXNlcm5hbWUiLCJzZXRVc2VySWQiLCJzZXRFbWFpbCIsInNldEFjY2Vzc1Rva2VuIiwic2V0UHJvdmlkZXIiLCJTZXRMb2dpbiIsInNldExvZ2luIiwibG9naW4iLCJoYW5kbGVMb2dvdXQiLCJnZXRBcnRpY2xlcyIsImJvb2ttYXJrc0pzb24iLCJmaWx0ZXJBcnRpY2xlc0pzb24iLCJmaWx0ZXJBcnRpY2xlc0xpc3QiLCJmaWx0ZXJBcnRpY2xlIiwiU2lkZUJhciIsInNtYWxsZXJUaGFuNzAwIiwid2lkdGgiLCJkaXNwYXRjaCIsIkdFVF9BUlRJQ0xFUyIsInBheWxvYWQiLCJHRVRfRklMVEVSRURfQVJUSUNMRVMiLCJTRVRfUEFSVElBTF9BUlRJQ0xFUyIsInNldExvYWRpbmciLCJTRVRfTE9BRElORyIsIlNFVF9PRkZTRVQiLCJTRVRfUEFQRV9DT1VOVCIsIkNMRUFSX0ZJTFRFUiIsIlNFVF9MT0dJTiIsIlNFVF9MT0dPVVQiLCJ0b2tlbiIsIlNFVF9BQ0NFU1NfVE9LRU4iLCJTRVRfQ0FURUdPUlkiLCJDTEVBUl9DQVRFR09SWSIsInJlc2V0TG9hZGluZyIsIlJFU0VUX0xPQURJTkciLCJTRVRfUExBTk5FUiIsIlNFVF9FTUFJTCIsIlNFVF9VU0VSTkFNRSIsInNldEVycm9yTWVzc2FnZSIsIlNFVF9FUlJPUk1FU1NBR0UiLCJyZW1vdmVCb29rbWFyayIsIlJFTU9WRV9CT09LTUFSSyIsIlNFVF9CT09LTUFSS1MiLCJTRVRfTUFSS0FTRklOSVNIRUQiLCJyZW1vdmVGaW5pc2hlZEFydGljbGUiLCJTRVRfVU5NQVJLQVNGSU5JU0hFRCIsIlNFVF9QUk9WSURFUiIsIlNFVF9VU0VSSUQiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwiYXJ0aWNsZXNSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwicmVnZXgiLCJtYXRjaCIsIlNFVF9QRVJQQUdFIiwiYWNjZXNzVG9rZW4iLCJlcnJvck1lc3NhZ2UiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290U3RhdGUiLCJzZWxlY3RMb2FkaW5nU3RhdGUiLCJzZWxlY3RBY2Nlc3NUb2tlblN0YXRlIiwic2VsZWN0RXJyb3JNZXNzYWdlU3RhdGUiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiSW5kZXgiLCJqc29uTGREYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCBGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYXJkfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEFydGljbGVNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVNb2RhbCc7XG5pbXBvcnQgJy4uLy4vY3NzL2FydGljbGUuY3NzJ1xuaW1wb3J0ICcuLi8uL2Nzcy9jYXJkLmNzcydcbmltcG9ydCB7XG4gICAgc2VsZWN0TG9naW5TdGF0ZSxcbiAgICBzZWxlY3RCb29rbWFya3NTdGF0ZSxcbiAgICBzZWxlY3RQcm92aWRlclN0YXRlLFxuICAgIHNlbGVjdFVzZXJJZFN0YXRlLFxuICAgIHNlbGVjdEVtYWlsU3RhdGUsXG4gICAgc2VsZWN0RmluaXNoZWRBcnRpY2xlc3NTdGF0ZVxufSBmcm9tICcuL3N0YXRlcy9zdGF0ZXMnO1xuXG5pbXBvcnQgeyBcbiAgICBzZXRCb29rbWFya3MsXG4gICAgcmVtb3ZlQm9va21hcmssXG4gICAgc2V0RmluaXNoZWRBcnRpY2xlcyxcbiAgICByZW1vdmVGaW5pc2hlZEFydGljbGVcbn0gZnJvbSAnLi9hY3Rpb25zL2FydGljbGVzQWN0aW9uJztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgXG4gICAgQXJ0aWNsZVByb3AsXG4gICAgQXJ0aWNsZVR5cGVcbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvdHlwZXMnXG4gXG5jb25zdCBBcnRpY2xlOiBGdW5jdGlvbkNvbXBvbmVudDxBcnRpY2xlUHJvcD4gPSAoe2FydGljbGV9OiBBcnRpY2xlUHJvcCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc1BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzQm9va21hcmtlZCwgc2V0Qm9va21hcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlzTG9naW4gPSB1c2VTZWxlY3RvcihzZWxlY3RMb2dpblN0YXRlKTtcbiAgICBjb25zdCBib29rbWFya3MgPSB1c2VTZWxlY3RvcihzZWxlY3RCb29rbWFya3NTdGF0ZSk7XG4gICAgY29uc3QgdXNlcklkID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcklkU3RhdGUpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gdXNlU2VsZWN0b3Ioc2VsZWN0UHJvdmlkZXJTdGF0ZSk7XG4gICAgY29uc3QgZW1haWwgPSB1c2VTZWxlY3RvcihzZWxlY3RFbWFpbFN0YXRlKTtcbiAgICBjb25zdCBmaW5pc2hlZEFydGljbGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RmluaXNoZWRBcnRpY2xlc3NTdGF0ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG5cbiAgICAgICAgaWYgKGJvb2ttYXJrcy5maW5kKGJvb2ttYXJrID0+IGJvb2ttYXJrID09IGFydGljbGUuaWQpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib29rbWFyaycpXG4gICAgICAgICAgICBzZXRCb29rbWFyayh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtib29rbWFya3NdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBpZiAoZmluaXNoZWRBcnRpY2xlcy5maW5kKGZpbmlzaGVkQXJ0aWNsZSA9PiBmaW5pc2hlZEFydGljbGUgPT09IGFydGljbGUuaWQpICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmluaXNoZWRBcnRpY2xlJylcbiAgICAgICAgICAgIHNldENoZWNrZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbZmluaXNoZWRBcnRpY2xlc10pXG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGVja2luZ1RydWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBmaW5pc2hlZEFydGljbGVzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaW5pc2hlZEFydGljbGVzXCIpO1xuICAgICAgICBsZXQgZmluaXNoZWRBcnRpY2xlc0xpc3Q7XG4gICAgICAgIGxldCBsb2NhbGZpbmlzaGVkQXJ0aWNsZXM7XG4gICAgICAgIGlmIChmaW5pc2hlZEFydGljbGVzU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgbG9jYWxmaW5pc2hlZEFydGljbGVzID0gYCR7YXJ0aWNsZS5pZH1gO1xuICAgICAgICAgICAgZmluaXNoZWRBcnRpY2xlc0xpc3QgPSBbYXJ0aWNsZS5pZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5pc2hlZEFydGljbGVzTGlzdCA9IGZpbmlzaGVkQXJ0aWNsZXNTdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZpbmlzaGVkQXJ0aWNsZXNMaXN0LmluZGV4T2YoYXJ0aWNsZS5pZCkgPT09IC0xID8gZmluaXNoZWRBcnRpY2xlc0xpc3QucHVzaChhcnRpY2xlLmlkKSA6IGNvbnNvbGUubG9nKFwiVGhpcyBpdGVtIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vc2V0IGJvb2ttYXJrcyB0byBsb2NhbCBzdGF0ZVxuICAgICAgICBzZXRDaGVja2VkKHRydWUpO1xuXG4gICAgICAgIGxldCBuZXdmaW5pc2hlZEFydGljbGVzU3RyaW5nID0gZmluaXNoZWRBcnRpY2xlc0xpc3Quam9pbigpO1xuICAgICAgICAvL3NldCBib29rbWFya3MgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmluaXNoZWRBcnRpY2xlc1wiLCBuZXdmaW5pc2hlZEFydGljbGVzU3RyaW5nKTtcbiAgICAgICAgLy9zZXQgYm9va21hcmtzIHRvIGdsb2JhbCBzdGF0ZVxuICAgICAgICBkaXNQYXRjaChzZXRGaW5pc2hlZEFydGljbGVzKGZpbmlzaGVkQXJ0aWNsZXNMaXN0KSk7XG4gICAgICAgIC8vdXBkYXRlIHNlcnZlclxuICAgICAgICBpZiAocHJvdmlkZXIgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgYXBpL3Byb2ZpbGUvP2ZpbmlzaGVkQXJ0aWNsZXM9JHtuZXdmaW5pc2hlZEFydGljbGVzU3RyaW5nfSZyZWFkZXJfaWQ9JHt1c2VySWR9YCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgYXBpL3Byb2ZpbGVzb2NpYWwvP2ZpbmlzaGVkQXJ0aWNsZXM9JHtuZXdmaW5pc2hlZEFydGljbGVzU3RyaW5nfSZlbWFpbD0ke2VtYWlsfSZwcm92aWRlcj0ke3Byb3ZpZGVyfWApO1xuICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hlY2tpbmdGYWxzZSA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBsZXQgZmluaXNoZWRBcnRpY2xlc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmluaXNoZWRBcnRpY2xlc1wiKTtcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKGZpbmlzaGVkQXJ0aWNsZXNTdHJpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmluaXNoZWRBcnRpY2xlc0xpc3QgPSBmaW5pc2hlZEFydGljbGVzU3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgZmluaXNoZWRBcnRpY2xlc0xpc3QgPSBmaW5pc2hlZEFydGljbGVzTGlzdC5maWx0ZXIoZmluaXNoZWRBcnRpY2xlID0+IE51bWJlcihmaW5pc2hlZEFydGljbGUpICE9PSBhcnRpY2xlLmlkKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3ZmluaXNoZWRBcnRpY2xlc1N0cmluZyA9IGZpbmlzaGVkQXJ0aWNsZXNMaXN0LmpvaW4oKTtcbiAgICAgICAgICAgICAgICAvL3NldCBib29rbWFya3MgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaW5pc2hlZEFydGljbGVzXCIsIG5ld2ZpbmlzaGVkQXJ0aWNsZXNTdHJpbmcpO1xuICAgICAgICAgICAgICAgIC8vc2V0IGJvb2ttYXJrcyB0byBnbG9iYWwgc3RhdGVcbiAgICAgICAgICAgICAgICBkaXNQYXRjaChzZXRGaW5pc2hlZEFydGljbGVzKGZpbmlzaGVkQXJ0aWNsZXNMaXN0KSk7XG4gICAgICAgICAgICAgICAgLy91cGRhdGUgc2VydmVyXG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyID09PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGBhcGkvcHJvZmlsZS8/ZmluaXNoZWRBcnRpY2xlcz0ke25ld2ZpbmlzaGVkQXJ0aWNsZXNTdHJpbmd9JnJlYWRlcl9pZD0ke3VzZXJJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGBhcGkvcHJvZmlsZXNvY2lhbC8/ZmluaXNoZWRBcnRpY2xlcz0ke25ld2ZpbmlzaGVkQXJ0aWNsZXNTdHJpbmd9JmVtYWlsPSR7ZW1haWx9JnByb3ZpZGVyPSR7cHJvdmlkZXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zZXQgYm9va21hcmtzIHRvIGxvY2FsIHN0YXRlXG4gICAgICAgICAgICBzZXRDaGVja2VkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHNldEJvb2ttYXJrc1N0YXRlID0gYXN5bmMgKGJvb2ttYXJrc0xpc3QpID0+IHsgXG4gICAgICAgIGxldCBuZXdib29rbWFya3NTdHJpbmcgPSBib29rbWFya3NMaXN0LmpvaW4oKTtcbiAgICAgICAgLy9zZXQgYm9va21hcmtzIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJvb2ttYXJrc1wiLCBuZXdib29rbWFya3NTdHJpbmcpO1xuICAgICAgICAvL3NldCBib29rbWFya3MgdG8gZ2xvYmFsIHN0YXRlXG4gICAgICAgIGRpc1BhdGNoKHNldEJvb2ttYXJrcyhib29rbWFya3NMaXN0KSk7XG4gICAgICAgIC8vdXBkYXRlIHNlcnZlclxuICAgICAgICBpZiAocHJvdmlkZXIgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgYXBpL3Byb2ZpbGUvP2Jvb2ttYXJrcz0ke25ld2Jvb2ttYXJrc1N0cmluZ30mcmVhZGVyX2lkPSR7dXNlcklkfWApO1xuICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYGFwaS9wcm9maWxlc29jaWFsLz9ib29rbWFya3M9JHtuZXdib29rbWFya3NTdHJpbmd9JmVtYWlsPSR7ZW1haWx9JnByb3ZpZGVyPSR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm92aWRlclwiKX1gKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvbkJvb2ttYXJrQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBib29rbWFya3NTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvb2ttYXJrc1wiKTtcbiAgICAgICAgbGV0IGxvY2FsQm9va21hcmtzO1xuICAgICAgICBsZXQgYm9va21hcmtzTGlzdDtcbiAgICAgICAgaWYgKGlzQm9va21hcmtlZCkge1xuICAgICAgICAgICAgaWYgKGJvb2ttYXJrc1N0cmluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJvb2ttYXJrc0xpc3QgPSBib29rbWFya3NTdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBib29rbWFya3NMaXN0ID0gYm9va21hcmtzTGlzdC5maWx0ZXIoYm9va21hcmsgPT4gTnVtYmVyKGJvb2ttYXJrKSAhPT0gYXJ0aWNsZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3NldCBib29rbWFya3MgdG8gbG9jYWwgc3RhdGVcbiAgICAgICAgICAgIHNldEJvb2ttYXJrKGZhbHNlKTtcblxuICAgICAgICAgICAgYXdhaXQgc2V0Qm9va21hcmtzU3RhdGUoYm9va21hcmtzTGlzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYm9va21hcmtzU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDk5OSlcbiAgICAgICAgICAgICAgICBsb2NhbEJvb2ttYXJrcyA9IGAke2FydGljbGUuaWR9YDtcbiAgICAgICAgICAgICAgICBib29rbWFya3NMaXN0ID0gW2FydGljbGUuaWRdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib29rbWFya3NMaXN0ID0gYm9va21hcmtzU3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgYm9va21hcmtzTGlzdC5pbmRleE9mKGFydGljbGUuaWQpID09PSAtMSA/IGJvb2ttYXJrc0xpc3QucHVzaChhcnRpY2xlLmlkKSA6IGNvbnNvbGUubG9nKFwiVGhpcyBpdGVtIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9zZXQgYm9va21hcmtzIHRvIGxvY2FsIHN0YXRlXG4gICAgICAgICAgICBzZXRCb29rbWFyayh0cnVlKTtcblxuICAgICAgICAgICAgYXdhaXQgc2V0Qm9va21hcmtzU3RhdGUoYm9va21hcmtzTGlzdCk7XG4gICAgICAgICAgICAvL3JlZGlyZWN0XG4gICAgICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lICE9PSAnYm9va21hcmtzJykge1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvYm9va21hcmtzYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlcy1yb3dcIj5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImFydGljbGUtY2FyZFwiIGJvcmRlcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAge2lzTG9naW4gJiYgcm91dGVyLnBhdGhuYW1lICE9PSAnL2Jvb2ttYXJrcycgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib29rbWFya1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgb25DbGljaz17KCk9PntvbkJvb2ttYXJrQ2xpY2soKTsgcmV0dXJuIGZhbHNlO319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0Jvb2ttYXJrZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9KZW5Ic3Vhbi9BTGF5bWFuL21hc3Rlci92aWV3cy9pbWFnZXMvYm9va21hcmsteWVsbG93LnBuZ1wiIGFsdD1cIkFkZCB0aGlzIGFydGljbGUgdG8gdGhlIGJvb2ttYXJrXCIgdGl0bGU9XCJBZGQgdGhpcyBhcnRpY2xlIHRvIHRoZSBib29rbWFya1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9ib29rbWFyay13aGl0ZS5wbmdcIiBhbHQ9XCJBZGQgdGhpcyBhcnRpY2xlIHRvIHRoZSBib29rbWFya1wiIHRpdGxlPVwiQWRkIHRoaXMgYXJ0aWNsZSB0byB0aGUgYm9va21hcmtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSAnL2Jvb2ttYXJrcycgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXsoKT0+e2hhbmRsZUNoZWNraW5nRmFsc2UoKTsgcmV0dXJuIGZhbHNlO319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9jaGVjay5wbmdcIiBhbHQ9XCJNYXJrZWQgYXMgdW5maW5pc2hlZFwiIHRpdGxlPVwiTWFya2VkIGFzIHVuZmluaXNoZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9KZW5Ic3Vhbi9BTGF5bWFuL21hc3Rlci92aWV3cy9pbWFnZXMvdW5jaGVjay5wbmdcIiBhbHQ9XCJNYXJrZWQgYXMgZmluaXNoZWRcIiB0aXRsZT1cIk1hcmtlZCBhcyBmaW5pc2hlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnRpY2xlLWNhcmQtaW1nXCIgc3JjPXtgJHthcnRpY2xlLmltYWdlfWB9IGFsdD17YXJ0aWNsZS50aXRsZX0gdGl0bGU9e2FydGljbGUudGl0bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnthcnRpY2xlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj57YXJ0aWNsZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57YXJ0aWNsZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAuIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYWR0aW1lXCI+e2FydGljbGUucmVhZHRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhcnRpY2xlLWJ0blwiIG9uQ2xpY2sgPSB7aGFuZGxlU2hvd30+RGV0YWlsczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPEFydGljbGVNb2RhbCBzaG93ID0ge3Nob3d9IGhhbmRsZUNsb3NlID0ge2hhbmRsZUNsb3NlfSBhcnRpY2xlID0ge2FydGljbGV9IGhhbmRsZU9wZW49e2hhbmRsZUNoZWNraW5nVHJ1ZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgXG4gICAgc2V0Q2F0ZWdvcnksXG4gICAgY2xlYXJDYXRlZ29yeSxcbiAgICByZXNldExvYWRpbmdcbn0gZnJvbSAnLi9hY3Rpb25zL2FydGljbGVzQWN0aW9uJztcbmltcG9ydCB7XG4gICAgc2VsZWN0Q2F0ZWdvcnlTdGF0ZVxufSBmcm9tICcuL3N0YXRlcy9zdGF0ZXMnO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgQXJ0aWNsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc1BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGNhdGVnb3J5ID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q2F0ZWdvcnlTdGF0ZSk7XG4gICAgY29uc3QgaGFuZGxlU2VsZWN0PShlKT0+e1xuICAgICAgICBpZiAoZSAhPSBcIi0xXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZGlzUGF0Y2goc2V0Q2F0ZWdvcnkoZSkpO1xuICAgICAgICAgICAgaWYgKHJvdXRlci5wYXRobmFtZSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzUGF0Y2goY2xlYXJDYXRlZ29yeSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAnQWxsIGFydGljbGVzJ1xuICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnQ2hhbGxlbmdlcydcbiAgICAgICAgfSAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICdQcm9ncmFtbWluZydcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RHJvcGRvd25CdXR0b24gY2xhc3NOYW1lPSdhcnRpY2xlLWRyb3Bkb3duJyBpZD1cImRyb3Bkb3duLWJhc2ljLWJ1dHRvblwiIHRpdGxlPXtnZXRUaXRsZSgpfSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGV2ZW50S2V5PVwiLTFcIj5BbGw8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cIjBcIj4xMDBEYXlzT2ZDb2RlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gZXZlbnRLZXk9XCIxXCI+UHJvZ3JhbW1pbmc8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRHJvcGRvd25cbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgRnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gJ3JlYWN0LXBhZ2luYXRlJztcbmltcG9ydCB7XG4gICAgc2VsZWN0QXJ0aWNsZXNTdGF0ZSxcbiAgICBzZWxlY3RQYXJ0aWFsQXJ0aWNsZXNTdGF0ZSxcbiAgICBzZWxlY3RGaWx0ZXJlZEFydGljbGVzU3RhdGUsXG4gICAgc2VsZWN0SXNMb2FkaW5nU3RhdGUsXG4gICAgc2VsZWN0T2Zmc2V0U3RhdGUsXG4gICAgc2VsZWN0UGFnZUNvdW50U3RhdGUsXG4gICAgc2VsZWN0UGVycGFnZVN0YXRlLFxuICAgIHNlbGVjdFNob3dQbGFubmVyU3RhdGUsXG4gICAgc2VsZWN0TG9naW5TdGF0ZVxufSBmcm9tICcuL3N0YXRlcy9zdGF0ZXMnO1xuXG5pbXBvcnQgeyBcbiAgICBzZXRQYXJ0aWFsQXJ0aWNsZXMsXG4gICAgc2V0T2Zmc2V0LFxuICAgIHNldFBhZ2VDb3VudCxcbiAgICBzZXRMb2dvdXQsXG59IGZyb20gJy4vYWN0aW9ucy9hcnRpY2xlc0FjdGlvbic7XG5cbmltcG9ydCB7XG4gICAgQ1NTVHJhbnNpdGlvbixcbiAgICBUcmFuc2l0aW9uR3JvdXAsXG59IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQXJ0aWNsZVNlYXJjaEJhciBmcm9tICcuL0FydGljbGVTZWFyY2hCYXInO1xuaW1wb3J0IHsgdXNlTWVkaWFQcmVkaWNhdGUgfSBmcm9tIFwicmVhY3QtbWVkaWEtaG9va1wiO1xuaW1wb3J0IHsgQXJ0aWNsZVR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyJ1xuaW1wb3J0IHsgcmVmcmVzaFRva2VuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hY2NvdW50J1xuXG5jb25zdCBBcnRpY2xlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNQYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc0xvYWRpbmdTdGF0ZSk7XG4gICAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RBcnRpY2xlc1N0YXRlKTtcbiAgICBjb25zdCBmaWx0ZXJlZEFydGljbGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RmlsdGVyZWRBcnRpY2xlc1N0YXRlKTtcbiAgICBjb25zdCBwYXJ0aWFsQXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RQYXJ0aWFsQXJ0aWNsZXNTdGF0ZSk7XG4gICAgY29uc3QgcGVycGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBlcnBhZ2VTdGF0ZSk7XG4gICAgY29uc3QgcGFnZUNvdW50ID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGFnZUNvdW50U3RhdGUpO1xuICAgIGNvbnN0IG9mZnNldCA9IHVzZVNlbGVjdG9yKHNlbGVjdE9mZnNldFN0YXRlKTtcbiAgICBjb25zdCBzaG93UGxhbm5lciA9IHVzZVNlbGVjdG9yKHNlbGVjdFNob3dQbGFubmVyU3RhdGUpO1xuICAgIGNvbnN0IHNtYWxsZXJUaGFuODAwID0gdXNlTWVkaWFQcmVkaWNhdGUoXCIobWF4LXdpZHRoOiA4MDBweClcIik7XG4gICAgY29uc3QgaXNMb2dpbiA9IHVzZVNlbGVjdG9yKHNlbGVjdExvZ2luU3RhdGUpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnYXJ0aWNsZXMgdXBkYXRlZCcpXG4gICAgICAgIGNvbnN0IHBhcnRpYWxEYXRhID0gYXJ0aWNsZXMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwZXJwYWdlKVxuICAgICAgICBkaXNQYXRjaChzZXRQYXJ0aWFsQXJ0aWNsZXMocGFydGlhbERhdGEpKTtcbiAgICAgICAgdmFyIGNvdW50ID0gTWF0aC5jZWlsKGFydGljbGVzLmxlbmd0aCAvIHBlcnBhZ2UpO1xuICAgICAgICBkaXNQYXRjaChzZXRQYWdlQ291bnQoY291bnQpKTtcbiAgICB9LCBbYXJ0aWNsZXNdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyZWQgYXJ0aWNsZXMgdXBkYXRlZCcpXG4gICAgICAgIHZhciBjb3VudCA9IGZpbHRlcmVkQXJ0aWNsZXMubGVuZ3RoID09PSAwID8gXG4gICAgICAgIE1hdGguY2VpbChhcnRpY2xlcy5sZW5ndGggLyBwZXJwYWdlKSA6IE1hdGguY2VpbChmaWx0ZXJlZEFydGljbGVzLmxlbmd0aCAvIHBlcnBhZ2UpO1xuICAgICAgICBkaXNQYXRjaChzZXRQYWdlQ291bnQoY291bnQpKTtcbiAgICAgICAgc2V0UGFydGlhbERhdGEoKTtcbiAgICB9LCBbZmlsdGVyZWRBcnRpY2xlc10pXG5cbiAgICB1c2VFZmZlY3QoKCk9PiB7IFxuICAgICAgICB2YXIgY291bnQgPSBmaWx0ZXJlZEFydGljbGVzLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICBNYXRoLmNlaWwoYXJ0aWNsZXMubGVuZ3RoIC8gcGVycGFnZSkgOiBNYXRoLmNlaWwoZmlsdGVyZWRBcnRpY2xlcy5sZW5ndGggLyBwZXJwYWdlKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0UGFnZUNvdW50KGNvdW50KSk7XG4gICAgICAgIHNldFBhcnRpYWxEYXRhKCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgIH0sIFtvZmZzZXRdKVxuICAgIFxuICAgIFxuICAgIGNvbnN0IHNldFBhcnRpYWxEYXRhID0gKCkgPT4gIHtcbiAgICAgICAgY29uc3QgcGFydGlhbERhdGEgPSBmaWx0ZXJlZEFydGljbGVzLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICBhcnRpY2xlcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHBlcnBhZ2UpIDogZmlsdGVyZWRBcnRpY2xlcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHBlcnBhZ2UpO1xuICAgICAgICBkaXNQYXRjaChzZXRQYXJ0aWFsQXJ0aWNsZXMocGFydGlhbERhdGEpKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYWdlU2xlY3RlZCA9IGUgPT4ge1xuICAgICAgICAvL1JlZnJlc2ggSldUIHRva2VuIG9yIGxvZ291dFxuICAgICAgICByZWZyZXNoVG9rZW4oKTtcblxuICAgICAgICBkaXNQYXRjaChzZXRPZmZzZXQoZS5zZWxlY3RlZCAqIHBlcnBhZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzaG93UGxhbm5lciA9PT0gdHJ1ZSA/ICdhcnRpY2xlcy1oaWRlLXNpZGVyYmFyLWhlYWQnIDogJ2FydGljbGVzLWhpZGUtc2lkZXJiYXItaGVhZCBhcnRpY2xlcy1oaWRlLXNpZGVyYmFyLWhlYWQtcmVtb3ZlLWxlZnQnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIHtgTGVhcm5pbmcgbWF0ZXJpYWxzICgke2ZpbHRlcmVkQXJ0aWNsZXMubGVuZ3RoID09PSAwID8gYXJ0aWNsZXMubGVuZ3RoIDogZmlsdGVyZWRBcnRpY2xlcy5sZW5ndGh9KWB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgdGhlIGRldGFpbHMgYnV0dG9uIHRvIGNoZWNrIHRoZSBhcnRpY2xlLlxuICAgICAgICAgICAgICAgIDwvZGl2PikgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NpZ25pblwiPkxvZ2luIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgdG8gYWRkIGFydGljbGVzIG9yIHNraWxscyBpbiB5b3VyIGxlYXJuaW5nIHBsYW4gb3Igb3BlbiB0aGVtIGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICB7c21hbGxlclRoYW44MDAgJiYgPEFydGljbGVTZWFyY2hCYXIvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzaG93UGxhbm5lciAhPT0gdHJ1ZSA/ICdhcnRpY2xlcy1oaWRlLXNpZGVyYmFyJyA6ICdhcnRpY2xlcy1oaWRlLXNpZGVyYmFyIGFydGljbGVzLWhpZGUtc2lkZXJiYXItcmVtb3ZlLWxlZnQnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlcy1yb3cgcm93XCI+XG4gICAgICAgICAgICAgICAge2FydGljbGVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJ0aWNsZXMtc3Bpbm5lcic+e1xuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGlubmVyPlxuICAgICAgICAgICAgICAgIH08L2Rpdj4pIDogKFxuICAgICAgICAgICAgICAgICAgICAocGFydGlhbEFydGljbGVzIGFzIEFydGljbGVUeXBlW10pLm1hcChhcnRpY2xlPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICg8VHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT17YXJ0aWNsZS5pZH0gdGltZW91dD17NTAwfSBjbGFzc05hbWVzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSBrZXk9e2FydGljbGUuaWR9IGFydGljbGUgPSB7YXJ0aWNsZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPikpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3BhcnRpYWxBcnRpY2xlcy5sZW5ndGggPjAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXG4gICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2XCJ9XG4gICAgICAgICAgICAgICAgbmV4dExhYmVsPXtcIm5leHRcIn1cbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxuICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XG4gICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZVNsZWN0ZWR9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRpb25cIn1cbiAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9e1wicGFnZXMgcGFnaW5hdGlvblwifVxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwYXJ0aWFsQXJ0aWNsZXMubGVuZ3RoID4wICYmIDxGb290ZXIvPn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlcih7V3JhcHBlZENvbXBvbmVudDogQXJ0aWNsZUxpc3R9KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnLi4vLi9jc3MvYXJ0aWNsZU1vZGFsLmNzcydcbmltcG9ydCB7IEFydGljbGVNb2RhbFByb3AgfSBmcm9tICcuLi9jb21wb25lbnRzL3R5cGVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBBcnRpY2xlTW9kYWwgPSAoe3Nob3csIGhhbmRsZUNsb3NlLCBhcnRpY2xlLCBoYW5kbGVPcGVufTogQXJ0aWNsZU1vZGFsUHJvcCkgPT4ge1xuICAgIGNvbnN0IG9wZW5BcnRpY2xlID0gKCkgPT4geyAgICBcbiAgICAgICAgaGFuZGxlT3BlbigpO1xuICAgICAgICB3aW5kb3cub3BlbihhcnRpY2xlLnVybCwgJ19ibGFuaycpO1xuICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgc2hvdyA9IHtzaG93fSBvbkhpZGUgPSB7aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1tb2RhbC1pbWFnZScgc3JjPXthcnRpY2xlLmltYWdlfSBhbHQ9e2FydGljbGUudGl0bGV9IHRpdGxlPXthcnRpY2xlLnRpdGxlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FydGljbGUtbW9kYWwtdGl0bGUnPntgJHthcnRpY2xlLnRpdGxlfS4uLmB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FydGljbGUtbW9kYWwtc3VidGl0bGUnPntgJHthcnRpY2xlLnN1YnRpdGxlfS4uLmB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbW9kYWwtaXRlbSBkLWZsZXhcIj5BdXRob3I6IHthcnRpY2xlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1tb2RhbC1pdGVtIGQtZmxleFwiPkNhdGVnb3J5OiB7TnVtYmVyKGFydGljbGUuY2F0ZWdvcnkpID09PSAwID8gJzEwMCBkYXlzIG9mIGNvZGUnIDogJ0xlYXJuaW5nIG1hdGVyaWFscyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1tb2RhbC1pdGVtIGQtZmxleFwiPkRhdGVUaW1lOiB7YXJ0aWNsZS50aW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbW9kYWwtaXRlbSBkLWZsZXhcIj5SZWFkIHRpbWU6IHthcnRpY2xlLnJlYWR0aW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2sgPSB7aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrID0ge29wZW5BcnRpY2xlfT5cbiAgICAgICAgICAgICAgICBPcGVuIHRoZSBhcnRpY2xlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgIClcbn1cblxuQXJ0aWNsZU1vZGFsLnByb3BUeXBlcyA9e1xuICAgIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaGFuZGxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYXJ0aWNsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoYW5kbGVPcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTW9kYWxcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFxuICAgIHNlbGVjdEZpbHRlclRleHRTdGF0ZVxufSBmcm9tICcuL3N0YXRlcy9zdGF0ZXMnO1xuaW1wb3J0IHtcbiAgICBnZXRGaWx0ZXJlZEFydGljbGVzLFxuICAgIGNsZWFyRmlsdGVyIH0gZnJvbSAnLi9hY3Rpb25zL2FydGljbGVzQWN0aW9uJztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEFydGljbGVTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBkaXNQYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZmlsdGVyVGV4dCA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpbHRlclRleHRTdGF0ZSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyVGV4dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRleHQuY3VycmVudC52YWx1ZSA9IGZpbHRlclRleHQ7XG4gICAgICAgIH1cbiAgICB9LFtdKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGlmICh0ZXh0LmN1cnJlbnQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBkaXNQYXRjaChnZXRGaWx0ZXJlZEFydGljbGVzKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL2ApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNQYXRjaChjbGVhckZpbHRlcigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoICAgIFxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWFyY2hiYXJcIiByZWY9e3RleHR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJleCwgUmVhY3RKUywgbmV4dC5qcywgR29sYW5nLi4uXCIgb25DaGFuZ2U9e29uQ2hhbmdlfS8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU2VhcmNoQmFyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtDb21tYW5kSGVhZFByb3AgfSBmcm9tICcuLi9jb21wb25lbnRzL3R5cGVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBDb21tb25IZWFkID0gKHt0aXRsZSwgdXJsLCBkZXNjcmlwdGlvbiwga2V5d29yZHMsIGpzb25MZH06IENvbW1hbmRIZWFkUHJvcCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSmVuSHN1YW4vQUxheW1hbi9tYXN0ZXIvdmlld3MvaW1hZ2VzL2FsYXltYW5pY29uLnBuZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIj48L21ldGE+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBKZW5Ic3VhbkhzaWVoXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQEplbkhzdWFuSHNpZWhcIiAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9Lz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9pZGVhcy1nZXRzdGFydGVkLWNvdmVyLnBuZ1wiLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0vPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZHN9Lz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiSmVuLUhzdWFuIEhzaWVoIChTZWFuIEhzaWVoKVwiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImRucy1mZXRjaFwiIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17dXJsfS8+XG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICB0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBqc29uTGQgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgIClcbn1cblxuQ29tbW9uSGVhZC5wcm9wVHlwZXMgPXtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLCBcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGtleXdvcmRzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAganNvbkxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSGVhZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vY3NzL2Zvb3Rlci5jc3MnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgICBzZWxlY3RTaG93UGxhbm5lclN0YXRlXG59IGZyb20gJy4vc3RhdGVzL3N0YXRlcyc7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBzaG93UGxhbm5lciA9IHVzZVNlbGVjdG9yKHNlbGVjdFNob3dQbGFubmVyU3RhdGUpO1xuICAgIGNvbnN0IHR3aXR0ZXIgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy90d2l0dGVyLnBuZyc7XG4gICAgY29uc3QgdHdpdHRlclVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL0plbkhzdWFuSHNpZWgnO1xuICAgIFxuICAgIGNvbnN0IGluc3RhZ3JhbSA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSmVuSHN1YW4vQUxheW1hbi9tYXN0ZXIvdmlld3MvaW1hZ2VzL2luc3RhZ3JhbS5wbmcnO1xuICAgIGNvbnN0IGluc3RhZ3JhbVVybCA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NlYW5oc2dvZ28vJztcbiAgICBcbiAgICBjb25zdCBmYWNlYm9vayA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSmVuSHN1YW4vQUxheW1hbi9tYXN0ZXIvdmlld3MvaW1hZ2VzL2ZhY2Vib29rLnBuZyc7XG4gICAgY29uc3QgZmFjZWJvb2tVcmwgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ltYWxheW1hbic7XG4gICAgXG4gICAgY29uc3QgZ2l0aHViID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9KZW5Ic3Vhbi9BTGF5bWFuL21hc3Rlci92aWV3cy9pbWFnZXMvZ2l0aHViLnBuZyc7XG4gICAgY29uc3QgZ2l0aHViVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9KZW5Ic3Vhbic7XG4gICAgXG4gICAgY29uc3QgbGlua2VkaW4gPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9saW5rZWRpbi5wbmcnO1xuICAgIGNvbnN0IGxpbmtlZGluVXJsID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qZW4taHN1YW4taHNpZWgtNmExMzM0N2EvJztcbiAgICBcbiAgICBjb25zdCB5b3V0dWJlID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9KZW5Ic3Vhbi9BTGF5bWFuL21hc3Rlci92aWV3cy9pbWFnZXMveW91dHViZS5wbmcnO1xuICAgIGNvbnN0IHlvdXR1YmVVcmwgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1F6NmEzaV9rbXV1WVhpMGhPZDhFV1EnO1xuICAgIFxuICAgIGNvbnN0IG1lZGl1bSA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSmVuSHN1YW4vQUxheW1hbi9tYXN0ZXIvdmlld3MvaW1hZ2VzL21lZGl1bS1pY29uLnBuZyc7XG4gICAgY29uc3QgbWVkaXVtVXJsID0gJ2h0dHBzOi8vbWVkaXVtLmNvbS9hLWxheW1hbic7XG4gICAgXG4gICAgY29uc3QgZGV2dG8gPSAnaHR0cHM6Ly9kMmZsdGl4MHYyZTBzYi5jbG91ZGZyb250Lm5ldC9kZXYtYmFkZ2Uuc3ZnJztcbiAgICBjb25zdCBkZXZ0b1VybCA9ICdodHRwczovL2Rldi50by9qZW5oc3Vhbic7XG4gICAgXG4gICAgY29uc3QgY29weXJpZ2h0VGV4dCA9IFwiQDIwMjAgSmVuLUhzdWFuIEhzaWVoLiBBbGwgcmlnaHQgcmVzZXJ2ZWQuXCJcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1vbi1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzaG93UGxhbm5lciAhPT0gdHJ1ZSA/ICdjb21tb24tZm9vdGVyLWdyaWQtYm94JyA6ICdjb21tb24tZm9vdGVyLWdyaWQtYm94IGNvbW1vbi1mb290ZXItZ3JpZC1ib3gtbW92ZS1sZWZ0J31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsb2dvblwiPlxuICAgICAgICAgICAgICAgICAgICBMZWFybiwgVGhpbmssIGFuZCBJbXByb3ZlIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vamVuaHN1YW4uZ2l0aHViLmlvL0FMYXltYW4vcHJvZmlsZS5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vSmVuSHN1YW4vQUxheW1hbi9tYXN0ZXIvdmlld3MvaW1hZ2VzL0plbkhzdWFuLnBuZ1wiIGFsdD1cIlNlYW4gSHNpZWgncyB3ZWJzaXRlXCIgdGl0bGU9XCJTZWFuIEhzaWVoJ3Mgd2Vic2l0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3ItbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSmVuLUhzdWFuIEhzaWVoXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9zaWdudXBgKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAgICAgICAgIH19PkdldCBTdGF0cmVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJzY3JpYmUtc29jaWFsLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dHdpdHRlclVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3R3aXR0ZXJ9IGFsdD1cIlNlYW4gSHNpZWgncyBUd2lpdGVyXCIgdGl0bGU9XCJTZWFuIEhzaWVoJ3MgVHdpaXRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZmFjZWJvb2tVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmYWNlYm9va30gYWx0PVwiQSBMYXltYW4ncyBGYWNlYm9va1wiIHRpdGxlPVwiQSBMYXltYW4ncyBGYWNlYm9va1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Z2l0aHViVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2l0aHVifSBhbHQ9XCJBIExheW1hbidzIEZhY2Vib29rXCIgdGl0bGU9XCJBIExheW1hbidzIEZhY2Vib29rXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt5b3V0dWJlVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17eW91dHViZX0gYWx0PVwiU2VhbiBIc2llaCdzIFlvdXR1YmVcIiB0aXRsZT1cIlNlYW4gSHNpZWgncyBZb3V0dWJlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWVkaXVtVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVkaXVtfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmtlZGluVXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlua2VkaW59IGFsdD1cIlNlYW4gSHNpZWgncyBMaW5rZWRpblwiIHRpdGxlPVwiU2VhbiBIc2llaCdzIExpbmtlZGluXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJzY3JpYmUtY29weXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb3B5cmlnaHRUZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5pdEdBLCBsb2dQYWdlVmlldyB9IGZyb20gXCIuL2dvb2dsZUFuYWx5dGljc1wiXG5cblxuZXhwb3J0IGNsYXNzIEdhTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLkdBX0lOSVRJQUxJWkVEKSB7XG4gICAgICAgICAgaW5pdEdBKCk7XG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLkdBX0lOSVRJQUxJWkVEID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxvZ1BhZ2VWaWV3KClcbiAgICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJy4uL2Nzcy9uYXZiYXIuY3NzJ1xuaW1wb3J0IHtcbiAgICBzZWxlY3RTaG93UGxhbm5lclN0YXRlLFxuICAgIHNlbGVjdExvZ2luU3RhdGUsXG4gICAgc2VsZWN0VXNlcm5hbWVTdGF0ZVxufSBmcm9tICcuL3N0YXRlcy9zdGF0ZXMnO1xuXG5pbXBvcnQgeyBcbiAgICBzZXRQbGFubmVyLFxuICAgIHNldExvZ291dCxcbiAgICBzZXRVc2VybmFtZSxcbiAgICBzZXRBY2Nlc3NUb2tlbixcbiAgICBzZXRFbWFpbCxcbiAgICBzZXRMb2dpbixcbiAgICBzZXRGaW5pc2hlZEFydGljbGVzLFxuICAgIHNldEJvb2ttYXJrcyxcbiAgICBzZXRQcm92aWRlcixcbiAgICBzZXRVc2VySWRcbn0gZnJvbSAnLi9hY3Rpb25zL2FydGljbGVzQWN0aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgZGlzUGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHNob3dQbGFubmVyRmxhZyA9IHVzZVNlbGVjdG9yKHNlbGVjdFNob3dQbGFubmVyU3RhdGUpO1xuICAgIGNvbnN0IGlzTG9naW4gPSB1c2VTZWxlY3RvcihzZWxlY3RMb2dpblN0YXRlKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJuYW1lU3RhdGUpO1xuXG4gICAgY29uc3Qgc2hvd1BsYW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaG93UGxhbm5lckZsYWcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIaWRlIFBsYW5uZXInKVxuICAgICAgICAgICAgZGlzUGF0Y2goc2V0UGxhbm5lcihmYWxzZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3cgUGxhbm5lcicpXG4gICAgICAgICAgICBkaXNQYXRjaChzZXRQbGFubmVyKHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFNldExvZ291dEZvckxvY2FsU29yYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYm9va21hcmtzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dpbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmaW5pc2hlZEFydGljbGVzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvdmlkZXInKTtcbiAgICB9XG5cbiAgICBjb25zdCBTZXRMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGRpc1BhdGNoKHNldExvZ291dCgpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0VXNlcm5hbWUoJycpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0VXNlcklkKC0xKSk7XG4gICAgICAgIGRpc1BhdGNoKHNldEVtYWlsKCcnKSk7XG4gICAgICAgIGRpc1BhdGNoKHNldEZpbmlzaGVkQXJ0aWNsZXMoW10pKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0QWNjZXNzVG9rZW4oJycpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0UHJvdmlkZXIoJycpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0Qm9va21hcmtzKFtdKSk7XG4gICAgfVxuXG4gICAgY29uc3QgU2V0TG9naW4gPSAoZW1haWwsIHVzZXJuYW1lKSA9PiB7XG4gICAgICAgIGlmIChlbWFpbCAhPT0gbnVsbCAmJiBlbWFpbCAhPT0gdW5kZWZpbmVkICYmIGVtYWlsLmxlbmd0aCA+MCApIHtcbiAgICAgICAgICAgIGRpc1BhdGNoKHNldEVtYWlsKGVtYWlsKSk7XG4gICAgICAgICAgICAvL2xvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgZW1haWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VybmFtZSAhPT0gbnVsbCAmJiB1c2VybmFtZSAhPT0gdW5kZWZpbmVkICYmIHVzZXJuYW1lLmxlbmd0aCA+MCApIHtcbiAgICAgICAgICAgIGRpc1BhdGNoKHNldFVzZXJuYW1lKHVzZXJuYW1lKSk7XG4gICAgICAgICAgICAvL2xvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXNQYXRjaChzZXRMb2dpbigpKTtcbiAgICAgICAgLy9sb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5cIiwgXCJ0cnVlXCIpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgY29uc3QgbG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luXCIpO1xuICAgICAgICBpZiAobG9naW4gIT09IG51bGwgJiYgbG9naW4gPT09ICd0cnVlJykge1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgU2V0TG9naW4oZW1haWwsIHVzZXJuYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBpZiAoaXNMb2dpbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpc1BhdGNoKHNldFVzZXJuYW1lKCcnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XG4gICAgICAgICAgICBkaXNQYXRjaChzZXRVc2VybmFtZSh1c2VybmFtZSkpO1xuICAgICAgICB9XG4gICAgfSwgW2lzTG9naW5dKVxuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICBTZXRMb2dvdXQoKTtcbiAgICAgICAgU2V0TG9nb3V0Rm9yTG9jYWxTb3JhZ2UoKTtcbiAgICAgICAgaWYgKHJvdXRlci5wYXRobmFtZSAhPT0gJ3NpZ25pbicpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvc2lnbmluYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPE5hdmJhciBiZz1cImRhcmtcIiBleHBhbmQ9XCJsZ1wiIHZhcmlhbnQ9XCJkYXJrXCIgZml4ZWQ9XCJ0b3BcIj5cbiAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9hbGF5bWFuaWNvbi5wbmdcIlxuICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3AgbmF2YmFyLWxvZ28taW1nXCJcbiAgICAgICAgYWx0PVwiTGVhcm5pbmcgQm9vc3RlclwiXG4gICAgICAgIHRpdGxlPVwiTGVhcm5pbmcgQm9vc3RlciBmcm9tIFNlYW4gSHNpZWhcIi8+XG4gICAgICBEYWlseSBMZWFybmluZzwvTmF2YmFyLkJyYW5kPlxuICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiYWJvdXRcIj4gXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAge2lzTG9naW4gJiYgKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCJib29rbWFya3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jvb2ttYXJrc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlBsYW5zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cImFjaGlldmVtZW50c1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNoaWV2ZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QWNoaWV2ZW1lbnRzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L05hdj5cbiAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiZmVlZFwiPiBcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ZlZWQvXCI+UlNTPC9hPlxuICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgPC9OYXY+XG4gICAgICAgIDxOYXY+XG4gICAgICAgIHshaXNMb2dpbiAmJiAoXG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9J0FjY291bnQnIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL3NpZ251cFwiPlxuICAgICAgICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgKX1cbiAgICAgICAge2lzTG9naW4gJiYgKFxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXt1c2VybmFtZX0gaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvblNlbGVjdD17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXRcbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICApfVxuICAgICAgICA8L05hdj5cbiAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgPC9OYXZiYXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQge1xuICAgIHNlbGVjdEFydGljbGVzU3RhdGUsXG4gICAgc2VsZWN0UGFydGlhbEFydGljbGVzU3RhdGUsXG4gICAgc2VsZWN0RmlsdGVyZWRBcnRpY2xlc1N0YXRlLFxuICAgIHNlbGVjdElzTG9hZGluZ1N0YXRlLFxuICAgIHNlbGVjdE9mZnNldFN0YXRlLFxuICAgIHNlbGVjdFBhZ2VDb3VudFN0YXRlLFxuICAgIHNlbGVjdFBlcnBhZ2VTdGF0ZSxcbiAgICBzZWxlY3RTaG93UGxhbm5lclN0YXRlLFxuICAgIHNlbGVjdFByb3ZpZGVyU3RhdGUsXG4gICAgc2VsZWN0VXNlcklkU3RhdGUsXG4gICAgc2VsZWN0RW1haWxTdGF0ZSxcbiAgICBzZWxlY3RBY2Nlc3NUb2tlblN0YXRlLFxuICAgIHNlbGVjdExvZ2luU3RhdGVcbn0gZnJvbSAnLi9zdGF0ZXMvc3RhdGVzJztcblxuaW1wb3J0IHsgXG4gICAgZ2V0QXJ0aWNsZXMsXG4gICAgc2V0UGFydGlhbEFydGljbGVzLFxuICAgIHNldE9mZnNldCxcbiAgICBzZXRQYWdlQ291bnQsXG4gICAgc2V0TG9nb3V0LFxuICAgIHNldEJvb2ttYXJrcyxcbiAgICBzZXRVc2VySWQsXG4gICAgc2V0VXNlcm5hbWUsXG4gICAgc2V0QWNjZXNzVG9rZW4sXG4gICAgc2V0UHJvdmlkZXIsXG4gICAgc2V0RmluaXNoZWRBcnRpY2xlcyxcbiAgICBzZXRFbWFpbFxufSBmcm9tICcuL2FjdGlvbnMvYXJ0aWNsZXNBY3Rpb24nO1xuaW1wb3J0IHsgcmVmcmVzaFRva2VuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hY2NvdW50J1xuaW1wb3J0IHsgUGFnZVdyYXBwZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9jb21wb25lbnRzL3R5cGVzJ1xuXG5jb25zdCBQYWdlV3JhcHBlcjogUGFnZVdyYXBwZXJJbnRlcmZhY2UgPSAoe1dyYXBwZWRDb21wb25lbnR9KSA9PiAoKT0+IHtcbiAgICBjb25zdCBkaXNQYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RBcnRpY2xlc1N0YXRlKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIC8vUmVmcmVzaCBKV1QgdG9rZW4gb3IgbG9nb3V0XG4gICAgICAgIHJlZnJlc2hUb2tlbihTZXRMb2dvdXQpO1xuXG4gICAgICAgIC8vRmV0Y2ggYXJ0aWNsZXNcbiAgICAgICAgaWYgKGFydGljbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIGFydGljbGVzJylcbiAgICAgICAgICAgIGRpc1BhdGNoKGdldEFydGljbGVzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9GZXRjaCBMb2FkIGJvb2ttYXJrcyBhbmQgZmluaXNoZWQgYXJ0aWNsZXNcbiAgICAgICAgdmFyIGJvb2ttYXJrc0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvb2ttYXJrc1wiKTtcbiAgICAgICAgaWYgKGJvb2ttYXJrc0pzb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBib29rbWFya3NMaXN0ID0gYm9va21hcmtzSnNvbi5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZGlzUGF0Y2goc2V0Qm9va21hcmtzKGJvb2ttYXJrc0xpc3QuZmlsdGVyKGJvb2ttYXJrID0+IGJvb2ttYXJrICE9PSAnJykpKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbHRlckFydGljbGVzSnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlsdGVyQXJ0aWNsZXNcIik7XG4gICAgICAgIGlmIChmaWx0ZXJBcnRpY2xlc0pzb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJBcnRpY2xlc0xpc3QgPSBmaWx0ZXJBcnRpY2xlc0pzb24uc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGRpc1BhdGNoKHNldEZpbmlzaGVkQXJ0aWNsZXMoZmlsdGVyQXJ0aWNsZXNMaXN0LmZpbHRlcihmaWx0ZXJBcnRpY2xlID0+IGZpbHRlckFydGljbGUgIT09ICcnKSkpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IFNldExvZ291dCA9ICgpID0+IHtcbiAgICAgICAgZGlzUGF0Y2goc2V0TG9nb3V0KCkpO1xuICAgICAgICBkaXNQYXRjaChzZXRVc2VybmFtZSgnJykpO1xuICAgICAgICBkaXNQYXRjaChzZXRVc2VySWQoLTEpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0RW1haWwoJycpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0RmluaXNoZWRBcnRpY2xlcyhbXSkpO1xuICAgICAgICBkaXNQYXRjaChzZXRBY2Nlc3NUb2tlbignJykpO1xuICAgICAgICBkaXNQYXRjaChzZXRQcm92aWRlcignJykpO1xuICAgICAgICBkaXNQYXRjaChzZXRCb29rbWFya3MoW10pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnRpY2xlU2VhcmNoQmFyIGZyb20gJy4vQXJ0aWNsZVNlYXJjaEJhcic7XG5pbXBvcnQgQXJ0aWNsZURyb3Bkb3duIGZyb20gJy4vQXJ0aWNsZURyb3Bkb3duJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnLi4vY3NzL3NpZGViYXIuY3NzJ1xuaW1wb3J0IHtcbiAgICBzZWxlY3RTaG93UGxhbm5lclN0YXRlLFxuICAgIHNlbGVjdExvZ2luU3RhdGVcbn0gZnJvbSAnLi9zdGF0ZXMvc3RhdGVzJztcblxuaW1wb3J0IHsgXG4gICAgc2V0UGxhbm5lclxufSBmcm9tICcuL2FjdGlvbnMvYXJ0aWNsZXNBY3Rpb24nO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VNZWRpYVByZWRpY2F0ZSB9IGZyb20gXCJyZWFjdC1tZWRpYS1ob29rXCI7XG5cbmNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzUGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHNob3dQbGFubmVyRmxhZyA9IHVzZVNlbGVjdG9yKHNlbGVjdFNob3dQbGFubmVyU3RhdGUpO1xuICAgIGNvbnN0IGlzTG9naW4gPSB1c2VTZWxlY3RvcihzZWxlY3RMb2dpblN0YXRlKTtcbiAgICBjb25zdCBzbWFsbGVyVGhhbjcwMCA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1heC13aWR0aDogNzAwcHgpXCIpO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgaWYgKHNtYWxsZXJUaGFuNzAwKSB7XG4gICAgICAgICAgICBkaXNQYXRjaChzZXRQbGFubmVyKGZhbHNlKSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3Qgc2hvd1BsYW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaG93UGxhbm5lckZsYWcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIaWRlIFBsYW5uZXInKVxuICAgICAgICAgICAgZGlzUGF0Y2goc2V0UGxhbm5lcihmYWxzZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3cgUGxhbm5lcicpXG4gICAgICAgICAgICBkaXNQYXRjaChzZXRQbGFubmVyKHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcicgc3R5bGU9e3t3aWR0aDogc2hvd1BsYW5uZXJGbGFnID09IHRydWUgPyAnMjMlJyA6ICcyJSd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWdyaWQtYm94Jz5cbiAgICAgICAgICAgICAgICB7c2hvd1BsYW5uZXJGbGFnID09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLXRpdGxlJz5MZXQncyBDcmVhdGUgWW91ciBMZWFybmluZyBQbGFuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc3VidGl0bGVcIj5DaG9vc2UgdGhlIHRvcGljcyBhYm91dCBTb2Z0d2FyZSBkZXZlbG9wbWVudCwgVGVzdGluZywgRGV2T3BzLCBvciAxMDBEYXlzT2ZDb2RlIHRvIGJ1aWxkIHRoZSBwZXJzb25hbCBsZWFybmluZyBwbGFuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhci1kcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhci1kcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZURyb3Bkb3duLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXItc2VhcmNoJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLXNlYXJjaC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZVNlYXJjaEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3Nob3dQbGFubmVyRmxhZyA9PSB0cnVlID8gKCAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhci1yZW1vdmUtbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiIG9uQ2xpY2sgPSB7c2hvd1BsYW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9tb3ZlLWxlZnQucG5nXCIgYWx0PVwiSGlkZVwiIHRpdGxlPVwiSGlkZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLXJlbW92ZS1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tb1wiIG9uQ2xpY2sgPSB7c2hvd1BsYW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0plbkhzdWFuL0FMYXltYW4vbWFzdGVyL3ZpZXdzL2ltYWdlcy9tb3ZlLXJpZ2h0LnBuZ1wiIGFsdD1cIlNob3dcIiB0aXRsZT1cIlNob3dcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS9yZW5ldy10b2tlbi8nKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBTZXRMb2dvdXQoKTtcbiAgICAgICAgU2V0TG9nb3V0Rm9yTG9jYWxTb3JhZ2UoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgU2V0TG9nb3V0Rm9yTG9jYWxTb3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xvZ2luJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJuYW1lJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpbmlzaGVkQXJ0aWNsZXMnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYm9va21hcmtzJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb3ZpZGVyJyk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy9UeXBlc1xuaW1wb3J0IHsgXG4gICAgR0VUX0FSVElDTEVTLFxuICAgIEdFVF9GSUxURVJFRF9BUlRJQ0xFUyxcbiAgICBTRVRfUEFSVElBTF9BUlRJQ0xFUyxcbiAgICBDTEVBUl9GSUxURVIsXG4gICAgU0VUX0NBVEVHT1JZLFxuICAgIENMRUFSX0NBVEVHT1JZLFxuICAgIFJFU0VUX0xPQURJTkcsXG4gICAgU0VUX1BMQU5ORVIsXG4gICAgU0VUX1BFUlBBR0UsXG4gICAgU0VUX1BBUEVfQ09VTlQsXG4gICAgU0VUX09GRlNFVCxcbiAgICBTRVRfTE9BRElORyxcbiAgICBTRVRfTE9HSU4sXG4gICAgU0VUX0xPR09VVCxcbiAgICBTRVRfQUNDRVNTX1RPS0VOLFxuICAgIFNFVF9FTUFJTCxcbiAgICBTRVRfVVNFUk5BTUUsXG4gICAgU0VUX0VSUk9STUVTU0FHRSxcbiAgICBSRU1PVkVfQk9PS01BUkssXG4gICAgU0VUX0JPT0tNQVJLUyxcbiAgICBTRVRfTUFSS0FTRklOSVNIRUQsXG4gICAgU0VUX1VOTUFSS0FTRklOSVNIRUQsXG4gICAgU0VUX1BST1ZJREVSLFxuICAgIFNFVF9VU0VSSUQsXG4gICAgQXJ0aWNsZVR5cGUgXG59IGZyb20gJy4uL3R5cGVzJ1xuXG4vL0FjdGlvbnNcbmV4cG9ydCBpbnRlcmZhY2UgR2V0QXJ0aWNsZXNBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBHRVRfQVJUSUNMRVNcbiAgICByZWFkb25seSBwYXlsb2FkOiBBcnJheTxBcnRpY2xlVHlwZT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRGaWx0ZXJlZEFydGljbGVzQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgR0VUX0ZJTFRFUkVEX0FSVElDTEVTXG4gICAgcmVhZG9ubHkgcGF5bG9hZDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0UGFydGlhbEFydGljbGVzQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgU0VUX1BBUlRJQUxfQVJUSUNMRVNcbiAgICByZWFkb25seSBwYXlsb2FkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRQZXJwYWdlQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgU0VUX1BFUlBBR0VcbiAgICByZWFkb25seSBwYXlsb2FkOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRQYWdlQ291bnRBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBTRVRfUEFQRV9DT1VOVFxuICAgIHJlYWRvbmx5IHBheWxvYWQ6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldE9mZnNldEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9PRkZTRVRcbiAgICByZWFkb25seSBwYXlsb2FkOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRMb2FkaW5nQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgU0VUX0xPQURJTkdcbiAgICByZWFkb25seSBwYXlsb2FkOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJGaWx0ZXJBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBDTEVBUl9GSUxURVJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRMb2dpbkFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9MT0dJTlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldExvZ291dEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9MT0dPVVRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRBY2Nlc3NUb2tlbkFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9BQ0NFU1NfVE9LRU5cbiAgICByZWFkb25seSBwYXlsb2FkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRDYXRlZ29yeUFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9DQVRFR09SWVxuICAgIHJlYWRvbmx5IHBheWxvYWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyQ2F0ZWdvcnlBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBDTEVBUl9DQVRFR09SWVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2V0TG9hZGluZ0FjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFJFU0VUX0xPQURJTkdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRQbGFubmVyQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgU0VUX1BMQU5ORVJcbiAgICByZWFkb25seSBwYXlsb2FkOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0RW1haWxBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBTRVRfRU1BSUxcbiAgICByZWFkb25seSBwYXlsb2FkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRVc2VybmFtZUFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9VU0VSTkFNRVxuICAgIHJlYWRvbmx5IHBheWxvYWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldEVycm9yTWVzc2FnZUFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9FUlJPUk1FU1NBR0VcbiAgICByZWFkb25seSBwYXlsb2FkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVCb29rbWFya0FjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFJFTU9WRV9CT09LTUFSS1xuICAgIHJlYWRvbmx5IHBheWxvYWQ6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldEJvb2ttYXJrc0FjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9CT09LTUFSS1NcbiAgICByZWFkb25seSBwYXlsb2FkOiBBcnJheTxudW1iZXI+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0RmluaXNoZWRBcnRpY2xlc0FjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFNFVF9NQVJLQVNGSU5JU0hFRFxuICAgIHJlYWRvbmx5IHBheWxvYWQ6IEFycmF5PG51bWJlcj5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVGaW5pc2hlZEFydGljbGVBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBTRVRfVU5NQVJLQVNGSU5JU0hFRFxuICAgIHJlYWRvbmx5IHBheWxvYWQ6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldFByb3ZpZGVyQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgU0VUX1BST1ZJREVSXG4gICAgcmVhZG9ubHkgcGF5bG9hZDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0VXNlcklkQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiB0eXBlb2YgU0VUX1VTRVJJRFxuICAgIHJlYWRvbmx5IHBheWxvYWQ6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdmFyIHJlcyA9IHtkYXRhOltdfTtcbiAgICB0cnkge1xuICAgICAgICByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYXJ0aWNsZXMnKTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdFVF9BUlRJQ0xFUywgXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGF9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vcmVzLmRhdGEgPSBlcnJvcjtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpbHRlcmVkQXJ0aWNsZXMgPSB0ZXh0ID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdFVF9GSUxURVJFRF9BUlRJQ0xFUywgXG4gICAgICAgIHBheWxvYWQ6IHRleHR9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0UGFydGlhbEFydGljbGVzID0gYXJ0aWNsZXMgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX1BBUlRJQUxfQVJUSUNMRVMsIFxuICAgICAgICBwYXlsb2FkOiBhcnRpY2xlc30pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gaXNMb2FkaW5nID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFVF9MT0FESU5HLCBcbiAgICAgICAgcGF5bG9hZDogaXNMb2FkaW5nfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldE9mZnNldCA9IG9mZnNldCA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRVRfT0ZGU0VULCBcbiAgICAgICAgcGF5bG9hZDogb2Zmc2V0fSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldFBhZ2VDb3VudCA9IHBhZ2VDb3VudCA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRVRfUEFQRV9DT1VOVCwgXG4gICAgICAgIHBheWxvYWQ6IHBhZ2VDb3VudH0pXG59XG5cbmV4cG9ydCBjb25zdCBjbGVhckZpbHRlciA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogQ0xFQVJfRklMVEVSfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExvZ2luID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBTRVRfTE9HSU59KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TG9nb3V0ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBTRVRfTE9HT1VUfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldEFjY2Vzc1Rva2VuID0gdG9rZW4gPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX0FDQ0VTU19UT0tFTiwgXG4gICAgICAgIHBheWxvYWQ6IHRva2VufSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldENhdGVnb3J5ID0gY2F0ZWdvcnkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX0NBVEVHT1JZLCBcbiAgICAgICAgcGF5bG9hZDogY2F0ZWdvcnl9KVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJDYXRlZ29yeSA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogQ0xFQVJfQ0FURUdPUll9KVxufVxuXG5leHBvcnQgY29uc3QgcmVzZXRMb2FkaW5nID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBSRVNFVF9MT0FESU5HfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldFBsYW5uZXIgPSBzaG93UGxhbm5lciA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRVRfUExBTk5FUiwgXG4gICAgICAgIHBheWxvYWQ6IHNob3dQbGFubmVyfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldEVtYWlsID0gZW1haWwgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX0VNQUlMLCBcbiAgICAgICAgcGF5bG9hZDogZW1haWx9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXNlcm5hbWUgPSB1c2VybmFtZSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRVRfVVNFUk5BTUUsIFxuICAgICAgICBwYXlsb2FkOiB1c2VybmFtZX0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRFcnJvck1lc3NhZ2UgPSBtZXNzYWdlID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFVF9FUlJPUk1FU1NBR0UsIFxuICAgICAgICBwYXlsb2FkOiBtZXNzYWdlfSlcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUJvb2ttYXJrID0gaWQgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLLCBcbiAgICAgICAgcGF5bG9hZDogaWR9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Qm9va21hcmtzID0gYm9va21hcmtzID0+IGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFVF9CT09LTUFSS1MsIFxuICAgICAgICBwYXlsb2FkOiBib29rbWFya3N9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0RmluaXNoZWRBcnRpY2xlcyA9IGZpbmlzaGVkQXJ0aWNsZXMgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX01BUktBU0ZJTklTSEVELCBcbiAgICAgICAgcGF5bG9hZDogZmluaXNoZWRBcnRpY2xlc30pXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGaW5pc2hlZEFydGljbGUgPSBmaW5pc2hlZEFydGljbGUgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX1VOTUFSS0FTRklOSVNIRUQsIFxuICAgICAgICBwYXlsb2FkOiBmaW5pc2hlZEFydGljbGV9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0UHJvdmlkZXIgPSBwcm92aWRlciA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRVRfUFJPVklERVIsIFxuICAgICAgICBwYXlsb2FkOiBwcm92aWRlcn0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRVc2VySWQgPSB1c2VySWQgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX1VTRVJJRCwgXG4gICAgICAgIHBheWxvYWQ6IHVzZXJJZH0pXG59XG5cbiIsImltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiXG5cbmV4cG9ydCBjb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTE3MDE2MDAwMi0xXCIpXG59XG5cbmV4cG9ydCBjb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG59IiwiaW1wb3J0IHtcbiAgICBHZXRBcnRpY2xlc0FjdGlvbixcbiAgICBHZXRGaWx0ZXJlZEFydGljbGVzQWN0aW9uLFxuICAgIFNldFBhcnRpYWxBcnRpY2xlc0FjdGlvbixcbiAgICBDbGVhckZpbHRlckFjdGlvbixcbiAgICBTZXRDYXRlZ29yeUFjdGlvbixcbiAgICBDbGVhckNhdGVnb3J5QWN0aW9uLFxuICAgIFJlc2V0TG9hZGluZ0FjdGlvbixcbiAgICBTZXRPZmZzZXRBY3Rpb24sXG4gICAgU2V0UGVycGFnZUFjdGlvbixcbiAgICBTZXRQYWdlQ291bnRBY3Rpb24sXG4gICAgU2V0UGxhbm5lckFjdGlvbixcbiAgICBTZXRMb2FkaW5nQWN0aW9uLFxuICAgIFNldExvZ2luQWN0aW9uLFxuICAgIFNldExvZ291dEFjdGlvbixcbiAgICBTZXRBY2Nlc3NUb2tlbkFjdGlvbixcbiAgICBTZXRFbWFpbEFjdGlvbixcbiAgICBTZXRVc2VybmFtZUFjdGlvbixcbiAgICBTZXRFcnJvck1lc3NhZ2VBY3Rpb24sXG4gICAgU2V0Qm9va21hcmtzQWN0aW9uLFxuICAgIFJlbW92ZUJvb2ttYXJrQWN0aW9uLFxuICAgIFNldEZpbmlzaGVkQXJ0aWNsZXNBY3Rpb24sXG4gICAgUmVtb3ZlRmluaXNoZWRBcnRpY2xlQWN0aW9uLFxuICAgIFNldFVzZXJJZEFjdGlvbixcbiAgICBTZXRQcm92aWRlckFjdGlvblxufSBcbmZyb20gJy4uL2FjdGlvbnMvYXJ0aWNsZXNBY3Rpb24nXG5pbXBvcnQgeyBSb290U3RhdGV9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xuXG4vL1R5cGVzXG5pbXBvcnQgeyBcbiAgICBHRVRfQVJUSUNMRVMsXG4gICAgR0VUX0ZJTFRFUkVEX0FSVElDTEVTLFxuICAgIFNFVF9QQVJUSUFMX0FSVElDTEVTLFxuICAgIENMRUFSX0ZJTFRFUixcbiAgICBTRVRfQ0FURUdPUlksXG4gICAgQ0xFQVJfQ0FURUdPUlksXG4gICAgUkVTRVRfTE9BRElORyxcbiAgICBTRVRfUExBTk5FUixcbiAgICBTRVRfUEFQRV9DT1VOVCxcbiAgICBTRVRfUEVSUEFHRSxcbiAgICBTRVRfT0ZGU0VULFxuICAgIFNFVF9MT0FESU5HLFxuICAgIFNFVF9MT0dJTixcbiAgICBTRVRfTE9HT1VULFxuICAgIFNFVF9BQ0NFU1NfVE9LRU4sXG4gICAgU0VUX0VNQUlMLFxuICAgIFNFVF9VU0VSTkFNRSxcbiAgICBTRVRfRVJST1JNRVNTQUdFLFxuICAgIFJFTU9WRV9CT09LTUFSSyxcbiAgICBTRVRfQk9PS01BUktTLFxuICAgIFNFVF9NQVJLQVNGSU5JU0hFRCxcbiAgICBTRVRfVU5NQVJLQVNGSU5JU0hFRCxcbiAgICBTRVRfUFJPVklERVIsXG4gICAgU0VUX1VTRVJJRCxcbiAgICBBcnRpY2xlVHlwZSB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vL1N0YXRlc1xuaW1wb3J0IHtcbiAgICBBcnRpY2xlc1N0YXRlLFxuICAgIGluaXRpYWxTdGF0ZSxcbn0gZnJvbSAnLi4vc3RhdGVzL3N0YXRlcydcblxuLy9SZWR1Y2VyXG5jb25zdCBhcnRpY2xlc1JlZHVjZXIgPSAoc3RhdGU6IEFydGljbGVzU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gICAgYWN0aW9uOiBHZXRBcnRpY2xlc0FjdGlvbiB8IEdldEZpbHRlcmVkQXJ0aWNsZXNBY3Rpb24gfCBDbGVhckZpbHRlckFjdGlvbiB8XG4gICAgICAgICAgICBTZXRDYXRlZ29yeUFjdGlvbiB8IENsZWFyQ2F0ZWdvcnlBY3Rpb24gfCBSZXNldExvYWRpbmdBY3Rpb24gfCBcbiAgICAgICAgICAgIFNldFBsYW5uZXJBY3Rpb24gfCBTZXRQYXJ0aWFsQXJ0aWNsZXNBY3Rpb24gfCBTZXRPZmZzZXRBY3Rpb24gfFxuICAgICAgICAgICAgU2V0UGVycGFnZUFjdGlvbiB8IFNldFBhZ2VDb3VudEFjdGlvbiB8IFNldExvYWRpbmdBY3Rpb24gfFxuICAgICAgICAgICAgU2V0TG9naW5BY3Rpb24gfCBTZXRMb2dvdXRBY3Rpb24gfCBTZXRBY2Nlc3NUb2tlbkFjdGlvbiB8XG4gICAgICAgICAgICBTZXRFbWFpbEFjdGlvbiB8IFNldFVzZXJuYW1lQWN0aW9uIHwgU2V0RXJyb3JNZXNzYWdlQWN0aW9uIHxcbiAgICAgICAgICAgIFJlbW92ZUJvb2ttYXJrQWN0aW9uIHwgU2V0Qm9va21hcmtzQWN0aW9uIHwgU2V0RmluaXNoZWRBcnRpY2xlc0FjdGlvbiB8XG4gICAgICAgICAgICBSZW1vdmVGaW5pc2hlZEFydGljbGVBY3Rpb24gfCBTZXRQcm92aWRlckFjdGlvbiB8IFNldFVzZXJJZEFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEdFVF9BUlRJQ0xFUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcnRpY2xlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxBcnRpY2xlczogYWN0aW9uLnBheWxvYWQuc2xpY2UoMCwgc3RhdGUucGVycGFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfRklMVEVSRURfQVJUSUNMRVM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmlsdGVyVGV4dDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMuZmlsdGVyKGFydGljbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7YWN0aW9uLnBheWxvYWR9YCwgJ2dpJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnRpY2xlLnRpdGxlLm1hdGNoKHJlZ2V4KSB8fCBhcnRpY2xlLnN1YnRpdGxlLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgcGFydGlhbEFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5maWx0ZXIoYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHthY3Rpb24ucGF5bG9hZH1gLCAnZ2knKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFydGljbGUudGl0bGUubWF0Y2gocmVnZXgpIHx8IGFydGljbGUuc3VidGl0bGUubWF0Y2gocmVnZXgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX1BBUlRJQUxfQVJUSUNMRVM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFydGlhbEFydGljbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIENMRUFSX0ZJTFRFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IC0xLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkQXJ0aWNsZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX0NBVEVHT1JZOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5maWx0ZXIoYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnRpY2xlLmNhdGVnb3J5ID09IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDTEVBUl9DQVRFR09SWTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBcnRpY2xlczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBSRVNFVF9MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX1BMQU5ORVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNob3dQbGFubmVyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVF9MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX09GRlNFVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVF9QQVBFX0NPVU5UOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX1BFUlBBR0U6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHBlcnBhZ2U6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX0xPR0lOOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2luOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX0xPR09VVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dpbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfQUNDRVNTX1RPS0VOOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjphY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVF9FTUFJTDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZW1haWw6YWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfVVNFUk5BTUU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOmFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX0VSUk9STUVTU0FHRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOmFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBib29rbWFya3M6IHN0YXRlLmJvb2ttYXJrcy5maWx0ZXIoYm9va21hcmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9va21hcmsgIT09IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfQk9PS01BUktTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBib29rbWFya3M6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX01BUktBU0ZJTklTSEVEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZEFydGljbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVF9VTk1BUktBU0ZJTklTSEVEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZEFydGljbGVzOiBzdGF0ZS5maW5pc2hlZEFydGljbGVzLmZpbHRlcihmaW5pc2hlZEFydGljbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluaXNoZWRBcnRpY2xlICE9PSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX1BST1ZJREVSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfVVNFUklEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7IFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzUmVkdWNlcjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXJ0aWNsZXNSZWR1Y2VyIGZyb20gJy4vYXJ0aWNsZXNSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBhcnRpY2xlc1JlZHVjZXI6IGFydGljbGVzUmVkdWNlclxufSk7IiwiXG5pbXBvcnQgeyBSb290U3RhdGV9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xuLy9UeXBlc1xuaW1wb3J0IHsgQXJ0aWNsZVR5cGUgfSBmcm9tICcuLi90eXBlcydcblxuICAgIFxuLy9Jbml0aWFsIHN0YXRlXG5leHBvcnQgaW50ZXJmYWNlIEFydGljbGVzU3RhdGUge1xuICAgIGFydGljbGVzOiBBcnJheTxBcnRpY2xlVHlwZT47XG4gICAgZmlsdGVyZWRBcnRpY2xlczogQXJyYXk8QXJ0aWNsZVR5cGU+O1xuICAgIHBhcnRpYWxBcnRpY2xlczogQXJyYXk8QXJ0aWNsZVR5cGU+O1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBzaG93UGxhbm5lcjogYm9vbGVhbjtcbiAgICBwZXJwYWdlOiBudW1iZXI7XG4gICAgcGFnZUNvdW50OiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgaXNMb2dpbjogYm9vbGVhbjtcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBmaWx0ZXJUZXh0OiBzdHJpbmc7XG4gICAgY2F0ZWdvcnk6IG51bWJlcjtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBib29rbWFya3M6QXJyYXk8bnVtYmVyPjtcbiAgICBmaW5pc2hlZEFydGljbGVzOkFycmF5PG51bWJlcj47XG4gICAgcHJvdmlkZXI6IHN0cmluZztcbiAgICB1c2VySWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhcnRpY2xlczogW10sXG4gICAgZmlsdGVyZWRBcnRpY2xlczogW10sXG4gICAgcGFydGlhbEFydGljbGVzOiBbXSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHNob3dQbGFubmVyOiB0cnVlLFxuICAgIHBlcnBhZ2U6IDE4LFxuICAgIHBhZ2VDb3VudDogMSxcbiAgICBvZmZzZXQ6IDAsXG4gICAgaXNMb2dpbjogZmFsc2UsXG4gICAgYWNjZXNzVG9rZW46ICcnLFxuICAgIGVtYWlsOicnLFxuICAgIHVzZXJuYW1lOicnLFxuICAgIGZpbHRlclRleHQ6JycsXG4gICAgY2F0ZWdvcnk6IC0xLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgYm9va21hcmtzOiBbXSxcbiAgICBmaW5pc2hlZEFydGljbGVzOiBbXSxcbiAgICBwcm92aWRlcjogJycsXG4gICAgdXNlcklkOiAtMVxufVxuXG4vL1NlbGVjdG9yIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdEFydGljbGVzU3RhdGUgPSAocm9vdFN0YXRlOiBSb290U3RhdGUpID0+IHJvb3RTdGF0ZS5hcnRpY2xlc1JlZHVjZXIuYXJ0aWNsZXM7XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRBcnRpY2xlc1N0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLmZpbHRlcmVkQXJ0aWNsZXM7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFydGlhbEFydGljbGVzU3RhdGUgPSAocm9vdFN0YXRlOiBSb290U3RhdGUpID0+IHJvb3RTdGF0ZS5hcnRpY2xlc1JlZHVjZXIucGFydGlhbEFydGljbGVzO1xuZXhwb3J0IGNvbnN0IHNlbGVjdElzTG9hZGluZ1N0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLmlzTG9hZGluZztcbmV4cG9ydCBjb25zdCBzZWxlY3RTaG93UGxhbm5lclN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLnNob3dQbGFubmVyO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBlcnBhZ2VTdGF0ZSA9IChyb290U3RhdGU6IFJvb3RTdGF0ZSkgPT4gcm9vdFN0YXRlLmFydGljbGVzUmVkdWNlci5wZXJwYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2VDb3VudFN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLnBhZ2VDb3VudDtcbmV4cG9ydCBjb25zdCBzZWxlY3RPZmZzZXRTdGF0ZSA9IChyb290U3RhdGU6IFJvb3RTdGF0ZSkgPT4gcm9vdFN0YXRlLmFydGljbGVzUmVkdWNlci5vZmZzZXQ7XG5leHBvcnQgY29uc3Qgc2VsZWN0TG9hZGluZ1N0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLmlzTG9hZGluZztcbmV4cG9ydCBjb25zdCBzZWxlY3RMb2dpblN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLmlzTG9naW47XG5leHBvcnQgY29uc3Qgc2VsZWN0QWNjZXNzVG9rZW5TdGF0ZSA9IChyb290U3RhdGU6IFJvb3RTdGF0ZSkgPT4gcm9vdFN0YXRlLmFydGljbGVzUmVkdWNlci5hY2Nlc3NUb2tlbjtcbmV4cG9ydCBjb25zdCBzZWxlY3RFbWFpbFN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLmVtYWlsO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJuYW1lU3RhdGUgPSAocm9vdFN0YXRlOiBSb290U3RhdGUpID0+IHJvb3RTdGF0ZS5hcnRpY2xlc1JlZHVjZXIudXNlcm5hbWU7XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyVGV4dFN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLmZpbHRlclRleHQ7XG5leHBvcnQgY29uc3Qgc2VsZWN0Q2F0ZWdvcnlTdGF0ZSA9IChyb290U3RhdGU6IFJvb3RTdGF0ZSkgPT4gcm9vdFN0YXRlLmFydGljbGVzUmVkdWNlci5jYXRlZ29yeTtcbmV4cG9ydCBjb25zdCBzZWxlY3RFcnJvck1lc3NhZ2VTdGF0ZSA9IChyb290U3RhdGU6IFJvb3RTdGF0ZSkgPT4gcm9vdFN0YXRlLmFydGljbGVzUmVkdWNlci5lcnJvck1lc3NhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0Qm9va21hcmtzU3RhdGUgPSAocm9vdFN0YXRlOiBSb290U3RhdGUpID0+IHJvb3RTdGF0ZS5hcnRpY2xlc1JlZHVjZXIuYm9va21hcmtzO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbmlzaGVkQXJ0aWNsZXNzU3RhdGUgPSAocm9vdFN0YXRlOiBSb290U3RhdGUpID0+IHJvb3RTdGF0ZS5hcnRpY2xlc1JlZHVjZXIuZmluaXNoZWRBcnRpY2xlcztcbmV4cG9ydCBjb25zdCBzZWxlY3RQcm92aWRlclN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLnByb3ZpZGVyO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJJZFN0YXRlID0gKHJvb3RTdGF0ZTogUm9vdFN0YXRlKSA9PiByb290U3RhdGUuYXJ0aWNsZXNSZWR1Y2VyLnVzZXJJZDsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9kZXZlbG9wbWVudE9ubHknO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsIFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuKTtcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFUyA9ICdHRVRfQVJUSUNMRVMnO1xuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJFRF9BUlRJQ0xFUyA9ICdHRVRfRklMVEVSRURfQVJUSUNMRVMnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0ZJTFRFUiA9ICdDTEVBUl9GSUxURVInO1xuZXhwb3J0IGNvbnN0IFNFVF9DQVRFR09SWSA9ICdTRVRfQ0FURUdPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NBVEVHT1JZID0gJ0NMRUFSX0NBVEVHT1JZJztcbmV4cG9ydCBjb25zdCBSRVNFVF9MT0FESU5HID0gJ1JFU0VUX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFNFVF9QTEFOTkVSID0gJ1NFVF9QTEFOTkVSJztcbmV4cG9ydCBjb25zdCBTRVRfUEFSVElBTF9BUlRJQ0xFUyA9ICdTRVRfUEFSVElBTF9BUlRJQ0xFUyc7XG5leHBvcnQgY29uc3QgU0VUX1BFUlBBR0UgPSAnU0VUX1BFUlBBR0UnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVBFX0NPVU5UID0gJ1NFVF9QQVBFX0NPVU5UJztcbmV4cG9ydCBjb25zdCBTRVRfT0ZGU0VUID0gJ1NFVF9PRkZTRVQnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HID0gJ1NFVF9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBTRVRfTE9HSU4gPSAnU0VUX0xPR0lOJztcbmV4cG9ydCBjb25zdCBTRVRfTE9HT1VUID0gJ1NFVF9MT0dPVVQnO1xuZXhwb3J0IGNvbnN0IFNFVF9BQ0NFU1NfVE9LRU4gPSAnU0VUX0FDQ0VTU19UT0tFTic7XG5leHBvcnQgY29uc3QgU0VUX0VNQUlMID0gJ1NFVF9FTUFJTCc7XG5leHBvcnQgY29uc3QgU0VUX1VTRVJOQU1FID0gJ1NFVF9VU0VSTkFNRSc7XG5leHBvcnQgY29uc3QgU0VUX0VSUk9STUVTU0FHRSA9ICdTRVRfRVJST1JNRVNTQUdFJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUksgPSAnUkVNT1ZFX0JPT0tNQVJLJztcbmV4cG9ydCBjb25zdCBTRVRfQk9PS01BUktTID0gJ1NFVF9CT09LTUFSS1MnO1xuZXhwb3J0IGNvbnN0IFNFVF9NQVJLQVNGSU5JU0hFRCA9ICdTRVRfTUFSS0FTRklOSVNIRUQnO1xuZXhwb3J0IGNvbnN0IFNFVF9VTk1BUktBU0ZJTklTSEVEID0gJ1NFVF9VTk1BUktBU0ZJTklTSEVEJztcbmV4cG9ydCBjb25zdCBTRVRfUFJPVklERVIgPSAnU0VUX1BST1ZJREVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUklEID0gJ1NFVF9VU0VSSUQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFydGljbGVUeXBlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc3VidGl0bGU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHRpbWU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcmVhZHRpbWU6IHN0cmluZztcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xuICAgIGRlc2NycHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnRpY2xlUHJvcHtcbiAgICBhcnRpY2xlOiBBcnRpY2xlVHlwZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFydGljbGVNb2RhbFByb3B7XG4gICAgc2hvdzogQm9vbGVhbjtcbiAgICBoYW5kbGVDbG9zZTogKCkgPT4gdm9pZDtcbiAgICBhcnRpY2xlOiBBcnRpY2xlVHlwZTtcbiAgICBoYW5kbGVPcGVuOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRIZWFkUHJvcHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAga2V5d29yZHM6IHN0cmluZztcbiAgICBqc29uTGQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25JbkZvcm1Qcm9wIHtcbiAgICByZXNwb25zZUZhY2Vib29rOiAoKSA9PiB2b2lkO1xuICAgIFJlc3BvbnNlR2l0aHViT25TdWNjZXNzOiAoKSA9PiB2b2lkO1xuICAgIFJlc3BvbnNlR2l0aHViT25GYWlsdXJlOiAoKSA9PiB2b2lkO1xuICAgIFNldExvZ2luOiAodG9rZW46IHN0cmluZywgZW1haWw6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgcHJvdmlkZXI6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtV3JhcHBlclByb3B7XG4gICAgV3JhcHBlZENvbXBvbmVudDogRnVuY3Rpb25Db21wb25lbnQ8U2lnbkluRm9ybVByb3A+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVdyYXBwZXJJbnRlcmZhY2Uge1xuICAgIDxXcmFwcGVkQ29tcG9uZW50SW50ZXJmYWNlIGV4dGVuZHMgRm9ybVdyYXBwZXJQcm9wPih7XG4gICAgICAgIFdyYXBwZWRDb21wb25lbnQ6IFdyYXBwZWRDb21wb25lbnRJbnRlcmZhY2V9KSA6IEZ1bmN0aW9uXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlV3JhcHBlclByb3B7XG4gICAgV3JhcHBlZENvbXBvbmVudDogRnVuY3Rpb25Db21wb25lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlV3JhcHBlckludGVyZmFjZSB7XG4gICAgPFdyYXBwZWRDb21wb25lbnRJbnRlcmZhY2UgZXh0ZW5kcyBQYWdlV3JhcHBlclByb3A+ICh7XG4gICAgICAgIFdyYXBwZWRDb21wb25lbnR9OiBXcmFwcGVkQ29tcG9uZW50SW50ZXJmYWNlKTogRnVuY3Rpb25cbn0gIiwiaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9zdG9yZS9zdG9yZSdcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZUJhcic7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCAnLi4vY3NzL21haW5wYWdlLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9zaWRlYmFyLmNzcydcbmltcG9ydCBHYUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0dhTGF5b3V0JztcbmltcG9ydCBDb21tb25IZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uSGVhZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtnZXRKc29uSWR9IGZyb20gJy4uL2NvbXBvbmVudHMvanNvbkxkJztcbmltcG9ydCB7Z2V0U3RhdGljUHJvcHN9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2V0U3RhdGljcyc7XG5cbmNvbnN0IEluZGV4ID0gKHtqc29uTGREYXRhfSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gXCJBTGF5bWFuIERhaWx5IExlYXJuaW5nXCI7XG4gICAgY29uc3Qga2V5d29yZHMgPSBcIlNvZnR3YXJlIERldmVsb3BtZW50LCBUZXNpbmcsIER2ZU9wcywgU1JFLCBJbnRldmlld3MsIERhdGEgU2NpZW5jZXNcIjtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vZGFpbHktbGVhcm5pbmcuaGVyb2t1YXBwLmNvbS9cIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFwiRGFpbHkgbGVhcm5pbmcgcHJvdmlkZXMgYXJ0aWNsZXMsIGNoYWxsZW5nZXMsIG9yIHZpZGVvcyB0byBwZW9wbGUgd2hvIGFyZSBhbHNvIHNlbGYtbGVhcm5lciBmb3IgcHJvZ3JhbW1pbmcuXCI7XG5cbiAgICByZXR1cm4gKFxuICAgIDxHYUxheW91dD5cbiAgICAgICAgPENvbW1vbkhlYWRcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAga2V5d29yZHM9e2tleXdvcmRzfVxuICAgICAgICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBqc29uTGQ9e2pzb25MZERhdGF9Lz5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cbiAgICAgICAgICAgIDxOYXZCYXI+PC9OYXZCYXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbnBhZ2UtZ3JpZC1ib3gnPlxuICAgICAgICAgICAgICAgIDxTaWRlQmFyPjwvU2lkZUJhcj5cbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUxpc3Q+PC9BcnRpY2xlTGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvR2FMYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWVkaWEtaG9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYWdpbmF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9kZXZlbG9wbWVudE9ubHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=