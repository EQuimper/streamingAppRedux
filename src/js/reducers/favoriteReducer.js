import * as types from '../constants';

const favoriteReducer = (favorite = [], action) => {
    switch (action.type) {
        case types.ADD_GAME_TO_FAVORITE:
            return [
                ...favorite,
                action.gameId
            ];
        case types.REMOVE_GAME_FROM_FAVORITE:
            return [
                ...favorite.filter(id => id !== action.gameId)
            ];
        default:
            return favorite;
    }
};

export default favoriteReducer;
