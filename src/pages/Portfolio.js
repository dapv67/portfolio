import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import logo from "../imgs/logo.png";
import "../Global.css";
import Nav from "../components/Nav";

import { FaArrowRight } from "react-icons/fa";
// https://finesthomeconstruction.com/

// -------------- Swiper imports ------------

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
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
        'Ecommerce "Dulceria La Tentación", sends Mexican sweets from Chicago, USA to the whole world, here I designed and developed the brand`s ecommerce.',
      url: "https://dulcerialatentacion.com/",
      stack: ["Wordpress", "Woocommerce", "CSS3", "Adobe Xd"],
      imageUrl: "dulceria",
      iconUrl: "dulceria",
    },
    {
      id: 1,
      title: "Design and development: Begoapp.com",
      description:
        "Bego Project is a web app to estimate jobs and send custom quotes to customers via email & Invoice generator. Modules: Invoices, Estimates, Clients & Items.",
      url: "#",
      stack: [
        "Mongodb",
        "Expressjs",
        "Reactjs",
        "Nodejs",
        "Boostrap5",
        "CSS3",
        "Adobe Xd",
      ],
      imageUrl: "bego3",
      iconUrl: "bego",
    },
    {
      id: 2,
      title: "Design & development: Markstory agency website",
      description:
        "Markstory Project is the website of a Technology development and marketing agency in Chicago, USA.",
      url: "https://dapv67.github.io/markstory.github.io/",
      stack: ["JavaScript", "CSS3", "HTML5", "Adobe Xd"],
      imageUrl: "markstory",
      iconUrl: "markstory",
    },
    {
      id: 3,
      title: "Design & managment: Logistics system",
      description:
        "3 components: Web system that controls the operation of a delivery company, API for app-system delivery & Android mobile app for delivery.",
      url: "http://logisticexpressdelsur.com/login",
      stack: [
        "Reactjs",
        "Expressjs",
        "Nodejs",
        "Bulma",
        "CSS3",
        "Adobe Xd",
        "Scrum methodology",
      ],
      imageUrl: "logistic2",
      iconUrl: "logistic",
    },

    {
      id: 4,
      title: "Design & development: Proensi.com",
      description:
        "Proensi.com Project is the new website of a specialist company and leader in the industrial and engineering field in Mexico.",
      url: "https://www.proensi.com.mx/",
      stack: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap5",
        "jQuery",
        "Adobe Xd",
      ],
      imageUrl: "proensi",
      iconUrl: "proensi",
    },
    {
      id: 5,
      title: "Design & development: Central Factory App",
      description:
        "Central Factory SaaS Web system that helps to control the processes of a factory: Generates the weekly production planning, Alerts of maximum and minimum inventory, Shipment tracking, Customer Agenda, History of inventory inputs and outputs.",
      url: "https://dapv67.github.io/central-factory/",
      stack: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap5",
        "Datatables",
        "Chartjs",
        "jQuery",
        "Adobe Xd",
      ],
      imageUrl: "factory",
      iconUrl: "factory",
    },
    {
      id: 6,
      title: "Design and development: Personal/Portfolio website",
      description:
        "Personal/Portfolio Site Project. It is my personal website where I show how I can help you and how you can contact me to work together.",
      url: "https://dapv67.github.io/markstory.github.io/",
      stack: ["Reactjs", "Nodejs", "Boostrap5", "CSS3", "Adobe Xd"],
      imageUrl: "personal",
      iconUrl: "personal",
    },
    {
      id: 7,
      title: "Design and development: Finest Construction website",
      description: "Website of a construction firm in Chicago, USA. ",
      url: "https://finesthomeconstruction.com/",
      stack: ["Wordpress", "CSS3", "Adobe Xd"],
      imageUrl: "finestImage",
      iconUrl: "finestIcon",
    },
  ];
  const [nameCurrent, setNameCurrent] = useState(projects[0].title);
  const [descripCurrent, setDescripCurrent] = useState(projects[0].description);
  const [urlCurrent, setUrlCurrent] = useState(projects[0].url);
  const [stack, setStack] = useState(projects[0].stack);
  const [IconUrlCurrent, setIconUrlCurrent] = useState(projects[0].iconUrl);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(projects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function selectedProject(id) {
    setNameCurrent(projects[id].title);
    setDescripCurrent(projects[id].description);
    setIconUrlCurrent(projects[id].iconUrl);
    setUrlCurrent(projects[id].url);
    setStack(projects[id].stack);
  }

  return (
    <div className="portfolio-background">
      <div className="nav-portfolio">
        <Nav />
      </div>
      <div className="portfolio">
        <img
          src={`../assets/projects/${IconUrlCurrent}.png`}
          loading="lazy"
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
            <img
              src={logo}
              alt="project-img"
              loading="lazy"
              className="logo-footer jump"
            />

            <h1 className="name-project">{nameCurrent}</h1>
            <p className="description-project">{descripCurrent}</p>
            <div className="container-stack">
              <strong>Stack tech: </strong>
              {stack.map((item) => {
                return <div className="item-stack">{item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container-sliders">
        <h3>Salients projects </h3>
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
