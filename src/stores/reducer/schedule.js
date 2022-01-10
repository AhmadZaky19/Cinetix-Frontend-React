const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: [],
  pageInfo: {},
  isUpdate: false
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination
      };
    }
    case "GET_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        data: [],
        pageInfo: {}
      };
    }
    case "POST_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "POST_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "POST_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }
    case "UPDATE_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "UPDATE_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "UPDATE_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }
    case "DELETE_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "DELETE_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "DELETE_SCHEDULE_REJECTED": {
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
        schedules: action.schedules,
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

export default schedule;
