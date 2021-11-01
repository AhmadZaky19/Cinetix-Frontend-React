import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import OrderPage from "./pages/main/Order";
import PaymentPage from "./pages/main/Payment";
import ManageMovie from "./pages/admin/ManageMovie";
import ManageSchedule from "./pages/admin/ManageSchedule";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/movie-detail/:id" exact component={MovieDetail} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/payment" exact component={PaymentPage} />
          <Route path="/manage-movie" exact component={ManageMovie} />
          <Route path="/manage-schedule" exact component={ManageSchedule} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
