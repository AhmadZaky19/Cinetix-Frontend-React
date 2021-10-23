import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TickitzPurple from "../../assets/img/tickitz purple.png";
import EbvId from "../../assets/img/ebuid.png";
import CineOne21 from "../../assets/img/cineone.png";
import Hiflix from "../../assets/img/hiflix.png";
import Facebook from "../../assets/img/v-facebook.png";
import Instagram from "../../assets/img/v-instagram.png";
import Twitter from "../../assets/img/v-twitter.png";
import Youtube from "../../assets/img/v-youtube.png";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <img src={TickitzPurple} alt="" />
            <p>
              Stop waiting in line. Buy tickets <br /> conveniently, watch movies quietly.
            </p>
          </Col>
          <Col sm={12} md={2}>
            <h5 className="footer__item">Explore</h5>
            <p>Cinemas</p>
            <p>Movies List</p>
            <p>My Ticket</p>
            <p>Notification</p>
          </Col>
          <Col sm={12} md={2}>
            <h5 className="footer__item">Our Sponsor</h5>
            <div>
              <img src={EbvId} alt="" className="footer__item--img" />
              <img src={CineOne21} alt="" className="footer__item--img" />
              <img src={Hiflix} alt="" className="footer__item--img" />
            </div>
          </Col>
          <Col sm={12} md={{ span: 3, offset: 1 }}>
            <h5 className="footer__item">Follow us</h5>
            <div className="footer__item--media">
              <img src={Facebook} alt="" className="footer__item--mediaFb" />
              <p>Tickitz Cinema id</p>
            </div>
            <div className="footer__item--media">
              <img src={Instagram} alt="" />
              <p>tickitz.id</p>
            </div>
            <div className="footer__item--media">
              <img src={Twitter} alt="" />
              <p>tickitz.id</p>
            </div>
            <div className="footer__item--media">
              <img src={Youtube} alt="" />
              <p>Tickitz Cinema id</p>
            </div>
          </Col>
        </Row>
        <Row className="footer__end">
          <p className="footer__end">© 2020 Tickitz. All Rights Reserved.</p>
        </Row>
      </Container>
    );
  }
}

export default Footer;
