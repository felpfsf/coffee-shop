import { ShoppingCart } from "@phosphor-icons/react";
import { CartButton, Counter, HeaderContainer, HeaderContent } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src='/Logo.png' alt='' />
        <div>
          <CartButton>
            <ShoppingCart size={22} weight='fill' />
            <Counter>3</Counter>
          </CartButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
