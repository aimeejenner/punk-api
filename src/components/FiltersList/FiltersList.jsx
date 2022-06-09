import React from 'react';
import styles from "./FiltersList.module.scss";

import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { setABVFilter, setClassicFilter, setPhFilter } = props;

  return (
    <section className={styles.filters}>
      <h3>High ABV</h3>
      <FilterItem handleFilterChange={setABVFilter} />
      <h3>Classic range</h3>
      <FilterItem handleFilterChange={setClassicFilter} />
      <h3>Low Ph</h3>
      <FilterItem handleFilterChange={setPhFilter} />
    </section>
  )
}

export default FiltersList;