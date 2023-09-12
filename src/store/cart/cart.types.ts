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
}

export type CartReducerActionType = 'cart/SET_CART_ITEMS' | 'cart/SET_IS_CART_OPEN';

// export type CartReducerActionPayloadType = {
//   isCartOpen: boolean,
//   cartItems: CartItemType[],
// };


// export type CartReducerActionPayloadType = {
//   isCartOpen: boolean,
//   cartItems: CartItemType[],
// };


// export type CartReducerAction = {
//   type: CartReducerActionType,
//   payload: CartReducerActionPayloadType,
// }

export type CartItemsReducerAction = {
  type: 'cart/SET_CART_ITEMS',
  payload: CartItemType[],
}

export type CartOpenReducerAction = {
  type: 'cart/SET_IS_CART_OPEN',
  payload: boolean,
}