import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CardContainer,
  CartButton,
  Counter,
  PriceTag,
  ProductActions,
  ProductBuy,
  ProductDesc,
  ProductImage,
  ProductName,
  ProductTag,
} from "./style";

export const ProductCard = () => {
  return (
    <CardContainer>
      <ProductImage src='/products/expresso.png' />
      <ProductTag>tradicional</ProductTag>
      <ProductName>Expresso Tradicional</ProductName>
      <ProductDesc>
        O tradicional café feito com água quente e grãos moídos
      </ProductDesc>
      <ProductBuy>
        <PriceTag>
          R$ <span>9,90</span>
        </PriceTag>
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
          <CartButton>
            <ShoppingCart weight='fill' />
          </CartButton>
        </ProductActions>
      </ProductBuy>
    </CardContainer>
  );
};
