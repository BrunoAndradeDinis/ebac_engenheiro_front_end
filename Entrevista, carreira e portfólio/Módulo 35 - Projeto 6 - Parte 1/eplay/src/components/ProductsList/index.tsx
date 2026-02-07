import Product from '../Product'
import { SectionContainer, List, Title } from './styles'

type ListProps = {
  title: string
  backgroundColor: 'gray' | 'black'
}

const ProductsList = ({ title, backgroundColor }: ListProps) => {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductsList
