import React from 'react';
import styles from "./CardList.module.scss";

import Card from '../Card/Card';

const CardList = (props) => {
  const {beers} = props;
  
  const getBeersJsx = () => {
    return beers.map((beer) => (
      <Card beer={beer} key={beer.id} />
    ))
  }

  return (
    <section className={styles.cards}>
      {getBeersJsx()}
    </section>
  )
}

export default CardList;