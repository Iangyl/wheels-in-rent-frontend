import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const AdminOrderItem = ({
  id,
  user,
  car,
  start_date,
  end_date,
  delivery_place,
  return_place,
  price,
  status,
  className,
}) => {
  return (
    <div className={classNames(styles.AdminOrderItem, className)}>
      <div className={styles.customBorderTop} />
      <div className={styles.body}>
        <div className={classNames(styles.cell)}>
          <div className={styles.id}>
            <div>Order №</div>
            {id}
          </div>
        </div>
        <div className={classNames(styles.cell)}>
          <div className={styles.value}>
            <div>User Name</div>
            {user}
          </div>
        </div>
        <div className={classNames(styles.cell)}>
          <div className={styles.value}>
            <div>Car</div>
            {car}
          </div>
        </div>
        <div className={classNames(styles.cell)}>
          <div className={classNames(styles.value, styles.firstPair)}>
            <div>Start</div>
            {start_date}
          </div>
          <div className={styles.value}>
            <div>End</div>
            {end_date}
          </div>
        </div>
        <div className={classNames(styles.cell)}>
          <div className={classNames(styles.value, styles.firstPair)}>
            <div>Delivery</div>
            {delivery_place}
          </div>
          <div className={styles.value}>
            <div classNames={styles.sign}>Return</div>
            {return_place}
          </div>
        </div>
        <div className={classNames(styles.cell)}>
          <div className={classNames(styles.price)}>
            ${price}
          </div>
        </div>
        <div className={classNames(styles.cell)}>
          <div className={styles.value}>
            <div>User Name</div>
            {user}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderItem;
