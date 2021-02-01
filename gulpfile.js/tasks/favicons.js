"use strict";

const { paths } = require("../paths");
const gulp = require("gulp");
const favicons = require("gulp-favicons");
const debug = require("gulp-debug");

exports.favicons = () => {
  return gulp
    .src(paths.favicons.src)
    .pipe(
      favicons({
        icons: {
          appleIcon: true,
          favicons: true,
          online: false,
          appleStartup: false,
          android: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
      })
    )
    .pipe(gulp.dest(paths.favicons.dist))
    .pipe(
      debug({
        title: "Favicons",
      })
    );
};
