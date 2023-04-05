import { ProductCard } from "@components/ProductCard";
import { ProductsContainer, ProductsGrid } from "./style";
import data from "../../../../data/products.json";

export const Products = () => {
  // console.log(data.products);
  return (
    <ProductsContainer>
      <h1>Nossos Cafés</h1>
      <ProductsGrid>
        {data.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};
