import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Image, ProgressBar, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Account from "../../components/Profile/Account";
import History from "../../components/Profile/History";
import User from "../../assets/img/user_icon.png";
import Dot from "../../assets/img/dot_3.png";
import Star from "../../assets/img/star.png";
import LoyalCard from "../../assets/img/loyalty card.png";
import { getDataUser, updateUserImage } from "../../stores/actions/user";
import "./index.css";

const Profile = (props) => {
  const target = useRef(null);

  const [userImage, setUserImage] = useState({ image: null });
  const [show, setShow] = useState(false);

  const handleImageMenu = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const updateImage = () => {
    const formData = new FormData();
    for (const data in userImage) {
      formData.append(data, userImage[data]);
    }
    props
      .updateUserImage(formData)
      .then((res) => {
        toast.success(`${res.value.data.msg}`);
        props.getDataUser(props.user.dataUser.id);
      })
      .catch((err) => {
        toast.error(`${err.response.data.msg}`);
      });
  };

  const onClickInput = () => {
    target.current.click();
  };

  useEffect(() => {
    userImage.image ? updateImage() : null;
    document.title = "Profile";
  }, [userImage]);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Container fluid className="user__Page">
        <Row className="user">
          <Col xs={12} sm={12} md={3}>
            <div className="user__info">
              <div className="user__info--top">
                <h6>INFO</h6>
                <img src={Dot} alt="" onClick={handleImageMenu} className="to__image__menu" />
                {!show ? null : (
                  <div className="position-absolute image__menu">
                    <input
                      type="file"
                      onChange={(event) => setUserImage({ image: event.target.files[0] })}
                      name="image"
                      id="image"
                      ref={target}
                      style={{ display: "none" }}
                    />
                    <ul>
                      <li className="image__menu--item" onClick={onClickInput}>
                        Update image
                      </li>
                      {/* <li>Delete image</li> */}
                    </ul>
                  </div>
                )}
              </div>
              <div className="user__info--middle">
                <Image
                  src={
                    props.user.dataUser.image
                      ? `${process.env.REACT_APP_URL_BACKEND}/uploads/user/${props.user.dataUser.image}`
                      : User
                  }
                  className="user__info--image"
                  roundedCircle
                />
                <h5>{`${props.user.dataUser.firstName} ${props.user.dataUser.lastName}`}</h5>
                <p>Moviegoers</p>
              </div>
              <hr />
              <div className="user__info--bottom">
                <h6>Loyalty Points</h6>
              </div>
              <div className="member__card">
                <div className="container" style={{ paddingLeft: "0px" }}>
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  getDataUser,
  updateUserImage
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
