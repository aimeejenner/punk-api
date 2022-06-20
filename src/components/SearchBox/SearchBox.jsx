import React from 'react';
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  const { placeholder, updateSearchText } = props; 

  return (
    <div className={styles.search}>
      <input 
        className={styles.input} 
        type="text" 
        id="search" 
        placeholder={placeholder} 
        onInput={e => updateSearchText(e.target.value || "_")} 
      />
    </div>
  )
}

export default SearchBox;