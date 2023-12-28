import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/about",
          element:<About></About>,
        },
        {
          path: "/services",
          element:<Services></Services>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/portfolio",
          element:<Portfolio></Portfolio>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
      ],
    },
  ]);

export default router;