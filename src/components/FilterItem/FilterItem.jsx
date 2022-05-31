import React from 'react';

const FilterItem = (props) => {
  const { filterName, selected } = props;

  return (
    <div>
      <input type="checkbox" label={filterName} selected={selected} />
    </div>
  )
}

export default FilterItem;