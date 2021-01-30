exports.paths = {
  views: {
    src: ["./src/views/**/*.html", "./src/views/pages/*.html"],
    dist: "./dist/",
    watch: ["./src/blocks/**/*.html", "./src/views/**/*.html"],
  },
  styles: {
    src: "./src/styles/main.{scss,sass}",
    dist: "./dist/styles/",
    watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
  },
  scripts: {
    src: "./src/js/index.js",
    dist: "./dist/js/",
    watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
  },
  images: {
    src: [
      "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
      "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
    ],
    dist: "./dist/img/",
    watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}",
  },
  sprites: {
    src: "./src/img/svg/*.svg",
    dist: "./dist/img/sprites/",
    watch: "./src/img/svg/*.svg",
  },
  fonts: {
    src: "./src/fonts/**/*.{woff,woff2}",
    dist: "./dist/fonts/",
    watch: "./src/fonts/**/*.{woff,woff2}",
  },
  favicons: {
    src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
    dist: "./dist/img/favicons/",
  },
  gzip: {
    src: "./src/.htaccess",
    dist: "./dist/",
  },
};

exports.dist_folder = process.cwd() + "/dist/";
exports.src_folder = process.cwd() + "/src/";
