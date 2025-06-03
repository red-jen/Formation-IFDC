import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home.jsx";
import About from "../page/about.jsx";
import Notfound from "../page/notfound.jsx";
import Layout from "../layout/Layout.jsx";
import Authentification from "../page/authentification.jsx";
import CreateDiploma from "../page/CreateDiploma.jsx"; 
import FieldDashboard from "../page/FieldDashboard.jsx"; // Add this import
import DiplomaDashboard from "../page/DiplomaDashboard.jsx";



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
  path: "/field-dashboard",
  element: <FieldDashboard/>,
},
{
  path: "/diploma-dashboard",
  element: <DiplomaDashboard/>,
},
       {
        path: '*',
       element: <Notfound/>,
       },
       {
    path: "/create-diploma", // Add this route
    element: <CreateDiploma/>,
  },
       {
        path: '/authentification',
        element: <Authentification/>,
       },
       ]},
       ])
      


        
