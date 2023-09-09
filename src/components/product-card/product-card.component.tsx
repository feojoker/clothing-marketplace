import Button from 'components/button/button.component'
import './product-card.styles.scss'
import type { CategoryProductType } from 'store/categories/categories.types';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import { selectCartItems } from 'store/cart/cart.selector';
import { updateCartItemsReducer } from 'store/cart/cart.helpers';

const ProductCard = ({ product }: { product: CategoryProductType }) => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const { name, imageUrl, price } = product;

  const addProductToCard = () => updateCartItemsReducer(dispatch, cartItems, 'addItem', product)



  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} />
      <div className='product-card-footer'>
        <span className='product-card-footer__name'>
          {name}
        </span>
        <span className='product-card-footer__price'>
          {price}
        </span>
        <Button
          buttonType='inverted'
          onClick={addProductToCard}
        >
          Add to card
        </Button>
      </div>
    </div>
  )
}

export default ProductCard