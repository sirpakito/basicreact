// import express from "express";
// import path from "path";
const express = require("express");
const path = require("path");
const server = express();

server.use(express.static(path.join(__dirname, "../dist")));

var webpack = require("webpack");
var config = require("../webpack.config");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var compiler = webpack(config);
server.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
server.use(webpackHotMiddleware(compiler));

server.use("/app", function(req, res) {
  res.sendFile(path.resolve("client/index.html"));
});

server.listen(3000, function(error) {
  if (error) throw error;
  console.log("Server listening on port 3000!");
});
