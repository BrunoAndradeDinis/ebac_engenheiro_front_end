import './App.css'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([{ path: '/', element: <Banner /> }])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
