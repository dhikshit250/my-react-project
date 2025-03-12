import React from "react";
import { Link } from "react-router-dom";
import "../Styles/loginc.css";

function Login() {
  return (
    <div>
      <div className="content">
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit"><span></span>LOGIN</button>
        </form>
        
        {/* Add the Sign Up link */}
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
