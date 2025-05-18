import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './Component/Header';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Scroll from "./Scroll"; 
import About from './Component/About';
import Admin from './Admin/Admin';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   // Clear admin mode if user refreshed or reloaded site
  //   if (window.location.pathname !== '/admin') {
  //     localStorage.removeItem('isAdmin');
  //   }
  // }, []);
  
  return (
    <Router>
      <Header />
      <Scroll />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
