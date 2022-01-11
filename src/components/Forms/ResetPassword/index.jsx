import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../../stores/actions/auth";
import { getDataUser } from "../../../stores/actions/user";
import styles from "./FormResetPass.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";

const FormResetPassword = (props) => {
  const [form, setForm] = useState({
    email: ""
  });

  const [isError, setError] = useState(props.auth.msg);

  const handleChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleForgotPassword = async (event) => {
    try {
      event.preventDefault();
      const { email } = form;
      // console.log(email);
      const response = await props.ForgotPassword(email);
      setError(response.value.data.msg);
      toast.success(`${response.value.data.msg}`);
    } catch (error) {
      toast.error("Email not found!");
    }
  };

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
