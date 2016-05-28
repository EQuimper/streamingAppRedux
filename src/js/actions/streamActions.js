import request from 'superagent';
/*>>>>>>=============================================<<<<<<*/
import * as types from '../constants/';
/*>>>>>>=============================================<<<<<<*/
export const reqStreams = (games) => {
	const promise = new Promise((resolve, reject) => {
		request
			.get(`https://api.twitch.tv/kraken/search/streams?limit=25&offset=0&q=league+of+legends`)
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
