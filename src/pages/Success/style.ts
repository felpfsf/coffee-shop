import styled from "styled-components";

export const SuccessContainer = styled.main`
  max-width: 90rem;
  width: 100%;
  margin: 5rem auto;
  padding: 0 1rem;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 0rem 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0rem 10rem;
  }
`;