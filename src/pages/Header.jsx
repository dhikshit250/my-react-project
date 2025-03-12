import React from "react";
import "../Styles/headerc.css";  // Ensure correct path
import { Link } from "react-router-dom";

function Header() {
  const isLoggedIn = localStorage.getItem("user"); // Check login status

  return (
    <div className="banner">
      <div className="bar">
        <img src="logo.png" alt="Logo" className="logo" height="50px" />
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Book</Link></li>
            {isLoggedIn && <li><Link to="/profile">Profile</Link></li>} 
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
