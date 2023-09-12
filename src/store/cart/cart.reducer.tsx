import type { CartItemsReducerAction, CartOpenReducerAction, CartReducerStateType } from "./cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
}

export const cartReducer = (
  state: CartReducerStateType = CART_INITIAL_STATE,
  action: CartItemsReducerAction | CartOpenReducerAction
) => {
  const { type, payload } = action;

  switch (type) {
    case 'cart/SET_CART_ITEMS':
      return {
        ...state,
        cartItems: payload,
      };

    case 'cart/SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      }

    default:
      return state
  }
}