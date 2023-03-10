import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkButton from "../components/LinkButton";
import "./Home.css";
import "../Global.css";
import pdf from "./CV.pdf";
import { FaSuitcase, FaArrowRight, FaDownload } from "react-icons/fa";

import logo from "../imgs/logo.png";

export default function Home() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="text-main">
          <h1>Software engineer 👨‍💻</h1>
          <p className="">
            I'm a software developer with 3 years of experience in web
            technologies and use of agile methodologies. I'm looking to help you
            as a software engineer.
          </p>
        </div>
        <div className="btns">
          <div className="link-button btn-main">
            <FaDownload className="icon icon-link" />
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download="CV.pdf"
            >
              Get resume
            </a>
          </div>

          <LinkButton
            className="btn-main"
            textDescrip="Portfolio"
            url="/portfolio"
            icon={<FaSuitcase className="icon" />}
          />
          <LinkButton
            className="btn-main"
            textDescrip="Contact me"
            url="/contact"
            icon={<FaArrowRight className="icon" />}
          />
        </div>

        <div className="skills-section">
          <h3>Skilled In</h3>
          <h4 className="jump">Experienced programming languages</h4>
          <p>JavaScript, Java, Python, SQL, R, Php</p>
          <h4 className="jump">Experienced technologies</h4>
          <p>
            HTML, CSS, Mongodb, Express, React, Node, Bulma, Bootstrap, jQuery
          </p>
          <h4 className="jump">Others</h4>
          <p>Adobe Xd, Shopify, Woocommerce, Wordpress, Office, Arduino</p>
        </div>

        <img src={logo} alt="" className="logo-footer jump" />
      </div>

      <Footer />
    </>
  );
}
