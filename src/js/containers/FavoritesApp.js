import React from 'react';
import { connect } from 'react-redux';

import GameFavoritesList from '../components/GameFavoritesList';
import StreamFavoritesList from '../components/StreamFavoritesList';

const styles = {
    root: {
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginTop: '30px'
    },
    card: {
        margin: '0 10px'
    }
};

const FavoritesApp = ({ gameFavorites }) => (
    <div>
        <h2 style={styles.title}>My Favorites</h2> <br />
        <div style={styles.root}>
            <GameFavoritesList gameFavorites={gameFavorites} />
            <StreamFavoritesList />
        </div>
    </div>
);

const mapState = (state) => ({ gameFavorites: state.gameFavorites });

export default connect(mapState)(FavoritesApp);
