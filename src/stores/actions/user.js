import axios from "../../utils/axios";

export const getDataUser = (data) => {
  return {
    type: "GET_DATA_USER",
    payload: axios.get(`user/${data}`)
  };
};
