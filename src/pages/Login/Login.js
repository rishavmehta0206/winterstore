import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.fields}>
            <span>Name:</span>
            <input placeholder="enter username" type="text" />
          </div>
          <div className={styles.fields}>
            <span>Password:</span>
            <input placeholder="enter password" type="password" />
          </div>
          <div className={styles.fields}>
            <button>Login.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
