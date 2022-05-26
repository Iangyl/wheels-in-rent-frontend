import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import links from './links.config';
import styles from './index.module.scss';
import images from '../../assets/images';
import routes from '../../modules/routes/routes';
import Icon from '../Icon';

const { icons } = images;

const Header = () => {
  const user = ''
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
          <div className={user ? styles.userBlock : styles.linksContainer}>
            {
              user ? (
                <>
                  <Icon className={styles.avatar} src={icons.user} />
                  <span>{user}</span>
                </>
              ) : (
                <NavLink
                  className={(navData) => (navData.isActive ? styles.linkActive : styles.link)}
                  to={routes.SIGN_IN}
                >
                  <div className={styles.signInContainer}>
                    <img src={icons.lock} className={styles.signInIcon} alt='' />
                    Sign In
                  </div>
                </NavLink>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
