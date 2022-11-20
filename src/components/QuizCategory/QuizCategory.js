import React,{useEffect} from "react";
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import Burger from "../Burger/Burger";
import { useAuth } from "../../AuthContext";
export default function Quizcategory(){
    const {user}=useAuth();
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(user==null)
    
       navigate('/');
  
      
        
       })
    return(
        <div className="min-h-[100vh]">
               <ToastContainer theme="light" position="bottom-right" />
   
               <div className="bg-black flex justify-between items-center min-w-[100vw] min-h-[6vh] md:min-h-[8vh]"><Burger/>{user?.displayName && <p className="text-white p-[10px]">{user?.displayName}</p>}</div>
        <div className="quizCategory min-w-[100vw] max-w-[100vw] flex flex-col  lg:gap-[100px] gap-[50px] pt-[100px] text-black lg:justify-start items-center min-h-[94vh] md:min-h-[92vh] min-w-[100wh] min-w-[100vw] bg-gray-100  px:[0px] lg:px-[10px]">
        <h1 className="md:text-[180%] text-[120%] text-center font-semibold">Select Quiz Category</h1>
        <div className="flex lg:flex-row flex-col   lg:justify-center lg:items-center gap-[40px] ">
            <Link to="/science"><button className="bg-black text-gray-300 text-center  w-[80vw] lg:w-full rounded px-[50px] py-[25px]   font-bold text-[180%] ">Science</button></Link>
            <Link to="/sports"><button className="bg-black text-gray-300 text-center  w-[80vw] lg:w-full rounded px-[50px] py-[25px]   font-bold text-[180%]">Sports</button></Link>
            <Link to="/bollywood"><button className="bg-black text-gray-300 text-center  w-[80vw] lg:w-full rounded px-[50px] py-[25px]   font-bold text-[180%]">Bollywood</button>
            </Link>
        </div>
        </div>
        </div>
    )
}