import React from 'react';
import styles from "./FiltersList.module.scss";

import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { setABVFilter, setClassicFilter } = props;

  return (
    <section className={styles.filters}>
      <div className={styles.filter}>
        <h3 className={styles.heading}>High ABV</h3>
        <FilterItem handleFilterChange={setABVFilter} />
      </div>

      <div className={styles.filter}>
        <h3 className={styles.heading}>Classic Range</h3>
        <FilterItem handleFilterChange={setClassicFilter} />
      </div>
    </section>
  )
}

export default FiltersList;