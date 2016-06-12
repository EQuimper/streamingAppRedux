import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favoriteActions from '../actions/gameActions';

import GameFavoritesList from '../components/GameFavoritesList';
import StreamFavoritesList from '../components/StreamFavoritesList';

const styles = {
    root: {
        minHeight: '600px',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        width: '70%'
    },
    title: {
        textAlign: 'center',
        marginTop: '60px'
    },
    card: {
        margin: '0 10px'
    }
};

const FavoritesApp = ({ gameFavorites, actions }) => (
    <div>
        <h2 style={styles.title}>My Favorites</h2> <br />
        <div style={styles.root}>
            <GameFavoritesList gameFavorites={gameFavorites} actions={actions} />
            <StreamFavoritesList />
        </div>
    </div>
);

const mapState = (state) => ({ gameFavorites: state.gameFavorites });

const mapDispatch = (dispatch) => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(mapState, mapDispatch)(FavoritesApp);
