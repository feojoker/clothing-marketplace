import { User } from 'firebase/auth';
import { ReactNode, createContext, useState, useEffect } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '@utils/firebase/firebase.utils';

export type UserDataContextType = {
  userData: User | null;
  setUserData: (userData: User | null) => void;
};

export const UserContext = createContext<UserDataContextType>({
  userData: null,
  setUserData: async () => { },
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const value = { userData, setUserData }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) createUserDocumentFromAuth(user)
      setUserData(user)
    })
    return unsubscribe
  }, [])
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}