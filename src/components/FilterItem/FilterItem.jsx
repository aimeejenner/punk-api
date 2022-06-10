import React from 'react';

const FilterItem = (props) => {
  const { filterName, handleFilterChange } = props;

  const filterBox = <input type="checkbox" onChange={(e) => handleFilterChange(e)} />

  return (
    <div>{filterName} {filterBox}</div>
  )
}

export default FilterItem;