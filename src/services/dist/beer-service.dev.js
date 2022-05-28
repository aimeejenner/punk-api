"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_URL = "https://api.punkapi.com/v2/beers";

var getBeers = function getBeers(searchTerm) {
  return fetch("".concat(API_URL, "?s=").concat(searchTerm)).then(function (res) {
    return res.json();
  }).then(function (jsonResponse) {
    return jsonResponse;
  });
};

var _default = getBeers;
exports["default"] = _default;