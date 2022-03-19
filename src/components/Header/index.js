import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import links from './links.config';
import styles from './index.module.scss';
import images from './../../assets/images';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className='wrapper'>
        <div className={styles.container}>
          <div>
            <Link className={styles.mainLink} to='/'>Wheel In Rent</Link>
          </div>
          <div className={styles.linksContainer}>
            {
              links.map(link => (
                <NavLink
                  key={link.id}
                  className={(navData) => (navData.isActive ? styles.linkActive : styles.link)}
                  to={link.path}
                >
                  <div>
                    {link.title}
                  </div>
                </NavLink>
              ))
            }
          </div>
          <div className={styles.userBlock}>
            <img className={styles.avatar} src={images.user} alt='avatar' />
            <span>Name</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
