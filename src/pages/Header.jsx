import React from "react";
import { Link } from "react-router-dom";
import "../Styles/headerc.css";

function Header() {
  const token = localStorage.getItem("token"); // Check if user is logged in
  const isLoggedIn = !!token; // Convert token presence to boolean

  return (
    <div className="banner">
      <div className="bar">
        <img src="logo.png" alt="Logo" className="logo" height="50px" />
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Book</Link></li>
            {isLoggedIn && <li><Link to="/profile">Profile</Link></li>} {/* Show Profile only if logged in */}
            <li><Link to="/contact">Contact</Link></li>
            {!isLoggedIn && <li><Link to="/login">Login</Link></li>} {/* Show Login only if NOT logged in */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
