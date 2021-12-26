const initialState = {
  isError: false,
  isLoading: false,
  msg: ""
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKING_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "BOOKING_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "BOOKING_REJECTED": {
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

export default booking;
