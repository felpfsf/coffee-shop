import { useLocation } from "react-router-dom";
import { OrderDeliveryInfoContainer, SuccessContainer, Title } from "./style";
import { OrderFormData } from "..";

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
          <div>conteudo</div>
          <div>
            {orderFormData.street},{orderFormData.house_number} -{" "}
            {orderFormData.neighborhood}
          </div>
          <div>conteudo</div>
          <div>conteudo</div>
        </OrderDeliveryInfoContainer>
      </div>
      <img src='/delivery_hero.png' alt='' />
    </SuccessContainer>
  );
};
