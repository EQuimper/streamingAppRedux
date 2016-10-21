import * as types from "../constants/";

const streamReducer = (streams = { isFetched: false }, action) => {

  switch (action.type) {
    case `${types.RECEIVE_STREAMS}_PENDING`:
      return {};
    case `${types.RECEIVE_STREAMS}_FULFILLED`:
      return {
        streams:   action.payload,
        err:       null,
        isFetched: true
      };
    case `${types.RECEIVE_STREAMS}_REJECTED`:
      return {
        streams:   null,
        err:       action.payload,
        isFetched: true
      };
    default:
      return streams;
  }

};

export default streamReducer;
