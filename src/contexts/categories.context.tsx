import { ReactNode, createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from 'utils/firebase/firebase.utils';
// import { addCollectionAndDocuments } from 'utils/firebase/firebase.utils';


export type CategoryProductType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

export type CategoriesContextType = {
  categoriesMap: Record<string, CategoryProductType[]>;
};

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categoriesMap, setCategoriesMap] = useState<Record<string, CategoryProductType[]>>({});
  const value = { categoriesMap }

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap();
  }, [])
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}