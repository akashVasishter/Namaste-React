import { useEffect, useState } from "react";
import { restaurantList } from "../utils/Data";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";


 const BodyComponent = () => {


const[inputText, setInputText] = useState("");


const onlineStatus = useOnlineStatus();
const [listOfRestaurant, setListOfRestaurant] = useRestaurants();
const [filteredRestaurant, setFilteredRestaurant] = useRestaurants();
  


//Conditional Rendering
// if(listOfRestaurant.length === 0){

//     return <ShimmerUi/>
//   }

if(onlineStatus === false){

   return <h1>Looks like your offline,Please check you internet connection!!</h1>
}

    return (
         listOfRestaurant.length === 0 ? <ShimmerUi/> : (
         <div className="body">
            <div className="filter">
             
             <input type="text" className="txt-placeholder" value={inputText}  onChange={(e) => setInputText(e.target.value)}/>
             
             <button className="search-btn" onClick={() => {
              const searchFilteredRestaurant =  listOfRestaurant.filter((item) => item.info.name.toLowerCase().includes(inputText));
                setFilteredRestaurant(searchFilteredRestaurant);        
             }}>Search</button>   

            <button className="filter-btn" onClick={() => {
                let filterdRestaurant = listOfRestaurant.filter((item) => item.info.avgRating > 4)
                setFilteredRestaurant(filterdRestaurant) }}> Top Rated Restaurant </button>
               </div>

        <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>
                ))}
            </div>    
         </div>
    ))
};


export default BodyComponent;