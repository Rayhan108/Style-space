

import {  NavLink } from "react-router-dom";
import logo from "../../assets/stylespace-high-resolution-logo-transparent.png"

const Navbar = () => {
    const navRoutes=(
      <>
        <li>
            <NavLink to="/" className="nl  ml-3 font-serif font-bold">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className="nl  ml-10 font-serif font-bold" >About</NavLink>
        </li>
        <li>
            <NavLink to="/services" className="nl ml-10 font-serif font-bold" >Services</NavLink>
        </li>
        <li>
            <NavLink to="/portfolio" className="nl ml-10 font-serif font-bold" >Portfolio</NavLink>
        </li>
        <li>
            <NavLink to="/blog" className="nl ml-10 font-serif font-bold" >Blog</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="nl ml-10 font-serif font-bold" >Contact</NavLink>
        </li>
    </>)
    return (
        <div className="navbar z-20 fixed md:pl-20 px-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="  dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
            {navRoutes}
            </ul>
          </div>
          <img src={logo} className="w-28 "></img>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" menu-horizontal  ">
            {navRoutes}
          </ul>
        </div>
     
      </div>
    );
};

export default Navbar;