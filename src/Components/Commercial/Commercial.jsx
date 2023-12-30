import img1 from "../../assets/Image 01.jpg";
import img2 from "../../assets/Image 02.jpg";
import img3 from "../../assets/Image 03.jpg";

const Commercial = () => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
           <div><img src={img3} alt="" /></div> 
           <div><img src={img1} alt="" /></div>
           <div><img src={img2} alt="" /></div>
        </div>
    );
};

export default Commercial;