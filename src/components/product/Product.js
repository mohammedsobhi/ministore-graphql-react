import {
  ProductCard,
  ProductData,
  StyledImg,
  ProductName,
  ProductPrice,
  ImageContainer,
  CartIcon,
  OutOfStock,
} from "./Product.styles";
import Cart from "../../icons/emptyCartW.svg";

export const Product = ({ image, outOfStock }) => {
  return (
    <ProductCard tabIndex="0">
      {outOfStock && (
        <OutOfStock>
          <p>OUT OF STOCK</p>
        </OutOfStock>
      )}
      <ImageContainer>
        <StyledImg src={image} alt="product 1" />
        <CartIcon outOfStock>
          <img src={Cart} alt="add to cart icon" />
        </CartIcon>
      </ImageContainer>
      <ProductData>
        <ProductName>Apollo Running Short</ProductName>
        <ProductPrice>$ 50.00</ProductPrice>
      </ProductData>
    </ProductCard>
  );
};
