import React, { useContext } from 'react'
import './cart-dropdown.styles.scss'
import Button from 'components/button/button.component'
import { CartContext } from 'contexts/cart.context'

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext)

  return (
    <div
      className={`cart-dropdown ${isCartOpen ? '_active' : ''}`}
    >
      <div className='cart-dropdown__items'></div>
      <Button>Go To Checkout</Button>
    </div>
  )
}

export default CartDropdown