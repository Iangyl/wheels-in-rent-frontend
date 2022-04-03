import React from 'react';
import { OfferItem } from '../../../../components';
import styles from './index.module.scss';

const Testimonials = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <div className={styles.Testimonials}>
      <div className='wrapper'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.content}>
          {
            testimonials.map(testimonial => (
              <OfferItem
                key={testimonial.id}
                image={testimonial.image}
                title={testimonial.title}
                text={testimonial.text}
                price={testimonial.price}
                time={testimonial.time}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
