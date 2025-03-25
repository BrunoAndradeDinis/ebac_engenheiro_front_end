"use strict";
// Conversão de tipos no TS - Casting
// let idade: any = 25; // assim ele da erro, pois na mesma pasta tem um arquivo com uma variável com o mesmo nome
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(2);
    idade.length;
    // (idade as string[]).forEach(x =>{ // vai dar erro pois não existe o array
    //   console.log(x)
    // });
    let nome = 35;
    nome.charAt(3);
})(casting || (casting = {}));
