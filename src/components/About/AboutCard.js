import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prince Kumar </span>
            from <span className="purple"> Gaya, Bihar, India.</span>
            <br />
            I am currently 3rd year Student Of Indian Institute Of Information Technology Bhagalpur.
            <br />
            I am driven by an unyielding passion to create innovative solutions that inspire and empower others
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Teaching Maths, Science to Board Students.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Mind full of ideas🤞🏻, fingers full of code"{" "}
          </p>
          <footer className="blockquote-footer">Prince Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
