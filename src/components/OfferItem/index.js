import React from 'react';
import Button from '../Button';
import styles from './index.module.scss';

const Subtitle = ({
  price,
  time,
}) => {
  const term = {
    'weekend': 'weekend',
    'weekday': 'weekdays',
    'week': 'week',
  }
  return (
    <div className={styles.Subtitle}>
      from <span>{price}</span> per {term[time]}
    </div>
  )
}

const OfferItem = ({
  image,
  title,
  time,
  price,
  text
}) => {
  return (
    <div className={styles.OfferItem}>
      <div>
        <img className={styles.image} src={image} alt='' />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <Subtitle time={time} price={price} />
        <div className={styles.text}>{text}</div>
      </div>
      <div>
        <Button
          className={styles.button}
          type='button'
          placeholder='View Offer'
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default OfferItem;
