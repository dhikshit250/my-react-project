import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/bookingc.css";

function Booking() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user"); // Check if user is logged in

  const handleSubscribe = () => {
    if (isLoggedIn) {
      alert("Subscription successful!"); // Replace this with actual subscription logic
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <div>
      <div className="plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p className="price">$9.99/month</p>
          <p>Access to basic features</p>
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        <div className="plan">
          <h2>Standard Plan</h2>
          <p className="price">$19.99/month</p>
          <p>Access to standard features</p>
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p className="price">$29.99/month</p>
          <p>Access to premium features</p>
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
