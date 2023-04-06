import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
} from "src/reducers/cartItems/actions";
import { cartItemsReducer } from "src/reducers/cartItems/reducers";

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
  updateCartItemsQuantity: (productId: number, quantity: number) => void;
}

interface CartContextProvider {
  children: ReactNode;
}

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemsQuantity: () => {},
} as CartContextType);

const getLocalStorage = () => {
  const storedItems = localStorage.getItem("@coffee-delivery:cartItems-v1.0.0");
  if (storedItems) {
    return JSON.parse(storedItems);
  }
};

const setLocalStorage = (cartItems: CartItem[]) => {
  const stateJSON = JSON.stringify(cartItems);
  return localStorage.setItem("@coffee-delivery:cartItems-v1.0.0", stateJSON);
};

export const CartContextProvider = ({ children }: CartContextProvider) => {
  const [state, dispatch] = useReducer(cartItemsReducer, {
    cartItems: getLocalStorage() || [],
  });

  const addToCart = (product: Product, quantity: number) => {
    dispatch(addToCartAction(product, quantity));
  };

  const removeFromCart = (product: Product) => {
    dispatch(removeFromCartAction(product.id));
  };

  const updateCartItemsQuantity = (productId: number, newQuantity: number) => {
    dispatch(updateCartAction(productId, newQuantity));
  };

  useEffect(() => {
    setLocalStorage(state.cartItems);
  }, [state.cartItems]);

  const contextValues = {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsQuantity,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
