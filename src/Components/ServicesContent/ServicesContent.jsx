import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ServicesContent = ({ tittle, img, text,style}) => {
  return (
    <div>
      <div
      data-aos="fade-up"
      className={` ${style} md:justify-around justify-center px-10  gap-20 md:px-20`}>
        <div>
          <img className=" md:h-[500px] md:w-[900px]" src={img} alt="" />
        </div>
        <div className="py-10">
          <p className="text-center font-bold text-3xl mt-10 md:mt-28 mb-10">
            {tittle}
          </p>
          <p className="font-thin text-xl">{text}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
