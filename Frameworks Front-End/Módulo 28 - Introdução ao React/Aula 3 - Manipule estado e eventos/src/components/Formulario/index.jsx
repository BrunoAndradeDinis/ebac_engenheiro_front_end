import { useState } from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState('')
  const alteranome= ({target}) => {
    // setNome(target.value)
    // setNome(evento.target.value)
    setNome(estadoAnterior => {
      console.log(estadoAnterior)
      return target.value
    })
  }

  const renderizaResultado = () => {
    const soma = Number(materiaA + materiaB + materiaC);
    const media = soma /3

    if(media >= 7 ){
      return(
        <p>{nome} você foi Aprovado</p>
      )
    } else{
      return (
        <p>{nome} você foi Reprovado</p>
      )
    }
  };

  return (
    <form>
      <input type="text" placeholder="Seu nome" onChange={alteranome} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={({target}) => setMateriaA(parseInt(target.value))}
      /> 
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={({target}) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={({target}) => setMateriaC(parseInt(target.value))}
      />
      {renderizaResultado()}
      <p>{nome}</p>
    </form>
  );
};

export default Formulario;
