import { useState } from "react";
import Form from "./components/Form";
import Main from "./components/Main";

function App() {
  const [imcResultado, setImcResultado] = useState("")
  return (
    <>
      <div className="container">
        <Form imcResultado={setImcResultado}/>
        <Main imcResultado={imcResultado} />
      </div>
    </>
  );
}

export default App;
