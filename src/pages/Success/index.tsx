import { useLocation } from "react-router-dom";
import {
  DeliveryContent,
  OrderDeliveryInfoContainer,
  SuccessContainer,
  Summary,
  Title,
} from "./style";
import { OrderFormData } from "..";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { formatCurrency } from "@utils/formatCurrency";

export const Success = () => {
  const location = useLocation();
  const orderFormData: OrderFormData = location.state.formData;
  return (
    <SuccessContainer>
      <div>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>
        <OrderDeliveryInfoContainer>
          <DeliveryContent variant='address'>
            <div>
              <MapPin weight='fill' />
            </div>
            <p>
              Entrega em{" "}
              <strong>
                {orderFormData.street}, {orderFormData.house_number}
              </strong>
              <br />
              {orderFormData.neighborhood} - {orderFormData.city}/
              {orderFormData.state}
            </p>
          </DeliveryContent>
          <DeliveryContent variant='timer'>
            <div>
              <Timer weight='fill' />
            </div>
            <p>
              Entrega estimada em <br /> <strong>20 min - 30 min</strong>
            </p>
          </DeliveryContent>
          <DeliveryContent variant='payment'>
            <div>
              <CurrencyDollar />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <strong>
                {orderFormData.payment_options === "credit"
                  ? "Cartão de crédito"
                  : orderFormData.payment_options === "debit"
                  ? "Cartão de débito"
                  : orderFormData.payment_options === "money"
                  ? "Dinheiro"
                  : ""}
              </strong>
            </p>
          </DeliveryContent>
          {/* <Summary>
            {orderFormData.orderSummary.products.map((product) => {
              return (
                <div>
                  <p>{product.name}</p>
                  <p>{formatCurrency(product.price)}</p>
                  <p>{product.quantity}</p>
                </div>
              );
            })}
          </Summary> */}
        </OrderDeliveryInfoContainer>
      </div>
      <img src='/delivery_hero.png' alt='' />
    </SuccessContainer>
  );
};
