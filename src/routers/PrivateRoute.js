import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';


// h
const PrivateRoute = ( {children} ) => {

    const {user} = useContext(AuthContext);
    console.log(user);

    // const location = useLocation();
    // console.log(location);
    const {pathname, search} = useLocation();
    localStorage.setItem('lastPath', pathname+search);
    

    return user.logged ? children : <Navigate to="/login" />
}

export default PrivateRoute