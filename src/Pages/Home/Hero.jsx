import img1 from "../../assets/Header Image.png";
// import img2 from "../../assets/bg.png";
import img3 from "../../assets/Group 14.png";
import img4 from "../../assets/Vector (1).png";
import img5 from "../../assets/Vector (2).png";
import img6 from "../../assets/Vector (3).png";
import img7 from "../../assets/Vector (4).png";
import img8 from "../../assets/Vector.png";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-3 ">
      <div className="relative top-16  px-5 md:px-0 md:top-28 md:left-0 ">
        <p className="text-[#F85A47] mb-3 text-3xl">
          RESIDENTIAL & OFFICE SPACES
        </p>
        <h1 className="text-4xl font-bold font-serif mb-3">
          Smart Living Style for Smart People
        </h1>
        <p className="text-xl font-thin ">
          Much did had call new drew that kept. Limits expect wonder law she.
          Now has you views woman noisy match money rooms.
        </p>
        <div className="form-control mt-10 ">
          <div className="join">
            <input
              type="text"
              placeholder="Search Properties"
              className="input input-bordered  md:w-full join-item"
            />
              <button className=" join-item text-white   bg-[#F85A47] w-32" type="submit">
              Search
            </button>
          </div>
        
        </div>
        
        <div>
          <p className="mt-10 text-3xl font-serif font-bold">
            Our Amazing Partners
          </p>
         
          <div className="flex gap-3 py-5 md:gap-32 md:py-10">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
          </div>
        </div>
      </div>

      <div className="md:relative   mt-20 md:mt-0 md:top-32 md:left-80 md:z-10">
        <img src={img1} alt="" />
      </div>
      <div>
        <div className=" md:h-[650px] bg-[#BDCCFF] hidden md:flex   md:relative md:top-0 md:left-[152px]">
          {/* <img src={img2} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
