import React from 'react';
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  const { placeholder, updateSearchText } = props; 

  const input = <input className={styles.input} type="text" id="search" placeholder={placeholder} onInput={e => updateSearchText(e.target.value)} />;

  return (
    <div className={styles.search}>
      {input}
      <label for="search">Search</label>
    </div>
  )
}

export default SearchBox;