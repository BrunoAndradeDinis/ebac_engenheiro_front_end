// Conversão de tipos no TS - Casting
// let idade: any = 25; // assim ele da erro, pois na mesma pasta tem um arquivo com uma variável com o mesmo nome
namespace casting {
  let idade: any = 25;
  (idade as number).toFixed(2);
  (idade as string).length;
  // (idade as string[]).forEach(x =>{ // vai dar erro pois não existe o array
  //   console.log(x)
  // });

  let nome: string = 35 as unknown as string;
  nome.charAt(3);
}
