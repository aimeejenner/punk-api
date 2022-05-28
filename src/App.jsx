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
    <>
      <section className={styles.nav}>
        <Navbar updateSearchText={updateBeers} />
      </section>
      <section className={styles.content}>
        <Main beers={beers} />
      </section>
    </>
  );
}

export default App;
