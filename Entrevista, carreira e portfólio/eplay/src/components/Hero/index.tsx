import { Game } from '../../Pages/Home'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            {game.prices.current && (
              <p>
                {game.prices.discount && (
                  <span>De {formatPrice(game.prices.old)}</span>
                )}
                <br />
                Por apenas {formatPrice(game.prices.current)}
              </p>
            )}
            {game.prices.current && (
              <Button
                type="button"
                to={`/product/${game.id}`}
                title={`Clique aqui para aproveitar essa oferta de ${formatPrice(
                  game.prices.current
                )}`}
                onClick={() => {
                  addToCart()
                  openCart()
                }}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}

export default Hero
