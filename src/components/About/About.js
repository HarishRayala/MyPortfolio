import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import pdf from "../../Assets/../Assets/Harishrayala fw17_0700.pdf";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1> */}
            {/* <Aboutcard /> */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "-10px", paddingBottom: "50px", }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
