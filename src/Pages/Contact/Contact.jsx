import Banner from "../../Components/Banner/Banner";
import img from "../../assets/Screenshot_41 (2).jpg";

const Contact = () => {
  return (
    <div>
      <Banner tittle={"Contact With Us"}></Banner>
      <h1 className="py-10 text-center font-serif text-3xl font-bold">Our Office Location</h1>
      <div className="md:flex mt-10 px-5 md:px-20 ">
        <div className="border-black md:w-1/2 md:border-r-0 border-2 md:h-[450px] py-10 px-20 md:py-28 md:px-48 bg-[#dcfbfb]">
          <h1 className="text-3xl font-bold py-2">Our Office</h1>
          <p className="font-sm">Address: Shymoli,road no 1,2/B</p>
          <p className="font-bold py-2 text-2xl">Sales Department</p>
          <p className="font-sm">Phone: +009896767</p>
         <div className="py-2">
         <button className="rounded-md  text-white bg-[#F85A47] md:w-28 w-28 h-10 md:h-10">
            Contact Us
          </button>
         </div>
        </div>
        <div className="border-black md:w-1/2 border-2 md:mt-0 mt-5 md:h-[450px]">
            <img className="  h-[446px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
