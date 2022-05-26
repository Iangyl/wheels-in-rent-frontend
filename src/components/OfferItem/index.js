import React from 'react';
import { useNavigate } from 'react-router';
import routes from '../../modules/routes/routes';
import Button from '../Button';
import Subtitle from '../Subtitle';
import styles from './index.module.scss';

const OfferItem = ({
  image,
  title,
  time,
  price,
  text
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.OfferItem}>
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
          placeholder='View Offer'
          onClick={() => {navigate(routes.PAGE_UNDER_CONSTRUCTION)}}
        />
      </div>
    </div>
  )
}

export default OfferItem;
