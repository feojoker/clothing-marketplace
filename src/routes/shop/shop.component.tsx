import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from 'routes/categories-preview/categories-preview.component';
import Category from 'routes/category/category.component';
import { setCategories } from 'store/categories/categories.action';
import { getCategoriesAndDocuments } from 'utils/firebase/firebase.utils';
import './shop.styles.scss'

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap();
  }, [dispatch])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>

  )
}

export default Shop