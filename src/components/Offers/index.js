import React from 'react';
import OfferItem from './../OfferItem';
import styles from './index.module.scss';

import Pagination from 'rc-pagination';

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
        <div className={styles.content}>
          {
            offers.map(offer => (
              <OfferItem
                key={offer.id}
                image={offer.image}
                title={offer.title}
                text={offer.text}
                price={offer.price}
                time={offer.time}
              />
            ))
          }
        </div>
        <div className={styles.paginationContainer}>
          <Pagination className="ant-pagination" pageSize={6} total={25} />
        </div>
      </div>
    </div>
  )
}

export default Offers;
