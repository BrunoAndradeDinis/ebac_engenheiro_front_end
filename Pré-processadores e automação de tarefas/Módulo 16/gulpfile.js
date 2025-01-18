const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'))

function compilaSass(){
  return gulp.src('./src/styles/main.scss')
  .pipe(sass({
    outputStyle:'compressed'}))
  .pipe(gulp.dest('./build/styles'))// pipe, executa na sequenci, vai encadear as funções
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
