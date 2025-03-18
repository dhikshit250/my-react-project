import React from "react";
import "../Styles/about.css"; 
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  return (
    <div>  
      <div className="about-container">
        <div className="okok">
          <h2>Portfolio</h2>
          <h1>Video Editor & Graphic Designer</h1>
        </div>
        <div className="profile-section">
        <img src="/logo.png" alt="ZELUS" className="profile-boom" />
        <h2>ZELUS</h2>
          <p>
            Passionate video editor & designer turning ideas into impactful visuals.
            Skilled in Premiere Pro, After Effects, and UI/UX design.
          </p>
          <p1>My Work On Youtube & Instagram Links Below!!!! </p1>
        </div>
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills">
            <div className="skill">After Effects</div>
            <div className="skill">Premiere Pro</div>
            <div className="skill">UI/UX Design</div>
            <div className="skill">Photoshop</div>
          </div>
        </div>
        <div className="contact-section">
          <h3>Contact</h3>
          <p>
            <FaEnvelope /> dhikshitveerrantha@gmail.com
          </p>
          <p>
            <FaPhone /> +91 9876543210
          </p>
          <div className="social-icons">
            <a href="http://www.instagram.com/zelusplayz"><FaInstagram /></a>
            <a href="http://www.youtube.com/@zelusplayz"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
