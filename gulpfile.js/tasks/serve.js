const browsersync = require("browser-sync");
const gulp = require("gulp");
const { dist_folder, paths } = require("../paths");

const { styles } = require("./styles");
const { views } = require("./views");
const { scripts } = require("./scripts");
const { fonts } = require("./fonts");
const { images } = require("./images");

exports.serve = () => {
  browsersync.init({
    server: dist_folder,
    port: 4000,
    notify: false,
  });

  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.views.watch, views);
  gulp.watch(paths.scripts.watch, scripts);
  gulp.watch(paths.fonts.watch, fonts);
  gulp.watch(paths.images.watch, images);
};
