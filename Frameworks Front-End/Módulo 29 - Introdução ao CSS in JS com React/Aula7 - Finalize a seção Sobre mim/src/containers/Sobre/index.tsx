import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { GitHubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={18}>Sobre</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      repellat, quos ducimus consectetur possimus sapiente molestiae autem
      saepe! Laborum ipsa reiciendis, officiis eaque numquam deserunt ea quaerat
      maiores veniam tenetur.
    </Paragrafo>

    <GitHubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=BrunoAndradeDinis&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"
        alt="img"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrunoAndradeDinis&layout=compact&langs_count=6&theme=tokyonight"
        alt="img"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
