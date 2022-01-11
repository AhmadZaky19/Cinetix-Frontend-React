import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CineOne21 from "../../../assets/img/cineone.png";
import Hiflix from "../../../assets/img/hiflix.png";
import EbvId from "../../../assets/img/ebuid.png";
import "./index.css";
import "../../../assets/css/seatStyle.css";
import axios from "../../../utils/axios";

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSeat: ["A", "B", "C", "D", "E", "F", "G"],
      leftSideSeat: [1, 2, 3, 4, 5, 6, 7],
      rightSideSeat: [8, 9, 10, 11, 12, 13, 14],
      reserved: [],
      selected: [],
      selectedSeat: [],
      data: props.location.state,
      dataMovie: {}
    };
  }

  selectSeat = (data) => {
    if (this.state.selectedSeat.includes(data)) {
      const deleteSeat = this.state.selectedSeat.filter((el) => {
        return el !== data;
      });
      this.setState({
        selectedSeat: deleteSeat
      });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, data]
      });
    }
  };

  getMovieById = async () => {
    try {
      const result = await axios.get(`movie/${this.state.data.movieId}`);
      this.setState({
        dataMovie: result.data.data[0]
      });
    } catch (error) {}
  };

  componentDidMount() {
    this.getMovieById();
    document.title = "Order";
  }
  render() {
    const rowSeat = this.state.listSeat;
    const { leftSideSeat, rightSideSeat } = this.state;
    const totalTicket = this.state.selectedSeat.length;
    const totalAmount = totalTicket * this.state.data.price;

    let seatChoosed = this.state.selectedSeat.join(", ");

    const handleToPayment = () => {
      const sendData = {
        id_schedule: this.state.data.id_schedule,
        time: this.state.data.time,
        date: this.state.data.date,
        name: this.state.dataMovie,
        premiere: this.state.data.premiere,
        seat: this.state.selectedSeat,
        totalAmount
      };
      this.props.history.push("/payment", sendData);
    };
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
                    <h3>{this.state.dataMovie.name}</h3>
                    <Button className="movieBook__desc--change">
                      <Link to="/" className="back__to__home">
                        Change movie
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <h2 className="chooseSeat">Choose Your Seat</h2>
              <div className="seat-selector mt-4">
                <div className="card seat">
                  <div className="screen">
                    <span>Screen</span>
                    <div className="screen-layout"></div>
                  </div>
                  <div className="card-body ">
                    {rowSeat.map((item, index) => (
                      <div className="row row__seat" key={index}>
                        <div className="col alphabet">{rowSeat[index]}</div>
                        {leftSideSeat.map((itemLeft) => (
                          <div className="col col__seat" key={`${rowSeat[index]}${itemLeft}`}>
                            <div
                              className={`seat__list ${
                                this.state.reserved.includes(`${rowSeat[index]}${itemLeft}`)
                                  ? "seat__list--sold"
                                  : this.state.selectedSeat.includes(`${rowSeat[index]}${itemLeft}`)
                                  ? "seat__list--selected"
                                  : "seat__list--available"
                              }  seat__list--available`}
                              onClick={() => {
                                this.selectSeat(`${rowSeat[index]}${itemLeft}`);
                              }}
                            ></div>
                          </div>
                        ))}
                        <div className="col col__separator"></div>
                        {rightSideSeat.map((itemRight) => (
                          <div className="col col__seat" key={`${rowSeat[index]}${itemRight}`}>
                            <div
                              className={`seat__list ${
                                this.state.reserved.includes(`${rowSeat[index]}${itemRight}`)
                                  ? "seat__list--sold"
                                  : this.state.selectedSeat.includes(
                                      `${rowSeat[index]}${itemRight}`
                                    )
                                  ? "seat__list--selected"
                                  : "seat__list--available"
                              }  seat__list--available`}
                              onClick={() => {
                                this.selectSeat(`${rowSeat[index]}${itemRight}`);
                              }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="seating-key px-4">
                    <span>Seating key</span>
                    <div className="seat-desc">
                      <div className="seat-item seat-available">
                        <div className="seat__desc-item available"></div>
                        <span>Available</span>
                      </div>
                      <div className="seat-item seat-available">
                        <div className="seat__desc-item selected"></div>
                        <span>Selected</span>
                      </div>
                      <div className="seat-item seat-available">
                        <div className="seat__desc-item love-nest"></div>
                        <span>Love-Nest</span>
                      </div>
                      <div className="seat-item seat-available">
                        <div className="seat__desc-item sold"></div>
                        <span>Sold</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seat__booking desktop__only">
                <Button href="/" className="seat__booking--change">
                  <Link to="/" className="back__to__home">
                    Change your movie
                  </Link>
                </Button>
                <Button className="seat__booking--book" onClick={handleToPayment}>
                  Checkout now
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} className="order__info">
              {" "}
              <h2>Order Info</h2>
              <Card className="card order__info--card">
                <Card.Body className="right">
                  <Col className="text-center">
                    <img
                      src={
                        this.state.data.premiere === "hiflix"
                          ? Hiflix
                          : this.state.data.premiere === "ebu.id"
                          ? EbvId
                          : CineOne21
                      }
                      className="order__info--img"
                      alt="cinema"
                    />
                    <h3 className="order__info--text">{this.state.data.premiere}</h3>
                    <p className="mobile__only">{this.state.dataMovie.name}</p>
                    <div className="summary desktop__only">
                      <p className="summary__order--field">Movie Selected</p>
                      <p className="summary__order--desc">{this.state.dataMovie.name}</p>
                    </div>
                    <div className="summary">
                      <p className="summary__order--field">
                        {new Date(this.state.data.date).toDateString()}
                      </p>
                      <p className="summary__order--desc">{this.state.data.time}</p>
                    </div>
                    <div className="summary">
                      <p className="summary__order--field">One Ticket Price</p>
                      <p className="summary__order--desc">${this.state.data.price}</p>
                    </div>
                    <div className="summary">
                      <p className="summary__order--field">Seat Choosed</p>
                      <p className="summary__order--desc">{seatChoosed}</p>
                    </div>
                    <hr />
                    <div className="total">
                      <div className="total__caption">
                        <h4>Total Payment</h4>
                      </div>
                      <div className="total__caption">
                        <h4 className="total__caption--price">${totalAmount}</h4>
                      </div>
                    </div>
                  </Col>
                </Card.Body>
              </Card>
              <div>
                <Button className="seat__booking--bookMobile" onClick={handleToPayment}>
                  Checkout now
                </Button>
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
