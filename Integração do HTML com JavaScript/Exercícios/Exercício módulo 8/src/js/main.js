const form = document.getElementById('contact-form')
const table = document.getElementById('contact-table') // pega a tabela inteira
const telefones = []
const inputNome = document.getElementById('name')
const inputTelefone = document.getElementById('tel')
const qtdContatos = document.getElementById('contatos')


form.addEventListener('submit', (e)=>{
  e.preventDefault()
  // valida se nome e campo estão vazios (vai que o required da erro né), sendo ambos true da continuidade no código
  if(inputNome.value && inputTelefone.value){

    if(telefones.includes(inputTelefone.value)){
      alert(`O telefone ${inputTelefone.value} já está cadastrado, favor informar outro número.`)
  
      inputTelefone.focus()
      return
    }
    telefones.push(inputTelefone.value)

    inserirDadosNaTabela(inputNome.value, inputTelefone.value)
    atualizaQtdDeContatos()
  }
})

function inserirDadosNaTabela(nomeCadastro, telefoneCadastro){
  const corpoTabela = table.getElementsByTagName('tbody')[0] // pega a tbody da tabela para manipula-la
    const novaLinha = corpoTabela.insertRow(0) // colocando no index 0, no caso, sempre no inicio, 
    const celulaNome = novaLinha.insertCell(0) // adiciona a célula na posição 0, sendo a célula do nome
    const celulaTelefone = novaLinha.insertCell(1) // adiciona a célula na posição 1, sendo a célula do telefone

    // preenchendo as células criadas na novalinha
    celulaNome.textContent = nomeCadastro
    celulaTelefone.textContent = telefoneCadastro

    // limpando os inputs
    inputNome.value = ''
    inputTelefone.value = ''
    inputNome.focus()
}

function atualizaQtdDeContatos(){
  qtdContatos.innerHTML = !telefones.length ? 0 : telefones.length
}