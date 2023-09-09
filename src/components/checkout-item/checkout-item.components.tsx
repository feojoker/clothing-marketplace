import './checkout-item.styles.scss'
import { CartItemType } from 'contexts/cart.context';
import { updateCartItemsReducer } from 'store/cart/cart.helpers';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCartItems } from 'store/cart/cart.selector';

const CheckoutItem = ({ checkoutItem }: { checkoutItem: CartItemType }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const { imageUrl, name, quantity, price } = checkoutItem;


  const handleRemoveItem = () => {
    updateCartItemsReducer(dispatch, cartItems, 'removeItem', checkoutItem)
  }

  const handleAddItem = () => {
    updateCartItemsReducer(dispatch, cartItems, 'addItem', checkoutItem)
  }

  const handleDeleteProduct = () => {
    updateCartItemsReducer(dispatch, cartItems, 'deleteProduct', checkoutItem)
  }

  return (
    <div className='checkout-item'>
      <div className='checkout-item__image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <h2 className='checkout-item__name'>
        {name}
      </h2>
      <div className='checkout-item__quantity'>
        <span className='checkout-item__quantity-arrow' onClick={handleRemoveItem}>
          -
        </span>
        <span className='checkout-item__quantity-value'>
          {quantity}
        </span>
        <span className='checkout-item__quantity-arrow' onClick={handleAddItem}>
          +
        </span>
      </div>
      <div className='checkout-item__price'>
        {price}
      </div>
      <div className='checkout-item__remove-button' onClick={handleDeleteProduct}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem