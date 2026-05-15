import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, InputGroup } from './styles'

const Checkout = () => {
  return (
    <div className="container">
      <>
        <Card title="Dados de cobrança">
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" placeholder="Digite seu nome completo" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Digite seu email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" placeholder="Digite seu CPF" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                id="deliveryEmail"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                id="confirmDeliveryEmail"
              />
            </InputGroup>
          </Row>
        </Card>
        <Card title="Pagamento">
          <div>
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          </div>
        </Card>
        <Button type="button">Finalizar compra</Button>
      </>
    </div>
  )
}

export default Checkout
