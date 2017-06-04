const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: ["webpack-hot-middleware/client", "./client/client.js"],
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react-hmre", "es2015", "react"]
        }
      }
    ]
  }
};
