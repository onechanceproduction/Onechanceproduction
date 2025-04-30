import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-back">
      <div className="footer">
        <spam className="One-chance">One Chance Production</spam>
        <spam>
          productionsonechance@gmail.com <br />
          +(91) 8974897616
        </spam>
        <hr className="Bar"></hr>
        <div className="social-icons">
            <a href="https://www.instagram.com/1chance.productions/"><img src="img\icons\instagram.png" alt="Instagram" className='icon-img instagram'/></a>
            <a href="https://mailto:productionsonechance@gmail.com"><img src="img\icons\search.png" alt="Gmail" className='icon-img gmail'/></a>
          </div>
      </div>
    </div>
  );
};
export default Footer;
