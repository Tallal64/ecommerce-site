import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import IShowSpeed from "./pages/IShowSpeed";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";

const RoutesConf = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="iShowSpeed" element={<IShowSpeed />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConf;
