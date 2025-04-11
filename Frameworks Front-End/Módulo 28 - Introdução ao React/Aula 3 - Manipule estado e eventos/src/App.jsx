import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";

const App = () => {
  return (
    <>
      <Perfil
        nome="Bruno"
        endereco="https://github.com/BrunoAndradeDinis.png"
      />
      <Formulario />
    </>
  );
};

export default App;
