//const webpack = require('webpack');
//const WebpackDevServer = require('webpack-dev-server');
///*>>>>>>=============================================<<<<<<*/
//const config = require('./webpack.dev.config.js');
///*>>>>>>=============================================<<<<<<*/
//const PORT = process.env.PORT || 3000;
//
//new WebpackDevServer(webpack(config), {
//	publicPath: config.output.publicPath,
//	hot: true,
//	historyApiFallback: true
//}).listen(PORT, 'localhost', (err, result) => {
//	if (err) {
//		return console.log(err);
//	}
//
//	console.log(`Listening on port ${PORT}`);
//});

const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.dev.config.js');
const express = require('express');
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
});
