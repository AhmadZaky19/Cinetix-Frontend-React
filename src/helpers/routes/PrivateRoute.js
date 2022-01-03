import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");

  const { dataUser } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && dataUser.role === "user" ? (
          <Component {...props} />
        ) : isAuthenticated && dataUser.role === "admin" ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
