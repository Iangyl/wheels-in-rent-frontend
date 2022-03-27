import React from 'react';
import styles from './index.module.scss';

const AboutUs = ({
  title,
  text,
}) => {
  return (
    <div className={styles.AboutUs}>
      <div className='wrapper'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default AboutUs
