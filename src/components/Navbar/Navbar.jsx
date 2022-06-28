import React from 'react';
import styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

const Navbar = (props) => {
  const {updateSearchText, setABVFilter, setClassicFilter} = props;

  return (
    <section className={styles.navbar}>
      <SearchBox placeholder="Search for beers..." updateSearchText={updateSearchText} />
      <FiltersList 
        setABVFilter={setABVFilter} 
        setClassicFilter={setClassicFilter} 
      />
    </section>
  )
}

export default Navbar;