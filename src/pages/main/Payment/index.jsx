import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AiFillWarning } from "react-icons/ai";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { postBooking } from "../../../stores/actions/booking";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "./Payment.module.css";
import Gpay from "../../../assets/img/Gpay.png";
import Visa from "../../../assets/img/visa.png";
import Gopay from "../../../assets/img/GoPay.png";
import Paypal from "../../../assets/img/paypal.png";
import Dana from "../../../assets/img/dana.png";
import Bca from "../../../assets/img/bca.png";
import Bri from "../../../assets/img/bri.png";
import Ovo from "../../../assets/img/ovo.png";

const PaymentPage = (props) => {
  const history = useHistory();
  const data = props.history.location.state;

  const handleToTicket = async () => {
    try {
      const sendData = {
        userId: props.user.dataUser.id,
        scheduleId: data.id_schedule,
        movieId: data.name.id,
        movie: data.name,
        dateBooking: data.date,
        timeBooking: data.time,
        totalPayment: data.totalAmount,
        paymentMethod: "midtrans",
        statusPayment: "success",
        seat: data.seat
      };
      const response = await props.postBooking(sendData);
      toast.success(`${response.value.data.msg}`);
      history.push("/ticket", sendData);
    } catch (error) {
      toast.error(`${error.response.data.msg}`);
    }
  };

  useEffect(() => {
    document.title = "Payment";
  }, []);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Container fluid className={`${styles.payment__page}`}>
        <Row className={`${styles.payment__page__row}`}>
          <Col xs={12} sm={12} md={8}>
            <div className={`${styles.mobile__only__payment}`}>
              <p className={`${styles.order__summary__item}`}>Total payment</p>
              <p className={`${styles.order__summary__price}`}>${data.totalAmount},00</p>
            </div>
            <div className={`${styles.desktop__only}`}>
              <h2>Payment Info</h2>
              <Card className={`${styles.card__payment}`}>
                <ul className={`list-group list-group-flush ${styles.listOrder}`}>
                  <li className={`list-group-item ${styles.listOrder__item}`}>
                    <div className={`${styles.order__summary}`}>
                      <p className={`${styles.order__summary__item}`}>Date & time</p>
                      <p className={`${styles.order__summary__desc}`}>
                        {new Date(data.date).toDateString()} at {data.time}
                      </p>
                    </div>
                  </li>
                  <li className={`list-group-item ${styles.listOrder__item}`}>
                    <div className={`${styles.order__summary}`}>
                      <p className={`${styles.order__summary__item}`}>Movie title</p>
                      <p className={`${styles.order__summary__desc}`}>{data.name.name}</p>
                    </div>
                  </li>
                  <li className={`list-group-item ${styles.listOrder__item}`}>
                    <div className={`${styles.order__summary}`}>
                      <p className={`${styles.order__summary__item}`}>Cinema name</p>
                      <p className={`${styles.order__summary__desc}`}>{data.premiere}</p>
                    </div>
                  </li>
                  <li className={`list-group-item ${styles.listOrder__item}`}>
                    <div className={`${styles.order__summary}`}>
                      <p className={`${styles.order__summary__item}`}>Number of tickets</p>
                      <p className={`${styles.order__summary__desc}`}>{data.seat.length} pieces</p>
                    </div>
                  </li>
                  <li className={`list-group-item ${styles.listOrder__item}`}>
                    <div className={`${styles.order__summary}`}>
                      <p className={`${styles.order__summary__item}`}>Total payment</p>
                      <p className={`${styles.order__summary__price}`}>${data.totalAmount},00</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
            <h2 className={`${styles.header__mobile}`}>Payment Method</h2>
            <h2 className={`${styles.header__desktop}`}>Choose a Payment Method</h2>
            <div className={`${styles.payment}`}>
              <div className={`row row-cols-sm-3 row-cols-md-4 g-4 ${styles.payment__list}`}>
                <div className={`col ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img src={Gpay} className={`card-img-top ${styles.payment__img}`} alt="gpay" />
                  </div>
                </div>
                <div className={`col ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img src={Visa} className={`card-img-top ${styles.payment__img}`} alt="visa" />
                  </div>
                </div>
                <div className={`col ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img
                      src={Gopay}
                      className={`card-img-top ${styles.payment__img}`}
                      alt="gopay"
                    />
                  </div>
                </div>
                <div className={`col ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img
                      src={Paypal}
                      className={`card-img-top ${styles.payment__img}`}
                      alt="paypal"
                    />
                  </div>
                </div>
                <div className={`col ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img src={Dana} className={`card-img-top ${styles.payment__img}`} alt="dana" />
                  </div>
                </div>
                <div className={`col ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img src={Bca} className={`card-img-top ${styles.payment__img}`} alt="bca" />
                  </div>
                </div>
                <div className={`col ${styles.desktop__only} ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img src={Bri} className={`card-img-top ${styles.payment__img}`} alt="bri" />
                  </div>
                </div>
                <div className={`col ${styles.desktop__only} ${styles.payment__list__item}`}>
                  <div className="card border-0">
                    <img src={Ovo} className={`card-img-top ${styles.payment__img}`} alt="ovo" />
                  </div>
                </div>
              </div>
              <div className={`${styles.section_or}`}>
                <span className={`${styles.section_or_line}`}></span>
                <h2>Or</h2>
                <span className={`${styles.section_or_line}`}></span>
              </div>
              <div className={`${styles.reset}`}>
                <p>
                  Pay via cash. <a href="">See how it work</a>
                </p>
              </div>
            </div>
            <div className={`${styles.pay__booking}`}>
              <Button variant="primary" className={`${styles.pay__booking__back}`}>
                Previous step
              </Button>
              <Button
                variant="primary"
                className={`${styles.pay__booking__payment}`}
                onClick={handleToTicket}
              >
                Pay your order
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className={`${styles.personal}`}>
              <h2>Personal Info</h2>
              <div className="card">
                <div className={`card-body ${styles.right}`}>
                  <div className="mb-3">
                    <label htmlFor="text" className={`form-label ${styles.formLabel}`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.formInput}`}
                      placeholder="Write your full name"
                      value={`${props.user.dataUser.firstName} ${props.user.dataUser.lastName}`}
                      readOnly={true}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${styles.formLabel}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${styles.formInput}`}
                      placeholder="Write your email"
                      value={props.user.dataUser.email}
                      readOnly={true}
                    />{" "}
                  </div>
                  <label htmlFor="phone number" className={`form-label ${styles.formLabel}`}>
                    Phone Number
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id={`${styles.basic_addon1}`}>
                      +62
                    </span>
                    <input
                      type="text"
                      className={`form-control ${styles.formInput}`}
                      placeholder="Phone number"
                      aria-label="phone number"
                      aria-describedby="basic-addon1"
                      value={props.user.dataUser.phoneNumber}
                      readOnly={true}
                    />
                  </div>
                  <div className={`${styles.warning}`}>
                    <span>
                      {" "}
                      <AiFillWarning size={32} style={{ color: "#F4B740" }} />
                    </span>
                    <p className={`${styles.warning_p}`}> Fill your data correctly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.checkout__mobile}`}>
              <Button className={`${styles.seat__booking__bookMobile}`}>Pay your order</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  booking: state.booking
});

const mapDispatchToProps = {
  postBooking
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
