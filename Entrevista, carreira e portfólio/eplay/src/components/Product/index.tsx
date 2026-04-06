import Tag from '../Tag'
import { Card, Titulo, Descricao, Infos } from './styles'

type ProductProps = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  imageUrl: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  imageUrl
}: ProductProps) => {
  return (
    <Card>
      <img src={imageUrl} alt={title} />
      <Infos>
        {infos.map((info, index) => (
          <Tag key={index}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Product
