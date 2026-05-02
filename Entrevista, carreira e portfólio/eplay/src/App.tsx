import { Provider } from 'react-redux'
import { store } from './Pages/store'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyle } from './styles'

import Rotas from './Pages/routes'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
