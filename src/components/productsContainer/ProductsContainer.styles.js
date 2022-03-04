import styled from "styled-components";

export const StyledProducts = styled.div``;

export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(318px, 100%), 1fr));
  gap: 40px;

  @media (max-width: 866px) {
    gap: 10px;
  }
`;
