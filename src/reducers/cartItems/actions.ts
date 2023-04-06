interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  UPDATE_CART = "UPDATE_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

interface AddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: { product: Product; quantity: number };
}
interface RemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: { productId: number };
}
interface UpdateCartAction {
  type: ActionTypes.UPDATE_CART;
  payload: { productId: number; newQuantity: number };
}

export type CartItemsAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartAction;

export const addToCartAction = (
  product: Product,
  quantity: number
): AddToCartAction => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { product, quantity },
  };
};

export const removeFromCartAction = (productId: number): RemoveFromCartAction => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { productId },
  };
};

export const updateCartAction = (
  productId: number,
  newQuantity: number
): UpdateCartAction => {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: { productId, newQuantity },
  };
};
