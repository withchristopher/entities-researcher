import React from "react";
import { Container, Jumbotron, Button, Image } from "react-bootstrap";
import image from "../assets/movies.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Find All Entities</h1>
        </Container>
      </Jumbotron>

      <Container className="bg-light py-5 px-5 ">
        <h2 className="text-center lander">Find all entities</h2>
        <h2 className="text-center lander">
          using a simple input-output NLP engine to find all named entities
        </h2>
        {/* <Image className="my-2" width="100%" src={image} /> */}
        <div className="d-flex justify-content-around">
          <Link to={"/submit"} className="nav-link">
            <Button className="my-2 btn-success">Submit text</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Home;
