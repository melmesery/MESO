import { Container } from "react-bootstrap";
import "../Styles/Hero.css";
import profile from "../Images/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Container>
        <div className="profile_data">
          <p className="mb-0">Hello, I'm</p>
          <h1 className="mb-0">Mohamed</h1>
          <img
            src={profile}
            alt="mohamed elmesery"
            className="profile animate__animated animate__fadeInUp"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
