import React from "react";
import styles from './index.module.scss';

import FleetItem from '../FleetItem';
import Pagination from 'rc-pagination';

const ItemsGrid = ({items = []}) => {
  return (
    <div className={styles.ItemsGrid}>
      <div className='wrapper'>
        <div className={styles.container}>
          {
            items.map(item => (
              <FleetItem {...item} />
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
