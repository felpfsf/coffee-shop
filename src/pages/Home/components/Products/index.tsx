import { ProductCard } from "@components/ProductCard";
import { ProductsContainer, ProductsGrid, SectionTitle } from "./style";
import data from "../../../../data/products.json";

export const Products = () => {
  // console.log(data.products);
  return (
    <ProductsContainer>
      <SectionTitle>Nossos Cafés</SectionTitle>
      <ProductsGrid>
        {data.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};
