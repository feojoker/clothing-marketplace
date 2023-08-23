import React, { useContext, useEffect, useState } from 'react'
import './checkout.styles.scss'
import { CartContext } from 'contexts/cart.context';
import CheckoutItem from 'components/checkout-item/checkout-item.components';

const checkoutHeaders = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
    setCartTotal(newTotal)
  }, [cartItems])

  return (
    <div className='checkout'>
      <div className='checkout__header'>
        {checkoutHeaders.map((header) => (
          <div className='checkout__header-block'>
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
      <span className='checkout__total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout