const gulp = require("gulp");

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
