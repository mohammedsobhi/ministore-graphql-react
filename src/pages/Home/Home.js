import { Container } from "../../components/container/Container";
import { ProductsContainer } from "../../components/productsContainer/ProductsContainer";
import { HomeTitle } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <h1 className="visually-hidden">MiniStore</h1>
      <header>
        <HomeTitle>Category name</HomeTitle>
      </header>
      <ProductsContainer />
    </Container>
  );
};

export default Home;
