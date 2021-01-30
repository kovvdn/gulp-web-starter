const { paths } = require("../paths");
const gulp = require("gulp");

const sass = require("gulp-sass");
const groupmedia = require("gulp-group-css-media-queries");
const autoprefixer = require("gulp-autoprefixer");
const debug = require("gulp-debug");
const sourcemap = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const cleancss = require("gulp-clean-css");
const plumber = require("gulp-plumber");
const gulpif = require("gulp-if");

const browsersync = require("browser-sync");
const yargs = require("yargs");

const argv = yargs.argv,
  production = !!argv.production;

exports.styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpif(!production, sourcemap.init()))
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(groupmedia())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(cleancss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(plumber.stop())
    .pipe(gulpif(!production, sourcemap.write()))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(debug({ title: "CSS files" }))
    .pipe(browsersync.stream());
};
