import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/homec.css";

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token"); // ✅ Correct check for login status

  const handleBookClick = () => {
    if (isLoggedIn) {
      navigate("/booking"); // ✅ Navigate to book page if logged in
    } else {
      navigate("/login"); // ✅ Redirect to login page if not logged in
    }
  };

  return (
    <div>
      <div className="content">
        <h1>MAKE YOUR VIDEOS</h1>
        <p>Book your first video and get an exclusive deal!!</p>
        <div>
          <button type="button" onClick={handleBookClick}>
            <span></span>Order Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
