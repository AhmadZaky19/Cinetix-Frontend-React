import React from "react";
import { Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import LionKing from "../../../assets/img/Lionking.png";
import "./index.css";

const FormManageMovie = () => {
  return (
    <>
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
                  <Form.Group as={Col} controlId="formGridEmail" className="form__left">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="text" placeholder="Type movie name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Type movie category" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail" className="form__left">
                    <Form.Label>Director</Form.Label>
                    <Form.Control type="text" placeholder="Type movie director" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Casts</Form.Label>
                    <Form.Control type="text" placeholder="Type movie casts" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity" className="form__left">
                    <Form.Label>Release date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Col className="movie__duration--time">
                    <Form.Group as={Col} controlId="formGridZip" className="movie__duration--hour">
                      <Form.Label>Duration Hour</Form.Label>
                      <Form.Control type="text" placeholder="Hour..." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Duration Minute</Form.Label>
                      <Form.Control type="text" placeholder="Minute..." />
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
                <Form.Control as="textarea" rows={3} placeholder="Type movie synopsis" />
              </Form.Group>
            </Form>
          </Row>
          <div className="movie__admin--button">
            <Button className="movie__admin__button--reset">Reset</Button>
            <Button className="movie__admin__button--submit">Submit</Button>
          </div>
        </Card>
      </Row>
    </>
  );
};

export default FormManageMovie;
