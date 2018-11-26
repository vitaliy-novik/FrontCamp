/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CategoryFilter.js":
/*!*******************************!*\
  !*** ./src/CategoryFilter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CategoryFilter; });\nclass CategoryFilter {\r\n    constructor (parentId, onChanged, categories) {\r\n        this.parentId = parentId;\r\n        this.categories = categories;\r\n        this.onChanged = onChanged;\r\n    };\r\n\r\n    draw() {\r\n        const html = \r\n            `<span class=\"col s2\">Choose categories:</span>` + \r\n            this.categories.map(cat => `\r\n            <label class=\"col s2\">\r\n                <input type=\"checkbox\" value=\"${cat.id}\" class=\"filled-in\" checked=\"checked\" />\r\n                <span>${cat.name}</span>\r\n            </label>`)\r\n            .join(\"\");\r\n\r\n        document.getElementById(this.parentId).innerHTML = html;\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/CategoryFilter.js?");

/***/ }),

/***/ "./src/Enum.js":
/*!*********************!*\
  !*** ./src/Enum.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Enum = {\r\n    Default: {\r\n        Language: 'en'\r\n    },\r\n    Categories: [\r\n        {\r\n            id: 'business',\r\n            name: 'Business'\r\n        },\r\n        {\r\n            id: 'general',\r\n            name: 'General'\r\n        },\r\n        {\r\n            id: 'health',\r\n            name: 'Health'\r\n        },\r\n        {\r\n            id: 'science',\r\n            name: 'Science'\r\n        },\r\n        {\r\n            id: 'sports',\r\n            name: 'Sports'\r\n        },\r\n        {\r\n            id: 'technology',\r\n            name: 'Technology'\r\n        },\r\n        {\r\n            id: 'entertainment',\r\n            name: 'Entertainment'\r\n        }\r\n    ],\r\n    Languages: [\r\n        {\r\n            id: 'en',\r\n            name: 'English'\r\n        },\r\n        {\r\n            id: 'de',\r\n            name: 'Deutsch'\r\n        },        \r\n        {\r\n            id: 'fr',\r\n            name: 'French'\r\n        },\r\n        {\r\n            id: 'it',\r\n            name: 'Italian'\r\n        },\r\n        {\r\n            id: 'ru',\r\n            name: 'Русский'\r\n        }\r\n        // TODO add more\r\n    ],\r\n    Countries: [\r\n        // TODO\r\n    ]\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enum);\n\n//# sourceURL=webpack:///./src/Enum.js?");

/***/ }),

/***/ "./src/LanguageFilter.js":
/*!*******************************!*\
  !*** ./src/LanguageFilter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LanguageFilter; });\nclass LanguageFilter {\r\n    constructor(parentId, onChange, languages, defaultLang) {\r\n        this.parentId = parentId;\r\n        this.onChange = onChange;\r\n        this.languages = languages;\r\n        this.defaultLang = defaultLang;\r\n    };\r\n\r\n    draw() {\r\n        const html = \r\n            `<span class=\"col s2\">Choose your language:</span>` + \r\n            this.languages.map(lang => `\r\n            <label class=\"col s1\">\r\n                <input name=\"language\" type=\"radio\" value=\"${lang.id}\" ${lang.id === this.defaultLang ? \"checked\" : \"\"} />\r\n                <span>${lang.name}</span>\r\n            </label>`)\r\n            .join(\"\");\r\n\r\n        document.getElementById(this.parentId).innerHTML = html;\r\n\r\n        this.bindEventsListeners();\r\n    };\r\n\r\n    bindEventsListeners() {\r\n        document.getElementsByName('language').forEach(element => {\r\n            element.onchange = event => this.onChange(event.target.value);\r\n        });\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/LanguageFilter.js?");

/***/ }),

/***/ "./src/NewsApiClient.js":
/*!******************************!*\
  !*** ./src/NewsApiClient.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsApiClient; });\nconst apiKey = \"42550f2e240d4605a04069e84d56aaa2\";\r\nconst baseUrl = \"https://newsapi.org/\";\r\n\r\nclass NewsApiClient {\r\n    getSources ({countries, language, categories}, callback) {\r\n        const url = `${baseUrl}v2/sources?country=${countries.join(',')}&language=${language}&category=${categories.join(',')}`;\r\n        this.performGetRequest(url, json => callback(json.sources));\r\n    };\r\n\r\n    getHeadlines({sources, query}, callback) {\r\n        let sourcesParam = sources.map(s => s.id).join(',');\r\n        const url = `${baseUrl}v2/top-headlines?q=${query}&sources=${sourcesParam}`;\r\n        this.performGetRequest(url, json => callback(json.articles));\r\n    };\r\n\r\n    performGetRequest(url, callback) {\r\n        let myHeaders = new Headers();\r\n        myHeaders.append(\"X-Api-Key\", apiKey);\r\n\r\n        let options = { \r\n            method: 'GET',\r\n            headers: myHeaders,\r\n            cache: 'no-cache' };\r\n\r\n        fetch(url, options)\r\n            .then(response => response.json())\r\n            .then(callback);\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/NewsApiClient.js?");

/***/ }),

