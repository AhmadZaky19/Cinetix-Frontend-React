import React, { Component } from "react";
import styles from "./FormLogin.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";
import Google from "../../../assets/img/google.png";
import Facebook from "../../../assets/img/facebook.png";

class FormLogin extends Component {
  render() {
    return (
      <div className={`${styles.form}`}>
        <div className={`${styles.form__input}`}>
          <div className={`${styles.mobile__only}`}>
            <img src={TickitzPurple} alt="" />
          </div>
          <h1>Sign In</h1>
          <p>Sign in with your data that you entered during your registration</p>
        </div>
        <div>
          <div className={`${styles.field__input} mb-3`}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`${styles.formIn} form-control`}
              placeholder="Write your email"
            />{" "}
          </div>
          <div className={`${styles.field__input} mb-3`}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`${styles.formIn} form-control`}
              placeholder="Write your password"
            />
            <i className="bi bi-eye"></i>
          </div>
          <a href="homePage.html" className={`${styles.SignIn} btn btn-primary`} role="button">
            Sign in
          </a>
          <div className={`${styles.reset}`}>
            <p>
              Forgot your password? <a href="">Reset now</a>
            </p>
          </div>
        </div>
        <div className={`${styles.section_or}`}>
          <span className={`${styles.section_or_line}`}></span>
          <h2>Or</h2>
          <span className={`${styles.section_or_line}`}></span>
        </div>
        <div className={`${styles.link_button}`}>
          <button role="button" className="mx-5">
            <i>
              <img src={Google} alt="google" />
            </i>
            <p>Google</p>
          </button>
          <button type="button" className="mx-5">
            <i>
              <img src={Facebook} alt="facebook" />
            </i>
            <p>Facebook</p>
          </button>
        </div>
      </div>
    );
  }
}

export default FormLogin;
