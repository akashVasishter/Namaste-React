
 import { CDN_URL } from "../utils/constants";
 
 
 const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info
    const{deliveryTime} = resData?.info?.sla

    return (
    <div className="restaurant-card m-2 p-2 w-[200px] h-[450px] bg-orange-100 hover:bg-orange-400 rounded-lg">
     <img className="restcard-image rounded-sm" src={CDN_URL
         +cloudinaryImageId } alt="foodimage"/> 
      <p className=" py-2 text-lg font-bold">{name}</p>
     <p className="text-sm">{cuisines.join(", ")}</p>
     <p className="text-sm font-medium">{avgRating} ⭐</p> 
     <p className="text-sm font-medium">{deliveryTime} minutes</p>
    </div>
    
 );
};

//High order component

export const WithPromotedLabel = (RestaurantCard) => {

return (props) => {

   return(

      <div>
       <label>Promoted</label>
       <RestaurantCard {...props}/>  
      </div>
   )
}

}


export default RestaurantCard;