import axios from "../../utils/axios";

export const getSchedule = (location, movieId, sort, order, page, limit) => {
  return {
    type: "GET_SCHEDULE",
    payload: axios.get(
      `schedule/?location=${location}&movieId=${movieId}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
    )
  };
};

export const postSchedule = (data) => {
  return {
    type: "POST_SCHEDULE",
    payload: axios.post("schedule/", data)
  };
};

export const updateSchedule = (id, data) => {
  return {
    type: "UPDATE_SCHEDULE",
    payload: axios.patch(`schedule/${id}`, data)
  };
};

export const deleteSchedule = (id) => {
  return {
    type: "DELETE_SCHEDULE",
    payload: axios.delete(`schedule/${id}`)
  };
};

export const setDataUpdate = (data) => {
  return {
    type: "SET_DATA_UPDATE",
    schedules: data
  };
};
