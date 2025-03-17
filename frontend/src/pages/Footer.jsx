import React from "react";
import "../Styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo.png" alt="Zelus" className="logo" />
          <span className="brand-name">Zelus Edits</span>
        </div>
        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Licensing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <hr />
      <p className="copyright">© 2023 Zelusedits™. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
