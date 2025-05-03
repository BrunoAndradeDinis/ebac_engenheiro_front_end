import { useState } from "react"
import { ThemeProvider as Tema } from "styled-components"
import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./styles"
// import temaLight from "./themes/light"
import temaDark from "./themes/dark"
import temaLight from "./themes/light"

function App() {
  const [temaBotao, setTemaBotao] = useState(false)

  function trocaTema() {
    setTemaBotao(!temaBotao)
  }

  return (
    // <Tema theme={temaLight}>
    <Tema theme={temaBotao ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </Tema>
  )
}

export default App
