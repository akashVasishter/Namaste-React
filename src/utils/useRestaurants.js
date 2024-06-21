import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";

const useRestaurants = () => {

const [listOfRestaurant, setListOfRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    
useEffect(() => {

    console.log('Rendering  from useEffect in useRestaurant hook');
    fetchData();
    },[])
    
    
    const fetchData = async() => {
    
        try{
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
        } 
         catch(error){
            console.log('error occured',error);
         }    
    }

    return [listOfRestaurant, filteredRestaurant];
}


export default useRestaurants;