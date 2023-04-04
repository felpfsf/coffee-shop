import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import {
  CartContainer,
  CartProduct,
  CartSummary,
  CheckoutContainer,
  CheckoutForm,
  Counter,
  FormContainer,
  FormContainerHeader,
  PaymentOptions,
  ProductActions,
  ProductInfo,
  RadioButtonGroup,
  RadioButtonItem,
  RemoveButton,
  SubmitButton,
  Title,
} from "./style";

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
          <CartProduct>
            <ProductInfo>
              <img src='/products/expresso.png' alt='' />
              <div>
                <p>Expresso Tradicional</p>
                <ProductActions>
                  <Counter>
                    <button>
                      <Minus />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus />
                    </button>
                  </Counter>
                  <RemoveButton>
                    <Trash size={16} />
                    Remover
                  </RemoveButton>
                </ProductActions>
              </div>
            </ProductInfo>
            <p>Price</p>
          </CartProduct>
          <CartSummary>
            <div>
              <p>Total de itens</p>
              <p>
                <span>R$ </span>29,70
              </p>
            </div>
            <div>
              <p>Entrega</p>
              <p>
                <span>R$ </span>3,50
              </p>
            </div>
            <div>
              <p>Total</p>
              <p>
                <span>R$ </span>33,20
              </p>
            </div>
          </CartSummary>
          <SubmitButton type='submit' form='checkout_form'>
            Confirmar Pedido
          </SubmitButton>
        </CartContainer>
      </div>
    </CheckoutContainer>
  );
};
