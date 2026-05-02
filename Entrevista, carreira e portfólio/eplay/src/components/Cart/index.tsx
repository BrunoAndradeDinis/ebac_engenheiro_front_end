import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

const img = 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r8c.jpg'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={img} alt="Capa do jogo" />

            <div>
              <h3>Shadow Tatics</h3>
              <Tag size="small">RPG</Tag>
              <Tag size="small">PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={img} alt="Capa do jogo" />

            <div>
              <h3>Shadow Tatics</h3>
              <Tag size="small">RPG</Tag>
              <Tag size="small">PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogos no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar com a compra" type="button">
          continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
