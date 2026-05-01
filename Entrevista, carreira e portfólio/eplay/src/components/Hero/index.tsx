import { Game } from '../../Pages/Home'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
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
                type="link"
                to={`/product/${game.id}`}
                title={`Clique aqui para aproveitar essa oferta de ${formatPrice(
                  game.prices.current
                )}`}
              >
                Aproveitar
              </Button>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}

export default Hero
