import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import styles from './index.module.scss';

const BurgerWrapp = ({ children }) => {
  return (
    <div className={styles.BurgerWrapp}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default BurgerWrapp;
