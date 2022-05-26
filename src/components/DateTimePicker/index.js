import React from "react";
import classNames from "classnames";
import styles from './index.module.scss'

const DateTimePicker = ({
  time,
  changeHandler,
  className
}) => {
  return (
    <input
      type="datetime-local"
      className={classNames(styles.DateTimePicker, className)}
      value={time}
      onChange={changeHandler}
    />
  );
}

export default DateTimePicker
