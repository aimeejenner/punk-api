import React from 'react';
import styles from "./Main.module.scss";

import CardList from '../CardList/CardList';

const Main = () => {
  return (
    <div className={styles.main}>
      <CardList />
    </div>
  )
}

export default Main;