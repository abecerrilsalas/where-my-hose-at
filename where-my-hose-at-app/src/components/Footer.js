import React from "react";
import "./Footer.css";

function Footer() {
  if (window.location.pathname === '/presentation') return null;
  return (
    <div className="footer">
      <p>© 2022 Where My Hose At — demo</p>
      <p>
        C16 Ada Developers Academy Capstone by Alma Becerril Salas & Tanya Tran
      </p>
    </div>
  );
}

export default Footer;
