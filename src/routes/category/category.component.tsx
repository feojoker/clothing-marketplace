import ProductCard from 'components/product-card/product-card.component';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'store/hooks';
import { selectCategoriesMap } from 'store/categories/categories.selector';
import type { CategoryProductType } from 'store/categories/categories.types';
import './category.styles.scss'
import { invariantCheck } from 'utils/invariant/invariant.utils';

type CategoryParams = {
  category: string,
}

const Category = () => {
  const routerParams = useParams<CategoryParams>();
  const { category } = routerParams;

  invariantCheck(
    category,
    `React Router invalid path name. Expected "category" path, but got "${Object.keys(routerParams)[1]}"`
  );

  const categoriesMap = useAppSelector(selectCategoriesMap)
  const [products, setProducts] = useState<CategoryProductType[]>(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
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