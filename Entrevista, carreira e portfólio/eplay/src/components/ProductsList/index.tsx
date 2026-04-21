// import Game from '../../Models/Game'
import { Game } from '../../Pages/Home'
import Product from '../Product'
import { SectionContainer, List, Title } from './styles'

export type ListProps = {
  title: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductsList = ({ backgroundColor, games, title }: ListProps) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.releaseDate) {
      tags.push(game.releaseDate)
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}% OFF`)
    }

    return tags
  }

  return (
    <SectionContainer
      backgroundColor={backgroundColor}
      id={title.toLowerCase()}
    >
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              imageUrl={game.media.thumbnail}
              description={game.description}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductsList
