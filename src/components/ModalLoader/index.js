import React from "react";
import LottiePlayer from "../LottiePlayer";
import { loadingWheel } from "../../assets/animations";
import styles from "./index.module.scss";

const options = {
  with: 300,
  height: 300,
};

const ModalLoader = ({
  title,
  message = "Processing your request. Please wait...",
}) => {
  return (
    <div className={styles.ModalLoader}>
      <div className={styles.modalTitleContainer}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalSubtitle}>{message}</div>
        <div className={styles.modalLoadingSpinnerContainer}>
          <LottiePlayer
            src={loadingWheel}
            style={options}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalLoader;
