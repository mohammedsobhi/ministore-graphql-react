import styled from "styled-components";

export const ProductCard = styled.li`
  cursor: pointer;
  padding: 15px;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    padding: 10px;
    margin-bottom: 10px;
  }

  :hover,
  :focus {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledImg = styled.img`
  object-fit: fill;
  width: 100%;
`;

export const ProductData = styled.div`
  margin-top: 24px;
`;

export const ProductName = styled.p`
  font-weight: 300;
  font-size: 18px;
`;

export const ProductPrice = styled.strong`
  font-weight: 500;
  font-size: 18px;
`;
