import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  CartContainer,
  CheckoutContainer,
  CheckoutForm,
  FormContainer,
  FormContainerHeader,
  PaymentOptions,
  RadioButtonGroup,
  RadioButtonItem,
  SubmitButton,
  Title,
} from "./style";
import { CartProduct } from "./components/CartProduct";
import { CartSummary } from "./components/CartSummary";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <FormContainer>
          <FormContainerHeader>
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormContainerHeader>
          <CheckoutForm id='checkout_form'>
            <input type='text' placeholder='CEP' />
            <input type='text' placeholder='Rua' />
            <div>
              <input type='text' placeholder='Número' />
              <input type='text' placeholder='Complemento' />
            </div>
            <div>
              <input type='text' placeholder='Bairro' />
              <input type='text' placeholder='Cidade' />
              <input type='text' placeholder='UF' />
            </div>
          </CheckoutForm>
        </FormContainer>
        <PaymentOptions>
          <FormContainerHeader>
            <CurrencyDollar size={22} />
            <div>
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormContainerHeader>
          <RadioButtonGroup>
            <RadioButtonItem value='credit'>
              <CreditCard size={16} />
              <span>cartão de crédito</span>
            </RadioButtonItem>
            <RadioButtonItem value='debit'>
              <Bank size={16} />
              <span>cartão de débito</span>
            </RadioButtonItem>
            <RadioButtonItem value='cash'>
              <Money size={16} />
              <span>dinheiro</span>
            </RadioButtonItem>
          </RadioButtonGroup>
        </PaymentOptions>
      </div>
      <div>
        <Title>Café selecionados</Title>
        <CartContainer>
          <CartProduct />
          <CartProduct />
          <CartSummary />
          <SubmitButton type='submit' form='checkout_form'>
            Confirmar Pedido
          </SubmitButton>
        </CartContainer>
      </div>
    </CheckoutContainer>
  );
};
