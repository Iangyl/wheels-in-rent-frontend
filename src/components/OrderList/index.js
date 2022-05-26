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
            <AdminOrderItem />
          )
        ) : (
          data.map(item => 
            <UserOrderItem />
          )
        )
      }
    </div>
  )
}

export default OrderList
