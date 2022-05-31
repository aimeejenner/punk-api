
const API_URL = "https://api.punkapi.com/v2/beers";

/**
 * GET - Returns beers for a given search term.
 *       NOTE: We can leave this untested as it would ONLY test the punk API, which is not our responsibility
 * @param {string} searchTerm
 */
 const getBeers = (searchTerm) => {
    return fetch(`${API_URL}?beer_name=${searchTerm}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        return jsonResponse;
      });
  };

export default getBeers;


// high alcohol - https://api.punkapi.com/v2/beers?abv_gt=6
// classic range - https://api.punkapi.com/v2/beers?brewed_before=01-2010
// high acidity - getBeers then return beers where .ph property < 4