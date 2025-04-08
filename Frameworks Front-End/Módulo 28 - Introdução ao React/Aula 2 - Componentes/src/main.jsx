import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GTM_BRASIL as horarioBrasil, PI as numeroPi } from "./teste.js";
import Hola from "./nomes.js";
import Perfil from "./components/Perfil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Perfil />
    <App />
    <h3>
      {numeroPi}+{horarioBrasil}
    </h3>
    <ul>
      <li>
        {Hola[0]}
      </li>
    </ul>
  </StrictMode>
);
