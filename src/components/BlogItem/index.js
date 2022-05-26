import React from 'react';
import { useNavigate } from 'react-router';
import routes from '../../modules/routes/routes';
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
  const navigate = useNavigate()
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
          onClick={() => {navigate(routes.PAGE_UNDER_CONSTRUCTION)}}
        />
      </div>
    </div>
  )
}

export default BlogItem;
