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
    display: grid;
    grid-template-columns: 40rem 1fr;
    column-gap: 2rem;
  }
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamilies.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const FormContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  svg {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const FormContainerHeader = styled.header`
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

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 0.0625rem solid ${({ theme }) => theme.colors["base-button"]};
    border-radius: 0.25rem;
    padding: 0.75rem;
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
      flex: 2.5;
    }
  }
  div:last-of-type {
    input:nth-of-type(1) {
      flex: 1.1;
    }
    input:nth-of-type(2) {
      flex: 2;
      width: 0;
    }
    input:nth-of-type(3) {
      flex: 0.1;
      width: 3.75rem;
    }
  }
`;

export const PaymentOptions = styled.div`
  margin-top: 0.75rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const RadioButtonGroup = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
`;

export const RadioButtonItem = styled(RadioGroup.Item)`
  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  span {
    font-size: ${({ theme }) => theme.fontSizes.tiny};
    text-transform: uppercase;
  }
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
    transition: background 0.2s ease-in-out;
  }
  &[data-state="checked"] {
    background: ${({ theme }) => theme.colors["purple-light"]};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;

export const SubmitButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: 160%;
  text-transform: uppercase;
  width: 100%;
  padding: 12px 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.yellow};
  }
  &:hover {
    background: ${({ theme }) => theme.colors["yellow-dark"]};
    transition: background 0.2s ease-in-out;
  }
`;

export const CartContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.375rem 2.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


