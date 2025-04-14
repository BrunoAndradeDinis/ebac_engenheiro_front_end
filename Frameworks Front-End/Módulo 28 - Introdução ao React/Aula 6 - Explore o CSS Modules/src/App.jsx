// import { useState } from "react";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

const App = () => {
  // const [formularioEstaVisivel, setFomularioEstaVisivel] = useState(true)
  const [nomeUser, setNomeUser] = useState("");
  return (
    <>
      <div className={`input_initial ${nomeUser.length > 4 ? 'position' : ''}` }>
        <input type="text" onBlur={({ target }) => setNomeUser(target.value)} placeholder="Qual o seu usuário?"/>
      </div>

      {nomeUser.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUser} />

          <ReposList nomeUsuario={nomeUser} />
        </>
      )}
      {/* <Formulario />
      <p>{formularioEstaVisivel ? "Sim" : "Não"}</p>
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFomularioEstaVisivel(!formularioEstaVisivel)} >Clique aqui para mudar</button> */}
    </>
  );
};

export default App;
