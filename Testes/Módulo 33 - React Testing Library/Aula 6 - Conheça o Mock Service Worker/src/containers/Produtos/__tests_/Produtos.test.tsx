import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/testes'

// mock -- simulação - mockar, simular, dados mockados
const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'ps4'],
    preco: 150.9,
    precoAntigo: 180.0,
    titulo: 'Dungeons n dragons'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'xbox'],
    preco: 110.9,
    precoAntigo: 190.0,
    titulo: 'Elden dragons'
  },
  {
    id: 3,
    categoria: 'IRRAAA',
    imagem: '',
    plataformas: ['Windows', 'xbox', 'preystatio'],
    preco: 120.9,
    precoAntigo: 210.0,
    titulo: 'Red Dead Redemption'
  },
  {
    id: 4,
    categoria: 'Luta',
    imagem: '',
    plataformas: ['Windows', 'xbox', 'preystatio', 'nintendo'],
    preco: 20.9,
    precoAntigo: 110.0,
    titulo: 'Mortal Kom Bart'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen)
  afterEach(() => server.resetHandlers)
  afterAll(() => server.close)

  // test('Deve renderizar corretamente', () => {
  //   const { debug } = renderizaComProvider(<Produtos />)
  //   debug()
  // })
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produtos />)

    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    const { debug } = renderizaComProvider(<Produtos />)
    await waitFor(() => {
      debug()
      expect(screen.getByText('Mortal Kom Bart')).toBeInTheDocument()
    })
  })
})
