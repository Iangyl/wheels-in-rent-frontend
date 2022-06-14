import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import links from "./links.config";
import styles from "./index.module.scss";
import images from "../../assets/images";
import routes from "../../modules/routes/routes";
import Icon from "../Icon";
import { useAppSelector } from "../../modules/store/hooks";
import Button from "../Button";
import { useAppDispatch } from "../../modules/store/hooks";
import { logout } from "../../modules/store/sessionReducer";

const { icons } = images;

const Header = () => {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.session);

  const link = useMemo(() => {
    if (user?.role === "ADMIN") return routes.ADMIN_DASHBOARD;
    else return routes.PAGE_UNDER_CONSTRUCTION;
  }, [user?.role]);

  const handleButtonClick = () => {
    dispatch(logout('LOGOUT'));
  };

  return (
    <div className={styles.Header}>
      <div className="wrapper">
        <div className={styles.container}>
          <div>
            <Link className={styles.mainLink} to="/">
              Wheel In Rent
            </Link>
          </div>
          <div className={styles.linksContainer}>
            {links.map((link) => (
              <NavLink
                key={link.id}
                className={(navData) =>
                  navData.isActive ? styles.linkActive : styles.link
                }
                to={link.path}
              >
                <div>{link.title}</div>
              </NavLink>
            ))}
          </div>
          <div className={user ? styles.userBlock : styles.linksContainer}>
            {token ? (
              <>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.linkActive : styles.link
                  }
                  to={link}
                >
                  <div className={styles.signInContainer}>
                    <Icon className={styles.avatar} src={icons.user} />
                    <span>{user?.user_name}</span>
                  </div>
                </NavLink>
                <Button
                  onClick={handleButtonClick}
                  placeholder="Logout"
                  type="button"
                  className={styles.logout}
                />
              </>
            ) : (
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.linkActive : styles.link
                }
                to={routes.SIGN_IN}
              >
                <div className={styles.signInContainer}>
                  <img src={icons.lock} className={styles.signInIcon} alt="" />
                  Sign In
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
