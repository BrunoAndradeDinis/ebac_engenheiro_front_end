import './App.css'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Pages/routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
