// Declaração das variáveis pegando os elementos

const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const retorno = document.getElementById('retorno')

// validação assim que alterar o Campo B
campoB.addEventListener('change', ()=>{
  let valor1 = campoA.value
  let valor2 = campoB.value

  if(valor1 > valor2 || valor1 === valor2){
    document.querySelector('.error-message').style.display = 'block'
    return
  } else {
    document.querySelector('.error-message').style.display = 'none'
  }
})

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  let valor1 = campoA.value
  let valor2 = campoB.value

  // validação para a mensagem  de sucesso, validando os valores, caso o valor do campo a for maior que o do campoB ele retorna a mensagem de erro voltando ao inicio do form.
  if(valor1 < valor2){
    retorno.innerHTML = `O Campo B: ${valor2} é maior que o Campo A: ${valor1}`
    document.querySelector('.error-message').style.display = 'none'
  } else {
    document.querySelector('.error-message').style.display = 'block'
    retorno.innerHTML = ""
    return
  }

})

