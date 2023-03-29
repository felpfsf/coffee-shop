import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding-inline: 1rem;
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    padding-inline: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding-inline: 10rem;
  }
`;
