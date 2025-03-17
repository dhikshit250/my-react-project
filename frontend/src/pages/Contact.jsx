import React from "react";
import "../Styles/contactc.css"; 

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigate function



function Contact() {
  return (
    <div>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>
      
      <div className="contact-details">
        <p><strong>Email:</strong> support@yourwebsite.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Address:</strong> 123, Main Street, Hyderabad, India</p>
      </div>
      
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div><div className="about-container">
      <div className="header">
        <h2>Portfolio</h2>
        <h1>Video Editor & Graphic Designer</h1>
      </div>
      <div className="profile-section">
        <img src="/profile.jpg" alt="ZELUS" className="profile-pic" />
        <h2>ZELUS</h2>
        <p>
          Passionate video editor & designer turning ideas into impactful visuals.
          Skilled in Premiere Pro, After Effects, and UI/UX design.
        </p>
        {/* Button to navigate to /about */}
        <button onClick={() => navigate("/contact")} className="navigate-btn">
          Go to About
        </button>
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
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
