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
       <input type="text" value={tarefatemp} onChange={({target})=> setTarefaTemp(target.value)}/>
       <button onClick={cadastrarTarefa}>Cadastrar</button>
       <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice + 1}>{indice + 1}º {tarefa}</li>
        ))}
       </ul>
      </div>
    </>
  )
}

export default App
