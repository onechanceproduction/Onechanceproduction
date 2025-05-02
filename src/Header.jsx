import React, { useState } from 'react';
import './Header.css';
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
        <Link to="/Home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Our Projects</Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
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
