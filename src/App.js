import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import ConfirmPassword from "./pages/auth/ConfirmPassword";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import OrderPage from "./pages/main/Order";
import PaymentPage from "./pages/main/Payment";
import TicketResult from "./pages/main/Ticket";
import ManageMovie from "./pages/admin/ManageMovie";
import ManageSchedule from "./pages/admin/ManageSchedule";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/profile";

import PrivateRoute from "./helpers/routes/PrivateRoute";
import PublicRoute from "./helpers/routes/PublicRoute";
import AdminRoute from "./helpers/routes/AdminRoute";

import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <PublicRoute path="/login" restricted={true} exact component={Login} />
              <PublicRoute path="/register" restricted={true} exact component={Register} />
              <PublicRoute
                path="/reset-password"
                restricted={true}
                exact
                component={ResetPassword}
              />
              <PublicRoute
                path="/confirm-password"
                restricted={true}
                exact
                component={ConfirmPassword}
              />
              <PrivateRoute path="/home" exact component={Home} />
              <PrivateRoute path="/movie-detail/:id" exact component={MovieDetail} />
              <PrivateRoute path="/order" exact component={OrderPage} />
              <PrivateRoute path="/payment" exact component={PaymentPage} />
              <PrivateRoute path="/ticket" exact component={TicketResult} />
              <AdminRoute path="/manage-movie" exact component={ManageMovie} />
              <AdminRoute path="/manage-schedule" exact component={ManageSchedule} />
              <AdminRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/profile" exact component={Profile} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
