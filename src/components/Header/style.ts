import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 90rem;
  padding: 2rem 1rem;
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 2rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 2rem 10rem;
  }
`;

export const CartButton = styled.button`
  position: relative;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors["yellow-light"]};
  border-radius: 0.375rem;
  cursor: pointer;
  & svg {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const Counter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.white};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors["yellow-dark"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
