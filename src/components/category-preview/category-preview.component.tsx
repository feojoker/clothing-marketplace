import { CategoryProductType } from 'contexts/categories.context'
import ProductCard from 'components/product-card/product-card.component'
import './category-preview.styles.scss'
import { Link } from 'react-router-dom'

type Props = {
  title: string,
  products: CategoryProductType[],
}

const CategoryPreview = ({ title, products }: Props) => {
  return (
    <div className='category-preview'>
      <h2>
        <Link to={title} className='category-preview__title'>
          {title}
        </Link>
      </h2>
      <div className='category-preview__preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

    </div>
  )
}

export default CategoryPreview