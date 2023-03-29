import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  padding-block: 94px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: url("hero_background.png") no-repeat center;
    background-size: cover;
    filter: blur(80px);
  }
`;

export const HeroContent = styled.div`
  max-width: 588px;
  width: 100%;
  h1 {
    font-family: ${({ theme }) => theme.fontFamilies.title};
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    font-weight: ${({ theme }) => theme.fontWeights["extra-bold"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 130%;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    line-height: 130%;
    margin-top: 1rem;
  }
`;

export const ItemsGroup = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
`;

interface ItemTemplate {
  variant: "yellow-dark" | "yellow" | "base-text" | "purple";
}

export const Item = styled.div<ItemTemplate>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    padding: 0.5rem;
    border-radius: 100%;
    background: ${({ theme, variant }) => theme.colors[variant]};
    display: flex;
    & svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
