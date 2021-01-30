const gulpGroupCssMediaQueries = require("gulp-group-css-media-queries");

const { paths } = require("../paths");
const gulp = require("gulp");

const debug = require("gulp-debug");
const browsersync = require("browser-sync");

exports.scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(debug({ title: "JS files" }))
    .pipe(browsersync.stream());
};
