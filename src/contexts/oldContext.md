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

type Action =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number } }
  | { type: "UPDATE_CART"; payload: { productId: number; newQuantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: number } };

type State = {
  cartItems: CartItem[];
};

const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.product.id === product.id
      );
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { product, quantity }],
        };
      }
    case "REMOVE_FROM_CART":
      const { productId } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== productId
        ),
      };
    case "UPDATE_CART":
      const { newQuantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: newQuantity }
            : item
        ),
      };
    default:
      return state;
  }
};

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
  // const [cartItems, setCartItems] = useState<CartItem[]>(
  //   getLocalStorage() || []
  // );
  const [state, dispatch] = useReducer(cartItemsReducer, {
    cartItems: getLocalStorage() || [],
  });

  const addToCart = (product: Product, quantity: number) => {
    console.log(`item added to cart => "${product.name}"`);
    // dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    dispatch(addToCartAction(product, quantity));
    /**
     * Caso o item já esteja no carrinho ele incrementa a quantidade
     * Caso o item não esteja no carrinho então adiciona o produto e a quantidade
     */
    // const existingCartItem = cartItems.find(
    //   (cartItem) => cartItem.product.id === product.id
    // );
    // if (existingCartItem) {
    //   setCartItems(
    //     cartItems.map((cartItem) =>
    //       cartItem.product.id === product.id
    //         ? { ...cartItem, quantity: cartItem.quantity + quantity }
    //         : cartItem
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, { product, quantity }]);
    // }
  };

  const removeFromCart = (product: Product) => {
    console.log("item removed from cart");
    // dispatch({ type: "REMOVE_FROM_CART", payload: { productId: product.id } });
    dispatch(removeFromCartAction(product.id));
    // setCartItems(
    //   cartItems.filter((cartItem) => cartItem.product.id !== product.id)
    // );
  };

  const updateCartItemsQuantity = (productId: number, newQuantity: number) => {
    // dispatch({ type: "UPDATE_CART", payload: { productId, newQuantity } });
    dispatch(updateCartAction(productId, newQuantity));
    // setCartItems(
    //   cartItems.map((item) =>
    //     item.product.id === productId
    //       ? { ...item, quantity: newQuantity }
    //       : item
    //   )
    // );
  };

  useEffect(() => {
    setLocalStorage(state.cartItems);
  }, [state.cartItems]);

  useEffect(() => {
    // Do something here to update the UI
    console.log("Cart state changed:", state.cartItems);
  }, [state.cartItems]);

  // console.log("Cart Items(context) =>", cartItems);
  const contextValues = {
    cartItems,
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
