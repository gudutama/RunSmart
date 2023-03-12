const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
const { watch } = require("browser-sync");

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "src",
    },
  });
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(autoprefixer())
    .pipe(
      cleanCss({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.parallel("styles"));
});

gulp.task("default", gulp.parallel("server", "styles", "watch"));
