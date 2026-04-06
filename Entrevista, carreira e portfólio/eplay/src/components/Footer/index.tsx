import { Container, SectionTitle, FooterSection, Lin, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Lin to="/categories#acao">Ação</Lin>
            </li>
            <li>
              <Lin to="/categories#aventura">Aventura</Lin>
            </li>
            <li>
              <Lin to="/categories#esportes">Esportes</Lin>
            </li>
            <li>
              <Lin to="/categories#luta">Luta</Lin>
            </li>
            <li>
              <Lin to="/categories#rpg">RPG</Lin>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Lin to="/">Novidades</Lin>
            </li>
            <li>
              <Lin to="/#promocoes">Promoções</Lin>
            </li>
            <li>
              <Lin to="/#em">Em Breve</Lin>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}

export default Footer
