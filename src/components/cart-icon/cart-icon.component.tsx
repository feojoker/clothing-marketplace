import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from 'assets/shopping-bag.svg'
import { useDispatch } from 'react-redux'
import { setIsCartOpen } from 'store/cart/cart.action'
import { useAppSelector } from 'store/hooks'
import { selectCartCount } from 'store/cart/cart.selector'

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useAppSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen());

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShopingIcon className='cart-icon__basket' />
      <span className='cart-icon__count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon