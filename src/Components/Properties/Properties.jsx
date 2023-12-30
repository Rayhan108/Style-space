import { NavLink} from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const Properties = () => {
    const navRoutes=(
        <>
          <li>
              <NavLink to="/properties/residential" className="nl p-1 md:p-0  font-serif font-bold">Residential Property</NavLink>
          </li>
          <li>
              <NavLink to="/properties/commercial" className="nl p-1 md:ml-10 font-serif font-bold" >Commercial Property</NavLink>
          </li>
          <li>
              <NavLink to="/properties/agriculturer" className="nl p-1 md:ml-10 font-serif font-bold" >Agriculture Property</NavLink>
          </li>
          <li>
              <NavLink to="/properties/insustrial" className="nl p-1 md:ml-10 font-serif font-bold" >Industrial Property</NavLink>
          </li>
      
      </>)
    return (
        <div className="mt-28  md:px-0">
           <div className="flex px-3 justify-between">
            <div className="w-[461px]  ">
              {useTitle("Best Real Estate Deals")}
              <p className="text-2xl font-thin">Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.</p>
            </div>
            <div className="mt-20">
           
            <button className="rounded-md text-white bg-[#F85A47] md:w-48 w-36 h-16 md:h-16" >
            View All Property
            </button>
            </div>
            </div> 
            <div className="navbar  lg:flex">
          <ul className=" md:menu-horizontal navbar  grid grid-cols-1 gap-5">
            {navRoutes}
          </ul>
        </div>
         
        </div>
    );
};

export default Properties;