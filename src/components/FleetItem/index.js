import React from 'react';
import { useNavigate } from 'react-router';
import routes from '../../modules/routes';
import Subtitle from '../Subtitle';
import Button from '../Button';
import styles from './index.module.scss';

const FleetItem = ({
  image,
  title,
  time,
  price,
  text
}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.FleetItem}>
      <div>
        <img className={styles.image} src={image} alt='' />
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <Subtitle time={time} price={price} />
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.button}
          type='button'
          placeholder='View Details'
          onClick={() => navigate(routes.CAR)}
        />
      </div>
    </div>
  )
}

export default FleetItem;
