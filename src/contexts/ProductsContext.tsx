import { ReactNode, createContext, useState } from "react";

export interface ProductsContextData {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
} as ProductsContextData);

export const ProductsContextProvider = ({ children }: ProviderProps) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <ProductsContext.Provider value={{ count, decrement, increment }}>
      {children}
    </ProductsContext.Provider>
  );
};
