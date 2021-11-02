import React from "react";
import { Container, Row, Col, Image, ProgressBar, Tab, Tabs } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Account from "../../components/Profile/Account";
import History from "../../components/Profile/History";
import User from "../../assets/img/user_icon.png";
import Dot from "../../assets/img/dot_3.png";
import Star from "../../assets/img/star.png";
import LoyalCard from "../../assets/img/loyalty card.png";
import "./index.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="user__Page">
        <Row className="user">
          <Col xs={12} sm={12} md={3}>
            <div className="user__info">
              <div className="user__info--top">
                <h6>INFO</h6>
                <img src={Dot} alt="" />
              </div>
              <div className="user__info--middle">
                <Image src={User} className="user__info--image" roundedCircle />
                <h5>Ahmad Zaky</h5>
                <p>Moviegoers</p>
              </div>
              <hr />
              <div className="user__info--bottom">
                <h6>Loyalty Points</h6>
              </div>
              <div className="container member__card" style={{ paddingLeft: "0px" }}>
                <img src={LoyalCard} alt="" />
                <div className="member__card--desc">
                  {" "}
                  <h5>Moviegoers</h5>
                  <div style={{ display: "flex", paddingTop: "30px" }}>
                    <h5>320</h5>
                    <p>points</p>
                  </div>
                </div>
              </div>
              <img src={Star} alt="" className="member__star" />
              <div className="user__info--progress">
                <p>180 points become a master</p>
                <ProgressBar variant="custom" now={50} className="user__info__progress--bar" />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <Tabs
              defaultActiveKey="account settings"
              id="uncontrolled-tab-example"
              className="user__data"
            >
              <Tab eventKey="account settings" title="Account Settings" className="user__data--tab">
                <Account />
              </Tab>
              <Tab eventKey="order history" title="Order History">
                <History />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      ;
      <Footer />
    </>
  );
};

export default Profile;
