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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6i3g");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6i3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/store/store.ts + 2 modules
var store = __webpack_require__("9idV");

// EXTERNAL MODULE: ./src/components/NavBar.tsx
var NavBar = __webpack_require__("DjIZ");

// EXTERNAL MODULE: ./src/css/achievementspage.css
var achievementspage = __webpack_require__("cbRX");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./src/components/states/states.ts
var states = __webpack_require__("ldY6");

// EXTERNAL MODULE: ./src/components/Footer.tsx
var Footer = __webpack_require__("b2pr");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "victory"
var external_victory_ = __webpack_require__("wL32");

// EXTERNAL MODULE: ./src/components/PageWrapper.tsx
var PageWrapper = __webpack_require__("ycUj");

// CONCATENATED MODULE: ./src/components/AchievementsContent.tsx
var __jsx = external_react_default.a.createElement;









const AchievementsContent = () => {
  const disPatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])([]);
  const showPlanner = Object(external_react_redux_["useSelector"])(states["r" /* selectShowPlannerState */]);
  const articles = Object(external_react_redux_["useSelector"])(states["b" /* selectArticlesState */]);
  const bookmarks = Object(external_react_redux_["useSelector"])(states["c" /* selectBookmarksState */]);
  const finishedArticles = Object(external_react_redux_["useSelector"])(states["i" /* selectFinishedArticlessState */]);
  const isLogin = Object(external_react_redux_["useSelector"])(states["l" /* selectLoginState */]);
  Object(external_react_["useEffect"])(() => {
    if (isLogin === false) {
      router_default.a.push(`/signin`);
    }
  }, [isLogin]);
  Object(external_react_["useEffect"])(() => {
    //Fetch articles
    var dataList = [];

    if (articles.length - finishedArticles.length !== 0) {
      dataList.push({
        y: articles.length - finishedArticles.length
      });
    }

    if (finishedArticles.length !== 0) {
      dataList.push({
        y: finishedArticles.length
      });
    }

    if (bookmarks.length !== 0) {
      dataList.push({
        y: bookmarks.length
      });
    }

    setData(dataList);
  }, [articles, bookmarks, finishedArticles]);
  return __jsx(external_react_["Fragment"], null, __jsx("div", {
    className: `${showPlanner === true ? 'achievementspage-head' : 'achievementspage-head achievementspage-head-remove-left'}`
  }, __jsx("div", {
    className: "title"
  }, "Your Achievements"), __jsx("div", {
    className: "subtitle"
  }, "Keep going!")), __jsx("div", {
    className: `${showPlanner !== true ? 'achievementspage-hide-siderbar' : 'achievementspage-hide-siderbar articles-hide-siderbar-remove-left'}`
  }, __jsx("div", {
    className: "achievementspage-content-grid-box"
  }, __jsx("div", {
    className: "achievementspage-hide-siderbar-labels"
  }, __jsx("div", null, __jsx("span", {
    className: "bookmarks"
  }, bookmarks.length), " Bookmarked"), __jsx("div", null, __jsx("span", {
    className: "finished"
  }, finishedArticles.length, " "), " Completed"), __jsx("div", null, __jsx("span", {
    className: "unfinished"
  }, articles.length - finishedArticles.length), " Unfinished")), __jsx("div", {
    className: "achievementspage-piechart"
  }, __jsx(external_victory_["VictoryPie"], {
    colorScale: ["gray", "blue", "green"],
    data: data,
    innerRadius: 20,
    labelRadius: 30,
    style: {
      labels: {
        fill: "white",
        fontSize: 1
      }
    },
    radius: ({
      datum
    }) => 0.5 + datum.y * 1.3
  })))), __jsx("div", {
    className: `${showPlanner === true ? 'achievementspage-footer' : 'achievementspage-footer achievementspage-footer-move-left'}`
  }, __jsx(Footer["a" /* default */], null)));
};

