import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import links from './links.config';
import styles from './index.module.scss';

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
                <div key={link.id}>
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.activeLink}
                    to={link.path}
                  >
                    {link.title}
                  </NavLink>
                </div>
              ))
            }
          </div>
          <div>
            <img alt='avatar' />
            <span>Name</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
