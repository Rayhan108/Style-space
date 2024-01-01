
import useTitle from "../../hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Pagination ,Navigation} from 'swiper/modules';

import '@smastrom/react-rating/style.css'


// const SaysCard=(say)=>{
//     console.log(say?.say);

//     return(
//         <div className="">
      
//         <div className="card-body items-center text-center">
//         <Rating style={{ maxWidth: 250 }} value={say?.say?.rating} readOnly></Rating>
//           <p>{say?.say?.says}</p>
//         </div>
//         <div className="flex text-center justify-center">
//             <img className="mr-3 " src={say?.say?.img} alt="" />
//             <div className="py-3">
//                 <p className="font-bold">{say?.say?.name}</p>
//                 <p className="text-sm font-thin">{say?.say?.location}</p>
//             </div>
//         </div>
//       </div>
         
//     )
// }

const ClientSays = () => {
    const  says=([
        {
            id:1,
            ratting:5,
            says:"Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
            name:"Jane Cooper",
            location:"Los Angel,CA",
            img:"https://i.ibb.co/pjLG7xy/c1.png",


        },
        {
            id:2,
            ratting:4,
            says:"Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
            name:"Jane Cooper",
            location:"Los Angel,CA",
            img:"https://i.ibb.co/0MJD8HK/c3.png",


        },
        {
            id:3,
            ratting:5,
            says:"Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.",
            name:"Jane Cooper",
            location:"Los Angel,CA",
            img:"https://i.ibb.co/ZKwVC53/c2.png",


        }
    ])

    // const [says,setSays]=useState([]);
    return (
        <div>
            
          <h1 className="text-center mt-20">
             {useTitle("Loved by businesses, and individuals across the globe.")} 
          </h1>
        
            <Swiper
            navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
            says.map((say,id)=>((<SwiperSlide key={id} say={say}>
                
<div className="">
      
      <div className="card-body items-center text-center">
      <Rating style={{ maxWidth: 250 }} value={say?.ratting} readOnly></Rating>
        <p>{say?.says}</p>
      </div>
      <div className="flex text-center justify-center mb-10">
          <img className="mr-3 " src={say?.img} alt="" />
          <div className="py-3">
              <p className="font-bold">{say?.name}</p>
              <p className="text-sm font-thin">{say?.location}</p>
          </div>
      </div>
    </div>


                
            </SwiperSlide>))
           )}
      
      </Swiper>
        </div>
    );
};

export default ClientSays;