import React, { useState } from "react";
import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import getBeers from "./services/beer-service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const updateBeers = async (searchTerm) => {
    const apiBeers = await getBeers(searchTerm);

    setBeers(apiBeers);
  }

  return (
    <div className={styles.app}>
      <section className={styles.nav}>
        <Navbar />
      </section>
      <section className={styles.content}>
        <Main />
      </section>
    </div>
  );
}

export default App;
