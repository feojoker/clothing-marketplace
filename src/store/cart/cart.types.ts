export type CartItemType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}

export type ProductType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}


export type CartReducerStateType = {
  isCartOpen: boolean,
  cartItems: CartItemType[],
  cartCount: number,
  cartTotal: number,
}

export type CartReducerActionTypeType = 'cart/SET_CART_ITEMS' | 'cart/SET_IS_CART_OPEN';

export type CartReducerActionPayloadType = {
  isCartOpen?: boolean,
  cartItems?: CartItemType[],
  cartCount?: number,
  cartTotal?: number,
} | null;

export type CartReducerActionType = {
  type: CartReducerActionTypeType,
  payload: CartReducerActionPayloadType,
}