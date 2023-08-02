import { Routes, Route } from "react-router-dom";
import Home from "routes/home/home.component";
import Navigation from "routes/navigation/navigation.components";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<div>Future shop</div>} />
      </Route>
    </Routes>
  );
}

export default App;
