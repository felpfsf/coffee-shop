import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  BadgeContainer,
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
import { formatCurrency } from "@utils/formatCurrency";
import { useState } from "react";
import { useCart } from "@contexts/CartContext";

interface ProductProps {
  id: number;
  imageUrl: string;
  name: string;
  badges: string[];
  description: string;
  price: number;
}

export const ProductCard = ({
  badges,
  description,
  id,
  imageUrl,
  name,
  price,
}: ProductProps) => {
  const product = {
    badges,
    description,
    id,
    imageUrl,
    name,
    price,
  };
  const { addToCart } = useCart();
  const [count, setCount] = useState<number>(0);

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(product, count);
    }
  };
  return (
    <CardContainer>
      <ProductImage src={imageUrl} />
      <BadgeContainer>
        {badges.map((badge, index) => (
          <ProductTag key={`${badge}_${index}`}>{badge}</ProductTag>
        ))}
      </BadgeContainer>
      <ProductName>{name}</ProductName>
      <ProductDesc>{description}</ProductDesc>
      <ProductBuy>
        <PriceTag>{formatCurrency(price)}</PriceTag>
        <ProductActions>
          <Counter>
            <button onClick={decrement}>
              <Minus />
            </button>
            <span>{count}</span>
            <button onClick={increment}>
              <Plus />
            </button>
          </Counter>
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart weight='fill' />
          </CartButton>
        </ProductActions>
      </ProductBuy>
    </CardContainer>
  );
};
