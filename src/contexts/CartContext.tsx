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
  clearCartAction,
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
  isOrderSubmitted: boolean;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  updateCartItemsQuantity: (productId: number, quantity: number) => void;
  handleIsOrderSubmitted: (isSubmitted: boolean) => void;
  clearCartItems: () => void;
}

interface CartContextProvider {
  children: ReactNode;
}

const CartContext = createContext({
  cartItems: [],
  isOrderSubmitted: false,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemsQuantity: () => {},
  handleIsOrderSubmitted: () => {},
  clearCartItems: () => {},
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

const getOrderIsSubmittedFromLocalStorage = () => {
  const storedItems = localStorage.getItem("@coffee-delivery:isOrderSubmitted");
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  // return storedItems ? JSON.parse(storedItems) : false;
};

const setOrderIsSubmittedToLocalStorage = (isOrderSubmitted: boolean) => {
  const stateJSON = JSON.stringify(isOrderSubmitted);
  return localStorage.setItem("@coffee-delivery:isOrderSubmitted", stateJSON);
};

export const CartContextProvider = ({ children }: CartContextProvider) => {
  const [state, dispatch] = useReducer(cartItemsReducer, {
    cartItems: getLocalStorage() || [],
  });

  const [isOrderSubmitted, setIsOrderSubmitted] = useState(
    getOrderIsSubmittedFromLocalStorage() || false
  );

  const handleIsOrderSubmitted = (isSubmitted: boolean) => {
    // console.log("context handleIsOrderSubmitted =>", isSubmitted);
    setIsOrderSubmitted(isSubmitted);
    // setOrderIsSubmittedToLocalStorage(isSubmitted);
  };
  // console.log("context isOrderSubmitted =>", isOrderSubmitted);

  const addToCart = (product: Product, quantity: number) => {
    dispatch(addToCartAction(product, quantity));
  };

  const removeFromCart = (product: Product) => {
    dispatch(removeFromCartAction(product.id));
  };

  const updateCartItemsQuantity = (productId: number, newQuantity: number) => {
    dispatch(updateCartAction(productId, newQuantity));
  };

  const clearCartItems = () => {
    dispatch(clearCartAction());
  };

  useEffect(() => {
    setLocalStorage(state.cartItems);
  }, [state.cartItems]);

  useEffect(() => {
    setOrderIsSubmittedToLocalStorage(isOrderSubmitted);
  }, [isOrderSubmitted]);

  const contextValues = {
    cartItems: state.cartItems,
    isOrderSubmitted,
    addToCart,
    handleIsOrderSubmitted,
    removeFromCart,
    updateCartItemsQuantity,
    clearCartItems
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
