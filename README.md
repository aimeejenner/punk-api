# Punk-API

<p align="center">
  <img src=".src/images/punk-api.png" alt="Punk API">
</p>

### A React app which displays beers obtained from Brewdog's Punk API. Users are able to search and filter the beers by ABV and first brewed date.

## Description

This React app makes use of Brewdog's Punk API. It allows users to search through a catalogue of beers and displays summary information about each beer. Users can also filter the beers by high alcohol volume (ABV > 6%) and classic range (first brewed before 2010).

---

| Table of Contents               |
| ------------------------------- |
| [User Story](#UserStory)        |
| [Functionality](#Functionality) |
| [Technology](#Technology)       |   

---

## User Story

-   **As a user I would like to search, filter through and read information from a menu of beers**
-   Given that I open the app, I should see all available beers displayed.
-   Given that I type into the search box, I should see only the beers that contain my search term.
-   Given that I click on a filter, I should see only the beers that meet the criteria of that filter.
-   Given that I click on a filter, when I type into the search box, I should see only the beers that meet the criteria of the filter and contain my search term.

## Functionality

The searchTerm parameter determines the array of beers that will be displayed to the user. The getBeers function in the beer.service.js file retrieves the beers from Punk API for the given searchTerm. The searchTerm is initially set to display all beers.

```js
/*
The getBeers function retrieves an array of beers for a given search term
*/
 const getBeers = (searchTerm) => {
    return fetch(`${API_URL}?beer_name=${searchTerm}&per_page=80`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        return jsonResponse;
      });
  };

export default getBeers;
```

The updateBeers function in App.jsx sets the searchTerm to the search input entered by the user. The filterABV and filterClassic functions set the search term to the ABV > 6 and brewed before 2010 filters respectively.

```js
/*
The updateBeers function sets the searchTerm based on user input
*/
  const updateBeers = async (searchTerm) => {
    const apiBeers = await getBeers(searchTerm);
    setSearchTerm(searchTerm);
    setBeers(apiBeers);
  };

/*
The filterABV function sets the searchTerm to ABV > 6
*/
  const filterABV = () => {
    abv ? setSearchTerm(searchTerm + "&abv_gt=6") : setSearchTerm(searchTerm.replace("&abv_gt=6", ""));
    setAbv(!abv);
  }

/*
The filterClassic function sets the searchTerm to brewed before 2010
*/
  const filterClassic = () => {
    classic ? setSearchTerm(searchTerm + "&brewed_before=01-2010") : setSearchTerm(searchTerm.replace("&brewed_before=01-2010", ""));
    setClassic(!classic);
  }
```
The beers array is then passed down to the Main, CardList and Card components as props allowing the relevant beers to be displayed to the user.

## Technology

-   ReactJS
-   Sass
-   Brewdog Punk API
