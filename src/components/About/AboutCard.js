import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I’m <span className="purple">Mohit</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I’m currently pursuing{" "}
            <span className="purple">
              B.Tech in Computer Science Engineering
            </span>{" "}
            at <span className="purple">SNU Kolkata</span>.
            <br />
            I’m passionate about <span className="purple">Web Development</span>
            , <span className="purple">Cyber Security</span>,{" "}
            <span className="purple">IoT</span> and{" "}
            <span className="purple">Blockchain</span>.
            <br />
            <br />
            Besides coding, I enjoy doing things that keep me active and
            motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech & Building Projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out & Staying Fit 🏋️‍♂️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream big, code bigger!"{" "}
          </p>
          <footer className="blockquote-footer">Mohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
