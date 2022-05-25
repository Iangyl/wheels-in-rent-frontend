import React from "react";
import styles from "./index.module.scss";
import { constants } from "../../utils";
import { animations } from "../../assets";
import { AuthForm, HeaderEmpty, LottiePlayer } from "../../components";

const {formTypes, authLottieOptions} = constants;

const SignUp = () => {
  return (
    <div className={styles.SignUp}>
      <HeaderEmpty />
      <div className={styles.body}>
        <div className={styles.left}>
          <LottiePlayer
            src={animations.signInAnimation}
            style={authLottieOptions}
          />
        </div>
        <div className={styles.content}>
          <AuthForm formType={formTypes.signUp} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
