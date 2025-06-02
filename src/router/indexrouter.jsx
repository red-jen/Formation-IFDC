import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home.jsx";
import About from "../page/about.jsx";
import Notfound from "../page/notfound.jsx";
import Layout from "../layout/Layout.jsx";
import Authentification from "../page/authentification.jsx";
import Register from "../page/Register.jsx";

export const router = createBrowserRouter([
 {
  element : <Layout/>,
  children : [{
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <div>contact page</div>,
    },
    {
        path: "/login",
       element: <div>login page</div>,
       },
       {
        path: "/register",
       element: <Register/>,
       },
       {
        path: "/dashboard",
       element: <div>dashboard page</div>,
       },
       {
        path: '*',
       element: <Notfound/>,
       },
       {
        path: '/authentification',
        element: <Authentification/>,
       },
       ]},
       ])
      


        
