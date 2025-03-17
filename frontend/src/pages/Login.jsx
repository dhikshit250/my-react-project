import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/loginc.css";

function Login() {
  const [identifier, setIdentifier] = useState(""); // Accepts email or username
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("https://b-backend-i75l.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }), // Send email or username as "identifier"
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);

      // Redirect to profile page
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo"></div> {/* Placeholder for a logo */}
        <h2>Sign in</h2>
        {error && <p className="error-message">{error}</p>} {/* Show error message */}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="identifier">Username/Email</label>
          <input 
            type="text" 
            id="identifier" 
            name="identifier" 
            value={identifier} 
            onChange={(e) => setIdentifier(e.target.value)}
            required 
            placeholder="Enter your username or email"
          />
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit">Sign in</button>
        </form>
        
        <p className="signup-text">
          Not a member? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
