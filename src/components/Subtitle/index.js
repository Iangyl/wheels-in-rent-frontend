import React from "react";
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
      from <span>${price}</span> per {term[time]}
    </div>
  )
}

export default Subtitle;
