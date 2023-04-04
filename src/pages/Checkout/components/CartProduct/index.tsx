import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  CartProductContainer,
  Counter,
  ProductActions,
  ProductInfo,
  RemoveButton,
} from "./style";

export const CartProduct = () => {
  return (
    <CartProductContainer>
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
      <strong>
        <span>R$</span> 9,90
      </strong>
    </CartProductContainer>
  );
};
