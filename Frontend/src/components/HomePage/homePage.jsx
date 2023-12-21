import React from "react";
import leoWc from "../../assets/pexels.jpeg";
import "./_style.scss";
import { BsClock } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const homePage = () => {
  return (
    <div className="section">
      <div className="imagesection">
        <img src={leoWc} alt="" />
        <div className="videobtn">
          <div className="icon">
          <BsPlayFill />
          </div>
          <div className="videobtntext">WATCH VIDEO</div>
        </div>
      </div>
      <div className="textSection">
        <div className="heading">
          <span className="textCol">Is your church embracing impact </span>or
          AI* hesitant?
        </div>
        <div className="points">
          <span>1. Take this 3-minute assesssment</span>
          <span>2. Invite your team to take it too after yo do</span>
          <span>
            3. Align on the best next step for your chrch's approach to AI
          </span>
        </div>
        <div className="btn">
          <Link to='/queries' className="startBtn">GET STARTED</Link>
          <div className="time">
            <span className="icon">
              <BsClock />
            </span>
            <span>3 min</span>
          </div>
        </div>
        <div className="note">*Artificial intelligence</div>
      </div>
    </div>
  );
};

export default homePage;
