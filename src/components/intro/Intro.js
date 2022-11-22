import React from "react";
import GoogleButton from "react-google-button";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./intro.css";
import { useEffect } from "react";
import Burger from "../Burger/Burger";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const { user, googleSignIn } = useAuth();

  const navigate = useNavigate();
  async function HandleGoogleSignIn() {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (user != null) navigate("/quizcategory");
  });

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <div className="bg-black flex justify-between items-center min-w-[100vw] min-h-[8vh] md:min-h-[8vh]">
        <Burger />
        {user?.displayName && (
          <p className="text-white p-[10px]">{user?.displayName}</p>
        )}
      </div>
      <ToastContainer theme="light" position="bottom-right" />

      <div className="intro min-h-[92vh] md:min-h-[92vh] min-w-[100wh]  text-black gap-[20px] md:gap-[30px] flex flex-col items-center justify-start px-[20px] pt-[80px] md:pt-[30px] pb-[0px]">
        <h1 className="md:text-5xl text-[165%] font-semibold text-center">
          Welcome to Quizoo!
        </h1>
        <p className="text-center italic mt-[20px] mb-[80px]">
          “I love anything quiz-related.” <br />~ Natasha Hamilton
        </p>

        {user?.displayName ? (
          <div className="mt-[-20px]">
            <p className=" text-[90%] text-center font-semibold ">
              Hey, {user?.displayName}
            </p>
            <Link to="/quizcategory">
              <button className="mt-[20px] text-center border-2 rounded p-[15px] text-gray-300  bg-black font-bold transition duration-0 hover:duration-500">
                Let's get started{" "}
              </button>
            </Link>
          </div>
        ) : (
          <GoogleButton className="mt-[00px]" onClick={HandleGoogleSignIn} />
        )}
        <div className="flex mt-[200px] items-end justify-center text-[80%]">
          <p className="">Quizoo@2023</p>
        </div>
      </div>
    </div>
  );
}
