import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { icons } from './../../../assets/images';

const iconsArray = [
  icons.facebook,
  icons.twitter,
  icons.instagram,
]

const InfoBlock = ({
  title,
  data,
  isLink,
}) => {
  return (
    <div className={styles.InfoBlock}>
      <h2 className={styles.top}>
        {
          !title ? (
            iconsArray.map(item => <img className={styles.iconLinks} src={item} alt='' />)
          ) : title
        }
      </h2> 
      <div className={styles.bottom}>
        {
          isLink ? data.map(link => <Link key={link.path} to={link.path}>{link.title}</Link>)
            : data.map(item => <div key={item}>{item}</div>) 
        }
      </div>    
    </div>
  )
}

export default InfoBlock;
