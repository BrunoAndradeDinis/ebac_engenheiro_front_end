import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  LinkCart,
  MenuBurger,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/shopping-cart.svg'

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <MenuBurger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </MenuBurger>
          <Link to="/">
            <img src={logo} alt="Logo da Eplay" />
          </Link>

          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="/#coming-soon">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="/#on-sale">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <LinkCart href="#" onClick={openCart}>
          {items.length} <span>- produtos</span>
          <img src={carrinho} alt="Carrinho de compras" />
        </LinkCart>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="/#coming-soon">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="/#on-sale">Promoções</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
