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
    details.length < 150
      ? details
      : details.substring(0, 100) + "...";

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image_url} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.tagline}>{tagline}</h3>
      <p className={styles.description}>{shortenDetails(description)}</p>
      <h4 className={styles.abv}>ABV {abv}</h4>
      <h4 className={styles.ph}>Ph {ph}</h4>
      <h4 className={styles.brewed}>First brewed {first_brewed}</h4>
    </div>
  )
}

export default Card;