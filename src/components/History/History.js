import React, { useEffect, useState } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../AuthContext";
import Burger from "../Burger/Burger";
import { useNavigate } from "react-router-dom";
export default function History() {
  const [History, setHistory] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) navigate("/");
  });
  useEffect(() => {
    const q = query(collection(db, `${user?.email}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setHistory(data);
    });
    return () => unsubscribe();
  }, [user?.email]);
  return (
    <div className="max-h-[100%] bg-gray-100">
      <div className="bg-black flex justify-between items-center min-w-[100vw] min-h-[8vh] md:min-h-[8vh]">
        <Burger />
        {user?.displayName && (
          <p className="text-white p-[15px] ">{user?.displayName}</p>
        )}
      </div>
      <div className="font-semibold bg-gray-600 p-[10px] w-[100%] ">
        <h1 className="text-center my-[10px] text-white ">
          Hey {user?.displayName} <br /> Here are the details of all the quizzes
          you played.
        </h1>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-evenly mx-[50px] my-[50px] items-baseline ">
        {History.length !== 0 ? (
          <table className="table-auto border-2 bg-gray-900  text-gray-100">
            <thead className="border-2">
              <tr className="border-2">
                <th className="border-2 p-[15px]">Sr. No.</th>
                <th className="border-2 p-[15px]">Category</th>
                <th className="border-2 p-[15px]">Score</th>
              </tr>
            </thead>
            <tbody>
              {History.map((item, index) => {
                return (
                  <>
                    {item?.category === "Bollywood" ? (
                      <tr className="border-2 bg-red-200 text-gray-900">
                        <th className="border-2 p-[15px]">{index + 1}</th>
                        <th className="border-2 p-[15px]">{item?.category}</th>
                        <th className="border-2 p-[15px]">{item?.score}</th>
                      </tr>
                    ) : (
                      <>
                        {item?.category === "Sports" ? (
                          <tr className="border-2 bg-yellow-200 text-gray-900">
                            <th className="border-2 p-[15px]">{index + 1}</th>
                            <th className="border-2 p-[15px]">
                              {item?.category}
                            </th>
                            <th className="border-2 p-[15px]">{item?.score}</th>
                          </tr>
                        ) : (
                          <tr className="border-2 bg-blue-200 text-gray-900">
                            <th className="border-2 p-[15px]">{index + 1}</th>
                            <th className="border-2 p-[15px]">
                              {item?.category}
                            </th>
                            <th className="border-2 p-[15px]">{item?.score}</th>
                          </tr>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="font-semibold">You have not played any quiz yet!</h1>
        )}
      </div>
    </div>
  );
}
