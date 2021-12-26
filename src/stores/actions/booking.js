import axios from "../../utils/axios";

export const postBooking = (data) => {
  return {
    type: "BOOKING",
    payload: axios.post("booking", data)
  };
};
