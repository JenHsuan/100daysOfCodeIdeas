webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ArticleList.tsx":
/*!****************************************!*\
  !*** ./src/components/ArticleList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paginate */ \"./node_modules/react-paginate/dist/index.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _states_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/states */ \"./src/components/states/states.ts\");\n/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/articlesAction */ \"./src/components/actions/articlesAction.ts\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Article */ \"./src/components/Article.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _ArticleSearchBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArticleSearchBar */ \"./src/components/ArticleSearchBar.tsx\");\n/* harmony import */ var react_media_hook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-media-hook */ \"./node_modules/react-media-hook/index.js\");\n/* harmony import */ var react_media_hook__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_media_hook__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ArticleList = function ArticleList() {\n  _s();\n\n  var disPatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"])();\n  var isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectIsLoadingState\"]);\n  var articles = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectArticlesState\"]);\n  var filteredArticles = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectFilteredArticlesState\"]);\n  var partialArticles = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectPartialArticlesState\"]);\n  var perpage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectPerpageState\"]);\n  var pageCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectPageCountState\"]);\n  var offset = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectOffsetState\"]);\n  var showPlanner = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectShowPlannerState\"]);\n  var smallerThan800 = Object(react_media_hook__WEBPACK_IMPORTED_MODULE_15__[\"useMediaPredicate\"])(\"(max-width: 800px)\");\n  var isLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_states_states__WEBPACK_IMPORTED_MODULE_5__[\"selectLoginState\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    //Refresh JWT token or logout\n    refreshToken(); //Fetch articles\n\n    if (articles.length === 0) {\n      console.log('fetch articles');\n      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"getArticles\"])());\n    } //Fetch Load bookmarks and finished articles\n\n\n    var bookmarksJson = localStorage.getItem(\"bookmarks\");\n\n    if (bookmarksJson !== null) {\n      var bookmarksList = bookmarksJson.split(',');\n      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setBookmarks\"])(bookmarksList.filter(function (bookmark) {\n        return bookmark !== '';\n      })));\n    }\n\n    var filterArticlesJson = localStorage.getItem(\"filterArticles\");\n\n    if (filterArticlesJson !== null) {\n      var filterArticlesList = filterArticlesJson.split(',');\n      disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setFinishedArticles\"])(filterArticlesList.filter(function (filterArticle) {\n        return filterArticle !== '';\n      })));\n    }\n  }, []);\n\n  var SetLogoutForLocalSorage = function SetLogoutForLocalSorage() {\n    localStorage.removeItem('login');\n    localStorage.removeItem('username');\n    localStorage.removeItem('email');\n    localStorage.removeItem('finishedArticles');\n    localStorage.removeItem('bookmarks');\n    localStorage.removeItem('token');\n    localStorage.removeItem('provider');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('articles updated');\n    var partialData = articles.slice(offset, offset + perpage);\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setPartialArticles\"])(partialData));\n    var count = Math.ceil(articles.length / perpage);\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setPageCount\"])(count));\n  }, [articles]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('filtered articles updated');\n    var count = filteredArticles.length === 0 ? Math.ceil(articles.length / perpage) : Math.ceil(filteredArticles.length / perpage);\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setPageCount\"])(count));\n    setPartialData();\n  }, [filteredArticles]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var count = filteredArticles.length === 0 ? Math.ceil(articles.length / perpage) : Math.ceil(filteredArticles.length / perpage);\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setPageCount\"])(count));\n    setPartialData();\n    window.scrollTo(0, 0);\n  }, [offset]);\n\n  var refreshToken = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('api/renew-token/');\n\n            case 3:\n              res = _context.sent;\n              _context.next = 11;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n              SetLogout();\n              SetLogoutForLocalSorage();\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function refreshToken() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var SetLogout = function SetLogout() {\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setLogout\"])());\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setUsername\"])(''));\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setUserId\"])(-1));\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setEmail\"])(''));\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setFinishedArticles\"])([]));\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setAccessToken\"])(''));\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setProvider\"])(''));\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setBookmarks\"])([]));\n  };\n\n  var setPartialData = function setPartialData() {\n    var partialData = filteredArticles.length === 0 ? articles.slice(offset, offset + perpage) : filteredArticles.slice(offset, offset + perpage);\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setPartialArticles\"])(partialData));\n  };\n\n  var handlePageSlected = function handlePageSlected(e) {\n    //Refresh JWT token or logout\n    refreshToken();\n    disPatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_6__[\"setOffset\"])(e.selected * perpage));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, __jsx(\"div\", {\n    className: \"\".concat(showPlanner === true ? 'articles-hide-siderbar-head' : 'articles-hide-siderbar-head articles-hide-siderbar-head-remove-left')\n  }, __jsx(\"div\", {\n    className: \"title\"\n  }, \"Learning materials (\".concat(filteredArticles.length === 0 ? articles.length : filteredArticles.length, \")\")), isLogin ? __jsx(\"div\", {\n    className: \"subtitle\"\n  }, \"Click the details button to check the article.\") : __jsx(\"div\", {\n    className: \"subtitle\"\n  }, __jsx(\"a\", {\n    href: \"/signin\"\n  }, \"Login \"), \"to add articles or skills in your learning plan or open them directly.\"), smallerThan800 && __jsx(_ArticleSearchBar__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null)), __jsx(\"div\", {\n    className: \"\".concat(showPlanner !== true ? 'articles-hide-siderbar' : 'articles-hide-siderbar articles-hide-siderbar-remove-left')\n  }, __jsx(\"div\", {\n    className: \"articles-row row\"\n  }, articles.length === 0 ? __jsx(\"div\", {\n    className: \"articles-spinner\"\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {\n    animation: \"border\",\n    role: \"status\"\n  }, __jsx(\"span\", {\n    className: \"sr-only\"\n  }, \"Loading...\"))) : partialArticles.map(function (article) {\n    return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"TransitionGroup\"], null, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      key: article.id,\n      timeout: 500,\n      classNames: \"item\"\n    }, __jsx(_Article__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      key: article.id,\n      article: article\n    })));\n  })), partialArticles.length > 0 && __jsx(\"div\", {\n    className: \"article-pagination\"\n  }, __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    previousLabel: \"prev\",\n    nextLabel: \"next\",\n    breakLabel: \"...\",\n    breakClassName: \"break-me\",\n    pageCount: pageCount,\n    marginPagesDisplayed: 2,\n    pageRangeDisplayed: 5,\n    onPageChange: handlePageSlected,\n    containerClassName: \"pagination\",\n    subContainerClassName: \"pages pagination\",\n    activeClassName: \"active\"\n  })), partialArticles.length > 0 && __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null)));\n};\n\n_s(ArticleList, \"4yjXn0TEAyuGbJHGKE8lYbkqo2E=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], next_router__WEBPACK_IMPORTED_MODULE_13__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_media_hook__WEBPACK_IMPORTED_MODULE_15__[\"useMediaPredicate\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlTGlzdC50c3g/ODUyNyJdLCJuYW1lcyI6WyJBcnRpY2xlTGlzdCIsImRpc1BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0xvYWRpbmciLCJ1c2VTZWxlY3RvciIsInNlbGVjdElzTG9hZGluZ1N0YXRlIiwiYXJ0aWNsZXMiLCJzZWxlY3RBcnRpY2xlc1N0YXRlIiwiZmlsdGVyZWRBcnRpY2xlcyIsInNlbGVjdEZpbHRlcmVkQXJ0aWNsZXNTdGF0ZSIsInBhcnRpYWxBcnRpY2xlcyIsInNlbGVjdFBhcnRpYWxBcnRpY2xlc1N0YXRlIiwicGVycGFnZSIsInNlbGVjdFBlcnBhZ2VTdGF0ZSIsInBhZ2VDb3VudCIsInNlbGVjdFBhZ2VDb3VudFN0YXRlIiwib2Zmc2V0Iiwic2VsZWN0T2Zmc2V0U3RhdGUiLCJzaG93UGxhbm5lciIsInNlbGVjdFNob3dQbGFubmVyU3RhdGUiLCJzbWFsbGVyVGhhbjgwMCIsInVzZU1lZGlhUHJlZGljYXRlIiwiaXNMb2dpbiIsInNlbGVjdExvZ2luU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZWZyZXNoVG9rZW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXJ0aWNsZXMiLCJib29rbWFya3NKc29uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvb2ttYXJrc0xpc3QiLCJzcGxpdCIsInNldEJvb2ttYXJrcyIsImZpbHRlciIsImJvb2ttYXJrIiwiZmlsdGVyQXJ0aWNsZXNKc29uIiwiZmlsdGVyQXJ0aWNsZXNMaXN0Iiwic2V0RmluaXNoZWRBcnRpY2xlcyIsImZpbHRlckFydGljbGUiLCJTZXRMb2dvdXRGb3JMb2NhbFNvcmFnZSIsInJlbW92ZUl0ZW0iLCJwYXJ0aWFsRGF0YSIsInNsaWNlIiwic2V0UGFydGlhbEFydGljbGVzIiwiY291bnQiLCJNYXRoIiwiY2VpbCIsInNldFBhZ2VDb3VudCIsInNldFBhcnRpYWxEYXRhIiwid2luZG93Iiwic2Nyb2xsVG8iLCJheGlvcyIsImdldCIsInJlcyIsIlNldExvZ291dCIsInNldExvZ291dCIsInNldFVzZXJuYW1lIiwic2V0VXNlcklkIiwic2V0RW1haWwiLCJzZXRBY2Nlc3NUb2tlbiIsInNldFByb3ZpZGVyIiwiaGFuZGxlUGFnZVNsZWN0ZWQiLCJlIiwic2V0T2Zmc2V0Iiwic2VsZWN0ZWQiLCJtYXAiLCJhcnRpY2xlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBZUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLCtEQUFXLENBQUNDLG1FQUFELENBQTdCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRiwrREFBVyxDQUFDRyxrRUFBRCxDQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHSiwrREFBVyxDQUFDSywwRUFBRCxDQUFwQztBQUNBLE1BQU1DLGVBQWUsR0FBR04sK0RBQVcsQ0FBQ08seUVBQUQsQ0FBbkM7QUFDQSxNQUFNQyxPQUFPLEdBQUdSLCtEQUFXLENBQUNTLGlFQUFELENBQTNCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHViwrREFBVyxDQUFDVyxtRUFBRCxDQUE3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR1osK0RBQVcsQ0FBQ2EsZ0VBQUQsQ0FBMUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdkLCtEQUFXLENBQUNlLHFFQUFELENBQS9CO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQywyRUFBaUIsQ0FBQyxvQkFBRCxDQUF4QztBQUNBLE1BQU1DLE9BQU8sR0FBR2xCLCtEQUFXLENBQUNtQiwrREFBRCxDQUEzQjtBQUVB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QywyREFBRCxPQWhDbEMsQ0FoQkEsQ0FESjtBQXNESCxDQWhLRDs7R0FBTTVCLFc7VUFDZUUsdUQsRUFDRkUsc0QsRUFDR0UsdUQsRUFDREEsdUQsRUFDUUEsdUQsRUFDREEsdUQsRUFDUkEsdUQsRUFDRUEsdUQsRUFDSEEsdUQsRUFDS0EsdUQsRUFDR2lCLG1FLEVBQ1BqQix1RDs7O0tBWmROLFc7QUFpS1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCBGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSAncmVhY3QtcGFnaW5hdGUnO1xuaW1wb3J0IHtcbiAgICBzZWxlY3RBcnRpY2xlc1N0YXRlLFxuICAgIHNlbGVjdFBhcnRpYWxBcnRpY2xlc1N0YXRlLFxuICAgIHNlbGVjdEZpbHRlcmVkQXJ0aWNsZXNTdGF0ZSxcbiAgICBzZWxlY3RJc0xvYWRpbmdTdGF0ZSxcbiAgICBzZWxlY3RPZmZzZXRTdGF0ZSxcbiAgICBzZWxlY3RQYWdlQ291bnRTdGF0ZSxcbiAgICBzZWxlY3RQZXJwYWdlU3RhdGUsXG4gICAgc2VsZWN0U2hvd1BsYW5uZXJTdGF0ZSxcbiAgICBzZWxlY3RQcm92aWRlclN0YXRlLFxuICAgIHNlbGVjdFVzZXJJZFN0YXRlLFxuICAgIHNlbGVjdEVtYWlsU3RhdGUsXG4gICAgc2VsZWN0QWNjZXNzVG9rZW5TdGF0ZSxcbiAgICBzZWxlY3RMb2dpblN0YXRlXG59IGZyb20gJy4vc3RhdGVzL3N0YXRlcyc7XG5cbmltcG9ydCB7IFxuICAgIGdldEFydGljbGVzLFxuICAgIHNldFBhcnRpYWxBcnRpY2xlcyxcbiAgICBzZXRPZmZzZXQsXG4gICAgc2V0UGFnZUNvdW50LFxuICAgIHNldExvZ291dCxcbiAgICBzZXRCb29rbWFya3MsXG4gICAgc2V0VXNlcklkLFxuICAgIHNldFVzZXJuYW1lLFxuICAgIHNldEFjY2Vzc1Rva2VuLFxuICAgIHNldFByb3ZpZGVyLFxuICAgIHNldEZpbmlzaGVkQXJ0aWNsZXMsXG4gICAgc2V0RW1haWxcbn0gZnJvbSAnLi9hY3Rpb25zL2FydGljbGVzQWN0aW9uJztcblxuaW1wb3J0IHtcbiAgICBDU1NUcmFuc2l0aW9uLFxuICAgIFRyYW5zaXRpb25Hcm91cCxcbn0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4vQXJ0aWNsZSdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQXJ0aWNsZVNlYXJjaEJhciBmcm9tICcuL0FydGljbGVTZWFyY2hCYXInO1xuaW1wb3J0IHsgdXNlTWVkaWFQcmVkaWNhdGUgfSBmcm9tIFwicmVhY3QtbWVkaWEtaG9va1wiO1xuaW1wb3J0IHsgQXJ0aWNsZVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQXJ0aWNsZUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzUGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNMb2FkaW5nU3RhdGUpO1xuICAgIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0QXJ0aWNsZXNTdGF0ZSk7XG4gICAgY29uc3QgZmlsdGVyZWRBcnRpY2xlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpbHRlcmVkQXJ0aWNsZXNTdGF0ZSk7XG4gICAgY29uc3QgcGFydGlhbEFydGljbGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGFydGlhbEFydGljbGVzU3RhdGUpO1xuICAgIGNvbnN0IHBlcnBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQZXJwYWdlU3RhdGUpO1xuICAgIGNvbnN0IHBhZ2VDb3VudCA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2VDb3VudFN0YXRlKTtcbiAgICBjb25zdCBvZmZzZXQgPSB1c2VTZWxlY3RvcihzZWxlY3RPZmZzZXRTdGF0ZSk7XG4gICAgY29uc3Qgc2hvd1BsYW5uZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RTaG93UGxhbm5lclN0YXRlKTtcbiAgICBjb25zdCBzbWFsbGVyVGhhbjgwMCA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1heC13aWR0aDogODAwcHgpXCIpO1xuICAgIGNvbnN0IGlzTG9naW4gPSB1c2VTZWxlY3RvcihzZWxlY3RMb2dpblN0YXRlKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgLy9SZWZyZXNoIEpXVCB0b2tlbiBvciBsb2dvdXRcbiAgICAgICAgcmVmcmVzaFRva2VuKCk7XG5cbiAgICAgICAgLy9GZXRjaCBhcnRpY2xlc1xuICAgICAgICBpZiAoYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggYXJ0aWNsZXMnKVxuICAgICAgICAgICAgZGlzUGF0Y2goZ2V0QXJ0aWNsZXMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0ZldGNoIExvYWQgYm9va21hcmtzIGFuZCBmaW5pc2hlZCBhcnRpY2xlc1xuICAgICAgICB2YXIgYm9va21hcmtzSnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9va21hcmtzXCIpO1xuICAgICAgICBpZiAoYm9va21hcmtzSnNvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGJvb2ttYXJrc0xpc3QgPSBib29rbWFya3NKc29uLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBkaXNQYXRjaChzZXRCb29rbWFya3MoYm9va21hcmtzTGlzdC5maWx0ZXIoYm9va21hcmsgPT4gYm9va21hcmsgIT09ICcnKSkpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsdGVyQXJ0aWNsZXNKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWx0ZXJBcnRpY2xlc1wiKTtcbiAgICAgICAgaWYgKGZpbHRlckFydGljbGVzSnNvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGZpbHRlckFydGljbGVzTGlzdCA9IGZpbHRlckFydGljbGVzSnNvbi5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZGlzUGF0Y2goc2V0RmluaXNoZWRBcnRpY2xlcyhmaWx0ZXJBcnRpY2xlc0xpc3QuZmlsdGVyKGZpbHRlckFydGljbGUgPT4gZmlsdGVyQXJ0aWNsZSAhPT0gJycpKSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgU2V0TG9nb3V0Rm9yTG9jYWxTb3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dpbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmaW5pc2hlZEFydGljbGVzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdib29rbWFya3MnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm92aWRlcicpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FydGljbGVzIHVwZGF0ZWQnKVxuICAgICAgICBjb25zdCBwYXJ0aWFsRGF0YSA9IGFydGljbGVzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcGVycGFnZSlcbiAgICAgICAgZGlzUGF0Y2goc2V0UGFydGlhbEFydGljbGVzKHBhcnRpYWxEYXRhKSk7XG4gICAgICAgIHZhciBjb3VudCA9IE1hdGguY2VpbChhcnRpY2xlcy5sZW5ndGggLyBwZXJwYWdlKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0UGFnZUNvdW50KGNvdW50KSk7XG4gICAgfSwgW2FydGljbGVzXSlcblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbHRlcmVkIGFydGljbGVzIHVwZGF0ZWQnKVxuICAgICAgICB2YXIgY291bnQgPSBmaWx0ZXJlZEFydGljbGVzLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICBNYXRoLmNlaWwoYXJ0aWNsZXMubGVuZ3RoIC8gcGVycGFnZSkgOiBNYXRoLmNlaWwoZmlsdGVyZWRBcnRpY2xlcy5sZW5ndGggLyBwZXJwYWdlKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0UGFnZUNvdW50KGNvdW50KSk7XG4gICAgICAgIHNldFBhcnRpYWxEYXRhKCk7XG4gICAgfSwgW2ZpbHRlcmVkQXJ0aWNsZXNdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT4geyBcbiAgICAgICAgdmFyIGNvdW50ID0gZmlsdGVyZWRBcnRpY2xlcy5sZW5ndGggPT09IDAgPyBcbiAgICAgICAgTWF0aC5jZWlsKGFydGljbGVzLmxlbmd0aCAvIHBlcnBhZ2UpIDogTWF0aC5jZWlsKGZpbHRlcmVkQXJ0aWNsZXMubGVuZ3RoIC8gcGVycGFnZSk7XG4gICAgICAgIGRpc1BhdGNoKHNldFBhZ2VDb3VudChjb3VudCkpO1xuICAgICAgICBzZXRQYXJ0aWFsRGF0YSgpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICB9LCBbb2Zmc2V0XSlcbiAgICBcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2FwaS9yZW5ldy10b2tlbi8nKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBTZXRMb2dvdXQoKTtcbiAgICAgICAgICAgIFNldExvZ291dEZvckxvY2FsU29yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IFNldExvZ291dCA9ICgpID0+IHtcbiAgICAgICAgZGlzUGF0Y2goc2V0TG9nb3V0KCkpO1xuICAgICAgICBkaXNQYXRjaChzZXRVc2VybmFtZSgnJykpO1xuICAgICAgICBkaXNQYXRjaChzZXRVc2VySWQoLTEpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0RW1haWwoJycpKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0RmluaXNoZWRBcnRpY2xlcyhbXSkpO1xuICAgICAgICBkaXNQYXRjaChzZXRBY2Nlc3NUb2tlbignJykpO1xuICAgICAgICBkaXNQYXRjaChzZXRQcm92aWRlcignJykpO1xuICAgICAgICBkaXNQYXRjaChzZXRCb29rbWFya3MoW10pKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJ0aWFsRGF0YSA9ICgpID0+ICB7XG4gICAgICAgIGNvbnN0IHBhcnRpYWxEYXRhID0gZmlsdGVyZWRBcnRpY2xlcy5sZW5ndGggPT09IDAgPyBcbiAgICAgICAgYXJ0aWNsZXMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwZXJwYWdlKSA6IGZpbHRlcmVkQXJ0aWNsZXMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwZXJwYWdlKTtcbiAgICAgICAgZGlzUGF0Y2goc2V0UGFydGlhbEFydGljbGVzKHBhcnRpYWxEYXRhKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFnZVNsZWN0ZWQgPSBlID0+IHtcbiAgICAgICAgLy9SZWZyZXNoIEpXVCB0b2tlbiBvciBsb2dvdXRcbiAgICAgICAgcmVmcmVzaFRva2VuKCk7XG5cbiAgICAgICAgZGlzUGF0Y2goc2V0T2Zmc2V0KGUuc2VsZWN0ZWQgKiBwZXJwYWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2hvd1BsYW5uZXIgPT09IHRydWUgPyAnYXJ0aWNsZXMtaGlkZS1zaWRlcmJhci1oZWFkJyA6ICdhcnRpY2xlcy1oaWRlLXNpZGVyYmFyLWhlYWQgYXJ0aWNsZXMtaGlkZS1zaWRlcmJhci1oZWFkLXJlbW92ZS1sZWZ0J31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7YExlYXJuaW5nIG1hdGVyaWFscyAoJHtmaWx0ZXJlZEFydGljbGVzLmxlbmd0aCA9PT0gMCA/IGFydGljbGVzLmxlbmd0aCA6IGZpbHRlcmVkQXJ0aWNsZXMubGVuZ3RofSlgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgdGhlIGRldGFpbHMgYnV0dG9uIHRvIGNoZWNrIHRoZSBhcnRpY2xlLlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+KSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2lnbmluXCI+TG9naW4gPC9hPlxuICAgICAgICAgICAgICAgICAgICB0byBhZGQgYXJ0aWNsZXMgb3Igc2tpbGxzIGluIHlvdXIgbGVhcm5pbmcgcGxhbiBvciBvcGVuIHRoZW0gZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgICAgIHtzbWFsbGVyVGhhbjgwMCAmJiA8QXJ0aWNsZVNlYXJjaEJhci8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3Nob3dQbGFubmVyICE9PSB0cnVlID8gJ2FydGljbGVzLWhpZGUtc2lkZXJiYXInIDogJ2FydGljbGVzLWhpZGUtc2lkZXJiYXIgYXJ0aWNsZXMtaGlkZS1zaWRlcmJhci1yZW1vdmUtbGVmdCd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVzLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcnRpY2xlcy1zcGlubmVyJz57XG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1NwaW5uZXI+XG4gICAgICAgICAgICAgICAgfTwvZGl2PikgOiAoXG4gICAgICAgICAgICAgICAgICAgIChwYXJ0aWFsQXJ0aWNsZXMgYXMgQXJ0aWNsZVR5cGVbXSkubWFwKGFydGljbGU9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKDxUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb24ga2V5PXthcnRpY2xlLmlkfSB0aW1lb3V0PXs1MDB9IGNsYXNzTmFtZXM9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIGtleT17YXJ0aWNsZS5pZH0gYXJ0aWNsZSA9IHthcnRpY2xlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+KSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cGFydGlhbEFydGljbGVzLmxlbmd0aCA+MCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZcIn1cbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxuICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9e1wiLi4uXCJ9XG4gICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XG4gICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlU2xlY3RlZH1cbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxuICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdlcyBwYWdpbmF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtcImFjdGl2ZVwifS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3BhcnRpYWxBcnRpY2xlcy5sZW5ndGggPjAgJiYgPEZvb3Rlci8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ArticleList.tsx\n");

/***/ })

})