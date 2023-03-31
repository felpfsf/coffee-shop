import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 16rem;
  width: 100%;
  padding: 0 1.5rem 1.25rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.375rem 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  margin-top: -1.25rem;
`;

export const ProductTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.micro};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors["yellow-dark"]};
  text-transform: uppercase;
  margin-top: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  background: ${({ theme }) => theme.colors["yellow-light"]};
`;

export const ProductName = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.title};
  font-size: ${({ theme }) => theme.fontSizes.large} !important;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-top: 1rem;
`;

export const ProductDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors["base-label"]};
  line-height: 130%;
  text-align: center;
  margin-top: 0.5rem;
`;

export const ProductBuy = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriceTag = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors["base-text"]};
  span {
    font-family: ${({ theme }) => theme.fontFamilies.title};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights["extra-bold"]};
    line-height: 32px;
  }
`;

export const Counter = styled.div`
  color: ${({ theme }) => theme.colors["base-title"]};
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  button {
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
`;

export const CartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors["purple-dark"]};
  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
