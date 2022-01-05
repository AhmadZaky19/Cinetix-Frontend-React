import React from "react";
import { Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import LionKing from "../../../assets/img/Lionking.png";
import CineOne from "../../../assets/img/cineone.png";
import Ebv from "../../../assets/img/ebuid.png";
import Hiflix from "../../../assets/img/hiflix.png";
import "./index.css";

const FormManageSchedule = () => {
  return (
    <>
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
                  <Form.Group as={Col} controlId="formGridEmail" className="form__schedule--left">
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
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="form__ticket--price form__schedule--left"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Input ticket price" />
                  </Form.Group>
                  <Col className="schedule__date--range">
                    <Form.Group as={Col} controlId="formGridZip" className="schedule__date--start">
                      <Form.Label>Date Start</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Date End</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity" className="form__schedule--left">
                    <Form.Label>Premiere</Form.Label>
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
                    <Form.Label className="mx-2">Time</Form.Label>
                    <Col>
                      <Button className="schedule__premiere--add mx-2">+</Button>
                      <Button className="schedule__premiere--time mx-2">07:00am</Button>
                      <Button className="schedule__premiere--time mx-2">07:00am</Button>
                      <Button className="schedule__premiere--time mx-2">07:00am</Button>
                      <Button className="schedule__premiere--time mx-2">07:00am</Button>
                      <Button className="schedule__premiere--time mx-2">07:00am</Button>
                    </Col>
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
    </>
  );
};

export default FormManageSchedule;
