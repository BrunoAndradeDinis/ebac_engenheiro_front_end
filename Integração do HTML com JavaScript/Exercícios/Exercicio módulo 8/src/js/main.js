const form = document.getElementById('contact-form')
const table = document.getElementById('contact-table') // pega a tabela inteira

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  let nome = document.getElementById('name')
  let telefone = document.getElementById('tel')

  // valida se nome e campo estão vazios (vai que o required da erro né), sendo ambos true da continuidade no código
  if(nome && telefone){
    const corpoTabela = table.getElementsByTagName('tbody')[0] // pega a tbody da tabela para manipula-la
    const novaLinha = corpoTabela.insertRow(0) // colocando no index 0, no caso, sempre no inicio, 
    const celulaNome = novaLinha.insertCell(0) // adiciona a célula na posição 0, sendo a célula do nome
    const celulaTelefone = novaLinha.insertCell(1) // adiciona a célula na posição 1, sendo a célula do telefone

    // preenchendo as células criadas na novalinha
    celulaNome.textContent = nome.value
    celulaTelefone.textContent = telefone.value

    // limpando os inputs
    nome.value = ''
    telefone.value = ''
    nome.focus()
  }
})