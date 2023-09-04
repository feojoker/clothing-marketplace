import ProductCard from 'components/product-card/product-card.component';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'store/hooks';
import { selectCategories } from 'store/categories/categories.selector';
import type { CategoryProductType } from 'store/categories/categories.types';
import './category.styles.scss'

const Category = () => {

  const { category } = useParams();
  const [products, setProducts] = useState<CategoryProductType[]>([]);
  const categoriesMap = useAppSelector(selectCategories)

  useEffect(() => {
    if (category && categoriesMap) setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div>
      <h2 className='category__title'>
        {category}
      </h2>
      <div className='category__products'>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Category