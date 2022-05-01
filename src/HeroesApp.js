import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routers/AppRouter'



const init = () => {
  // return {
  //   name: 'Enrique temporal',
  //   logged: true
  // }
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  
  //esto es para cargar el localStorage cuando user cambie
  useEffect(() => {
    if(!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user])
  

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

