import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PublicRoute = ({children}) => {

    const context = useContext(AuthContext);
    const {user} = context;


    return user.logged ? <Navigate to="/" /> : children
}

export default PublicRoute