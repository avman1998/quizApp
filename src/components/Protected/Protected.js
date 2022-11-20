import React from "react";
import { useAuth } from "../../AuthContext";
import { Navigate } from "react-router-dom";
export default function Protected({children}){
    const {user}=useAuth();
    if(user===null){
        return <Navigate to="/"/>
    }
    return children;
}