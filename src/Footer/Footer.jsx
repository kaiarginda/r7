import React from "react";
import "./footer.css";
import { BsFacebook, BsLinkedin, BsPinterest } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-icons">
            <BsFacebook className="ft-i" />
            <BsLinkedin className="ft-i" />
            <BsPinterest className="ft-i" />
          </div>
          <div className="footer-detalis">
            <ul>
              <li>
                <span>PHONE:</span>
                +995 577 334 355
              </li>
              <li>
                <span>EMAIL:</span> tornike.tanda@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
