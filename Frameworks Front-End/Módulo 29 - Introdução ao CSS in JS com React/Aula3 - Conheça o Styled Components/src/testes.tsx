import styled from "styled-components";

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) =>props.principal ? "purple" : "blue"};
  color: antiquewhite;
  border-radius: 0.5rem;
  font-size: ${({fontSize})=> fontSize || "16px"};
`

const BotaoPerigo = styled(Botao)`
  background-color: orangered;
  border-color: antiquewhite;

  span{
    text-decoration: line-through;
  }
`

export default function Teste(){

  return(
    <div>
      <h1>Olá</h1>

      <Botao fontSize="18px" principal> Enviar </Botao>
      <Botao fontSize="14px" principal={false}> Cancelar </Botao>
      <BotaoPerigo as="a" principal={false}>
        <span>PERIGO!</span>
      </BotaoPerigo>
    </div>
  )
}