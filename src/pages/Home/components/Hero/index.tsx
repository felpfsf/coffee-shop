import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  HeroContainer,
  HeroContent,
  HeroWrapper,
  Item,
  ItemsGroup,
} from "./style";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ItemsGroup>
            <Item variant='yellow-dark'>
              <span>
                <ShoppingCart weight='fill' />
              </span>
              <p>Compra simples e segura</p>
            </Item>
            <Item variant='base-text'>
              <span>
                <Package weight='fill' />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item variant='yellow'>
              <span>
                <Timer weight='fill' />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item variant='purple'>
              <span>
                <Coffee weight='fill' />
              </span>
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsGroup>
        </HeroContent>
        <img src='/hero_image.png' alt='' />
      </HeroWrapper>
    </HeroContainer>
  );
};
