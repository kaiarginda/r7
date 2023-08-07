import React from "react";
import "./stun.css";
import { Link } from "react-router-dom";
const Stun = () => {
  return (
    <div className="stun">
      <div className="stun-container">
        <div className="stun-main">
          <h4>FRONT-END WEB DEVELOPER (FOR NOW)</h4>

          <h2>
            Have a dream design and I will make it real. If you Want{" "}
            <span> Best Website</span> You Need
            <span> Best Developer</span>. <h6>Here I Am!</h6>
          </h2>

          <Link to="/about" className="c-l">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stun;
