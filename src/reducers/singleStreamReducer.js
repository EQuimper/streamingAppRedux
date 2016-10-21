import * as types from "../constants/";

const singleStreamReducer = (stream = { isFetched: false }, action) => {

  switch (action.type) {
    case `${types.RECEIVE_STREAM}_PENDING`:
      return {};
    case `${types.RECEIVE_STREAM}_FULFILLED`:
      return {
        stream:    action.payload,
        err:       null,
        isFetched: true
      };
    case `${types.RECEIVE_STREAM}_REJECTED`:
      return {
        stream:    null,
        err:       action.payload,
        isFetched: true
      };
    default:
      return stream;
  }

};

export default singleStreamReducer;
