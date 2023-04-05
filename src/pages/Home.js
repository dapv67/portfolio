import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import LinkButton from "../components/LinkButton";
import "./Home.css";
import "../Global.css";
import pdf from "./CV.pdf";
import { FaSuitcase, FaArrowRight, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <div className="text-main">
          <h1>Software engineer 👨‍💻</h1>
          <p className="">
            <strong>
              +3 years of experience specialized in React and JavaScript{" "}
            </strong>{" "}
            collaborating multidisciplinary teams under
            <strong>
              {" "}
              agile methodologies developing, maintaining and deploying software
              functionalities implementing UI/UX designs, with strong
              problem-solving skills
            </strong>
            . Interest in software development, artificial intelligence and
            management of high performance teams.
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
            className="btn-main y"
            textDescrip="Portfolio"
            url="/portfolio"
            icon={<FaSuitcase className="icon" />}
          />
          <LinkButton
            className="btn-main y"
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
      </div>

      <Footer />
    </>
  );
}
