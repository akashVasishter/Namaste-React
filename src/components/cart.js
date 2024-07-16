import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {

//subscribing to the store using selector to read items data from the store. read only the required data   
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);

//subscribing to the whole store. this causes performance issue whenver store updates cart component also updates
//Do not do this. explain in interview if asked
// const store = useSelector((store) => store);
// const cartItem = store.cart.items

const dispatch = useDispatch();

const clearHandler = () => {

    console.log('clicked');
    dispatch(clearCart());

}

    return(

        <div className="text-center m-5 p-5">
        <h3>Cart</h3> 
        <div>
         <button className="bg-slate-600 text-lg font-extrabold rounded-lg" onClick={clearHandler}>Clear Cart</button>   
        </div>
        <div className="w-6/12 m-auto">
        {cartItems.length === 0 && <h1>Cart is empty. add items to the cart</h1>}
        <ItemList itemData={cartItems}/> 
        </div>
            
        </div>
    )
}

export default Cart;