import { CDN_URL } from "../utils/constants";


const ItemList = ({itemData}) => {

console.log(itemData);




    return(

           <div>
           {itemData.map((item) => (
             
             <div key={item?.card?.info?.id} className="m-3 p-2 border-b-gray-200 border-b-2 text-left flex justify-between">
             <div className="w-9/12" >
                <span className="text-lg font-bold">{item?.card?.info?.name} - </span>
                <span className="text-lg">₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                <button className="mx-16 p-2 rounded-lg bg-slate-50  shadow-lg">Add +</button>
                </div>
                <div>
                <img src={CDN_URL +item?.card?.info?.imageId} className="w-full"/>  
                </div>

             </div>
             <div>
             
              </div>
             </div>
           ))} 
            </div>
    )
}



export default ItemList;