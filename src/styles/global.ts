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
  button {
    line-height: 0;
    border: 0;
    background: transparent;
  }
  body, button,input, textarea {
    font-family: ${({ theme }) => theme.fontFamilies["main-sans"]};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  body {
    color: ${({ theme }) => theme.colors["base-text"]};
    line-height: 130%;
    background: ${({ theme }) => theme.colors.background}
  }
`;
