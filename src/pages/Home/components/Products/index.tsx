import { ProductCard } from "@components/ProductCard";
import { ProductsContainer, ProductsGrid } from "./style";

export const Products = () => {
  return (
    <ProductsContainer>
      <h1>Nossos Cafés</h1>
      <ProductsGrid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsGrid>
    </ProductsContainer>
  );
};
