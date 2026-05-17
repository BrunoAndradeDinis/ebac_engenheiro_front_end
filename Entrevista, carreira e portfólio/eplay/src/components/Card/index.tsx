import { Container } from './styles'

type CardProps = {
  children: React.ReactNode
  title?: string
  className?: string
}

const Card = ({ children, title, className }: CardProps) => {
  return (
    <Container className={className ? className : ''}>
      <h1>{title}</h1>
      {children}
    </Container>
  )
}

export default Card
