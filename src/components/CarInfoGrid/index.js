import React from "react";
import styles from "./index.module.scss";

import images from '../../assets/images';
import Icon from '../Icon';
import ParameterItem from "../ParameterItem";
import BookingForm from "../BookingForm";

const {icons} = images;

const CarInfoGrid = ({
  brand,
  name,
  engine_power,
  fuel_consumption,
  fuel_type,
  transmission,
  max_speed,
  trunk_volume,
  body_type,
  edition_year,
  desc_text,
  price,
  status,
  icon,
}) => {
  console.log(images)
  console.log(icons)
  const iconStatus = status === 'active' ? icons.ok :
    status === 'maintain' ? icons.repair : icons.blocked
  const data = [
    {
      sign: 'Brand',
      value: brand,
    },
    {
      sign: 'Name',
      value: name,
    },
    {
      sign: 'Engine',
      value: engine_power,
    },
    {
      sign: 'Fuel Consumption',
      value: fuel_consumption,
    },
    {
      sign: 'Fuel Type',
      value: fuel_type,
    },
    {
      sign: 'Transmission',
      value: transmission,
    },
    {
      sign: 'Max speed',
      value: max_speed,
    },
    {
      sign: 'Trunk Volume',
      value: trunk_volume,
    },
    {
      sign: 'Body Type',
      value: body_type,
    },
    {
      sign: 'Edition Year',
      value: edition_year,
    },
  ]
  return (
    <div className={styles.CarInfoGrid}>
      <div className="wrapper">
        <div className={styles.parameters}>
          <div className={styles.info}>
            {
              data.map(item => (
                <ParameterItem {...item} />
              ))
            }
          </div>
          <div className={styles.iconContainer}>
            <Icon src={icon} className={styles.image} />
            <div className={styles.statusBlock}>
              <div className={styles.price}>
                <span>Price:</span> ${price}
              </div>
              <div className={styles.status}>
                <Icon src={iconStatus} className={styles.icon} />
                {status}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          <div>{desc_text}</div>
        </div>
        <div className={styles.book}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CarInfoGrid;
