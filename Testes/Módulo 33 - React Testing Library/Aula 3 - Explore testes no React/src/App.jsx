import { useState } from "react"


function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefatemp, setTarefaTemp] = useState('')
  
  function cadastrarTarefa(){
    setTarefas([...tarefas, tarefatemp])
    setTarefaTemp('')
  }
  return (
    <>
      <div>
       <input data-testid="campo-tarefa" type="text" value={tarefatemp} onChange={({target})=> setTarefaTemp(target.value)}/>
       <button data-testid="btn-cadastrar" onClick={cadastrarTarefa}>cadastrar</button>
       <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice + 1}>{tarefa}</li>
        ))}
       </ul>
      </div>
    </>
  )
}

export default App
