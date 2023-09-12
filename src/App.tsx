import { Routes, Route } from "react-router-dom";
import Home from "routes/home/home.component";
import Navigation from "routes/navigation/navigation.component";
import Auth from "routes/auth/auth.component";
import Shop from "routes/shop/shop.component";
import Checkout from "routes/checkout/checkout.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from 'utils/firebase/firebase.utils';
import { setUserData } from "store/user/user.action";
import { User } from "firebase/auth";
import { useAppDispatch } from "store/hooks";




const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) createUserDocumentFromAuth(user)
      dispatch(setUserData(user))
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
