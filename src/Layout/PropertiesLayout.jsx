import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Hero from "../Pages/Home/Hero";
import Works from "../Components/Works/Works";
import Footer from "../Shared/Footer/Footer";
import Properties from "../Components/Properties/Properties";
import Feature from "../Components/Feature/Feature";
import ClientSays from "../Components/ClientSays/ClientSays";

const PropertiesLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:px-20">
        <Hero></Hero>
        <Works></Works>
        <Properties></Properties>
        <div className="px-20 md:px-0">
          <Outlet></Outlet>
        </div>
        <Feature></Feature>
        <ClientSays></ClientSays>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PropertiesLayout;
