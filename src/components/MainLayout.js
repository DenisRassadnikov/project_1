import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Aside />
      <Footer />
      <Outlet />
    </>
  );
};

export default MainLayout;
