import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Skills.css"; 

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Container> 
        <Row className="skills-row d-flex align-items-center justify-content-center text-center flex-wrap-reverse">
          <Col md={{ span: 9 }} xs={{span: 11}}>
            <div className="skill-card">
              <p className="skills_tools mb-0">
                I'm have a great experience working with these technologies &
                tools <span className="tools_span">HTML</span>,{" "}
                <span className="tools_span">CSS</span>,{" "}
                <span className="tools_span">Bootstrap</span>,{" "}
                <span className="tools_span">Javascript</span>,{" "}
                <span className="tools_span">React.js</span>,{" "}
                <span className="tools_span">Redux</span>,{" "}
                <span className="tools_span">Node.js</span>,{" "}
                <span className="tools_span">Express.js</span>,{" "}
                <span className="tools_span">MongoDB</span>,{" "}
                <span className="tools_span">MySql</span>,{" "}
                <span className="tools_span">GraphQL</span>,{" "}
                <span className="tools_span">Socket.io</span>,{" "}
                <span className="tools_span">Docker</span>,{" "}
                <span className="tools_span">Github</span> &{" "}
                <span className="tools_span">Git</span>.
              </p>
            </div> 
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
