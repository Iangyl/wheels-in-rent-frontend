import React from 'react';
import styles from './index.module.scss';

import Button from '../Button';

const PageBanner = ({
  title,
  subtitle,
  image,
  button = false
}) => {
  return (
    <div className={styles.PageBanner} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        {
          button ? (
            <div className={styles.buttonContainer}>
              <Button />
            </div>
          ) : ''
        }
      </div>
    </div>
  )
}

export default PageBanner;
