import React, { useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../../../stores/actions/auth";
import styles from "./FormRegister.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";
import Google from "../../../assets/img/google.png";
import Facebook from "../../../assets/img/facebook.png";

const FormRegister = (props) => {
  const history = useHistory();

  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [isError, setError] = useState(props.auth.msg);

  const handleChangeForm = (event) => {
    setFormRegister({ ...formRegister, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await props.register(formRegister);
      setError(response.value.data.msg);
      setTimeout(() => {
        history.push("/login");
      }, 2000);
      toast.success(`${response.value.data.msg}`);
    } catch (error) {
      toast.error(`${error.response.data.msg}`);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.form}`}>
      <div className={`${styles.form__input}`}>
        <div className={`${styles.mobile__only}`}>
          <img src={TickitzPurple} alt="" />
        </div>
        <h1>Fill your additional details</h1>
      </div>
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className={`${styles.field__input} mb-3`}>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className={`${styles.formIn} form-control`}
              placeholder="Write your first name"
              name="firstName"
              onChange={handleChangeForm}
            />{" "}
          </div>
          <div className={`${styles.field__input} mb-3`}>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className={`${styles.formIn} form-control`}
              placeholder="Write your last name"
              name="lastName"
              onChange={handleChangeForm}
            />{" "}
          </div>
          <div className={`${styles.field__input} mb-3`}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`${styles.formIn} form-control`}
              placeholder="Write your email"
              name="email"
              onChange={handleChangeForm}
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
              onChange={handleChangeForm}
            />
            <i className="bi bi-eye"></i>
          </div>
          <button className={`${styles.SignIn} btn btn-primary`} type="submit">
            Join for free now
          </button>
        </form>
        <div className={`${styles.reset}`}>
          <p>
            Do you already have an account? <Link to="/login">Log in</Link>
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
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { register };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FormRegister);
