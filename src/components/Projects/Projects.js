import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evyai from "../../Assets/Projects/leaf.png";
import upalert from "../../Assets/Projects/emotion.png";
import galaxy from "../../Assets/Projects/codeEditor.png";
import supersell from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={supersell}
              isBlog={false}
              title="supersell"
              description="
              I worked on a React Express web application project where I utilized various technologies including ExpressJS, JavaScript, Material UI, React, Node.js, and MongoDB. I focused on implementing responsive design to ensure the application's usability across different devices. Additionally, I integrated Redux for state management and TypeScript for type-safe development. less
              https://superrealtor.app/reporting"
              ghLink="https://github.com/naziakiran894/"
              demoLink="https://github.com/naziakiran894/supersell-ui/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/naziakiran894/"
              demoLink="https://github.com/naziakiran894/whatsappclone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galaxy}
              isBlog={false}
              title="Galaxy Fight Club"
              description="Galaxy Fight Club is a groundbreaking project that brings together cutting-edge technology and imaginative storytelling to create a virtual arena where participants engage in epic battles from across the cosmos. This immersive experience is not just about combat; it's a fusion of advanced graphics, artificial intelligence, and narrative depth.
              https://galaxyfightclub.com/dashboard"
              ghLink="https://github.com/naziakiran894/"
              demoLink="https://github.com/naziakiran894/Evyai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evyai}
              isBlog={false}
              title="Evyai"
              description="evyAI is a LinkedIn AI Assistant that drafts personalized comments, smart posts, and DM replies that sound like you! 
              Are you looking for an intelligent AI LinkedIn Assistant to quickly help you get more engagement and clients on LinkedIn evyAI is a chrome extension powered by OpenAI and uses artificial intelligence (AI) to create more engaging and optimized content on LinkedIn, improve visibility, and generate networking opportunities.Think of our chatbot as the ChatGPT or Google Bard for LinkedIn."
              ghLink="https://github.com/naziakiran894/"
              demoLink="https://github.com/naziakiran894/supersell-ui/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sukuri protocol"
              description="We are building a toolkit to enable secure payment rails for businesses, creators, and users. Sukuri allows anybody to start accepting crypto payments and keeping track of profits,
              users, and other metrics easily. By utilizing account abstraction technology,
              Sukuri's goal is to make working with Web3 and crypto payments easier for the masses. We want to be the home for Smart Account modules that enable your business to do more."
              ghLink="https://github.com/naziakiran894/"
              demoLink="https://github.com/rameezraja2755/nazambProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={upalert}
              isBlog={false}
              title="evyais"
              description="
              evyais was born out of a simple yet powerful idea – to transform the way job seekers navigate the competitive landscape. Our mission is to empower individuals like you with cutting-edge technology that streamlines the job search process, making it more efficient, effective, and tailored to your unique skills and aspirations. Get realtime job alerts from Upwork, write AI Cover Letter, Win more jobs."
              ghLink="https://github.com/naziakiran894/"
              demoLink="https://github.com/rameezraja2755/nazambProject"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
