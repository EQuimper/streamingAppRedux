import request from "superagent";
import * as types from "../constants/";
import config from '../config';

export const reqVideos = name => {

  const promise = new Promise((resolve, reject) => {
    request
      .get(`${config.ROOT_URL}/${name}/videos&client_id=${config.API_KEY}`)
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
