import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, InputGroup, TabButton } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: '1'
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome completo deve ter pelo menos 5 caracteres')
        .required('O nome completo é obrigatório'),
      email: Yup.string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      cpf: Yup.string()
        .min(11, 'O CPF deve ter pelo menos 11 caracteres')
        .max(14, 'O CPF deve ter no máximo 14 caracteres')
        .required('O CPF é obrigatório'),
      deliveryEmail: Yup.string()
        .email('Digite um email válido')
        .required('O email de entrega é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails devem ser iguais')
        .required('A confirmação do email de entrega é obrigatória'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.required('O nome do titular do cartão é obrigatório')
          : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(11, 'O CPF deve ter pelo menos 11 caracteres')
              .max(14, 'O CPF deve ter no máximo 14 caracteres')
              .required('O CPF do titular do cartão é obrigatório')
          : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O nome no cartão é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(13, 'O número do cartão deve ter pelo menos 13 caracteres')
              .max(20, 'O número do cartão deve ter no máximo 20 caracteres')
              .required('O número do cartão é obrigatório')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(2, 'O mês de vencimento deve ter 2 caracteres')
              .max(2, 'O mês de vencimento deve ter 2 caracteres')
              .required('O mês de vencimento é obrigatório')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(4, 'O ano de vencimento deve ter 4 caracteres')
              .max(4, 'O ano de vencimento deve ter 4 caracteres')
              .required('O ano de vencimento é obrigatório')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(3, 'O CVV deve ter pelo menos 3 caracteres')
              .max(4, 'O CVV deve ter no máximo 4 caracteres')
              .required('O CVV é obrigatório')
          : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O parcelamento é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((it) => ({
          id: it.id,
          price: it.prices.current || 0
        })),
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            },
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            }
          },
          installments: Number(values.installments)
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const touched = fieldName in form.touched
    const invalid = fieldName in form.errors

    if (invalid && touched) {
      return message
    }
    return ''
  }

  return (
    <form className="container" onSubmit={form.handleSubmit}>
      <>
        <Card title="Dados de cobrança">
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                placeholder="Digite seu CPF"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
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
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                id="confirmDeliveryEmail"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </InputGroup>
          </Row>
        </Card>
        <Card title="Pagamento">
          <div>
            <TabButton
              type="button"
              onClick={() => setPayWithCard(false)}
              $isActive={!payWithCard}
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
              $isActive={payWithCard}
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
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      type="text"
                      placeholder="Digite o CPF"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row $marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      type="text"
                      placeholder="Digite o nome no cartão"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      placeholder="Digite o número do cartão"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup $maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      placeholder="MM"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup $maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="text"
                      placeholder="AA"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                  <InputGroup $maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="123"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row $marginTop="24px">
                  <InputGroup $maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
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
                  <small>
                    {getErrorMessage('installments', form.errors.installments)}
                  </small>
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
        <Button type="button" buttonType="submit">
          Finalizar compra
        </Button>
      </>
    </form>
  )
}

export default Checkout
