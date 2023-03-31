import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { HomeContainer } from "./style";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Products />
    </HomeContainer>
  );
};
