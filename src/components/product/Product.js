import {
  ProductCard,
  ProductData,
  StyledImg,
  ProductName,
  ProductPrice,
} from "./Product.styles";
import Product1 from "../../imgs/product-1.png";

export const Product = () => {
  return (
    <ProductCard>
      <StyledImg src={Product1} alt="product 1" />
      <ProductData>
        <ProductName>Apollo Running Short</ProductName>
        <ProductPrice>$ 50.00</ProductPrice>
      </ProductData>
    </ProductCard>
  );
};
