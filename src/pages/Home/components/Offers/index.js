import React from 'react';
import styles from './index.module.scss';

const Offers = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles.Offers}>
      <div className='wrapper'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  )
}

export default Offers;
