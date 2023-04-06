import React from "react";
import { useCart } from "@contexts/CartContext";
import { formatCurrency } from "@utils/formatCurrency";
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

export const Checkout = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);
  const deliveryFee = subtotal * 0.12; // cobrando 12% para o frete
  const total = subtotal + deliveryFee;

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
              {cartItems.map((item) => (
                <React.Fragment key={item.product.id}>
                  <CartProduct {...item.product} quantity={item.quantity} />
                  <div className='divider' />
                </React.Fragment>
              ))}
            </SelectedProducts>
            <OrderSummary>
              <div>
                <p>Total de itens</p>
                <p>{formatCurrency(subtotal)}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>{formatCurrency(deliveryFee)}</p>
              </div>
              <div>
                <p>Total</p>
                <p>{formatCurrency(total)}</p>
              </div>
            </OrderSummary>
            <SubmitButton>confirmar pedido</SubmitButton>
          </ContentWrapper>
        </div>
      </FormContainer>
    </CheckoutContainer>
  );
};
