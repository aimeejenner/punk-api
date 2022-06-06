import React from 'react';
import styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

const Navbar = (props) => {
  const {updateSearchText, filterABV, filterClassic, filterAcidity} = props;

  return (
    <section className={styles.navbar}>
      <SearchBox placeholder="Search for beers..." updateSearchText={updateSearchText} />
      <FiltersList filterABV={filterABV} filterClassic={filterClassic} filterAcidity={filterAcidity} />
    </section>
  )
}

export default Navbar;