import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }
  button:focus{
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple};
  }
  input:focus{
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["yellow-dark"]};

  }
  body, button,input, textarea {
    font-family: ${({ theme }) => theme.fontFamilies["main-sans"]};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 130%;
  }
  body {
    color: ${({ theme }) => theme.colors["base-text"]};
    background: ${({ theme }) => theme.colors.background}
  }
`;