/***/ "./src/NewsFeed.js":
/*!*************************!*\
  !*** ./src/NewsFeed.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsFeed; });\n/* harmony import */ var _SearchWidget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchWidget.js */ \"./src/SearchWidget.js\");\n\r\n\r\nclass NewsFeed {\r\n    constructor () {\r\n        this.searchWidget = new _SearchWidget_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.renderNews.bind(this));\r\n    };\r\n\r\n    draw(news) {\r\n        this.searchWidget.draw();\r\n    };\r\n\r\n    renderNews(news) {\r\n        const html = news.map(n => `\r\n        <article class=\"row\">\r\n            <div class=\"col s3\">\r\n                <img width=\"100%\" src=\"${n.urlToImage}\" />\r\n            </div>\r\n            <div class=\"col s9\">\r\n                <h5>\r\n                    <a href=\"${n.url}\">${n.title}</a>\r\n                    </h3>\r\n                <h6>${n.title}</h4>\r\n                <p>${n.content}</p>\r\n                <i>${n.author}</i>\r\n            </div>\r\n        </article>`).join('');\r\n\r\n        document.getElementById(\"feed\").innerHTML = html;\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/NewsFeed.js?");

/***/ }),

/***/ "./src/SearchWidget.js":
/*!*****************************!*\
  !*** ./src/SearchWidget.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchWidget; });\n/* harmony import */ var _CategoryFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryFilter.js */ \"./src/CategoryFilter.js\");\n/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ \"./src/Enum.js\");\n/* harmony import */ var _LanguageFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageFilter.js */ \"./src/LanguageFilter.js\");\n/* harmony import */ var _NewsApiClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsApiClient.js */ \"./src/NewsApiClient.js\");\n/* harmony import */ var _SourcesFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SourcesFilter.js */ \"./src/SourcesFilter.js\");\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils.js */ \"./src/Utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SearchWidget {\r\n    constructor(callback) {\r\n        this.callback = callback;\r\n        this.newsClient = new _NewsApiClient_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        this.languageFilter = new _LanguageFilter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n            'languageFilter', this.onLanguageChanged.bind(this), _Enum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Languages, _Enum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Default.Language);\r\n        this.categoryFilter = new _CategoryFilter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n            'categoryFilter', this.onCategoryChanged, _Enum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Categories);\r\n        this.sourcesFilter = new _SourcesFilter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('sourcesFilter');\r\n        \r\n        this.searchParameters = {\r\n            countries: [],\r\n            language: _Enum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Default.Language,\r\n            categories: [],\r\n            sources: [],\r\n            query: ''\r\n        };\r\n    };\r\n\r\n    draw() {\r\n        document.getElementById(\"submitSearchButton\").onclick = this.searchClickHandler.bind(this);\r\n        this.languageFilter.draw();\r\n        this.categoryFilter.draw();\r\n        this.newsClient.getSources(\r\n            this.searchParameters, \r\n            this.onSourcesChange.bind(this));\r\n        Object(_Utils_js__WEBPACK_IMPORTED_MODULE_5__[\"Loading\"])('sourcesFilter');\r\n    };\r\n\r\n    searchClickHandler () {\r\n        this.searchParameters.query = document.getElementById(\"query\").value;\r\n        this.newsClient.getHeadlines(\r\n            this.searchParameters, this.callback);\r\n    };\r\n\r\n    onLanguageChanged(language) {\r\n        this.searchParameters.language = language;\r\n        this.newsClient.getSources(\r\n            this.searchParameters, \r\n            this.onSourcesChange.bind(this));\r\n        Object(_Utils_js__WEBPACK_IMPORTED_MODULE_5__[\"Loading\"])('sourcesFilter');\r\n    }\r\n\r\n    onSourcesChange(sources) {\r\n        this.searchParameters.sources = sources;\r\n        this.sourcesFilter.draw(sources);\r\n        this.newsClient.getHeadlines(\r\n            this.searchParameters, this.callback);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/SearchWidget.js?");

/***/ }),

/***/ "./src/SourcesFilter.js":
/*!******************************!*\
  !*** ./src/SourcesFilter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SourcesFilter; });\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ \"./src/Utils.js\");\n\r\n\r\nclass SourcesFilter {\r\n    constructor(parentId) {\r\n        this.parentId = parentId;\r\n    };\r\n\r\n    draw(sources) {\r\n        const html = \r\n            `<span class=\"col s2\">Choose sources:</span>` + \r\n            sources.map(source => `\r\n            <label class=\"col s2\">\r\n                <input type=\"checkbox\" value=\"${source.id}\" class=\"filled-in\" checked=\"checked\" />\r\n                <span>${Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__[\"Truncate\"])(source.name, 2)}</span>\r\n            </label>`)\r\n            .join(\"\");\r\n        \r\n        document.getElementById(this.parentId).innerHTML = html;\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/SourcesFilter.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! exports provided: Loading, Truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loading\", function() { return Loading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Truncate\", function() { return Truncate; });\nfunction Loading(elementId) {\r\n    document.getElementById(elementId).innerHTML = `\r\n        <div class=\"progress\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>`;\r\n};\r\n\r\nfunction Truncate(text, wordsCount) {\r\n    let words = text.split(\" \");\r\n    if (wordsCount >= words.length){\r\n        return text;\r\n    }\r\n\r\n    let result = \"\";\r\n    for (let i = 0; i < wordsCount; i++) {\r\n        result += words[i] + \" \";\r\n    }\r\n\r\n    if (wordsCount < words.length) {\r\n        result += \"…\";\r\n    }\r\n\r\n    return result;\r\n}\n\n//# sourceURL=webpack:///./src/Utils.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewsFeed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsFeed.js */ \"./src/NewsFeed.js\");\n\r\n\r\nwindow.onload = () => {\r\n    new _NewsFeed_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().draw();\r\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });