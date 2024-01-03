import Banner from "../../Components/Banner/Banner";
import parking from "../../assets/old-parked-car-with-backlights.jpg";
import safety from "../../assets/parking-valet-taking-care-customer-vehicle.jpg";
import green from "../../assets/vertical-shot-cyclers-riding-green-garden.jpg";
import kindergarden from "../../assets/happy-three-year-baby-girl-jacket-slide.jpg";
import sports from "../../assets/sportsman-scoring-goal-basketball-hoop.jpg";
import commercial from "../../assets/view-city-square.jpg";
import ServicesContent from "../../Components/ServicesContent/ServicesContent";


const Services = () => {
    const text1="Complex territory provides as on-ground, so underground car parking. For comfort of residents, each dwelling house will have an isolated underground parking. And in total complex will have 160 parking places.";
    const text2="The most important element of Garden Hills territory, by which it meets the concept of modern district, is large number of green spaces. Territory has trees-plants counted for 4 seasons, and recreation spaces, what creates additional comfort to complex residents.";
    const text3="For the safety of residents of Garden Hills, complex territory has 24 hours security service and video monitoring.";
    const text4="There is a kindergarten functioning on the territory of Garden Hills, thus making the complex attractive for parents of minor children.";
    const text5="Dwelling complex is counted for comfort of those who follows healthy lifestyle. On the territory of Garden Hills there will be placed as tennis -court, so sport spaces, where sportsmen will be able to spend their free time. While projecting the complex, we also thought of spaces for children. On the 1000 sq.m. area there will be arranged a playground for children which will meet all standards necessary for safety of children.";
    const text6="In the new district, which will be created in Old Tbilisi, there will be placed many commercial objects in one space. Complex will have supermarket, cafe and drugstore, enabling the residents of Garden Hill to access needed services in one space.";
    const t1="Well ordered car parking";
    const t2="Recreation and green spaces";
    const t3="Safety 24/7";
    const t4="Kindergarten";
    const t5="Sport spaces";
    const t6="Commercial areas";
    
    return (
        <div>
            <Banner tittle={"Our Services"}></Banner>
      <div className=""
      
      >
      <ServicesContent style={"md:flex"} tittle={t1} img={parking} text={text1}></ServicesContent>
      </div>
      <div className="mt-20"
      
      >
      <ServicesContent  tittle={t2} img={safety} text={text2} style={"md:flex md:flex-row-reverse"}></ServicesContent>
      </div>
      <div className=""
      
      >
      <ServicesContent style={"md:flex"} tittle={t3} img={green} text={text3}></ServicesContent>
      </div>
      <div className="mt-20"
      
      >
      <ServicesContent  tittle={t4} img={kindergarden} text={text4} style={"md:flex md:flex-row-reverse"}></ServicesContent>
      </div>
      <div className=""
      
      >
      <ServicesContent style={"md:flex"} tittle={t5} img={sports} text={text5}></ServicesContent>
      </div>
      <div className="mt-20"
      
      >
      <ServicesContent  tittle={t6} img={commercial} text={text6} style={"md:flex md:flex-row-reverse"}></ServicesContent>
      </div>
        </div>
    );
};

export default Services;