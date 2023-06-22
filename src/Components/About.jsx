import "../Styles/About.css";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row className="about-row d-flex align-items-center justify-content-center">
          <Col md= {{span: 9}} xs={{ span: 11 }}>
            <a
              href="https://drive.google.com/file/d/1-JYizt7a6Erg8iWZtY8GL7nO-SemVAkz/view?usp=sharing"
              target="_blank"
              className="cv"
            >
              Download CV
            </a>
            <p className="about-me">
              Hi, my name is Mohamed Elmesery. I'm a Full-stack developer based
              in Egypt. I describe myself as a passionate developer who loves
              coding, and web developing.Aside from my job, I like to create and
              contribute to open source projects. That helps me to learn a ton
              of new stuff, grow as a developer and support other open source
              projects. And if you want to reach out on{" "}
              <a
                className="about-me_span"
                href="https://www.linkedin.com/in/melmesery/"
                target="_blank"
              >
                LinkedIn
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
