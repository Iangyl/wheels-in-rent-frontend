import React from "react";
import styles from './index.module.scss';

import UserOrderItem from './UserOrderItem';
import AdminOrderItem from './AdminOrderItem';

const OrderList = ({data, accessType}) => {
  return (
    <div className={styles.OrderList}>
      {
        accessType === 'admin' ? (
          data.map(item => 
            <AdminOrderItem {...item} className={styles.items} />
          )
        ) : (
          data.map(item => 
            <UserOrderItem {...item} className={styles.items} />
          )
        )
      }
    </div>
  )
}

export default OrderList
