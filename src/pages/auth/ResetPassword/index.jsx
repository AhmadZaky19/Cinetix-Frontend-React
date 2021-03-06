import React, { useEffect } from "react";
import styles from "./ResetPass.module.css";
import TickitzWhite from "../../../assets/img/tickitz white.png";
import Image from "../../../assets/img/image 1.png";
import FormResetPassword from "../../../components/Forms/ResetPassword";

const ForgotPassword = () => {
  useEffect(() => {
    document.title = "Reset Password";
  }, []);
  return (
    <div className={`${styles.contain} container-fluid`}>
      <div className="row gx-0">
        <div className={`${styles.column1} col-md-7 d-none d-md-inline-block`}>
          <div className={`${styles.row__overlay}`}>
            <span className={`${styles.row__overlay__title}`}>
              <img src={TickitzWhite} alt="App" className={`${styles.authLogo}`} />
            </span>
            <h1 className={`${styles.authLogo__h1}`}>Lets reset your password</h1>
            <p className={`${styles.authLogo__p}`}>
              {" "}
              To be able to use your account again, please
              <br />
              complete the following steps.
            </p>
            <div className={`${styles.steper}`}>
              <div className={`${styles.steper__list} ${styles.steper__list__active}`}>
                Fill your complete email
              </div>
              <div className={`${styles.steper__list__line}`}></div>
              <div className={`${styles.steper__list}`}>Activate your account</div>
              <div className={`${styles.steper__list__line}`}></div>
              <div className={`${styles.steper__list}`}>Enter your new password</div>
              <div className={`${styles.steper__list__line}`}></div>
              <div className={`${styles.steper__list}`}>Done</div>
            </div>
          </div>
          <img src={Image} alt="Landing page" className={`${styles.row__image}`} />
        </div>
        <div className={`${styles.column2} col-md-5 col-sm-12`}>
          <FormResetPassword />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
