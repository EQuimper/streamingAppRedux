import * as types from "../constants";

let streamFavorites = JSON.parse(localStorage.getItem('streamFavorites'));

const initialState = streamFavorites ? streamFavorites : [];

const streamFavoriteReducer = (streamFavorites = initialState, action) => {

  switch (action.type) {
    case types.ADD_STREAM_TO_FAVORITE:
      return [
        ...streamFavorites,
        action.stream
      ];
    case types.REMOVE_STREAM_TO_FAVORITE:
      return [
        ...streamFavorites.filter(info => info._id !== action.streamId)
      ];
    default:
      return streamFavorites;
  }

};

export default streamFavoriteReducer;
