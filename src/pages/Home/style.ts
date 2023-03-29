import styled from "styled-components";

export const HomeContainer = styled.main`
  /* max-width: 90rem; */
  /* width: 100%; */
  /* margin: 0 auto; */
  padding: 0 .5rem;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 0rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0rem 10rem;
  }
`;
