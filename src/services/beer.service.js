
const API_URL = "https://api.punkapi.com/v2/beers";

/**
 * GET - Returns beers for a given search term.
 *  
 * @param {string} searchTerm
 */
 const getBeers = (searchTerm) => {
    return fetch(`${API_URL}?beer_name=${searchTerm}&per_page=80`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        return jsonResponse;
      });
  };

export default getBeers;



// high alcohol - https://api.punkapi.com/v2/beers?abv_gt=6
// classic range - https://api.punkapi.com/v2/beers?brewed_before=01-2010
// high acidity - return beers where .ph property < 4