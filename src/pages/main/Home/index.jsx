import React, { useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import CardMovieNow from "../../../components/Card/MovieNow";
import CardMovieUpcoming from "../../../components/Card/MovieUpcoming";
import Footer from "../../../components/Footer";
import GroupMovie from "../../../assets/img/group movie.png";
import "./index.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Navbar />
      <Container fluid className="homePage">
        <Row className="jumbotron">
          <Col sm={12} md={6} className="jumbotron__quote">
            <p>Nearest Cinema, Newest Movie,</p>
            <h1>Find out now!</h1>
          </Col>
          <Col sm={12} md={6} className="jumbotron__image">
            <img src={GroupMovie} alt="" className="jumbotron__image" />
          </Col>
        </Row>
        <Row className="movie__now">
          <div className="movie__now--title">
            <h4>Now Showing</h4>
            <h6>view all</h6>
          </div>
          <div className="row">
            <div className="card__movie d-flex">
              <CardMovieNow />
            </div>
          </div>
        </Row>
        <Row className="movie__upcoming">
          <div className="movie__upcoming--title">
            <h4>Upcoming Movies</h4>
            <h6>view all</h6>
          </div>
          <div className="row">
            <div className="card__movie">
              <CardMovieUpcoming />
            </div>
          </div>
        </Row>
        <Row>
          <div className="moviegoers">
            <h4>Be the vanguard of the</h4>
            <h1>Moviegoers</h1>
            <div className="moviegoers__join">
              <Form.Control
                type="text"
                placeholder="Type your email"
                className="moviegoers__join--form"
              />
              <Button variant="primary" className="moviegoers__join--button">
                Join now
              </Button>{" "}
            </div>
            <div className="moviegoers__join--caption">
              <p>
                By joining you as a Tickitz member, <br />
                we will always send you the latest updates via email .
              </p>
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
