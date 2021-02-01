const gulp = require("gulp");
const debug = require("gulp-debug");

const { paths } = require("../paths");

exports.fonts = () => {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dist))
    .pipe(
      debug({
        title: "Fonts",
      })
    );
};
