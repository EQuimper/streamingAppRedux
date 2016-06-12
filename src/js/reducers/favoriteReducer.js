import * as types from '../constants';

let gameFavorites = JSON.parse(localStorage.getItem('gameFavorites'));
const initialState = gameFavorites ? gameFavorites : [];

const favoriteReducer = (gameFavorites = initialState, action) => {
    switch (action.type) {
        case types.ADD_GAME_TO_FAVORITE:
            return [
                ...gameFavorites,
                action.game
            ];
        case types.REMOVE_GAME_FROM_FAVORITE:
            const { _id } = action.game.game;
            return [
                ...gameFavorites.filter(info => info.game._id !== _id)
            ];
        default:
            return gameFavorites;
    }
};

export default favoriteReducer;
