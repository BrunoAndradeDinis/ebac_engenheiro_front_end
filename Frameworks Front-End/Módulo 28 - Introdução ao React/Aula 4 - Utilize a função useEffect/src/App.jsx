import { useState } from "react";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";

const App = () => {
  const [formularioEstaVisivel, setFomularioEstaVisivel] = useState(true)

  return (
    <>
      <Perfil
        nome="Bruno"
        endereco="https://github.com/BrunoAndradeDinis.png"
      />
      {/* <Formulario /> */}
      <p>{formularioEstaVisivel ? "Sim" : "Não"}</p>
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFomularioEstaVisivel(!formularioEstaVisivel)} >Clique aqui para mudar</button>
    </>
  );
};

export default App;
