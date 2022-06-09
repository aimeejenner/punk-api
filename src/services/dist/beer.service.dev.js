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
  return fetch("".concat(API_URL, "?beer_name=").concat(searchTerm, "&per_page=80")).then(function (res) {
    return res.json();
  }).then(function (jsonResponse) {
    return jsonResponse;
  });
};

var _default = getBeers; //   useEffect(() => {
//     fetch("https://api.punkapi.com/v2/beers?per_page=80")
//       .then((res) => res.json())
//       .then((jsonResponse) => {
//         setBeers(jsonResponse);
//       });
// }, []);
// high alcohol - https://api.punkapi.com/v2/beers?abv_gt=6
// classic range - https://api.punkapi.com/v2/beers?brewed_before=01-2010
// high acidity - getBeers then return beers where .ph property < 4

exports["default"] = _default;