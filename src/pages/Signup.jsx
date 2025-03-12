import React from "react";
import { Link } from "react-router-dom";
import "../Styles/loginc.css"; // Assuming you're using the same CSS file

function Signup() {
  return (
    <div>
      <div className="content">
        <h1>CREATE A NEW ACCOUNT</h1>
        <form className="login-form"> {/* Keeping the same class for styling consistency */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <button type="submit"><span></span>SIGN UP</button>
        </form>

        {/* Add Login Link */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
