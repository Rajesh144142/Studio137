import React from "react";
import church from "../../assets/church-tech.png";
import "./_style.scss";
const navBar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="navImage">
          <img src={church} alt="" />
        </div>
        <div className="navText">AI Pulse Check</div>

          <div className="other">
            <span className="built">built by</span>
            <span className="bleat">bleat</span>
        </div>
      </div>
    </div>
  );
};

export default navBar;
