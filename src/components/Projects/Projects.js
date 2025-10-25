import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SyncCode from "../../Assets/Projects/SyncCode.png"
import PredictoStock from "../../Assets/Projects/PredictoStock.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SyncCode}
              isBlog={false}
              title="SyncCode"
              description="Personal Room to code together and securly share files "
              ghLink="https://github.com/MohitThakur2552/SyncCode/tree/master"
              demoLink="https://synccode-1v37.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PredictoStock}
              isBlog={false}
              title="PredictoStock"
              description="(Group Project) ML based inventry forcasting and management system "
              ghLink="https://github.com/ahanadasgupta26/Invent-O-Predict"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
