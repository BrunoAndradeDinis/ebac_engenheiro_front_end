// Declaração das variáveis pegando os elementos

const form = document.getElementById("formulario");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const retorno = document.getElementById("retorno");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valor1 = parseInt(campoA.value);
  let valor2 = parseInt(campoB.value);

  // validação para a mensagem  de sucesso/erro, validando os valores, caso o valor do campo a for maior que o do campoB ele retorna a mensagem de erro voltando ao inicio do form.
  if (valor1 < valor2) {
    retorno.innerHTML = `Sucesso! O Campo B: ${valor2} é maior que o Campo A: ${valor1}`;
    retorno.style.display = "block";

    if (retorno.classList.contains("error-message")) {
      retorno.classList.remove("error-message");
      retorno.classList.add("sucess-message");
    } else {
      retorno.classList.add("sucess-message");
    }
  } else {
    if (!retorno.classList.contains("error-message")) {
      retorno.classList.remove("sucess-message");
      retorno.classList.add("error-message");
      retorno.innerHTML = "Erro: O Campo B não pode ser menor que o Campo A";
      campoB.focus()
    } else {
      retorno.classList.add("error-message");
      campoB.focus()
    }
    return;
  }
});
