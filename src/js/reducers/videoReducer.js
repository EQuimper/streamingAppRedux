import * as types from "../constants/";

const videoReducer = (videos = { isFetched: false }, action) => {

  switch (action.type) {
    case `${types.RECEIVE_VIDEOS_FROM_CHANNEL}_PENDING`:
      return {};
    case `${types.RECEIVE_VIDEOS_FROM_CHANNEL}_FULFILLED`:
      return {
        videos:    action.payload,
        err:       null,
        isFetched: true
      };
    case `${types.RECEIVE_VIDEOS_FROM_CHANNEL}_REJECTED`:
      return {
        videos:    null,
        err:       action.payload,
        isFetched: true
      };
    default:
      return videos;
  }

};

export default videoReducer;
