import { Product } from "../product/Product";
import { StyledProducts, Products } from "./ProductsContainer.styles";

export const ProductsContainer = () => {
  return (
    <StyledProducts>
      <Products>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Products>
    </StyledProducts>
  );
};
