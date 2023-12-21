import { useState } from "react";
import "./_style.scss";
import { Navigate } from "react-router-dom";
import ProgressBar from "./progressBar/progressBar.jsx";
import IndividualQuestion from "./IndividualQuestion/qestions.jsx";
import { IoArrowBack } from "react-icons/io5";

const questionsSection = () => {
  const [no, setNo] = useState(0);
  const totalNo = 12;
  const handlePrev = () => {
    if (no !== 0) setNo(no - 1);
  };
  const handleNext = () => {
    if (no !== totalNo + 1) return setNo(no + 1);
  };
  if (no === totalNo)
{   
  return <Navigate to="/" />}

  return (
    <div className="questionSection">
      <div className="proggressBar">
        <ProgressBar no={no} totelQestion={totalNo} />
      </div>
      <div className="questionsNoTrack">
        {no}/{totalNo}
      </div>
      <div className="quuestionsAndOptions">
      <IndividualQuestion questionIndex={no} handleNext={handleNext}/>
      </div>
     {no!==0&&<div className="prevBtn"  onClick={handlePrev}>
        <span className="prevBtnicon"><IoArrowBack/></span>
        <span className="text">PREV</span></div>}
    </div>
  );
};

export default questionsSection;
