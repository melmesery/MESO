import "../Styles/Header.css";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { ImMenu } from "react-icons/im";
import { MdAccountCircle, MdContactPage, MdHome, MdMiscellaneousServices, MdOutlineFormatListNumbered, MdPermMedia } from "react-icons/md";

const Header = () => {
  const showMenu = () => {
    document.querySelector(".mobile-nav").classList.add("show");
  };

  const hideMenu = () => {
    document.querySelector(".mobile-nav").classList.remove("show");
  };
  return (
    <header className="header">
      <Container>
        <span
          className="open"
          onClick={() => {
            showMenu();
          }}
        >
          <ImMenu />
        </span>

        <div className="main-nav gap-4">
          <HashLink to="#about">About</HashLink>
          <HashLink to="#skills">Skills</HashLink>
          <HashLink to="#portfolio">Portfolio</HashLink>
          <HashLink to="#services">Services</HashLink>
          <HashLink to="#contact">Contact</HashLink>
        </div>

        <div
          className="mobile-nav"
          onClick={() => {
            hideMenu();
          }}
        >
          <span
            className="close"
            onClick={() => {
              hideMenu();
            }}
          >
            <ImMenu />
          </span>
          <div className="nav-section d-flex gap-3 mt-5">
            <span><MdHome /></span>
            <HashLink to="#hero">Home</HashLink>
          </div>
          <div className="nav-section d-flex gap-3">
            <span><MdAccountCircle /></span>
            <HashLink to="#about">About</HashLink>
          </div>
          <div className="nav-section d-flex gap-3">
            <span><MdOutlineFormatListNumbered /></span>
            <HashLink to="#skills">Skills</HashLink>
          </div>
          <div className="nav-section d-flex gap-3">
            <span><MdPermMedia /></span>
            <HashLink to="#portfolio">Portfolio</HashLink>
          </div>
          <div className="nav-section d-flex gap-3">
            <span><MdMiscellaneousServices /></span>
            <HashLink to="#services">Services</HashLink>
          </div>
          <div className="nav-section d-flex gap-3">
            <span><MdContactPage /></span>
            <HashLink to="#contact">Contact</HashLink>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
