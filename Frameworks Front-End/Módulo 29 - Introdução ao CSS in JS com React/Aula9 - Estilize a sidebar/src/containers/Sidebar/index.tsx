import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () => (
  <SidebarContainer>
    <aside>
      <Avatar />
      <Titulo fontSize={20}> Bruno de Andrade</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        BrunoAndradeDinis
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Developer - Front end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </aside>
  </SidebarContainer>
)

export default Sidebar
