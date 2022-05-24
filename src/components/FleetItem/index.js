import React from 'react';
import { useNavigate } from 'react-router';
import routes from '../../modules/routes/routes';
import CharacteristicsTips from '../CharacteristicsTips';
import Subtitle from '../Subtitle';
import Button from '../Button';
import styles from './index.module.scss';
import Icon from '../Icon';

const FleetItem = ({
  image,
  title,
  time,
  price,
  text,
  characteristics,
}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.FleetItem}>
      <div>
        <Icon className={styles.image} src={image} />
        <CharacteristicsTips {...characteristics} className={styles.characteristics} />
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
