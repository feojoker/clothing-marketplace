import { createAction } from "utils/reducer/reducer.utils";
import type { CartReducerActionPayloadType, CartReducerActionTypeType } from "./cart.types";

export const setIsCartOpen = () => createAction<CartReducerActionTypeType, CartReducerActionPayloadType>('cart/SET_IS_CART_OPEN', null)

export const setCartItems = (cartItems: CartReducerActionPayloadType) => createAction<CartReducerActionTypeType, CartReducerActionPayloadType>('cart/SET_CART_ITEMS', cartItems)