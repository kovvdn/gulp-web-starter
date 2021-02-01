const gulp = require("gulp");

const { styles } = require("./tasks/styles");
const { clean } = require("./tasks/clean");
const { serve } = require("./tasks/serve");
const { views } = require("./tasks/views");
const { scripts } = require("./tasks/scripts");
const { favicons } = require("./tasks/favicons");
const { images } = require("./tasks/images");
const { fonts } = require("./tasks/fonts");

const development = gulp.series(
  clean,
  gulp.parallel([
    views,
    styles,
    scripts,
    images,
    // "webp",
    // "sprites",
    fonts,
    favicons,
  ]),
  gulp.parallel(serve)
);

exports.development = development;

exports.prod = gulp.series(
  clean,
  gulp.parallel([
    views,
    styles,
    scripts,
    images,
    // "webp",
    // "sprites",
    fonts,
    favicons,
    // "gzip",
  ])
);

exports.default = development;
