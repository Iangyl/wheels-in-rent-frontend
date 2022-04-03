import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { constants } from '../../../utils';

const { iconsArray } = constants;

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
            iconsArray.map(item => <img key={item} className={styles.iconLinks} src={item} alt='' />)
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
