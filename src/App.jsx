import React, { useEffect, useState } from "react";
import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

// import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    return fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((jsonResponse) => {
          setBeers(jsonResponse);
      })
}

  useEffect(() => {
    getBeers()
  }, [beers])

  return (
    <div className={styles.app}>  
      <section className={styles.nav}>
        <Navbar />
      </section>
      <section className={styles.content}>
        <Main beers={beers} />
      </section>
    </div>
  );
}

export default App;
