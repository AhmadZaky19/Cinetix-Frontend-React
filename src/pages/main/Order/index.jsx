import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CineOne21 from "../../../assets/img/cineone.png";
import "./index.css";

class OrderPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container fluid className="order__page">
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className="desktop__only">
                <h2>Movie Selected</h2>
                <Card className="movieBook">
                  <Card.Body className="movieBook__desc">
                    <h3>Spiderman Homecoming</h3>
                    <Button className="movieBook__desc--change">Change movie</Button>
                  </Card.Body>
                </Card>
              </div>
              <h2 className="chooseSeat">Choose Your Seat</h2>
              <div className="seat">
                <Card className="card">
                  <Card.Body className="card-body">
                    <h1>Coming Soon</h1>
                  </Card.Body>
                </Card>
              </div>
              <div className="seat__booking desktop__only">
                <Button className="seat__booking--change">Change your movie</Button>
                <Button className="seat__booking--book">Checkout now</Button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} className="order__info">
              {" "}
              <h2>Order Info</h2>
              <Card className="card">
                <Card.Body className="right">
                  <Col className="text-center">
                    <img src={CineOne21} className="order__info--img" alt="cinema" />
                    <h3 className="order__info--text">CineOne21 Cinema</h3>
                    <p className="mobile__only">Spider-man: Homecoming</p>
                    <div className="summary desktop__only">
                      <p className="summary__order--field">Movie Selected</p>
                      <p className="summary__order--desc">Spider-man: Homecoming</p>
                    </div>
                    <div className="summary">
                      <p className="summary__order--field">Tuesday, 07 July 2020</p>
                      <p className="summary__order--desc">02:00pm</p>
                    </div>
                    <div className="summary">
                      <p className="summary__order--field">One Ticket Price</p>
                      <p className="summary__order--desc">$10</p>
                    </div>
                    <div className="summary">
                      <p className="summary__order--field">Seat Choosed</p>
                      <p className="summary__order--desc">C4, C5, C6</p>
                    </div>
                    <hr />
                    <div className="total">
                      <div className="total__caption">
                        <h4>Total Payment</h4>
                      </div>
                      <div className="total__caption">
                        <h4 className="total__caption--price">$30</h4>
                      </div>
                    </div>
                  </Col>
                </Card.Body>
              </Card>
              <div>
                <Button className="seat__booking--bookMobile">Checkout now</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default OrderPage;
