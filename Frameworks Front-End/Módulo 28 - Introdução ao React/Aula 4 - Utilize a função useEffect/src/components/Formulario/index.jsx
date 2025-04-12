import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState('')
  
  // mount
  useEffect(()=>{
    console.log("O componente iniciou")
  }, []) // ele será executado somente quando o componente iniciar
  
  // unmount
  useEffect(()=>{
    console.log("O componente iniciou")

    return () =>{
      console.log("O componente finalizou.")
    }
  }, []) // ele será executado somente quando o componente desmontar
  
  // updated
  useEffect(()=>{
    console.log("O estado nome mudou!")
  }, [nome]) // ele será executado somente quando a depencia tiver alterações

  useEffect(()=>{
    console.log("Materia A mudou para: " + materiaA)
  }, [materiaA]) 
  
  useEffect(()=>{
    console.log("Materia B mudou para: " + materiaB)
  }, [materiaB])

  useEffect(()=>{
    console.log("Materia C mudou para: " + materiaC)
  }, [materiaC])

  useEffect(()=>{
    console.log("O estado mudou!")
  }) // será executado em qualquer mudança de estados.



  const alteranome= ({target}) => {
    // setNome(target.value)
    // setNome(evento.target.value)
    setNome(estadoAnterior => {
      // console.log(estadoAnterior)
      let nome2 = estadoAnterior
      if(nome2 !== nome) alert('impossivel')
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
