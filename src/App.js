import {React,lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import  HeadingComponent  from "./components/HeadingComponent";
import  BodyComponent  from "./components/BodyComponent";
import Restaurant from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

//Lazy Loading:
//Dynamic import


const Grocery = lazy(() => import ("./components/Grocery"));



const AppLayout = () => {

  
const[userName,setUserName] = useState();
useEffect(()=>{

  //Api call
const data = {
name: 'Akash Vasishter',
}

//setting state
setUserName(data.name)

},[])

return(

     <div className="app">
      <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
     <HeadingComponent/>
     <Outlet/>
  </UserContext.Provider>
  </Provider>
     </div>
)  
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
       element:(<Suspense fallback={<h1>Loading...</h1>}>
        <BodyComponent/>
       </Suspense>
       )
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: (
        <Suspense fallback = {<h1>Loading...</h1>}><Restaurant/></Suspense>
        ),
            },
            
        {
          path: "/Grocery",
          element:(
          <Suspense fallback ={<h1>Loading...</h1>}>
            <Grocery/>
          </Suspense>
          ),
        },

        {
          path: "/cart",
          element:<Cart/>
        }
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);