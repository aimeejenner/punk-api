import React, { useEffect, useState } from "react";
import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("_");
  const [abv, setAbv] = useState(true);
  const [classic, setClassic] = useState(true);
  const [ph, setPh] = useState(true);

  const updateBeers = async (searchTerm) => {
    const apiBeers = await getBeers(searchTerm);
    setBeers(apiBeers);
  };

  const filterABV = () => {
    if (abv) {
      setSearchTerm(searchTerm + "&abv_gt=6");
    } else {
      setSearchTerm(searchTerm.replace("&abv_gt=6", ""));
    }
    setAbv(!abv);
  }

  const filterClassic = () => {
    if (classic) {
      setSearchTerm(searchTerm + "&brewed_before=01-2010");
    } else {
      setSearchTerm(searchTerm.replace("&brewed_before=01-2010", ""));
    }
    setClassic(!classic);
  }

  const filterAcidity = () => {
    if (ph) {
      const lowPhBeers = beers.filter(beer => beer.ph < 4);
      setBeers(lowPhBeers);
    } else {
      updateBeers(searchTerm);
    }
    setPh(!ph);   
  }

useEffect(() => {
  updateBeers(searchTerm)
}, [searchTerm]);


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
