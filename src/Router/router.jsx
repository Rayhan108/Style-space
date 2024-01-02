import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Portfolio from "../Pages/Gallary/Gallary";
import Contact from "../Pages/Contact/Contact";
import PropertiesLayout from "../Layout/PropertiesLayout";
import Residential from "../Components/Residential/Residential";
import Commercial from "../Components/Commercial/Commercial";
import Agriculturer from "../Components/Agriculturer/Agriculturer";
import Industrial from "../Components/Industrial/Industrial";
import OtherPages from "../Layout/OtherPages";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
       
      ],
    },
    {
        path: "/othersPages",
        element:<OtherPages></OtherPages>,
      children: [
        {
          path: "/othersPages/about",
          element:<About></About>,
        },
        {
          path: "/othersPages/services",
          element:<Services></Services>,
        },
        {
          path: "/othersPages/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/othersPages/gallary",
          element:<Portfolio></Portfolio>,
        },
        {
          path: "/othersPages/contact",
          element:<Contact></Contact>,
        },
       
      ],
    },
    {
      path: "/",
      element:<PropertiesLayout></PropertiesLayout>,
    children: [
      {
        path: "/properties/residential",
        element:<Residential></Residential>,
      }, 
      {
        path: "/properties/commercial",
        element:<Commercial/>,
      }, 
      {
        path: "/properties/agriculturer",
        element:<Agriculturer/>,
      }, 
      {
        path: "/properties/insustrial",
        element:<Industrial/>,
      }
    ] 
    }
  ]);

export default router;