import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/authContext';



const PrivateRoute = ( {children} ) => {

    const {user} = useContext(AuthContext);
    console.log(user);

    return user.logged ? children : <Navigate to="/login" />
}

export default PrivateRoute