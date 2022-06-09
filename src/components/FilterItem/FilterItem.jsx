import React from 'react';

const FilterItem = (props) => {
  const { filterName, handleFilterChange } = props;

  const filterBox = <input type="checkbox" filterName={filterName} onChange={(e) => handleFilterChange(e)} />

  return (
    <div>{filterBox}</div>
  )
}

export default FilterItem;