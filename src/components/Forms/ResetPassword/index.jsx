import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { login } from "../../../stores/actions/auth";
import { getDataUser } from "../../../stores/actions/user";
import styles from "./FormResetPass.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";
import Google from "../../../assets/img/google.png";
import Facebook from "../../../assets/img/facebook.png";

const FormResetPassword = (props) => {
  // handleChangeForm = (event) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [event.target.name]: event.target.value
  //     }
  //   });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props
  //     .login(this.state.form)
  //     .then((res) => {
  //       localStorage.setItem("token", res.value.data.data.token);
  //       this.props.getDataUser(res.value.data.data.id).then((res) => {
  //         localStorage.setItem("role", res.value.data.data[0].role);
  //         if (res.value.data.data[0].role === "admin") {
  //           this.props.history.push("/manage-movie");
  //         } else {
  //           this.props.history.push("/home");
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         isError: true
  //       });
  //       setTimeout(() => {
  //         this.setState({
  //           isError: false
  //         });
  //       }, 3000);
  //     });
  // };

  // handleReset = (event) => {
  //   event.preventDefault();
  // };

  // const { isError, msg } = this.props.auth;
  return (
    <div className={`${styles.form}`}>
      <div className={`${styles.form__input}`}>
        <div className={`${styles.mobile__only}`}>
          <img src={TickitzPurple} alt="" />
        </div>
        <h1>Fill your complete email</h1>
        <p>we will send a link to your email shortly</p>
      </div>
      <div>
        {/* {this.state.isError && <div className="alert alert-danger">{msg}</div>} */}
        <form
        // onSubmit={this.handleSubmit}
        // onReset={this.handleReset}
        >
          <div className={`${styles.field__input} mb-3`}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`${styles.formIn} form-control`}
              placeholder="Write your email"
              name="email"
              // onChange={this.handleChangeForm}
            />{" "}
          </div>
          <button className={`${styles.SignIn} btn btn-primary`} type="submit">
            Activate now
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { login, getDataUser };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FormResetPassword);
