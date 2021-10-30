import React from "react";
import { Container, Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import NavAdmin from "../../../components/NavbarAdmin";
import Footer from "../../../components/Footer";
import LionKing from "../../../assets/img/Lionking.png";
import "./index.css";

const ManageMovie = () => {
  return (
    <>
      <NavAdmin />
      <Container fluid className="movie__admin--page">
        <Row className="movie__admin">
          <h2 className="movie__admin--h2">Form Movie</h2>
          <Card>
            <Row>
              <Col md={3}>
                <Image src={LionKing} className="movie__admin--img" thumbnail />
              </Col>
              <Col md={9}>
                <Form className="movie__admin--form">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Movie Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Category</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Director</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Casts</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Release date</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Col className="movie__duration--time">
                      <Form.Group
                        as={Col}
                        controlId="formGridZip"
                        className="movie__duration--hour"
                      >
                        <Form.Label>Duration Hour</Form.Label>
                        <Form.Control />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Duration Minute</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Form>
                <Form.Group
                  className="mb-3 movie__duration--synopsis"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Synopsis</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Row>
            <div className="movie__admin--button">
              <Button className="movie__admin__button--reset">Reset</Button>
              <Button className="movie__admin__button--submit">Submit</Button>
            </div>
          </Card>
        </Row>
        <Row className="movie__admin">
          <div className="movie__admin--h2">
            <h2>Data Movie</h2>
            <div className="movie__admin--sort">
              <select
                className="form-select form-select-sm movie__admin__sort--sort"
                aria-label=".form-select-sm example"
              >
                <option selected>Sort</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input
                className="form-control form-control-sm movie__admin__sort--search"
                type="text"
                placeholder="Search Movie Name ..."
              />
            </div>
          </div>
          <Card className="movie__admin-section">
            <Row>
              <Card className="cardMovie__admin">
                <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
                <Card.Body className="cardMovie__admin--desc">
                  <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                  <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                  <Button variant="primary" className="cardMovie__admin--update">
                    Update
                  </Button>
                  <Button variant="primary" className="cardMovie__admin--delete">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              <Card className="cardMovie__admin">
                <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
                <Card.Body className="cardMovie__admin--desc">
                  <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                  <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                  <Button variant="primary" className="cardMovie__admin--update">
                    Update
                  </Button>
                  <Button variant="primary" className="cardMovie__admin--delete">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              <Card className="cardMovie__admin">
                <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
                <Card.Body className="cardMovie__admin--desc">
                  <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                  <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                  <Button variant="primary" className="cardMovie__admin--update">
                    Update
                  </Button>
                  <Button variant="primary" className="cardMovie__admin--delete">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              <Card className="cardMovie__admin">
                <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
                <Card.Body className="cardMovie__admin--desc">
                  <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                  <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                  <Button variant="primary" className="cardMovie__admin--update">
                    Update
                  </Button>
                  <Button variant="primary" className="cardMovie__admin--delete">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ManageMovie;
