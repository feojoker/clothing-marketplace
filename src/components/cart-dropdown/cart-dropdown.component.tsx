import './cart-dropdown.styles.scss'
import Button from 'components/button/button.component'
import CartItem from 'components/cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsCartOpen } from 'store/cart/cart.action'
import { selectIsCartOpen, selectCartItems } from 'store/cart/cart.selector'
import { useAppSelector } from 'store/hooks'

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const cartItems = useAppSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen())
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