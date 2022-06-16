import React, { useEffect, useState } from "react";
import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [abv, setAbv] = useState(true);
  const [classic, setClassic] = useState(true);
  const [ph, setPh] = useState(true);

  const updateBeers = async (searchTerm) => {
    const apiBeers = await getBeers(searchTerm);
    setBeers(apiBeers);
  };

  const filterABV = () => {
    if (abv) {
      const highABV = beers.filter(beer => beer.abv > 6);
      setBeers(highABV);
    } else {
      updateBeers("_");
    }
    setAbv(!abv);
  }

  const filterClassic = () => {
    if (classic) {
      const classicBeers = beers.filter(beer => Number(beer.first_brewed.slice(3)) < 2010);
      setBeers(classicBeers);
    } else {
      updateBeers("_");
    }
    setClassic(!classic);
  }

  const filterAcidity = () => {
    if (ph) {
      const lowPhBeers = beers.filter(beer => beer.ph < 4);
      setBeers(lowPhBeers);
    } else {
      updateBeers("_");
    }
    setPh(!ph);   
  }

useEffect(() => {
  updateBeers("_")
}, []);


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
