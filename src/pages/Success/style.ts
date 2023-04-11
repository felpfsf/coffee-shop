import styled from "styled-components";

export const SuccessContainer = styled.main`
  max-width: 90rem;
  width: 100%;
  margin: 5rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  img {
    max-width: 492px;
    width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 0rem 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6.25rem;
    align-items: end;
    gap: 100px;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0rem 10rem;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    font-family: ${({ theme }) => theme.fontFamilies.title};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    line-height: 130%;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 130%;
  }
`;

export const OrderDeliveryInfoContainer = styled.div`
  position: relative;
  margin-top: 2.5rem;
  border-radius: 6px 36px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 6px 36px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.yellow},
      ${({ theme }) => theme.colors.purple}
    );
    z-index: -1;
    pointer-events: none;
  }
`;
interface DeliveryContentVariant {
  variant: "address" | "timer" | "payment";
}
export const DeliveryContent = styled.div<DeliveryContentVariant>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  div {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: ${({ theme, variant }) =>
      variant === "address"
        ? theme.colors.purple
        : variant === "timer"
        ? theme.colors.yellow
        : variant === "payment"
        ? theme.colors["yellow-dark"]
        : null};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Summary = styled.div`
  display: flex;
  div {
    display: flex;
  }
`;
