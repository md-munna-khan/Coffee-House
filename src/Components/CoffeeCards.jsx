import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
const navigate = useNavigate()
    const data = useLoaderData()
   
    const {categoryId} = useParams()
   
  const [coffees,setCoffees]= useState([])
  useEffect(()=>{
if(categoryId){
    const filterCoffee = [...data].filter( coffee=> coffee.category === categoryId)
setCoffees(filterCoffee)
}

// else{
    
//     setCoffees(data.slice (0,6))
   
// }

// setCoffees(data.slice (0,2))
  },[categoryId,data])

//   console.log(data)
    return (
       <>
       
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {
                coffees.slice( 0,8).map( coffee=> <Card key={coffee.id} coffee={coffee}></Card>)
            }
           
        </div>
        <button onClick={()=>navigate('/coffees')} className="btn btn-warning">View All</button>
       
       </>
    );
};

export default CoffeeCards;