/* harmony default export */ var components_AchievementsContent = (Object(PageWrapper["a" /* default */])({
  WrappedComponent: AchievementsContent
}));
// EXTERNAL MODULE: ./src/css/sidebar.css
var sidebar = __webpack_require__("v+B1");

// EXTERNAL MODULE: ./src/components/SideBar.tsx + 1 modules
var SideBar = __webpack_require__("xrSH");

// EXTERNAL MODULE: ./src/components/GaLayout.tsx + 1 modules
var GaLayout = __webpack_require__("QvYV");

// EXTERNAL MODULE: ./src/components/CommonHead.tsx
var CommonHead = __webpack_require__("i30r");

// EXTERNAL MODULE: ./src/components/getStatics.ts + 1 modules
var getStatics = __webpack_require__("iJF6");

// CONCATENATED MODULE: ./src/pages/achievements.tsx
var achievements_jsx = external_react_default.a.createElement;













const achievements = ({
  jsonLdData
}) => {
  const title = "ALayman Daily Learning - Achievements";
  const keywords = "achievements,pie chart";
  const url = "https://daily-learning.herokuapp.com/";
  const description = "Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.";
  return achievements_jsx(GaLayout["a" /* default */], null, achievements_jsx(CommonHead["a" /* default */], {
    title: title,
    keywords: keywords,
    url: url,
    description: description,
    jsonLd: jsonLdData
  }), achievements_jsx(external_react_redux_["Provider"], {
    store: store["a" /* default */]
  }, achievements_jsx(NavBar["a" /* default */], null), achievements_jsx("div", {
    className: "achievementspage-grid-box"
  }, achievements_jsx(SideBar["a" /* default */], null), achievements_jsx(components_AchievementsContent, null))));
};

async function getStaticProps() {
  return await Object(getStatics["a" /* getStatics */])();
}
/* harmony default export */ var pages_achievements = __webpack_exports__["default"] = (achievements);

/***/ }),

/***/ "9idV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension/developmentOnly"
var developmentOnly_ = __webpack_require__("LEBW");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./src/components/types/index.ts
var types = __webpack_require__("Kq/o");

// EXTERNAL MODULE: ./src/components/states/states.ts
var states = __webpack_require__("ldY6");

// CONCATENATED MODULE: ./src/components/reducers/articlesReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Types
 //States

 //Reducer

const articlesReducer = (state = states["a" /* initialState */], action) => {
  switch (action.type) {
    case types["c" /* GET_ARTICLES */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        articles: action.payload,
        offset: 0,
        partialArticles: action.payload.slice(0, state.perpage)
      });

    case types["d" /* GET_FILTERED_ARTICLES */]:
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

    case types["r" /* SET_PARTIAL_ARTICLES */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        partialArticles: action.payload
      });

    case types["b" /* CLEAR_FILTER */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: -1,
        filteredArticles: []
      });

    case types["i" /* SET_CATEGORY */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        category: action.payload,
        filteredArticles: state.articles.filter(article => {
          return article.category == action.payload;
        })
      });

    case types["a" /* CLEAR_CATEGORY */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filteredArticles: []
      });

    case types["f" /* RESET_LOADING */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    case types["t" /* SET_PLANNER */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        showPlanner: action.payload
      });

    case types["l" /* SET_LOADING */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.payload
      });

    case types["p" /* SET_OFFSET */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        offset: action.payload
      });

    case types["q" /* SET_PAPE_COUNT */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pageCount: action.payload
      });

    case types["s" /* SET_PERPAGE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        perpage: action.payload
      });

    case types["m" /* SET_LOGIN */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: true
      });

    case types["n" /* SET_LOGOUT */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: false
      });

    case types["g" /* SET_ACCESS_TOKEN */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        accessToken: action.payload
      });

    case types["j" /* SET_EMAIL */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        email: action.payload
      });

    case types["x" /* SET_USERNAME */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        username: action.payload
      });

    case types["k" /* SET_ERRORMESSAGE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorMessage: action.payload
      });

    case types["e" /* REMOVE_BOOKMARK */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookmarks: state.bookmarks.filter(bookmark => {
          return bookmark !== action.payload;
        })
      });

    case types["h" /* SET_BOOKMARKS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookmarks: action.payload
      });

    case types["o" /* SET_MARKASFINISHED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        finishedArticles: action.payload
      });

    case types["v" /* SET_UNMARKASFINISHED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        finishedArticles: state.finishedArticles.filter(finishedArticle => {
          return finishedArticle !== action.payload;
        })
      });

    case types["u" /* SET_PROVIDER */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        provider: action.payload
      });

    case types["w" /* SET_USERID */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        userId: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_articlesReducer = (articlesReducer);
// CONCATENATED MODULE: ./src/components/reducers/index.ts


/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  articlesReducer: reducers_articlesReducer
}));
// CONCATENATED MODULE: ./src/components/store/store.ts




