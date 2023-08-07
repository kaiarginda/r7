import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

import TypewriterComponent from "typewriter-effect";

const About = () => {
  const ll = ` Hello! I'm delighted to introduce myself through this portfolio. My
  name is Tornike, and I am a Front-End Web Developer. I have a
  passion for computers, and I thrive on exploring new ideas and
  challenges within my chosen domain. From a young age, I've been
  fascinated by computers. This curiosity led me to pursue formal
  education in Web Development, where I honed my skills and knowledge.
  Throughout my journey, I embraced every opportunity to learn, grow,
  and excel in my chosen field. As a Developer, I find joy in turning
  designs into real websites. I believe that every project is an
  opportunity to tell a unique story, and I'm committed to crafting
  meaningful experiences that leave a lasting impression. Thank you
  for visiting my portfolio. I hope you enjoy exploring my creations
  as much as I enjoyed bringing them to life. If you're interested in
  collaborating or have any questions, feel free to get in touch.
  Let's create something extraordinary together!`;
  return (
    <div className="about">
      <div className="about-contain">
        <div className="about-main">
          <h3>Learn More About Me</h3>
          <hr />

          <p className="type">
            {/* <TypewriterComponent
              className="type"
              options={{
                delay: 10,
                autoStart: true,
                strings: [`${ll}`],
                loop: false,
              }}
            /> */}

            <TypewriterComponent
              options={{
                strings: [`${ll}`],
                autoStart: true,
                delay: 1,
                loop: false,
                deleteSpeed: 99999999999999999999999999999999999999999999999999999999999999999999,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(`${ll}`).start().stop();

                // .start();
              }}
            />
          </p>
          <Link to="/r5" className="c-l bcbt">
            <button>Back To Website</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
Hello! I'm delighted to introduce myself through this portfolio. My
                name is Tornike, and I am a Front-End Web Developer. I have a
                passion for computers, and I thrive on exploring new ideas and
                challenges within my chosen domain. From a young age, I've been
                fascinated by computers. This curiosity led me to pursue formal
                education in Web Development, where I honed my skills and knowledge.
                Throughout my journey, I embraced every opportunity to learn, grow,
                and excel in my chosen field. As a Developer, I find joy in turning
                designs into real websites. I believe that every project is an
                opportunity to tell a unique story, and I'm committed to crafting
                meaningful experiences that leave a lasting impression. Thank you
                for visiting my portfolio. I hope you enjoy exploring my creations
                as much as I enjoyed bringing them to life. If you're interested in
                collaborating or have any questions, feel free to get in touch.
                Let's create something extraordinary together!
*/
