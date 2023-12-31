import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const OtherPages = () => {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
};

export default OtherPages;
