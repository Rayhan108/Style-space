import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
       <>
        <Navbar></Navbar>
        <div className="md:px-20">
            <Outlet/>
            <Footer></Footer>
        </div>
       </>
    );
};

export default Main;