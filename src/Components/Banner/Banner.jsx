import { Parallax } from "swiper/modules";
import bannerImg from "../../assets/empty-street-modern-city.jpg"
// its code for implimenting Parallax manually
// let text = document.getElementById('text');
// window.addEventListener('scroll',()=>{
//     let value = window.scrollY;
//     text.style.marginTop=value*2.5+'px';
// })
const Banner = ({tittle}) => {

    return (
        <div>
            <div>
                <img className="md:h-[500px] w-full" src={bannerImg} alt="" />
            </div>
            <div className="relative -top-36 md:-top-64">
                <p id="text" className="font-extrabold font-serif text-3xl text-center">{tittle}</p>
            </div>
        </div>
    );

};

export default Banner;