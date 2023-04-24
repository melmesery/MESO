import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import recent from "../Images/project_5.png";
import "../Styles/RecentWork.css";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <section className="recent">
      <Title title={"Recent Work"} />
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={{ span: 10 }} >
            <div className="recent-container">
              <img src={recent} alt="" className="recent-img" />
              <div className="about-project animate__animated animate__fadeInUp">
                <h2 className="project-name">Sunnyside</h2>
                <div className="project-btns">
                  <button>
                    <a
                      href="https://github.com/melmesery/sunnyside"
                      target={"_blank"}
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://melmesery.github.io/sunnyside/"
                      target={"_blank"}
                    >
                      Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <button className="visit"><Link to="/portfolio">See My Portfolio</Link></button>
      </Container>
    </section>
  );
};

export default RecentWork;
