import { Product } from "../product/Product";
import { StyledProducts, Products } from "./ProductsContainer.styles";
import Product1 from "../../imgs/product-1.png";
import Product2 from "../../imgs/product-2.png";

export const ProductsContainer = () => {
  return (
    <StyledProducts>
      <Products>
        <Product image={Product1} />
        <Product image={Product2} />
        <Product image={Product1} outOfStock />
        <Product image={Product2} outOfStock />
        <Product image={Product1} />
      </Products>
    </StyledProducts>
  );
};
