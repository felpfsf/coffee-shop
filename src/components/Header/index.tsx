import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, Counter, HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src='/Logo.png' alt='' />
      <div>
        <CartButton>
          <ShoppingCart size={22} weight='fill' />
          <Counter>3</Counter>
        </CartButton>
      </div>
    </HeaderContainer>
  );
};
