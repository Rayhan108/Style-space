import Banner from "../../Components/Banner/Banner";
import img6 from "../../assets/Cover-370x285 (1).jpg";
import img7 from "../../assets/Cover-370x285 (2).jpg";
import img8 from "../../assets/cover-370x285.jpg";
import img9 from "../../assets/feature-1-370x285.jpg";
import BlogCard from "./BlogCard";
const contents=[
    {
        id:1,
        t1:"SETUP A COMFORTABLE RAMADAN 2023",
        t2:"Tips",
        date:"January 2,2024",
        para:"Another Ramadan is upon us! This holy month is poised at spiritual rejuvenation and solidarity, focused on cleansing ourselves of the sins and stresses…",
        img:"https://i.ibb.co/Zx8kzZ4/cover-370x285.jpg",

    },
    {
        id:2,
        t1:"HOME LOANS WITH STYLE SPACE",
        t2:"Style Space Loans",
        date:"January 2,2024",
        para:"Investing in real estate is a time-honored trait of Bangladeshis. We grew up hearing discussions among our parents and relatives about land they have…",
        img:"https://i.ibb.co/Z1PnNXT/Cover-370x285-1.jpg",

    },
    {
        id:3,
        t1:"CREATING A RELAXING ME CORNER",
        t2:"My Home",
        date:"January 2,2024",
        para:"“A little goes a long way” is a great way to create for yourself a little tiny little space in the house to call…",
        img:"https://i.ibb.co/2ZmLbrx/Cover-370x285-2.jpg",

    },
    {
        id:4,
        t1:"THE HOUSING MARKET IN BANGLADESH IN 2022",
        t2:"Trends",
        date:"January 3,2024",
        para:"The housing market in Bangladesh has seen significant growth in recent years, driven by an increasing population and a growing middle class. The demand…",
        img:"https://i.ibb.co/hFV8cY9/feature-1-370x285.jpg",

    }
   
]
const Blog = () => {
    return (
        <div>
            <Banner tittle={"Blog"}></Banner>
            <h1 className="py-10 text-center font-serif text-3xl font-bold">Our Blogs Here</h1>
           <div className="md:px-48 px-10 grid gap-10">
             {
contents.map((data)=>(
    
    <BlogCard data={data} key={data.id}></BlogCard>
))
            }
           </div>
        </div>
    );
};

export default Blog;