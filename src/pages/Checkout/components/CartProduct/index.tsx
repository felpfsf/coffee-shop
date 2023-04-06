import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  CartProductContainer,
  Counter,
  ProductActions,
  ProductInfo,
  RemoveButton,
} from "./style";
import { formatCurrency } from "@utils/formatCurrency";
import { useCart } from "@contexts/CartContext";
import { useState } from "react";

interface ProductProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export const CartProduct = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
}: ProductProps) => {
  const { removeFromCart, updateCartItemsQuantity } = useCart();
  const product = { id, imageUrl, name, price };
  const handleRemoveProduct = () => {
    removeFromCart(product);
  };
  const handleDecrementProduct = () => {
    const newQuantity = quantity - 1;
    if (newQuantity < 1) {
      removeFromCart(product);
    } else {
      updateCartItemsQuantity(product.id, newQuantity);
    }
  };
  const handleIncrementProduct = () => {
    const newQuantity = quantity + 1;
    updateCartItemsQuantity(product.id, newQuantity);
  };
  return (
    <CartProductContainer>
      <ProductInfo>
        <img src={imageUrl} alt='' />
        <div>
          <p>{name}</p>
          <ProductActions>
            <Counter>
              <button onClick={handleDecrementProduct} type='button'>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrementProduct} type='button'>
                <Plus />
              </button>
            </Counter>
            <RemoveButton onClick={handleRemoveProduct}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ProductActions>
        </div>
      </ProductInfo>
      <strong>{formatCurrency(price)}</strong>
    </CartProductContainer>
  );
};
