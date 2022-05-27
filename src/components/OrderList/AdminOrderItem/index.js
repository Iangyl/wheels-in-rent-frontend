import React, {useMemo} from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

import Button from '../../Button';
import {constants} from '../../../utils';

const {statuses} = constants;

const BUTTON_CLOSE_ORDER = 'Close';
const BUTTON_ACCEPT_ORDER = 'Accept';
const BUTTON_DENIE_ORDER = 'Denie';

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
  const color = useMemo(() => {
    return statuses[status] ?? statuses.crashed
  }, [status])
  return (
    <div className={classNames(styles.AdminOrderItem, className, styles[color])}>
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
          <div className={styles.status}>
            {status}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {
          statuses[status] === statuses.pending
            ? (
                <>
                  <Button type='button' placeholder={BUTTON_DENIE_ORDER} onClick={() => {}} className={styles.button} />
                  <Button type='button' placeholder={BUTTON_ACCEPT_ORDER} onClick={() => {}} className={styles.button} />
                </>
            ) : statuses[status] === statuses.accepted
                ? (
                  <Button type='button' placeholder={BUTTON_CLOSE_ORDER} onClick={() => {}} className={styles.button} />
                ) : ''
        }
        <Button type='button' placeholder='View Details' onClick={() => {}} className={styles.button} />
      </div>
    </div>
  );
};

export default AdminOrderItem;
