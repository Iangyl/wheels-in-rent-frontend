import React, { useState } from "react";
import styles from "./index.module.scss";
import { constants } from "../../utils";
import { animations } from "../../assets";
import { signUp } from "../../api/auth";
import { useToast } from "../../components/ToastProvider";
import { AuthForm, HeaderEmpty, LottiePlayer } from "../../components";

const { formTypes, authLottieOptions } = constants;

const SignUp = () => {
  const {addToast} = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    try {
      const data = await signUp(formData);
      if (data !== "Ok") {
        new Error(data);
        addToast(
          `Error: ${data.message}`,
          'error',
          3000
        )
      }
        
      addToast(
        'Success!',
        'success',
        3000
      )
    } catch (e) {
      console.error(e);
      addToast(
        `Error: ${e.message}`,
        'error',
        3000
      )
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

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
          <AuthForm
            {...formData}
            formType={formTypes.signUp}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
