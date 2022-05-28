import React from 'react';
import styles from "./FiltersList.module.scss";

import FilterItem from "../FilterItem";

const FiltersList = () => {
  const filters = ["ABV", "classic", "acidity"];

  return (
    filters.map((filter) => (
      <div><FilterItem filter={filter} /></div>
    ))
  )
}

export default FiltersList;