import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/testes'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)

    // debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
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
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
