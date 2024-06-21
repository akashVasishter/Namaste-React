import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";


 const HeadingComponent = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();


  return(
    <div className="header-container">
  <img className="App-logo" src={LOGO_URL}></img>

    <div className="nav-items">
         <ul>
          <li>Onlinestatus:{onlineStatus ? "✅" : "🔴"}</li>
         <Link to ={'/'}>Home</Link>
         <Link to="/About" style={{textDecoration: "none"}}>About US</Link>
         <Link to="/Contact" style={{textDecoration: "none"}}>Contact US</Link>
         <li>Cart</li>
         <Link to="/Grocery">Grocery</Link>
         <button className="login-btn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
         </ul>
    </div>
    </div>   
)
 }

export default HeadingComponent;
