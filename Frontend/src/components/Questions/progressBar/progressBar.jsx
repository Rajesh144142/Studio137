import React from "react";
import "./_style.scss";
const progressBar = ({ no, totelQestion }) => {
  const percentage = Math.floor((no * 100) / totelQestion);
  const questionPerStage = totelQestion / 4;
  const widthPercentage =
    no % 3 == 0 && no != 0
      ? 100
      : Math.floor(((no % questionPerStage) * 100) / questionPerStage);
  // console.log(Math.floor(no / questionPerStage));
  const stages = ["STRATEGY", "UNDERSTANDING", "APPLICATION", "DIRECTION"];
  return (
    <div className="progressbar">
      <div className="percent" style={{ paddingLeft: `${percentage}%` }}>
        {percentage}%
      </div>

      <div className="progressLineFill">
        <div className="blank1"></div>
        <div className="blank2"></div>
        <div className="blank3"></div>

        <div
          className="progrssLineFiller"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
      <div className="textName">
        {" "}
        <div className="text1">STRATEGY</div>
        <div className="text2">UNDERSTANDING</div>
        <div className="text3">APPLICATION</div>
        <div className="text4">DIRECTION</div>
      </div>
    </div>
  );
};

export default progressBar;
