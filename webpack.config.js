const path = require("path");

const resolve = file => path.resolve(__dirname, file);

module.exports = {
	entry: resolve("js/Game.ts"),
	output: {
		filename: "bundle.js",
		path: resolve("dist")
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ]
	},
	devtool: "#source-map"
};