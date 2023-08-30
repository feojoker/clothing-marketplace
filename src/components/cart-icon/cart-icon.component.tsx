import { useContext, useEffect, useState } from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from 'assets/shopping-bag.svg'
import { CartContext, CartItemType } from 'contexts/cart.context'

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen();

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShopingIcon className='cart-icon__basket' />
      <span className='cart-icon__count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon