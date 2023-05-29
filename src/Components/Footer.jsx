import React from "react";
import "../Styles/Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={{ span: 9 }} xs={{ span: 11 }}>
            <p className="mb-0">
              Want to get in touch and talk about one of my projects,
              opportunities, or just feel like chatting?
            </p>
            <p className="mb-0">Feel free to email me: melmesery@outlook.com</p>
            <p className="mb-0">
              Check me out on{" "}
              <a href="https://github.com/melmesery/" target="_blank">
                Github
              </a>
            </p>
            <p className="mb-0">
              For urgents{" "}
              <a href="https://wa.me/201270278442" target="_blank">
                Whatsapp
              </a>
            </p>
            <p className="mb-0">
              Follow me here{" "}
              <a href="https://www.facebook.com/e.mesery/" target="_blank">
                Facebook
              </a>{" "}
              <a
                href="https://www.instagram.com/mhmd_elmesery/"
                target="_blank"
              >
                Instagram
              </a>
            </p>
            <p className="mb-0">
              And reach me out on{" "}
              <a href="https://www.linkedin.com/in/melmesery/" target="_blank">
                LinkedIn
              </a>
            </p>
            <p>All Rights Reserved &copy; Mohamed El-Mesery</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
