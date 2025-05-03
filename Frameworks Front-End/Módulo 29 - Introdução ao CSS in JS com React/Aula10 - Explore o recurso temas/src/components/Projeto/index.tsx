import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"
import { Card, LinkBotao } from "./styles"

export const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBotao>Visitar</LinkBotao>
  </Card>
)
