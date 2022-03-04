import styled from "styled-components";

export const StyledProducts = styled.div``;

export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(19rem, 100%), 1fr));
  gap: 40px;

  @media (max-width: 820px) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(min(13rem, 100%), 1fr));
  }
`;
