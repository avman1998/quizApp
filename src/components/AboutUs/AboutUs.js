import Burger from "../Burger/Burger";
import { useAuth } from "../../AuthContext";
export default function AboutUs() {
  const { user } = useAuth();
  return (
    <div className="bg-gray-100 max-h-[100vh]">
      <div className="bg-black flex justify-between items-center max-w-[100vw] min-h-[8vh] md:min-h-[8vh]">
        <Burger />
        {user?.displayName && (
          <p className="text-white p-[10px]">{user?.displayName}</p>
        )}
      </div>
      <div className="intro min-h-[92vh] max-w-[100vw]  text-black gap-[20px] md:gap-[30px] flex flex-col items-center justify-start px-[20px] pt-[80px] md:pt-[30px] pb-[0px]">
        <h1 className="md:text-5xl text-[165%] font-semibold text-center">
          Welcome to Quizoo!
        </h1>
        {/* <p className="text-center">Developer : Aman Verma</p>
        <p className="text-center">Technology used: React.JS</p>
        <p className="text-center">Google Authentication with Firebase.</p> */}
        <div className="font-semibold bg-gray-900 p-[30px] rounded-2xl mt-[30px]">
          <div className="text-center my-[10px] text-white flex flex-col gap-[10px] ">
            <p className="text-center">Developer : Aman Verma</p>
            <p className="text-center">
              Technology used: HTML, CSS, Tailwind CSS, Javascript and React.JS
            </p>
            <p className="text-center">Google Authentication with Firebase.</p>
            <p className="text-center">
              History functionality is achieved through Firestore.
            </p>
          </div>
        </div>

        <div className="flex mt-[180px] items-end justify-center text-[80%]">
          <p className="">Quizoo@2023</p>
        </div>
      </div>
    </div>
  );
}
