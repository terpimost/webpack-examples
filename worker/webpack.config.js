var path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode:'development', //initially was production
	entry: "./example.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
		chunkFilename: "[name].js",
		publicPath: "/dist/"
	},
	optimization: {
		//if you have that portion uncomment Webpack 5 splits chunks without having dublicates
		//but the app isn't working
		splitChunks: {
			chunks: 'all',
			minSize: 0,
		},
		//If we comment out splitChunks portion
		//app would work ok but we would have dublication of chat-module in main.js and chat.js

		// concatenateModules: true,
		// usedExports: true, //To opt-out from used exports analysis per runtime: usedExports: 'global'
		// providedExports: true, 
		chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
	},
	plugins: [
		new BundleAnalyzerPlugin()
	]
};
