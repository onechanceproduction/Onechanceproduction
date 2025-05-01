import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="info-item">
          <h3>Phone</h3>
          <p>+(91) 8974897616</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>productionsonechance@gmail.com</p>
        </div>
        <div className="info-item">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/1chance.productions/"><img src={process.env.PUBLIC_URL + "/img/icons/instagram.png"} alt="Instagram" className='icon-img instagram'/></a>
            <a href="https://mailto:productionsonechance@gmail.com"><img src={process.env.PUBLIC_URL + "/img/icons/search.png"} alt="Gmail" className='icon-img gmail'/></a>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email *" required />
        </div>
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
