import React from "react";
import styles from './index.module.scss';

import images from '../../assets/images';
import Icon from '../Icon';
import classNames from "classnames";

const {icons} = images;

const transmission = {
  mechanic: 'M',
  automatic: 'A',
}

const CharacteristicsTips = ({
  sitsQuantity,
  transmissionType,
  volumeAmount,
  doorsQuantity,
  className,
}) => {
  const tips = [
    {
      icon: icons.passenger,
      value: sitsQuantity,
    },
    {
      icon: icons.volume,
      value: volumeAmount,
    },
    {
      icon: icons.enter,
      value: doorsQuantity,
    },
    {
      icon: icons.transmission,
      value: transmission[transmissionType],
    },
  ]
  return (
    <div className={classNames(styles.CharacteristicsTips, className)}>
      {
        tips.map(tip => (
          <span className={styles.tip}>
            <Icon src={tip.icon} className={styles.icon} />
            {tip.value}
          </span>
        ))
      }
    </div>
  )
}

export default CharacteristicsTips
