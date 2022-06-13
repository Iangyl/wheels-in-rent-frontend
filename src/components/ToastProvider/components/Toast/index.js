import React, { useEffect, useMemo } from "react";
import { useToast } from "../../";
import images from "../../../../assets/images";

import styles from "./index.module.scss";

const {icons} = images;

const Toast = ({ message, type, time = 3000, id }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast, time]);

  const icon = useMemo(() => {
    if (type === 'success') return icons.success;
    else if (type === 'error') return icons.error;
    else return icons.warning;
  }, [type])

  return (
    <div className={styles.notifyWrapper}>
      <div className={styles.notifyImgContainer}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.notifyText}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
