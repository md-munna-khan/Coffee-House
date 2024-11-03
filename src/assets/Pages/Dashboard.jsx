import { useEffect, useState } from "react";
import { addAllFavorites, removeFavorite } from "../../utility";
import Heading from "../../Components/Heading";
import Card from "../../Components/Card";
import { useLocation } from "react-router-dom";


const Dashboard = () => {

    const [coffees,setCoffees]= useState([])
    useEffect(()=>{
        const favorites = addAllFavorites()
        setCoffees(favorites)
    },[])
    const handleRemove = (id)=>{
        removeFavorite(id)
        const favorites = addAllFavorites()
        setCoffees(favorites)
    }
    return (
       
        <div className="my-10 ">
            
       <div className="text-center">
       <h1 className="text-4xl"> Welcome To Dashboard</h1>
       <p>manage coffee that you have previously added</p>
       </div>
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {
            coffees.slice( 0).map( coffee=> <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
        }
       
    </div>
      
        </div>
    );
};

export default Dashboard;