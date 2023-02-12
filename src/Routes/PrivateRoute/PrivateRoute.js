 

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../pages/Sharedpages/Loading/Loading';
 

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    
    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }


    return (
        <div>

        </div>
    );
};

export default PrivateRoute;
