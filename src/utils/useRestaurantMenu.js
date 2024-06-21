import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react"



const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);


useEffect(() => {

    fetchRestaurantData();
},[])


const fetchRestaurantData = async() => {

    try{
        
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }
    catch(error){
        console.log('error occured',error);
    }   
}
return resInfo;   

}


export default useRestaurantMenu;