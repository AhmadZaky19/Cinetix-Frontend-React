import { combineReducers } from "redux";

import auth from "./auth";
import movie from "./movie";
import schedule from "./schedule";
import user from "./user";
import booking from "./booking";
import dashboard from "./dashboard";

export default combineReducers({
  auth,
  movie,
  schedule,
  user,
  booking,
  dashboard
});
