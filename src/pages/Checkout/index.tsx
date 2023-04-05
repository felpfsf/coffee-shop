import React from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  CheckoutContainer,
  FormContainer,
  FormHeader,
  ContentWrapper,
  OrderSummary,
  PaymentOption,
  PaymentOptions,
  ShippingAddress,
  Title,
  SelectedProducts,
  SubmitButton,
} from "./style";
import { CartProduct } from "./components/CartProduct";

const products = [
  {
    id: 1,
    imageUrl: "/products/expresso.png",
    name: "Expresso Tradicional",
    price: 9.9,
  },
  { id: 2, imageUrl: "/products/latte.png", name: "Latte", price: 9.9 },
  { id: 3, imageUrl: "/products/macchiato.png", name: "Macchiato", price: 9.9 },
  { id: 4, imageUrl: "/products/capuccino.png", name: "Capuccino", price: 9.9 },
];

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <FormContainer action=''>
        <div>
          <Title>Complete seu pedido</Title>

          <ContentWrapper>
            <FormHeader>
              <MapPinLine size={22} />
              <div>
                <h1>Endereço de entrega</h1>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
            <ShippingAddress>
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
            </ShippingAddress>
          </ContentWrapper>

          <ContentWrapper>
            <FormHeader>
              <CurrencyDollar size={22} />
              <div>
                <h1>Pagamento</h1>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>
            <PaymentOptions>
              <PaymentOption value='credit'>
                <CreditCard size={16} />
                <span>cartão de crédito</span>
              </PaymentOption>
              <PaymentOption value='debit'>
                <Bank size={16} />
                <span>cartão de débito</span>
              </PaymentOption>
              <PaymentOption value='money'>
                <Money size={16} />
                <span>dinheiro</span>
              </PaymentOption>
            </PaymentOptions>
          </ContentWrapper>
        </div>
        <div>
          <Title>Café selecionados</Title>
          <ContentWrapper>
            <SelectedProducts>
              {products.map((product) => (
                <React.Fragment key={product.id}>
                  <CartProduct {...product} />
                  <div className='divider' />
                </React.Fragment>
              ))}
            </SelectedProducts>
            <OrderSummary>
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
            </OrderSummary>
            <SubmitButton>confirmar pedido</SubmitButton>
          </ContentWrapper>
        </div>
      </FormContainer>
    </CheckoutContainer>
  );
};
