import { ReactNode, createContext, useReducer } from "react";
import { createAction } from "utils/reducer/reducer.utils";

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
  setIsCartOpen: () => void,
  cartItems: CartItemType[],
  addItemToCart: (productToAdd: ProductType) => void,
  removeItemFromCart: (productToRemove: ProductType) => void,
  deleteProductFromCart: (productToDelete: ProductType) => void,
  cartCount: number,
  cartTotal: number,
}

type CartReducerStateType = {
  isCartOpen: boolean,
  cartItems: CartItemType[],
  cartCount: number,
  cartTotal: number,
}


type CartReducerActionTypeType = 'SET_CART_ITEMS' | 'SET_IS_CART_OPEN';

type CartReducerActionPayloadType = {
  isCartOpen?: boolean,
  cartItems?: CartItemType[],
  cartCount?: number,
  cartTotal?: number,
} | null;

type CartReducerActionType = {
  type: CartReducerActionTypeType,
  payload: CartReducerActionPayloadType,
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
  cartCount: 0,
  cartTotal: 0,
});


const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state: CartReducerStateType, action: CartReducerActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload
      };

    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }

    default:
      throw new Error(`unhandled type of ${type} in cardReducer`)
  }
}


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  console.log(cartItems)

  const updateCartItemsReducer = (newCartItems: CartItemType[]) => {
    const newCartCount = newCartItems.reduce((total: number, cartItem: CartItemType) => total + cartItem.quantity, 0)
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

    dispatch(createAction<CartReducerActionTypeType, CartReducerActionPayloadType>(
      'SET_CART_ITEMS',
      {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      }
    ))
  }

  const setIsCartOpen = () => {
    dispatch(createAction<CartReducerActionTypeType, CartReducerActionPayloadType>(
      'SET_IS_CART_OPEN',
      null
    ))
  }

  const addItemToCart = (productToAdd: ProductType) => {
    const newCartItems = addCartItemHelper(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (cartItemToRemove: ProductType) => {
    const newCartItems = removeCartItemHelper(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const deleteProductFromCart = (cartProductToRemove: ProductType) => {
    const newCartItems = deleteCartProductHelper(cartItems, cartProductToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, deleteProductFromCart, cartCount, cartTotal }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}