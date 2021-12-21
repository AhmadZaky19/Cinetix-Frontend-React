import axios from "../../utils/axios";

export const getDataMovie = (month, search, sort, order, page, limit) => {
  return {
    type: "GET_DATA_MOVIE",
    payload: axios.get(
      `movie?month=${month}&search=${search}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
    )
  };
};
