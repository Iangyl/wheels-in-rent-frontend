import React from 'react';
import styles from './index.module.scss';

const Button = ({
  type,
  className,
  placeholder,
}) => {
  return (
    <button className={`${styles.button} ${className}`} type={type}>{placeholder}</button>
  )
}

export default Button;
