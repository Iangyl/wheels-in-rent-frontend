import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

import Icon from '../Icon';
import StarsBar from '../StarsBar';

const TestimonialItem = ({
  name,
  icon,
  date,
  rate,
  feedback,
}) => {
  return (
    <div className={styles.TestimonialItem}>
      <div className={styles.cardHeader}>
        <div>
          <Icon src={icon} className={styles.icon} />
        </div>
        <div className={classNames(styles.headerText, styles.text)}>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
      <div className={classNames(styles.feedback, styles.text)}>{feedback}</div>
      <div><StarsBar rate={rate} /></div>
    </div>
  )
}

export default TestimonialItem;
