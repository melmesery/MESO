import "../Styles/About.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import profile from "../Images/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Title title={"About Me"} />
        <Row className="about-row d-flex align-items-center justify-content-center">
          <Col xs={{ span: 10 }}>
            <img src={profile} alt="Mohamed Elmesery" className='profile' />
            <p className="about-me">
              I'm a Full-stack developer based in Egypt. I describe myself as a
              passionate developer who loves coding, open source, and the web
              platform. <br className="next"/> Aside from my job, I like to create and contribute to
              open source projects. That helps me to learn a ton of new stuff,
              grow as a developer and support other open source projects.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
