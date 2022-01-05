import React from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import CineOne from "../../assets/img/cineone.png";
import Ebv from "../../assets/img/ebuid.png";
import Hiflix from "../../assets/img/hiflix.png";
import "./index.css";

const ListScheduleAdmin = () => {
  return (
    <>
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
              <Card className="showtime__schedule">
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
              <Card className="showtime__schedule">
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
              <Card className="showtime__schedule">
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
              <Card className="showtime__schedule">
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
              <Card className="showtime__schedule">
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
              <Card className="showtime__schedule">
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
    </>
  );
};

export default ListScheduleAdmin;
