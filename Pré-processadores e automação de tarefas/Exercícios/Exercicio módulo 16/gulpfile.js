const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const srcmaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate');
const imagemin = require("gulp-imagemin");

// Compilando o Sass
function compSass() {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(srcmaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(srcmaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

// Comprimindo o JS
function comprimeJS(){
  return gulp.src("./src/scripts/main.js")
    .pipe(srcmaps.init())
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(srcmaps.write("./maps"))
    .pipe(gulp.dest("./build/scripts"))
}

// Comprimindo as imagens
function comprimeImgs(){
  return gulp.src("./src/images/*", {encoding: false,})
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"))
}


exports.default = () => {
  gulp.watch("./src/styles/*.scss", { ignoreInitial: false }, gulp.series(compSass))
  gulp.watch("./src/scripts/*.js", { ignoreInitial: false }, gulp.series(comprimeJS))
  gulp.watch("./src/images/*", { ignoreInitial: false }, gulp.series(comprimeImgs))
};
