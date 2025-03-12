import React from "react";
import "../Styles/profilec.css";

function Profile() {
  return (
    <div>
      <header>
        <img src="https://i.imgur.com/KvEuBiI.png" alt="Profile" />
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Tech Enthusiast</p>
      </header>
      <section id="bio">
        <h2>About Me</h2>
        <p>[Your biography]</p>
      </section>
      <section id="work">
        <h2>My Work</h2>
        <div className="project">Project 1</div>
        <div className="project">Project 2</div>
        <div className="project">Project 3</div>
      </section>
      <footer>
        <p>Contact me at [your email]</p>
      </footer>
    </div>
  );
}

export default Profile;
