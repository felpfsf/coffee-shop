import styled from "styled-components";

export const CartProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 64px;
    height: 64px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Counter = styled.div`
  height: 32px;
  color: ${({ theme }) => theme.colors["base-title"]};
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  button {
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
  button:hover {
    color: ${({ theme }) => theme.colors["purple-dark"]};
    background: ${({ theme }) => theme.colors["base-hover"]};
    transition: background 0.2s ease-in-out;
  }
`;

export const RemoveButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  text-transform: uppercase;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
    transition: background 0.2s ease-in-out;
  }
`;
