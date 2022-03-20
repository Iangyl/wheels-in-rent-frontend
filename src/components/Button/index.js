import React from 'react';
import styles from './index.module.scss';

const Button = ({
  type,
  className,
  placeholder,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {placeholder}
    </button>
  )
}

export default Button;
