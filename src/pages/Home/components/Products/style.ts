import styled from "styled-components";

export const ProductsContainer = styled.section`
  max-width: 90rem;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
  /* h1 {
    font-family: ${({ theme }) => theme.fontFamilies.title};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  } */

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding: 0rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0rem 10rem;
  }
`;

export const SectionTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.title};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const ProductsGrid = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    row-gap: 2.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
  }
`;
