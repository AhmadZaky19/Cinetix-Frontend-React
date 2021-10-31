import React from "react";
import { Container, Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import NavAdmin from "../../../components/NavbarAdmin";
import Footer from "../../../components/Footer";
import LionKing from "../../../assets/img/Lionking.png";
import CineOne from "../../../assets/img/cineone.png";
import Ebv from "../../../assets/img/ebuid.png";
import Hiflix from "../../../assets/img/hiflix.png";
import "./index.css";

const ManageMovie = () => {
  return (
    <>
      <NavAdmin />
      <Container fluid className="schedule__admin--page">
        <Row className="schedule__admin">
          <h2 className="schedule__admin--h2">Form Schedule</h2>
          <Card>
            <Row>
              <Col md={3}>
                <Image src={LionKing} className="schedule__admin--img" thumbnail />
              </Col>
              <Col md={9}>
                <Form className="schedule__admin--form">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Movie</Form.Label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Select Movie</option>
                        <option value="Spider-man">Spider-man</option>
                        <option value="Batman">Batman</option>
                        <option value="Black Widow">Black Widow</option>
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Location</Form.Label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Select Location</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Semarang">Semarang</option>
                      </select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Col className="schedule__date--range">
                      <Form.Group
                        as={Col}
                        controlId="formGridZip"
                        className="schedule__date--start"
                      >
                        <Form.Label>Date Start</Form.Label>
                        <Form.Control />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Date End</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Release date</Form.Label>
                      <Col className="schedule__premiere">
                        <Button className="schedule__premiere--button">
                          <img src={Ebv} alt="" className="schedule__premiere__button--img" />
                        </Button>
                        <Button className="schedule__premiere--button">
                          <img src={Hiflix} alt="" className="schedule__premiere__button--img" />
                        </Button>
                        <Button className="schedule__premiere--button">
                          <img src={CineOne} alt="" className="schedule__premiere__button--img" />
                        </Button>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Time</Form.Label>
                      <Col>
                        <Button className="schedule__premiere--add mx-2">+</Button>
                        <Button className="schedule__premiere--time mx-2">07:00am</Button>
                        <Button className="schedule__premiere--time mx-2">07:00am</Button>
                        <Button className="schedule__premiere--time mx-2">07:00am</Button>
                        <Button className="schedule__premiere--time mx-2">07:00am</Button>
                        <Button className="schedule__premiere--time mx-2">07:00am</Button>
                      </Col>
                      {/* <Form.Control /> */}
                    </Form.Group>
                  </Row>
                </Form>
              </Col>
            </Row>
            <div className="schedule__admin--button">
              <Button className="schedule__admin__button--reset">Reset</Button>
              <Button className="schedule__admin__button--submit">Submit</Button>
            </div>
          </Card>
        </Row>
        <Row className="schedule__admin">
          <div className="schedule__admin--h2">
            <h2>Data Schedule</h2>
            <div className="schedule__admin--sort">
              <select
                className="form-select form-select-sm schedule__admin__sort--sort"
                aria-label=".form-select-sm example"
              >
                <option selected>Sort</option>
                <option value="cinema">Cinema</option>
                <option value="price">Price</option>
              </select>
              <select
                className="form-select form-select-sm schedule__admin__sort--sort"
                aria-label=".form-select-sm example"
              >
                <option selected>Location</option>
                <option value="cinema">Jakarta</option>
                <option value="price">Bandung</option>
                <option value="price">Semarang</option>
              </select>
              <select
                className="form-select form-select-sm schedule__admin__sort--sort"
                aria-label=".form-select-sm example"
              >
                <option selected>Movie</option>
                <option value="The Avengers">The Avengers</option>
                <option value="Batman">Batman</option>
              </select>
            </div>
          </div>
          <Card className="schedule__admin-section">
            <Row xs={1} sm={1} md={3}>
              <Col className="schedule__admin--card">
                <Card class="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img variant="top" src={Ebv} className="schedule__admin--image" />
                    </Col>
                    <Col className="schedule__admin--location">
                      <h4>ebv.id</h4>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <div className="schedule__admin--ticket">
                      <div className="schedule__admin--ticket__info">
                        <h5>Price</h5>
                      </div>
                      <div className="schedule__admin--ticket__price">
                        <h5>$10.00/seat</h5>
                      </div>
                    </div>
                    <div className="schedule__admin--button2">
                      <Button className="button2__update mx-2">Update</Button>
                      <Button className="button2__delete mx-2">Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="schedule__admin--card">
                <Card class="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img variant="top" src={CineOne} className="schedule__admin--image" />
                    </Col>
                    <Col className="schedule__admin--location">
                      <h4>ebv.id</h4>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <div className="schedule__admin--ticket">
                      <div className="schedule__admin--ticket__info">
                        <h5>Price</h5>
                      </div>
                      <div className="schedule__admin--ticket__price">
                        <h5>$10.00/seat</h5>
                      </div>
                    </div>
                    <div className="schedule__admin--button2">
                      <Button className="button2__update mx-2">Update</Button>
                      <Button className="button2__delete mx-2">Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="schedule__admin--card">
                <Card class="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img variant="top" src={Hiflix} className="schedule__admin--image" />
                    </Col>
                    <Col className="schedule__admin--location">
                      <h4>ebv.id</h4>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <div className="schedule__admin--ticket">
                      <div className="schedule__admin--ticket__info">
                        <h5>Price</h5>
                      </div>
                      <div className="schedule__admin--ticket__price">
                        <h5>$10.00/seat</h5>
                      </div>
                    </div>
                    <div className="schedule__admin--button2">
                      <Button className="button2__update mx-2">Update</Button>
                      <Button className="button2__delete mx-2">Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="schedule__admin--card">
                <Card class="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img variant="top" src={Hiflix} className="schedule__admin--image" />
                    </Col>
                    <Col className="schedule__admin--location">
                      <h4>ebv.id</h4>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <div className="schedule__admin--ticket">
                      <div className="schedule__admin--ticket__info">
                        <h5>Price</h5>
                      </div>
                      <div className="schedule__admin--ticket__price">
                        <h5>$10.00/seat</h5>
                      </div>
                    </div>
                    <div className="schedule__admin--button2">
                      <Button className="button2__update mx-2">Update</Button>
                      <Button className="button2__delete mx-2">Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="schedule__admin--card">
                <Card class="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img variant="top" src={Ebv} className="schedule__admin--image" />
                    </Col>
                    <Col className="schedule__admin--location">
                      <h4>ebv.id</h4>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <div className="schedule__admin--ticket">
                      <div className="schedule__admin--ticket__info">
                        <h5>Price</h5>
                      </div>
                      <div className="schedule__admin--ticket__price">
                        <h5>$10.00/seat</h5>
                      </div>
                    </div>
                    <div className="schedule__admin--button2">
                      <Button className="button2__update mx-2">Update</Button>
                      <Button className="button2__delete mx-2">Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="schedule__admin--card">
                <Card class="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img variant="top" src={CineOne} className="schedule__admin--image" />
                    </Col>
                    <Col className="schedule__admin--location">
                      <h4>ebv.id</h4>
                      <p>Whatever street No.12, South Purwokerto</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <Button variant="light" size="sm" className="schedule__admin--time mx-3">
                      10:00am{" "}
                    </Button>
                    <div className="schedule__admin--ticket">
                      <div className="schedule__admin--ticket__info">
                        <h5>Price</h5>
                      </div>
                      <div className="schedule__admin--ticket__price">
                        <h5>$10.00/seat</h5>
                      </div>
                    </div>
                    <div className="schedule__admin--button2">
                      <Button className="button2__update mx-2">Update</Button>
                      <Button className="button2__delete mx-2">Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ManageMovie;
