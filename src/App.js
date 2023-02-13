import "./App.css";
import logo from "./imgs/yo.jpeg";
import LinkButton from "./components/LinkButton";
import Footer from "./components/Footer";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaSuitcase,
  FaPhoneAlt,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
//https://github.com/dapv67 git
//https://linkedin.com/in/alvarodperezv/
function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src={logo} alt="" width="65px" height="65px" className="logo" />
        </div>
      </div>
      <h3> Alvaro Pérez </h3>

      <div className="social-icons">
        <FaLinkedinIn style={{ fontSize: 20 }} className="icon" />
        <FaGithub style={{ fontSize: 20 }} className="icon" />
        <FaTwitter style={{ fontSize: 20 }} className="icon" />
      </div>
      <div className="text-main">
        <h1>Software engineer 👨‍💻</h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          tempora ipsum quia voluptas eius eligendi eveniet, pariatur velit
          doloribus amet recusandae beatae exercitationem harum necessitatibus
          esse nihil, deserunt totam enim!
        </p>
      </div>
      <LinkButton
        textDescrip="Portfolio"
        url="https://www.google.com"
        icon={<FaSuitcase className="icon" />}
      />
      <LinkButton
        textDescrip="Send me an email"
        url="https://www.google.com"
        icon={<FaSuitcase className="icon" />}
      />
      <Footer />
    </div>
  );
}

export default App;
