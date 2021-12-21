const initialState = {
  dataUser: {},
  isError: false,
  isLoading: false,
  msg: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GET_DATA_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataUser: action.payload.data.data[0],
        msg: action.payload.data.msg
      };
    }
    case "GET_DATA_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default user;