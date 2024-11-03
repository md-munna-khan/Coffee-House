import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div >
            <Toaster></Toaster>
            {/*navbar  */}
           <div className="h-16">
           <Navbar></Navbar>
           </div>
       
            <div className="min-h-[calc(100vh-232px)] w-11/12 mx-auto"> <Outlet></Outlet>    {/* dynamic section */}</div>
            {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;