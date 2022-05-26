import React from "react";
import styles from './index.module.scss';

const ParameterItem = ({sign, value}) => {
  return (
    <div className={styles.ParameterItem}>
      <span className={styles.sign}>{sign}:</span>
      {" "}
      <span className={styles.value}>{value}</span>
    </div>
  )
}

export default ParameterItem
