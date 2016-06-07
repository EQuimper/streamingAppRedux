//const webpack = require('webpack');
//const WebpackDevServer = require('webpack-dev-server');
///*>>>>>>=============================================<<<<<<*/
//const config = require('./webpack.config.dev.js');
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
const express = require('express');

module.exports = {
    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, 'index.html');
        const publicPath = express.static(path.join(__dirname, 'build'));

        app.use('/build', publicPath);
        app.get('/', function (_, res) { res.sendFile(indexPath); });

        return app;
    }
};
