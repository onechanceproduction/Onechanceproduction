import React from "react";
import "../CSS/About.css";
import { Link } from "react-router-dom";

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
        <div className="about-us-container"><p className="about-us">
          Onechance Productions is your creative ally in media production. We
          bring stories to life through powerful visuals and emotionally-driven
          content that leaves a lasting impact. Whether you're a brand, artist,
          or visionary—your story matters, and we’re here to tell it right. From
          dynamic photo shoots to engaging video ads, our goal is to make your
          brand shine and leave a lasting impression. Our focus is not just on
          visuals, but on storytelling that evokes emotion and drives
          engagement. At Onechance, we believe that every brand has a unique
          voice—and we’re here to help you amplify it. Whether you're launching
          a new product, growing your online presence, or creating buzz for your
          business, we bring passion, precision, and purpose to every project. </p>
          <p className="specialize">>We specialize in:</p> 
          <p className="about-us">Product photography and Instagram-ready visuals</p>
          <p className="about-us">Creative reels and promotional videos</p> 
          <p className="about-us">Brand Films: Short-form storytelling that captures your brand’s voice and values.</p> 
          <p className="about-us">Music Videos: Visual storytelling for musicians and artists that amplify the rhythm and message of the track. </p>
          
          <p className="about-us">What sets us apart is our commitment to understanding your goals and delivering results. We don't just
          shoot—we strategize, plan, and partner with you every step of the way.
          We’re driven by creativity, inspired by innovation, and obsessed with
          helping small brands grow through stunning visuals and smart content.
          At Onechance Productions, your brand gets the attention, creativity,
          and care it deserves. One vision. One story.</p>
          <p>
          <span className="about-us-heading">"One chance to
          inspire—because every story deserves to be told right."</span></p>
        </div>
      </div>
    </div>
  );
};
export default picture;
