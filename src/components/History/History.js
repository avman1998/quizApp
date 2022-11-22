import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../AuthContext";
import Burger from "../Burger/Burger";
import { useNavigate } from "react-router-dom";

export default function History() {
  const [bollywoodSummary, setBollywoodSummary] = useState([]);
  const [sportsSummary, setSportsSummary] = useState([]);
  const [scienceSummary, setScienceSummary] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getDoc(doc(db, "userData", `${user?.email}-Bollywood`)).then((docSnap) => {
      if (docSnap.exists()) {
        setBollywoodSummary(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, [user]);
  useEffect(() => {
    getDoc(doc(db, "userData", `${user?.email}-Sports`)).then((docSnap) => {
      if (docSnap.exists()) {
        setSportsSummary(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, [user]);
  useEffect(() => {
    getDoc(doc(db, "userData", `${user?.email}-Science`)).then((docSnap) => {
      if (docSnap.exists()) {
        setScienceSummary(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, [user]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) navigate("/");
  });
  console.log(bollywoodSummary);
  console.log(sportsSummary);
  console.log(scienceSummary);

  return (
    <div className="min-h-[100vh] bg-gray-100">
      <div className="bg-black flex justify-between items-center min-w-[100vw] min-h-[8vh] md:min-h-[8vh]">
        <Burger />
        {user?.displayName && (
          <p className="text-white p-[15px] ">{user?.displayName}</p>
        )}
      </div>
      <div className="font-semibold bg-gray-600 p-[10px] ">
        <h1 className="text-center my-[10px] text-white ">
          Hey {user?.displayName} <br /> Here are the details of all the quizzes
          you played.
        </h1>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-evenly mx-[50px] my-[50px] items-baseline ">
        {bollywoodSummary?.history?.length !== 0 && (
          <table className="table-auto border-2 bg-gray-900  text-gray-100">
            <thead className="border-2">
              <tr className="border-2">
                <th className="border-2 p-[15px]">Sr. No.</th>
                <th className="border-2 p-[15px]">Category</th>
                <th className="border-2 p-[15px]">Score</th>
              </tr>
            </thead>
            <tbody>
              {bollywoodSummary?.history?.map((item, index) => {
                return (
                  <tr className="border-2">
                    <th className="border-2 p-[15px]">{index + 1}</th>
                    <th className="border-2 p-[15px]">{item?.category}</th>
                    <th className="border-2 p-[15px]">{item?.score}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {sportsSummary?.history?.length !== 0 && (
          <table className="table-auto border-2 bg-gray-900  text-gray-100">
            <thead className="border-2">
              <tr className="border-2">
                <th className="border-2 p-[15px]">Sr. No.</th>
                <th className="border-2 p-[15px]">Category</th>
                <th className="border-2 p-[15px]">Score</th>
              </tr>
            </thead>
            <tbody>
              {sportsSummary?.history?.map((item, index) => {
                return (
                  <tr className="border-2">
                    <th className="border-2 p-[15px]">{index + 1}</th>
                    <th className="border-2 p-[15px]">{item?.category}</th>
                    <th className="border-2 p-[15px]">{item?.score}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {scienceSummary?.history?.length !== 0 && (
          <table className="table-auto border-2 bg-gray-900 text-gray-100">
            <thead className="border-2">
              <tr className="border-2">
                <th className="border-2 p-[15px]">Sr. No.</th>
                <th className="border-2 p-[15px]">Category</th>
                <th className="border-2 p-[15px]">Score</th>
              </tr>
            </thead>
            <tbody>
              {scienceSummary?.history?.map((item, index) => {
                return (
                  <tr className="border-2">
                    <th className="border-2 p-[15px]">{index + 1}</th>
                    <th className="border-2 p-[15px]">{item?.category}</th>
                    <th className="border-2 p-[15px]">{item?.score}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
