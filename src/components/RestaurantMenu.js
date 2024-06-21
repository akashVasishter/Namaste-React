import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  
//   const params = useParams();
//  params will have object called resId so destructure resId directly
//   console.log(params);
//Important use the same resId variable as used in path for restaurant
const {resId} = useParams();

//custom hooks
const resInfo = useRestaurantMenu(resId);

if(resInfo === null) return <ShimmerUi/>

const {name,avgRating, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
console.log(itemCards);

 return(
        <div className="menu">
          {/* <img className = "restaurant-Image" src={cloudinaryImageId} alt="restaruant-Image"/>*/}
          <h1>{name}</h1>
          <p>{avgRating}</p>
          <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
          <ul className="menu-list">
           {itemCards.map((item) => (
             <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
           ))} 
         
          </ul>

        </div>    

    )
}

export default RestaurantMenu;