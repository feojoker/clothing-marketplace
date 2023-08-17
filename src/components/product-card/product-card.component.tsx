import Button from 'components/button/button.component'
import './product-card.styles.scss'
import { ProductData } from 'contexts/product.context';

const ProductCard = ({ product }: { product: ProductData }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} />
      <div className='product-card-footer'>
        <span className='product-card-footer__name'>{name}</span>
        <span className='product-card-footer__price'>{price}</span>
        <Button buttonType='inverted'>Add to card</Button>
      </div>
    </div>
  )
}

export default ProductCard