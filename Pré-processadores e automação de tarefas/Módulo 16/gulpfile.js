const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'))
const sourceMaps = require('gulp-sourcemaps')

function compilaSass(){
  return gulp.src('./src/styles/main.scss')
  .pipe(sourceMaps.init())
  .pipe(sass({
    outputStyle:'compressed'})
  )
  .pipe(sourceMaps.write('./maps'))
  .pipe(gulp.dest('./build/styles'))// pipe, executa na sequencia, vai encadear as funções
}

function funcaoPadrao(callback) {
  setTimeout(()=>{
    console.log("Executando via Gulp!");
    
    callback();
  }, 2000)

}

function dizOi(callback) {
  setTimeout(()=>{
    console.log("Olá Gulp!");

    dizTchau();
    callback();
  }, 1000)
}

function dizTchau() {
  console.log("Tchau, Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = ()=> {
  gulp.watch('./src/styles/*.scss', {ignoreInitial: false},gulp.series(compilaSass))
}
