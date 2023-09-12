import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from 'assets/shopping-bag.svg'
import { setIsCartOpen } from 'store/cart/cart.action'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectCartCount, selectIsCartOpen } from 'store/cart/cart.selector'

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const isCartOpen = useAppSelector(selectIsCartOpen);


  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShopingIcon className='cart-icon__basket' />
      <span className='cart-icon__count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon