import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <Link to="/" className="link-footer">
        Home
      </Link>
      <Link to="/portfolio" className="link-footer">
        Portfolio
      </Link>

      <Link to="/contact" className="link-footer">
        Contact me
      </Link>
      <Link to="#" className="link-footer">
        Privacy & legal
      </Link>
      <p className="link-footer">
        alvaroperez.tech {new Date().getFullYear()} © All right reserved.
      </p>
    </div>
  );
}

export default Footer;
