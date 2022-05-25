import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import styles from "./index.module.scss";
import routes from "../../modules/routes/routes";

const AuthForm = ({
  name,
  email,
  password,
  onSubmit,
  onChange,
  confirmPassword,
  formType,
}) => {
  const title =
    formType === "sign_in"
      ? "Sign in to WheelInRent"
      : "Sign up to WheelInRent";
  const buttonText = formType === "sign_in" ? "Sign in" : "Sign up";
  return (
    <div className={styles.AuthForm}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subtitle}>
        {formType === "sign_in" ? (
          <>
            or{" "}
            <Link to={routes.SIGN_UP} className={styles.link}>
              Sign up
            </Link>
          </>
        ) : (
          <>
            or{" "}
            <Link to={routes.SIGN_IN} className={styles.link}>
              Sign in
            </Link>
          </>
        )}
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        {formType !== "sign_in" ? (
          <input
            value={name}
            type="text"
            placeholder="Name"
            className={styles.name}
          />
        ) : (
          ""
        )}
        <input
          value={email}
          type="email"
          placeholder="Email"
          className={styles.email}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          className={styles.password}
        />
        {formType !== "sign_in" ? (
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm password"
            className={styles.password}
          />
        ) : (
          ""
        )}
        <Button
          type="submit"
          placeholder={buttonText}
          className={styles.button}
        />
      </form>
    </div>
  );
};

export default AuthForm;
