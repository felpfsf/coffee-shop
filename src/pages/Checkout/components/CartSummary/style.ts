import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div:last-child {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;
