import { useContext } from 'react'
import './cart-dropdown.styles.scss'
import Button from 'components/button/button.component'
import { CartContext } from 'contexts/cart.context'
import CartItem from 'components/cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const { isCartOpen, cartItems, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen()
    navigate("/checkout")
  }

  return (
    <div className={`cart-dropdown ${isCartOpen ? '_active' : ''}`}>
      <div className='cart-dropdown__items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>
        Go To Checkout
      </Button>
    </div>
  )
}

export default CartDropdown