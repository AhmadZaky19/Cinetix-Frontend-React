const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: [],
  pageInfo: {}
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case "SCHEDULE_BY_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "SCHEDULE_BY_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination
      };
    }
    case "SCHEDULE_BY_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
        data: [],
        pageInfo: {}
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
