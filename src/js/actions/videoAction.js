import request from "superagent";
import * as types from "../constants/";
import API_KEY from '../../../server/config/api_key';

export const reqVideos = name => {

  const promise = new Promise((resolve, reject) => {
    request
      .get(`https://api.twitch.tv/kraken/channels/${name}/videos&client_id=${API_KEY}`)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body.videos);
        }
      });
  });

  return {
    type:    types.RECEIVE_VIDEOS_FROM_CHANNEL,
    payload: promise
  };

};
