import React from "react";
import routes from "../../modules/routes/routes";

import classNames from "classnames";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const AdminWrapper = ({ children }) => {
  return (
    <div className={styles.AdminWrapper}>
      <div className="wrapper">
        <div className={styles.tabsContainer}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.linkActive : styles.link
            }
            to={routes.ADMIN_DASHBOARD}
          >
            <div className={classNames(styles.tab)}>Dashboard</div>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.linkActive : styles.link
            }
            to={routes.DATA_ADMINISTRATION}
          >
            <div className={classNames(styles.tab)}>Data Administration</div>
          </NavLink>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AdminWrapper;
