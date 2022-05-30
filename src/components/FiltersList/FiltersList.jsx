import React from 'react';
import styles from "./FiltersList.module.scss";

import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const {beers, API_URL, selected} = props;
  const filters = ["ABV", "classic", "acidity"];


  return (
    filters.map((filter) => (
      <div><FilterItem beers={beers} API_URL={API_URL} selected={selected} /></div>
    ))
  )
}

export default FiltersList;