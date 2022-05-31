import React from 'react';
import styles from "./FiltersList.module.scss";

import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { beers, filterABV, filterClassic, filterAcidity } = props;

  return (
    <section className={styles.filters}>
      <h3>High ABV</h3>
      <FilterItem onSelect={() => filterABV()} />
      <h3>Classic range</h3>
      <FilterItem onSelect={() => filterClassic()} />
      <h3>Low Ph</h3>
      <FilterItem onSelect={() => filterAcidity()} />
    </section>
  )
}

export default FiltersList;