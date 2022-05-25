import React from "react";
import styles from './index.module.scss';
import {BurgerWrapp, LottiePlayer, AboutUs} from '../../components';
import {animations} from '../../assets';
import { errorPage } from "../../assets/static";

const options = {
  src: animations.underConstructionAnimation,
  style: {
    width: 650,
    height: 650,
  }
}

const PageUnderConstruction = () => {
  return (
    <BurgerWrapp>
      <div className={styles.PageUnderConstruction}>
      <div className="wrapper">
          <AboutUs {...errorPage.underConstructionText} />
          <LottiePlayer {...options} />
        </div>
      </div>
    </BurgerWrapp>
  )
}

export default PageUnderConstruction
