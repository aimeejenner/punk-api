import React from 'react';
import styles from "./CardList.module.scss";

import Card from '../Card/Card';

import beers from "../../data/beers";

const CardList = () => {
  
  const getBeersJsx = () => {
    return beers.map((beer) => (
      <div><Card beer={beer} /></div>
    ))
  }

  return (
    <section className={styles.cards}>
      {getBeersJsx()}
    </section>
  )
}

export default CardList;