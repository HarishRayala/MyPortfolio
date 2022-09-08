import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myfitnesspal from "../../Assets/Projects/myfitnesspal.png";
import bigbasket from "../../Assets/Projects/bigbasket.png";
import bluefly from "../../Assets/Projects/bluefly.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project" >
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
              imgPath={bigbasket}
              isBlog={false}
              title="Bigbasket"
              description="Bigbasket is an Online Grocery Application with different Categories like Fruits&Vegetables, Beverages, Kitchen, Garden & Pets, etc.,It is a Collaborative Project. We build this Application using"
              techstack="Tech Stack : Html, CSS, JavaScript"
              link="https://github.com/rohaantelangur/Masai_Project_1_BigBasket"
              deploylink="https://delicate-flan-410bb9.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluefly}
              isBlog={false}
              title="BlueFly"
              description="Bluefly offers an e-commerce platform that sells designer apparel and accessories, household products and accessories at discounted prices. It is a Collaborative Project We build this Application using "
              techstack="Tech Stack : Html, CSS, JavaScript, Json"
              link="https://github.com/SPinfluencers/BlueFly"
              deploylink="https://peaceful-gecko-56ebd8.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myfitnesspal}
              isBlog={false}
              title="MyFitnesspal"
              description="MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. It is an Individual project So I build this project by using "
              techstack="Tech Stack : Html, CSS, JavaScript, React-Js, Chakra-ui"
              link="https://github.com/HarishRayala/sedate-bee-1602"
              deploylink="https://myfitnesspal-seven.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
