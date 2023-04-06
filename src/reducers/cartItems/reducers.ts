import { ActionTypes, CartItemsAction } from "./actions";

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

export interface CartItemsState {
  cartItems: CartItem[];
}

const initialState: CartItemsState = {
  cartItems: [],
};

export const cartItemsReducer = (
  state: CartItemsState = initialState,
  action: CartItemsAction
) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
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
    case ActionTypes.REMOVE_FROM_CART:
      const { productId } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== productId
        ),
      };
    case ActionTypes.UPDATE_CART:
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
