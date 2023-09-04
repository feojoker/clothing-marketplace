import Button from 'components/button/button.component'
import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';
import type { CategoryProductType } from 'store/categories/categories.types';

const ProductCard = ({ product }: { product: CategoryProductType }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => addItemToCart(product);
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