import Banner from "../../Components/Banner/Banner";
import Story from "../../../public/Story/Our Story.pdf";
import img1 from "../../assets/vertical-low-angle-shot-high-rise-skyscrapers-glass-facade-frankfurt-germany.jpg";
import img2 from "../../assets/beautiful-city.jpg";

const About = () => {
  return (
    <div >
      <Banner tittle={"About Us"}></Banner>
      <p className="text-center font-bold text-3xl mt-10 mb-10">Our Story</p>
      <div className="md:flex   md:justify-around justify-center px-10  gap-20 md:px-20">
        <div data-aos="fade-right">
          <img className=" md:h-[900px] md:w-[2100px]" src={img1} alt="" />
        </div>
        <div data-aos="fade-down" className="py-10">
        
          <p className="font-thin text-xl">
            New district in Old Tbilisi is one more large project of Alpha
            Properties. Garden Hills unites 30 000 sq.m. area territory in
            historical area of Tbilisi, particularly, in Chugureti district.<br/> <br/>
            With Garden Hills project, Alpha Property offers to users
            environment adapted to features of modern district, which brings
            together all those spaces which a resident needs today for full
            comfort. Complex consists of 8 dwelling houses, which include 300<br/> <br/> 
            apartments and commercial areas. First stage of Garden Hills
            provides construction of 4 five-storey dwelling houses with 186
            apartments in total. Most important elements of the project are
            recreational and green spaces. Positioning of the new district will<br/> <br/> 
            be realized on 4 season constantly green yard and recreation spaces
            arranged on the territory. You can meet all needed infrastructure on
            the project’s territory and what is the most important, it provides
            comfort and meets needs of residents of all ages. Additional
            advantage of Garden Hills is also nearness of touristic sights of
            Tbilisi. The territory also has a kindergarten. Therefore, the
            project is attractive as from residential, so from investment
            standpoints.
          </p>
        <div className="mt-10">
        <a href={Story} download={Story}>
            <button className="rounded-md text-white bg-[#F85A47] md:w-48 w-36 h-16 md:h-16">
              Download PDF
            </button>
          </a>
        </div>
        <img data-aos="fade-up" className="md:h-[500px] w-full mt-10" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
