import React, { useEffect } from "react";
import "./signin.css";
import GoogleButton from 'react-google-button'
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
export default function Signin(){
   const {googleSignIn,user}=useAuth();
  const navigate=useNavigate();
   async function HandleGoogleSignIn(){
    try{
      await googleSignIn();
    }
    catch(error){
      console.log(error);
    }
   }
   useEffect(()=>{
    if(user!=null)
    navigate('/quizcategory');
   },[user])
    return(
     <div className="flex flex-col gap-[30px] text-white justify-center items-center min-h-[100vh] min-w-[100wh] bg-introBg">
                    <h1 className="md:text-5xl text-[165%] font-semibold text-center">Quizoo!</h1>

                    <GoogleButton
  onClick={HandleGoogleSignIn}
/>
     </div>
    )
}