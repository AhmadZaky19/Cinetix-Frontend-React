import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../../stores/actions/auth";
import { getDataUser } from "../../../stores/actions/user";
import styles from "./FormConfirmPass.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";

const FormConfirmPassword = (props) => {
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
        <h1>Fill your new password</h1>
      </div>
      <div>
        {/* {this.state.isError && <div className="alert alert-danger">{msg}</div>} */}
        <form
        // onSubmit={this.handleSubmit}
        // onReset={this.handleReset}
        >
          <div className={`${styles.field__input} mb-3`}>
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className={`${styles.formIn} form-control`}
              placeholder="Write your new password"
              name="password"
              // onChange={this.handleChangeForm}
            />
            <i className="bi bi-eye"></i>
          </div>
          <div className={`${styles.field__input} mb-3`}>
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className={`${styles.formIn} form-control`}
              placeholder="Confirm your new password"
              name="password"
              // onChange={this.handleChangeForm}
            />
            <i className="bi bi-eye"></i>
          </div>
          <button className={`${styles.SignIn} btn btn-primary`} type="submit">
            Confirm
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FormConfirmPassword);
