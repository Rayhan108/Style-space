import useTitle from "../../hooks/useTitle";

import group1 from "../../assets/Group 19.png";
import group2 from "../../assets/Group 20.png";
import { IoIosSearch } from "react-icons/io";
import { FaHandHoldingMedical,FaBuilding  } from "react-icons/fa";
const Works = () => {
  return (
    <>
    <h1 className="text-center">

      {useTitle("How It Works?")}
    </h1>
      <div className="grid md:grid-cols-5 md:gap-5 gap-10 px-20 md:px-0 mt-10 mb-10 ">
        <div className="w-56 h-48 ">
          {/* <img className="w-[79px] h-[69px]:" src={research} alt="" /> */}
          <div className="text-center">
            <button className="h-3rem bg-[#9672FF] px-1rem py-1rem rounded-lg p-5"><IoIosSearch className="text-white" size={30}/></button>
          </div>
          <p className="text-1xl font-bold text-center py-3">Research Suburbs</p>
          <p className="text-center text-xl font-thin">Wonder twenty hunted and put income set desire expect. Am cottage calling.</p>
        </div>
        <div>
            <img className="hidden md:flex" src={group1} alt="" />
        </div>
        <div className="w-56 h-48 ">
          {/* <img className="w-[79px] h-[69px]:" src={research} alt="" /> */}
          <div className="text-center">
            <button className="h-3rem bg-[#9672FF] px-1rem py-1rem rounded-lg p-5"><FaHandHoldingMedical className="text-white" size={30}/></button>
          </div>
          <p className="text-1xl font-bold text-center py-3">Instant Valuation</p>
          <p className="text-center text-xl font-thin">Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.</p>
        </div>
        <div><img className="hidden md:flex" src={group2} alt="" /></div>
        <div className="w-56 h-48 ">
          {/* <img className="w-[79px] h-[69px]:" src={research} alt="" /> */}
          <div className="text-center">
            <button className="h-3rem bg-[#9672FF] px-1rem py-1rem rounded-lg p-5"><FaBuilding  className="text-white" size={30}/></button>
          </div>
          <p className="text-1xl font-bold text-center py-3">Track Property</p>
          <p className="text-center text-xl font-thin">Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.</p>
        </div>
      </div>
    </>
  );
};

export default Works;
