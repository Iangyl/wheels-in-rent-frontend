import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './index.module.scss';

const BlogItem = ({
  image,
  title,
  time,
  author,
  seenCount,
  link,
}) => {
  return (
    <div className={styles.BlogItem}>
      <div>
        <img className={styles.image} src={image} alt='' />
      </div>
      <div className={styles.container}>
        <Link to={link} className={styles.title}>{title}</Link>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.button}
          type='button'
          placeholder='Read More'
          onClick={() => { }}
        />
      </div>
    </div>
  )
}

export default BlogItem;
