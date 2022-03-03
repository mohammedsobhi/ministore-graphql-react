import { Container } from "../../components/container/Container";
import { HomeTitle } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <h1 className="visually-hidden">MiniStore</h1>
      <header>
        <HomeTitle>Category name</HomeTitle>
      </header>
    </Container>
  );
};

export default Home;
