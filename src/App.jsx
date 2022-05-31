import React, { useEffect, useState } from "react";
import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const updateBeers = async (searchTerm) => {
    const apiBeers = await getBeers(searchTerm);

    setBeers(apiBeers);
  };

  // useEffect(() => {
  //     getBeers();
  // }, [beers]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse);
      });
}, []);

  const filterABV = () => {
    const highABV = beers.filter(beer => beer.abv > 6);
    setBeers(highABV);
  }

  const filterClassic = () => {
    const classicBeers = beers.filter(beer => beer.first_brewed < 2010);
    setBeers(classicBeers);
  }


  const filterAcidity = () => {
    const lowPhBeers = beers.filter(beer => beer.ph < 4);
    setBeers(lowPhBeers);
  }

  

  return (
    <div className={styles.app}>  
      <section className={styles.nav}>
        <Navbar updateSearchText={updateBeers} />
      </section>
      <section className={styles.content}>
        <Main beers={beers} />
      </section>
    </div>
  );
}

export default App;
