import { CartSummaryContainer } from "./style";

export const CartSummary = () => {
  return (
    <CartSummaryContainer>
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
    </CartSummaryContainer>
  );
};
