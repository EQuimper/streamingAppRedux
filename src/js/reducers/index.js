import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({

  streams:         require('./streamReducer').default,
  stream:          require('./singleStreamReducer').default,
  videos:          require('./videoReducer').default,
  games:           require('./gameReducer').default,
  featured:        require('./featureStreamReducer').default,
  gameFavorites:   require('./favoriteReducer').default,
  streamFavorites: require('./streamFavoriteReducer').default,
  routing:         routerReducer,
  toastr:          toastrReducer

});
