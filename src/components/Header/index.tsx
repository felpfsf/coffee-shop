import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, Counter, HeaderContainer } from "./style";
import { useCart } from "@contexts/CartContext";

export const Header = () => {
  const { cartItems } = useCart();
  const itemsInCart = cartItems.length;
  return (
    <HeaderContainer>
      <img src='/Logo.png' alt='' />
      <div>
        <CartButton>
          <ShoppingCart size={22} weight='fill' />
          {itemsInCart > 0 && <Counter>{itemsInCart}</Counter>}
        </CartButton>
      </div>
    </HeaderContainer>
  );
};
