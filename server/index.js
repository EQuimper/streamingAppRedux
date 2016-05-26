const express = require('express');
const request = require('request');

const app = express();

const BASE_URL = 'https://api.twitch.tv/kraken';
const SEARCH_STREAMS = `search/streams`;

app.get('/api/streams/search/', (req, res) => {
	request(`https://api.twitch.tv/kraken/search.streams/${req.query.q}`)
		.pipe(res);
	console.log(req);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server listen to port ${PORT}`);
});