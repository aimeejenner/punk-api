import React from 'react';
import styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <SearchBox />
      <FiltersList />
    </section>
  )
}

export default Navbar;