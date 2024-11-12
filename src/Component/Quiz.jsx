import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz






// import React, { useState } from 'react';
// import { QuizData } from '../Data/QuizData';
// import QuizResult from './QuizResult';

// function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [clickedOption, setClickedOption] = useState(null); // Initially set to null, not 0
//   const [showResult, setShowResult] = useState(false);

//   // Function to update the score
//   const updateScore = () => {
//     if (clickedOption === QuizData[currentQuestion].answer) {
//       setScore(prevScore => prevScore + 1); // Use functional form to ensure correct score update
//     }
//   };

//   // Handle the change to the next question
//   const changeQuestion = () => {
//     if (clickedOption !== null) { // Ensure an option has been selected before proceeding
//       updateScore();
//       if (currentQuestion < QuizData.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//         setClickedOption(null); // Reset clicked option for the next question
//       } else {
//         setShowResult(true);
//       }
//     }
//   };

//   // Reset all states when the user wants to try again
//   const resetAll = () => {
//     setShowResult(false);
//     setCurrentQuestion(0);
//     setClickedOption(null); // Set clickedOption to null
//     setScore(0);
//   };

//   return (
//     <div>
//       <p className="heading-txt">Quiz APP</p>
//       <div className="container">
//         {showResult ? (
//           <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
//         ) : (
//           <>
//             <div className="question">
//               <span id="question-number">{currentQuestion + 1}. </span>
//               <span id="question-txt">{QuizData[currentQuestion].question}</span>
//             </div>
//             <div className="option-container">
//               {QuizData[currentQuestion].options.map((option, i) => (
//                 <button
//                   key={i}
//                   className={`option-btn ${clickedOption === i ? 'checked' : ''}`} // Correct check
//                   onClick={() => setClickedOption(i)} // Store index (i) as clicked option
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//             <input
//               type="button"
//               value="Next"
//               id="next-button"
//               onClick={changeQuestion}
//               disabled={clickedOption === null} // Disable button until an option is clicked
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Quiz;
