import ClientSays from "../../Components/ClientSays/ClientSays";
import Feature from "../../Components/Feature/Feature";
import Properties from "../../Components/Properties/Properties";
import Works from "../../Components/Works/Works";
import Hero from "./Hero";


const Home = () => {
    return (
        <div className="">
            <Hero></Hero>
            <Works></Works>
          <Properties/>
          <Feature></Feature>
          <ClientSays></ClientSays>
        </div>
    );
};

export default Home;