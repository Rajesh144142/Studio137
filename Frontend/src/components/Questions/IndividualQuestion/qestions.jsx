import Dummyqestions from "../dummyquestion";
import Options from "./options";
import "./questions.scss";
const Question = ({ questionIndex ,handleNext}) => {
  return (
    <div className="all">
      {Dummyqestions.map((question, index) => (
       index===questionIndex && 
       <div key={index} className="individual">
          <p className="questionsText">{question.text}</p>
         <div className="optionI" style={{display:'flex'}}>
         <Options questionIndex={questionIndex} handleNext={handleNext}/>
          
          </div> 
        </div>
      ))}
    </div>
  );
};

export default Question;
