import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import logo from "../imgs/logo.png";
import "../Global.css";
import { FaPhoneAlt, FaMailBulk, FaArrowRight } from "react-icons/fa";
// https://finesthomeconstruction.com/

// -------------- Swiper imports ------------

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import "swiper/css/navigation";
import "./Portfolio.css";

// import required modules
import { Navigation } from "swiper";
// -----------------------------------------
export default function Portfolio() {
  let projects = [
    {
      id: 0,
      title: 'Design and development: Ecommerce "Dulcería La Tentación"',
      description:
        'Ecommerce "Dulceria La Tentación", sends Mexican sweets from Chicago, USA to the whole world, here I designed and developed the brand`s ecommerce. Used Technologies: Wordpress, Woocommerce, CSS3 & Adobe Xd',
      url: "https://dulcerialatentacion.com/",
      imageUrl: "dulceria",
      iconUrl: "dulceria",
    },
    {
      id: 1,
      title: "Design and development: Begoapp.com",
      description:
        "Bego Project is a web app to estimate jobs and send custom quotes to customers via email & Invoice generator. Modules: Invoices, Estimates, Clients & Items. Used Technologies: Mongodb, Expressjs, Reactjs, Nodejs, Boostrap5, CSS3 & Adobe Xd",
      url: "#",
      imageUrl: "bego3",
      iconUrl: "bego",
    },
    {
      id: 2,
      title: "Design & development: Markstory agency website",
      description:
        "Markstory Project is the website of a Technology development and marketing agency in Chicago, USA. Used Technologies: JavaScript, CSS3, HTML5 & Adobe Xd",
      url: "https://dapv67.github.io/markstory.github.io/",
      imageUrl: "markstory",
      iconUrl: "markstory",
    },
    {
      id: 3,
      title: "Design & managment: Logistics system",
      description:
        "3 components: Web system that controls the operation of a delivery company, API for app-system delivery & Android mobile app for delivery. Used Technologies: Reactjs, Expressjs, Nodejs, Bulma, CSS3, Adobe Xd & Scrum methodology",
      url: "#",
      imageUrl: "logistic2",
      iconUrl: "logistic",
    },

    {
      id: 4,
      title: "Design & development: Proensi.com",
      description:
        "Proensi.com Project is the new website of a specialist company and leader in the industrial and engineering field in Mexico. Used Technologies: JavaScript, HTML5, CSS3, Bootstrap5, jQuery & Adobe Xd",
      url: "https://www.proensi.com.mx/",
      imageUrl: "proensi",
      iconUrl: "proensi",
    },
    {
      id: 5,
      title: "Design & development: Central Factory App",
      description:
        "Central Factory SaaS Web system that helps to control the processes of a factory: Generates the weekly production planning, Alerts of maximum and minimum inventory, Shipment tracking, Customer Agenda, History of inventory inputs and outputs. Used Technologies: JavaScript, HTML5, CSS3, Bootstrap5, Datatables, Chartjs, jQuery & Adobe Xd",
      url: "https://dapv67.github.io/central-factory/",
      imageUrl: "factory",
      iconUrl: "factory",
    },
    {
      id: 6,
      title: "Design and development: Personal/Portfolio website",
      description:
        "Personal/Portfolio Site Project. It is my personal website where I show how I can help you and how you can contact me to work together. Used Technologies: Reactjs, Nodejs, Boostrap5, CSS3 & Adobe Xd",
      url: "https://dapv67.github.io/markstory.github.io/",
      imageUrl: "personal",
      iconUrl: "personal",
    },
    {
      id: 7,
      title: "Design and development: Finest Construction website",
      description:
        "Website of a construction firm in chicago, USA. Used Technologies: Wordpress, CSS3 & Adobe Xd",
      url: "https://finesthomeconstruction.com/",
      imageUrl: "finestImage",
      iconUrl: "finestIcon",
    },
  ];
  const [nameCurrent, setNameCurrent] = useState(projects[0].title);
  const [descripCurrent, setDescripCurrent] = useState(projects[0].description);
  const [urlCurrent, setUrlCurrent] = useState(projects[0].url);
  const [imageUrlCurrent, setImageUrlCurrent] = useState(projects[0].imageUrl);
  const [IconUrlCurrent, setIconUrlCurrent] = useState(projects[0].iconUrl);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(projects);
  }, []);
  function selectedProject(id) {
    // e.preventDefault(e);
    setNameCurrent(projects[id].title);
    setDescripCurrent(projects[id].description);
    setImageUrlCurrent(projects[id].imageUrl);
    setIconUrlCurrent(projects[id].iconUrl);
    setUrlCurrent(projects[id].url);
  }
  function hola() {
    alert("Hola");
  }

  // selectedProject();
  return (
    <div>
      <div className="portfolio">
        <img
          src={`../assets/projects/${IconUrlCurrent}.png`}
          className="background"
          alt="background"
        />
        <div className="wrapper">
          <div className="head-project">
            <div className="container-button">
              <div className="btn-see">
                <FaArrowRight className="me-3" />
                <a href={urlCurrent} target="_blank" rel="noopener noreferrer">
                  See project
                </a>
              </div>
            </div>
            <img src={logo} alt="" className="logo-footer jump" />

            <h1 className="name-project">{nameCurrent}</h1>
            <p className="description-project">{descripCurrent}</p>
          </div>
        </div>
      </div>
      <div className="container-sliders">
        <h3>Last projects</h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          slidesPerGroup={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            100: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {items.map((indice) => (
            <SwiperSlide
              onClick={(e) => {
                e.preventDefault();
                selectedProject(indice.id);
              }}
            >
              <img
                className="slide-img"
                src={`../assets/projects/${projects[indice.id].imageUrl}.JPG`}
                alt="project-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer className="" />
    </div>
  );
}
