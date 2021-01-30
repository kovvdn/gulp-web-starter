const { paths } = require("../paths");

const gulp = require("gulp");
const include = require("gulp-file-include");

const browsersync = require("browser-sync");

exports.views = () => {
  return gulp
    .src(paths.views.src)
    .pipe(include())
    .pipe(gulp.dest(paths.views.dist))
    .pipe(browsersync.stream());
};
