import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kolegia from "../../Assets/Projects/kolegia.png";
import rce from "../../Assets/Projects/rce.png";

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
              imgPath={kolegia}
              isBlog={false}
              title="Kolegia"
              description="Kolegia is an online and mobile application that may be accessed via a web app or an Android app. Kolegia is a platform for college communities to promote their stuff or belongings inside their campus fraternity. It enables users to trade their belongings or file theft or missing complaint about their goods on the platform. Every instance will be enlarged to all users, and the rest of the users will be alerted about the specific situation. Anyone with knowledge or information about that user can raise their hand and respond to the case, and the user will be informed. Users may be able to tag persons associated with that specific case, which will help to mainstreamthe issue and help to close the case."
              ghLink="https://github.com/thebeast1819/KOLEGIA"
              demoLink="kolegia-c3c1d.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rce}
              isBlog={false}
              title="Remote Code Excecutor"
              description="A Remote Code Executor, as the name suggests Is a Docker-based sandbox environment to run a code snippet. It will create a new file for each code input, execute it, delete the file and return the output. It supports major languages, i.e., C++, JavaScript and Python, and can be extended to other language support too. The work is under progress."
              ghLink="https://github.com/thebeast1819/RCE-Backend"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
