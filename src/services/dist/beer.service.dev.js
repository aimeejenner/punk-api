"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_URL = "https://api.punkapi.com/v2/beers";
/**
 * GET - Returns beers for a given search term.
 *  
 * @param {string} searchTerm
 */

var getBeers = function getBeers(searchTerm) {
  return fetch("".concat(API_URL, "?beer_name=").concat(searchTerm, "&per_page=80")).then(function (res) {
    return res.json();
  }).then(function (jsonResponse) {
    return jsonResponse;
  });
};

var _default = getBeers; // high alcohol - https://api.punkapi.com/v2/beers?abv_gt=6
// classic range - https://api.punkapi.com/v2/beers?brewed_before=01-2010
// high acidity - return beers where .ph property < 4

exports["default"] = _default;