import React, { useEffect, useState, useCallback } from "react";
import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [abv, setAbv] = useState(true);
  const [classic, setClassic] = useState(true);
  const [ph, setPh] = useState(true);

  const updateBeers = useCallback(async (searchTerm) => {
    const apiBeers = await getBeers(searchTerm);
    setBeers(apiBeers);
  }, []);

  const filterABV = () => {
    if (!abv) {
      fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse);
      });
    }
    if(abv) {
      const highABV = beers.filter(beer => beer.abv > 6);
      setBeers(highABV);
    }
    setAbv(!abv);
  }

  const filterClassic = () => {
    if (!classic) {
      fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse);
      });
    }
    if (classic) {
      const classicBeers = beers.filter(beer => beer.first_brewed < 2010);
      setBeers(classicBeers);
    }
    setClassic(!classic);
  }

  const filterAcidity = () => {
    if (!ph) {
      fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse);
      });
    }
    if (ph) {
      const lowPhBeers = beers.filter(beer => beer.ph < 4);
      setBeers(lowPhBeers);
    }
    setPh(!ph);   
  }

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse);
      });
}, []);

// useEffect(() => {
//   getBeers("_")
// }, []);


  return (
    <div className={styles.app}>  
      <section className={styles.nav}>
        <Navbar updateSearchText={updateBeers} setABVFilter={filterABV} setClassicFilter={filterClassic} setPhFilter={filterAcidity}  />
      </section>
      <section className={styles.content}>
        <Main beers={beers} />
      </section>
    </div>
  );
}

export default App;
