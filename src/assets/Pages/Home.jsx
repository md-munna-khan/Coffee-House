import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import Heading from "../../Components/Heading";
import Categories from "../../Components/Categories";


const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className="">
            {/* banner */}
            <Banner></Banner>
            {/* heading section */}
            <Heading></Heading>
{/*  categories tab sections */}


<Categories categories={categories}></Categories>
<Outlet></Outlet>



        </div>
    );
};

export default Home;