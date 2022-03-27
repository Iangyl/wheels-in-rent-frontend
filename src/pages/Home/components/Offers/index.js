import React from 'react';
import { OfferItem } from '../../../../components';
import styles from './index.module.scss';

const Offers = ({
  title,
  subtitle,
  offers,
}) => {
  return (
    <div className={styles.Offers}>
      <div className='wrapper'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div>
        {
          offers.map(offer => (
            <OfferItem
              key={offer.id}
              image={offer}
              title={offer.title}
              text={offer.text}
              price={offer.price}
              time={offer.time}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Offers;
