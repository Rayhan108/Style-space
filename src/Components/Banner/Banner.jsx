import bannerImg from "../../assets/empty-street-modern-city.jpg"

const Banner = ({tittle}) => {
    return (
        <div>
            <div>
                <img className="md:h-[500px] w-full" src={bannerImg} alt="" />
            </div>
            <div className="relative -top-36 md:-top-64">
                <p className="font-extrabold font-serif text-3xl text-center">{tittle}</p>
            </div>
        </div>
    );
};

export default Banner;