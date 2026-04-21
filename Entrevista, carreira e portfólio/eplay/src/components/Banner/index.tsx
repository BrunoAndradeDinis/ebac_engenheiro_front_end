import { useEffect, useState } from 'react'
import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Preco, Titulo } from './styles'
import { Game } from '../../Pages/Home'
import { formatPrice } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((response) => response.json())
      .then((data) => setGame(data))
  }, [])

  if (!game) {
    return (
      <>
        <h3>'Carregando...'</h3>
      </>
    )
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preco>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Preco>
        </div>
        <Button
          type="link"
          to="/produtos"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
