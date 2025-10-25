import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate{" "}
              <b className="purple">Computer Science Engineering student</b>{" "}
              who loves learning and building cool things with technology.
              <br />
              <br />
              I enjoy working with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Java, Node.js, and React.js{" "}
                </b>
              </i>
              — and I’m always excited to learn new tools and frameworks.
              <br />
              <br />
              My main interests include
              <i>
                <b className="purple">
                  {" "}
                  Web Development, Cyber Security, and IoT{" "}
                </b>
              </i>
              and I love turning ideas into functional digital experiences.
              <br />
              <br />
              Whenever possible, I enjoy building projects using{" "}
              <b className="purple">Node.js</b> for the backend and{" "}
              <b className="purple">React.js</b> for the frontend to bring
              creative ideas to life 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
