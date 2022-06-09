import React from 'react';
import styles from "./Card.module.scss";

const Card = (props) => {
  const { 
    image_url, 
    name, 
    tagline,
    description,
    abv,
    ph,
    first_brewed 
  } = props.beer;

  const shortenDetails = (details) => 
    details.length < 100
      ? details
      : details.substring(0, 100) + "...";

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image_url} alt="Beer image" />
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.tagline}>{tagline}</h2>
      <p className={styles.description}>{shortenDetails(description)}</p>
      <h3 className={styles.abv}>ABV {abv}</h3>
      <h3 className={styles.ph}>Ph {ph}</h3>
      <h3 className={styles.brewed}>First brewed {first_brewed}</h3>
    </div>
  )
}

export default Card;