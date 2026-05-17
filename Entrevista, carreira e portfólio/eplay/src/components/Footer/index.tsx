import { Container, SectionTitle, FooterSection, Links, Link } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para ver os jogos de ação"
                to="/categories#action"
              >
                Ação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para ver os jogos de esportes"
                to="/categories#sports"
              >
                Esportes
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para ver os jogos de luta"
                to="/categories#fight"
              >
                Luta
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para ver os jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link title="Clique aqui para ver as promoções" to="/#on-sale">
                Promoções
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para ver os jogos que estão chegando"
                to="/#coming-soon"
              >
                Em Breve
              </Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}

export default Footer
