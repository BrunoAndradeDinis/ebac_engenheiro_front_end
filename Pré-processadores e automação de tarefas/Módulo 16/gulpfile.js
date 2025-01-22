const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'))
const sourceMaps = require('gulp-sourcemaps')
const ugliFy = require('gulp-uglify')
const obfscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function comprimeImagens(){
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJs(){
  return gulp.src('./src/scripts/*.js')
    .pipe(ugliFy())
    .pipe(obfscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
  return gulp.src('./src/styles/main.scss')
  .pipe(sourceMaps.init())
  .pipe(sass({
    outputStyle:'compressed'})
  )
  .pipe(sourceMaps.write('./maps'))
  .pipe(gulp.dest('./build/styles'))// pipe, executa na sequencia, vai encadear as funções
}

// function funcaoPadrao(callback) {
//   setTimeout(()=>{
//     console.log("Executando via Gulp!");
    
//     callback();
//   }, 2000)

// }

// function dizOi(callback) {
//   setTimeout(()=>{
//     console.log("Olá Gulp!");

//     dizTchau();
//     callback();
//   }, 1000)
// }

// function dizTchau() {
//   console.log("Tchau, Gulp");
// }

exports.default = ()=> {
  gulp.watch('./src/styles/*.scss', {ignoreInitial: false},gulp.series(compilaSass))
  gulp.watch('./src/scripts/*.js', {ignoreInitial: false},gulp.series(comprimeJs))
  gulp.watch('./src/images/*', {ignoreInitial: false},gulp.series(comprimeImagens))
}
