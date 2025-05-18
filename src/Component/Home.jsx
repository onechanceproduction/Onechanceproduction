import React from "react";
import "../CSS/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
return(
    <div className="container">
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/img/hero-area-enhanced.jpg"}
          alt="about"
          className="about-img"
        />
      </div>
      <div className="text">"Your vision gets only <span className="one">ONE CHANCE</span>— let’s make it <span className="one">COUNT</span>."</div>
      <div className="home-button">
        <Link to="/About" className="know-more">
          Know more
        </Link>
        <Link to="/Contact" className="know-more">
          Contact now
        </Link>
      </div>
    </div>
 );
};


export default Home;