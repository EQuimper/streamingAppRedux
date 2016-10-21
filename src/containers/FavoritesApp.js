import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoriteActions from "../actions/gameActions";
import * as streamFavoriteActions from "../actions/streamActions";
import GameFavoritesList from "../components/GameFavoritesList";
import StreamFavoritesList from "../components/StreamFavoritesList";

const styles = {
  root:  {
    minHeight:      '600px',
    height:         '100%',
    display:        'flex',
    justifyContent: 'space-around',
    alignItems:     'center',
    margin:         'auto',
    width:          '80%'
  },
  title: {
    textAlign: 'center',
    marginTop: '60px'
  },
  card:  {
    margin: '0 10px'
  }
};

const FavoritesApp = ({ gameFavorites, actions, streamFavorites, streamActions }) => (

  <div>
    <h2 style={styles.title}>My Favorites</h2> <br />
    <div style={styles.root}>
      <GameFavoritesList gameFavorites={gameFavorites} actions={actions} />
      <StreamFavoritesList streamFavorites={streamFavorites} actions={streamActions} />
    </div>
  </div>

);

const mapState = (state) => ({
  gameFavorites:    state.gameFavorites,
  streamFavorites: state.streamFavorites
});

const mapDispatch = (dispatch) => ({
  actions:       bindActionCreators(favoriteActions, dispatch),
  streamActions: bindActionCreators(streamFavoriteActions, dispatch)
});

export default connect(mapState, mapDispatch)(FavoritesApp);
