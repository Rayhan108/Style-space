import useTitle from "../../hooks/useTitle";
import img1 from "../../assets/Header Image.png";
import img2 from "../../assets/Image.png";


const Feature = () => {
  return (
    <>
      <h1 className="text-center">{useTitle("Featured Listing of the Week")}</h1>
      <div data-aos="fade-up" className="bg-[#F1FFFF]  md:py-5 p-5 grid md:flex md:flex-row md:justify-between  md:h-[748px]">
        <div className="-[325px] h-[226px] md:w-full md:h-full">
          <div className="mt-3 ">
            <img className="w-[325px] h-[226px] md:w-full md:h-full" src={img1} alt="" />
          </div>
          <div className="relative -top-36 md:-top-[400px] left-3 md:left-3 z-10 ">
            <img className="w-[294px] h-[212px] md:w-full md:h-full" src={img2} alt="" />
          </div>
        </div>
        <div className="md:mt-44 ">
            <h1 className="font-bold text-2xl mb-3 text-center">The and collecting for the motionless difficulty son.</h1>
            <p className="font-thin text-xl mb-3">Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but difficult situations.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 px-16 md:px-0">
                <div>
                    <p className="text-xl font-bold">Budget</p>
                    <p className="font-thin">Confidential</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Size</p>
                    <p className="font-thin">1200m<sup>2</sup></p>
                </div>
                <div>
                    <p className="text-xl font-bold">Type</p>
                    <p className="font-thin">Office</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Location</p>
                    <p className="font-thin">Swizerland</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Status</p>
                    <p className="font-thin">Done</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Flat</p>
                    <p className="font-thin">8 Room</p>
                </div>
              
            </div>
            <div>
                <button className="w-full p-3 rounded-md text-white mt-5 bg-[#F85A47] ">Yes I Want To Book Office Package</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
