import type { CartReducerActionType, CartReducerStateType } from "./cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

export const cartReducer = (state: CartReducerStateType = CART_INITIAL_STATE, action: CartReducerActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'cart/SET_CART_ITEMS':
      return {
        ...state,
        ...payload
      };

    case 'cart/SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }

    default:
      return state
  }
}