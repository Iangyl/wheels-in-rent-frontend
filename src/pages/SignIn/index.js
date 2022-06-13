import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./index.module.scss";
import { constants } from "../../utils";
import { animations } from "../../assets";
import { signIn } from "../../api/auth";
import { login } from "../../modules/store/sessionReducer";
import { useAppDispatch } from "../../modules/store/hooks";
import { useToast } from "../../components/ToastProvider";
import { AuthForm, HeaderEmpty, LottiePlayer } from "../../components";

const { formTypes, authLottieOptions } = constants;

const SignIn = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {data} = await signIn(formData);
      dispatch(login({token: data.token}));
      addToast("Success!", "success", 3000);
      navigate("/");
    } catch (e) {
      addToast(`Error: ${e.message}`, "error", 3000);
    } finally {
      setFormData({
        email: "",
        password: "",
      });
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
          <AuthForm
            {...formData}
            formType={formTypes.signIn}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
