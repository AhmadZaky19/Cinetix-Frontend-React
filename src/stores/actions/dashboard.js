import axios from "../../utils/axios";

export const getDashboard = (data) => {
  return {
    type: "GET_DASHBOARD",
    payload: axios.get(
      `booking/dashboard?movieId=${data.movieId}&location=${data.location}&premiere=${data.premiere}`
    )
  };
};
