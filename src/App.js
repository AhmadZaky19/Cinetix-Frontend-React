import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import OrderPage from "./pages/main/Order";
import PaymentPage from "./pages/main/Payment";
import ManageMovie from "./pages/admin/ManageMovie";
import ManageSchedule from "./pages/admin/ManageSchedule";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/profile";

import PrivateRoute from "./helpers/routes/PrivateRoute";
import PublicRoute from "./helpers/routes/PublicRoute";

import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute path="/login" restricted={true} exact component={Login} />
            <PublicRoute path="/register" restricted={true} exact component={Register} />
            <PublicRoute path="/reset-password" restricted={true} exact component={ResetPassword} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/movie-detail/:id" exact component={MovieDetail} />
            <PrivateRoute path="/order" exact component={OrderPage} />
            <PrivateRoute path="/payment" exact component={PaymentPage} />
            <PrivateRoute path="/manage-movie" exact component={ManageMovie} />
            <PrivateRoute path="/manage-schedule" exact component={ManageSchedule} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
