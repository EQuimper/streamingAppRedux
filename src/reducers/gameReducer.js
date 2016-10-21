import * as types from "../constants/";

const gameReducer = (games = { isFetched: false }, action) => {

  switch (action.type) {
    case `${types.RECEIVE_ALL_GAMES}_PENDING`:
      return {};
    case `${types.RECEIVE_ALL_GAMES}_FULFILLED`:
      return {
        games:     action.payload,
        err:       null,
        isFetched: true
      };
    case `${types.RECEIVE_ALL_GAMES}_REJECTED`:
      return {
        games:     null,
        err:       action.payload,
        isFetched: true
      };
    default:
      return games;
  }

};

export default gameReducer;
