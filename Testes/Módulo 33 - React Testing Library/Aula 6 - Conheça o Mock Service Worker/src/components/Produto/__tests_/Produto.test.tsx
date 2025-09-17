import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/testes'

const jogo = {
  id: 1,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'ps4'],
  preco: 150.9,
  precoAntigo: 180.0,
  titulo: 'Dungeons n dragons'
}

describe('Testes para o componente Produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)

    expect(screen.getByText('Dungeons n dragons')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)

    fireEvent.click(screen.getByTestId('btn-adicionar-produto'))

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
