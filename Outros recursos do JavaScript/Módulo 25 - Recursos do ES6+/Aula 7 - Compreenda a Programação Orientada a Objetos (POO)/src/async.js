function funcaoMuitoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject("Deu erro na iteração dos números!");
  }
});

console.log("inicio");
// console.log(funcaoMuitoPesada())
// funcaoMuitoPesadaPromise
//   .then((resultado) => console.log(resultado))
//   .catch((erro) => console.log(erro));
// console.log("fim");

// thread principal a b
// promise c ---------->

// async await
const promiseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com o usuário: ${login}`);
    }, 2000);
  });
};

async function execucaoPrincipal() {
  console.log("inicio");

  promiseComParametros("brinu", 123456).then((resultado) => {
    console.log(resultado);
  });
  // await funcaoMuitoPesadaPromise
  //   .then((resultado) => console.log(resultado))
  //   .catch((erro) => console.log(erro));
  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (e) {
    console.log(`Ops, deu este erro aqui: "${e}"`);
  }

  console.log("fim");
}

execucaoPrincipal();
