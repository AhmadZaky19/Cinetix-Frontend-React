import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import Ebv from "../../../assets/img/ebuid.png";
import CineOne from "../../../assets/img/cineone.png";
import Hiflix from "../../../assets/img/hiflix.png";
import "./index.css";

const History = () => {
  return (
    <>
      <div className="user__data--orderHistory">
        <Card class="order__history">
          <Row>
            <Col md={9} className="order__history--desc">
              <p style={{ color: "#AAAAAA" }}>Tuesday, 07 July 2020 - 04:30pm</p>
              <h4>Spider-man: Homecoming</h4>
            </Col>
            <Col md={3}>
              {" "}
              <Card.Img variant="top" src={Ebv} className="order__history--image" />
            </Col>
          </Row>
          <hr />
          <Card.Body>
            <div className="order__history--ticket">
              <Button variant="success" className="order__history--button1 mx-2">
                Ticket in active
              </Button>
              <div className="order__history--details">
                <h5>Show Details</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card class="order__history">
          <Row>
            <Col md={9} className="order__history--desc">
              <p style={{ color: "#AAAAAA" }}>Tuesday, 07 July 2020 - 04:30pm</p>
              <h4>Spider-man: Homecoming</h4>
            </Col>
            <Col md={3}>
              {" "}
              <Card.Img variant="top" src={Hiflix} className="order__history--image" />
            </Col>
          </Row>
          <hr />
          <Card.Body>
            <div className="order__history--ticket">
              <Button variant="success" className="order__history--button2 mx-2">
                Ticket used
              </Button>
              <div className="order__history--details">
                <h5>Show Details</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default History;
