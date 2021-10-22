import React, { Component } from "react";
import styles from "./Login.module.css";
import TickitzWhite from "../../../assets/img/tickitz white.png";
import TickitzPurple from "../../../assets/img/tickitz purple.png";
import Quote from "../../../assets/img/quote.png";
import Image from "../../../assets/img/image 1.png";
import Google from "../../../assets/img/google.png";
import Facebook from "../../../assets/img/facebook.png";
import FormLogin from "../../../components/Forms/Login";

class Login extends Component {
  render() {
    return (
      <div className={`${styles.contain} container-fluid`}>
        <div className="row">
          <div className={`${styles.column1} col-md-7 d-none d-md-inline-block`}>
            <div className={`${styles.row__overlay}`}>
              <span className="row__overlay--title">
                <img src={TickitzWhite} alt="App" />
              </span>
              <span className={`${styles.row__overlay__quote}`}>
                <img src={Quote} alt="Quote" />
              </span>
            </div>
            <img src={Image} alt="Landing page" className={`${styles.row__image}`} />
          </div>
          <div className={`${styles.column2} col-md-5 col-sm-12`}>
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
