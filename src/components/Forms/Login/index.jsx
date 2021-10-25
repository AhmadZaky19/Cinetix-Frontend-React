import React, { Component } from "react";
import styles from "./FormLogin.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";
import Google from "../../../assets/img/google.png";
import Facebook from "../../../assets/img/facebook.png";
import axios from "../../../utils/axios";

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: ""
    };
  }

  handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submit Login");
    axios
      .post("auth/login", this.state.form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data.token);
        this.props.history.push("/home");
      })
      .catch((err) => {
        console.log(err.response);
        // this.setState({
        //   isError: true,
        //   msg: err.response.data.msg
        // });
        // setTimeout(() => {
        //   this.setState({
        //     isError: false,
        //     msg: ""
        //   });
        // }, 3000);
      });
  };

  handleReset = (event) => {
    event.preventDefault();
    // console.log("Reset Login");
  };

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
          {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <div className={`${styles.field__input} mb-3`}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`${styles.formIn} form-control`}
                placeholder="Write your email"
                name="email"
                onChange={this.handleChangeForm}
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
                name="password"
                onChange={this.handleChangeForm}
              />
              <i className="bi bi-eye"></i>
            </div>
            <button className={`${styles.SignIn} btn btn-primary`} type="submit">
              Sign in
            </button>
          </form>
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
