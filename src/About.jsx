import React from "react";
import "./About.css";
import { Link } from 'react-router-dom';

const picture = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/img/hero-area-enhanced.jpg"}
          alt="about"
          className="about-img"
        />
      </div>
      <div className="button">
        <Link to="/projects" className="explore-now">
          Explore now
        </Link>
      </div>
      <div className="heading-container">
        <div className="vertical-line"></div>
        <div className="about-us-container">
          <span className="about-us-heading"></span>
          <p className="about-us-text"></p>
        </div>
      </div>
    </div>
  );
};
export default picture;
