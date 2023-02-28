import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from '../../pages/dashboard/AddProducts/AddProducts'
import ManageServices from '../../pages/dashboard/ManageServices/MangeServices'
import ManageProducts from "../../pages/dashboard/MangeProducts/ManageProducts";
import AddServices from "../../pages/dashboard/AddServices/AddServices";
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
            },
            {
                path:'/dashboard/addservices',
                element:<AddServices></AddServices>
            },
            {
                path:'/dashboard/manageservices',
                element:<ManageServices></ManageServices>
            },

            {
                path:'/dashboard/addproducts',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/manageproducts',
                element:<ManageProducts></ManageProducts>
            },
           ]
            
    },





])


export default router;