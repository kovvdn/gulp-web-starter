"use strict";

const { paths } = require("../paths");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminZopfli = require("imagemin-zopfli");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminGiflossy = require("imagemin-giflossy");
const newer = require("gulp-newer");
const debug = require("gulp-debug");
const browsersync = require("browser-sync");
const yargs = require("yargs");

const argv = yargs.argv,
  production = !!argv.production;

exports.images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dist))
    .pipe(
      gulpif(
        production,
        imagemin([
          imageminGiflossy({
            optimizationLevel: 3,
            optimize: 3,
            lossy: 2,
          }),
          imageminPngquant({
            speed: 5,
            quality: [0.6, 0.8],
          }),
          imageminZopfli({
            more: true,
          }),
          imageminMozjpeg({
            progressive: true,
            quality: 90,
          }),
          imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { removeUnusedNS: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false },
              { removeComments: true },
              { removeEmptyAttrs: true },
              { removeEmptyText: true },
              { collapseGroups: true },
            ],
          }),
        ])
      )
    )
    .pipe(gulp.dest(paths.images.dist))
    .pipe(
      debug({
        title: "Images",
      })
    )
    .pipe(browsersync.stream());
};
