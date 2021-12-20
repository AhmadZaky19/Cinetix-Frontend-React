import React, { useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../../stores/actions/auth";
import { getDataUser } from "../../../stores/actions/user";
import styles from "./FormLogin.module.css";
import TickitzPurple from "../../../assets/img/tickitz purple.png";
import Google from "../../../assets/img/google.png";
import Facebook from "../../../assets/img/facebook.png";

const FormLogin = (props) => {
  const history = useHistory();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  });

  const [isError, setError] = useState(props.auth.msg);

  const handleChangeForm = (event) => {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await props.login(formLogin);
      setError(response.value.data.msg);
      localStorage.setItem("token", response.value.data.data.token);
      localStorage.setItem("refreshToken", response.value.data.data.refreshToken);
      props.getDataUser(response.value.data.data.id).then((res) => {
        localStorage.setItem("role", res.value.data.data[0].role);
        let role = res.value.data.data[0].role;
        if (role === "admin") {
          setTimeout(() => {
            history.push("/manage-movie");
          }, 2000);
        } else {
          setTimeout(() => {
            history.push("/home");
          }, 2000);
        }
      });
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
        <h1>Sign In</h1>
        <p>Sign in with your data that you entered during your registration</p>
      </div>
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmit} onReset={handleReset}>
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
            Sign in
          </button>
        </form>
        <div className={`${styles.reset}`}>
          <p>
            Not have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <div className={`${styles.reset}`}>
          <p>
            Forgot your password? <Link to="/reset-password">Reset now</Link>
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

const mapDispatchToProps = { login, getDataUser };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FormLogin);
