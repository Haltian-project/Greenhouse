import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaHome className="home-icon" /> Green House
        </Link>
        <div className="navbar-links">
          <Link to="/charts" className="nav-link">
            Charts
          </Link>
          <Link to="/forecast" className="nav-link">
            Weather forecast
          </Link>
          <Link to="/price" className="nav-link">
            Electricity Price
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
