import React from 'react';
import styles from "./Main.module.scss";

import CardList from '../CardList/CardList';

const Main = (props) => {
  const {beers} = props;

  return (
    <div className={styles.main}>
      <CardList beers={beers} />
    </div>
  )
}

export default Main;