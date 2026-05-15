import { Container } from './styles'

type CardProps = {
  children: React.ReactNode
  title?: string
}

const Card = ({ children, title }: CardProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}

export default Card
