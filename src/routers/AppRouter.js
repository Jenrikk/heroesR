import { Routes, Route, BrowserRouter} from "react-router-dom";
import React from 'react'

import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>

        <Routes>
          
            <Route path="/login" element={<LoginScreen />} />

            {/* <Route path="/*" element={<DashboardRoutes />} /> */}
            <Route path="/*" element={<PrivateRoute> <DashboardRoutes/> </PrivateRoute>} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter 