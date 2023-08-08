import { Routes, Route } from "react-router-dom";
import Home from "routes/home/home.component";
import Navigation from "routes/navigation/navigation.components";
import SignIn from "routes/sign-in/sign-in.component";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<div>Future shop</div>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
