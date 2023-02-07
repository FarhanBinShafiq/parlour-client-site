import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
         
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            ,
            {
                path: '/signup',
                element: <Signup/>
            },
             
            
            
        ]
    },

     
])


export default router;