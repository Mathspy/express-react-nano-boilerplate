module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: __dirname + "/src/client/index.js",
	output: {
		path: __dirname + "/build/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	devServer: {
		proxy: { // proxy URLs to backend development server
			"/api": "http://localhost:25632"
		},
		contentBase: __dirname + "/build/",
		inline: true
	}
};