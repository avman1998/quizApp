import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
// import { db } from "../../firebase";
// import { doc, setDoc } from "firebase/firestore";
import Burger from "../../components/Burger/Burger";
export default function Sports() {
  const { user } = useAuth();
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quesNo, setQuesNo] = useState(0);
  const [summary, setSummary] = useState([]);
  // const [historyData, setHistoryData] = useState([]);
  function handleCheckAns(e, isCorrect, id) {
    e.preventDefault();
    setSummary((prev) => {
      return [
        ...prev,
        {
          quesText: questions[quesNo].questionText,
          selectedAns: questions[quesNo].answerOptions[id].answerText,
          correctAns: questions[quesNo].answerOptions.filter(
            (item) => item.isCorrect === true
          ),
        },
      ];
    });

    if (isCorrect === true) {
      const newScore = score + 1;
      setScore(newScore);

      console.log(score);
    }

    const nextQues = quesNo + 1;
    if (nextQues < questions.length) {
      setQuesNo(nextQues);
    } else {
      setShowScore(true);
      // setHistoryData((prev) => {
      //   return [
      //     ...prev,
      //     {
      //       category: "Sports",
      //       score: score,
      //     },
      //   ];
      // });
    }
  }

  function handlePlayAgain() {
    setShowScore(false);
    setScore(0);
    setQuesNo(0);
    setSummary([]);
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) navigate("/");
  });
  // Add a new document in collection "cities"
  // useEffect(() => {
  //   setDoc(
  //     doc(db, "userData", `${user?.email}-Sports`),
  //     {
  //       history: historyData,
  //     },
  //     { merge: true }
  //   );
  // }, [historyData]);
  const questions = [
    {
      questionText:
        "National Sports Day (NSD) is celebrated on which date in India?",
      answerOptions: [
        { answerText: "August 28", isCorrect: false },
        { answerText: "August 29", isCorrect: true },
        { answerText: "August 26", isCorrect: false },
        { answerText: "August 27", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the name given to the biennial international Test cricket series played between England and Australia?",
      answerOptions: [
        { answerText: "The Cricket World-Cup", isCorrect: false },
        { answerText: "The Ashes", isCorrect: true },
        { answerText: "The Trans-Tasman Trophy", isCorrect: false },
        { answerText: "The Sheffield Shield", isCorrect: false },
      ],
    },
    {
      questionText: "For how many days is a Test match scheduled?",
      answerOptions: [
        { answerText: "One days", isCorrect: false },
        { answerText: "Five days", isCorrect: true },
        { answerText: "50 overs", isCorrect: false },
        { answerText: "100 overs", isCorrect: false },
      ],
    },
    {
      questionText:
        "Harold (“Dickie”) Bird is best known for his career in cricket as:",
      answerOptions: [
        { answerText: "A bowler", isCorrect: false },
        { answerText: "An umpire", isCorrect: true },
        { answerText: "A batsman", isCorrect: false },
        { answerText: "An administrator", isCorrect: false },
      ],
    },
    {
      questionText:
        "In which year did Milkha Singh win the first National title in the 400 m race?",
      answerOptions: [
        { answerText: "1955", isCorrect: false },
        { answerText: "1956", isCorrect: false },
        { answerText: "1957", isCorrect: true },
        { answerText: "1970", isCorrect: false },
      ],
    },
  ];
  return (
    <div className="bg-gray-100 ">
      <div className="sticky bg-black flex justify-between items-center min-h-[8vh]">
        <Burger />
        {user?.displayName && (
          <p className="text-white p-[10px]">{user?.displayName}</p>
        )}
      </div>

      <div className=" flex justify-center items-center min-h-[92vh]  ">
        {showScore === false ? (
          <div className="flex flex-col flex-wrap   justify-start items-start gap-[20px]  md:max-w-[50%] min-w-[50%] p-[20px] rounded-2xl bg-white mx-[10px]">
            <h2 className="text-[135%] w-[100%] bg-blue-300  font-semibold border-2  rounded-xl p-[10px]">
              Q:{quesNo + 1} {questions[quesNo].questionText}
            </h2>
            {questions[quesNo].answerOptions.map((item, index) => {
              return (
                <button
                  className="text-[100%] flex bg-green-100 justify-start hover:text-white hover:bg-blue-500 hover:border-white   w-[100%] font-semibold border-2  rounded-xl p-[10px]"
                  onClick={(e) => handleCheckAns(e, item.isCorrect, index)}
                >
                  {" "}
                  {item.answerText}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-[50px] md:max-w-[50%] min-w-[50%] my-[20px] mx-[10px]">
            <div className="flex flex-col  bg-blue-200  py-[30px] px-[30px] rounded-xl">
              <h1 className="font-semibold text-[110%]">
                Hey {user?.displayName}!
              </h1>
              <p className="text-[90%]">
                Your score is {score}/{questions.length}.
              </p>
              {summary.map((item) => {
                if (item.selectedAns === item.correctAns[0].answerText) {
                  return (
                    <div className="flex flex-col gap-[10px] bg-green-200 mt-[10px] p-[15px] rounded-2xl">
                      <p className="font-bold text-[110%]"> {item.quesText} </p>
                      <p>
                        {" "}
                        Your Answer:{" "}
                        <span className="font-semibold">
                          {item.selectedAns}
                        </span>{" "}
                      </p>
                      <p>
                        {" "}
                        Correct Answer:{" "}
                        <span className="font-semibold">
                          {item.correctAns[0].answerText}
                        </span>
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div className="flex flex-col gap-[10px] bg-red-200 mt-[20px] p-[15px] rounded-2xl">
                      <p className="font-bold text-[110%]"> {item.quesText} </p>
                      <p>
                        {" "}
                        Your Answer:{" "}
                        <span className="font-semibold">
                          {item.selectedAns}
                        </span>{" "}
                      </p>
                      <p>
                        {" "}
                        Correct Answer:{" "}
                        <span className="font-semibold">
                          {item.correctAns[0].answerText}
                        </span>
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <button
              className="bg-blue-600 text-white py-[10px] rounded-2xl text-[120%] font-semibold hover:text-white hover:bg-blue-400"
              onClick={() => handlePlayAgain()}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
