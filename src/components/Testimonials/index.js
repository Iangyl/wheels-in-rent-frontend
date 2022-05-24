import React, {useMemo} from 'react';
import styles from './index.module.scss';
import TestimonialItem from './../TestimonialItem';
import Carousel from './../Carousel';

const Testimonials = ({
  title,
  subtitle,
  testimonials,
}) => {
  const testimonialsComponents = useMemo(() => {
    return testimonials.map(item => (
      <TestimonialItem key={item.id} {...item} />
    ))
  }, [testimonials])
  
  return (
    <div className={styles.Testimonials}>
      <div className='wrapper'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.content}>
          <Carousel inputDataArray={testimonialsComponents} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
