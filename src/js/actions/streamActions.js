import request from 'superagent';
import * as types from '../constants/';


export const reqStreams = (games) => {
	const promise = new Promise((resolve, reject) => {
		request
			.get(`https://api.twitch.tv/kraken/search/streams?q=leagueoflegends`)
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		return {
			type: types.REQ_STREAMS,
			games
		}
	});
};

export const receiveStreams = (streams, game) => {
	return {
		type: types.RECEIVE_STREAMS,
		streams,
		game
	}
};