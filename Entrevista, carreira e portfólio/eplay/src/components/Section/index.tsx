import { Container, Title } from './styles'

export type Props = {
  title: string
  backgroundColor: 'gray' | 'black'
  children?: React.ReactNode
}

const Section = ({ title, backgroundColor, children }: Props) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
