import request from 'superagent';
/*>>>>>>=============================================<<<<<<*/

import * as types from '../constants/';
/*>>>>>>=============================================<<<<<<*/

export const reqVideos = (name) => {
    const promise = new Promise((resolve, reject) => {
        request
            .get(`https://api.twitch.tv/kraken/channels/${name}/videos`)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body.videos);
                }
            });
    });
    return {
        type: types.RECEIVE_VIDEOS_FROM_CHANNEL,
        payload: promise
    };
};
