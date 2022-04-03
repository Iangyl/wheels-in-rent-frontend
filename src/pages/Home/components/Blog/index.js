import React from 'react';
import { BlogItem } from '../../../../components';
import styles from './index.module.scss';

const Blog = ({
  title,
  subtitle,
  blogs,
}) => {
  return (
    <div className={styles.Blog}>
      <div className='wrapper'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.content}>
          {
            blogs.map(blog => (
              <BlogItem
                key={blog.id}
                image={blog.image}
                title={blog.title}
                time={blog.time}
                seenCount={blog.seenCount}
                author={blog.author}
                link={blog.link}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blog;
