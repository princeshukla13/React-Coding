import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-muted text-center">
        Welcome to MyApp! We are committed to delivering high-quality solutions
        to help businesses and individuals succeed in the digital world.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>
            Our mission is to create user-friendly, innovative, and efficient
            solutions that enhance the digital experience of our users.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Why Choose Us?</h4>
          <ul>
            <li>Experienced and passionate team</li>
            <li>Cutting-edge technology</li>
            <li>Customer-centric approach</li>
            <li>High-quality and scalable solutions</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default About;
