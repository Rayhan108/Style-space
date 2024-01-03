

const BlogCard = ({data}) => {
  
 const {t1,t2,date,para,img}=data;
    return (
        <div className="card md:card-side p-5 border-2 shadow-xl">
  <figure><img src={img} /></figure>
   
  <div className="md:px-10 md:py-20 mt-5 md:mt-0">
  <div className="flex gap-1">

<p className="text-sm text-amber-600 pb-3 md:pb-0">{t2}  |</p>
<p className="text-sm ">{date}</p>
</div>
    <h2 className="card-title">{t1}</h2>
    <p className="text-sm py-3 md:py-0">{para}</p>
    <button className="rounded-md text-white mt-3 bg-[#F85A47] md:w-28 w-20 h-10 md:h-10">
              Details
            </button>
  </div>
</div>
    );
};

export default BlogCard;