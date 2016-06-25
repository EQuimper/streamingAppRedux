import request from "superagent";
import * as types from "../constants/";

export const reqFeatureStreams = (featured) => {

  const promise = new Promise((resolve, reject) => {
    request
      .get(`https://api.twitch.tv/kraken/streams/featured?limit=48&offset=0`)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body.featured);
        }
      });
  });

  return {
    type:    types.RECEIVE_FEATURES_STREAMS,
    payload: promise
  };

};
