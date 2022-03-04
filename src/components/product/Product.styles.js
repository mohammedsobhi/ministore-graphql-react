import styled from "styled-components";

export const ProductCard = styled.li`
  position: relative;
  cursor: pointer;
  padding: 15px;
  margin-bottom: 50px;

  @media (max-width: 826px) {
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

export const ImageContainer = styled.div`
  position: relative;
`;

export const CartIcon = styled.div`
  position: absolute;
  right: 15px;
  bottom: -20px;
  background-color: var(--c-primary);
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  transition: all ease 200ms;
  opacity: 0;
  /* display: ${(props) => (props.outOfStock ? "block" : "none")}; */

  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }

  :active {
    transform: scale(1.2);
  }

  ${ProductCard}:hover & ,${ProductData} :hover & {
    opacity: 1;
  }
  ${ProductCard}:focus & ,${ProductData} :focus & {
    opacity: 1;
  }

  img {
    width: 20px;
  }
`;

export const OutOfStock = styled.div`
  position: absolute;
  z-index: 500;
  width: calc(100% - 20px);
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  pointer-events: ${(props) => props.outOfStock && "none"};

  p {
    margin: 40% auto;
    font-size: 24px;
    font-weight: 400;
    color: #8d8f9a;
  }
`;
