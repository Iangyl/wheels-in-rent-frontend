import React from "react";
import styles from './index.module.scss';

import OfferItem from '../OfferItem';
import FleetItem from '../FleetItem';
import Pagination from 'rc-pagination';

const ItemsGrid = ({items = [], mode}) => {
  return (
    <div className={styles.ItemsGrid}>
      <div className='wrapper'>
        <div className={styles.container}>
          {
            mode === 'fleet' ? items.map(item => (
              <FleetItem {...item} />
            )) : items.map(item => (
              <OfferItem {...item} />
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

export default ItemsGrid
