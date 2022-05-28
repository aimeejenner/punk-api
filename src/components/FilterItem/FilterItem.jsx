import React from 'react';

const FilterItem = (props) => {
  const { filter } = props;

  return (
    <div>
      <input type="checkbox" label={filter} value={filter} />
      <label for={filter}>{filter}</label>
    </div>
  )
}

export default FilterItem;