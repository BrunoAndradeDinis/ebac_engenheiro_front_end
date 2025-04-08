function App() {
  const nome = "Bruno";

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: nome,
  }

  let estaDeDia = false

  return (
    <>
      <div>
        <h1>Olá, mundo do : {retornaNome()}</h1>
        <h2>Subtitulo</h2>
        <h3>{pessoa.nome} é meu nome</h3>
        <h4>{estaDeDia ? "Bom dia!" : "Boa noite!"} </h4>
      </div>
    </>
  );
}

export default App;
