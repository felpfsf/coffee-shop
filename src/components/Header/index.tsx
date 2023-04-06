import { useCart } from "@contexts/CartContext";
import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, Counter, HeaderContainer, LinkHome } from "./style";

export const Header = () => {
  const { cartItems } = useCart();
  const itemsInCart = cartItems.length;
  return (
    <HeaderContainer>
      <LinkHome to={"/"}>
        <img src='/Logo.png' alt='' />
      </LinkHome>
      <div>
        <CartButton to={"/checkout"}>
          <ShoppingCart size={22} weight='fill' />
          {itemsInCart > 0 && <Counter>{itemsInCart}</Counter>}
        </CartButton>
      </div>
    </HeaderContainer>
  );
};
