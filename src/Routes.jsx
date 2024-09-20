import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";

const RoutesConf = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConf;
