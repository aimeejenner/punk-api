import React from 'react';

const FilterItem = (props) => {
  const { handleFilterChange } = props;

  const filterBox = <input type="checkbox" onChange={handleFilterChange} />

  return (
    <div>{filterBox}</div>
  )
}

export default FilterItem;