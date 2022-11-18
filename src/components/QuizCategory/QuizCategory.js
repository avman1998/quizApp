import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import Burger from "../Burger/Burger";
import { useAuth } from "../../AuthContext";
export default function Quizcategory(){
    const {user}=useAuth();
    const navigate=useNavigate();
    useEffect(()=>{

    },[])
    useEffect(()=>{
        if(user==null)
    
       navigate('/');
  
      
        
       },[user])
    return(
        <div className="min-h-[100vh]">
               <ToastContainer theme="light" position="bottom-right" />
   
        <div className="bg-black min-w-[100vw] min-h-[6vh] md:min-h-[8vh]"><Burger/></div>
        <div className="quizCategory min-w-[100vw] max-w-[100vw] flex flex-col  lg:gap-[100px] gap-[50px] pt-[100px] text-black lg:justify-start items-center min-h-[92vh] min-w-[100wh] min-w-[100vw] bg-gray-300  px:[0px] lg:px-[10px]">
        <h1 className="md:text-[180%] text-[120%] text-center font-semibold">Select Quiz Category</h1>
        <div className="flex lg:flex-row flex-col  justify-center gap-[40px] ">
            <button className="bg-black text-gray-300 text-center  rounded px-[50px] py-[25px]   font-bold text-[180%]">Science</button>
            <button className="bg-black text-gray-300 text-center  rounded px-[50px] py-[25px]   font-bold text-[180%]">Sports</button>
            <button className="bg-black text-gray-300 text-center  rounded px-[50px] py-[25px]   font-bold text-[180%]">Bollywood</button>
        </div>
        </div>
        </div>
    )
}