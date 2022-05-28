const API_URL = "https://api.punkapi.com/v2/beers";


const getBeers = (searchTerm) => {
    return fetch(`${API_URL}?s=${searchTerm}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
          return jsonResponse;
      })
}

export default getBeers;