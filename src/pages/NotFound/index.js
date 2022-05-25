import React from "react";
import styles from './index.module.scss';
import {BurgerWrapp, LottiePlayer, AboutUs} from '../../components';
import {animations} from '../../assets';
import { errorPage } from "../../assets/static";

const options = {
  src: animations.notFoundAnimation,
  style: {
    width: 650,
    height: 650,
  }
}

const NotFound = () => {
  return (
    <BurgerWrapp>
      <div className={styles.NotFound}>
        <div className="wrapper">
          <AboutUs {...errorPage.notFoundText} />
          <LottiePlayer {...options} />
        </div>
      </div>
    </BurgerWrapp>
  )
}

export default NotFound
