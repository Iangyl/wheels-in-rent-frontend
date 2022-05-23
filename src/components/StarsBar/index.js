import React, { useMemo } from 'react';
import styles from './index.module.scss';
import isInteger from 'lodash/isInteger';
import Icon from '../Icon';
import images from '../../assets/images';

const STARS_BAR_DEFAULT_SIZE = 5
const {icons} = images

const StarsBar = ({rate}) => {
  const starsArray = useMemo(() => {
    const array = []
    let localrate = rate

    if (localrate) {
      if (isInteger(localrate)) {
        for (let i = 0; i < localrate; i++) {
          array.push({
            value: i + 1,
            type: 1,
          })
        }
      } else {
        for (let i = 0; i < localrate - 1; i++) {
          array.push({
            value: i + 1,
            type: 1,
          })
        }
        array.push({
          value: array[array.length-1].value + 0.5,
          type: 0.5,
        })
      }
    } else {
      for (let i = 0; i < STARS_BAR_DEFAULT_SIZE; i++) {
        array.push({
          value: 0,
          type: 0,
        })
      }
    }

    return array
  }, [rate])
  return (
    <div className={styles.StarsBar}>
      {
        starsArray.map(star => (
          <Icon
            src={
              star.type === 1 ? icons.star_filled :
                star.type === 0.5 ? icons.star_half_filled :
                  icons.star_outlined
            }
            className={styles.star}
          />
        ))
      }
    </div>
  )
}

export default StarsBar;
