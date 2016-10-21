import * as types from "../constants/";

const featureStreamReducer = (featured = { isFetched: false }, action) => {

  switch (action.type) {
    case `${types.RECEIVE_FEATURES_STREAMS}_PENDING`:
      return {};
    case `${types.RECEIVE_FEATURES_STREAMS}_FULFILLED`:
      return {
        featured:  action.payload,
        err:       null,
        isFetched: true
      };
    case `${types.RECEIVE_FEATURES_STREAMS}_REJECTED`:
      return {
        featured:  null,
        err:       action.payload,
        isFetched: true
      };
    default:
      return featured;
  }

};

export default featureStreamReducer;
