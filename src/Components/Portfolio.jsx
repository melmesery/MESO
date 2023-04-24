import React, { Fragment } from "react";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import project_1 from "../Images/project_1.png";
import project_2 from "../Images/project_2.png";
import project_3 from "../Images/project_3.png";
import project_4 from "../Images/project_4.png";
import project_5 from "../Images/project_5.png";
import project_6 from "../Images/project_6.png";
import project_7 from "../Images/project_7.png";
import project_8 from "../Images/project_8.png";
import "../Styles/Portfolio.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Portfolio = () => {
  const projects = [
    {
      name: "Sunnyside",
      des: "Simple bootstrap design",
      img: project_5,
      github: "https://github.com/melmesery/sunnyside",
      live: " https://melmesery.github.io/sunnyside/",
    },
    {
      name: "Watch Plus",
      des: "Streaming platform to watch movies & tv shows.",
      img: project_1,
      github: "https://github.com/melmesery/Cinema",
      live: "https://melmesery.github.io/Cinema/",
    },
    {
      name: "Training.com",
      des: "Ecommenrce to to sell sports tools.",
      img: project_2,
      github: "https://github.com/melmesery/Training",
      live: "https://melmesery.github.io/Training/",
    },
    {
      name: "Renting",
      des: "Rent houses any where in the world",
      img: project_3,
      github: "https://github.com/melmesery/Renting",
      live: "https://github.com/melmesery/Cars-Dealership",
    },
    {
      name: "Food Delivery",
      des: "Ecommerce for restaurent food delivery",
      img: project_4,
      github: "",
      live: "",
    },
    {
      name: "Car Agency",
      des: "Template for cars renting & selling agency",
      img: project_6,
      github: "https://github.com/melmesery/Cars-Dealership",
      live: "https://github.com/melmesery/Cars-Dealership",
    },
    {
      name: "CRUD App",
      des: "Template for cars renting & selling agency",
      img: project_7,
      github: "https://github.com/melmesery/Cars-Dealership",
      live: "https://github.com/melmesery/Cars-Dealership",
    },
    {
      name: "CRUD App",
      des: "Template for cars renting & selling agency",
      img: project_8,
      github: "https://github.com/melmesery/Cars-Dealership",
      live: "https://github.com/melmesery/Cars-Dealership",
    },
  ];

  const social = [
    {
      icon: <RiFacebookFill />,
      link: "https://www.facebook.com/e.mesery/",
    },
    {
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/mhmd_elmesery/",
    },
    {
      icon: <RiWhatsappFill />,
      link: "http://wa.link/0fabvv",
    },
    {
      icon: <RiGithubFill />,
      link: "https://github.com/melmesery/",
    },
    {
      icon: <RiLinkedinFill />,
      link: "https://www.linkedin.com/in/melmesery/",
    },
  ];

  return (
    <section id="portfolio">
      <Header />
      <Container className="portfolio">
        <Title title={"My Works"} />
        <Row className="portfolio-row d-flex align-items-center justify-content-center ">
          <Col xs={{ span: 10 }}>
            {projects.map((project) => {
              return (
                <div className="recent-container mb-5">
                  <img src={project.img} alt="" className="recent-img" />
                  <div className="about-project animate__animated animate__fadeInUp">
                    <h2 className="project-name">{project.name}</h2>
                    <div className="project-btns">
                      <button>
                        <a href={project.github} target={"_blank"}>
                          Github
                        </a>
                      </button>
                      <button>
                        <a href={project.live} target={"_blank"}>
                          Live
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <div className="d-flex gap-1 justify-content-center">
          {social.map((social) => {
            return (
              <div className="social-container">
                <a
                  href={social.link}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default Portfolio;
