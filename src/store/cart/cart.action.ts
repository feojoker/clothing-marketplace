import { createAction } from "utils/reducer/reducer.utils";
import type { CartItemType, ProductType } from "./cart.types";

export const setIsCartOpen = (boolean: boolean) =>
  createAction<'cart/SET_IS_CART_OPEN', boolean>('cart/SET_IS_CART_OPEN', boolean)

export const setCartItems = (cartItems: CartItemType[]) =>
  createAction<'cart/SET_CART_ITEMS', CartItemType[]>('cart/SET_CART_ITEMS', cartItems)


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



export const updateCartItems = (
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
    default:
      throw new Error(`Catch unknown type: ${type}`)
  }

  return setCartItems(newCartItems)
}