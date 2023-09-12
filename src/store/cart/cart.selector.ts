import { RootState } from "store/store";
import { createSelector } from 'reselect';
import { CartItemType } from "./cart.types";

const selectCartReducer = (state: RootState) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartState) => cartState.isCartOpen
)

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartState) => cartState.cartItems
)

export const selectCartCount = createSelector(
  [selectCartItems],
  (newCartItems) => newCartItems.reduce((total: number, cartItem: CartItemType) => total + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (newCartItems) => newCartItems.reduce((total: number, cartItem: CartItemType) => total + (cartItem.quantity * cartItem.price), 0)
)