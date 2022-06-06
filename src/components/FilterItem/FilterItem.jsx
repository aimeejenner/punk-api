import React from 'react';

const FilterItem = (props) => {
  const { filterName, clicked } = props;

  return (
    <div>
      <input type="checkbox" label={filterName} onClick={clicked} />
    </div>
  )
}

export default FilterItem;