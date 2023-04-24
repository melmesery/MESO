import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiSocketdotio,
} from "react-icons/si";
import { Card, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import "../Styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      icon: <SiHtml5 />,
      name: "HTML",
      per: "85%",
    },
    {
      icon: <SiCss3 />,
      name: "CSS",
      per: "80%",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      per: "70%",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      per: "80%",
    },
    {
      icon: <SiReact />,
      name: "React",
      per: "60%",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
      per: "70%",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      per: "70%",
    },
    {
      icon: <SiGit />,
      name: "Git",
      per: "50%",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node JS",
      per: "80%",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
      per: "80%",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
      per: "80%",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      per: "60%",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
      per: "70%",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.io",
      per: "70%",
    },
  ];
  return (
    <section id="skills" className="skills">
      <Container>
            <Title title={"Technologies"} />
        <Row className="skills-row d-flex align-items-center justify-content-center text-center flex-wrap-reverse">
          <Col md={{ span: 10 }}>
            <Row className='d-flex justify-content-center'>
              {skills.map((skill) => {
                return (
                  <Col md={{ span: 3 }} xs={{ span: 4 }}>
                    <Card className="skill-card mb-3 p-1 rounded-2">
                      <p className="icon">{skill.icon}</p>
                      <p className="name fw-bold mb-0 fs-4">{skill.name}</p>
                      <p className="percent mb-0 mt-2 fw-bold">{skill.per}</p>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
