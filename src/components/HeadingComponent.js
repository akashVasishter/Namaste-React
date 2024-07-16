import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


 const HeadingComponent = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //context-API
  const {loggedInUser} = useContext(UserContext);

  //redux-toolkit(subscribing to the store using selector to read data from the store)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return(
    <div className="flex justify-between bg-orange-100 shadow-md">
     <div className="logo-container">
     <img className="w-28" src={LOGO_URL}></img>
      </div> 

    <div className="nav-items">
         <ul className="flex p-4 m-4">
          <li className="px-2">Onlinestatus:{onlineStatus ? "✅" : "🔴"}</li>
         <li className="px-2"><Link to ={'/'}>Home</Link></li> 
        <li className="px-2"><Link to="/About" style={{textDecoration: "none"}}>About US</Link></li>
       <li className="px-2"> <Link to="/Contact" style={{textDecoration: "none"}}>Contact US</Link></li>  
         <li className="px-2"><Link to="/Cart" style={{textDecoration: "none"}}>Cart({cartItems.length})</Link></li>
        <li className="px-2"><Link to="/Grocery">Grocery</Link> </li> 
         <button className="px-2 shadow-xl" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
         <li>{loggedInUser}</li>
         </ul>
    </div>
    </div>   
)
 }

export default HeadingComponent;
