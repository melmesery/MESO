import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/RecentWork.css";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <section className="recent">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={{ span: 9 }} xs={{ span: 11 }}>
            <Link to="/portfolio" className="my_work">
              Take a look at my work here
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecentWork;
