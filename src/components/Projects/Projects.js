import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medifine from "../../Assets/Projects/medifine.png";
import patilkaki from "../../Assets/Projects/patilkaki.png";
import HeadPhone from "../../Assets/Projects/HeadPhone.png";
import LAW from "../../Assets/Projects/LAW.png";
import backend from "../../Assets/Projects/Backend.jpg";
import startup from "../../Assets/Projects/startup.png";

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
              imgPath={LAW}
              isBlog={false}
              title="AI-LAW"
              description="The Indian Law AI Website enables users to explore their legal rights through an AI-driven platform. Users can type law-related queries, and the system fetches relevant constitutional provisions and legal rights using API integration, providing accurate responses. The interface is user-friendly, making it accessible for individuals to gain legal insights without requiring deep legal knowledge. "
              ghLink="https://github.com/princekumar39/Indian-Law-AI-Website"
              demoLink="https://indian-law-ai.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startup}
              isBlog={false}
              title="Reasearch and Startup"
              description="The Innovate-Gujarat Website connects researchers, entrepreneurs, and funding agencies on a single platform, streamlining innovation, funding, and resource sharing. It fosters collaboration, supports startups, and enhances research development with AI features and verified profiles"
              ghLink="https://github.com/princekumar39/startup-research"
              demoLink="https://66e6768f9ec0ff38f56c4bc6--guileless-swan-cd05d8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HeadPhone}
              isBlog={false}
              title="HeadPhone"
              description="The Headphone Website showcases a dynamic platform built with HTML, CSS, and JavaScript, offering users an interactive experience. It features product displays, seamless navigation, and is designed to enhance user engagement for headphone enthusiasts"
              ghLink="https://github.com/princekumar39/Headphone_website"
              demoLink="https://princekumar39.github.io/Headphone_website/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medifine}
              isBlog={false}
              title="Medfine Hospital Site"
              description="The MediFine Hospital Website streamlines healthcare access by connecting patients with hospitals. Built with modern web technologies, it offers features like appointment booking, hospital searches, and patient record management for a seamless user experience."
              ghLink="https://github.com/princekumar39/Hospital_website_project"
              demoLink="https://www.linkedin.com/posts/prince-kumar-455284260_dear-connections-i-am-thrilled-to-share-activity-7160565563767894016-oUS0?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backend}
              isBlog={false}
              title="Backend Login-Page Code"
              description="The Login Page Backend for the project is built using Node.js with Express.js for handling routing and user authentication. It includes a secure login system with JWT (JSON Web Token) for session management. The backend validates user credentials against a MongoDB database using Mongoose. Upon successful authentication, a token is generated and sent to the client, allowing users to access protected routes."
              ghLink="https://github.com/princekumar39/backend_learning"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patilkaki}
              isBlog={false}
              title="Patilkaki"
              description="Patil Kaki is a traditional food delivery platform that brings the taste of authentic, homemade Maharashtrian snacks to your doorstep. It emphasizes quality, authenticity, and preserving regional culinary heritage."
              ghLink="https://github.com/princekumar39/patilkakiproject"
              demoLink="https://princekumarpatilkaki.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
