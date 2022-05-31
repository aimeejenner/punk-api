import React from 'react';
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  const { placeholder, updateSearchText } = props; 

  const input = <input className={styles.input} type="text" id="search" placeholder={placeholder} onInput={e => updateSearchText(e.target.value || null)} />;

  return (
    <div className={styles.search}>
      {input}
    </div>
  )
}

export default SearchBox;