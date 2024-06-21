import {React,lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import  HeadingComponent  from "./components/HeadingComponent";
import  BodyComponent  from "./components/BodyComponent";
import Restaurant from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

//Lazy Loading:
//Dynamic import


const Grocery = lazy(() => import ("./components/Grocery"));

const AppLayout = () => (

     <div className="app">

    <HeadingComponent/>
    <Outlet/>

     </div>
    
);

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
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);