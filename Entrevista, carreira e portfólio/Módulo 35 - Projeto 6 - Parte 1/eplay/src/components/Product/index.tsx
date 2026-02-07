import Tag from '../Tag'
import { Card, Titulo, Descricao } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="https://placehold.co/222x250" alt="asd" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem
        eum tenetur repudiandae numquam aspernatur earum pariatur, vel obcaecati
        itaque facere, dignissimos commodi dolore distinctio eius iure ex, vitae
        tempora.
      </Descricao>
    </Card>
  )
}

export default Product
