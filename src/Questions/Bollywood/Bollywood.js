import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Burger from "../../components/Burger/Burger";
export default function Bollywood(){
    const {user}=useAuth();
    const [showScore,setShowScore]=useState(false);
    const [score,setScore]=useState(0);
    const [quesNo,setQuesNo]=useState(0);
   
   
    function handleCheckAns(e,isCorrect,id)
    {   e.preventDefault();
     
       
        if(isCorrect===true)
        {
        console.log(score);
        setScore(score+1);
      }
        const nextQues=quesNo+1;
        if(nextQues<questions.length)
        {
            setQuesNo(nextQues);
        }
        else{
            setShowScore(true);
        }
        

    }
    function handlePlayAgain(){
        setShowScore(false);
        setScore(0);
        setQuesNo(0);

    }
    const navigate=useNavigate();
    
    useEffect(()=>{
    if(user==null)
    navigate('/');
    })
const questions=[
    
        {   
            questionText:"Which actor played a role of DHONI in M.S. Dhoni: The Untold Story?",
            answerOptions:
            [
                
                {answerText:"Ranbir Kapoor",isCorrect:false},
                {answerText:"Varun Dhawan",isCorrect:false},
                {answerText:"Sushant Singh Rajput",isCorrect:true},
                {answerText:"Pankaj Tripathi",isCorrect:false},
              
            ]
        },
        {
        questionText:"Who is known as King of Bollywood?",
        answerOptions:
        [
            
            {answerText:"Shah Rukh Khan",isCorrect:true},
            {answerText:"Akshay Kumar",isCorrect:false},
            {answerText:"Salman Khan",isCorrect:false},
            {answerText:"Aamir Khan",isCorrect:false},
            
        ]
       },
    {   
        questionText:"Who is known as Sultan/Tiger of Bollywood?",
        answerOptions:[
            
            {answerText:"Shah Rukh Khan",isCorrect:false},
            {answerText:"Akshay Kumar",isCorrect:false},
            {answerText:"Salman Khan",isCorrect:true},
            {answerText:"Aamir Khan",isCorrect:false},
            
        ]
        
    },
    {   
        questionText:"Who is known as Khiladi of Bollywood?",
        answerOptions:[
            
            {answerText:"Shah Rukh Khan",isCorrect:false},
            {answerText:"Akshay Kumar",isCorrect:true},
            {answerText:"Salman Khan",isCorrect:false},
            {answerText:"Aamir Khan",isCorrect:false},
            
        ]
    },
    {   
        questionText:"Who is known as Mr.Perfectionist of Bollywood?",
        answerOptions:[
            
            {answerText:"Shah Rukh Khan",isCorrect:false},
            {answerText:"Akshay Kumar",isCorrect:false},
            {answerText:"Salman Khan",isCorrect:false},
            {answerText:"Aamir Khan",isCorrect:true},
            
        ]
    }, 
    
    
]
return(
    <div className="bg-gray-100">
        <div className="bg-black flex justify-between items-center min-w-[100vw] min-h-[6vh] md:min-h-[8vh]"><Burger/>{user?.displayName && <p className="text-white p-[10px]">{user?.displayName}</p>}</div>
    <div className="flex justify-center items-center min-w-[100vw] min-h-[92vh]">
        
    {showScore===false ? <div className="flex flex-col flex-wrap   justify-start items-start gap-[20px] md:max-w-[50%] min-w-[50%] p-[20px] rounded-2xl bg-white mx-[10px]">
        <h2 className="text-[135%] w-[100%] bg-blue-300  font-semibold border-2  rounded-xl p-[10px]">Q:{quesNo+1} {questions[quesNo].questionText}</h2>
        {questions[quesNo].answerOptions.map((item,index)=>{
            return <button className="text-[100%] flex bg-green-100 justify-start hover:text-white hover:bg-blue-500 hover:border-white   w-[100%] font-semibold border-2  rounded-xl p-[10px]" onClick={(e)=>handleCheckAns(e,item.isCorrect,index)}> {item.answerText}</button>
        })}
    </div> : <div className="flex flex-col gap-[50px]"><div className="flex flex-col items-center bg-blue-200  p-[20px] rounded-xl">
        <h1 className="font-semibold text-[130%]">Hey {user?.displayName}!</h1>
        <p className="text-[110%]">Your score is {score}/{questions.length}.</p>
        </div>
       <button className="bg-blue-200 py-[10px] rounded-2xl text-[120%] font-semibold hover:text-white hover:bg-blue-400" onClick={()=>handlePlayAgain()}>Play Again</button>
      
        
        </div>
        }

    </div>
    </div>
    )
}

