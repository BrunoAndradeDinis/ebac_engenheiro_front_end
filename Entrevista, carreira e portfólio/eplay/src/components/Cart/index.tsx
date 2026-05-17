import { useSelector } from 'react-redux'
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
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'
import trash from '../../assets/images/trash.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () =>
    formatPrice(items.reduce((total, item) => total + item.prices.current!, 0))

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <div className="close_container">
          <button type="button" onClick={closeCart} className="close" />
        </div>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.cover} alt="Capa do jogo" />

              <div>
                <h3>{item.name}</h3>
                <Tag size="small">{item.details.category}</Tag>
                <Tag size="small">{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current || 0)}</span>
              </div>
              <button type="button" onClick={() => removeFromCart(item.id)}>
                <img src={trash} alt="Remover do carrinho" />
              </button>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos no carrinho</Quantity>
        <Prices>
          Total de {getTotalPrice()} <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar com a compra" type="link" to="/checkout">
          continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
