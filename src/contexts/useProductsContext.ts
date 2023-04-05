import { useContext } from "react";
import { ProductsContext, ProductsContextData } from "./ProductsContext";

export const useProductsContext = (): ProductsContextData =>
  useContext(ProductsContext);
