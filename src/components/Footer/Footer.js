// Footer.js
import React from "react";
import "./Footer.css"; // Make sure to create this CSS file

function Footer() {
    return (
        <footer className="footer">
            <span>לבל אפ מומחים באיתור נדל״ן בע״מ </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/bar-lander-horovitz-a77a4710b/" target="_blank" rel="noopener noreferrer" className="footer-link">
                © נבנה על ידי בר לנדר 
            </a>
        </footer>
    );
}

export default Footer;
