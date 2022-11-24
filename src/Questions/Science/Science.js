import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import Burger from "../../components/Burger/Burger";

export default function Science() {
  const { user } = useAuth();
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quesNo, setQuesNo] = useState(0);
  const [summary, setSummary] = useState([]);

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
      setScore((prev) => prev + 1);
    }

    const nextQues = quesNo + 1;
    if (nextQues < questions.length) {
      setQuesNo(nextQues);
    } else {
      setShowScore(true);
      setDataFun();
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
  async function setDataFun(e) {
    await addDoc(collection(db, `${user?.email}`), {
      category: "Science",
      score: score,
    });
  }

  const questions = [
    {
      questionText:
        "How long does it take the earth to do one full rotation of the sun?",
      answerOptions: [
        { answerText: "7 days", isCorrect: false },
        { answerText: "100 days", isCorrect: false },
        { answerText: "365 days", isCorrect: true },
        { answerText: "500 days", isCorrect: false },
      ],
    },
    {
      questionText: "What does GMT stand for?",
      answerOptions: [
        { answerText: "Greenwich Mean Time", isCorrect: true },
        { answerText: "Greenwich Marine Time", isCorrect: false },
        { answerText: "Great, Meal Time!", isCorrect: false },
        {
          answerText:
            "Greenwich Mean Tim (A guy called Tim who lives in Greenwich and is mean)",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What's faster, sound or light?",
      answerOptions: [
        { answerText: "Sound", isCorrect: false },
        { answerText: "Light", isCorrect: true },
        { answerText: "They travel at the same speed", isCorrect: false },
        { answerText: "They don't move", isCorrect: false },
      ],
    },
    {
      questionText: "What's next in the sequence. Mercury, Venus, Earth...",
      answerOptions: [
        { answerText: "Twix", isCorrect: false },
        { answerText: "The moon", isCorrect: false },
        { answerText: "Mars", isCorrect: true },
        { answerText: "Saturn", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which one of these is a major contributor to global warming?",
      answerOptions: [
        {
          answerText:
            "Talking about football when you don't know anything about football",
          isCorrect: false,
        },
        { answerText: "Burning fossil fuels", isCorrect: true },
        { answerText: "Wearing red underpants", isCorrect: false },
        { answerText: "Otters", isCorrect: false },
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

      <div className=" flex flex-col justify-center items-center min-h-[92vh]  ">
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
        {showScore === false && (
          <Link to="/quizcategory">
            <button className="text-[100%]  bg-red-500 t text-white    font-semibold border-2  rounded-xl p-[10px] my-[10px]">
              Quit
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
