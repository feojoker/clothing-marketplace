import CategoryPreview from 'components/category-preview/category-preview.component';
import { useAppSelector } from 'store/hooks';
import { selectCategoriesMap } from 'store/categories/categories.selector';

const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(selectCategoriesMap)

  return (
    <>
      {categoriesMap && Object.keys(categoriesMap).map((title) => (
        <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
      ))}
    </>

  )
}

export default CategoriesPreview