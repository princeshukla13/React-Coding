import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center py-5">
      <h1>Welcome to MyApp</h1>
      <p className="text-muted">
        Build amazing web applications with cutting-edge technology. We provide
        solutions that help businesses grow and innovate.
      </p>
    </Container>
  );
}

export default Home;
