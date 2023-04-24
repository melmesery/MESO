import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="main-nav d-flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Works</Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
