import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.main`
  max-width: 90rem;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 0rem 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0rem 10rem;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamilies.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: 40rem 1fr;
    column-gap: 2rem;
  }
`;

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 1rem;
  border-radius: 0.375rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
`;

export const ShippingAddress = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors["base-text"]};
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 0.0625rem solid ${({ theme }) => theme.colors["base-button"]};
    border-radius: 0.25rem;
    padding: 0.75rem;
    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
  div {
    display: flex;
    gap: 0.75rem;
    input {
      flex: 1;
      width: 0;
    }
  }
  div:first-of-type {
    input:last-of-type {
      /* border: 1px solid red; */
      flex: 2.5;
    }
  }
  div:last-of-type {
    input:nth-of-type(1) {
      /* border: 1px solid orange; */
    }
    input:nth-of-type(2) {
      /* border: 1px solid green; */
      flex: 2 0 auto;
    }
    input:nth-of-type(3) {
      /* border: 1px solid blue; */
      width: 60px;
      flex: 0 0 auto;
    }
  }
`;

export const PaymentOptions = styled(RadioGroup.Root)`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const PaymentOption = styled(RadioGroup.Item)`
  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.tiny};
    text-transform: uppercase;
  }
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
    transition: background 0.3s ease-in-out;
  }
  &[data-state="checked"] {
    background: ${({ theme }) => theme.colors["purple-light"]};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;

export const SelectedProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .divider {
    border-top: 1px solid ${({ theme }) => theme.colors["base-button"]};
    margin: 24px 0;
  }
`;

export const OrderSummary = styled.div`
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

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.125rem;
  line-height: 160%;
  text-transform: uppercase;
  border-radius: 0.375rem;
  padding: 0.75rem 0.5rem;
  background: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors["yellow-dark"]};
    transition: background 0.3s ease-in-out;
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
