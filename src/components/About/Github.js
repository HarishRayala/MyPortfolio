import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <p align="center" >
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=harishrayala&theme=vision-friendly-dark"
          alt="githubstats"
          width="100%"
          id="githubstats"
        />
        <br />
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=harishrayala&show_icons=true&locale=en&theme=vision-friendly-dark"
          alt="githubstats"
          width="100%"
          id="githubstats"
        />
      </p>
      <GitHubCalendar
        username="HarishRayala"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