const initialState = {};
const middleware = [external_redux_thunk_default.a];
const store = Object(external_redux_["createStore"])(reducers, initialState, Object(developmentOnly_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(...middleware)));
/* harmony default export */ var store_store = __webpack_exports__["a"] = (store);

/***/ }),

/***/ "CCcg":
/***/ (function(module, exports) {

module.exports = require("react-media-hook");

/***/ }),

/***/ "DOl8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ldY6");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NUse");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ArticleSearchBar = () => {
  const text = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const filterText = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_2__[/* selectFilterTextState */ "g"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (filterText.length !== 0) {
      text.current.value = filterText;
    }
  }, []);

  const onChange = e => {
    if (text.current.value !== '') {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* getFilteredArticles */ "d"])(e.target.value));

      if (router.pathname !== '/') {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/`);
      }
    } else {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* clearFilter */ "b"])());
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

/* harmony default export */ __webpack_exports__["a"] = (ArticleSearchBar);

/***/ }),

/***/ "DjIZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Kmgh");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ldY6");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NUse");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const NavBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const showPlannerFlag = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__[/* selectShowPlannerState */ "r"]);
  const isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__[/* selectLoginState */ "l"]);
  const username = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_4__[/* selectUsernameState */ "t"]);

  const showPlanner = () => {
    if (showPlannerFlag === true) {
      console.log('Hide Planner');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setPlanner */ "q"])(false));
    } else {
      console.log('Show Planner');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setPlanner */ "q"])(true));
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
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setLogout */ "m"])());
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setUsername */ "t"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setUserId */ "s"])(-1));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setEmail */ "h"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setFinishedArticles */ "j"])([]));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setAccessToken */ "e"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setProvider */ "r"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setBookmarks */ "f"])([]));
  };

  const SetLogin = (email, username) => {
    if (email !== null && email !== undefined && email.length > 0) {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setEmail */ "h"])(email)); //local storage

      localStorage.setItem("email", email);
    }

    if (username !== null && username !== undefined && username.length > 0) {
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setUsername */ "t"])(username)); //local storage

      localStorage.setItem("username", username);
    }

    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setLogin */ "l"])()); //local storage

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
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setUsername */ "t"])(''));
    } else {
      const username = localStorage.getItem("username");
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_5__[/* setUsername */ "t"])(username));
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

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "IpVZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return refreshToken; });
/* unused harmony export SetLogoutForLocalSorage */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const refreshToken = async SetLogout => {
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

/***/ "Kmgh":
/***/ (function(module, exports) {



/***/ }),

/***/ "Kq/o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ARTICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_FILTERED_ARTICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RESET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SET_PLANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_PARTIAL_ARTICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SET_PERPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_PAPE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_ERRORMESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_BOOKMARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_BOOKMARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_MARKASFINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SET_UNMARKASFINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SET_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SET_USERID; });
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

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "NUse":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getFilteredArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setPartialArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return setOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return setPageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearCategory; });
/* unused harmony export resetLoading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return setPlanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setErrorMessage; });
/* unused harmony export removeBookmark */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setBookmarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setFinishedArticles; });
/* unused harmony export removeFinishedArticle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return setProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setUserId; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Kq/o");
 //Types

 //Actions

const getArticles = () => async dispatch => {
  var res = {
    data: []
  };

  try {
    res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/articles');
    await dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__[/* GET_ARTICLES */ "c"],
      payload: res.data
    });
  } catch (error) {
    //res.data = error;
    console.log(error);
  }
};
const getFilteredArticles = text => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* GET_FILTERED_ARTICLES */ "d"],
    payload: text
  });
};
const setPartialArticles = articles => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_PARTIAL_ARTICLES */ "r"],
    payload: articles
  });
};
const setLoading = isLoading => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_LOADING */ "l"],
    payload: isLoading
  });
};
const setOffset = offset => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_OFFSET */ "p"],
    payload: offset
  });
};
const setPageCount = pageCount => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_PAPE_COUNT */ "q"],
    payload: pageCount
  });
};
const clearFilter = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* CLEAR_FILTER */ "b"]
  });
};
const setLogin = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_LOGIN */ "m"]
  });
};
const setLogout = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_LOGOUT */ "n"]
  });
};
const setAccessToken = token => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_ACCESS_TOKEN */ "g"],
    payload: token
  });
};
const setCategory = category => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_CATEGORY */ "i"],
    payload: category
  });
};
const clearCategory = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* CLEAR_CATEGORY */ "a"]
  });
};
const resetLoading = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* RESET_LOADING */ "f"]
  });
};
const setPlanner = showPlanner => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_PLANNER */ "t"],
    payload: showPlanner
  });
};
const setEmail = email => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_EMAIL */ "j"],
    payload: email
  });
};
const setUsername = username => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_USERNAME */ "x"],
    payload: username
  });
};
const setErrorMessage = message => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_ERRORMESSAGE */ "k"],
    payload: message
  });
};
const removeBookmark = id => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* REMOVE_BOOKMARK */ "e"],
    payload: id
  });
};
const setBookmarks = bookmarks => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_BOOKMARKS */ "h"],
    payload: bookmarks
  });
};
const setFinishedArticles = finishedArticles => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_MARKASFINISHED */ "o"],
    payload: finishedArticles
  });
};
const removeFinishedArticle = finishedArticle => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_UNMARKASFINISHED */ "v"],
    payload: finishedArticle
  });
};
const setProvider = provider => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_PROVIDER */ "u"],
    payload: provider
  });
};
const setUserId = userId => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__[/* SET_USERID */ "w"],
    payload: userId
  });
};

/***/ }),

/***/ "OXZA":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QvYV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: GaLayout

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// CONCATENATED MODULE: ./src/components/googleAnalytics.ts

const initGA = () => {
  external_react_ga_default.a.initialize("UA-170160002-1");
};
const logPageView = () => {
  external_react_ga_default.a.set({
    page: window.location.pathname
  });
  external_react_ga_default.a.pageview(window.location.pathname);
};
// CONCATENATED MODULE: ./src/components/GaLayout.tsx
var __jsx = external_react_default.a.createElement;


class GaLayout_GaLayout extends external_react_["Component"] {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }

  render() {
    return __jsx("div", null, this.props.children);
  }

}
/* harmony default export */ var components_GaLayout = __webpack_exports__["a"] = (GaLayout_GaLayout);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "b2pr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OXZA");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ldY6");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = () => {
  const showPlanner = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_3__[/* selectShowPlannerState */ "r"]);
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

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cbRX":
/***/ (function(module, exports) {



/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i30r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
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

/* harmony default export */ __webpack_exports__["a"] = (CommonHead);

/***/ }),

/***/ "iJF6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getStatics; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/components/jsonLd.ts
const getJsonId = articles => {
  var JsonIdData = []; //console.log(articles.data)

  articles.data.forEach(article => {
    JsonIdData.push({
      "@context": "http://schema.org",
      "@type": "Article",
      "name": article.title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
      },
      "author": {
        "@type": "Person",
        "name": article.name
      },
      "datePublished": article.time,
      "dateModified": article.time,
      "url": article.url,
      "image": article.image,
      "publisher": {
        "@type": "Organization",
        "name": article.name,
        "logo": {
          "@type": "ImageObject",
          "url": "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png"
        }
      },
      "headline": article.title
    });
  });
  console.log(JsonIdData);
  return JsonIdData;
};
// CONCATENATED MODULE: ./src/components/getStatics.ts


async function getStatics() {
  let jsonLdData = {};

  try {
    var res = await external_axios_default.a.get('https://daily-learning.herokuapp.com/api/articles');
    jsonLdData = JSON.stringify(getJsonId(res));
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      jsonLdData
    }
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "ldY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectArticlesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return selectFilteredArticlesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return selectPartialArticlesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return selectIsLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return selectShowPlannerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return selectPerpageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return selectPageCountState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return selectOffsetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return selectLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return selectLoginState; });
/* unused harmony export selectAccessTokenState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectEmailState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return selectUsernameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return selectFilterTextState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectCategoryState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return selectErrorMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectBookmarksState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return selectFinishedArticlessState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return selectProviderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return selectUserIdState; });
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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "v+B1":
/***/ (function(module, exports) {



/***/ }),

/***/ "wL32":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xrSH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/ArticleSearchBar.tsx
var ArticleSearchBar = __webpack_require__("DOl8");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/actions/articlesAction.ts
var articlesAction = __webpack_require__("NUse");

// EXTERNAL MODULE: ./src/components/states/states.ts
var states = __webpack_require__("ldY6");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/ArticleDropdown.tsx
var __jsx = external_react_default.a.createElement;







const ArticleDropdown = () => {
  const disPatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const category = Object(external_react_redux_["useSelector"])(states["d" /* selectCategoryState */]);

  const handleSelect = e => {
    if (e != "-1") {
      console.log(e);
      disPatch(Object(articlesAction["g" /* setCategory */])(e));

      if (router.pathname !== '/') {
        router_default.a.push(`/`);
      }
    } else {
      disPatch(Object(articlesAction["a" /* clearCategory */])());
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

  return __jsx(external_react_bootstrap_["DropdownButton"], {
    className: "article-dropdown",
    id: "dropdown-basic-button",
    title: getTitle(),
    onSelect: handleSelect
  }, __jsx(external_react_bootstrap_["Dropdown"].Item, {
    eventKey: "-1"
  }, "All"), __jsx(external_react_bootstrap_["Dropdown"].Item, {
    eventKey: "0"
  }, "100DaysOfCode"), __jsx(external_react_bootstrap_["Dropdown"].Item, {
    eventKey: "1"
  }, "Programming"));
};

/* harmony default export */ var components_ArticleDropdown = (ArticleDropdown);
// EXTERNAL MODULE: ./src/css/sidebar.css
var sidebar = __webpack_require__("v+B1");

// EXTERNAL MODULE: external "react-media-hook"
var external_react_media_hook_ = __webpack_require__("CCcg");

// CONCATENATED MODULE: ./src/components/SideBar.tsx
var SideBar_jsx = external_react_default.a.createElement;









const SideBar = () => {
  const disPatch = Object(external_react_redux_["useDispatch"])();
  const showPlannerFlag = Object(external_react_redux_["useSelector"])(states["r" /* selectShowPlannerState */]);
  const isLogin = Object(external_react_redux_["useSelector"])(states["l" /* selectLoginState */]);
  const smallerThan700 = Object(external_react_media_hook_["useMediaPredicate"])("(max-width: 700px)");
  Object(external_react_["useEffect"])(() => {
    if (smallerThan700) {
      disPatch(Object(articlesAction["q" /* setPlanner */])(false));
    }
  }, []);

  const showPlanner = () => {
    if (showPlannerFlag === true) {
      console.log('Hide Planner');
      disPatch(Object(articlesAction["q" /* setPlanner */])(false));
    } else {
      console.log('Show Planner');
      disPatch(Object(articlesAction["q" /* setPlanner */])(true));
    }
  };

  return SideBar_jsx("div", {
    className: "sidebar",
    style: {
      width: showPlannerFlag == true ? '23%' : '2%'
    }
  }, SideBar_jsx("div", {
    className: "sidebar-grid-box"
  }, showPlannerFlag == true && SideBar_jsx(external_react_["Fragment"], null, SideBar_jsx("div", {
    className: "sidebar-title"
  }, "Let's Create Your Learning Plan", SideBar_jsx("div", {
    className: "sidebar-subtitle"
  }, "Choose the topics about Software development, Testing, DevOps, or 100DaysOfCode to build the personal learning plan")), SideBar_jsx("div", {
    className: "sidebar-dropdown"
  }, SideBar_jsx("div", {
    className: "sidebar-dropdown-content"
  }, SideBar_jsx(components_ArticleDropdown, null))), SideBar_jsx("div", {
    className: "sidebar-search"
  }, SideBar_jsx("div", {
    className: "sidebar-search-content"
  }, SideBar_jsx(ArticleSearchBar["a" /* default */], null)))), showPlannerFlag == true ? SideBar_jsx("div", {
    className: "sidebar-remove-left"
  }, SideBar_jsx("span", {
    className: "btn-o",
    onClick: showPlanner
  }, SideBar_jsx("a", {
    href: "#"
  }, SideBar_jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-left.png",
    alt: "Hide",
    title: "Hide"
  })))) : SideBar_jsx("div", {
    className: "sidebar-remove-right"
  }, SideBar_jsx("span", {
    className: "btn-o",
    onClick: showPlanner
  }, SideBar_jsx("a", {
    href: "#"
  }, SideBar_jsx("img", {
    src: "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-right.png",
    alt: "Show",
    title: "Show"
  }))))));
};

/* harmony default export */ var components_SideBar = __webpack_exports__["a"] = (SideBar);

/***/ }),

/***/ "ycUj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ldY6");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NUse");
/* harmony import */ var _components_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IpVZ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PageWrapper = ({
  WrappedComponent
}) => () => {
  const disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const articles = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_states_states__WEBPACK_IMPORTED_MODULE_2__[/* selectArticlesState */ "b"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //Refresh JWT token or logout
    Object(_components_account__WEBPACK_IMPORTED_MODULE_4__[/* refreshToken */ "a"])(SetLogout); //Fetch articles

    if (articles.length === 0) {
      console.log('fetch articles');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* getArticles */ "c"])());
    } //Fetch Load bookmarks and finished articles


    var bookmarksJson = localStorage.getItem("bookmarks");

    if (bookmarksJson !== null) {
      var bookmarksList = bookmarksJson.split(',');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setBookmarks */ "f"])(bookmarksList.filter(bookmark => bookmark !== '')));
    }

    var filterArticlesJson = localStorage.getItem("filterArticles");

    if (filterArticlesJson !== null) {
      var filterArticlesList = filterArticlesJson.split(',');
      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setFinishedArticles */ "j"])(filterArticlesList.filter(filterArticle => filterArticle !== '')));
    }
  }, []);

  const SetLogout = () => {
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setLogout */ "m"])());
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setUsername */ "t"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setUserId */ "s"])(-1));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setEmail */ "h"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setFinishedArticles */ "j"])([]));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setAccessToken */ "e"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setProvider */ "r"])(''));
    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_3__[/* setBookmarks */ "f"])([]));
  };

  return __jsx(WrappedComponent, null);
};

/* harmony default export */ __webpack_exports__["a"] = (PageWrapper);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });