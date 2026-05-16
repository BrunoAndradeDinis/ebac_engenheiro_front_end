import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, InputGroup, TabButton } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

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
            <TabButton
              type="button"
              onClick={() => setPayWithCard(false)}
              isActive={!payWithCard}
            >
              <img
                src={boleto}
                alt="Boleto"
                width={20}
                style={{ marginRight: 8 }}
              />
              Pagar com boleto
            </TabButton>
            <TabButton
              type="button"
              onClick={() => setPayWithCard(true)}
              isActive={payWithCard}
            >
              <img
                src={cartao}
                alt="Cartão"
                width={20}
                style={{ marginRight: 8 }}
              />
              Pagar com cartão
            </TabButton>
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do Titular do cartão</label>
                    <input
                      type="text"
                      placeholder="Digite o nome do titular do cartão"
                      id="cardOwner"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      type="text"
                      placeholder="Digite o CPF"
                      id="cpfCardOwner"
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      type="text"
                      placeholder="Digite o nome no cartão"
                      id="cardDisplayName"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      placeholder="Digite o número do cartão"
                      id="cardNumber"
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input type="text" placeholder="MM" id="expiresMonth" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" placeholder="AA" id="expiresYear" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" placeholder="123" id="cvv" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select id="installments">
                      <option value="1">1x de R$ 100,00</option>
                      <option value="2">2x de R$ 50,00</option>
                      <option value="3">3x de R$ 33,33</option>
                      <option value="4">4x de R$ 25,00</option>
                      <option value="5">5x de R$ 20,00</option>
                      <option value="6">6x de R$ 16,67</option>
                      <option value="7">7x de R$ 14,29</option>
                      <option value="8">8x de R$ 12,50</option>
                      <option value="9">9x de R$ 11,11</option>
                      <option value="10">10x de R$ 10,00</option>
                      <option value="11">11x de R$ 9,09</option>
                      <option value="12">12x de R$ 8,33</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </Card>
        <Button type="button">Finalizar compra</Button>
      </>
    </div>
  )
}

export default Checkout
