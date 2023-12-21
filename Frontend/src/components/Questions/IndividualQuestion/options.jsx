import { useEffect, useState } from "react";
import "./option.scss";
const options = ({ optionOfQuestion, questionIndex, handleNext }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];
  const [optionNo, setOptionNo] = useState(0);
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    const index = options.findIndex((item) => item === e.target.value);
    setOptionNo(index);
    console.log("question No " + (questionIndex + 1) + " : " + e.target.value);
    setTimeout(() => {
      handleNext();
    }, 1000);
  };
  return (
    <div className="opt">
      {options.map((opt, index) => (
        <div className="option" key={index}>
          <input
            type="radio"
            //name={`question-${questionIndex}`}
            value={opt}
            className="radio-btn"
            checked={selectedOption === opt}
            onChange={handleChange}
          />
          <div className={`line`}>
            <div
              className={`line${selectedOption !== "" ? `${optionNo}` : "0"}`}
            ></div>
          </div>
          <label key={index}>{opt}</label>
        </div>
      ))}
    </div>
  );
};

export default options;
