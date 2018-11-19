"use strict";

var _NewsFeed = _interopRequireDefault(require("./NewsFeed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  new _NewsFeed.default().draw();
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CategoryFilter =
/*#__PURE__*/
function () {
  function CategoryFilter(parentId, onChanged, categories) {
    _classCallCheck(this, CategoryFilter);

    this.parentId = parentId;
    this.categories = categories;
    this.onChanged = onChanged;
  }

  _createClass(CategoryFilter, [{
    key: "draw",
    value: function draw() {
      var html = "<span class=\"col s2\">Choose categories:</span>" + this.categories.map(function (cat) {
        return "\n            <label class=\"col s2\">\n                <input type=\"checkbox\" value=\"".concat(cat.id, "\" class=\"filled-in\" checked=\"checked\" />\n                <span>").concat(cat.name, "</span>\n            </label>");
      }).join("");
      document.getElementById(this.parentId).innerHTML = html;
    }
  }]);

  return CategoryFilter;
}();

exports.default = CategoryFilter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Enum = {
  Default: {
    Language: 'en'
  },
  Categories: [{
    id: 'business',
    name: 'Business'
  }, {
    id: 'general',
    name: 'General'
  }, {
    id: 'health',
    name: 'Health'
  }, {
    id: 'science',
    name: 'Science'
  }, {
    id: 'sports',
    name: 'Sports'
  }, {
    id: 'technology',
    name: 'Technology'
  }, {
    id: 'entertainment',
    name: 'Entertainment'
  }],
  Languages: [{
    id: 'en',
    name: 'English'
  }, {
    id: 'de',
    name: 'Deutsch'
  }, {
    id: 'fr',
    name: 'French'
  }, {
    id: 'it',
    name: 'Italian'
  }, {
    id: 'ru',
    name: 'Русский' // TODO add more

  }],
  Countries: [// TODO
  ]
};
var _default = Enum;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LanguageFilter =
/*#__PURE__*/
function () {
  function LanguageFilter(parentId, onChange, languages, defaultLang) {
    _classCallCheck(this, LanguageFilter);

    this.parentId = parentId;
    this.onChange = onChange;
    this.languages = languages;
    this.defaultLang = defaultLang;
  }

  _createClass(LanguageFilter, [{
    key: "draw",
    value: function draw() {
      var _this = this;

      var html = "<span class=\"col s2\">Choose your language:</span>" + this.languages.map(function (lang) {
        return "\n            <label class=\"col s1\">\n                <input name=\"language\" type=\"radio\" value=\"".concat(lang.id, "\" ").concat(lang.id === _this.defaultLang ? "checked" : "", " />\n                <span>").concat(lang.name, "</span>\n            </label>");
      }).join("");
      document.getElementById(this.parentId).innerHTML = html;
      this.bindEventsListeners();
    }
  }, {
    key: "bindEventsListeners",
    value: function bindEventsListeners() {
      var _this2 = this;

      document.getElementsByName('language').forEach(function (element) {
        element.onchange = function (event) {
          return _this2.onChange(event.target.value);
        };
      });
    }
  }]);

  return LanguageFilter;
}();

exports.default = LanguageFilter;
;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var apiKey = "42550f2e240d4605a04069e84d56aaa2";
var baseUrl = "https://newsapi.org/";

var NewsApiClient =
/*#__PURE__*/
function () {
  function NewsApiClient() {
    _classCallCheck(this, NewsApiClient);
  }

  _createClass(NewsApiClient, [{
    key: "getSources",
    value: function getSources(_ref, callback) {
      var countries = _ref.countries,
          language = _ref.language,
          categories = _ref.categories;
      var url = "".concat(baseUrl, "v2/sources?country=").concat(countries.join(','), "&language=").concat(language, "&category=").concat(categories.join(','));
      this.performGetRequest(url, function (json) {
        return callback(json.sources);
      });
    }
  }, {
    key: "getHeadlines",
    value: function getHeadlines(_ref2, callback) {
      var sources = _ref2.sources,
          query = _ref2.query;
      var sourcesParam = sources.map(function (s) {
        return s.id;
      }).join(',');
      var url = "".concat(baseUrl, "v2/top-headlines?q=").concat(query, "&sources=").concat(sourcesParam);
      this.performGetRequest(url, function (json) {
        return callback(json.articles);
      });
    }
  }, {
    key: "performGetRequest",
    value: function performGetRequest(url, callback) {
      var myHeaders = new Headers();
      myHeaders.append("X-Api-Key", apiKey);
      var options = {
        method: 'GET',
        headers: myHeaders,
        cache: 'no-cache'
      };
      fetch(url, options).then(function (response) {
        return response.json();
      }).then(callback);
    }
  }]);

  return NewsApiClient;
}();

exports.default = NewsApiClient;
;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SearchWidget = _interopRequireDefault(require("./SearchWidget.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NewsFeed =
/*#__PURE__*/
function () {
  function NewsFeed() {
    _classCallCheck(this, NewsFeed);

    this.searchWidget = new _SearchWidget.default(this.renderNews.bind(this));
  }

  _createClass(NewsFeed, [{
    key: "draw",
    value: function draw(news) {
      this.searchWidget.draw();
    }
  }, {
    key: "renderNews",
    value: function renderNews(news) {
      var html = news.map(function (n) {
        return "\n        <article class=\"row\">\n            <div class=\"col s3\">\n                <img width=\"100%\" src=\"".concat(n.urlToImage, "\" />\n            </div>\n            <div class=\"col s9\">\n                <h5>\n                    <a href=\"").concat(n.url, "\">").concat(n.title, "</a>\n                    </h3>\n                <h6>").concat(n.title, "</h4>\n                <p>").concat(n.content, "</p>\n                <i>").concat(n.author, "</i>\n            </div>\n        </article>");
      }).join('');
      document.getElementById("feed").innerHTML = html;
    }
  }]);

  return NewsFeed;
}();

exports.default = NewsFeed;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CategoryFilter = _interopRequireDefault(require("./CategoryFilter.js"));

var _Enum = _interopRequireDefault(require("./Enum.js"));

var _LanguageFilter = _interopRequireDefault(require("./LanguageFilter.js"));

var _NewsApiClient = _interopRequireDefault(require("./NewsApiClient.js"));

var _SourcesFilter = _interopRequireDefault(require("./SourcesFilter.js"));

var _Utils = require("./Utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchWidget =
/*#__PURE__*/
function () {
  function SearchWidget(callback) {
    _classCallCheck(this, SearchWidget);

    this.callback = callback;
    this.newsClient = new _NewsApiClient.default();
    this.languageFilter = new _LanguageFilter.default('languageFilter', this.onLanguageChanged.bind(this), _Enum.default.Languages, _Enum.default.Default.Language);
    this.categoryFilter = new _CategoryFilter.default('categoryFilter', this.onCategoryChanged, _Enum.default.Categories);
    this.sourcesFilter = new _SourcesFilter.default('sourcesFilter');
    this.searchParameters = {
      countries: [],
      language: _Enum.default.Default.Language,
      categories: [],
      sources: [],
      query: ''
    };
  }

  _createClass(SearchWidget, [{
    key: "draw",
    value: function draw() {
      document.getElementById("submitSearchButton").onclick = this.searchClickHandler.bind(this);
      this.languageFilter.draw();
      this.categoryFilter.draw();
      this.newsClient.getSources(this.searchParameters, this.onSourcesChange.bind(this));
      (0, _Utils.Loading)('sourcesFilter');
    }
  }, {
    key: "searchClickHandler",
    value: function searchClickHandler() {
      this.searchParameters.query = document.getElementById("query").value;
      this.newsClient.getHeadlines(this.searchParameters, this.callback);
    }
  }, {
    key: "onLanguageChanged",
    value: function onLanguageChanged(language) {
      this.searchParameters.language = language;
      this.newsClient.getSources(this.searchParameters, this.onSourcesChange.bind(this));
      (0, _Utils.Loading)('sourcesFilter');
    }
  }, {
    key: "onSourcesChange",
    value: function onSourcesChange(sources) {
      this.searchParameters.sources = sources;
      this.sourcesFilter.draw(sources);
      this.newsClient.getHeadlines(this.searchParameters, this.callback);
    }
  }]);

  return SearchWidget;
}();

exports.default = SearchWidget;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = require("./Utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SourcesFilter =
/*#__PURE__*/
function () {
  function SourcesFilter(parentId) {
    _classCallCheck(this, SourcesFilter);

    this.parentId = parentId;
  }

  _createClass(SourcesFilter, [{
    key: "draw",
    value: function draw(sources) {
      var html = "<span class=\"col s2\">Choose sources:</span>" + sources.map(function (source) {
        return "\n            <label class=\"col s2\">\n                <input type=\"checkbox\" value=\"".concat(source.id, "\" class=\"filled-in\" checked=\"checked\" />\n                <span>").concat((0, _Utils.Truncate)(source.name, 2), "</span>\n            </label>");
      }).join("");
      document.getElementById(this.parentId).innerHTML = html;
    }
  }]);

  return SourcesFilter;
}();

exports.default = SourcesFilter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = Loading;
exports.Truncate = Truncate;

function Loading(elementId) {
  document.getElementById(elementId).innerHTML = "\n        <div class=\"progress\">\n            <div class=\"indeterminate\"></div>\n        </div>";
}

;

function Truncate(text, wordsCount) {
  var words = text.split(" ");

  if (wordsCount >= words.length) {
    return text;
  }

  var result = "";

  for (var i = 0; i < wordsCount; i++) {
    result += words[i] + " ";
  }

  if (wordsCount < words.length) {
    result += "…";
  }

  return result;
}

//# sourceMappingURL=compiled.js.map