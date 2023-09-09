import './checkout.styles.scss'
import CheckoutItem from 'components/checkout-item/checkout-item.components';
import { useAppSelector } from 'store/hooks';
import { selectCartItems, selectCartTotal } from 'store/cart/cart.selector';

const checkoutHeaders = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {

  const cartTotal = useAppSelector(selectCartTotal)
  const cartItems = useAppSelector(selectCartItems)

  return (
    <div className='checkout'>
      <div className='checkout__header'>
        {checkoutHeaders.map((header) => (
          <div className='checkout__header-block' key={header}>
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