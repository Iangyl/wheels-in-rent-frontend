import React from 'react';
import styles from './index.module.scss';

const TextInput = ({
  className,
  placeholder= 'Enter your email',
  value,
  onChange,
}) => {
  return (
    <input
      value={value}
      type='text'
      className={`${styles.text} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextInput;
