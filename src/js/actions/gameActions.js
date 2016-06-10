import request from 'superagent';
/*>>>>>>=============================================<<<<<<*/

import * as types from '../constants/';
/*>>>>>>=============================================<<<<<<*/

export const reqAllGames = (games) => {
    const promise = new Promise((resolve, reject) => {
        request
            .get(`https://api.twitch.tv/kraken/games/top?limit=24&offset=0`)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body.top);
                }
            });
    });
    return {
        type: types.RECEIVE_ALL_GAMES,
        payload: promise
    };
};

export const addGameToFavorite = (gameId) => {
    return {
        type: types.ADD_GAME_TO_FAVORITE,
        gameId
    };
};

export const removeGameFromFavorite = (gameId) => {
    return {
        type: types.REMOVE_GAME_FROM_FAVORITE,
        gameId
    };
};
