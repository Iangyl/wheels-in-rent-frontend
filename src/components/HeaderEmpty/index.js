import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import images from "../../assets/images";
import routes from '../../modules/routes/routes';
import Icon from "../Icon";

const { icons } = images;

const HeaderEmpty = () => {
  return (
    <div className={styles.HeaderEmpty}>
      <div className="wrapper">
        <div className={styles.linksContainer}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.linkActive : styles.link
            }
            to={routes.HOME}
          >
            <div><Icon src={icons.arrow} className={styles.icon} /> Return to Homepage</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderEmpty;
