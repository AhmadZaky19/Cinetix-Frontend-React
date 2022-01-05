import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuthentication = localStorage.getItem("token");

  const { dataUser } = useSelector((state) => state.user);
  // const roles = dataUser.dataUser.role;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthentication && dataUser.role === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default AdminRoute;
