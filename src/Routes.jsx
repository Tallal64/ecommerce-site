import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";

const RoutesConf = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConf;
