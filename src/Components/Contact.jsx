import { Card, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
import {
  FaGraduationCap,
  FaLandmark,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";

import "../Styles/Contact.css";

const Contact = () => {
  const social = [
    {
      icon: <RiFacebookFill />,
      link: "https://www.facebook.com/e.mesery/",
    },
    {
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/mhmd_elmesery/",
    },
    {
      icon: <RiWhatsappFill />,
      link: "http://wa.link/0fabvv",
    },
    {
      icon: <RiGithubFill />,
      link: "https://github.com/melmesery/",
    },
    {
      icon: <RiLinkedinFill />,
      link: "https://www.linkedin.com/in/melmesery/",
    },
  ];

  const details = [
    {
      open: <FaUserAlt />,
      des: "Mohamed El-Desouky El-Mesery",
    },
    {
      open: <FaRegCalendarAlt />,
      des: "09/11/1994",
    },
    {
      open: <FaMapMarkerAlt />,
      des: "Al-Mahallah Al-Kubra, Egypt 31962",
    },
    {
      open: <FaGraduationCap />,
      des: "Bachelor of Communication Engineering",
    },
    {
      open: <FaLandmark />,
      des: "Canadian International College",
    },
  ];

  return (
    <section id="contact" className="contact">
      <Container>
        <Title title={"Contact"} />
        <Row className=" contact-row justify-content-center flex-wrap-reverse">
          <Col md={{ span: 4 }}>
            <div className="contact-cards gap-3">
              <Card className="contact-card p-2">
                <h3 className="fw-bold">Email</h3>
                <div className="about-underline mb-4 rounded-5" />
                <p className="mb-0">melmesery@outlook.com</p>
                <p className="mb-0">mohamed_eldesouky@cic-cairo.com</p>
              </Card>
              <Card className="contact-card p-2">
                <h3 className="fw-bold">Phone</h3>
                <div className="about-underline mb-4 rounded-5" />
                <p className="mb-0">(+20) 127-027-8442</p>
                <p className="mb-0">(040) 2130092</p>
              </Card>
              <div className="d-flex gap-1 justify-content-center mt-3">
                {social.map((social) => {
                  return (
                    <div className="social-container">
                      <a
                        href={social.link}
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="social-icon"
                      >
                        {social.icon}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col md={{ span: 4 }} className='cv-info'>
            {details.map((detail) => {
              return (
                <div className="info-card d-flex gap-3 align-items-center mb-2">
                  <span>{detail.open}</span>
                  <p className="mb-0">{detail.des}</p>
                </div>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1vEDqfBDgwcF_LGgcU-blu3Cq4wfVxty8/view?usp=share_link"
              target={"_blank"}
              rel={"noreferrer"}
              className="cv fw-bold mb-0 rounded-0"
            >
              Download CV
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
