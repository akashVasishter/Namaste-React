import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({categoryData, showItems, setShowIndex}) => {

    //uncontrolled component const[showItems, setShowItems] = useState(false);
    
    const {title} = categoryData?.card?.card
    const {itemCards} = categoryData?.card?.card
   
 const clickHandler = () => {

    setShowIndex();
 }


    return(

        <div className="accordion mx-auto my-2 p-4 w-6/12 bg-slate-100 shadow-lg cursor-pointer" >
       <div className="flex justify-between" onClick={clickHandler}>
       <span>{title}({itemCards.length})</span>
       <span>⬇️</span>
        </div>     
        {showItems && <ItemList itemData = {itemCards}/>} 
        </div>
        
    )

}


export default RestaurantCategory;