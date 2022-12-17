import React from "react";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import project_1 from "../Images/project_1.png";
import project_2 from "../Images/project_2.png";
import project_3 from "../Images/project_3.png";
import project_4 from "../Images/project_4.png";
import project_5 from "../Images/project_5.png";
import project_6 from "../Images/project_6.png";
import project_7 from "../Images/project_7.png";
import "../Styles/Portfolio.css";

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
      name: "Tranning.com",
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
  ];
  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <Title title={"Portfolio"} />
        <Row className="portfolio-row d-flex align-items-center justify-content-center">
          <Col md={{ span: 10 }} xs={{ span: 12 }}>
            <Carousel className="carousel">
              {projects.map((project) => {
                return (
                  <Carousel.Item>
                    <div>
                      <img
                        className="d-block img-fluid"
                        src={project.img}
                        alt="First slide"
                      />
                    </div>
                    <div className="caption">
                      <h3 className="mb-3 fw-bold">{project.name}</h3>
                      <p className="caption-des">{project.des}</p>
                      <div className="portfolio-btns">
                        <button>
                          <a
                            href={project.github}
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            Github
                          </a>
                        </button>
                        <button>
                          <a
                            href={project.live}
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            Live
                          </a>
                        </button>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
