import Button from 'components/button/button.component'
import './product-card.styles.scss'
import { ProductData } from 'contexts/product.context';
import { useContext } from 'react';
import { CartContext } from 'contexts/cart.context';

const ProductCard = ({ product }: { product: ProductData }) => {
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