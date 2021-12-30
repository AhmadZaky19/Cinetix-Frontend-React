import axios from "../../utils/axios";

export const getScheduleById = (location, movieId, order, page, limit) => {
  return {
    type: "SCHEDULE_BY_ID",
    payload: axios.get(
      `schedule/?location=${location}&movieId=${movieId}&order=${order}&page=${page}&limit=${limit}`
    )
  };
};
