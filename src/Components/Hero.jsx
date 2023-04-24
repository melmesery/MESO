import { Container } from "react-bootstrap";
import Header from "./Header";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Container>
        <Header />
        <p className="mb-0 opacity-75">Full-Stack Developer</p>
        <h1>Mohamed El-Mesery</h1>
        <p className="des my-4">
          High level experience in web design and development knowledege,
          producing quality work.
        </p>
        <a
          href="mailto:melmesery@outlook.com"
          target={"_blank"}
          rel={"noreferrer"}
          className="contact-me fw-bold mb-0 rounded-0"
        >
          Contact Me
        </a>
      </Container>
    </section>
  );
};

export default Hero;
