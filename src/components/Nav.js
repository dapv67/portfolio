import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import logo from "../imgs/logo.png";

function Nav() {
  const [openBurguer, setOpenBurguer] = useState(false);

  const handlerCloseNav = () => {
    setOpenBurguer(false);
  };
  const handlerOpenBurguer = () => {
    setOpenBurguer(true);
  };
  return (
    <div className="container-nav">
      <div className="navbar">
        <img src={logo} alt="" className="logo-icon" />
        <nav className={`${openBurguer ? "open" : ""}`}>
          <Link to="/" className="item-nav">
            Home
          </Link>
          <Link to="/portfolio" className="item-nav">
            Portfolio
          </Link>
          <Link to="/contact" className="item-nav">
            Contact
          </Link>

          <CgClose
            className="nav-btn closeIcon"
            style={{ fontSize: 32 }}
            onClick={handlerCloseNav}
          />
        </nav>
        <RxHamburgerMenu
          className="nav-btn"
          style={{ fontSize: 32 }}
          onClick={handlerOpenBurguer}
        />
      </div>
    </div>
  );
}

export default Nav;
