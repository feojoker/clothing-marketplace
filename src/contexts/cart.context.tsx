import { ReactNode, createContext, useEffect, useState } from "react";

export type CartItemType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}

type ProductType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}

type CartContextType = {
  isCartOpen: boolean,
  setIsCartOpen: (isCartOpen: boolean) => void,
  cartItems: CartItemType[],
  addItemToCart: (productToAdd: ProductType) => void,
  removeItemFromCart: (productToRemove: ProductType) => void,
  deleteProductFromCart: (productToDelete: ProductType) => void,
}

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

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  deleteProductFromCart: () => { },
});


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])


  const addItemToCart = (productToAdd: ProductType) => {
    setCartItems(addCartItemHelper(cartItems, productToAdd))
  }

  const removeItemFromCart = (cartItemToRemove: ProductType) => {
    setCartItems(removeCartItemHelper(cartItems, cartItemToRemove))
  }

  const deleteProductFromCart = (cartProductToRemove: ProductType) => {
    setCartItems(deleteCartProductHelper(cartItems, cartProductToRemove))
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, deleteProductFromCart }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}