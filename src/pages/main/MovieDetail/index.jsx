import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import EbvId from "../../../assets/img/ebuid.png";
import CineOne21 from "../../../assets/img/cineone.png";
import Hiflix from "../../../assets/img/hiflix.png";
import Movie from "../../../assets/img/Lionking.png";
import "./index.css";

class MovieDetail extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Row className="movieDetail">
            <Col md={3} sm={12}>
              <img src={Movie} alt="" className="img-thumbnail" />
            </Col>
            <Col md={9} sm={12} className="movieDetail__desc">
              {" "}
              <h1>The Lion King</h1>
              <h6>Adventure, Slice of Life</h6>
              <div className="movieDetail__desc--section">
                <p>Release date</p>
                <h6>June 28, 2017</h6>
              </div>
              <div className="movieDetail__desc--section">
                <p>Duration</p>
                <h6>2 hours 13 minutes</h6>
              </div>
              <div className="movieDetail__desc--section">
                <p>Directed by</p>
                <h6>John Watts</h6>
              </div>
              <div className="movieDetail__desc--section">
                <p>Casts</p>
                <h6>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h6>
              </div>
            </Col>
          </Row>
          <Row className="movieSyn">
            <h5>Synopsis</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consectetur, molestias
              tempore assumenda nisi maxime magnam architecto sequi, iste reiciendis sit accusantium
              nemo corporis voluptate ex facere. Odit, quae quis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Enim maiores veritatis voluptas natus est aliquid
              dolores reiciendis ullam labore. Voluptatum dolorum, ex a harum ullam dignissimos
              ratione saepe corrupti delectus! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.
            </p>
          </Row>
          <Row className="showtime">
            <h4>Showtimes and Tickets</h4>
            <div className="showtime__filter">
              {" "}
              <input type="date" className="form-control" value="2020-07-21" />
              <select className="form-select" aria-label="Default select example">
                <option selected>Jakarta</option>
                <option value="1">Bandung</option>
                <option value="2">Semarang</option>
                <option value="3">Bogor</option>
              </select>
              {/* <Form.Control type="date" name="duedate" placeholder="Due date" />
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select> */}
            </div>
          </Row>
          <Row xs={1} sm={1} md={3}>
            <Col>
              <Card class="showtime__schedule">
                <Row>
                  <Col>
                    {" "}
                    <Card.Img variant="top" src={EbvId} className="showtime__schedule--image" />
                  </Col>
                  <Col className="showtime__schedule--location">
                    <h4>ebv.id</h4>
                    <p>Whatever street No.12, South Purwokerto</p>
                  </Col>
                </Row>
                <hr />
                <Card.Body>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <div className="showtime__schedule--ticket">
                    <div className="showtime__schedule--ticket__info">
                      <h5>Price</h5>
                    </div>
                    <div className="showtime__schedule--ticket__price">
                      <h5>$10.00/seat</h5>
                    </div>
                  </div>
                  <Button
                    as="input"
                    type="submit"
                    value="Book now"
                    className="showtime__schedule--book"
                  />{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card class="showtime__schedule">
                <Row>
                  <Col>
                    {" "}
                    <Card.Img variant="top" src={CineOne21} className="showtime__schedule--image" />
                  </Col>
                  <Col className="showtime__schedule--location">
                    <h4>ebv.id</h4>
                    <p>Whatever street No.12, South Purwokerto</p>
                  </Col>
                </Row>
                <hr />
                <Card.Body>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <div className="showtime__schedule--ticket">
                    <div className="showtime__schedule--ticket__info">
                      <h5>Price</h5>
                    </div>
                    <div className="showtime__schedule--ticket__price">
                      <h5>$10.00/seat</h5>
                    </div>
                  </div>
                  <Button
                    as="input"
                    type="submit"
                    value="Book now"
                    className="showtime__schedule--book"
                  />{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card class="showtime__schedule">
                <Row>
                  <Col>
                    {" "}
                    <Card.Img variant="top" src={Hiflix} className="showtime__schedule--image" />
                  </Col>
                  <Col className="showtime__schedule--location">
                    <h4>ebv.id</h4>
                    <p>Whatever street No.12, South Purwokerto</p>
                  </Col>
                </Row>
                <hr />
                <Card.Body>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <Button variant="light" size="sm" className="showtime__schedule--time">
                    10:00am{" "}
                  </Button>
                  <div className="showtime__schedule--ticket">
                    <div className="showtime__schedule--ticket__info">
                      <h5>Price</h5>
                    </div>
                    <div className="showtime__schedule--ticket__price">
                      <h5>$10.00/seat</h5>
                    </div>
                  </div>
                  <Button
                    as="input"
                    type="submit"
                    value="Book now"
                    className="showtime__schedule--book"
                  />{" "}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="page">
              {" "}
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
