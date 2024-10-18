import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
