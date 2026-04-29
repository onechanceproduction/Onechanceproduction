import React, { useState } from 'react';
import '../CSS/Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';


const handleViewAsVisitor = () => {
    localStorage.removeItem('isAdmin');
    navigate(location.pathname); // navigate to current path
    window.location.reload(); // refresh to reflect admin view change
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/img/gallery/logo1.png"} alt="One chance production" />
      </div>

      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/Home" className={location.pathname === "/Home" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/About" className={location.pathname === "/About" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/Projects" className={location.pathname === "/Projects" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Our Projects</Link>
        <Link to="/Contact" className={location.pathname === "/Contact" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
        {isAdmin && (
          <button className="visitor-btn" onClick={handleViewAsVisitor}>
            View as Visitor
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
