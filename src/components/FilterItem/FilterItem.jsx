import React, { useState } from 'react';

const FilterItem = (props) => {
  const { checked } = props;

  const filterBox = <input type="checkbox" onClick={checked} />

  return (
    <div>{filterBox}</div>
  )
}

export default FilterItem;