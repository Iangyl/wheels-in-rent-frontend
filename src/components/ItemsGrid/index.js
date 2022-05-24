import React from "react";
import styles from './index.module.scss';

import FleetItem from '../FleetItem';

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
      </div>
    </div>
  )
}

export default ItemsGrid
