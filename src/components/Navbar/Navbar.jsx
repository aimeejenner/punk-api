import React from 'react';
import styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

const Navbar = (props) => {
  const {updateSearchText, setABVFilter, setClassicFilter, setPhFilter} = props;

  return (
    <section className={styles.navbar}>
      <SearchBox placeholder="Search for beers..." updateSearchText={updateSearchText} />
      <FiltersList 
        setABVFilter={setABVFilter} 
        setClassicFilter={setClassicFilter} 
        setPhFilter={setPhFilter} 
      />
    </section>
  )
}

export default Navbar;