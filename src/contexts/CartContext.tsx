import { ReactNode, createContext, useContext, useState } from "react";

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
}

interface CartContextProvider {
  children: ReactNode;
}

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProvider) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    console.log(`item added to cart => "${product.name}"`);

    /**
     * Caso o item já esteja no carrinho ele incrementa a quantidade
     * Caso o item não esteja no carrinho então adiciona o produto e a quantidade
     */
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (existingCartItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  console.log("Cart Items", cartItems);

  const removeFromCart = (product: Product) => {
    console.log("item removed from cart");
    setCartItems(
      cartItems.filter((cartItem) => cartItem.product.id !== product.id)
    );
  };

  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
