const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  dashboard: []
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DASHBOARD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
        dashboard: []
      };
    }

    case "GET_DASHBOARD_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.data.msg,
        dashboard: action.payload.data.data
      };
    }

    case "GET_DASHBOARD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg,
        dashboard: []
      };
    }
    default: {
      return state;
    }
  }
};

export default dashboard;
