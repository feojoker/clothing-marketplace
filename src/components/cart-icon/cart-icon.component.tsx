import React, { useContext } from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from 'assets/shopping-bag.svg'
import { CartContext } from 'contexts/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShopingIcon className='cart-icon__basket' />
      <span className='cart-icon__count'>0</span>
    </div>
  )
}

export default CartIcon