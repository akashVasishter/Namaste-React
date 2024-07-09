import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
const[showIndex, setShowIndex] = useState(null);


if(resInfo === null) return <ShimmerUi/>

const {name,avgRating, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
console.log(itemCards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(categories);

 return(
        <div className="menu text-center">
          {/* <img className = "restaurant-Image" src={cloudinaryImageId} alt="restaruant-Image"/>*/}
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-lg">{avgRating} ⭐</p>
          <p className="text-base">{cuisines.join(", ")} - {costForTwoMessage}</p>
          {/* <ul className="menu-list">
           {itemCards.map((item) => (
             <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
           ))} 
         
          </ul> */}
          <ul className="restaurant-category">
          {categories.map((category,index) => (

            <RestaurantCategory key={category?.card?.card?.title} categoryData = {category} 
            showItems={showIndex === index ? true : false} setShowIndex={() => setShowIndex(index)} />

          ))}

          </ul>

        </div>    

    )
}

export default RestaurantMenu;