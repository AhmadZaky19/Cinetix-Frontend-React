const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: [],
  pageInfo: {},
  isUpdate: false
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_DATA_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination
      };
    }
    case "GET_DATA_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        data: [],
        pageInfo: {}
      };
    }
    case "GET_DATA_MOVIE_BY_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_DATA_MOVIE_BY_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        data: action.payload.data.data
      };
    }
    case "GET_DATA_MOVIE_BY_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        data: []
      };
    }
    case "POST_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "POST_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "POST_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }
    case "UPDATE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "UPDATE_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }
    case "DELETE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "DELETE_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "DELETE_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: "action.payload.response.data.msg"
      };
    }
    case "SET_DATA_UPDATE": {
      return {
        ...state,
        movies: action.movies,
        isUpdate: true
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default movie;
