import Product from '../Product'
import { SectionContainer, List, Title } from './styles'

export type ListProps = {
  title: string
  backgroundColor: 'gray' | 'black'
}

const ProductsList = ({ title, backgroundColor }: ListProps) => {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            category="Ação"
            imageUrl="https://placehold.co/222x250"
            description="lorem ipsum"
            infos={['R$999,00', '-10%']}
            system="Windows"
            title="Jogo de Ação"
          />
          <Product
            category="RPG"
            imageUrl="https://placehold.co/222x250"
            description="lorem ipsum"
            infos={['R$999,00', '-10%']}
            system="Windows"
            title="Jogo de RPG"
          />
          <Product
            category="Estratégia"
            imageUrl="https://placehold.co/222x250"
            description="lorem ipsum"
            infos={['R$999,00', '-10%']}
            system="Windows"
            title="Jogo de Estratégia"
          />
          <Product
            category="Simulação"
            imageUrl="https://placehold.co/222x250"
            description="lorem ipsum"
            infos={['R$999,00', '-10%']}
            system="Windows"
            title="Jogo de Simulação"
          />
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductsList
