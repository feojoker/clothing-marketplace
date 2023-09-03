import { useContext } from 'react';
import './checkout-item.styles.scss'
import { CartContext, CartItemType } from '@contexts/cart.context';

const CheckoutItem = ({ checkoutItem }: { checkoutItem: CartItemType }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;

  const { addItemToCart, removeItemFromCart, deleteProductFromCart } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItemFromCart(checkoutItem)
  }

  const handleAddItem = () => {
    addItemToCart(checkoutItem)
  }

  const handleDeleteProduct = () => {
    deleteProductFromCart(checkoutItem)
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