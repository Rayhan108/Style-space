import img1 from "../../assets/Header Image.png";
// import img2 from "../../assets/bg.png";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-3">
      <div className="relative top-16 p-8 md:top-28 md:left-36 md:p-16 md:py-10">
        <p className="text-orange-400">RESIDENTIAL & OFFICE SPACES</p>
        <h1 className="text-3xl font-bold font-serif ">
          Smart Living Style for Smart People
        </h1>
        <p>
          Much did had call new drew that kept. Limits expect wonder law she.
          Now has you views woman noisy match money rooms.
        </p>
      </div>
      <div className="md:relative mt-20 md:mt-0 md:top-32 md:left-96 md:z-10">
        <img src={img1} alt="" />
      </div>
      <div>
        <div className="w-80 h-[700px] hidden md:flex  bg-[#BDCCFF] relative md:-top-36 md:-right-48"></div>
      </div>
    </div>
  );
};

export default Hero;
