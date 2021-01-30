const { paths } = require("../paths");

const gulp = require("gulp");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

const debug = require("gulp-debug");
const browsersync = require("browser-sync");
const yargs = require("yargs");

const argv = yargs.argv,
  production = !!argv.production;

const webpackConfig = {
  entry: "./src/js/index.js",
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

exports.scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(debug({ title: "JS files" }))
    .pipe(browsersync.stream());
};
