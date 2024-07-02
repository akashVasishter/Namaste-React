import { useEffect, useState } from "react";
import { restaurantList } from "../utils/Data";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import ShimmerUi from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";


 const BodyComponent = () => {


const[inputText, setInputText] = useState("");


const onlineStatus = useOnlineStatus();
const [listOfRestaurant, setListOfRestaurant] = useRestaurants();
const [filteredRestaurant, setFilteredRestaurant] = useRestaurants();
  
const RestaurantIsPromoted = WithPromotedLabel(RestaurantCard);
console.log(listOfRestaurant);


if(onlineStatus === false){

   return <h1>Looks like your offline,Please check you internet connection!!</h1>
}

    return (
         listOfRestaurant.length === 0 ? <ShimmerUi/> : (
           <div className="body  bg-orange-200">
           <div className="filter flex">
             
             <div className="search p-4 m-4" >
             <input type="text" className="txt-placeholder border border-solid border-black" value={inputText}  onChange={(e) => setInputText(e.target.value)}/>
             <button className="search-btn bg-slate-100 shadow-lg px-3 m-2 rounded-lg" onClick={() => {
              const searchFilteredRestaurant =  listOfRestaurant.filter((item) => item.info.name.toLowerCase().includes(inputText));
                setFilteredRestaurant(searchFilteredRestaurant);        
             }}>Search</button> 
             </div>
             
            <div className="filter-btn p-4 m-2 flex items-center">
            <button className=" bg-slate-100 shadow-lg px-3 m-2 rounded-lg" onClick={() => {
                let filterdRestaurant = listOfRestaurant.filter((item) => item.info.avgRating > 4)
                setFilteredRestaurant(filterdRestaurant) }}>
                   Top Rated Restaurant 
                   </button>
               </div>
               </div>

        <div className="restaurant-container flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}> 
                   {restaurant.info.promoted ? (
                     <RestaurantIsPromoted resData = {restaurant}/>) : (<RestaurantCard resData={restaurant} />
                   )}
                     </Link>
                ))}
            </div>    
         </div>
    ))
};


export default BodyComponent;