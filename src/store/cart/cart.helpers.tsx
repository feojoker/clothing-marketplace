import { Dispatch } from "redux";
import { setCartItems } from "./cart.action";
import type { CartItemType, ProductType } from "./cart.types";

const addCartItemHelper = (cartItems: CartItemType[], productToAdd: ProductType) => {
  const existCartItem = cartItems.find((cartItem: CartItemType) => cartItem.id === productToAdd.id);

  if (existCartItem) {
    existCartItem.quantity++
    return [...cartItems]
  }
  return ([{ ...productToAdd, quantity: 1 }, ...cartItems])
}

const deleteCartProductHelper = (cartItems: CartItemType[], cartProductToRemove: ProductType) =>
  cartItems.filter((cartItem) => cartItem.id !== cartProductToRemove.id)

const removeCartItemHelper = (cartItems: CartItemType[], cartItemToRemove: ProductType) => {
  const existCartItem = cartItems.find((cartItem: CartItemType) => cartItem.id === cartItemToRemove.id);

  if (existCartItem && existCartItem.quantity > 1) {
    existCartItem.quantity--
    return [...cartItems]
  }

  return deleteCartProductHelper(cartItems, cartItemToRemove)
}



export const updateCartItemsReducer = (
  dispatch: Dispatch,
  cartItems: CartItemType[],
  type: 'addItem' | 'removeItem' | 'deleteProduct',
  product: ProductType
) => {

  let newCartItems;

  switch (type) {
    case 'addItem':
      newCartItems = addCartItemHelper(cartItems, product)
      break
    case 'removeItem':
      newCartItems = removeCartItemHelper(cartItems, product)
      break
    case 'deleteProduct':
      newCartItems = deleteCartProductHelper(cartItems, product)
      break
  }



  const newCartCount = newCartItems.reduce((total: number, cartItem: CartItemType) => total + cartItem.quantity, 0)
  const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

  dispatch(setCartItems({
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  }))
}