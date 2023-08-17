import { ReactNode, createContext, useState, useEffect } from 'react'
import PRODUCTS from "data/shop-data.json";

export type ProductData = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

export type ProductDataContextType = {
  productData: ProductData[] | null;
  setProductData: (productData: ProductData[] | null) => void;
};

export const ProductContext = createContext<ProductDataContextType>({
  productData: null,
  setProductData: async () => { },
})

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [productData, setProductData] = useState<ProductData[] | null>(null);
  const value = { productData, setProductData }

  useEffect(() => {
    setProductData(PRODUCTS)
    return () => {
      setProductData(null)
    }
  }, [])
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}