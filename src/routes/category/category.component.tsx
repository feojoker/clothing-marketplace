import ProductCard from 'components/product-card/product-card.component';
import { CategoriesContext, CategoryProductType } from 'contexts/categories.context';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './category.styles.scss'

const Category = () => {

  const { category } = useParams();
  const [products, setProducts] = useState<CategoryProductType[]>([]);
  const { categoriesMap } = useContext(CategoriesContext);

  useEffect(() => {
    if (category) setProducts(categoriesMap[category])
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