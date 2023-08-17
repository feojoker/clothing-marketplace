import { ReactNode, createContext, useState } from "react";

type CartContextType = {
  isCartOpen: boolean,
  // setIsCartOpen: (isCartOpen: boolean) => boolean
  setIsCartOpen: (isCartOpen: boolean) => void;

}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => { },
  // setIsCartOpen: (isCartOpen) => !isCartOpen,
});


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  const value = { isCartOpen, setIsCartOpen }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}