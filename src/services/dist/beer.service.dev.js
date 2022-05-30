"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_URL = "https://api.punkapi.com/v2/beers";
/**
 * GET - Returns beers for a given search term.
 *       NOTE: We can leave this untested as it would ONLY test the punk API, which is not our responsibility
 * @param {string} searchTerm
 */

var getBeers = function getBeers(searchTerm) {
  return fetch("".concat(API_URL, "?beer_name=").concat(searchTerm)).then(function (res) {
    return res.json();
  }).then(function (jsonResponse) {
    return jsonResponse;
  });
};

var _default = getBeers;
exports["default"] = _default;