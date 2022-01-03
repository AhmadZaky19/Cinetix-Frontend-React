import axios from "../../utils/axios";

export const getDataMovie = (month, search, sort, order, page, limit) => {
  return {
    type: "GET_DATA_MOVIE",
    payload: axios.get(
      `movie?month=${month}&search=${search}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
    )
  };
};

export const getDataMovieById = (movieId) => {
  return {
    type: "GET_DATA_MOVIE_BY_ID",
    payload: axios.get(`movie/${movieId}`)
  };
};

export const postMovie = (data) => {
  return {
    type: "POST_MOVIE",
    payload: axios.post("movie/", data)
  };
};

export const updateMovie = (id, data) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axios.patch(`movie/${id}`, data)
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axios.delete(`movie/${id}`)
  };
};

export const setDataUpdate = (data) => {
  return {
    type: "SET_DATA_UPDATE",
    movies: data
  };
};
