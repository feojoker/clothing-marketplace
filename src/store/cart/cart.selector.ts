import { RootState } from "store/store";

export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartCount = (state: RootState) => state.cart.cartCount;
export const selectCartTotal = (state: RootState) => state.cart.cartTotal;
