import React from "react";
import styles from "./index.module.scss";
import { constants } from "../../utils";
import { animations } from "../../assets";
import { AuthForm, HeaderEmpty, LottiePlayer } from "../../components";

const {formTypes, authLottieOptions} = constants;

const SignIn = () => {
  return (
    <div className={styles.SignIn}>
      <HeaderEmpty />
      <div className={styles.body}>
        <div className={styles.left}>
          <LottiePlayer
            src={animations.signInAnimation}
            style={authLottieOptions}
          />
        </div>
        <div className={styles.content}>
          <AuthForm formType={formTypes.signIn} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
