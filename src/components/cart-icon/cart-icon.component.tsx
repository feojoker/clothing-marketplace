import { useContext, useEffect, useState } from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from 'assets/shopping-bag.svg'
import { CartContext, CartItemType } from 'contexts/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const [cartCount, setCartCount] = useState<number>(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total: number, cartItem: CartItemType) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShopingIcon className='cart-icon__basket' />
      <span className='cart-icon__count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon