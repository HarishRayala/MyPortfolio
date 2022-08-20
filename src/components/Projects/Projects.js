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
              description="Bigbasket is an Online Grocery Application with different Categories like Fruits&Vegetables, Beverages, Kitchen, Garden & Pets, etc.,It is a Collaborative Project. We build this Application using Html, CSS, Javascript"
              link="https://github.com/rohaantelangur/Masai_Project_1_BigBasket"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluefly}
              isBlog={false}
              title="BlueFly"
              description="Bluefly offers an e-commerce platform that sells designer apparel and accessories, household products and accessories at discounted prices. It is a Collaborative Project We build this Application using Html,CSS,Javascript"
              link="https://github.com/SPinfluencers/BlueFly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myfitnesspal}
              isBlog={false}
              title="MyFitnesspal"
              description="MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. It is an Individual project So I build this project by using React-Js, Javascript, Html, VanillaCSS and Chakra-UI "
              link="https://github.com/HarishRayala/sedate-bee-1602"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
