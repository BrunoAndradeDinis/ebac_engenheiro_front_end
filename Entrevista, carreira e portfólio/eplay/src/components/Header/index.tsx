import {
  HeaderBar,
  Links,
  LinkItem,
  LinkCart,
  MenuBurger,
  HeaderRow,
  NavMobile,
  Link
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
                <Link
                  title="Clique aqui para ver as categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  title="Clique aqui para ver as novidades"
                  to="/#coming-soon"
                >
                  Novidades
                </Link>
              </LinkItem>
              <LinkItem>
                <Link title="Clique aqui para ver as promoções" to="/#on-sale">
                  Promoções
                </Link>
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
            <Link
              title="Clique aqui para ver as categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              title="Clique aqui para ver as novidades"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              title="Clique aqui para ver as promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </Link>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
