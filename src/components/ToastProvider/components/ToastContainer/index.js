import React from "react";
import { createPortal } from "react-dom";
import Toast from "./../Toast";

import styles from "./index.module.scss";

const ToastContainer = ({ toasts }) => {
  return createPortal(
    <div className={styles.notificationWrapper}>
      {toasts.map((item) => (
        <Toast key={item.id} {...item} />
      ))}
    </div>,
    document.body
  );
};

export default ToastContainer;
