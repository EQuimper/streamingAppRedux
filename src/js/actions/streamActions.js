import request from 'superagent';
/*>>>>>>=============================================<<<<<<*/

import * as types from '../constants/';
/*>>>>>>=============================================<<<<<<*/

export const reqStreams = (game) => {
    const promise = new Promise((resolve, reject) => {
        request
            .get(`https://api.twitch.tv/kraken/search/streams?limit=100&offset=25&q=${game}`)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body.streams);
                }
            });
    });
    return {
        type: types.RECEIVE_STREAMS,
        payload: promise
    };
};

export const reqOneStream = (name) => {
    const promise = new Promise((resolve, reject) => {
        request
            .get(`https://api.twitch.tv/kraken/channels/${name}`)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });

    });
    return {
        type: types.RECEIVE_STREAM,
        payload: promise
    };
};
