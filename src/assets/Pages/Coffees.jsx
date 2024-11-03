import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card";
import { useState } from "react";




const Coffees = () => {
    const data = useLoaderData()

    const [coffees,setCoffees]= useState(data)

    const handleSort = (sortBy)=>{
        if(sortBy === 'popularity'){
            const sorted = [...data].sort((a,b)=> b.popularity - a.popularity)
            setCoffees(sorted)
        } else if (sortBy === 'rating'){
            const sorted = [...data].sort((a,b)=> b.rating - a.rating)
            setCoffees(sorted)
        }

    }
    return (
     <>
     <div className=" flex justify-between items-center my-8 ">
        <div
        ><h1>sort Coffee s by popularity & rating;
            </h1></div>
        <div className=" space-x-4">
            <button onClick={()=>handleSort ('popularity')} className="btn btn-warning">sort by popularity</button>
            <button onClick={()=>handleSort ('rating')}  className="btn btn-warning" >sort by Rating</button>
            </div>
     </div>



     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {
            coffees.slice( 0).map( coffee=> <Card key={coffee.id} coffee={coffee}></Card>)
        }
       
    </div>
     
     
     </>
    );
};

export default Coffees;