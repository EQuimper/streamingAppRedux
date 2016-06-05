import request from 'superagent';
/*>>>>>>=============================================<<<<<<*/

import * as types from '../constants/';
/*>>>>>>=============================================<<<<<<*/

export const reqAllGames = (games) => {
    const promise = new Promise((resolve, reject) => {
        request
            .get(`https://api.twitch.tv/kraken/games/top`)
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

//export const reqOneGame = (game) => {
//    const promise = new Promise((resolve, reject) => {
//        request
//            .get(`https://api.twitch.tv/kraken/channels/${name}`)
//            .end((err, res) => {
//                if (err) {
//                    reject(err);
//                } else {
//                    resolve(res.body);
//                }
//            });
//
//    });
//    return {
//        type: types.RECEIVE_STREAM,
//        payload: promise
//    };
//};
