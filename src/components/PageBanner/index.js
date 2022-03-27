import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

import Button from '../Button';

const PageBanner = ({
  title,
  subtitle,
  image,
  button = false
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.PageBanner} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        {
          button ? (
            <div className={styles.buttonContainer}>
              <Button
                type='button'
                placeholder='Book Now'
                className={styles.button}
                onClick={() => navigate('/')}
              />
            </div>
          ) : ''
        }
      </div>
    </div>
  )
}

export default PageBanner;
