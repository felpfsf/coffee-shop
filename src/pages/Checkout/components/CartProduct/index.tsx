import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  CartProductContainer,
  Counter,
  ProductActions,
  ProductInfo,
  RemoveButton,
} from "./style";

interface ProductProps {
  imageUrl: string;
  name: string;
  price: number;
}

export const CartProduct = ({ imageUrl, name, price }: ProductProps) => {
  const priceConverted = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return (
    <CartProductContainer>
      <ProductInfo>
        <img src={imageUrl} alt='' />
        <div>
          <p>{name}</p>
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
      <strong>{priceConverted}</strong>
    </CartProductContainer>
  );
};
