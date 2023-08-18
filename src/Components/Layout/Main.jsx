import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery.jsx";




const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Banner></Banner>
           <Gallery></Gallery>
        
           
        </div>
    );
};

export default Main;