import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div >
            {/*navbar  */}
            <Navbar></Navbar>
       
            <div className="min-h-[calc(100vh-232px)] w-11/12 mx-auto"> <Outlet></Outlet>    {/* dynamic section */}</div>
            {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;