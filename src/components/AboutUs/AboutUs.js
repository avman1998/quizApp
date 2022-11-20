import Burger from "../Burger/Burger"
import { useAuth } from "../../AuthContext";
export default function AboutUs(){
    const {user}=useAuth();
    return(
        <div className="bg-gray-100 min-h-[100vh]">
             <div className="bg-black flex justify-between items-center min-w-[100vw] min-h-[6vh] md:min-h-[8vh]"><Burger/>{user?.displayName && <p className="text-white p-[10px]">{user?.displayName}</p>}</div> 
             <div className="intro min-h-[80vh] min-w-[100wh]  text-black gap-[20px] md:gap-[30px] flex flex-col items-center justify-start px-[20px] pt-[80px] md:pt-[30px] pb-[0px]">
            <h1 className="md:text-5xl text-[165%] font-semibold text-center">Welcome to Quizoo!</h1>
           <p>Developer : Aman Verma</p>
           <p>Technology used: React.JS</p>
           <p>Google Authentication with Firebase.</p>
            
            </div>
            <div className="flex bottom:0 items-end justify-center text-[80%]">
        <p className="">Quizoo@2023</p>
        </div>
        </div>
    )
}