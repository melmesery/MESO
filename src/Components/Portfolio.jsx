import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import project_1 from "../Images/1.png";
import project_2 from "../Images/2.png";
import project_3 from "../Images/3.png";
import project_4 from "../Images/4.png";
import project_5 from "../Images/5.png";
import project_6 from "../Images/6.png";
import project_7 from "../Images/7.png";
import project_8 from "../Images/8.png";
import "../Styles/Portfolio.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      name: "UpVote App",
      des: "Social photo app interaction",
      tech: "Node.js | Express.js | React.js",
      img: project_1,
      github: "https://github.com/melmesery/UP_VOTE_API",
      live: "https://melmesery.github.io/MERN_UP_VOTE",
    },
    {
      name: "CRUD System",
      des: "CRUD system to manage and manipulate data in a structured manner",
      tech: "Node.js | Express.js | React.js",
      img: project_2,
      github: "https://github.com/melmesery/CRUD_API",
      live: "http://melmesery.github.io/MERN_CRUD/",
    },
    {
      name: "Chat App",
      des: "Real time chat application",
      tech: "Node.js | Socket.io | React.js ",
      img: project_3,
      github: "https://github.com/melmesery/CRUD_API",
      live: "http://melmesery.github.io/MERN_CRUD/",
    },
    {
      name: "Forecast App",
      des: "Check daily weather condition by this simple app",
      tech: "React.js | API",
      img: project_4,
      github: "https://github.com/melmesery/Forecast",
      live: "https://melmesery.github.io/Forecast/",
    },
    {
      name: "Watch Plus",
      des: "Streaming platform to watch movies & tv shows.",
      tech: "React.js | API",
      img: project_5,
      github: "https://github.com/melmesery/Cinema",
      live: "https://melmesery.github.io/Cinema/",
    },
    {
      name: "Car Agency",
      des: "Template for cars renting & selling agency",
      tech: "HTML | CSS | Bootstrap",
      img: project_6,
      github: "https://github.com/melmesery/Cars-Dealership",
      live: "https://github.com/melmesery/Cars-Dealership",
    },
    {
      name: "Renting",
      des: "Rent houses any where in the world",
      tech: "HTML | CSS | Bootstrap",
      img: project_7,
      github: "https://github.com/melmesery/Renting",
      live: "https://melmesery.github.io/Renting/",
    },
    {
      name: "Sunnyside",
      des: "Simple bootstrap design",
      tech: "Bootstrap",
      img: project_8,
      github: "",
      live: "",
    },
  ];

  return (
    <section id="portfolio">
      <Container className="portfolio">
        <Link to="/" className="back_home">
          HOME
        </Link>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={{ span: 9 }} xs={{ span: 11 }}>
            {projects.map((project, index) => {
              return (
                <Row className="project_card d-flex align-items-center justify-content-center">
                  <Col md={{ span: 6 }}>
                    <p className="project_name">{project.name}</p>
                    <mark className="project_des">{project.des}</mark>
                    <p className="project_tech">{project.tech}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      className="project_view"
                    >
                      Check on Github
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="project_view"
                    >
                      Or go live
                    </a>
                  </Col>
                  <Col md={{ span: 6 }}>
                    <div className="project_img-container">
                      <img src={project.img} alt="" className="project_img" />
                    </div>
                  </Col>
                </Row>
              );
            })}
            ;
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default Portfolio;
