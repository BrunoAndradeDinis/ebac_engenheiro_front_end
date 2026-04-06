import Game from '../../Models/Game'
import Product from '../Product'
import { SectionContainer, List, Title } from './styles'

export type ListProps = {
  title: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ backgroundColor, games, title }: ListProps) => {
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
              category={game.category}
              imageUrl={game.image}
              description={game.description}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductsList
