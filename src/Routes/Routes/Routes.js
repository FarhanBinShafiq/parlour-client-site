import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Dashboard from "../../pages/dashboard/dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([{
        path: '/',
        element: < Main > </Main>,

            children: [{
                path: '/',
                element: < Home />
            },
            {
                path: '/home',
                element: < Home > </Home>
            },
            {
                path: '/login',
                element: < Login > </Login>
            },

            {
                path: '/signup',
                element: < Signup/ >
            },
]
    },


    {
           path: '/dashboard',
           element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,

           children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
           ]
            
    },





])


export default router;