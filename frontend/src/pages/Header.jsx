import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import Profile Icon
import "../Styles/headerc.css";

function Header() {
  const token = localStorage.getItem("token"); // Check if user is logged in
  const isLoggedIn = !!token; // Convert token presence to boolean

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="logo.png" alt="Logo" className="logo" />
          <span className="logo-text">ZelusEdits</span>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Booking">Order</Link></li>
            <li><Link to="/Contact">About</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="login-btn">Log in</Link>
              <Link to="/signup" className="signup-btn">Get Started</Link>
            </>
          ) : (
            <Link to="/profile" className="profile-btn">
              <FaUserCircle size={24} className="profile-icon" />
              <span>Profile</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
