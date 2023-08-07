import React from "react";
import "./projects.css";
import { AiOutlineSearch } from "react-icons/ai";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-main ">
          <div className="pr-box">
            <div className="projects-item p-1">
              <p className="pi-cl">FOOD RECIPE & ORDERING WEBSITE</p>
              <p>
                FULL RESPONSIVE FOOD ORDERING WEBSITE WITH SCROLLING ANIMATIONS,
                I AM ADDING RECIPE FEATURES RIGHT NOW.
              </p>
              <a href="https://kaiarginda.github.io/r3/">
                <AiOutlineSearch className="pr-icon" />
              </a>
            </div>
          </div>
          <div className="pr-box">
            <div className="projects-item p-2">
              <p className="pi-cl">CAR RENTAL WEBSITE</p>
              <p>FULL RESPONSIVE CAR RENTAL WEBSITE</p>
              <a href="https://kaiarginda.github.io/r2/">
                <AiOutlineSearch className="pr-icon" />
              </a>
            </div>
          </div>
          <div className="pr-box">
            <div className="projects-item p-3">
              <p className="pi-cl">REAL ESTATE AGENCY</p>
              <p>FULL RESPONSIVE REAL ESTATE AGENCY WEBSITE. </p>

              <a href="https://kaiarginda.github.io/r1/">
                <AiOutlineSearch className="pr-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

//
