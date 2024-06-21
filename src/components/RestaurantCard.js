
 import { CDN_URL } from "../utils/constants";
 
 
 const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info
    const{deliveryTime} = resData?.info?.sla

    return (
    <div className="restaurant-card">
     <img className="restcard-image" src={CDN_URL
         +cloudinaryImageId } alt="foodimage"/> 
      <p>{name}</p>
     <p>{cuisines.join(", ")}</p>
     <p>{avgRating} star</p> 
     <p>{deliveryTime} minutes</p>
    </div>
    
 );
};


export default RestaurantCard;