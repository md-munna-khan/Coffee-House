import toast from "react-hot-toast"

// get all coffee from local storage
const addAllFavorites = () =>{
    const all = localStorage.getItem('favorites')

   if(all){
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
   }else{
    console.log([])
    return []
   }
}

// add a coffee from local storage

const addFavorite = coffee =>{
   const favorites = addAllFavorites()
const isExist = favorites.find(item=> item.id === coffee.id)
if(isExist) toast.error('already exist!');
   console.log(favorites)
   favorites.push(coffee)
   localStorage.setItem('favorites',JSON.stringify(favorites))
   toast.success('Successfully added!');
}
// remove a coffee from local storage
const removeFavorite = id =>{
    const favorites = addAllFavorites()
    const remaining= favorites.filter (coffee => coffee.id != id)
    localStorage.setItem('favorites',JSON.stringify(remaining))
    toast.success('Successfully removed!');
}


export{addFavorite, addAllFavorites,removeFavorite} 