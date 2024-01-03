import Banner from "../../Components/Banner/Banner";
import img1 from "../../assets/beautiful-city.jpg";
import img2 from "../../assets/empty-street-modern-city.jpg";
import img3 from "../../assets/Image 01.jpg";
import img4 from "../../assets/Image 02.jpg";
import img5 from "../../assets/Image 03.jpg";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallary = () => {
    return (
        <div>
            <Banner tittle={"Gallary"}></Banner>
            <h1 className="py-10 text-center font-serif text-3xl font-bold">Our Appartment</h1>
            <Carousel className="w-1/2 ml-28 md:ml-64 lg:ml-96">
                <div>
                    <img className="" src={img1} />
                    
                </div>
                <div>
                    <img className="" src={img2} />
                    
                </div>
                <div>
                    <img className="" src={img3} />
                    
                </div>
                <div>
                    <img className="" src={img4} />
                    
                </div>
                <div>
                    <img className="" src={img5} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Gallary;