import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Store from "../../Assets/Projects/Store.png";
import juet from "../../Assets/Projects/juet-event.png";
import blockchain from "../../Assets/Projects/blockchain.png"

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
              imgPath={Store}
              isBlog={false}
              title="Chatify"
              description="An advanced e-commerce website built with React.js, Material-UI, and Nodejs. Features include real-time product updates, secure payment processing, and user-friendly navigation. The platform supports a comprehensive shopping experience with functionalities like product reviews, image galleries, and wish lists. Additionally, it offers personalized recommendations, customer accounts, and order tracking."
              ghLink="https://github.com/Moksh45/ECOMMERCE-WEBSITE"
              demoLink="https://maa-provision-store.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={juet}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A comprehensive college event manager web app built with React.js, Material-UI, and Nodejs. This platform allows users to seamlessly create, manage, and promote college events. Key features include event registration, real-time updates, attendee management, and push notifications. The app also supports image uploads, social media integration, and feedback collection to ensure a smooth and engaging event experience."
              ghLink="https://github.com/Moksh45/JUET-Event-Hub"
              demoLink="https://juet-event-hub.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Editor.io"
              description="A blockchain-based certificate generation and verification system built with JS, Solidity, HTML, and CSS. It ensures secure and tamper-proof certification. The system allows institutions to issue certificates, while recipients can verify their authenticity. Additional features include a user-friendly interface, transaction history, and integration with existing databases. It offers scalability and security for various certification needs."
              ghLink="https://github.com/Moksh45/DOCHUB-trial-version-2"
              demoLink="https://dochub-trial-version-2.vercel.app/"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
