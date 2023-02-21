import React from "react";
import { Link } from "react-router-dom";
import yo from "../imgs/yo.jpeg";
import "../components/Header.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="logo-container">
        <div className="logo-wrapper">
          <img loading="lazy" src={yo} alt="" className="logo" />
        </div>
      </div>
      <h3> Eng. Alvaro Pérez </h3>
      <p>#Technology #Business #Science #Sports</p>

      <div className="social-icons">
        <Link to="https://twitter.com/dapv67" className="icon">
          <FaTwitter style={{ fontSize: 20 }} />
        </Link>
        <Link to="https://linkedin.com/in/alvarodperezv/" className="icon">
          <FaLinkedinIn style={{ fontSize: 20 }} />
        </Link>
        <Link to="https://github.com/dapv67" className="icon">
          <FaGithub style={{ fontSize: 20 }} />
        </Link>
        <Link to="https://www.instagram.com/alvaroperez67_/" className="icon">
          <FaInstagram style={{ fontSize: 20 }} />
        </Link>
        <Link to="https://www.facebook.com/alvarodperezv" className="icon">
          <FaFacebook style={{ fontSize: 20 }} />
        </Link>
      </div>
    </>
  );
}
